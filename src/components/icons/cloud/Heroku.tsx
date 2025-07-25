import type { SVGProps } from "react";

export default function HerokuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 284.4"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#430098"
        d="M230 0c14 0 26 11 26 25v234c0 14-11 25-25 25H26c-14 0-26-11-26-25V26C0 12 11 0 25 0h1zm0 14H26c-7 0-12 5-12 11v234c0 6 5 11 11 11h205c7 0 12-5 12-11V26c0-7-5-12-12-12zM64 185l32 28-32 29zM92 43v80c15-4 34-9 54-9 17 0 28 7 34 12 12 13 12 28 12 30v86h-28v-85c-1-7-4-15-18-15-29 0-61 14-62 15l-20 9V43zm100 0c-2 16-8 31-21 46h-29c11-15 18-30 22-46z"
      />
    </svg>
  );
}