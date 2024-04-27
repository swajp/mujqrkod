import { cn } from "@/lib/utils";

export default function DrieLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-6", className)}
      viewBox="0 0 648 515"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 346.787L373.622 130.045L560.432 238.416C663.605 298.267 663.605 395.306 560.432 455.158C457.26 515.009 289.984 515.009 186.811 455.158L0 346.787Z"
        fill="url(#paint0_linear_124_117)"
      />
      <path
        d="M0 216.742L373.622 2.50377e-05L560.432 108.371C663.605 168.222 663.605 265.261 560.432 325.112C457.26 384.964 289.984 384.964 186.811 325.112L0 216.742Z"
        fill="url(#paint1_linear_124_117)"
      />
      <path
        d="M0 281.764L373.622 65.0226L560.432 173.393C663.605 233.245 663.605 330.283 560.432 390.135C457.26 449.986 289.984 449.986 186.811 390.135L0 281.764Z"
        fill="url(#paint2_linear_124_117)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_124_117"
          x1="186.811"
          y1="238.416"
          x2="374.961"
          y2="562.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.33" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_124_117"
          x1="186.811"
          y1="108.371"
          x2="374.961"
          y2="432.706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.72" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_124_117"
          x1="186.811"
          y1="173.393"
          x2="374.961"
          y2="497.729"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D9D9D9" />
          <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}
