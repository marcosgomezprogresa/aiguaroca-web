import type { ReactNode } from "react";
import MultiActivityBlock from "@/components/activities/MultiActivityBlock";
import RecommendClient from "@/components/home/RecommendClient";

interface ActivityDetailFooterProps {
  excludeLink: string;
  multiActivityHeading?: string;
  childrenBeforeLastHeading?: ReactNode;
}

const ActivityDetailFooter = ({
  excludeLink,
  multiActivityHeading,
  childrenBeforeLastHeading,
}: ActivityDetailFooterProps) => {
  return (
    <>
      <MultiActivityBlock headingText={multiActivityHeading} />
      <RecommendClient excludeLink={excludeLink} />
      {childrenBeforeLastHeading}
    </>
  );
};

export default ActivityDetailFooter;
