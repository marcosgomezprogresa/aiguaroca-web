export const BASE_URL = "https://www.aiguaroca.com";

export type RouteSection =
  | "home"
  | "activities"
  | "offers"
  | "groups"
  | "legal"
  | "company";

export interface AppRoute {
  path: string;
  label: string;
  section: RouteSection;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastModified: Date;
  sitemap: boolean;
  nav: boolean;
  prefetch: boolean;
  priority: number;
}

const lastModified = new Date("2026-02-13");

export const routes = {
  home: {
    path: "/",
    label: "Inicio",
    section: "home",
    changeFrequency: "weekly",
    lastModified,
    sitemap: true,
    nav: false,
    prefetch: true,
    priority: 1,
  },
  activitiesOverview: {
    path: "/actividades",
    label: "Actividades",
    section: "activities",
    changeFrequency: "weekly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  rafting: {
    path: "/actividades/rafting",
    label: "Rafting",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  circuitoMultiaventura: {
    path: "/actividades/circuito-multiaventura",
    label: "Circuito Multiaventura",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  kayakAguasBravas: {
    path: "/actividades/kayak-en-aguas-bravas",
    label: "Kayak aguas bravas",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  kayakTravesia: {
    path: "/actividades/kayak-travesia",
    label: "Kayak aguas tranquilas",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  canoas: {
    path: "/actividades/canoas",
    label: "Canoa-Raft",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  barrancoAcuatico: {
    path: "/actividades/barranco-acuatico",
    label: "Barranco Acuático",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  paintball: {
    path: "/actividades/paintball",
    label: "Paintball",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.8,
  },
  raftingTamayo: {
    path: "/actividades/rafting-tamayo",
    label: "Rafting Tamayo",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: false,
    prefetch: true,
    priority: 0.8,
  },
  raftingCabriel: {
    path: "/actividades/rafting-cabriel",
    label: "Rafting Hoces del Cabriel",
    section: "activities",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: false,
    prefetch: true,
    priority: 0.8,
  },
  diaMultiaventura: {
    path: "/dia-multiaventura",
    label: "Día Multiaventura",
    section: "offers",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  paquetesFinSemana: {
    path: "/paquetes-fin-de-semana",
    label: "Paquetes Fin de Semana",
    section: "offers",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  familias: {
    path: "/familias",
    label: "Familias",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  escolares: {
    path: "/escolares",
    label: "Viajes Escolares",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  empresas: {
    path: "/empresas",
    label: "Empresas",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  despedidas: {
    path: "/despedidas",
    label: "Despedidas de Solteros",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  equiposDeportivos: {
    path: "/equipos-deportivos",
    label: "Equipos Deportivos",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  cumpleanos: {
    path: "/cumpleanos",
    label: "Cumpleaños",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  aiguarocaKids: {
    path: "/aiguaroca-kids",
    label: "Kids",
    section: "groups",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  sobreNosotros: {
    path: "/sobre-nosotros",
    label: "Sobre nosotros",
    section: "company",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  contacto: {
    path: "/contacto",
    label: "Contacto",
    section: "company",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: true,
    prefetch: true,
    priority: 0.7,
  },
  privacidad: {
    path: "/politica-de-privacidad",
    label: "Política de privacidad",
    section: "legal",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: false,
    prefetch: false,
    priority: 0.5,
  },
  condiciones: {
    path: "/condiciones-generales",
    label: "Condiciones generales",
    section: "legal",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: false,
    prefetch: false,
    priority: 0.5,
  },
  cookies: {
    path: "/politica-de-cookies",
    label: "Política de cookies",
    section: "legal",
    changeFrequency: "monthly",
    lastModified,
    sitemap: true,
    nav: false,
    prefetch: false,
    priority: 0.5,
  },
} as const satisfies Record<string, AppRoute>;

export const activityNavRoutes = [
  routes.rafting,
  routes.circuitoMultiaventura,
  routes.kayakAguasBravas,
  routes.kayakTravesia,
  routes.canoas,
  routes.barrancoAcuatico,
  routes.paintball,
] as const;

export const offerNavRoutes = [
  routes.diaMultiaventura,
  routes.paquetesFinSemana,
  routes.activitiesOverview,
] as const;

export const groupNavRoutes = [
  routes.familias,
  routes.escolares,
  routes.empresas,
  routes.despedidas,
  routes.equiposDeportivos,
  routes.cumpleanos,
  routes.aiguarocaKids,
] as const;

export const legalRoutes = [routes.privacidad, routes.condiciones, routes.cookies] as const;

export const sitemapRoutes = Object.values(routes).filter((route) => route.sitemap);
export const prefetchRoutes = Object.values(routes).filter((route) => route.prefetch);

export const routeAliases = [
  {
    source: "/cumpleaños",
    destination: routes.cumpleanos.path,
    permanent: true,
  },
] as const;
