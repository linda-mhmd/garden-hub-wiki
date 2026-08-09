// ── Expanded Wiki Data: Monthly Calendar, Glashaus Guide, Cross-links ───────
// Sources: ZAMG/GeoSphere Austria climate data, LK NÖ/Bgld calendars,
// Palme (HBLFA Schönbrunn), Heistinger/Arche Noah, FiBL, Bio Austria

// ── Monthly Growing Calendar for Austrian Climate (Zone 7a/b, Vienna/Burgenland) ──

export interface MonthEntry {
  month: number;       // 1-12
  name: string;
  nameShort: string;
  avgTempHigh: number; // °C, Vienna long-term avg (ZAMG)
  avgTempLow: number;
  sunHours: number;    // avg daily
  rainfall: number;    // mm monthly avg
  phase: string;
  motto: string;
  sowIndoor: string[];
  sowOutdoor: string[];
  plant: string[];
  harvest: string[];
  care: string[];
  glashaus: string[];
  notes: string[];
  sourceNote: string;
}

export const MONTHLY_CALENDAR: MonthEntry[] = [
  {
    month: 1, name: 'Jänner', nameShort: 'Jän',
    avgTempHigh: 3.5, avgTempLow: -1.3, sunHours: 2.3, rainfall: 42,
    phase: 'Winterruhe', motto: 'Planen, bestellen, träumen.',
    sowIndoor: [
      'Chili + Paprika (ab Mitte Jänner, 25–28 °C Heizmatte)',
      'Melanzani (Ende Jänner, sehr lange Vorkultur)',
    ],
    sowOutdoor: [],
    plant: [],
    harvest: [
      'Winterlauch (frosthart, steht noch im Beet)',
      'Feldsalat + Winterpostelein (Glashaus/Frühbeet)',
      'Grünkohl (wird nach Frost süßer!)',
    ],
    care: [
      'Saatgutkataloge studieren, Bestellungen aufgeben (Arche Noah, ReinSaat, Reinsorten)',
      'Pflanzplan für die Saison zeichnen (Fruchtfolge beachten!)',
      'Gartengeräte warten, Scheren schärfen',
      'Kompost umsetzen wenn frostfrei',
    ],
    glashaus: [
      'Feldsalat + Winterpostelein weiter ernten',
      'Spinat "Winterriesen" ernten',
      'Asiasalate (Mizuna, Pak Choi) bei mildem Wetter säen',
    ],
    notes: [
      'Kürzester Monat - wenig Tageslicht, nichts überstürzen',
      'Saatgut von Arche Noah bestellen (beliebte Sorten früh vergriffen)',
    ],
    sourceNote: 'Klimadaten: GeoSphere Austria, Station Wien-Hohe Warte (202 m), Klimanormalperiode 1991-2020',
  },
  {
    month: 2, name: 'Februar', nameShort: 'Feb',
    avgTempHigh: 6.5, avgTempLow: -0.5, sunHours: 3.7, rainfall: 38,
    phase: 'Vorkultur-Start', motto: 'Auf der Fensterbank beginnt die Saison.',
    sowIndoor: [
      'Paprika + Chili (falls noch nicht geschehen - höchste Zeit!)',
      'Melanzani (Keimung bei 25 °C, 14–21 Tage)',
      'Sellerie (Lichtkeimer, nicht bedecken!)',
      'Salat (Kopfsalat-Vorkultur für April-Pflanzung)',
      'Kohlrabi (frühe Sorten)',
    ],
    sowOutdoor: [],
    plant: [],
    harvest: [
      'Winterlauch, Grünkohl, Pastinake (nach Frost süßer)',
      'Feldsalat, Winterpostelein aus Glashaus',
    ],
    care: [
      'Frühbeet vorbereiten und vorwärmen',
      'Beete mit schwarzer Folie abdecken (Boden aufwärmen)',
      'Letzte Chance für Baumschnitt (vor Saftbeginn)',
      'Kompost sieben für Anzuchterde',
    ],
    glashaus: [
      'Ab Ende Februar: Radieschen, Rucola, Asiasalate direkt säen',
      'Spinat und Feldsalat weiter ernten',
      'Glashaus lüften an sonnigen Tagen (>10 °C)',
    ],
    notes: [
      'Tage werden spürbar länger - Photosynthese nimmt zu',
      'Paprika/Chili JETZT säen oder Saison wird zu kurz',
    ],
    sourceNote: 'Temperaturdaten: GeoSphere Austria, Station Wien-Hohe Warte',
  },
  {
    month: 3, name: 'März', nameShort: 'Mär',
    avgTempHigh: 10.7, avgTempLow: 2.6, sunHours: 5, rainfall: 52,
    phase: 'Frühstart Freiland', motto: 'Die Erde erwacht - erste Direktsaaten.',
    sowIndoor: [
      'Tomaten (Mitte März, 22 °C - 6–8 Wochen bis Auspflanzen)',
      'Basilikum (Lichtkeimer, warm)',
      'Kürbis + Zucchini (Ende März)',
      'Gurken (Ende März)',
      'Physalis (wie Chili - früh und warm)',
    ],
    sowOutdoor: [
      'Erbsen (verträgt Frost! Ab Anfang März)',
      'Karotten (langsame Keimung - Geduld)',
      'Radieschen (alle 2 Wochen nachsäen)',
      'Spinat (liebt kühles Wetter)',
      'Petersilie (keimt 3–4 Wochen!)',
      'Zwiebel (Steckzwiebeln ab Mitte März)',
      'Rucola, Pflücksalat',
    ],
    plant: [
      'Knoblauch (Frühjahrspflanzung - Herbst war besser)',
      'Steckzwiebeln',
      'Erdbeeren (wenn noch nicht im Herbst)',
    ],
    harvest: [
      'Letzte Winterernte: Lauch, Grünkohl, Pastinake',
      'Erste Kräuter: Schnittlauch, Bärlauch (wild!)',
      'Rhabarber (ab Ende März)',
    ],
    care: [
      'Beete lockern (NICHT umgraben - Bodenstruktur erhalten)',
      'Kompost einarbeiten in Starkzehrer-Beete',
      'Erdbeeren von altem Laub befreien, mit Kompost mulchen',
      'Bewässerungssystem checken/anschließen',
    ],
    glashaus: [
      'Radieschen, Salat, Kohlrabi direkt ins Glashaus säen',
      'Erste Tomaten-Jungpflanzen im Glashaus (robuste Sorten)',
      'Frühbeet: Salat + Kohlrabi unter Vlies',
    ],
    notes: [
      'Faustregel: Wenn der Boden nicht mehr an den Schuhen klebt, kann gesät werden',
      'Bärlauch-Saison! Aber Verwechslung mit Maiglöckchen tödlich - im Zweifel nicht pflücken',
    ],
    sourceNote: 'Temperaturdaten: GeoSphere Austria. Saat-Empfehlungen: LK NÖ Gemüseanbaukalender',
  },
  {
    month: 4, name: 'April', nameShort: 'Apr',
    avgTempHigh: 17.2, avgTempLow: 6.7, sunHours: 7.2, rainfall: 42,
    phase: 'Vollbetrieb Vorkultur + Freiland', motto: 'Der arbeitsreichste Monat beginnt.',
    sowIndoor: [
      'Gurken (falls noch nicht)',
      'Kürbis + Zucchini (falls noch nicht)',
      'Stangenbohnen (ab Ende April)',
    ],
    sowOutdoor: [
      'Mangold, Rote Bete',
      'Kohlrabi direkt',
      '2. Satz Radieschen + Salat',
      'Karotten (2. Satz)',
      'Rucola',
      'Dill, Koriander',
    ],
    plant: [
      'Kohlrabi-Jungpflanzen ins Freiland',
      'Kohl-Jungpflanzen (Brokkoli, Karfiol)',
      'Erdäpfel (Frühkartoffeln) stecken',
    ],
    harvest: [
      'Radieschen (1. Satz)',
      'Rucola, Pflücksalat',
      'Schnittlauch, Petersilie',
      'Rhabarber',
      'Bärlauch (letzter Monat)',
    ],
    care: [
      'Tomaten + Paprika abhärten: tagsüber raus, nachts rein',
      'Mulchen: etablierte Pflanzen mit Rasenschnitt/Stroh abdecken',
      'Schnecken-Kontrolle starten (Bierfallen, Schneckenzaun)',
      'Tropfbewässerung installieren/checken',
    ],
    glashaus: [
      'Tomaten + Paprika ins Glashaus pflanzen (vor Eisheiligen sicher)',
      'Melanzani ins Glashaus',
      'Gurken (wenn Glashaus warm genug: >15 °C nachts)',
    ],
    notes: [
      'April-Wetter unberechenbar - Vlies griffbereit halten',
      'Vorkultur-Pflanzen MÜSSEN vor dem Auspflanzen abgehärtet werden',
    ],
    sourceNote: 'LK NÖ Gemüseanbaukalender, HBLFA Schönbrunn Versuchsergebnisse',
  },
  {
    month: 5, name: 'Mai', nameShort: 'Mai',
    avgTempHigh: 20.7, avgTempLow: 10.7, sunHours: 8, rainfall: 79,
    phase: 'Eisheilige + Großes Auspflanzen', motto: 'Der wichtigste Monat im Gartenjahr.',
    sowIndoor: [],
    sowOutdoor: [
      'Buschbohnen + Stangenbohnen (AB 16. Mai!)',
      'Zuckermais (braucht warmen Boden)',
      '3. Satz Salat, Radieschen',
      'Fenchel (ab Ende Mai für Herbsternte)',
    ],
    plant: [
      'AB 16. MAI (nach Eisheiligen): Tomaten, Paprika, Chili, Melanzani, Gurken, Zucchini, Kürbis ins Freiland',
      'Basilikum neben Tomaten',
      'Physalis (geschützter Standort)',
      'Sellerie-Jungpflanzen',
    ],
    harvest: [
      'Radieschen, Salat, Kohlrabi (Frühsorten)',
      'Erdbeeren beginnen (unter Folie/Glashaus schon ab Anfang Mai)',
      'Spargel (wo vorhanden)',
      'Kräuter: Schnittlauch, Petersilie, Dill',
    ],
    care: [
      '11.–15. Mai: EISHEILIGE - Vlies/Hauben bereithalten!',
      'Tomaten ausgeizen beginnen (wöchentlich)',
      'Dicke Mulchschicht aufbringen (5–8 cm)',
      'Regelmäßig gießen - Wachstumsmotor Mai',
    ],
    glashaus: [
      'Glashaus-Tomaten blühen - Bestäubung durch Schütteln unterstützen',
      'Glashaus täglich lüften (Überhitzung >35 °C vermeiden)',
      'Gurken im Glashaus wachsen stark - Rankhilfe nachspannen',
    ],
    notes: [
      'VOR 16. Mai kein frostempfindliches Gemüse ins Freiland!',
      'Eisheilige: Mamertus (11.), Pankratius (12.), Servatius (13.), Bonifatius (14.), Sophia (15.)',
      'Statistisch letzter Frost in Wien: ~15. April. Eisheilige sind Sicherheitsmarge.',
    ],
    sourceNote: 'GeoSphere Austria Froststatistik Wien-Hohe Warte. LK NÖ Pflanzkalender.',
  },
  {
    month: 6, name: 'Juni', nameShort: 'Jun',
    avgTempHigh: 25.1, avgTempLow: 14.7, sunHours: 8.7, rainfall: 70,
    phase: 'Erdbeer-Hauptsaison + Pflege', motto: 'Die erste große Erntewelle.',
    sowIndoor: [],
    sowOutdoor: [
      'Buschbohnen (2. Satz)',
      'Fenchel (Hauptsaat-Fenster!)',
      'Herbstkohlrabi, Chinakohl (Ende Juni)',
      '4. Satz Salat, Radieschen',
      'Rote Bete (letzte Aussaat)',
    ],
    plant: [
      'Porree-Jungpflanzen (tief setzen für langen weißen Schaft)',
      'Nachpflanzungen: Salat, Kohlrabi',
    ],
    harvest: [
      'ERDBEEREN im Vollertrag',
      'Salat, Kohlrabi, Radieschen, Zuckererbsen',
      'Erste Zucchini (ab Ende Juni)',
      'Kräuter: Basilikum, Dill, Schnittlauch in Vollform',
      'Kirschen, Ribisel (Johannisbeeren)',
    ],
    care: [
      'Tomaten: wöchentlich ausgeizen + anbinden',
      'Düngen: Brennnesseljauche 1:10 für Starkzehrer',
      'Glashaus täglich morgens lüften',
      'Bewässerung prüfen - Juni kann schon heiß werden',
    ],
    glashaus: [
      'Glashaus-Tomaten: erste Früchte werden sichtbar',
      'Glashaus-Gurken: fast tägliche Ernte beginnt',
      'Beschattung bei >30 °C (Kalkwasser auf Scheiben oder Vlies)',
    ],
    notes: [
      'Johannistag (24. Juni): traditionell Ende der Rhabarber-Ernte',
      'Erdbeer-Marmelade einkochen - Hochsaison!',
      'Längster Tag des Jahres - maximale Photosynthese',
    ],
    sourceNote: 'LK NÖ, HBLFA Schönbrunn, Bio Austria Handbuch Biogemüsebau',
  },
  {
    month: 7, name: 'Juli', nameShort: 'Jul',
    avgTempHigh: 26.4, avgTempLow: 15.9, sunHours: 8.8, rainfall: 78,
    phase: 'Sommerfülle', motto: 'Ernte, konservieren, nachsäen.',
    sowIndoor: [],
    sowOutdoor: [
      'Feldsalat (für Herbst/Winter)',
      'Herbstkohlrabi',
      'Chinakohl',
      'Winterrettich, Herbstrüben',
      'Buschbohnen (letzter Satz)',
    ],
    plant: [],
    harvest: [
      'Zucchini TÄGLICH ernten (15–20 cm!)',
      'Gurken, erste Tomaten (Frühsorten)',
      'Buschbohnen',
      'Karotten (Frühsorten)',
      'Zwiebeln (wenn Laub umknickt)',
      'Ribisel, Himbeeren, Stachelbeeren',
    ],
    care: [
      'Hochsommer: morgens gießen, Mulch auf 8 cm auffüllen',
      'Tomaten: weiter ausgeizen, untere Blätter entfernen',
      'Knoblauch ernten (wenn untere Blätter gelb)',
      'Erdbeeren: Ausläufer für neue Pflanzen abnehmen',
    ],
    glashaus: [
      'Glashaus: Hitzeschutz essentiell - Beschattung + Lüftung',
      'Tomaten + Gurken im Vollertrag',
      'Paprika beginnen zu reifen (noch grün)',
    ],
    notes: [
      'Erste große Einmach-Welle: Gurken einlegen, Bohnen einfrieren',
      'Trockenheit-Alarm: bis zu 36 °C in Wien möglich',
    ],
    sourceNote: 'GeoSphere Austria, LK NÖ',
  },
  {
    month: 8, name: 'August', nameShort: 'Aug',
    avgTempHigh: 26.1, avgTempLow: 15.6, sunHours: 8.6, rainfall: 69,
    phase: 'Peak Ernte + Einmachen', motto: 'Die heiße Einmachphase beginnt.',
    sowIndoor: [],
    sowOutdoor: [
      'Feldsalat, Asiasalate, Winterportulak',
      'Spinat (Herbstaussaat)',
      'Radieschen (Herbstsorten)',
      'Letzte Karotten-Aussaat für Herbst',
    ],
    plant: [
      'Erdbeeren pflanzen (JETZT für Ernte nächstes Jahr!)',
    ],
    harvest: [
      'TOMATEN im Vollertrag - 10+ kg pro Pflanze möglich',
      'Paprika reifen - grün bis rot',
      'Zucchini, Gurken, Bohnen weiterhin täglich',
      'Zwiebeln vollständig',
      'Erste Melanzani',
      'Kirschtomaten, Physalis beginnen',
    ],
    care: [
      'Tomaten: Spitze kappen ab 5.–6. Rispe (verbleibende reifen aus)',
      'Mehltau-Management: befallene Blätter bei Zucchini/Gurken entfernen',
      'Kompost wenden - Herbst-Dünger vorbereiten',
      'Braunfäule-Kontrolle bei Tomaten (bei Regen sofort prüfen)',
    ],
    glashaus: [
      'Glashaus-Tomaten: Spitze kappen, Durchreifen fördern',
      'Glashaus-Paprika: Vollreife abwarten (rot = süß!)',
      'Ab Ende August: Feldsalat + Spinat ins Glashaus für Winterernte',
    ],
    notes: [
      'Tomatensugo-Marathon: 10 kg auf einmal einkochen!',
      'Letscho: Paprika + Tomaten + Zwiebeln - DAS Burgenland-Rezept',
      'Kräuter trocknen: Basilikum, Thymian, Oregano, Rosmarin',
    ],
    sourceNote: 'LK Burgenland Erntekalender, Bio Austria',
  },
  {
    month: 9, name: 'September', nameShort: 'Sep',
    avgTempHigh: 21.1, avgTempLow: 12, sunHours: 6.4, rainfall: 64,
    phase: 'Einlagerung + Herbstanbau', motto: 'Was jetzt nicht eingelagert wird, fault.',
    sowIndoor: [],
    sowOutdoor: [
      'Feldsalat (letzte Aussaat)',
      'Winterpostelein',
      'Knoblauch (HERBSTPFLANZUNG - größere Knollen als Frühling!)',
    ],
    plant: [
      'Erdbeeren (September geht noch)',
      'Knoblauch stecken',
    ],
    harvest: [
      'KÜRBIS ernten (Stiel holzig? Fingernagel-Test!)',
      'Paprika vollreif (rot/gelb/orange)',
      'Melanzani letzte Ernte',
      'Tomaten: grüne Früchte ins Haus (reifen nach)',
      'Mais, Bohnen (Trockenbohnen)',
      'Karotten, Rote Bete',
      'Äpfel, Birnen, Zwetschken, Trauben',
    ],
    care: [
      'Kürbis: 2 Wochen nachreifen lassen, dann einlagern (7–10 °C)',
      'Tomaten: verbleibende grüne Früchte vor Frost ins Haus',
      'Abgeerntete Beete mit Gründüngung einsäen (Senf, Phacelia)',
      'Kompost: letzte große Ladung Pflanzreste aufsetzen',
    ],
    glashaus: [
      'Glashaus winterfest machen: Scheiben putzen (mehr Licht!)',
      'Wintersalate + Spinat + Feldsalat für Winterernte säen/pflanzen',
      'Asiasalate: Pak Choi, Mizuna, Tatsoi',
    ],
    notes: [
      'Paprika rösten + einfrieren: halbieren, bei 200 °C bis Haut schwarz, abziehen',
      'Chilies trocknen: aufhängen oder bei 50 °C im Ofen',
      'Erntedankfest-Saison - Kürbissuppe aus eigenem Hokkaido!',
    ],
    sourceNote: 'LK NÖ Einlagerungsratgeber, Heistinger: Handbuch Bio-Gemüse',
  },
  {
    month: 10, name: 'Oktober', nameShort: 'Okt',
    avgTempHigh: 14.3, avgTempLow: 7.3, sunHours: 4.2, rainfall: 47,
    phase: 'Wintervorbereitung', motto: 'Beete räumen, Boden schützen.',
    sowIndoor: [],
    sowOutdoor: [
      'Knoblauch (Herbstpflanzung - ideal!)',
      'Wintererbsen (unter Vlies)',
    ],
    plant: [
      'Knoblauch stecken',
      'Obstbäume + Sträucher pflanzen (Herbstpflanzung = Wurzelwachstum)',
    ],
    harvest: [
      'Porree (frosthart, ernten nach Bedarf)',
      'Karotten einlagern (Sand, kühl)',
      'Sellerie, Pastinake (nach Frost süßer!)',
      'Rote Bete einlagern',
      'Letzte Kräuter: Rosmarin-Zweige trocknen',
      'Äpfel, Quitten, Nüsse',
    ],
    care: [
      'Beete räumen: Pflanzenreste auf Kompost (außer kranke → Müll)',
      'Leere Beete mit Gründüngung oder Mulch bedecken (nackter Boden = Erosion)',
      'Hochbeete mit Laubschicht mulchen',
      'Rosmarinsträucher mit Vlies schützen',
      'Feigenbaum: Stamm mit Vlies wickeln, Wurzelbereich mulchen',
    ],
    glashaus: [
      'Glashaus: Wintergemüse steht - Feldsalat, Spinat, Postelein',
      'Radieschen als Zwischen-Kultur möglich',
      'Grünkohl + Palmkohl ins Glashaus für Winterernte',
    ],
    notes: [
      'Erster Frost in Wien statistisch: ~20. Oktober (GeoSphere)',
      'Knoblauch JETZT stecken bringt doppelt so große Knollen wie im Frühling',
    ],
    sourceNote: 'GeoSphere Austria Froststatistik, LK NÖ',
  },
  {
    month: 11, name: 'November', nameShort: 'Nov',
    avgTempHigh: 8.8, avgTempLow: 3.7, sunHours: 2.3, rainfall: 46,
    phase: 'Wintereinzug', motto: 'Ruhe einkehren lassen - der Garten schläft bald.',
    sowIndoor: [],
    sowOutdoor: [],
    plant: [],
    harvest: [
      'Porree (steht frosthart im Beet)',
      'Grünkohl (wird nach Frost süßer - Stärke → Zucker)',
      'Pastinake, Topinambur',
      'Glashaus: Feldsalat, Spinat, Postelein',
    ],
    care: [
      'Laub zusammenrechen, als Mulch verwenden (NICHT verbrennen)',
      'Gartengeräte reinigen, ölen, einlagern',
      'Bewässerungssystem entleeren (Frostschutz!)',
      'Kompost-Thermometer prüfen (>40 °C = aktiv)',
    ],
    glashaus: [
      'Glashaus: Wintersalate wachsen langsam aber stetig',
      'Nur an sonnigen Tagen lüften',
      'Bei starkem Frost: Vlies ÜBER Pflanzen im Glashaus (Doppelschutz)',
    ],
    notes: [
      'Saison-Bilanz ziehen: Was hat funktioniert? Was nicht? Notizen für nächstes Jahr',
      'Saatgut-Bestellkataloge kommen - vorfreuen!',
    ],
    sourceNote: 'GeoSphere Austria, Palme: Ernte mich im Winter',
  },
  {
    month: 12, name: 'Dezember', nameShort: 'Dez',
    avgTempHigh: 4, avgTempLow: -0.4, sunHours: 1.8, rainfall: 47,
    phase: 'Winterruhe', motto: 'Genießen, was eingelagert und eingemacht wurde.',
    sowIndoor: [],
    sowOutdoor: [],
    plant: [],
    harvest: [
      'Porree (steht noch im Beet, frosthart)',
      'Grünkohl + Palmkohl',
      'Glashaus: Feldsalat, Winterpostelein, Spinat, Asiasalate',
    ],
    care: [
      'Schneelast von Glashaus kontrollieren',
      'Wurzelgemüse-Lager kontrollieren (faulige Stücke entfernen)',
      'Planung für nächstes Jahr: Fruchtfolge, Sortenwahl, Saatgutbestellung',
    ],
    glashaus: [
      'Glashaus: minimales Wachstum, aber frische Blätter zum Ernten',
      'Ab Wintersonnenwende (21.12.): Tage werden wieder länger - Pflanzen reagieren in 2–3 Wochen',
    ],
    notes: [
      'Kürzester Tag: 21. Dezember - ab jetzt geht es bergauf',
      'Vorräte genießen: Sugo, Letscho, eingelegte Gurken, getrocknete Kräuter, Kürbis aus dem Keller',
    ],
    sourceNote: 'GeoSphere Austria, Palme: Ernte mich im Winter',
  },
];

// ── Glashaus / Greenhouse Guide ─────────────────────────────────────────────

export interface GlashausPlant {
  plantId: string;
  name: string;
  season: string;
  advantage: string;
  tempMin: number; // °C minimum at night
}

export const GLASHAUS_GUIDE = {
  title: 'Glashaus-Anbau in Österreich',
  subtitle: 'Ein unbeheiztes Glashaus verlängert die Saison um 4–8 Wochen und ermöglicht ganzjährige Ernte.',
  sourceNote: 'Basierend auf Palme, W. (HBLFA Schönbrunn): Ernte mich im Winter (2019) und Gemüse und Kräuter im Hausgarten (2020)',

  keyFacts: [
    'Unbeheizt reicht in Wien! 3–5 °C wärmer als draußen = entscheidend für Wintergemüse',
    'Glashaus-Tomaten reifen 4 Wochen früher und 4 Wochen länger als Freiland',
    'Im Winter (Nov–Feb): Feldsalat, Spinat, Postelein, Asiasalate wachsen ohne Heizung',
    'Belüftung im Sommer ist entscheidend: >35 °C schädigt Pflanzen. Türen + Fenster offen!',
    'HBLFA Schönbrunn Forschungsergebnis: über 150 Gemüsesorten eignen sich für unbeheizten Winteranbau in Folientunnel/Glashaus (Projekt "Wintergemüsevielfalt" mit Bio Austria)',
  ],

  plants: [
    { plantId: 'tomate', name: 'Tomate', season: 'April – Oktober (Glashaus) vs. Juni – September (Freiland)', advantage: '4 Wochen frühere Ernte, 80% mehr Ertrag, weniger Braunfäule', tempMin: 8 },
    { plantId: 'paprika', name: 'Paprika', season: 'April – Oktober', advantage: 'Reift in AT nur im Glashaus zuverlässig vollrot aus', tempMin: 12 },
    { plantId: 'chili', name: 'Chili', season: 'April – Oktober', advantage: 'Braucht lange Saison - Glashaus ist fast Pflicht in AT', tempMin: 12 },
    { plantId: 'melanzani', name: 'Melanzani', season: 'April – Oktober', advantage: 'Braucht >15 °C nachts - Glashaus oder Süd-Balkon einzig verlässlich', tempMin: 15 },
    { plantId: 'gurke', name: 'Gurke (Schlangengurke)', season: 'Mai – September', advantage: 'Doppelter Ertrag, weniger Mehltau, Rankgerüst spart Platz', tempMin: 15 },
    { plantId: 'physalis', name: 'Physalis', season: 'Mai – Oktober', advantage: 'Reift im Freiland in AT oft nicht aus - Glashaus löst das', tempMin: 10 },
    { plantId: 'basilikum', name: 'Basilikum', season: 'April – Oktober (fast ganzjährig)', advantage: 'Kein Risiko durch Kältenächte, kontinuierliche Ernte', tempMin: 10 },
    { plantId: 'salat', name: 'Salat (diverse)', season: 'Ganzjährig!', advantage: 'Wintersalate (Feldsalat, Postelein): Ernte November – März', tempMin: -5 },
    { plantId: 'spinat', name: 'Spinat', season: 'Oktober – März (Winterkultur!)', advantage: 'Frischer Spinat im Dezember aus eigenem Glashaus', tempMin: -10 },
    { plantId: 'radieschen', name: 'Radieschen', season: 'Februar – November', advantage: 'Erste Ernte schon im März (4 Wochen vor Freiland)', tempMin: -5 },
    { plantId: 'rucola', name: 'Rucola', season: 'Ganzjährig', advantage: 'Winterrucola: wild Rauke wächst langsam aber stetig', tempMin: -5 },
    { plantId: 'fenchel', name: 'Fenchel', season: 'Juni – Oktober', advantage: 'Gleichmäßigere Bedingungen = weniger Schossen', tempMin: 5 },
    { plantId: 'mangold', name: 'Mangold', season: 'März – November', advantage: 'Im Glashaus ernten bis Dezember möglich', tempMin: -5 },
    { plantId: 'kohlrabi', name: 'Kohlrabi', season: 'Februar – November', advantage: 'Erste Ernte April - 6 Wochen vor Freiland', tempMin: -5 },
  ] as GlashausPlant[],

  winterCrops: [
    { name: 'Feldsalat (Valerianella locusta)', info: 'Der Star des Winterglashauses. Saat September, Ernte November–März. Frosthart bis -15 °C.' },
    { name: 'Winterpostelein (Claytonia perfoliata)', info: 'Saat September–Oktober, Ernte November–März. Wächst bei 5 °C noch. Mild, knackig.' },
    { name: 'Spinat "Winterriesen"', info: 'Saat Oktober, Ernte Dezember–Februar. Wird nach Frost süßer.' },
    { name: 'Asiasalate (Mizuna, Pak Choi, Tatsoi)', info: 'Saat September, Ernte Oktober–Februar. Schnellwachsend, vielfältig.' },
    { name: 'Grünkohl / Palmkohl', info: 'Saat Juli–August, Ernte November–März. Wird nach Frost deutlich süßer.' },
    { name: 'Winterkresse / Barbarakraut', info: 'Saat August–September, Ernte November–April. Senf-artig, robust.' },
  ],

  buildingTips: [
    'Ausrichtung: Firstrichtung Ost-West (maximale Sonneneinstrahlung im Winter)',
    'Mindestgröße: 6 m² (2x3 m) für sinnvollen Anbau, 10–15 m² ideal',
    'Belüftung: mindestens 1 Dachfenster + Tür gegenüber (Querlüftung)',
    'Fundament: Streifenfundament oder Punktfundament (je nach Baugenehmigung)',
    'In Wien: Baugenehmigung ab 12 m² oder 2,5 m Höhe prüfen (MA 37)',
    'Material: Echtglas > Doppelstegplatten für Winteranbau (bessere Lichtdurchlässigkeit)',
  ],
};

// ── Cross-reference map: which plants link to which wiki sections ────────────
export const WIKI_CROSS_LINKS: Record<string, { section: string; label: string }[]> = {
  'tomate': [
    { section: 'prinzipien-mischkultur', label: 'Mischkultur: Tomate + Basilikum' },
    { section: 'prinzipien-fruchtfolge', label: 'Fruchtfolge: Starkzehrer' },
    { section: 'glashaus', label: 'Im Glashaus 80% mehr Ertrag' },
    { section: 'monat-5', label: 'Mai: Auspflanzen nach Eisheiligen' },
  ],
  'paprika': [
    { section: 'prinzipien-klima', label: 'Pannonisches Klima: ideal für Paprika' },
    { section: 'glashaus', label: 'Reift nur im Glashaus zuverlässig rot' },
    { section: 'monat-8', label: 'August: Letscho einkochen' },
  ],
  'salat': [
    { section: 'prinzipien-staffelaussaat', label: 'Staffelaussaat: alle 2 Wochen' },
    { section: 'glashaus', label: 'Ganzjährig im Glashaus' },
    { section: 'monat-3', label: 'März: Erste Direktsaat' },
  ],
  'kuerbis': [
    { section: 'prinzipien-mischkultur', label: 'Milpa: Kürbis + Mais + Bohne' },
    { section: 'monat-9', label: 'September: Kürbisernte' },
  ],
  'bohne': [
    { section: 'prinzipien-mischkultur', label: 'Milpa: Drei Schwestern' },
    { section: 'prinzipien-fruchtfolge', label: 'Schwachzehrer + Stickstoff-Fixierer' },
  ],
  'spinat': [
    { section: 'glashaus', label: 'Winterkultur: frischer Spinat im Dezember' },
    { section: 'monat-10', label: 'Oktober: Spinat fürs Glashaus säen' },
  ],
};

// ── Austrian Climate Regions ────────────────────────────────────────────────
// Scientific data for all major Austrian gardening climate regions.
// Sources: GeoSphere Austria (1991-2020), Wikipedia (Pannonisches Klima),
// LK NÖ/Bgld, burgenlandflora.at, Österreichwein.at

export interface ClimateRegion {
  id: string;
  name: string;
  usdaZone: string;
  description: string;
  annualTempAvg: number;      // °C
  annualRainfall: number;     // mm
  annualSunHours: number;     // hours/year
  julyHighAvg: number;        // °C
  janLowAvg: number;          // °C
  lastFrostAvg: string;       // approximate date
  firstFrostAvg: string;
  growingSeasonDays: number;  // frost-free days
  soilTypes: string;
  advantages: string[];
  challenges: string[];
  bestCrops: string[];
  references: string[];       // representative stations
  sourceNote: string;
}

export const CLIMATE_REGIONS: ClimateRegion[] = [
  {
    id: 'pannonisch-nord',
    name: 'Nordburgenland / Leithaberg / Neusiedler See',
    usdaZone: '7a-7b',
    description: 'Das wärmste und trockenste Gebiet Österreichs. Eisenstadt, Neusiedl am See und das Seeufer liegen in dieser Zone. Pannonisch-kontinental: heiße trockene Sommer, relativ kalte Winter, extreme Temperaturschwankungen. Über 2000 Sonnenstunden pro Jahr, nur ~400-600 mm Niederschlag. Ideal für Wärmeliebende wie Paprika, Melanzani, Feigen und Wein.',
    annualTempAvg: 11.5, annualRainfall: 550, annualSunHours: 2000,
    julyHighAvg: 27.5, janLowAvg: -2,
    lastFrostAvg: 'ca. 10.-15. April',
    firstFrostAvg: 'ca. 20.-25. Oktober',
    growingSeasonDays: 190,
    soilTypes: 'Region typisch: Tschernosem (Schwarzerde) auf Löss und Braunerde. Am Leithaberg auch kalksteinbeeinflusste Rendzina möglich. Stellenweise salzbeeinflusste Böden (Solonchak) im Seewinkel-Gebiet. Konkreter Bodentyp variiert lokal stark -- eine AGES-Bodenanalyse ist empfehlenswert.',
    advantages: [
      'Längste Vegetationsperiode Österreichs (~190 frostfreie Tage)',
      'Über 2000 Sonnenstunden/Jahr (mehr als fast überall sonst in AT)',
      'Frühester Frühlingsbeginn: Eisheilige oft schon ab 10. April kein Thema mehr',
      'Perfekt für mediterrane Kulturen: Paprika, Melanzani, Feigen, Pfirsich, Marille',
      'Weinbauklima: gleiche Bedingungen wie berühmte Weinregionen (Blaufränkisch!)',
      'Tschernosem-Böden gehören zu den fruchtbarsten Europas',
    ],
    challenges: [
      'Trockenheit ist das Hauptproblem: nur 400-600 mm Regen, Bewässerung PFLICHT',
      'Hitzeperioden bis 38 °C: Hitzestress für Salat, Spinat (schossen sofort)',
      'Starke Winde (pannonischer Ostwind) trocknen zusätzlich aus',
      'Spätfröste im April möglich trotz frühem Frühling',
      'Grundwasser-Absenkung in manchen Gebieten (Klimawandel)',
    ],
    bestCrops: ['Paprika (Letscho!)', 'Paradeiser', 'Melanzani', 'Kürbis', 'Feige', 'Marille', 'Wein', 'Zwiebel', 'Knoblauch', 'Mais'],
    references: ['Eisenstadt (GeoSphere)', 'Neusiedl am See (GeoSphere)'],
    sourceNote: 'GeoSphere Austria Klimadaten, burgenlandflora.at, LK Burgenland, nationalparkneusiedlersee.at',
  },
  {
    id: 'wien-wienerwald',
    name: 'Wien / Wiener Becken / östliches NÖ',
    usdaZone: '7a-7b',
    description: 'Übergangsklima zwischen pannonisch und mitteleuropäisch. Wien liegt im Wiener Becken: geschützt, warm, aber feuchter als das Burgenland. Das Marchfeld (nördlich) ist das größte Gemüseanbaugebiet Österreichs. Balkon-Gärtnern in Wien profitiert vom Stadtklima (Wärmeinseleffekt: 2-3 °C wärmer als Umland).',
    annualTempAvg: 11.3, annualRainfall: 673, annualSunHours: 1900,
    julyHighAvg: 26.4, janLowAvg: -1.3,
    lastFrostAvg: 'ca. 15. April (Stadt) / 1. Mai (Umland)',
    firstFrostAvg: 'ca. 20. Oktober (Stadt) / 10. Oktober (Umland)',
    growingSeasonDays: 185,
    soilTypes: 'Wiener Becken: Braunerde auf Löss und Schotter. Marchfeld: Tschernosem (Schwarzerde), die fruchtbarsten Ackerböden Österreichs. Wienerwald-Rand: Braunerde bis Rendzina (Kalkstein). Stadt: oft gestörte Böden (Aufschüttung, Bauschutt).',
    advantages: [
      'Sehr gute Gemüse-Anbaubedingungen (Marchfeld = Gemüsekammer Österreichs)',
      'Stadtklimaeffekt: Balkon in Wien ist 2-3 °C wärmer als Umland',
      'Gute Wasserversorgung (673 mm/Jahr, doppelt so viel wie Seewinkel)',
      'Lange Tradition des Gemüseanbaus (Simmeringer Gemüsebauern seit 18. Jhdt)',
      '96 Regentage/Jahr: gut verteilt über die Saison',
    ],
    challenges: [
      'Sommerhitze kann Salat/Spinat zum Schossen bringen',
      'Stadtböden oft verdichtet oder belastet (AGES-Bodenanalyse empfohlen!)',
      'Platzmangel: Balkongärtnern erfordert effiziente Flächennutzung',
      'Windexposition auf höheren Stockwerken (Balkon: Windschutz nötig)',
    ],
    bestCrops: ['Tomate', 'Paprika', 'Gurke', 'Kürbis', 'Karotte', 'Salat', 'Radieschen', 'Kräuter', 'Erdbeere'],
    references: ['Wien-Hohe Warte (GeoSphere, 202 m)'],
    sourceNote: 'GeoSphere Austria, Station Wien-Hohe Warte, Klimanormalperiode 1991-2020. Wien.gv.at Statistik Wetter.',
  },
  {
    id: 'illyrisch-steirisch',
    name: 'Steiermark / Südostösterreich (illyrisch)',
    usdaZone: '6b-7a',
    description: 'Übergangsklima zwischen alpin, pannonisch und mediterranem Einfluss. Deutlich niederschlagsreicher als Wien/Burgenland (841 mm in Graz, Südsteiermark noch mehr). Warme Sommer, aber kalte Winter mit starken Inversionslagen im Grazer Becken. Hügellandschaft der Südsteiermark: Weinbau und Obstbau auf Steilhängen.',
    annualTempAvg: 9.7, annualRainfall: 841, annualSunHours: 1780,
    julyHighAvg: 25.6, janLowAvg: -5.6,
    lastFrostAvg: 'ca. 20. April (Becken) / 10. Mai (Hügelland)',
    firstFrostAvg: 'ca. 10. Oktober (Becken) / 1. Oktober (Hügelland)',
    growingSeasonDays: 170,
    soilTypes: 'Grazer Becken: Braunerde, oft lehmig und schwer. Südsteiermark: vulkanische Böden (Basalt), tiefgründig, mineralreich. Hügelland: Mergel und Tonböden, gute Wasserhaltung.',
    advantages: [
      'Hoher Niederschlag (841+ mm): Bewässerung weniger kritisch als im Osten',
      'Gute Böden für Kohl, Kartoffel, Kürbis (Steirischer Ölkürbis!)',
      'Obstbau-Tradition: Äpfel (oststeirisch), Wein (südsteirisch)',
      'Kürbiskernöl-Region: Steirischer Ölkürbis als Spezialkultur',
    ],
    challenges: [
      'Kältere Winter als Wien/Burgenland (Inversionslage: -5.6 °C Jänner)',
      'Kürzere Vegetationsperiode (~170 Tage)',
      'Mehr Niederschlag = höherer Pilzdruck (Braunfäule, Mehltau)',
      'Schwere Lehmböden erfordern Kompost und Gründüngung',
      'Spätfröste bis Anfang Mai möglich',
    ],
    bestCrops: ['Steirischer Ölkürbis', 'Kartoffel', 'Kohl/Kraut', 'Apfel', 'Bohne', 'Karotte', 'Salat', 'Erdbeere'],
    references: ['Graz-Universität (GeoSphere, 366 m)'],
    sourceNote: 'GeoSphere Austria, Station Graz-Universität, 1991-2020. LK Steiermark.',
  },
  {
    id: 'waldviertel-muehlviertel',
    name: 'Waldviertel / Mühlviertel / Hochlagen NÖ-OÖ',
    usdaZone: '6a-6b',
    description: 'Rauhes Klima auf dem Böhmischen Massiv (400-700 m Seehöhe). Kalte Winter, kühlere Sommer, aber überraschend gute Böden (zweitgrößtes Ackerbaugebiet Österreichs!). Höhere Niederschläge als im Osten, dafür kürzere Vegetationsperiode. Kartoffel- und Getreide-Region.',
    annualTempAvg: 7.5, annualRainfall: 700, annualSunHours: 1600,
    julyHighAvg: 23, janLowAvg: -6,
    lastFrostAvg: 'ca. 5.-15. Mai',
    firstFrostAvg: 'ca. 25. September - 5. Oktober',
    growingSeasonDays: 140,
    soilTypes: 'Granitverwittterungsböden (sauer, pH 5-6). Stellenweise tiefgründige Braunerde. Gute Wasserhaltefähigkeit. Ideal für Kartoffeln (saurer Boden = weniger Schorf).',
    advantages: [
      'Gute Böden trotz rauhem Klima (höhere Erträge als erwartet)',
      'Saure Böden ideal für Kartoffeln und Heidelbeeren',
      'Weniger Hitzestress: Salat und Spinat wachsen den ganzen Sommer',
      'Gute Wasserversorgung, selten Trockenheit',
      'Bio-Hochburg: viele Biobetriebe, Arche Noah hat hier Sitz (Schiltern)',
    ],
    challenges: [
      'Kurze Vegetationsperiode (140 Tage): wärmeliebende Kulturen schwierig',
      'Spätfröste bis Mitte Mai, Frühfröste ab Ende September',
      'Paprika, Melanzani, Feigen nur im Glashaus möglich',
      'Saure Böden: Kalkung für die meisten Gemüse nötig',
    ],
    bestCrops: ['Kartoffel (Waldviertler Erdäpfel!)', 'Kohl/Kraut', 'Karotte', 'Rote Bete', 'Erbse', 'Heidelbeere', 'Salat (ganzjährig)', 'Grünkohl'],
    references: ['Zwettl (GeoSphere)', 'Freistadt (GeoSphere)'],
    sourceNote: 'GeoSphere Austria, mein-lernen.at Klimaprovinzen, waldviertel.info.',
  },
  {
    id: 'alpenvorland',
    name: 'Alpenvorland / OÖ / Salzburg-Flachgau',
    usdaZone: '6b-7a',
    description: 'Gemäßigtes Klima mit atlantischem Einfluss. Mehr Niederschlag als im Osten (900-1200 mm), mildere Winter als Waldviertel, aber kühler als Wien. Typisches "Normalklima" Mitteleuropas. Gute Allround-Bedingungen für Gemüseanbau.',
    annualTempAvg: 9, annualRainfall: 1050, annualSunHours: 1600,
    julyHighAvg: 24, janLowAvg: -4,
    lastFrostAvg: 'ca. 25. April - 5. Mai',
    firstFrostAvg: 'ca. 5.-15. Oktober',
    growingSeasonDays: 165,
    soilTypes: 'Braunerde auf Moräne und Löss. Oft lehmig, gut wasserhaltend. Stellenweise Pseudogley (Staunässe) in flachen Lagen.',
    advantages: [
      'Ausreichend Niederschlag: Bewässerung selten nötig',
      'Moderate Temperaturen: wenig Hitzestress',
      'Guter Allround-Standort für die meisten Gemüse',
      'Obst: Äpfel, Birnen, Kirschen gedeihen ausgezeichnet',
    ],
    challenges: [
      'Viel Regen im Sommer = hoher Pilzdruck',
      'Weniger Sonnenstunden als im Osten',
      'Lehmböden können verdichten (Kompost, Gründüngung nötig)',
      'Wärmeliebende Kulturen (Melanzani, Paprika) brauchen Glashaus',
    ],
    bestCrops: ['Kartoffel', 'Karotte', 'Kohl', 'Bohne', 'Erbse', 'Salat', 'Apfel', 'Kirsche', 'Erdbeere'],
    references: ['Kremsmünster (GeoSphere)', 'Salzburg (GeoSphere)'],
    sourceNote: 'GeoSphere Austria, Kremsmünster/Salzburg Stationen, 1991-2020.',
  },
  {
    id: 'inneralpin',
    name: 'Inneralpine Täler / Tirol / Kärnten',
    usdaZone: '6a-7a (tallagenabhängig)',
    description: 'Alpines Klima in den Tälern: geschützt durch Berge, oft sonnig (Inntal = Föhn!), aber kurze Vegetationsperiode. Klagenfurter Becken ist eine der kältesten Regionen Österreichs (Kaltluftsee). Tiroler Inntal dagegen profitiert vom Föhn und ist überraschend mild.',
    annualTempAvg: 8.5, annualRainfall: 850, annualSunHours: 1700,
    julyHighAvg: 25, janLowAvg: -5,
    lastFrostAvg: 'ca. 1.-15. Mai (je nach Tallage)',
    firstFrostAvg: 'ca. 1.-15. Oktober',
    growingSeasonDays: 150,
    soilTypes: 'Talböden: Auenböden (fruchtbar), Schwemmland. Hanglagen: flachgründig, steinig, oft kalkreich. Kärntner Becken: schwere Lehmböden mit Staunässe-Tendenz.',
    advantages: [
      'Inntal: Föhn-Effekt bringt warme, trockene Perioden',
      'Klagenfurter Becken: sehr sonnige Sommer',
      'Geschützte Lagen in Tälern: weniger Wind als pannonisch',
      'Gute Obstbau-Tradition (Südtirol-Nähe)',
    ],
    challenges: [
      'Starke Temperaturunterschiede Tag/Nacht (bis 20 °C)',
      'Kaltluftseen in Beckenlagen: Frostgefahr bis in den Mai',
      'Kurze Vegetationsperiode (150 Tage in Tallagen, weniger in Höhenlagen)',
      'Steinige, flachgründige Böden in Hanglagen: Hochbeete empfohlen',
    ],
    bestCrops: ['Kartoffel', 'Salat', 'Kohl', 'Karotte', 'Bohne', 'Erdbeere', 'Apfel', 'Kräuter (Bergkräuter!)'],
    references: ['Innsbruck (GeoSphere)', 'Klagenfurt (GeoSphere)'],
    sourceNote: 'GeoSphere Austria, Stationen Innsbruck/Klagenfurt, 1991-2020.',
  },
  {
    id: 'vorarlberg-rheintal',
    name: 'Vorarlberg / Rheintal',
    usdaZone: '7a-7b',
    description: 'Atlantisch beeinflusst: milde Winter, kühle Sommer, VIEL Niederschlag (1200-1600 mm). Das Rheintal ist eine der regenreichsten Regionen Österreichs. Dafür kaum Spätfröste und ein relativ frühes Frühjahr. Überraschend milde Winter (Bodensee-Effekt).',
    annualTempAvg: 10, annualRainfall: 1400, annualSunHours: 1500,
    julyHighAvg: 24, janLowAvg: -2,
    lastFrostAvg: 'ca. 15.-25. April',
    firstFrostAvg: 'ca. 15.-25. Oktober',
    growingSeasonDays: 180,
    soilTypes: 'Rheintal: fruchtbare Auenböden, schwer und lehmig. Hangschwemm- und Moränenböden. Gut wasserhaltend aber Staunässe-Tendenz.',
    advantages: [
      'Milde Winter (Bodensee = Wärmespeicher)',
      'Genügend Wasser: nie Trockenheitsprobleme',
      'Relativ lange Vegetationsperiode für die Lage (180 Tage)',
      'Gute Obstsorten (Bodensee-Äpfel)',
    ],
    challenges: [
      'Extrem viel Regen: Pilzkrankheiten sind das Hauptproblem',
      'Wenig Sonnenstunden: wärmeliebende Kulturen schwierig',
      'Schwere Böden: Drainage und Hochbeete empfohlen',
      'Paprika, Melanzani nur im Glashaus realistisch',
    ],
    bestCrops: ['Kartoffel', 'Kohl', 'Salat', 'Bohne', 'Erdbeere', 'Apfel (Bodensee!)', 'Birne', 'Kräuter'],
    references: ['Bregenz (GeoSphere)', 'Feldkirch (GeoSphere)'],
    sourceNote: 'GeoSphere Austria, 1991-2020.',
  },
];

export const CLIMATE_REGION_MAP = Object.fromEntries(CLIMATE_REGIONS.map(r => [r.id, r]));
