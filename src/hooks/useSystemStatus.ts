"use client";
import { useState, useEffect, useCallback } from "react";

type SystemStatus = "operational" | "degraded" | "outage" | "loading";

interface StatusResult {
  status: SystemStatus;
  lastChecked: Date | null;
  isStale: boolean;
}

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes in milliseconds
const STATUS_URL = "/api/status";

// In-memory cache
let cachedStatus: {
  status: SystemStatus;
  timestamp: number;
} | null = null;

export function useSystemStatus(): StatusResult {
  const [status, setStatus] = useState<SystemStatus>("loading");
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkStatus = useCallback(async () => {
    // Check if we have cached data that's still fresh
    if (cachedStatus && Date.now() - cachedStatus.timestamp < CACHE_DURATION) {
      setStatus(cachedStatus.status);
      setLastChecked(new Date(cachedStatus.timestamp));
      return;
    }

    try {
      const response = await fetch(STATUS_URL, {
        method: "GET",
        cache: "no-cache",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Status check response:", data);

        const newStatus: SystemStatus = data.status;
        const timestamp = Date.now();

        console.log("Setting status to:", newStatus);

        // Update cache
        cachedStatus = {
          status: newStatus,
          timestamp,
        };

        setStatus(newStatus);
        setLastChecked(new Date(timestamp));
      } else {
        throw new Error(`API returned ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to check system status - network error:", error);
      const newStatus: SystemStatus = "outage";
      const timestamp = Date.now();

      console.log("Setting status to outage due to error");

      // Update cache with error state
      cachedStatus = {
        status: newStatus,
        timestamp,
      };

      setStatus(newStatus);
      setLastChecked(new Date(timestamp));
    }
  }, []);

  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  const isStale = lastChecked
    ? Date.now() - lastChecked.getTime() > CACHE_DURATION
    : true;

  return {
    status,
    lastChecked,
    isStale,
  };
}