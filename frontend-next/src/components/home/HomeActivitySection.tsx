import Heading from "@/components/ui/Heading";
import { activitiesData } from "@/lib/data";
import ActivityCard from "@/components/cards/ActivityCard";

const HomeActivitySection = () => {
  return (
    <div className="custom-container space-y-14">
      <div className="space-y-7">
        <div className="flex justify-center lg:justify-start">
          <Heading
            className="pt-5 lg:pt-0 text-center lg:text-left text-xl sm:text-xl lg:text-2xl font-black text-gray-900"
            text="Nuestras actividades"
            level={2}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 pb-8">
        {activitiesData
          .filter((itm) => itm.link !== "/actividades/rafting")
          .map((itm, idx) => (
          <ActivityCard
            inHome={true}
            title={itm.title}
            des={itm.des}
            level={itm.level}
            age={itm.age}
            duration={itm.duration}
            prize={itm.prize}
            link={itm.link}
            key={idx}
            img={itm.images}
            priorityImage={idx < 2}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeActivitySection;
