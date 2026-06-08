import RecommendClient from "./RecommendClient";

interface RecommendProps {
  excludeLink?: string;
}

const Recommend = ({ excludeLink }: RecommendProps) => {
  return <RecommendClient excludeLink={excludeLink} />;
};

export default Recommend;
