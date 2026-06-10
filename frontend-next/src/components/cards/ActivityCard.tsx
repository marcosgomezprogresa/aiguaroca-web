import ShowcaseActivityCard from "@/components/home/v2/ShowcaseActivityCard";

interface ActivityCardProps {
  inRecommend?: boolean;
  inHome?: boolean;
  img: string[];
  title: string;
  des?: string;
  level: string;
  age: string;
  duration: string;
  prize: string;
  link: string;
  isKid?: boolean;
  priceLabel?: string;
  priorityImage?: boolean;
}

const ActivityCard = ({
  img,
  title,
  level,
  age,
  duration,
  prize,
  link,
  priceLabel = "Desde",
  priorityImage = false,
}: ActivityCardProps) => {
  const primaryImage = img[0];
  if (!primaryImage) return null;

  return (
    <ShowcaseActivityCard
      title={title}
      level={level}
      age={age}
      duration={duration}
      prize={prize}
      link={link}
      image={primaryImage}
      priorityImage={priorityImage}
      priceLabel={priceLabel}
    />
  );
};

export default ActivityCard;
