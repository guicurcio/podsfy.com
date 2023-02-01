/**
 * This component
 */
export default function PodShadow() {
  return (
    <svg
      viewBox="0 0 1920 396"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute opacity-60 z-10"
    >
      <path d="M0 0H1920V396H0V0Z" fill="url(#paint0_linear_2_331)" />
      <path d="M0 0H1920V396H0V0Z" fill="url(#paint1_radial_2_331)" />
      <defs>
        <linearGradient
          id="paint0_linear_2_331"
          x1="957.5"
          y1={396}
          x2="957.5"
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D0E12" />
          <stop offset="0.133333" stop-opacity={0} />
        </linearGradient>
        <radialGradient
          id="paint1_radial_2_331"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(957.5 315) rotate(18.2103) scale(1007.98 598.447)"
        >
          <stop offset="0.515161" stop-opacity="0.1" />
          <stop offset={1} stop-color="#0D0E12" />
        </radialGradient>
      </defs>
    </svg>
  );
}
