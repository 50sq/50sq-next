import React from "react";

export function HomeHeroSquares() {
  return (
    <div className="flex h-screen flex-col items-center justify-center border-b border-neutral-100 dark:border-neutral-800">
      <Background />
      <Content />
    </div>
  );
}

const Content = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-balance mx-auto max-w-5xl text-center text-7xl font-bold text-primary md:text-6xl">
        Transform your photography business with the{" "}
        <span className="relative z-20 inline-block rounded-xl bg-primary/20 px-4 py-2 text-primary underline decoration-primary decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          professional
        </span>{" "}
        platform you deserve.
      </h1>
      <p className="text-balance mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
        Streamline your workflow, deliver exceptional client experiences, and
        grow your business with our comprehensive photography platform designed
        by photographers, for photographers.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="w-40 rounded-lg bg-gradient-to-b from-neutral-950 to-neutral-800 px-4 py-2 text-sm text-white">
          Start Free Trial
        </button>
        <button className="w-40 rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-50 px-4 py-2 text-sm text-black">
          View Features
        </button>
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden [perspective:1000px] [transform-style:preserve-3d] bg-white">
      <Rectangles stroke="#383120" />
    </div>
  );
};

const Rectangles = ({
  stroke = "#222",
}: {
  stroke?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="z-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <rect
          className="text-background"
          fill="currentColor"
          width="1920"
          height="1080"
        />
        <defs>
          <path
            id="a"
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            d="M0 540h1920"
          />
        </defs>
        <rect fill="#000" width="1920" height="540" />
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          d="M20.6 540-9 543.7M81.2 540-9 552.1M141.8 540-9 561.7M202.4 540-9 572.9M263 540-9 586M323.6 540-9 601.6M384.2 540-9 620.5M444.8 540-9 643.8M505.4 540-9 673.4M566 540-9 712M626.6 540-9 764.7M687.2 540-9 840.8M747.8 540-9 960.4M808.4 540l-694.3 540M869 540l-416.6 540M929.6 540l-138.8 540M990.2 540l138.9 540M1050.8 540l416.6 540M1805.8 1080l-694.4-540M1929 960.5 1172 540M1929 840.9 1232.6 540M1929 764.8 1293.2 540M1929 712l-575.2-172M1929 673.4 1414.4 540M1929 643.8 1475 540M1929 620.5 1535.6 540M1929 601.6 1596.2 540M1929 586l-272.2-46M1929 572.9 1717.4 540M1929 561.7 1778 540M1929 552.1l-90.4-12.1M1929 543.7l-29.8-3.7"
        />
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-1"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-1.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-2"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-2.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-3"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-3.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-4"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-4.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-5.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-6"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-6.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-7"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-7.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-8"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-8.5"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-9"
          />
        </use>
        <use href="#a">
          <animate
            attributeName="y"
            values="0;540"
            dur="10"
            calcMode="spline"
            keySplines=".8 0 1 .2"
            repeatCount="999"
            begin="-9.5"
          />
        </use>
      </svg>
    </div>
  );
};
