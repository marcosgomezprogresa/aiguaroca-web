import ActivityCard from "@/components/cards/ActivityCard";
import { activitiesData } from "@/lib/data";

const Recommend = () => {
  return (
    <section className="custom-container py-16 lg:pb-24">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-neutral-100 px-5 py-8 shadow-inner lg:px-10 lg:py-12">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
              Más experiencias
            </p>
            <h2 className="text-3xl font-black text-neutral-950 lg:text-5xl">
              Recomendaciones top para ti
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-700 lg:text-base">
            Actividades seleccionadas para completar el día con más agua, naturaleza
            y aventura en Venta del Moro.
          </p>
        </div>

        <div className="flex w-full snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activitiesData.map((itm, idx) => (
            <div
              key={idx}
              className="flex min-w-[86%] snap-start sm:min-w-[45%] lg:min-w-[28%] xl:min-w-[24%]"
            >
              <ActivityCard
                inHome={true}
                inRecommend={true}
                title={itm.title}
                des={itm.des}
                level={itm.level}
                age={itm.age}
                duration={itm.duration}
                prize={itm.prize}
                link={itm.link}
                img={itm.images}
                priorityImage={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommend;
