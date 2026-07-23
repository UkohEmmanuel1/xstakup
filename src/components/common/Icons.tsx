"use client";

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function createIcon(path: string) {
  return ({ size = 24, className, ...props }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {path}
    </svg>
  );
}

export const CodeIcon = createIcon(
  <>
    <path d="M8 7L3 12L8 17" />
    <path d="M16 7L21 12L16 17" />
    <path d="M14 4L10 20" />
  </>
);

export const GlobeIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="3" ry="9" />
    <path d="M3 12H21" />
  </>
);

export const SmartphoneIcon = createIcon(
  <>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" />
  </>
);

export const CloudIcon = createIcon(
  <>
    <path d="M17 18C19.2 18 21 16.2 21 14C21 11.8 19.2 10 17 10C16.8 7.5 14.8 5.5 12 5.5C9.2 5.5 7.2 7.5 7 10C4.8 10 3 11.8 3 14C3 16.2 4.8 18 7 18H17Z" />
  </>
);

export const BrainIcon = createIcon(
  <>
    <path d="M12 4C9.5 4 7.5 6 7.5 8.5C7.5 9.5 7.8 10.3 8.5 11C7.5 11.5 7 12.5 7 13.5C7 15 8 16.5 9.5 17" />
    <path d="M12 4C14.5 4 16.5 6 16.5 8.5C16.5 9.5 16.2 10.3 15.5 11C16.5 11.5 17 12.5 17 13.5C17 15 16 16.5 14.5 17" />
    <path d="M12 4V20" />
    <path d="M9.5 17C8.5 17.5 8 18.5 8 19.5C8 20.5 9 21.5 10 21.5C11 21.5 11.5 21 12 20" />
    <path d="M14.5 17C15.5 17.5 16 18.5 16 19.5C16 20.5 15 21.5 14 21.5C13 21.5 12.5 21 12 20" />
  </>
);

export const WalletIcon = createIcon(
  <>
    <rect x="2" y="6" width="20" height="13" rx="2" />
    <path d="M2 10H22" />
    <circle cx="18" cy="13" r="1.5" />
  </>
);

export const HexagonIcon = createIcon(
  <>
    <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" />
  </>
);

export const ServerIcon = createIcon(
  <>
    <rect x="3" y="3" width="18" height="6" rx="1" />
    <rect x="3" y="9" width="18" height="6" rx="1" />
    <rect x="3" y="15" width="18" height="6" rx="1" />
    <circle cx="7" cy="6" r="0.5" />
    <circle cx="7" cy="12" r="0.5" />
    <circle cx="7" cy="18" r="0.5" />
  </>
);

export const BuildingIcon = createIcon(
  <>
    <rect x="3" y="3" width="18" height="19" rx="1" />
    <line x1="8" y1="3" x2="8" y2="22" />
    <line x1="13" y1="3" x2="13" y2="22" />
    <line x1="18" y1="3" x2="18" y2="22" />
    <rect x="5" y="6" width="1.5" height="1.5" />
    <rect x="9.5" y="6" width="1.5" height="1.5" />
    <rect x="15" y="6" width="1.5" height="1.5" />
    <rect x="5" y="10" width="1.5" height="1.5" />
    <rect x="9.5" y="10" width="1.5" height="1.5" />
    <rect x="15" y="10" width="1.5" height="1.5" />
    <rect x="5" y="14" width="1.5" height="1.5" />
    <rect x="9.5" y="14" width="1.5" height="1.5" />
    <rect x="15" y="14" width="1.5" height="1.5" />
    <rect x="5" y="18" width="1.5" height="1.5" />
    <rect x="9.5" y="18" width="1.5" height="1.5" />
    <rect x="15" y="18" width="1.5" height="1.5" />
  </>
);

export const SparklesIcon = createIcon(
  <>
    <path d="M12 3L12 8" />
    <path d="M12 16L12 21" />
    <path d="M3 12L8 12" />
    <path d="M16 12L21 12" />
    <path d="M5.5 5.5L8 8" />
    <path d="M16 16L18.5 18.5" />
    <path d="M18.5 5.5L16 8" />
    <path d="M8 16L5.5 18.5" />
  </>
);

export const BookOpenIcon = createIcon(
  <>
    <path d="M2 4.5C2 3.12 3.12 2 4.5 2H9L12 5L15 2H19.5C20.88 2 22 3.12 22 4.5V18.5C22 19.88 20.88 21 19.5 21H15C13.5 21 12 22 12 22C12 22 10.5 21 9 21H4.5C3.12 21 2 19.88 2 18.5V4.5Z" />
    <path d="M12 5V19" />
  </>
);

export const CartIcon = createIcon(
  <>
    <circle cx="8" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2 3H5L7.5 14H18.5L21 6H6" />
  </>
);

export const TruckIcon = createIcon(
  <>
    <rect x="2" y="8" width="14" height="10" rx="1" />
    <path d="M16 12H20L22 14V18H16" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
    <path d="M6 18H7" />
    <path d="M17 18H18" />
  </>
);

export const CameraIcon = createIcon(
  <>
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <circle cx="12" cy="13" r="4" />
    <path d="M16 3L18 6H21" />
    <circle cx="12" cy="13" r="1.5" />
  </>
);

export const BriefcaseIcon = createIcon(
  <>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <rect x="7" y="3" width="10" height="4" rx="1" />
    <path d="M12 12V14" />
    <line x1="2" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="22" y2="12" />
  </>
);

export const StoreIcon = createIcon(
  <>
    <rect x="2" y="4" width="20" height="4" rx="1" />
    <path d="M4 8V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V8" />
    <rect x="9" y="13" width="6" height="8" />
  </>
);
