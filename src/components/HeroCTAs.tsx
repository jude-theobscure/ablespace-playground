"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function CursorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.15468 1.125C9.70697 1.125 10.1547 1.57272 10.1547 2.125V3.625C10.1547 4.17728 9.70697 4.625 9.15468 4.625C8.6024 4.625 8.15468 4.17728 8.15468 3.625V2.125C8.15468 1.57272 8.6024 1.125 9.15468 1.125ZM3.41789 3.41789C3.80842 3.02737 4.44158 3.02737 4.83211 3.41789L5.83211 4.41789C6.22263 4.80842 6.22263 5.44158 5.83211 5.83211C5.44158 6.22263 4.80842 6.22263 4.41789 5.83211L3.41789 4.83211C3.02737 4.44158 3.02737 3.80842 3.41789 3.41789ZM14.8321 3.41789C15.2226 3.80842 15.2226 4.44158 14.8321 4.83211L13.8321 5.83211C13.4416 6.22263 12.8084 6.22263 12.4179 5.83211C12.0274 5.44158 12.0274 4.80842 12.4179 4.41789L13.4179 3.41789C13.8084 3.02737 14.4416 3.02737 14.8321 3.41789ZM1.125 9.15475C1.125 8.60246 1.57272 8.15475 2.125 8.15475H3.625C4.17728 8.15475 4.625 8.60246 4.625 9.15475C4.625 9.70703 4.17728 10.1547 3.625 10.1547H2.125C1.57272 10.1547 1.125 9.70703 1.125 9.15475ZM5.83211 12.4179C6.22263 12.8084 6.22263 13.4416 5.83211 13.8321L4.83211 14.8321C4.44158 15.2226 3.80842 15.2226 3.41789 14.8321C3.02737 14.4416 3.02737 13.8084 3.41789 13.4179L4.41789 12.4179C4.80842 12.0274 5.44158 12.0274 5.83211 12.4179Z" fill="currentColor"/>
      <path d="M22.5867 11.809C22.7202 11.9837 22.8771 12.2526 22.875 12.5885C22.8697 13.404 22.3134 13.9616 21.7738 14.3146C21.2195 14.6771 20.5073 14.945 19.8149 15.1514C19.1126 15.3609 18.3761 15.5226 17.7479 15.6528C17.3101 15.742 16.5326 15.901 16.3096 15.9636C15.9419 16.0667 15.8675 16.1334 15.8434 16.1594C15.8158 16.1891 15.751 16.2783 15.6649 16.6699L15.6616 16.685L15.6616 16.6851C15.2584 18.5187 14.9415 19.9598 14.6025 20.942C14.4331 21.4327 14.2367 21.8762 13.9787 22.211C13.7067 22.5641 13.3197 22.851 12.7992 22.874C12.4564 22.8891 12.1811 22.7327 12.0072 22.6036C11.8219 22.4659 11.6532 22.2857 11.5025 22.0975C11.1992 21.7186 10.8858 21.2013 10.5783 20.6137C9.95921 19.4306 9.30628 17.8498 8.75479 16.2272C8.2036 14.6055 7.74246 12.909 7.51973 11.4936C7.40874 10.7884 7.35226 10.1245 7.38357 9.56176C7.41277 9.03706 7.52496 8.43525 7.90865 8.02206C8.30445 7.59583 8.90729 7.45116 9.43472 7.40033C9.99767 7.34607 10.6634 7.38264 11.3697 7.47527C12.7875 7.66125 14.4935 8.0905 16.127 8.61631C17.7619 9.14257 19.359 9.7768 20.5593 10.3869C21.1557 10.69 21.6815 11.0009 22.069 11.3045C22.2617 11.4554 22.4452 11.6239 22.5867 11.809Z" fill="currentColor"/>
    </svg>
  );
}

function ArrowRightIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M1.75 11.9425C1.74999 9.75225 1.75012 8.03186 1.93066 6.6886C2.11575 5.31194 2.50313 4.21965 3.36133 3.36145C4.21953 2.50325 5.31182 2.11587 6.68848 1.93079C8.03174 1.75024 9.75212 1.75011 11.9424 1.75012L12.0576 1.75012C14.2479 1.75011 15.9683 1.75024 17.3115 1.93079C18.6882 2.11587 19.7805 2.50325 20.6387 3.36145C21.4969 4.21965 21.8842 5.31194 22.0693 6.6886C22.2499 8.03186 22.25 9.75224 22.25 11.9425L22.25 12.0577C22.25 14.248 22.2499 15.9684 22.0693 17.3116C21.8842 18.6883 21.4969 19.7806 20.6387 20.6388C19.7805 21.497 18.6882 21.8844 17.3115 22.0695C15.9683 22.25 14.2479 22.2501 12.0576 22.2501L11.9424 22.2501C9.75213 22.2501 8.03174 22.25 6.68848 22.0695C5.31182 21.8844 4.21953 21.497 3.36133 20.6388C2.50313 19.7806 2.11575 18.6883 1.93066 17.3116C1.75012 15.9684 1.74999 14.248 1.75 12.0577L1.75 11.9425ZM9.78613 7.29895C9.3992 7.69297 9.40584 8.32702 9.7998 8.71399L10.248 9.17004C10.5216 9.45467 10.8835 9.84256 11.2432 10.2589C11.6063 10.6794 11.95 11.1095 12.1973 11.4825C12.3212 11.6695 12.4079 11.8224 12.46 11.9376C12.4714 11.9628 12.48 11.9837 12.4863 12.0001C12.48 12.0166 12.4714 12.0374 12.46 12.0626C12.4079 12.1778 12.3212 12.3307 12.1973 12.5177C11.95 12.8907 11.6063 13.3209 11.2432 13.7413C10.8835 14.1577 10.5216 14.5456 10.248 14.8302L9.7998 15.2863C9.40597 15.6731 9.39958 16.3063 9.78613 16.7003C10.173 17.0942 10.8061 17.1006 11.2002 16.714L11.6895 16.2159C11.9784 15.9153 12.3667 15.5006 12.7568 15.0489C13.1434 14.6015 13.5491 14.0977 13.8643 13.6222C14.0215 13.3848 14.1703 13.1345 14.2822 12.8868C14.3862 12.6568 14.5 12.3418 14.5 12.0001C14.5 11.6585 14.3863 11.3435 14.2822 11.1134C14.1702 10.8658 14.0216 10.6154 13.8643 10.3781C13.5491 9.90254 13.1434 9.39878 12.7568 8.95129C12.3667 8.49962 11.9784 8.08494 11.6895 7.7843L11.2002 7.28625C10.8061 6.89964 10.173 6.90507 9.78613 7.29895Z" fill="currentColor"/>
    </svg>
  );
}

interface HeroCTAsProps {
  primaryBg?: string;
  primaryBorder?: string;
  primaryText?: string;
  secondaryBg?: string;
  secondaryBorder?: string;
  secondaryText?: string;
  textSize?: string;
  paddingY?: string;
  paddingX?: string;
  iconSize?: number;
  radius?: string;
  equalWidth?: boolean;
}

export default function HeroCTAs({
  primaryBg,
  primaryBorder,
  primaryText,
  secondaryBg,
  secondaryBorder,
  secondaryText,
  textSize = "text-base",
  paddingY = "py-[14px]",
  paddingX = "px-5",
  iconSize = 20,
  radius = "rounded-[var(--radius-lg)]",
  equalWidth = false,
}: HeroCTAsProps) {
  const primaryRef = useRef<HTMLAnchorElement>(null);
  const secondaryRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!equalWidth && primaryRef.current && secondaryRef.current) {
      secondaryRef.current.style.width = `${primaryRef.current.offsetWidth}px`;
    }
  }, [textSize, paddingX, paddingY, iconSize, equalWidth]);

  const primaryStyle = primaryBg ? {
    background: primaryBg,
    border: primaryBorder ? `1px solid ${primaryBorder}` : undefined,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  } : {
    background: 'linear-gradient(to bottom, #00A9F8, #00A0EB)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  };

  return (
    <div
      className="mt-10 gap-3"
      style={equalWidth
        ? { display: 'grid', gridTemplateColumns: '1fr 1fr', width: 'fit-content' }
        : { display: 'flex', alignItems: 'center' }
      }
    >
      <Link
        ref={primaryRef}
        href="#"
        className={`flex items-center justify-center gap-1.5 ${paddingX} ${paddingY} ${radius} ${textSize} font-semibold hover:brightness-105 transition-all whitespace-nowrap`}
        style={{ ...primaryStyle, color: primaryText ?? '#F8FAFC' }}
      >
        Sign Up for Free
        <span className="opacity-70"><ArrowRightIcon size={iconSize} /></span>
      </Link>
      <Link
        ref={secondaryRef}
        href="#"
        className={`flex items-center justify-center gap-1.5 ${paddingX} ${paddingY} ${radius} ${textSize} font-semibold transition-colors whitespace-nowrap`}
        style={{
          backgroundColor: secondaryBg ?? '#EDECEB',
          border: secondaryBorder ? `1px solid ${secondaryBorder}` : undefined,
          color: secondaryText ?? '#7A716B',
        }}
      >
        Book a Demo
        <span className="opacity-80"><CursorIcon size={iconSize} /></span>
      </Link>
    </div>
  );
}
