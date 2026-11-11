import { services } from "@/content/services";
import type { Locale } from "./config.ts";
import { isLocaleReady } from "./portfolio.ts";

type Service = readonly [string, string, string];

const localizedServices: Record<Exclude<Locale, "en">, readonly Service[]> = {
  fr: [
    ["Applications web sur mesure", "Des logiciels web conçus autour des tâches que les clients, équipes ou partenaires doivent accomplir.", "Portails clients, outils internes, tableaux de bord et plateformes métier."],
    ["Développement SaaS", "Des fondations produit pour des logiciels avec rôles, administration et usage par compte ou abonnement.", "MVP, comptes clients, autorisations, parcours prêts pour la facturation et administration."],
    ["Applications Android et desktop", "Des logiciels ciblés pour le travail sur appareil, sur le terrain ou au-delà du navigateur.", "Flux Android, données locales, fonctions d'appareil, utilitaires desktop et tâches d'arrière-plan."],
    ["Backend et API", "Les services derrière un logiciel fiable : données, autorisations, intégrations et traitements d'arrière-plan.", "Conception d'API, bases de données, rôles, files, notifications et connexions de services."],
    ["UI et UX produit", "Des interfaces qui aident à comprendre l'action à mener, terminer une tâche et réagir quand la situation change.", "Architecture de l'information, parcours, conception d'interactions et interfaces responsives."],
    ["Logiciels hors ligne d'abord", "Des applications qui continuent à fonctionner quand la connexion est faible, intermittente ou absente.", "Persistance locale, stratégie de synchronisation et flux terrain conscients des conflits."],
    ["Automatisation et intégrations", "Des connexions qui éliminent les passages manuels entre logiciels, personnes et tâches récurrentes.", "API, notifications, tâches planifiées, messagerie et relais opérationnels."],
  ],
  ro: [
    ["Aplicații web la comandă", "Software web construit în jurul sarcinilor pe care clienții, echipele sau partenerii trebuie să le rezolve.", "Portaluri pentru clienți, instrumente interne, dashboarduri și platforme de business."],
    ["Dezvoltare SaaS", "Fundații de produs pentru software cu roluri, administrare și utilizare pe cont sau abonament.", "MVP-uri, conturi de client, permisiuni, fluxuri pregătite pentru facturare și administrare."],
    ["Aplicații Android și desktop", "Software concentrat pentru munca ce se desfășoară pe un dispozitiv, pe teren sau dincolo de browser.", "Fluxuri Android, date locale, funcții ale dispozitivului, utilitare desktop și procese în fundal."],
    ["Backend și API-uri", "Serviciile din spatele unui software de încredere: date, permisiuni, integrări și procesare în fundal.", "Design API, baze de date, roluri, cozi, notificări și conexiuni între servicii."],
    ["UI și UX de produs", "Interfețe care îi ajută pe oameni să înțeleagă ce au de făcut, să finalizeze sarcina și să se adapteze când ceva se schimbă.", "Arhitectură informațională, fluxuri de utilizator, design de interacțiune și interfețe responsive."],
    ["Software offline-first", "Aplicații care continuă să funcționeze când conexiunea este slabă, intermitentă sau indisponibilă.", "Persistență locală, strategie de sincronizare și fluxuri de teren pregătite pentru conflicte."],
    ["Automatizare și integrări", "Conexiuni care elimină predările manuale dintre software, oameni și activități operaționale recurente.", "API-uri, notificări, activități programate, mesagerie și predări operaționale."],
  ],
  es: [
    ["Aplicaciones web a medida", "Software web creado alrededor de las tareas que clientes, equipos o socios necesitan completar.", "Portales de clientes, herramientas internas, paneles y plataformas empresariales."],
    ["Desarrollo SaaS", "Bases de producto para software con roles, administración y uso por cuenta o suscripción.", "MVP, cuentas de cliente, permisos, flujos preparados para facturación y administración."],
    ["Aplicaciones Android y de escritorio", "Software enfocado al trabajo que ocurre en un dispositivo, en campo o más allá del navegador.", "Flujos Android, datos locales, funciones del dispositivo, utilidades de escritorio y tareas en segundo plano."],
    ["Backend y API", "Los servicios que sostienen un software fiable: datos, permisos, integraciones y procesamiento en segundo plano.", "Diseño de API, bases de datos, roles, colas, notificaciones y conexiones entre servicios."],
    ["UI y UX de producto", "Interfaces que ayudan a entender qué hacer, completar la tarea y recuperarse cuando algo cambia.", "Arquitectura de información, flujos de usuario, diseño de interacción e interfaces adaptables."],
    ["Software offline-first", "Aplicaciones que siguen funcionando cuando la conexión es débil, intermitente o inexistente.", "Persistencia local, estrategia de sincronización y flujos de campo conscientes de conflictos."],
    ["Automatización e integraciones", "Conexiones que eliminan traspasos manuales entre software, personas y tareas operativas recurrentes.", "API, notificaciones, trabajo programado, mensajería y traspasos operativos."],
  ],
};

export function localizeServices(locale: Locale): readonly Service[] {
  if (!isLocaleReady(locale)) throw new Error(`No complete service translation is available for locale: ${locale}`);
  return locale === "en" ? services : localizedServices[locale];
}
