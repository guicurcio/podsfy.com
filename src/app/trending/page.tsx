'use client';

import { NhostProvider } from '@nhost/nextjs';
import Card from 'components/common/Card';
import Header from 'components/dashboard/Header/Header';
import { nhost } from 'lib/setupBackendConfig';

export default function DashboardPage() {
  return (
    <>
      <NhostProvider nhost={nhost}>
        <Header></Header>
        <div className="max-w-[1250px] z-50 mx-auto mt-[120px] relative min-h-[800px]">
          <div className="grid grid-flow-col gap-2">
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </NhostProvider>
    </>
  );
}
