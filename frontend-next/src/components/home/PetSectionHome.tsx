"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import paw from "@/assets/images/paw.svg";
import dog from "@/assets/images/dog.svg";

const PetSectionHome = () => {
  return (

    <div className="mt-12 lg:mt-16">
      <div className="mx-auto max-w-[1370px] bg-[#FFF9ED] rounded-xl px-6 sm:px-10 lg:px-14 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 py-8 lg:py-10">
          <div className="hidden lg:flex lg:col-span-4 items-center">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl">
              <Image
                src={dog}
                alt="dog"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 lg:col-start-6 space-y-5 lg:space-y-6">
            <Image
              src={paw}
              alt="Paw"
              width={144}
              height={144}
              className="w-10 lg:w-14 opacity-90"
            />
            <h2 className="text-sm uppercase tracking-wide text-brand-300 text-[black] text-center">
              Aventura con tu perro
            </h2>
            <div className="lg:hidden">
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  src={dog}
                  alt="dog"
                  width={500}
                  height={500}
                  className="block w-full h-auto"
                />
              </div>
            </div>

            <p className="text-lg lg:text-2xl font-semibold text-gray-900 leading-tight">
              ¿Le hacemos un hueco en la barca?
            </p>

            <p className="text-base lg:text-lg text-gray-700 max-w-xl">
              Pregúntanos sobre las actividades donde puedes llevar a tu perro
            </p>

            <Link href="/contacto">
              <Button className="px-4 py-2 text-sm lg:text-base font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                ¿Qué aventuras puedo hacer con mi perro?
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSectionHome;
