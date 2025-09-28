import {
  Camera,
  FolderOpen,
  ShoppingCart,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import React from "react";

import { SparklesCore } from "@/components/ui/sparkles";

const features = [
  {
    icon: Camera,
    title: "Smart Gallery Management",
    description:
      "Create stunning galleries with drag-and-drop organization, batch uploads, and automatic image optimization.",
  },
  {
    icon: FolderOpen,
    title: "Project Organization",
    description:
      "Organize shoots by projects with timeline tracking, client communication, and progress monitoring.",
  },
  {
    icon: Users,
    title: "Client Management",
    description:
      "Comprehensive client database with multi-user access, detailed profiles, and communication tools.",
  },
  {
    icon: ShoppingCart,
    title: "Built-in E-Commerce",
    description:
      "Sell prints and digital downloads directly from galleries with secure Stripe payment processing.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Track sales performance, popular products, and client behavior with detailed revenue insights.",
  },
  {
    icon: Shield,
    title: "Secure & Professional",
    description:
      "Password-protected galleries, secure file sharing, and professional branded links for your business.",
  },
];

const HomeFeatures = () => {
  return (
    <section
      className="bg-background text-foreground dark relative w-screen overflow-hidden pt-10"
      id="features"
    >
      <div className="container relative flex h-full flex-col items-center justify-center mx-auto">
        <div className="w-full max-w-lg text-center">
          <h1 className="relative z-20 text-center text-5xl font-semibold tracking-tighter md:text-6xl lg:text-7xl">
            Features
          </h1>
          <p className="text-muted-foreground/90 mt-4">
            Everything you need to run a successful photography business in one
            powerful platform.
          </p>
        </div>
        <div className="relative mb-10 mt-5 h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-amber-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            className="h-full w-full"
            particleColor="#F5C900"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="bg-background absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_130px_at_top,transparent_20%,white)]"></div>
        </div>

        <div className="gap-15 grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <IconComponent className="w-16 stroke-2 text-primary/90" />
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">{feature.title}</h4>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { HomeFeatures };
