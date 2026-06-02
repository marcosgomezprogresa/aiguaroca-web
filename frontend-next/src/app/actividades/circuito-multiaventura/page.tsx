import ActivityHeroStatic from "@/components/ui/ActivityHeroStatic";
import DeferredActivitySections from "@/components/activities/DeferredActivitySections";
import img2 from "@/assets/images/circuito-multiaventura-side1.svg";
import img3 from "@/assets/images/circuito-multiaventura-side2.svg";

export default function CircuitoMultiaventuraPage() {
  const arr = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_785_31053)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 13.75C3.65279 13.75 1.75 15.6528 1.75 18C1.75 20.3472 3.65279 22.25 6 22.25C8.34721 22.25 10.25 20.3472 10.25 18C10.25 15.6528 8.34721 13.75 6 13.75ZM0.25 18C0.25 14.8244 2.82436 12.25 6 12.25C9.17564 12.25 11.75 14.8244 11.75 18C11.75 21.1756 9.17564 23.75 6 23.75C2.82436 23.75 0.25 21.1756 0.25 18Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 7.75C15.6528 7.75 13.75 9.65279 13.75 12C13.75 14.3472 15.6528 16.25 18 16.25C20.3472 16.25 22.25 14.3472 22.25 12C22.25 9.65279 20.3472 7.75 18 7.75ZM12.25 12C12.25 8.82436 14.8244 6.25 18 6.25C21.1756 6.25 23.75 8.82436 23.75 12C23.75 15.1756 21.1756 17.75 18 17.75C14.8244 17.75 12.25 15.1756 12.25 12Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 15.25C4.48122 15.25 3.25 16.4812 3.25 18C3.25 19.5188 4.48122 20.75 6 20.75C7.51878 20.75 8.75 19.5188 8.75 18C8.75 16.4812 7.51878 15.25 6 15.25Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 9.25C16.4812 9.25 15.25 10.4812 15.25 12C15.25 13.5188 16.4812 14.75 18 14.75C19.5188 14.75 20.75 13.5188 20.75 12C20.75 10.4812 19.5188 9.25 18 9.25Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2.25C6.41421 2.25 6.75 2.58579 6.75 3V13C6.75 13.4142 6.41421 13.75 6 13.75C5.58579 13.75 5.25 13.4142 5.25 13V3C5.25 2.58579 5.58579 2.25 6 2.25Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 2.25C18.4142 2.25 18.75 2.58579 18.75 3V7C18.75 7.41421 18.4142 7.75 18 7.75C17.5858 7.75 17.25 7.41421 17.25 7V3C17.25 2.58579 17.5858 2.25 18 2.25Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 0.25C1.0335 0.25 0.25 1.0335 0.25 2C0.25 2.9665 1.0335 3.75 2 3.75H22C22.9665 3.75 23.75 2.9665 23.75 2C23.75 1.0335 22.9665 0.25 22 0.25H2Z"
              fill="#004057"
            />
          </g>
          <defs>
            <clipPath id="clip0_785_31053">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Poleas",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_785_31065)">
            <path
              d="M19.3702 6.67917V3.43438C19.3702 2.97982 18.9944 2.60401 18.5399 2.60401H12.8459C11.3007 2.60401 9.85733 4.16618 10.2391 5.69347L12.4673 14.6064M14.122 17.5229C14.2274 17.5413 14.3363 17.5506 14.4474 17.5506H18.5399C18.9944 17.5506 19.3702 17.1748 19.3702 16.7203V13.4755M21.5055 13.4755V16.7203C21.5055 18.3536 20.1731 19.6859 18.5398 19.6859H14.4473C14.1583 19.6859 13.875 19.6546 13.6019 19.5946M11.5128 18.3057C11.2129 17.9266 10.9879 17.4799 10.8627 16.9789L8.17058 6.2106C7.44946 3.32597 9.94155 0.46875 12.8459 0.46875H18.5399C20.1731 0.46875 21.5055 1.80106 21.5055 3.43438V6.67917"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3702 6.67969H21.5055C21.9495 6.67969 22.3127 7.04294 22.3127 7.4869V12.6688C22.3127 13.1127 21.9495 13.476 21.5055 13.476H19.3702C18.9262 13.476 18.563 13.1127 18.563 12.6688V7.4869C18.563 7.04294 18.9262 6.67969 19.3702 6.67969Z"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7974 10.0781H22.0783"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.6045 4.33594H21.271"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.6045 15.8203H21.271"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.63184 10.5229V7.27813C4.63184 6.82357 5.0077 6.44776 5.46221 6.44776H8.05142M10.5942 6.44771H11.1562C12.7014 6.44771 14.1448 8.00988 13.763 9.53718L11.0709 20.3054C10.8959 21.0055 10.2705 21.3944 9.55472 21.3944H5.46221C5.00766 21.3944 4.63184 21.0185 4.63184 20.564V17.3192M2.49658 17.3192V20.564C2.49658 22.1973 3.82889 23.5297 5.46216 23.5297H9.55467C11.2377 23.5297 12.7275 22.47 13.1394 20.8226L15.8315 10.0544C16.5526 7.16972 14.0605 4.3125 11.1562 4.3125H10.4887M7.99283 4.3125H5.46221C3.82894 4.3125 2.49663 5.64486 2.49663 7.27813V10.5229"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.63193 10.5234H2.49667C2.0527 10.5234 1.68945 10.8867 1.68945 11.3307V16.5125C1.68945 16.9565 2.0527 17.3198 2.49667 17.3198H4.63198C5.07594 17.3198 5.43919 16.9565 5.43919 16.5125V11.3306C5.43914 10.8866 5.07589 10.5234 4.63193 10.5234Z"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.20481 13.9219H1.92383"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.39751 8.17969H2.73096"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.39751 19.6641H2.73096"
              stroke="#004057"
              strokeWidth="0.937422"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_785_31065">
              <rect
                width="23.9981"
                height="23.9981"
                fill="white"
                transform="translate(0.00195312)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Mosquetones",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <g clipPath="url(#clip0_785_31080)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.2821 20.5798H20.6291C20.349 20.5798 20.1348 20.3491 20.1348 20.0855V16.2461H23.7764V20.0855C23.7764 20.3491 23.5622 20.5798 23.2821 20.5798Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.1348 11.6139V1.38106C20.1348 1.10093 20.349 0.886719 20.6291 0.886719H23.2821C23.5622 0.886719 23.7764 1.10093 23.7764 1.38106V11.6139H20.1348Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.24288 20.578H6.57344C6.30979 20.578 6.0791 20.3473 6.0791 20.0836V16.2442H9.73723V20.0836C9.73723 20.3473 9.50653 20.578 9.24288 20.578ZM6.0791 11.6139V1.38106C6.0791 1.10093 6.30979 0.886719 6.57344 0.886719H9.24288C9.50653 0.886719 9.73723 1.10093 9.73723 1.38106V11.6139H6.0791Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5774 23.2315H5.23848C4.97483 23.2315 4.74414 23.0173 4.74414 22.7371V20.0842C4.74414 19.8041 4.97483 19.5898 5.23848 19.5898H10.5774C10.841 19.5898 11.0717 19.8041 11.0717 20.0842V22.7371C11.0717 23.0173 10.841 23.2315 10.5774 23.2315ZM5.73282 22.2428H10.083V20.5785H5.73282V22.2428Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.617 23.2315H19.2946C19.0145 23.2315 18.8003 23.0173 18.8003 22.7371V20.0842C18.8003 19.8041 19.0145 19.5898 19.2946 19.5898H24.617C24.8972 19.5898 25.1114 19.8041 25.1114 20.0842V22.7371C25.1114 23.0173 24.8972 23.2315 24.617 23.2315ZM19.789 22.2428H24.1227V20.5785H19.789V22.2428Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6035 9.06005L19.6406 2.08984V8.38445L18.4872 10.5266C17.7292 9.73565 16.724 9.20835 15.6035 9.06005Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.9279 18.3526C13.379 18.3526 11.9618 17.5287 11.1709 16.2434H18.7014C17.9104 17.5287 16.4768 18.3526 14.9279 18.3526ZM11.1709 11.6131C11.9618 10.3278 13.379 9.50391 14.9279 9.50391C16.4768 9.50391 17.9104 10.3278 18.7014 11.6131H11.1709Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.2049 15.751H5.65059C5.38694 15.751 5.15625 15.5368 5.15625 15.2567V12.6037C5.15625 12.3236 5.38694 12.1094 5.65059 12.1094H24.2049C24.485 12.1094 24.6992 12.3236 24.6992 12.6037V15.2567C24.6992 15.5368 24.485 15.751 24.2049 15.751Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.8083 18.1879C26.5941 18.1879 26.3964 18.0561 26.3305 17.8254L25.4242 14.4145H24.2048C23.9411 14.4145 23.7104 14.2002 23.7104 13.9201C23.7104 13.6565 23.9411 13.4258 24.2048 13.4258H25.8032C26.0339 13.4258 26.2151 13.5741 26.281 13.8048L27.2862 17.5782C27.3686 17.8419 27.2038 18.1055 26.9401 18.1715C26.9072 18.1879 26.8578 18.1879 26.8083 18.1879Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.04708 18.1879C3.01413 18.1879 2.96469 18.1879 2.93174 18.1715C2.66809 18.1055 2.50331 17.8419 2.56922 17.5782L3.59086 13.8048C3.64029 13.5741 3.83803 13.4258 4.06872 13.4258H5.65061C5.93074 13.4258 6.14496 13.6565 6.14496 13.9201C6.14496 14.2002 5.93074 14.4145 5.65061 14.4145H4.44772L3.52495 17.8254C3.47551 18.0561 3.27778 18.1879 3.04708 18.1879Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7199 28.9826H11.6653H10.0505C9.88572 28.9826 9.72094 28.8837 9.62207 28.7354L6.30998 22.9846C6.17816 22.7539 6.26055 22.4573 6.49124 22.309H9.14421C9.39138 22.1772 9.68798 22.2596 9.8198 22.4903L12.8518 27.7468L13.1484 28.2411L13.5768 28.9826H12.7199ZM17.3173 28.9826H16.4605L16.8889 28.2411L17.169 27.7468L20.201 22.4903C20.3328 22.2596 20.6459 22.1772 20.8766 22.309H23.5295C23.7767 22.4573 23.8426 22.7539 23.7108 22.9846L20.3987 28.7354C20.3163 28.8837 20.1515 28.9826 19.9703 28.9826H18.3554H17.3173Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8832 28.9815H14.1365L12.0273 25.3398H17.9924L15.8832 28.9815Z"
              fill="#004057"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2686 9.06005L10.2314 2.08984V8.38445L11.3849 10.5266C12.1429 9.73565 13.1645 9.20835 14.2686 9.06005Z"
              fill="#004057"
            />
          </g>
          <defs>
            <clipPath id="clip0_785_31080">
              <rect
                width="28.128"
                height="28.128"
                fill="white"
                transform="translate(0.87207 0.871094)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Arnés",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clipPath="url(#clip0_1248_95739)">
            <path
              d="M25.208 2.94L24.252 2.142C22.5902 0.759179 20.4969 0.00139636 18.335 0L12.121 0C9.65203 0 7.33103 0.961 5.58603 2.707L4.70703 3.586C3.84628 4.44208 3.16383 5.46036 2.69918 6.58191C2.23453 7.70346 1.9969 8.90601 2.00003 10.12V13.918C1.99937 14.4542 2.10447 14.9852 2.30932 15.4807C2.51416 15.9761 2.81473 16.4264 3.1938 16.8055C3.57287 17.1847 4.02301 17.4854 4.51845 17.6903C5.01388 17.8953 5.54487 18.0005 6.08103 18C7.08103 18 8.06403 17.832 9.00403 17.499L9.88603 17.188L13.468 20.417C13.3205 20.5562 13.2029 20.7241 13.1224 20.9103C13.042 21.0965 13.0003 21.2971 13 21.5C13 22.151 13.42 22.7 14 22.908V29.5C14 29.6326 14.0527 29.7598 14.1465 29.8536C14.2402 29.9473 14.3674 30 14.5 30H16.5C16.6326 30 16.7598 29.9473 16.8536 29.8536C16.9474 29.7598 17 29.6326 17 29.5V22.908C17.58 22.701 18 22.151 18 21.5C18 20.974 17.727 20.512 17.315 20.244L20.058 14H26C27.103 14 28 13.103 28 12V8.9C28.0014 7.76241 27.7519 6.63852 27.2693 5.60837C26.7867 4.57821 26.0829 3.66713 25.208 2.94ZM14.815 17.195L13.337 15.968L15.757 15.112L14.815 17.195ZM26 11.5C26 11.6326 25.9474 11.7598 25.8536 11.8536C25.7598 11.9473 25.6326 12 25.5 12C25.3674 12 25.2402 11.9473 25.1465 11.8536C25.0527 11.7598 25 11.6326 25 11.5V9.602C25.0013 8.68429 24.8001 7.7776 24.4109 6.94654C24.0216 6.11548 23.4539 5.38051 22.748 4.794C21.3563 3.63551 19.6029 3.0008 17.792 3C17.6594 3 17.5322 2.94732 17.4385 2.85355C17.3447 2.75979 17.292 2.63261 17.292 2.5C17.292 2.36739 17.3447 2.24021 17.4385 2.14645C17.5322 2.05268 17.6594 2 17.792 2C19.833 2 21.821 2.72 23.388 4.026C24.2065 4.70627 24.865 5.55865 25.3164 6.52244C25.7679 7.48623 26.0013 8.53771 26 9.602V11.5Z"
              fill="#004057"
            />
          </g>
          <defs>
            <clipPath id="clip0_1248_95739">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Casco",
    },
  ];

  const faq = [
    {
      ques: "DATOS",
      ans: [
        "Localizacion: Venta del Moro - Valencia.",
        "Duración: 2h aprox. (Puede cambiar dependiendo de las habilidades de cada grupo).",
        "Nivel: Iniciación-medio-avenzado (adaptable a todos los niveles)",
        "Grupo mínimo: 6 personas. (si sois menos consultanos)",
        "Edad mínima: 6 años.",
        "Temporada: Todo el año.",
        "No apto para embarazadas, personas con vertigo o enfermedades de corazon.",
      ],
    },
    {
      ques: "QUÉ INCLUYE",
      ans: [
        "Todo el equipo necesario para realizar las actividades multiaventura: cascos, arneses, mosquetones, poleas etc.",
        "Seguros de responsabilidad civil y accidentes.",
      ],
    },
    {
      ques: "QUÉ NO INCLUYE",
      ans: ["Transporte a la actividad."],
    },
    {
      ques: "QUÉ HAY QUE LLEVAR",
      ans: [
        "Calzado deportivo/montaña (no chanclas ni sandalias).",
        "Crema solar.",
        "Pantalon deportivo o de montaña",
        "Agua",
      ],
    },
    {
      ques: "RATIO MONITOR/CLIENTES",
      ans: ["1 monitores/10 clientes."],
    },
    {
      ques: "SERVICIOS OPCIONALES",
      ans: ["Posibilidad de alojamiento en AIGUAROCA, Consultar."],
    },
  ];

  return (
    <>
      <ActivityHeroStatic
        modalTitle="Circuito Multiaventura"
        modalVariant="activity"
        imgs={[
          {
            file: "/api/v1/videos/circito.mp4",
            type: "vid",
          },
          {
            file: img3.src,
            type: "img",
          },
          {
            file: img2.src,
            type: "img",
          },
        ]}
        title="Circuito Multiaventura"
        breadCrumsPaths={["Home", "Circuito Multiaventura"]}
        heading="Circuito Multiaventura Valencia - Venta del Moro"
        level="Adaptable"
        age="Desde 6 años"
        duration="2 Horas"
        Prize="35€"
        include={arr}
        beforeSubtitle={
          <p className="text-neutral-800 leading-relaxed">
            ¿Buscas un <span className="font-bold">circuito multiaventura en valencia</span> con tirolinas y retos en altura? Esta actividad combina aventura, naturaleza y seguridad en un entorno forestal real en Venta del Moro.
            <br />
            <br />
            Nuestro parque multiaventura está diseñado como un recorrido aéreo entre árboles, donde avanzarás superando diferentes pruebas de equilibrio y deslizándote por tirolinas integradas en el bosque.
          </p>
        }
        subTitle="Sobre el Circuito Multiaventura"
        des={
          <>
            <p className="w-full max-w-5xl text-neutral-800 leading-relaxed">
              El recorrido está formado por plataformas situadas en los árboles conectadas mediante:
            </p>
            <ul className="w-full max-w-5xl text-neutral-800 leading-relaxed list-disc list-inside space-y-2">
              <li>Tirolinas</li>
              <li>Puentes colgantes</li>
              <li>Pasos de equilibrio</li>
              <li>Cables y retos suspendidos</li>
            </ul>
            <p className="w-full max-w-5xl text-neutral-800 leading-relaxed">
              Cada tramo pone a prueba tu coordinación y confianza en altura, siempre con material técnico homologado y supervisión profesional.
            </p>
            <p className="w-full max-w-5xl text-neutral-800 leading-relaxed">
              A diferencia de un parque de tirolinas urbano, este circuito está completamente integrado en la naturaleza, sin estructuras artificiales invasivas.
            </p>
            <h2 className="text-2xl font-semibold text-neutral-900 pt-8">Parque Multiaventura en Venta del Moro (Valencia)</h2>
            <p className="w-full max-w-5xl text-neutral-800 leading-relaxed">
              La actividad se realiza en Venta del Moro, una de las zonas más conocidas de Valencia para deportes de aventura o actividades multiaventura. El entorno natural permite disfrutar de una experiencia más auténtica que un parque multiaventura convencional, rodeado de bosque y sin masificaciones.
            </p>
            <p className="w-full max-w-5xl text-neutral-800 leading-relaxed">
              Es una opción ideal si buscas:
            </p>
            <ul className="w-full max-w-5xl text-neutral-800 leading-relaxed list-disc list-inside space-y-2">
              <li>Tirolinas en Valencia</li>
              <li>Parque multiaventura para grupos</li>
              <li>Actividad en plena naturaleza</li>
              <li>Circuito multiaventura para niños y adultos</li>
            </ul>
            <h2 className="text-2xl font-semibold text-neutral-900 pt-8">Circuito de Tirolinas para Niños y Adultos</h2>
            <p className="w-full max-w-5xl text-neutral-800 leading-relaxed">
              El circuito está pensado para adaptarse a diferentes edades y niveles, lo que lo convierte en una actividad perfecta para todos los públicos.
            </p>
          </>
        }
        secondDes={null}
        showSeeMore={false}
        activityName="Circuito Multiaventura"
        faq={faq}
      />
      <DeferredActivitySections
        multiActivityHeading="Combina el circuito con otras actividades"
        childrenBeforeLastHeading={
          <div className="custom-container pt-4 lg:pt-6 pb-12 lg:pb-24 space-y-8">
            <h2 className="text-2xl lg:text-3xl text-brand-300 font-medium">Preguntas Frecuentes sobre Circuito Multiaventura en Valencia</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿Cuál es la altura máxima del circuito multiaventura?</h3>
                <p className="text-neutral-800 leading-relaxed">
                  La altura varía según el tramo y el nivel del recorrido. Los circuitos infantiles se desarrollan a menor altura, mientras que los recorridos para adultos incluyen pasos más elevados para aumentar la sensación de aventura, siempre con sistemas de seguridad homologados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿Es necesario tener buena condición física?</h3>
                <p className="text-neutral-800 leading-relaxed">
                  No es necesario estar en plena forma ni tener experiencia previa. El circuito está diseñado para personas activas que quieran disfrutar de una experiencia en altura, sin necesidad de entrenamiento específico. La dificultad depende más de la coordinación y la confianza que de la fuerza.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿Hay límite de peso o altura mínima?</h3>
                <p className="text-neutral-800 leading-relaxed mb-3">
                  Sí, existen requisitos básicos de seguridad que pueden variar según el tramo del circuito. Antes de la actividad se informa a los participantes sobre las condiciones necesarias para garantizar un uso seguro del material.
                </p>
                <ul className="text-neutral-800 leading-relaxed list-none space-y-2">
                  <li><span className="font-semibold">ALTURA MÍNIMA:</span> 1,50 m</li>
                  <li><span className="font-semibold">PESO MÁXIMO:</span> 100 kg</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿Se puede realizar el circuito multiaventura en grupo privado?</h3>
                <p className="text-neutral-800 leading-relaxed">
                  Sí. Es una actividad muy demandada para grupos escolares, empresas o celebraciones. Se pueden organizar turnos exclusivos para grupos organizados bajo reserva previa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿Qué pasa si alguien no quiere completar todo el recorrido?</h3>
                <p className="text-neutral-800 leading-relaxed">
                  El circuito permite avanzar por tramos. Si un participante prefiere no continuar en algún punto, el equipo puede asistirle para finalizar de forma segura sin completar el recorrido completo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿El circuito se puede hacer durante todo el año?</h3>
                <p className="text-neutral-800 leading-relaxed">
                  Sí. La actividad depende de las condiciones meteorológicas. En caso de lluvia intensa o viento fuerte, puede modificarse o reprogramarse por seguridad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">¿Es una buena opción como primera experiencia en tirolinas?</h3>
                <p className="text-neutral-800 leading-relaxed">
                  Sí. El circuito multiaventura en Valencia es una opción ideal para iniciarse en actividades en altura, ya que combina tramos progresivos y permite ganar confianza antes de afrontar pasos más largos o rápidos.
                </p>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
