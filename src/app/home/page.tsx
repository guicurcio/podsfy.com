'use client';

import { NhostProvider } from '@nhost/nextjs';
import Card from 'components/common/Card';
import { nhost } from 'lib/setupBackendConfig';

export default function DashboardPage() {
  return (
    <>
      <NhostProvider nhost={nhost}>
        <div className="relative z-50 mx-auto mt-[120px] min-h-[800px] max-w-[1250px]">
          <div className="grid grid-flow-col gap-2">
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </NhostProvider>
    </>
  );
}
