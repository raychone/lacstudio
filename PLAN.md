# Plan GEO / AEO — LAC Studio

Actualizat: 23 noiembrie 2026  
Stare: etapa de bază, identitatea de entitate și trei pagini comerciale sunt publicate; următoarea prioritate este extinderea dovezilor și a paginilor pentru intenții comerciale.  
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

## Jurnal de progres

| Data | Finalizat | Rezultat |
| --- | --- | --- |
| 22 nov. 2026 | Search Console și sitemap | Proprietatea este verificată, sitemap-ul este acceptat, iar solicitările de indexare pentru primele URL-uri prioritare au fost trimise cu succes. |
| 22 nov. 2026 | Identitate LAC Studio | JSON-LD pentru `Organization` și `Person`, relația cu Andrei Lucaciu și profilele LinkedIn, GitHub și Facebook au fost publicate. |
| 22 nov. 2026 | Pagini comerciale franceze | Sunt publicate: logiciel métier, transcription locale și aplicații Apple. |
| 22 nov. 2026 | PsyClinic | Proiectul macOS este în Work, în tab-ul Desktop & macOS, carousel și case study; imaginea este WebP responsive (25–78 KB). |
| 22 nov. 2026 | Stabilitate publică | S-au adăugat favicon-ul şi recuperarea automată după bundle-uri vechi rămase în cache după deploy. |

### Situația indexării la ultima verificare

- Google raporta 62 URL-uri indexate.
- 14 URL-uri erau „Discovered — currently not indexed”; acestea sunt în principal variante localizate de Work, Pricing și case studies.
- Acesta nu este un blocaj: Google le-a descoperit, dar nu a alocat încă un crawl complet. Nu cerem indexare în masă; prioritizăm URL-urile cu intenție comercială și conținut distinct.
- La fiecare deploy important: verificăm o pagină în Search Console, cerem indexarea doar dacă materialul este nou/substanțial, apoi lăsăm Google să recrawl-uiască natural prin sitemap și linkuri interne.

## Etapa 1 — baseline, control și măsurare

Scop: să știm exact ce vede Google și să avem o măsurătoare inițială înainte de modificări.

### 1.1 Audit tehnic local

- [x] Confirmare sitemap, robots, canonicals și localizare.
- [x] Inventar al metadatelor și JSON-LD existente.
- [x] Identificare goluri de entitate: `Organization`, `sameAs`, relația brand–fondator.
- [x] Verificare inițială a manifestului web: descrierea trebuie aliniată ulterior cu mesajul canonic de brand.
- [x] Validare SEO/structurată după prima implementare: lint, testele SEO/i18n și build-ul de producție au trecut la 22 noiembrie 2026.

### 1.2 Google Search Console

- [x] Verificare proprietate de domeniu `lacstudio.ro` și conectare read-only în OpenSEO (22 noiembrie 2026).
- [x] Confirmare sitemap `https://lacstudio.ro/sitemap.xml` în URL Inspection.
- [x] URL Inspection pentru homepage, About, Services și Work, în engleză, franceză și română.
- [x] Notare pentru fiecare URL: indexat, canonical ales de Google, data ultimei accesări, probleme de crawl și rich results.
- [x] Export baseline pentru 18 august–18 noiembrie 2026: query-uri, pagini, țări și dispozitive.
- [x] Salvare query-uri de brand observate: `lac studio` și `lac studios`.
- [ ] Urmărire separată a query-urilor comerciale non-brand în franceză și engleză.

#### Baseline Search Console — 18 august–18 noiembrie 2026

- Semnalul organic este încă foarte mic: două query-uri și 10 impresii agregate raportate de Search Console. Este normal pentru un site recent și prea devreme pentru concluzii despre poziționare comercială.
- `lac studio`: 3 impresii, 1 clic, poziție medie 5. `lac studios`: 1 impresie, poziție medie 8.
- Cele mai vizibile pagini sunt `/en`, `/en/work`, homepage-ul și `/en/about`; apar și o pagină de proiect în spaniolă și Pricing în franceză.
- Franța este țara cu cele mai multe impresii în această fereastră (4); desktop a generat 7 impresii, mobile 3.
- Google clasifică încă prea puține date pentru raportarea separată brand/non-brand.

#### Rezultatul URL Inspection

- Indexate, crawlable și cu canonicalul Google corect: homepage-ul, `/en`, `/en/about`, `/en/services`, `/en/work`, `/fr/about` și `/ro/about`.
- Breadcrumb rich results sunt detectate pe paginile inspectate unde se aplică.
- **Problemă de urmărit:** `/fr/services` este „Discovered — currently not indexed”. Este în sitemap și are linkuri interne, dar Google nu a făcut încă un crawl/index complet. Nu este blocată de o regulă confirmată; aceasta devine prima pagină tehnică de urmărit după etapa de baseline.

### 1.3 Baseline AI

- [x] Baseline AI realizat pentru Franța, în franceză, la 22 noiembrie 2026: 7 întrebări comerciale neutre × ChatGPT, Gemini, Google AI Mode și Perplexity.
- [x] Rezultat: 28 din 28 răspunsuri colectate; LAC Studio a avut 0 mențiuni și lacstudio.ro a avut 0 citări. Este un baseline, nu o garanție despre toate conversațiile AI.
- [x] Surse recurente în răspunsuri: Codeur, Malt, CNIL și pagini de ofertă foarte specifice, precum Dibodev pentru aplicații métier și LucioleScribe pentru transcriere locală.
- [x] Verificare live a crawlerelor: `robots.txt` permite accesul general și expune sitemap-ul; nu există un blocaj tehnic de acces pentru AI.
- [x] Raport privat OpenSEO: AI Visibility Audit — Nov 22, 2026.
- [ ] Repetare a aceleiași măsurări după ce sunt publicate primele două pagini franceze specializate și există credite disponibile.

#### Priorități rezultate din baseline-ul AI

1. Pagină franceză dedicată aplicațiilor métier pentru PME: fluxuri, roluri, integrări, exemple aprobate și mod de lucru.
2. Pagină franceză dedicată speech-to-text local pentru Windows/macOS: confidențialitate, funcționare offline, documente/exporturi, cerințe și dovadă de proiect.
3. Un profil extern factual, preferabil Malt sau Codeur, aliniat cu LAC Studio și lacstudio.ro.
4. După o actualizare semnificativă, solicitarea indexării pentru `/fr/services`, care este în prezent „Discovered — currently not indexed”.

### Criteriu de ieșire din etapa 1

Avem un tabel de bază cu indexarea Google, query-urile actuale, performanța inițială și răspunsurile AI. Nu evaluăm succesul după o singură interogare sau o singură zi.

## Etapa 2 — identitate de entitate și încredere

Scop: să eliminăm ambiguitatea dintre LAC Studio și alte branduri cu nume asemănător.

- [x] Definim în JSON-LD `Organization` pentru LAC Studio și `Person` pentru Andrei Lucaciu.
- [x] Legăm corect organizația de fondator, website, logo, e-mail și profiluri sociale.
- [x] Adăugăm `sameAs` numai pentru LinkedIn, GitHub și Facebook reale, controlate de Andrei.
- Folosim aceeași identitate pe homepage, About, footer, profilurile sociale și viitoarele listări din App Store / Google Play.
- [x] Folosim `ProfilePage` pe pagina About, cu Andrei Lucaciu drept entitate principală.
- Nu declarăm o adresă, echipă, cifră de afaceri, recenzii sau rezultate care nu pot fi susținute.

## Etapa 3 — pagini de servicii cu intenție comercială

Scop: să poți fi găsit și pentru nevoi, nu doar pentru numele brandului.

Pagini candidate, publicate doar cu text original și util:

1. [x] Logiciel métier / application web sur mesure pentru PME
2. [x] Outil de transcription locale pentru Windows și macOS
3. [x] Développement SaaS / SaaS development
4. [x] Applications Android natives
5. [x] Applications Apple: iPhone, iPad și macOS
6. [x] Automatisation, backend și intégrations

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

Progres: PsyClinic este acum documentat ca studiu de caz public cu o captură demonstrativă, arhitectură, limitări de pilot și poziționare explicită non-certificată. Este prezent în Work, carousel și filtrul Desktop & macOS.

### Următoarele dovezi recomandate

1. **MedicHelp** — SaaS cu roluri, programări, context clinic și backend; este cea mai bună dovadă pentru pagina SaaS.
2. **GR Plus** — aplicație operațională offline-first; susține bine software-ul métier, mobil și automatizările de teren.
3. **HuBiG** — Android + gateway SMS + backend; relevantă pentru Android și integrări, dar doar cu capturi aprobate şi fără date sensibile.
4. **Language Sprint** — bună ca dovadă Android, după ce sunt selectate capturi care explică învățarea, nu doar ecrane izolate.

Pentru fiecare, înainte de extinderea case study-ului, păstrăm doar informații confirmate publicabile: rolul lui Andrei, problema, arhitectura la nivel înalt, tehnologiile, o captură demo-safe și limitele produsului.

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

1. [x] Publicăm pagina franceză **Développement SaaS**: pentru cine este, ce include, etape, integrări, ownership tehnic și exemple aprobate.
2. [x] O legăm din Services și sitemap; metadatele, canonicalul și JSON-LD folosesc mecanismul validat pentru paginile de servicii.
1. [x] Revizuim linkurile contextuale: homepage-ul indică deja Services, Work rămâne orientat spre case studies, iar Contact rămâne concentrat pe formular; nu adăugăm listări SEO redundante.
2. [~] Solicitarea de indexare pentru noile pagini de servicii pare deja trimisă în Search Console; verificăm raportul Pages și URL Inspection după 2–4 săptămâni.
3. [ ] Construim dovezi primare suplimentare: case studies aprobate, capturi și detalii tehnice pentru proiectele diferențiatoare.
4. [ ] Aliniem profilurile externe: LinkedIn, GitHub și Facebook cu mesajul canonic și linkul lacstudio.ro.
5. [x] Continuăm cu **Applications Android natives**, folosind case studies-urile deja publice drept dovezi.
6. [x] Construim pagina pentru **Automatisation, backend et intégrations**, cu exemple aprobate de fluxuri, API-uri și date.

Nu este nevoie de Bing pentru pașii de mai sus; rămâne exclus din acest plan.
