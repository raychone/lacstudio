# Plan GEO / AEO — LAC Studio

Actualizat: 22 noiembrie 2026  
Stare: etapa 1 în desfășurare  
Obiectiv: LAC Studio să fie ușor de găsit, identificat corect și citat ca studio independent de dezvoltare software al lui Andrei Lucaciu, la `lacstudio.ro`.

## Principiu

Nu urmărim „hack-uri AI” sau texte produse doar pentru clasare. Construim o identitate digitală coerentă, conținut util din experiență reală și semnale tehnice clare. Astfel, Google, motoarele de căutare cu AI și sistemele de răspuns pot lega corect brandul, persoana, serviciile și proiectele.

## Mesajul canonic de brand

> LAC Studio este studioul independent de dezvoltare software al lui Andrei Lucaciu. Construiește aplicații web personalizate, produse SaaS, aplicații Android, iPhone/iPad/macOS, instrumente desktop și sisteme operaționale pentru afaceri.

Formularea poate fi adaptată natural în fiecare limbă, dar sensul de mai sus trebuie păstrat pe site, LinkedIn, GitHub, Facebook și eventualele listări de aplicații.

## Ce știm deja

- Google a indexat deja site-ul; captura furnizată arată că pagina „À propos” apare pentru căutarea de brand.
- Site-ul are sitemap XML, `robots.txt`, canonicals, versiuni localizate și metadate Open Graph.
- Datele structurate existente includ `Person`, `WebSite`, `Service`, `SoftwareApplication` și `BreadcrumbList`.
- Lipsesc încă o entitate structurată clară `Organization` pentru LAC Studio și legături `sameAs` către profilurile sociale oficiale.
- Schema persoanei folosește acum numele „Lucaciu Andrei Codrin”. Pentru comunicarea publică, numele canonic trebuie stabilit ca „Andrei Lucaciu”; orice nume legal complet rămâne doar acolo unde este necesar legal.
- În `robots.txt`, crawlerii sunt permiși în mod general. Mai rămâne confirmarea în producție că nu există blocări de hosting, firewall sau reguli de cache.

## Etapa 1 — baseline, control și măsurare

Scop: să știm exact ce vede Google și să avem o măsurătoare inițială înainte de modificări.

### 1.1 Audit tehnic local

- [x] Confirmare sitemap, robots, canonicals și localizare.
- [x] Inventar al metadatelor și JSON-LD existente.
- [x] Identificare goluri de entitate: `Organization`, `sameAs`, relația brand–fondator.
- [x] Verificare inițială a manifestului web: descrierea trebuie aliniată ulterior cu mesajul canonic de brand.
- [ ] Rulare validare SEO/structurată după orice implementare viitoare.

### 1.2 Google Search Console

- [ ] Verificare proprietate de domeniu `lacstudio.ro`.
- [ ] Trimitere/confirmare sitemap `https://lacstudio.ro/sitemap.xml`.
- [ ] URL Inspection pentru: homepage, About, Services, Work și câte un case study public.
- [ ] Notare pentru fiecare URL: indexat, canonical ales de Google, data ultimei accesări, probleme de crawl și rich results.
- [ ] Export baseline pentru ultimele 28 și 90 de zile: clicuri, impresii, CTR, poziție, query-uri și pagini.
- [ ] Salvare query-uri de brand: `LAC Studio`, `LAC Studio Andrei Lucaciu`, `lacstudio.ro`.
- [ ] Urmărire separată a query-urilor comerciale non-brand în franceză și engleză.

### 1.3 Baseline AI

- [ ] Rulare lunară a unui set fix de întrebări în Google AI, ChatGPT Search și Perplexity.
- [ ] Salvare rezultat: apare sau nu LAC Studio, este citat sau nu, descrierea este corectă sau nu, ce surse sunt citate.
- [ ] Teste de brand: „What is LAC Studio?”, „Qui est Andrei Lucaciu ?”, „LAC Studio développe quoi ?”.
- [ ] Teste comerciale: „développeur SaaS indépendant”, „application web sur mesure”, „développeur Android freelance”, „application macOS sur mesure”.

### Criteriu de ieșire din etapa 1

Avem un tabel de bază cu indexarea Google, query-urile actuale, performanța inițială și răspunsurile AI. Nu evaluăm succesul după o singură interogare sau o singură zi.

## Etapa 2 — identitate de entitate și încredere

Scop: să eliminăm ambiguitatea dintre LAC Studio și alte branduri cu nume asemănător.

- Definim în JSON-LD `Organization` pentru LAC Studio și `Person` pentru Andrei Lucaciu.
- Legăm corect organizația de fondator, website, logo, e-mail și profiluri sociale.
- Adăugăm `sameAs` numai pentru LinkedIn, GitHub și Facebook reale, controlate de Andrei.
- Folosim aceeași identitate pe homepage, About, footer, profilurile sociale și viitoarele listări din App Store / Google Play.
- Folosim `ProfilePage` pe pagina About, cu Andrei Lucaciu drept entitate principală.
- Nu declarăm o adresă, echipă, cifră de afaceri, recenzii sau rezultate care nu pot fi susținute.

## Etapa 3 — pagini de servicii cu intenție comercială

Scop: să poți fi găsit și pentru nevoi, nu doar pentru numele brandului.

Pagini candidate, publicate doar cu text original și util:

1. Développement SaaS / SaaS development
2. Applications web sur mesure
3. Applications Android natives
4. Applications Apple: iPhone, iPad și macOS
5. Automatisation, backend și intégrations
6. Desktop tools și speech-to-text pentru Windows/macOS

Fiecare pagină va răspunde clar la: pentru cine este, ce problemă rezolvă, ce include, ce rezultat poate livra, ce tehnologii sunt relevante și ce exemplu public poate susține afirmațiile.

## Etapa 4 — case studies și dovezi primare

Scop: să oferim surse originale, citabile și credibile.

Pentru fiecare proiect aprobat pentru publicare:

- contextul și problema;
- rolul exact al lui Andrei;
- platformele și tehnologiile;
- deciziile de produs/tehnice relevante;
- capturi aprobate;
- rezultate cuantificate numai dacă sunt verificabile;
- un link către aplicație, repository sau referință externă, dacă este permis.

Prioritate inițială: proiecte care diferențiază LAC Studio — aplicații operaționale, SaaS, local-first, Android, Apple și speech-to-text desktop.

## Etapa 5 — confirmare externă

Scop: ca informația despre LAC Studio să nu existe doar pe propriul domeniu.

- LinkedIn: rol clar „Founder / Independent Software Developer — LAC Studio”, link spre site și aceeași descriere de servicii.
- GitHub: bio cu `lacstudio.ro`, repository-uri relevante pinned și README-uri explicative.
- Facebook: website, categorie și descriere aliniate cu mesajul canonic.
- Store listings: App Store, Google Play și Mac App Store, pe măsură ce aplicațiile devin publicabile.
- Mențiuni externe autentice: clienți, proiecte open-source, parteneri, comunități profesionale sau publicații relevante.

Nu cumpărăm backlink-uri, mențiuni sau directoare fără valoare reală.

## Etapa 6 — calitate tehnică și crawl

- Confirmăm în producție răspunsuri 200, SSR/HTML accesibil, canonicale și `hreflang` corecte.
- Verificăm ca Googlebot, OAI-SearchBot și ceilalți crawlieri relevanți să nu fie blocați neintenționat.
- Păstrăm sitemap-ul complet și cu date `lastmod` care reflectă schimbări reale de conținut.
- Validăm structured data, fără a presupune că markup-ul garantează rich results.
- Evităm `llms.txt` ca prioritate: nu înlocuiește conținutul bun, indexarea sau autoritatea de brand.

## Măsurare lunară

| Indicator | Semn bun |
| --- | --- |
| Indexare | Pagini importante indexate și cu canonical corect |
| Brand | Google leagă LAC Studio de Andrei Lucaciu și software development |
| Non-brand | Cresc impresiile pentru servicii și probleme rezolvate |
| AI | Răspunsurile identifică corect studioul și pot cita lacstudio.ro |
| Conversie | Crește numărul de vizite relevante și mesaje de contact |

## În afara scopului acestui plan

- Integrarea Bing / Bing Webmaster Tools / IndexNow.
- Afirmații, ratinguri, premii sau rezultate neconfirmate.
- Producție automată de pagini SEO repetitive.

## Următoarea acțiune

Finalizăm etapa 1 prin conectarea sau exportul read-only din Google Search Console. Apoi stabilim baseline-ul de indexare și query-uri, fără să modificăm site-ul până nu sunt aprobate explicit acțiunile din etapa 2.
