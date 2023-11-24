"use client";

import { nhost } from "lib/setupBackendConfig";

export default function ProfilePage() {
  const user = nhost.auth.getUser();

  return (
    <div className="h-screen w-full min-w-full py-[20px] pl-[25px] pr-[50px] backdrop-brightness-[50%]">
      <div className="w-[720px]"></div>
      <h2 className="mt-[-4px]  font-moderat text-[17px] text-[#fff] text-opacity-[50%]">
        <span className="underline">{user?.displayName}</span>
      </h2>
    </div>
  );
}
