'use client';

import { NhostProvider, useUserData } from '@nhost/nextjs';
import { nhost } from 'lib/setupBackendConfig';
import { twMerge } from 'tailwind-merge';

/**
 * User Props description
 */
export interface UserProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

export function UserData({ className }: UserProps) {
  const user = useUserData();
  return (
    <div className={twMerge('', className)}>
      <h1 className="tracking-[-0.10em]  text-lg font-bold text-[#949494] font-SpaceGrotesk">
        {user?.email}
      </h1>
    </div>
  );
}

/**
 * User Component
 */
export default function User({ className }: UserProps) {
  return (
    <NhostProvider nhost={nhost}>
      <UserData></UserData>
    </NhostProvider>
  );
}
