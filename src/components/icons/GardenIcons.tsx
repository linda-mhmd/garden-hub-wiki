import type { CSSProperties } from 'react';

type IconProps = { size?: number; className?: string; style?: CSSProperties };

function Icon({ size, className, style, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      {children}
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34C2.98 20.61 1 20 1 20C3 14 6 4 18 2C18.5 5 18 7 17 8Z" fill="currentColor" opacity="0.9"/>
      <path d="M17 8C17 8 12 9 9 13C7 16 7 18 7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" fill="currentColor"/>
      <path d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  );
}

export function DropIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2L6 10C4.5 12.5 4 14 4 16C4 19.31 7.58 22 12 22C16.42 22 20 19.31 20 16C20 14 19.5 12.5 18 10L12 2Z" fill="currentColor" opacity="0.85"/>
      <path d="M8 16C8 17.5 9.79 19 12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}

export function SeedIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <ellipse cx="12" cy="13" rx="7" ry="5" fill="currentColor" opacity="0.3"/>
      <path d="M12 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 14C12 14 9 11 9 8C9 5.79 10.34 4 12 4C13.66 4 15 5.79 15 8C15 11 12 14 12 14Z" fill="currentColor"/>
      <path d="M12 12C12 12 15 10 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </Icon>
  );
}

export function HarvestIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 12L12 7L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  );
}

export function FlowerIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
      <ellipse cx="12" cy="7" rx="2" ry="3" fill="currentColor" opacity="0.7"/>
      <ellipse cx="12" cy="17" rx="2" ry="3" fill="currentColor" opacity="0.7"/>
      <ellipse cx="7" cy="12" rx="3" ry="2" fill="currentColor" opacity="0.7"/>
      <ellipse cx="17" cy="12" rx="3" ry="2" fill="currentColor" opacity="0.7"/>
      <ellipse cx="8.5" cy="8.5" rx="2" ry="3" fill="currentColor" opacity="0.5" transform="rotate(-45 8.5 8.5)"/>
      <ellipse cx="15.5" cy="15.5" rx="2" ry="3" fill="currentColor" opacity="0.5" transform="rotate(-45 15.5 15.5)"/>
      <ellipse cx="8.5" cy="15.5" rx="2" ry="3" fill="currentColor" opacity="0.5" transform="rotate(45 8.5 15.5)"/>
      <ellipse cx="15.5" cy="8.5" rx="2" ry="3" fill="currentColor" opacity="0.5" transform="rotate(45 15.5 8.5)"/>
    </Icon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="8" cy="15" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="15" r="1.2" fill="currentColor"/>
      <circle cx="16" cy="15" r="1.2" fill="currentColor"/>
    </Icon>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 3L3 6V21L9 18L15 21L21 18V3L15 6L9 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 3V18M15 6V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </Icon>
  );
}

export function WaterDropIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 8C5 8 3 10 3 13C3 16.5 7 19 12 19C17 19 21 16.5 21 13C21 10 19 8 19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 4V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 7C8 7 5 5 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M16 7C16 7 19 5 20 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </Icon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 12L12 4L21 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10V20H10V15H14V20H19V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 8L12 3L3 8V16L12 21L21 16V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M12 3V21M3 8L12 13L21 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </Icon>
  );
}

export function ThermometerIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2C10.34 2 9 3.34 9 5V14.26C7.79 15.09 7 16.46 7 18C7 20.21 8.79 22 11 22H13C15.21 22 17 20.21 17 18C17 16.46 16.21 15.09 15 14.26V5C15 3.34 13.66 2 12 2Z" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="18" r="2" fill="currentColor"/>
      <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  );
}

export function CloudRainIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 14C20.66 14 22 12.66 22 11C22 9.42 20.8 8.1 19.25 8.01C19.09 5.72 17.22 4 15 4C13.53 4 12.23 4.71 11.4 5.8C10.97 5.61 10.5 5.5 10 5.5C8.07 5.5 6.5 7.07 6.5 9C6.5 9.17 6.51 9.34 6.53 9.5H6C4.34 9.5 3 10.84 3 12.5C3 14.16 4.34 15.5 6 15.5H19V14Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 19V21M12 18V21M16 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 16C12 16 8 14 6 10C8 8 12 8 14 10C16 12 16 16 12 16Z" fill="currentColor" opacity="0.8"/>
      <path d="M12 13C12 13 14 11 18 12C18 15 16 17 12 16" fill="currentColor" opacity="0.5"/>
    </Icon>
  );
}

export function GardenBedIllustration({ width = 120, height = 80, color = '#2d4a28' }: { width?: number; height?: number; color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 80">
      <rect x="5" y="40" width="110" height="30" rx="3" fill="#8B6914" opacity="0.6"/>
      <rect x="2" y="35" width="116" height="38" rx="4" fill="none" stroke={color} strokeWidth="3"/>
      <ellipse cx="25" cy="50" rx="8" ry="4" fill="#8b6914" opacity="0.4"/>
      <ellipse cx="60" cy="53" rx="10" ry="3" fill="#8b6914" opacity="0.3"/>
      <ellipse cx="95" cy="49" rx="7" ry="3" fill="#8b6914" opacity="0.4"/>
      <g fill={color}>
        <path d="M20 35C20 35 17 28 15 22C19 20 23 22 23 22C21 28 20 35 20 35Z" opacity="0.9"/>
        <path d="M20 35C20 35 23 27 26 23C29 25 29 29 26 31C23 33 20 35 20 35Z" opacity="0.7"/>
        <rect x="19" y="35" width="2" height="5" rx="1"/>
      </g>
      <g fill={color} transform="translate(35,0)">
        <path d="M20 35C20 35 17 29 16 24C20 22 24 24 23 28C22 32 20 35 20 35Z" opacity="0.8"/>
        <rect x="19" y="35" width="2" height="5" rx="1"/>
      </g>
      <g fill="#b5613a" transform="translate(60,-5)">
        <circle cx="20" cy="22" r="5" opacity="0.85"/>
        <path d="M20 27C20 27 18 30 20 35" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      <g fill="#4a7c3f" transform="translate(85,0)">
        <path d="M20 35C20 35 18 25 20 18C24 20 25 26 22 30C21 32 20 35 20 35Z" opacity="0.9"/>
        <rect x="19" y="35" width="2" height="5" rx="1"/>
      </g>
    </svg>
  );
}

export function WeatherSunIllustration() {
  return (
    <svg width="32" height="32" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="12" fill="#d4b896"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={30 + 16 * Math.cos((angle * Math.PI) / 180)}
          y1={30 + 16 * Math.sin((angle * Math.PI) / 180)}
          x2={30 + 22 * Math.cos((angle * Math.PI) / 180)}
          y2={30 + 22 * Math.sin((angle * Math.PI) / 180)}
          stroke="#d4b896"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
