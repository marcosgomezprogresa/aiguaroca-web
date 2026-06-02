import type { Metadata } from "next";

interface SEOConfigItem {
  metadata: Metadata;
  structuredData?: Record<string, unknown>;
}

export const seoConfig: Record<string, SEOConfigItem> = {
  "/": {
    metadata: {
      title: "Aventura en Valencia | Deportes de Aventura y Multiaventura",
      description:
        "Descubre la mejor aventura en Valencia con deportes de aventura y actividades de multiaventura para todos los niveles. ¡Reserva tu aventura hoy!",
      keywords:
        "rafting valencia, kayak valencia, rafting rio cabriel",
      openGraph: {
        title: "Aiguaroca - Rafting en Valencia | Río Cabriel",
        description:
          "Disfruta de las mejores actividades de rafting en Valencia.",
        url: "https://www.aiguaroca.com/",
        images: [{ url: "https://www.aiguaroca.com/og-image.jpg" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aiguaroca",
      url: "https://www.aiguaroca.com/",
      logo: "https://www.aiguaroca.com/api/v1/assets/Logo.png",
      description:
        "Centro de aventura y deportes acuáticos en Valencia especializado en rafting y kayak en el Río Cabriel",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
        addressRegion: "Valencia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34649047282",
        contactType: "customer service",
        email: "info@aiguaroca.com",
      },
      sameAs: [
        "https://www.facebook.com/aiguarocamultiaventura/",
        "https://www.instagram.com/aiguaroca/",
        "https://youtube.com/@aiguaroca",
        "https://x.com/aiguaroca",
        "https://www.tiktok.com/@aiguaroca",
      ],
    },
  },
  "/sobre-nosotros": {
    metadata: {
      title: "Sobre Nosotros - Aiguaroca | Centro de Aventura en Valencia",
      description:
        "Conoce la historia de Aiguaroca, tu centro de aventura en Valencia. Expertos en rafting, kayak y multiaventura desde hace años. ¡Ven y vive la aventura!",
      keywords:
        "sobre aiguaroca, historia aiguaroca, centro aventura valencia, equipo aiguaroca, quiénes somos aiguaroca",
      openGraph: {
        title: "Sobre Nosotros - Aiguaroca",
        description:
          "Descubre la historia y misión de Aiguaroca, tu centro de aventura favorito en Valencia.",
        url: "https://www.aiguaroca.com/sobre-nosotros",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/about.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/sobre-nosotros",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aiguaroca",
      url: "https://www.aiguaroca.com/",
      logo: "https://www.aiguaroca.com/api/v1/assets/Logo.png",
      description:
        "Aiguaroca es un centro especializado en deportes de aventura y actividades acuáticas en Valencia. Ofrecemos experiencias únicas en rafting, kayak y multiaventura.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
        addressRegion: "Valencia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34649047282",
        contactType: "customer service",
        email: "info@aiguaroca.com",
      },
    },
  },
  "/actividades": {
    metadata: {
      title: "Actividades de Aventura en Valencia | Rafting, Kayak y Más | Aiguaroca",
      description:
        "Descubre todas nuestras actividades de aventura en Valencia. Rafting, kayak, multiaventura, paintball y más en el Río Cabriel. Experiencias únicas para grupos, familias y empresas.",
      keywords:
        "actividades valencia, aventura valencia, rafting valencia, kayak valencia, multiaventura, deportes acuáticos valencia, actividades rio cabriel",
      openGraph: {
        title: "Actividades de Aventura en Valencia | Aiguaroca",
        description:
          "Todas nuestras actividades de aventura: rafting, kayak, multiaventura, paintball y más en Valencia.",
        url: "https://www.aiguaroca.com/actividades",
        images: [{ url: "https://www.aiguaroca.com/og-image.jpg" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Actividades de Aventura en Valencia",
      description: "Lista completa de actividades de aventura ofrecidas por Aiguaroca en Valencia",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Rafting",
            url: "https://www.aiguaroca.com/actividades/rafting",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Circuito Multiaventura",
            url: "https://www.aiguaroca.com/actividades/circuito-multiaventura",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Kayak en Aguas Bravas",
            url: "https://www.aiguaroca.com/actividades/kayak-en-aguas-bravas",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Kayak Travesía",
            url: "https://www.aiguaroca.com/actividades/kayak-travesia",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Canoas",
            url: "https://www.aiguaroca.com/actividades/canoas",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "Barranco Acuático",
            url: "https://www.aiguaroca.com/actividades/barranco-acuatico",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Service",
            name: "Paintball",
            url: "https://www.aiguaroca.com/actividades/paintball",
          },
        },
      ],
    },
  },
  "/actividades/rafting": {
    metadata: {
      title: "Rafting en Valencia - Río Cabriel | Aiguaroca",
      description:
        "Experimenta la emoción del rafting en el Río Cabriel, Valencia. Aiguaroca ofrece descensos en rafting para todos los niveles. Desde principiantes hasta expertos. ¡Reserva tu aventura!",
      keywords:
        "rafting valencia, rafting rio cabriel, rafting tamayo, rafting hoces del cabriel, rafting venta del moro, deportes acuáticos valencia, rafting aguas bravas",
      openGraph: {
        title: "Rafting en Valencia - Río Cabriel | Aiguaroca",
        description:
          "Experimenta la emoción del rafting en el Río Cabriel con Aiguaroca. Descensos para todos los niveles.",
        url: "https://www.aiguaroca.com/actividades/rafting",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/tamayo.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/rafting",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Rafting en Valencia",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Descensos de rafting en el Río Cabriel, Valencia. Ofrecemos dos tramos principales: Tamayo y Las Hoces del Cabriel, adaptados a diferentes niveles de experiencia.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Rafting en Tamayo-Venta del Moro",
          price: "40",
          priceCurrency: "EUR",
          description: "Descenso de rafting ideal para principiantes y familias. Duración: 2 horas.",
        },
        {
          "@type": "Offer",
          name: "Rafting en Las Hoces del Cabriel",
          price: "75",
          priceCurrency: "EUR",
          description: "Descenso avanzado de rafting en aguas bravas. Duración: 5 horas.",
        },
      ],
    },
  },
  "/actividades/rafting-tamayo": {
    metadata: {
      title: "Rafting en Tamayo - Venta del Moro | Río Cabriel | Aiguaroca",
      description:
        "Descenso de rafting en Tamayo, ideal para familias y principiantes. Disfruta de 6 km de diversión en el Río Cabriel cerca de Venta del Moro. Desde 40€. ¡Reserva tu aventura!",
      keywords:
        "rafting tamayo, rafting venta del moro, rafting principiantes, rafting familias valencia, rafting rio cabriel tamayo, deportes acuáticos tamayo",
      openGraph: {
        title: "Rafting en Tamayo - Venta del Moro | Aiguaroca",
        description:
          "Descenso de rafting en Tamayo, perfecto para familias y principiantes. 6 km de diversión en el Río Cabriel.",
        url: "https://www.aiguaroca.com/actividades/rafting-tamayo",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/tamayo.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/rafting-tamayo",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Rafting en Tamayo",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Descenso de rafting en el tramo de Tamayo, Río Cabriel. Ideal para familias y principiantes. Recorrido de 6 km con rápidos de nivel II-III. Actividad perfecta para disfrutar en grupo.",
      areaServed: {
        "@type": "Place",
        name: "Venta del Moro, Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Rafting en Tamayo",
        price: "40",
        priceCurrency: "EUR",
        description: "Descenso de rafting en Tamayo. Recorrido: 6 km. Duración: 2 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Iniciación (Nivel II-III)",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "4 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Recorrido",
          value: "6 km",
        },
        {
          "@type": "PropertyValue",
          name: "Grupo Mínimo",
          value: "6 personas",
        },
        {
          "@type": "PropertyValue",
          name: "Requisito",
          value: "Saber nadar",
        },
      ],
    },
  },
  "/actividades/rafting-cabriel": {
    metadata: {
      title: "Rafting en Las Hoces del Cabriel | Nivel Avanzado | Aiguaroca",
      description:
        "Rafting avanzado en Las Hoces del Cabriel. Descenso de 20 km con rápidos de nivel III-IV. Para aventureros experimentados. Desde 75€. ¡La mejor aventura en aguas bravas!",
      keywords:
        "rafting hoces cabriel, rafting avanzado valencia, rafting nivel 4, rafting aguas bravas, rafting deportivo cabriel, descenso extremo rafting",
      openGraph: {
        title: "Rafting en Las Hoces del Cabriel | Nivel Avanzado | Aiguaroca",
        description:
          "Rafting avanzado en Las Hoces del Cabriel. 20 km de adrenalina pura con rápidos de nivel III-IV.",
        url: "https://www.aiguaroca.com/actividades/rafting-cabriel",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/cabrial.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/rafting-cabriel",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Rafting en Las Hoces del Cabriel",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Descenso avanzado de rafting en Las Hoces del Cabriel. Recorrido de 20 km por el Parque Natural con rápidos de nivel III-IV. Experiencia completa de día entero para aventureros.",
      areaServed: {
        "@type": "Place",
        name: "Hoces del Cabriel, Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Rafting en Las Hoces del Cabriel",
        price: "75",
        priceCurrency: "EUR",
        description: "Descenso avanzado de rafting. Recorrido: 20 km. Duración: 5 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Avanzado (Nivel III-IV)",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "14 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "5 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Recorrido",
          value: "20 km",
        },
        {
          "@type": "PropertyValue",
          name: "Grupo Mínimo",
          value: "6 personas",
        },
        {
          "@type": "PropertyValue",
          name: "Requisito",
          value: "Saber nadar y experiencia previa recomendada",
        },
        {
          "@type": "PropertyValue",
          name: "Incluye",
          value: "Comida en el río",
        },
      ],
    },
  },
  "/actividades/circuito-multiaventura": {
    metadata: {
      title: "Circuito Multiaventura en Valencia - Venta del Moro",
      description:
        "Vive la aventura en nuestro circuito multiaventura natural en Valencia. Tirolinas, puentes colgantes y retos entre árboles. ¡Reserva ya el circuito!",
      keywords:
        "circuito multiaventura valencia, tirolinas valencia, parque aventura valencia, circuito arboles valencia, multiaventura venta del moro, actividades familiares valencia",
      openGraph: {
        title: "Circuito Multiaventura en Valencia | Aiguaroca",
        description:
          "Circuito multiaventura natural entre árboles con tirolinas, puentes y retos emocionantes en Valencia.",
        url: "https://www.aiguaroca.com/actividades/circuito-multiaventura",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/circito.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/circuito-multiaventura",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Circuito Multiaventura",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Circuito multiaventura totalmente integrado en la naturaleza con plataformas en árboles, tirolinas, puentes colgantes y retos emocionantes en Venta del Moro, Valencia.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Circuito Multiaventura",
        price: "35",
        priceCurrency: "EUR",
        description: "Circuito multiaventura entre árboles. Nivel adaptable. Duración: 2 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Adaptable a todos los niveles",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "6 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2 horas aproximadamente",
        },
      ],
    },
  },
  "/actividades/kayak-en-aguas-bravas": {
    metadata: {
      title: "Kayak en Aguas Bravas Valencia - Río Cabriel | Aiguaroca",
      description:
        "Descensos en kayak por aguas bravas en el Río Cabriel, Valencia. Aiguaroca ofrece aventuras en kayak seguras y emocionantes para todos los niveles. ¡Reserva tu descenso en kayak!",
      keywords:
        "kayak valencia, kayak aguas bravas, kayak rio cabriel, kayak venta del moro, deportes acuáticos valencia, kayak aventura valencia, descensos kayak",
      openGraph: {
        title: "Kayak en Aguas Bravas - Río Cabriel | Aiguaroca",
        description:
          "Experimenta la emoción del kayak en aguas bravas del Río Cabriel. Descensos seguros guiados por monitores expertos.",
        url: "https://www.aiguaroca.com/actividades/kayak-en-aguas-bravas",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/kayak.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/kayak-en-aguas-bravas",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Kayak en Aguas Bravas",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Descensos en kayak por aguas bravas en el Río Cabriel, Valencia. El kayak es el deporte de aventura por excelencia en aguas bravas, guiados por monitores experimentados en Venta del Moro.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Kayak en Aguas Bravas - Río Cabriel",
        price: "40",
        priceCurrency: "EUR",
        description: "Descenso en kayak por aguas bravas en el Río Cabriel. Recorrido: 6 km. Duración: 2 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Medio (Iniciación)",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "14 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Recorrido",
          value: "6 km",
        },
        {
          "@type": "PropertyValue",
          name: "Grupo Mínimo",
          value: "6 personas",
        },
      ],
    },
  },
  "/actividades/kayak-travesia": {
    metadata: {
      title: "Kayak Travesía Valencia | Aguas Tranquilas | Aiguaroca",
      description:
        "Kayak travesía en aguas tranquilas, Valencia. Disfruta de la naturaleza navegando por el Río Cabriel. Actividad relajante y familiar en el Embalse de Contreras.",
      keywords:
        "kayak travesia, kayak aguas tranquilas, kayak familiar valencia, travesia kayak, kayak embalse contreras",
      openGraph: {
        title: "Kayak Travesía Valencia | Aguas Tranquilas | Aiguaroca",
        description:
          "Kayak travesía en aguas tranquilas. Disfruta de la naturaleza navegando por el Embalse de Contreras.",
        url: "https://www.aiguaroca.com/actividades/kayak-travesia",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/cruise-1.svg" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/kayak-travesia",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Kayak en Aguas Tranquilas - Embalse de Contreras",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Kayak travesía en el Embalse de Contreras. Actividad relajante ideal para familias y grupos. Disfruta de los paisajes del Parque Natural Hoces del Cabriel.",
      areaServed: {
        "@type": "Place",
        name: "Embalse de Contreras, Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Kayak en Aguas Tranquilas",
        price: "35",
        priceCurrency: "EUR",
        description: "Travesía en kayak por el Embalse de Contreras. Duración: 2,5 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Iniciación (Adaptable)",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "6 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2,5 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Grupo Mínimo",
          value: "6 personas",
        },
        {
          "@type": "PropertyValue",
          name: "Requisito",
          value: "Saber nadar",
        },
      ],
    },
  },
  "/actividades/canoas": {
    metadata: {
      title: "Canoa-Raft en Valencia | Río Cabriel | Aiguaroca",
      description:
        "Descenso en canoa-raft por el Río Cabriel, Valencia. Actividad acuática perfecta para grupos y familias. Canoas de dos plazas en aguas bravas. ¡Diversión garantizada!",
      keywords:
        "canoa raft valencia, canoas rio cabriel, descenso canoas, actividad canoas, canoa raft aguas bravas",
      openGraph: {
        title: "Canoa-Raft en Valencia | Río Cabriel | Aiguaroca",
        description:
          "Descenso en canoa-raft por el Río Cabriel. Actividad acuática perfecta para grupos y familias.",
        url: "https://www.aiguaroca.com/actividades/canoas",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/canoa-raft-main.svg" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/canoas",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Canoa-Raft en el Río Cabriel",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Descenso en canoa-raft por el Río Cabriel. Canoas de dos plazas diseñadas para descensos en aguas bravas. Actividad ideal para parejas y familias con trabajo en equipo.",
      areaServed: {
        "@type": "Place",
        name: "Río Cabriel, Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Canoa-Raft",
        price: "40",
        priceCurrency: "EUR",
        description: "Descenso en canoa-raft por el Río Cabriel. Recorrido: 6 km. Duración: 2 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Iniciación (Adaptable)",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "6 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Recorrido",
          value: "6 km",
        },
        {
          "@type": "PropertyValue",
          name: "Grupo Mínimo",
          value: "6 personas",
        },
        {
          "@type": "PropertyValue",
          name: "Capacidad",
          value: "2 plazas por canoa",
        },
        {
          "@type": "PropertyValue",
          name: "Requisito",
          value: "Saber nadar",
        },
      ],
    },
  },
  "/actividades/barranco-acuatico": {
    metadata: {
      title: "Barranco Acuático - Barranquismo en Enguidanos | Aiguaroca",
      description:
        "Descenso de barrancos con rappel, saltos y toboganes naturales. Aventura extrema en los barrancos de Enguidanos con guías expertos. Desde 45€.",
      keywords:
        "barranco acuático, barranquismo, descenso de barrancos, canyoning, rappel, aventura, Enguidanos, Cuenca, deporte extremo",
      openGraph: {
        title: "Barranco Acuático - Barranquismo en Enguidanos | Aiguaroca",
        description:
          "Descenso de barrancos con rappel, saltos y toboganes naturales. Aventura extrema en los barrancos de Enguidanos con guías expertos.",
        url: "https://www.aiguaroca.com/actividades/barranco-acuatico",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/activity/canyon-1.svg" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/barranco-acuatico",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Barranco Acuático - Barranquismo",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Descenso de barrancos acuáticos con rappel, saltos y toboganes naturales en Enguidanos. Aventura extrema con guías expertos en los barrancos de Cuenca.",
      areaServed: {
        "@type": "Place",
        name: "Enguidanos, Cuenca, España",
      },
      offers: {
        "@type": "Offer",
        name: "Barranco Acuático",
        price: "45",
        priceCurrency: "EUR",
        description: "Descenso de barrancos con rappel, saltos y toboganes. Recorrido: 6 km. Duración: 2 horas.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Medio",
        },
        {
          "@type": "PropertyValue",
          name: "Edad Mínima",
          value: "8 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Recorrido",
          value: "6 km",
        },
        {
          "@type": "PropertyValue",
          name: "Grupo Mínimo",
          value: "6 personas",
        },
        {
          "@type": "PropertyValue",
          name: "Requisito",
          value: "Saber nadar",
        },
        {
          "@type": "PropertyValue",
          name: "Localidad",
          value: "Enguidanos",
        },
      ],
    },
  },
  "/actividades/paintball": {
    metadata: {
      title: "Paintball Valencia | Campo de Paintball | Aiguaroca",
      description:
        "Paintball en Valencia con equipamiento completo. Ideal para grupos, despedidas y empresas. Diversión y adrenalina aseguradas.",
      keywords:
        "paintball valencia, campo paintball, paintball grupos, paintball empresas",
      openGraph: {
        title: "Paintball Valencia | Campo de Paintball | Aiguaroca",
        description:
          "Paintball en Valencia con equipamiento completo. Ideal para grupos, despedidas y empresas.",
        url: "https://www.aiguaroca.com/actividades/paintball",
        images: [
          {
            url: "https://www.aiguaroca.com/api/v1/assets/activity/paintball.png",
          },
        ],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/actividades/paintball",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Paintball en Valencia",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Partidas de paintball en Valencia con equipamiento completo, monitor especializado y 200 bolas por jugador.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Paintball",
        price: "30",
        priceCurrency: "EUR",
        description: "Actividad de paintball de 2 horas con equipamiento completo.",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Nivel",
          value: "Principiante",
        },
        {
          "@type": "PropertyValue",
          name: "Edad mínima",
          value: "16 años",
        },
        {
          "@type": "PropertyValue",
          name: "Duración",
          value: "2 horas",
        },
        {
          "@type": "PropertyValue",
          name: "Ubicación",
          value: "Venta del Moro, Valencia",
        },
      ],
    },
  },
  "/familias": {
    metadata: {
      title: "Actividades Familiares en Valencia | Aiguaroca",
      description:
        "Descubre actividades familiares en Valencia. Rafting, multiaventura y más para pasar tiempo en familia. Apta para todas las edades. ¡Crea recuerdos inolvidables!",
      keywords:
        "actividades familiares valencia, rafting familia, aventura en familia valencia, actividades niños valencia, planes en familia, multiaventura familiar",
      openGraph: {
        title: "Actividades Familiares en Valencia | Aiguaroca",
        description:
          "Actividades familiares emocionantes en Valencia. Rafting, multiaventura y más. Ideal para crear recuerdos juntos.",
        url: "https://www.aiguaroca.com/familias",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/family.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/familias",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Actividades Familiares",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Actividades de aventura diseñadas para familias en Valencia. Desde rafting hasta multiaventura, todas las actividades adaptadas para disfrutar juntos.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Rafting en Familia",
          price: "40",
          priceCurrency: "EUR",
          description: "Descenso en rafting adaptado para familias. Ideal a partir de 4 años.",
        },
        {
          "@type": "Offer",
          name: "Multiaventura en Familia",
          price: "35",
          priceCurrency: "EUR",
          description: "Circuito multiaventura familiar con tirolinas y puentes colgantes.",
        },
      ],
    },
  },
  "/escolares": {
    metadata: {
      title: "Viajes de Estudios - Actividades Escolares en Valencia | Aiguaroca",
      description:
        "Viajes escolares y actividades educativas en Valencia. Multiaventura, rafting y experiencias al aire libre para colegios. Grupos de cualquier tamaño.",
      keywords:
        "viajes escolares valencia, actividades colegios, viaje de estudios, actividades educativas, rafting colegios, multiaventura escolar",
      openGraph: {
        title: "Viajes de Estudios - Actividades Escolares | Aiguaroca",
        description:
          "Viajes escolares emocionantes en Valencia. Actividades educativas al aire libre para colegios y grupos de estudiantes.",
        url: "https://www.aiguaroca.com/escolares",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/school.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/escolares",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Actividades Escolares",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Programas de actividades escolares en Valencia. Viajes de estudios con enfoque educativo y de aventura. Especializados en grupos de estudiantes de cualquier edad.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
    },
  },
  "/empresas": {
    metadata: {
      title: "Team Building y Eventos Corporativos en Valencia | Aiguaroca",
      description:
        "Programas de team building y eventos corporativos en Valencia. Actividades de aventura para mejorar el trabajo en equipo. Customizados para tu empresa.",
      keywords:
        "team building valencia, eventos corporativos, team building actividades, evento empresa valencia, cohesión equipo, actividades corporativas",
      openGraph: {
        title: "Team Building y Eventos Corporativos | Aiguaroca",
        description:
          "Programas de team building y eventos corporativos en Valencia. Actividades diseñadas para mejorar la comunicación y el trabajo en equipo.",
        url: "https://www.aiguaroca.com/empresas",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/corporate.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/empresas",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Team Building y Eventos Corporativos",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Programas de team building y eventos corporativos personalizados en Valencia. Actividades de aventura diseñadas para mejorar la comunicación, coordinación y trabajo en equipo.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Programa Team Building",
        description: "Programas personalizados de team building con actividades de aventura.",
      },
    },
  },
  "/equipos-deportivos": {
    metadata: {
      title: "Actividades para Equipos Deportivos en Valencia | Aiguaroca",
      description:
        "Programas de multiaventura y actividades al aire libre para equipos deportivos. Desconexión y fortalecimiento de equipo. Flexible con calendario de entrenamientos.",
      keywords:
        "equipos deportivos valencia, actividades equipos, deporte aventura, grupo deportivo, evento equipo deportivo, multiaventura equipo",
      openGraph: {
        title: "Actividades para Equipos Deportivos | Aiguaroca",
        description:
          "Programas especializados de multiaventura para equipos deportivos. Desconexión y trabajo en equipo al aire libre.",
        url: "https://www.aiguaroca.com/equipos-deportivos",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/sports.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/equipos-deportivos",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Actividades para Equipos Deportivos",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Programas de multiaventura y actividades personalizadas para equipos deportivos en Valencia. Excelente para desconectar de los entrenamientos y fortalecer el espíritu de equipo.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
    },
  },
  "/despedidas": {
    metadata: {
      title: "Despedidas de Soltero/a en Valencia | Multiaventura | Aiguaroca",
      description:
        "Despedidas de soltero/a emocionantes en Valencia. Multiaventura, rafting y actividades personalizadas. Paquetes completos con alojamiento. ¡La mejor despedida!",
      keywords:
        "despedidas de soltero valencia, despedida de soltera, paquetes despedida, multiaventura despedida, eventos despedida, despedidas personalizadas",
      openGraph: {
        title: "Despedidas de Soltero/a en Valencia | Multiaventura | Aiguaroca",
        description:
          "Despedidas de soltero/a personalizadas en Valencia. Multiaventura, rafting y mucho más. Paquetes completos para tu despedida perfecta.",
        url: "https://www.aiguaroca.com/despedidas",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/despedida.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/despedidas",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Despedidas de Soltero/a",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Programas personalizados de despedidas de soltero/a en Valencia. Actividades de multiaventura, rafting y más. Paquetes con alojamiento y alimentación.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
    },
  },
  "/aiguaroca-kids": {
    metadata: {
      title: "Aiguaroca Kids - Aventuras para Niños en Valencia | Aiguaroca",
      description:
        "Aiguaroca Kids ofrece actividades de aventura para los más pequeños. Rafting, multiaventura y más adaptado a niños desde 4 años. ¡Diversión garantizada!",
      keywords:
        "actividades niños valencia, rafting niños, multiaventura niños, aiguaroca kids, aventuras infantiles, campamentos niños valencia",
      openGraph: {
        title: "Aiguaroca Kids - Aventuras para Niños | Aiguaroca",
        description:
          "Actividades divertidas y seguras para niños. Rafting, multiaventura y más, adaptado desde 4 años.",
        url: "https://www.aiguaroca.com/aiguaroca-kids",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/kids.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/aiguaroca-kids",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Aiguaroca Kids",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Actividades de aventura especialmente adaptadas para niños en Valencia. Rafting Kids, Multiaventura Kids y más. Seguridad y diversión garantizadas desde los 4 años.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Rafting Kids",
          description: "Descenso de rafting adaptado para niños desde 4 años.",
          ageRange: "4-12",
        },
        {
          "@type": "Offer",
          name: "Multiaventura Kids",
          description: "Circuito multiaventura infantil con tirolinas adaptadas.",
          ageRange: "6-14",
        },
      ],
    },
  },
  "/cumpleanos": {
    metadata: {
      title: "Cumpleaños Temáticos en Valencia | Multiaventura | Aiguaroca",
      description:
        "Celebra cumpleaños únicos en Valencia con Aiguaroca. Multiaventura, rafting y actividades personalizadas. Paquetes completos para tu fiesta perfecta.",
      keywords:
        "cumpleaños valencia, fiesta cumpleaños, cumpleaños multiaventura, celebraciones especiales, fiesta infantil, eventos cumpleaños",
      openGraph: {
        title: "Cumpleaños Temáticos en Valencia | Aiguaroca",
        description:
          "Celebra cumpleaños únicos y emocionantes en Valencia. Multiaventura y actividades personalizadas para todas las edades.",
        url: "https://www.aiguaroca.com/cumpleanos",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/birthday.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/cumpleanos",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Cumpleaños Temáticos",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Paquetes de cumpleaños temáticos en Valencia. Actividades de multiaventura personalizadas para todas las edades. Diversión garantizada para celebraciones inolvidables.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
    },
  },
  "/dia-multiaventura": {
    metadata: {
      title: "Día Multiaventura en Valencia | Packs de Actividades | Aiguaroca",
      description:
        "Día multiaventura en Valencia con packs de 2 actividades. Elige entre rafting, kayak, circuito de aventura y más. Diversión garantizada desde 35€.",
      keywords:
        "día multiaventura valencia, packs actividades, aventura día completo, multiaventura paquetes, actividades valencia día",
      openGraph: {
        title: "Día Multiaventura en Valencia | Packs de Actividades | Aiguaroca",
        description:
          "Día multiaventura con packs de actividades. Combina rafting, kayak, multiaventura y más en Valencia.",
        url: "https://www.aiguaroca.com/dia-multiaventura",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/multi-adventure.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/dia-multiaventura",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Día Multiaventura",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Packs de día multiaventura en Valencia. Combina 2 actividades de tu elección entre rafting, kayak, circuito de aventura, paintball y más. Ideal para grupos, familias y amigos.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Pack 2 Actividades",
          description: "Día multiaventura con 2 actividades de tu elección.",
          priceCurrency: "EUR",
        },
      ],
    },
  },
  "/paquetes-fin-de-semana": {
    metadata: {
      title: "Paquetes Fin de Semana en Valencia | Alojamiento + Actividades | Aiguaroca",
      description:
        "Paquetes fin de semana en Valencia con alojamiento y actividades incluidas. Rafting, multiaventura y más. Escapa este fin de semana a la aventura.",
      keywords:
        "fin de semana valencia, paquetes fin de semana, escapada fin de semana, alojamiento actividades, fin de semana aventura, turismo activo valencia",
      openGraph: {
        title: "Paquetes Fin de Semana en Valencia | Aiguaroca",
        description:
          "Paquetes fin de semana con alojamiento y actividades. Vive una escapada de aventura en Valencia.",
        url: "https://www.aiguaroca.com/paquetes-fin-de-semana",
        images: [{ url: "https://www.aiguaroca.com/api/v1/assets/weekend.png" }],
      },
      alternates: {
        canonical: "https://www.aiguaroca.com/paquetes-fin-de-semana",
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Paquetes Fin de Semana",
      provider: {
        "@type": "Organization",
        name: "Aiguaroca",
        url: "https://www.aiguaroca.com/",
      },
      description:
        "Paquetes fin de semana completos en Valencia con alojamiento y actividades de aventura. Elige duración y actividades. Todo incluido, nosotros nos encargamos.",
      areaServed: {
        "@type": "Place",
        name: "Valencia, España",
      },
      offers: {
        "@type": "Offer",
        name: "Paquete Fin de Semana",
        description: "Fin de semana con alojamiento y actividades incluidas. Tu eliges cantidad de días y actividades.",
      },
    },
  },
};

export function getSEOConfig(path: string): SEOConfigItem {
  return seoConfig[path] || seoConfig["/"];
}
