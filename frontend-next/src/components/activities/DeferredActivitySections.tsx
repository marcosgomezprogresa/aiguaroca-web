"use client";

import dynamic from "next/dynamic";

const MultiActivity = dynamic(() => import("@/components/home/MultiActivity"), {
  ssr: false,
});
const Recommend = dynamic(() => import("@/components/home/Recommend"), {
  ssr: false,
});
const LastHeading = dynamic(() => import("@/components/home/LastHeading"), {
  ssr: false,
});

interface DeferredActivitySectionsProps {
  multiActivityHeading?: string;
  childrenBeforeLastHeading?: React.ReactNode;
}

const DeferredActivitySections = ({
  multiActivityHeading,
  childrenBeforeLastHeading,
}: DeferredActivitySectionsProps) => {
  return (
    <>
      <MultiActivity headingText={multiActivityHeading} />
      <Recommend />
      {childrenBeforeLastHeading}
      <LastHeading />
    </>
  );
};

export default DeferredActivitySections;
