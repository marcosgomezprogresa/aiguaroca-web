import ActivityHeroStatic from "@/components/ui/ActivityHeroStatic";
import ActivityDetailFooter from "@/components/activities/ActivityDetailFooter";
import { routes } from "@/lib/routes";
import canyon1 from "@/assets/images/canyon-1.svg";
import canyon2 from "@/assets/images/canyon-2.svg";
import canyon3 from "@/assets/images/canyon-3.svg";

export default function BarrancoAcuaticoPage() {
  const equipmentIcons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
        >
          <path
            d="M23.208 2.94L22.252 2.142C20.5902 0.759179 18.4969 0.00139636 16.335 0L10.121 0C7.65203 0 5.33103 0.961 3.58603 2.707L2.70703 3.586C1.84628 4.44208 1.16383 5.46036 0.699181 6.58191C0.234529 7.70346 -0.00310399 8.90601 3.06113e-05 10.12V13.918C-0.000627186 14.4542 0.104475 14.9852 0.309319 15.4807C0.514163 15.9761 0.814726 16.4264 1.1938 16.8055C1.57287 17.1847 2.02301 17.4854 2.51845 17.6903C3.01388 17.8953 3.54487 18.0005 4.08103 18C5.08103 18 6.06403 17.832 7.00403 17.499L7.88603 17.188L11.468 20.417C11.3205 20.5562 11.2029 20.7241 11.1224 20.9103C11.042 21.0965 11.0003 21.2971 11 21.5C11 22.151 11.42 22.7 12 22.908V29.5C12 29.6326 12.0527 29.7598 12.1465 29.8536C12.2402 29.9473 12.3674 30 12.5 30H14.5C14.6326 30 14.7598 29.9473 14.8536 29.8536C14.9474 29.7598 15 29.6326 15 29.5V22.908C15.58 22.701 16 22.151 16 21.5C16 20.974 15.727 20.512 15.315 20.244L18.058 14H24C25.103 14 26 13.103 26 12V8.9C26.0014 7.76241 25.7519 6.63852 25.2693 5.60837C24.7867 4.57821 24.0829 3.66713 23.208 2.94ZM12.815 17.195L11.337 15.968L13.757 15.112L12.815 17.195ZM24 11.5C24 11.6326 23.9474 11.7598 23.8536 11.8536C23.7598 11.9473 23.6326 12 23.5 12C23.3674 12 23.2402 11.9473 23.1465 11.8536C23.0527 11.7598 23 11.6326 23 11.5V9.602C23.0013 8.68429 22.8001 7.7776 22.4109 6.94654C22.0216 6.11548 21.4539 5.38051 20.748 4.794C19.3563 3.63551 17.6029 3.0008 15.792 3C15.6594 3 15.5322 2.94732 15.4385 2.85355C15.3447 2.75979 15.292 2.63261 15.292 2.5C15.292 2.36739 15.3447 2.24021 15.4385 2.14645C15.5322 2.05268 15.6594 2 15.792 2C17.833 2 19.821 2.72 21.388 4.026C22.2065 4.70627 22.865 5.55865 23.3164 6.52244C23.7679 7.48623 24.0013 8.53771 24 9.602V11.5Z"
            fill="#004057"
          />
        </svg>
      ),
      name: "Casco",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="44"
          viewBox="0 0 49 44"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5001 56H26.3124C26.0938 56 25.875 55.8906 25.7656 55.7812C25.5468 55.5626 25.4374 55.3438 25.4374 55.125C25.4374 55.125 25.5468 48.5626 25.1094 46.7031C24.8906 45.7187 25.3282 42.6562 25.4374 42L25.1094 30.0781C25.1094 29.9687 25.1094 29.9687 25.1094 29.9687C25 29.9687 25 29.9687 25 29.9687C24.8906 29.9687 24.8906 30.0781 24.8906 30.1875L24.5626 42C24.6718 42.6562 25.1094 45.7187 24.8906 46.7031C24.4532 48.5626 24.5626 55.125 24.5626 55.125C24.5626 55.3438 24.4532 55.5626 24.2344 55.7812C24.125 55.8906 23.9062 56 23.6876 56H21.4999C21.2813 56 21.0625 55.8906 20.8437 55.6718C20.7343 55.5626 20.6251 55.3438 20.6251 55.125C20.9531 51.6251 19.5312 47.797 19.5312 47.6876C19.5312 47.6876 19.5312 47.6876 19.5312 47.5782C18.9844 45.3907 19.3124 43.203 19.3124 42.7656V37.4063C17.7812 28.3282 17.8906 25.4843 18 25.0469C18 24.2813 18.2188 22.5312 18.5468 20.8906C20.2969 21.7656 25.9844 23.2969 31.6718 21.6562L31.5626 21.5468C31.8906 22.9687 32 24.3907 32 25.0469C32.1094 25.4843 32.2188 28.3282 30.6876 37.4063V42.7656C30.6876 43.203 31.0156 45.3907 30.4688 47.5782C30.4688 47.6876 30.4688 47.6876 30.4688 47.6876C30.4688 47.797 29.0469 51.6251 29.3749 55.0156V55.125C29.3749 55.5626 28.9375 56 28.5001 56ZM15.0469 24.0625C14.9375 24.1719 14.8281 24.3907 14.5 24.3907C14.7187 24.3907 14.9375 24.2813 15.0469 24.0625ZM12.3125 22.4218C12.4219 21.7656 12.6406 21.1094 12.8594 20.5626L12.9688 20.3438C12.75 21 12.4219 21.7656 12.3125 22.4218ZM22.8125 0.109375C22.9219 0 23.0313 0 23.1406 0C23.25 0 23.25 0 23.3594 0C23.25 0 23.0313 0 22.8125 0.109375ZM26.6406 0C26.75 0 26.8594 0 26.8594 0C26.9687 0 27.0781 0 27.1875 0.109375C26.9687 0 26.8594 0 26.6406 0ZM37.0313 20.3438L37.1406 20.5626C37.3594 21.2188 37.5782 21.875 37.6876 22.5312C37.5782 21.7656 37.25 21 37.0313 20.3438ZM37.3594 23.4063L36.1563 24.2813H36.0469L37.3594 23.4063ZM35.4999 24.3907C35.1719 24.3907 35.0625 24.1719 34.9531 24.0625C35.0625 24.2813 35.2813 24.3907 35.4999 24.3907Z"
            fill="#28669C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7814 34.5626L24.672 40.0314L18.875 35.0001C18.4376 32.1564 18.2188 30.0781 18.1094 28.5469L24.7814 34.5626Z"
            fill="#3E8EC6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3282 39.2649L25.2188 33.6868L32 27.9992V28.1086L31.8906 28.218V28.3274V28.4366V28.546V28.6554V28.7648V28.8742V28.9836V29.093V29.2022V29.3116L31.7812 29.421V29.5304V29.6398V29.7492V29.8586V30.1867V30.2961L31.6718 30.4055V30.5149V30.6243V30.7335V30.8429V30.9523V31.0617V31.1711L31.5626 31.2805V31.3899V31.4993V31.6085V31.7179V31.8273V31.9367V32.0461L31.4532 32.1555V32.2649V32.3741V32.4835C31.4532 32.8117 31.3438 33.0305 31.3438 33.3586V33.468V33.5774H31.2344V33.7962V33.9054V34.0148V34.1242V34.2336L31.125 34.4524L25.3282 39.2649ZM19.0937 17.3898C19.0937 17.7179 18.7656 19.2492 18.5468 20.8898C20.2969 21.7648 25.9844 23.2961 31.6718 21.6554C31.3438 19.796 30.9062 17.7179 30.9062 17.3898C30.9062 17.3898 30.9062 17.3898 30.9062 17.2804C30.6876 16.6242 30.6876 14.9836 30.6876 13.2336C30.7968 14.6554 30.9062 16.1867 30.9062 16.6242C30.9062 16.9523 30.7968 17.7179 32.6562 20.671C33.5313 22.093 34.5157 23.6243 34.9531 24.0617C35.1719 24.3899 35.6093 24.6085 36.0469 24.2805L37.3594 23.4055C37.6876 23.1867 37.7968 22.8586 37.6876 22.5304C37.4688 21.218 36.7032 19.9054 36.7032 19.0304C36.5938 17.7179 36.2656 15.4211 35.6093 13.7804C35.4999 13.3429 35.3905 11.1554 34.9531 9.84294C34.7343 9.40543 34.7343 8.74919 34.7343 8.09293C34.6249 6.01481 34.5157 2.95231 30.3594 2.6242C29.375 1.96794 27.8437 0.983563 27.5157 0.436689C27.2969 -0.110187 26.5313 -0.110187 26.2031 0.327314L25 1.63981L23.7968 0.327314C23.4688 -0.110187 22.7032 -0.110187 22.4844 0.436689C22.1563 0.983563 20.6249 1.96794 19.6407 2.6242C15.4844 2.95231 15.375 6.01481 15.2656 8.09293C15.2656 8.74919 15.2656 9.40543 15.0469 9.84294C14.6094 11.1554 14.5 13.3429 14.3906 13.7804C13.7344 15.4211 13.4063 17.7179 13.2969 19.0304C13.2969 19.9054 12.5312 21.218 12.3125 22.5304C12.2031 22.8586 12.3125 23.1867 12.6406 23.4055L13.8437 24.2805C14.2812 24.6085 14.8281 24.3899 15.0469 24.0617C15.4844 23.6243 19.2031 18.3741 19.0937 16.6242C19.0937 16.1867 19.2031 14.6554 19.3125 13.2336C19.3125 14.9836 19.3125 16.6242 19.0937 17.2804C19.0937 17.3898 19.0937 17.3898 19.0937 17.3898Z"
            fill="#4294CC"
          />
        </svg>
      ),
      name: "Neopreno",
    },
  ];

  const faqData = [
    {
      ques: "DATOS",
      ans: [
        "Localidad de Enguidanos.",
        "Recorrido: 6km.",
        "Duración: 2 horas.",
        "Nivel: Medio.",
        "Grupo Mínimo: 6 personas.",
        "Edad mínima: 8 años.",
        "Temporada: Todo el año.",
        "Capacidades personales: Saber nadar.",
        "No apto para embarazadas.",
      ],
    },
    {
      ques: "QUÉ INCLUYE",
      ans: [
        "Todo el equipo necesario para realizar la actividad: casco, pantalón y chaqueta de neopreno.",
        "Equipo de seguridad: cuerdas de rescate y botiquín.",
        "seguros de responsabilidad civil y accidentes.",
      ],
    },
    {
      ques: "QUÉ NO INCLUYE",
      ans: ["Transporte a la actividad."],
    },
    {
      ques: "QUÉ HAY QUE LLEVAR",
      ans: [
        "Bañador/bikini ajustado, para llevar bajo el neopreno.",
        "Calzado deportivo que se pueda mojar.",
        "Toalla.",
        "Otro calzado de recambio.",
      ],
    },
    {
      ques: "RATIO MONITOR/CLIENTES",
      ans: ["2 monitores/10 clientes."],
    },
    {
      ques: "SERVICIOS OPCIONALES",
      ans: ["Posibilidad de alojamiento en AIGUAROCA. Consultar."],
    },
  ];

  return (
    <>
      <ActivityHeroStatic
        modalTitle="Barranco Acuatico"
        activityName="Barranco Acuatico"
        imgs={[
          {
            file: canyon1.src,
            type: "img",
          },
          {
            file: canyon2.src,
            type: "img",
          },
          {
            file: canyon3.src,
            type: "img",
          },
        ]}
        breadCrumsPaths={["Home", "Barranco Acuatico"]}
        level="Medio"
        age="Desde 10 Años"
        duration="2-3 Horas"
        heading="Barranco Acuatico"
        Prize="45€"
        include={equipmentIcons}
        subTitle="Sobre Barranco Acuatico"
        title="Barranco Acuatico"
        faq={faqData}
        des={
          <p className="w-full max-w-2xl text-neutral-800 leading-relaxed">
            El descenso de barrancos acuáticos o barranquismo es una actividad de aventura que consiste en descender por el cauce de un río o barranco,
            superando los diferentes obstáculos que se presentan: rappeles, saltos, toboganes naturales, pozas y cascadas.
            <br />
            <br />
            En Aiguaroca te ofrecemos la experiencia de descender por los impresionantes barrancos de la zona de Enguidanos,
            donde podrás disfrutar de la naturaleza más salvaje y emocionante. Nuestros guías expertos te acompañarán en todo momento,
            garantizando tu seguridad mientras vives una aventura inolvidable.
            <br />
            <br />
            Esta actividad es perfecta para grupos de amigos, familias con niños mayores de 8 años y cualquier persona que busque
            emociones fuertes en plena naturaleza. No necesitas experiencia previa, solo ganas de pasarlo bien y superar tus límites.
          </p>
        }
        showSeeMore={false}
      />
      
      <ActivityDetailFooter excludeLink={routes.barrancoAcuatico.path} />
    </>
  );
}
