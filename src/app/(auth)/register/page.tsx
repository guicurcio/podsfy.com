"use client";

import SignUpModal from "components/SignUpModal";
import { useEffect } from "react";
import useIsMounted from "ui/hooks/useIsMounted";
import useToggle from "ui/hooks/useToggle";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Page() {
  const isMounted = useIsMounted();
  const [toggle, setToggle] = useToggle(false);
  console.log("----------isMounted----------", isMounted());
  console.log("----------toggle----------", toggle);

  useEffect(() => {
    console.log("----------isMounted useffec----------", isMounted());

    if (!isMounted() || toggle) {
      return;
    }
    console.log(
      "----------isMounted useffec----------",
      isMounted(),
      toggle,
      "toggle",
    );

    void delay(500).then(() => {
      console.log("delay");

      setToggle();
    });
  }, [isMounted]);

  return (
    <>
      <SignUpModal
        openModalState={toggle}
        baseState="REGISTERING"
      ></SignUpModal>
    </>
  );
}
