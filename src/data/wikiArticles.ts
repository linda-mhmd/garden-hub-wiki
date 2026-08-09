// ── Deep-dive Wiki Articles ─────────────────────────────────────────────────
// Comprehensive knowledge base for the garden wiki.
// Sources: BOKU Wien, AGES, GeoSphere Austria, LK NÖ/Bgld, FiBL, Heistinger,
// Kreuter, Palme (HBLFA Schönbrunn), Bio Austria

export interface WikiArticleSection {
  title: string;
  content: string;      // main paragraph(s)
  details?: string[];   // bullet-style details (collapsible)
  tip?: string;         // highlighted practical tip
  warning?: string;     // highlighted warning
  sourceNote?: string;
}

export interface WikiArticle {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  sections: WikiArticleSection[];
  sourceIds: string[];
  relatedArticles?: string[];
}

export const WIKI_ARTICLES: WikiArticle[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // BODEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'boden',
    title: 'Boden verstehen',
    subtitle: 'Bodenarten, Bodenleben, pH-Wert und wie du deinen Boden verbesserst',
    color: '#f59e0b',
    sourceIds: ['boku', 'heistinger', 'kreuter', 'bio-austria'],
    relatedArticles: ['kompost', 'duengung', 'mulchen'],
    sections: [
      {
        title: 'Was ist Boden?',
        content: 'Boden ist kein toter Dreck, sondern ein lebendiges System. Ein Teelöffel gesunder Gartenboden enthält mehr Mikroorganismen als Menschen auf der Erde leben: 1-10 Milliarden Bakterien, 10.000-100.000 Pilzfäden, 10.000-50.000 Einzeller. Diese Organismen zersetzen organisches Material, machen Nährstoffe pflanzenverfügbar und schützen Wurzeln vor Krankheiten. Dein wichtigstes Ziel als Gärtner ist nicht, Pflanzen zu füttern, sondern den Boden zu pflegen.',
        details: [
          'Mineralische Bestandteile (45%): Sand (>0,063 mm), Schluff (0,002-0,063 mm), Ton (<0,002 mm). Das Verhältnis bestimmt den Bodentyp.',
          'Organische Substanz / Humus (5%): Abgestorbenes Pflanzenmaterial in verschiedenen Zersetzungsstadien. Humus speichert Wasser und Nährstoffe.',
          'Wasser (25%): In Poren zwischen Bodenpartikeln. Zu viel = Staunässe (Wurzelfäule). Zu wenig = Trockenstress.',
          'Luft (25%): Wurzeln atmen! Verdichteter Boden hat zu wenig Luft. Deshalb nie auf nassen Boden treten.',
          'Bodenleben: Regenwürmer (Belüftung + Humus), Mykorrhiza-Pilze (erweitern Wurzelnetz um Faktor 100-1000), Bakterien (Stickstoff-Fixierung, Nährstoff-Kreislauf).',
        ],
        tip: 'Einfacher Bodentest: Eine Handvoll feuchte Erde zusammendrücken. Zerfällt sofort = zu sandig. Lässt sich zu einer Wurst rollen = zu tonig. Bleibt locker zusammen und bröselt beim Öffnen = perfekte Krümelstruktur.',
        sourceNote: 'BOKU Wien, Institut für Bodenforschung. Scheffer/Schachtschabel: Lehrbuch der Bodenkunde (18. Auflage)',
      },
      {
        title: 'Bodenarten in Österreich',
        content: 'Österreich hat extrem vielfältige Böden. Im Osten (Wien, Burgenland, Weinviertel) dominieren Tschernoseme und Braunerden auf Löss: tiefgründig, humusreich, kalkhaltig, ideal für Gemüse. Im Alpenvorland: Braunerden, oft lehmig und schwerer. In Alpentälern: oft steinig, flachgründig. Im Marchfeld: die fruchtbarsten Ackerböden Österreichs (Schwarzerde). Im Seewinkel: salzbeeinflusste Böden (Solonchak/Solonetz).',
        details: [
          'Tschernosom / Schwarzerde: Der fruchtbarste Bodentyp Mitteleuropas. 3-6% Humusgehalt, tiefgründig (>60 cm), gute Wasserhaltefähigkeit. Vorkommt: Marchfeld, Weinviertel, nördliches Burgenland.',
          'Braunerde: Der häufigste Bodentyp. Mäßig humusreich (2-4%), mittlere Wasserhaltung. Guter Gemüsegartenboden wenn regelmäßig mit Kompost verbessert.',
          'Rendzina: Auf Kalkstein. Flachgründig, kalkreich (pH 7-8). Gut für Kräuter (Thymian, Rosmarin), problematisch für Heidelbeeren (brauchen sauren Boden).',
          'Pseudogley: Staunässe-Boden (Wasser kann nicht abfließen). Erkennbar an rost-grauen Flecken im Unterboden. Lösung: Hochbeete oder Drainage.',
          'Auenboden: An Gewässern, periodisch überflutet. Sehr fruchtbar, aber Hochwasserrisiko. Marchfeld-Auen sind legendäre Gemüseböden.',
        ],
        tip: 'Die AGES bietet Bodenanalysen für Hausgärten an (ca. 30-50 EUR). Dabei werden pH, Humusgehalt, Nährstoffe (NPK) und Schwermetalle gemessen. Empfehlenswert vor dem ersten Gemüseanbau, besonders bei ehemaligen Industrieflächen oder unbekannten Grundstücken.',
        sourceNote: 'AGES Bodengesundheit: ages.at/themen/umwelt/boden. Österreichische Bodenkartierung: bodenkarte.at',
      },
      {
        title: 'pH-Wert: der stille Erfolgsfaktor',
        content: 'Der pH-Wert bestimmt, welche Nährstoffe die Pflanze aufnehmen kann. Bei pH 6,0-7,0 sind fast alle Hauptnährstoffe optimal verfügbar. Zu sauer (<5,5): Aluminium wird toxisch, Phosphor wird gebunden. Zu alkalisch (>7,5): Eisen, Mangan, Zink werden unlöslich, Pflanzen zeigen Chlorose (gelbe Blätter mit grünen Adern). Die meisten Gemüse bevorzugen pH 6,0-7,0. Die Böden im östlichen Österreich sind tendenziell kalkhaltig (pH 7,0-7,5), was für die meisten Gemüse noch gut funktioniert.',
        details: [
          'pH 5,0-5,5 (sauer): Ideal für Heidelbeeren, Preiselbeeren, Rhododendren. Zu sauer für die meisten Gemüse.',
          'pH 5,5-6,0 (leicht sauer): Gut für Kartoffeln (weniger Schorf!), Erdbeeren.',
          'pH 6,0-6,5 (schwach sauer bis neutral): Ideal für fast alle Gemüse, besonders Kohl, Salat, Bohnen.',
          'pH 6,5-7,0 (neutral): Perfekt für Tomaten, Paprika, Gurken, Karotten, Zwiebeln.',
          'pH 7,0-7,5 (leicht alkalisch): Noch ok für die meisten Gemüse. Typisch für Kalkstandorte in NÖ/Bgld.',
          'pH >7,5 (alkalisch): Problematisch. Eisen-Chlorose bei Obstbäumen. Abhilfe: saurer Kompost, Nadelstreu, Schwefel.',
          'Messung: pH-Teststreifen (5 EUR), pH-Messgerät (20-50 EUR), oder AGES-Laboranalyse (genaueste Methode).',
          'Korrektur nach unten (versauern): Elementarschwefel (50-100 g/m²), Nadelstreu-Mulch, saurer Torf (aber ökologisch fragwürdig).',
          'Korrektur nach oben (aufkalken): Kohlensaurer Kalk (200-400 g/m²), Algenkalk, Holzasche (vorsichtig! max. 100 g/m²/Jahr).',
        ],
        warning: 'pH-Änderungen wirken langsam (Monate bis Jahre). Nie mehr als 0,5 pH-Einheiten pro Saison korrigieren. Zu schnelle Änderung schädigt das Bodenleben.',
        sourceNote: 'BOKU Wien Bodenkunde. AGES Bodenanalyse-Empfehlungen.',
      },
      {
        title: 'Bodenverbesserung: praktische Schritte',
        content: 'Egal welchen Boden du hast: er lässt sich verbessern. Das Universalmittel heißt organische Substanz. Kompost, Mulch, Gründüngung und Regenwürmer sind deine Werkzeuge. In 2-3 Jahren wird aus jedem vernachlässigten Boden ein fruchtbarer Gartenboden.',
        details: [
          'Schwerer Tonboden: Sand einarbeiten (5-10 cm Schicht, mit Grabegabel untermischen), Kompost (5-10 cm/Jahr), Gründüngung mit tiefwurzelnden Pflanzen (Lupine, Ölrettich). NIE auf nassem Tonboden arbeiten!',
          'Sandiger Boden: Kompost (reichlich! 10+ cm/Jahr), Lehm oder Tonmehl einarbeiten (Bentonit, 2-5 kg/m²), Mulch gegen Austrocknung. Sandböden brauchen öfter kleinere Düngergaben (Nährstoffe waschen schnell aus).',
          'Verdichteter Boden: Tiefwurzelnde Gründüngung (Lupine, Ölrettich), Mulchschicht, NICHT umgraben (verschlimmert langfristig). Regenwürmer machen die Arbeit, wenn man sie füttert (Mulch!).',
          'Neuer Garten auf Baustellenboden: Oft ist der Oberboden abgeschoben. Mutterboden anliefern lassen (30 cm Schicht), oder Hochbeete bauen. Erste Saison: Gründüngung und Kompostaufbau.',
          'Staunässe: Drainage anlegen (perforiertes Rohr, 30-40 cm tief, in Kiesbett, mit Gefälle), oder Hochbeete bauen. Hochbeete sind die einfachste Lösung für problematische Böden.',
        ],
        tip: 'Die goldene Regel der Bodenverbesserung: Nie umgraben, immer mulchen. Umgraben zerstört die Bodenstruktur und tötet Regenwürmer. Stattdessen: organisches Material OBEN drauflegen, die Bodenlebewesen arbeiten es von selbst ein.',
        sourceNote: 'Kreuter, M.-L.: Der Biogarten. FiBL Merkblatt Bodenverbesserung.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BEWÄSSERUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'bewaesserung',
    title: 'Bewässerung im Detail',
    subtitle: 'Wann, wie viel, welche Methode, und was Pflanzen wirklich brauchen',
    color: '#06b6d4',
    sourceIds: ['heistinger', 'kreuter', 'lk-noe', 'zamg'],
    relatedArticles: ['boden', 'mulchen'],
    sections: [
      {
        title: 'Wie viel Wasser brauchen Pflanzen?',
        content: 'Eine Tomatenpflanze verdunstet an einem heißen Sommertag 2-3 Liter Wasser. Ein Kürbis kann bis zu 5 Liter brauchen. Pro Quadratmeter Gemüsebeet rechnet man mit 15-25 Litern pro Woche im Hochsommer. In Wien mit 673 mm Jahresniederschlag (Klimanormal 1991-2020, Station Hohe Warte) deckt der Regen nur etwa die Hälfte des Bedarfs in der Hauptsaison (Mai-August, allein diese 4 Monate bringen 297 mm). Der Rest muss durch Bewässerung kommen.',
        details: [
          'Faustregel: 20 L/m²/Woche bei Starkzehrern (Tomate, Kürbis, Zucchini) im Sommer.',
          '10-15 L/m²/Woche bei Mittelzehrern (Karotte, Salat, Kohlrabi).',
          '5-10 L/m²/Woche bei Schwachzehrern (Kräuter, Zwiebeln, Knoblauch).',
          'Jungpflanzen: wenig, aber häufig (Wurzeln sind noch flach).',
          'Etablierte Pflanzen: selten, aber tief (fördert tiefes Wurzelwachstum).',
          'Hochbeete trocknen 2-3x schneller aus als Bodenbeete!',
          'Mulch reduziert Verdunstung um 30-50%.',
          'Wien-Spezifisch: Juli/August können trocken und heiß sein (bis 36 °C). In diesen Wochen täglich gießen.',
        ],
        tip: 'Fingerprobe: Finger 5 cm tief in die Erde stecken. Fühlt es sich feucht an? Nicht gießen. Trocken? Gießen. So einfach ist das. Überwässern ist genauso schädlich wie Trockenheit!',
        sourceNote: 'LK NÖ Bewässerungsratgeber. GeoSphere Austria Klimadaten Wien.',
      },
      {
        title: 'Bewässerungsmethoden im Vergleich',
        content: 'Nicht jede Methode ist gleich effizient. Tropfbewässerung liefert Wasser direkt an die Wurzel mit minimaler Verdunstung. Gießkanne ist flexibel aber arbeitsintensiv. Sprühregner verlieren bis zu 40% durch Verdunstung und benässen Blätter (Pilzkrankheiten!).',
        details: [
          'Tropfbewässerung: Effizienz 90-95%. Wasser direkt an der Wurzel, keine nassen Blätter. Ideal für Reihenkultur (Tomaten, Paprika, Gurken). Gardena Micro-Drip oder Perlschlauch. Investition: 50-150 EUR für 20 m². Amortisiert sich in einer Saison durch Wasserersparnis und Zeitersparnis.',
          'Perlschlauch / Tropfschlauch: Einfachste Form der Tropfbewässerung. Poröser Schlauch, der Wasser über die gesamte Länge abgibt. Unter Mulch verlegen = maximale Effizienz.',
          'Gießkanne (10 L): Effizienz 70-80%. Flexibel, gezielt. Ideal für Keimlinge (Feinbrause), Balkon, Hochbeete. Nachteil: arbeitsintensiv bei >10 m².',
          'Gartenschlauch mit Brause: Effizienz 60-70%. Schnell für große Flächen. Gefahr: zu viel auf einmal, oberflächlich, Erosion. Nie mit Vollstrahl gießen.',
          'Sprühregner / Rasensprenger: Effizienz 40-60%. Verdunstungsverlust 30-40%. Benässt Blätter (Pilze!). Im Gemüsegarten NICHT empfehlenswert.',
          'Ollas (Tontöpfe): Alte Methode, neuer Trend. Unglasierte Tontöpfe im Boden vergraben, mit Wasser füllen. Wasser sickert langsam durch die Tonwand. Ideal für Einzelpflanzen (Tomaten, Kürbis). Effizienz nahe 100%.',
          'Smart-Bewässerung (Gardena, Netafim): Timer + Feuchtigkeitssensoren. Automatisch, wassersparend. Perfekt für Urlaub. Investition: 100-300 EUR.',
        ],
        tip: 'Die beste Kombination: Tropfschlauch unter Mulch, gesteuert durch einen Timer (morgens 30-60 Min). Das ist die professionelle Methode, die auch Gemüsebauern verwenden.',
        sourceNote: 'FiBL Merkblatt Bewässerung im Biogemüsebau.',
      },
      {
        title: 'Wann gießen?',
        content: 'Die Tageszeit ist entscheidend. Morgens (6-9 Uhr) ist ideal: die Pflanze kann das Wasser aufnehmen bevor die Hitze kommt, und nasse Blätter trocknen schnell ab. Mittags gießen verschwendet Wasser (Verdunstung) und kann bei voller Sonne zu Brandflecken führen (Wasserlinseneffekt auf Blättern umstritten, aber Verdunstungsverlust ist real). Abends gießen ist ok als zweitbeste Option, aber nasse Blätter über Nacht begünstigen Pilzkrankheiten (Braunfäule bei Tomaten, Mehltau bei Gurken).',
        details: [
          'Ideal: 6-9 Uhr morgens. Wasser wird aufgenommen, Blätter trocknen ab.',
          'Ok: 18-20 Uhr abends. Weniger Verdunstung als mittags, aber Pilzrisiko steigt.',
          'Vermeiden: 11-15 Uhr. Maximale Verdunstung, hoher Wasserverlust.',
          'Ausnahme: Bei Hitzetod-Gefahr (welke Pflanze, >35 °C) sofort gießen, egal welche Uhrzeit!',
          'Im Glashaus: morgens gießen, dann sofort lüften. Hohe Luftfeuchtigkeit + Wärme = perfekte Pilzbedingungen.',
          'Automatische Timer: auf 5-6 Uhr morgens einstellen (vor dem Aufstehen erledigt).',
        ],
        warning: 'Tomaten NIEMALS von oben gießen. Nasse Blätter + Wärme = Braunfäule (Phytophthora infestans). Immer bodennah an den Stamm gießen. Das gilt auch für Kartoffeln (gleiche Krankheit).',
        sourceNote: 'Heistinger, A.: Handbuch Bio-Gemüse. LK NÖ Pflanzenschutzdienst.',
      },
      {
        title: 'Regenwasser sammeln',
        content: 'Regenwasser ist besser als Leitungswasser: weicher (weniger Kalk), kostenlos, und hat Zimmertemperatur (kein Kälteschock für Gurken!). In Wien fallen 673 mm Niederschlag pro Jahr (Klimanormal 1991-2020). Bei einem 30-m²-Dach sind das 15.000-19.500 Liter pro Jahr. Eine 1000-L-Regentonne deckt den Bedarf eines 10-m²-Gemüsegartens für etwa 6 Wochen Trockenheit.',
        details: [
          'Regentonnen (200-500 L): Einfachste Lösung. An Fallrohr anschließen (Regensammler-Set 15-30 EUR). Deckel drauf (Mücken!).',
          'IBC-Container (1000 L): Gebraucht 20-50 EUR bei eBay Kleinanzeigen. Auf Palette stellen (Schwerkraft-Druck für Gartenschlauch). Abdecken (Algenbildung bei Licht).',
          'Zisterne (2.000-10.000 L): Erdtank für große Gärten. Investition 1.000-5.000 EUR + Einbau. In NÖ und Bgld teilweise gefördert.',
          'Wiener Wasserwirksamkeit: Bei 30 m² Dachfläche und 673 mm Niederschlag/Jahr: 20.190 L kostenlos. Das deckt ~60% des Jahresbedarfs eines 20-m²-Gemüsegartens.',
          'Wasserqualität: Regenwasser von Dachflächen ist für Gemüse unbedenklich (außer bei Bleidächern oder frisch geteerten Flächen). Im Zweifel erste 5 Minuten Niederschlag abfließen lassen (Schmutz).',
        ],
        tip: 'Minimum-Setup: 1 IBC-Container (1000 L) an der Regenrinne. Kosten: 30-80 EUR. Amortisiert sich in Wien in 2-3 Jahren bei Leitungswasserpreis von ~2 EUR/m³.',
        sourceNote: 'GeoSphere Austria, Station Wien-Hohe Warte, Klimanormal 1991-2020 (Jahresniederschlag 673 mm). Wiener Wasserwerke Tarifinfo.',
      },
      {
        title: 'Bewässerung am Balkon',
        content: 'Balkonpflanzen in Töpfen und Kisten trocknen viel schneller aus als Beetpflanzen: das Erdvolumen ist begrenzt, die Sonne heizt Töpfe von allen Seiten auf, und Wind trocknet zusätzlich aus. An heißen Tagen kann 2x tägliches Gießen nötig sein (morgens + abends). Selbstbewässerungstöpfe mit Wasserreservoir (z.B. Lechuza) sind eine gute Investition.',
        details: [
          'Terrakotta-Töpfe: Sehen schön aus, trocknen aber am schnellsten aus (porös). Besser: Kunststoff oder glasierte Keramik.',
          'Große Töpfe sind besser als kleine: Ein 30-L-Topf hält 5x länger feucht als ein 5-L-Topf.',
          'Untersetzer: Fangen Überschusswasser auf, Pflanze saugt es nach. Aber: nach 30 Min stehendes Wasser abgießen (Staunässe/Mücken).',
          'Selbstbewässerungssysteme: Blumat-Tonkegel (8-15 EUR/Stück), Gardena Balkon-Set (30-80 EUR), DIY mit PET-Flaschen (kostenlos).',
          'Für Urlaubszeiten: Blumat-Kegel in IBC/Eimer, oder Nachbar bitten (der zuverlässigste Tropfschlauch der Welt).',
          'Dein Balkon-Setup: Kürbis und Melanzani brauchen VIEL Wasser. Salat weniger aber regelmäßig. 2x täglich gießen bei >25 °C ist richtig.',
        ],
        tip: 'Salat am Balkon profitiert enorm von 2x täglichem Gießen, wie du selbst erlebt hast. Fläche Wurzeln + begrenztes Erdvolumen = schnelle Austrocknung.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KOMPOST
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'kompost',
    title: 'Kompostierung',
    subtitle: 'Schwarzes Gold: Kompost selber machen, richtig umsetzen, korrekt anwenden',
    color: '#f59e0b',
    sourceIds: ['kreuter', 'heistinger', 'bio-austria'],
    relatedArticles: ['boden', 'duengung', 'mulchen'],
    sections: [
      {
        title: 'Warum Kompost?',
        content: 'Kompost ist das wichtigste Produkt deines Gartens, nicht das Gemüse. Ein funktionierender Kompost verwandelt Küchenabfälle, Unkraut, Laub und Rasenschnitt in den besten Dünger der Welt: humusreich, nährstoffreich, voller Mikroorganismen, pH-neutral. Kompost verbessert jeden Bodentyp: Sandboden hält besser Wasser, Tonboden wird lockerer. Und er ist kostenlos.',
        details: [
          'Nährstoffgehalt (wissenschaftlich): 12 kg Stickstoff, 8 kg Phosphor, 13 kg Kalium pro Tonne Trockensubstanz. Pro Liter: 9 g N, 4,2 g P₂O₅, 7,8 g K₂O (Hortipendium/KTBL).',
          'Stickstoff-Verfügbarkeit: Nur 3-5% des N im Kompost sind im Anwendungsjahr pflanzenverfügbar (der Rest mineralisiert langsam über Jahre). Phosphor: 10-20% sofort verfügbar. Kalium: 30-50% sofort verfügbar.',
          'Reifer Kompost hat pH 6,5-7,5 (perfekt für Gemüse). Dazu: Milliarden Mikroorganismen pro Gramm.',
          'Ein 4-Personen-Haushalt produziert 200-400 kg kompostierbare Abfälle pro Jahr. Daraus werden 80-150 kg Kompost.',
          'Kompostierung reduziert Restmüll um 30-50%. In Wien spart das Müllgebühren und CO₂.',
          'Empfohlene Ausbringungsmenge (Versuchsergebnisse): 3 L reifer Kompost pro m² deckt den Nährstoffbedarf fast aller Kulturen. Starkzehrer: bis 5-10 L/m². Schwachzehrer: 1-2 L/m² oder keinen.',
        ],
        tip: 'Der beste Zeitpunkt für Kompost-Ausbringung: Frühjahr (März/April), wenn die Beete vorbereitet werden. 3-5 cm Schicht aufbringen und LEICHT einharken, nicht untergraben.',
        sourceNote: 'Bio Austria Kompostierungsrichtlinie. Kreuter, M.-L.: Der Biogarten, Kap. Kompost.',
      },
      {
        title: 'Kompost richtig aufsetzen',
        content: 'Ein guter Kompost braucht die richtige Mischung aus "braunem" (kohlenstoffreich) und "grünem" (stickstoffreich) Material im Verhältnis 3:1 (braun:grün). Zu viel Grünes (Rasenschnitt) = stinkt und wird matschig. Zu viel Braunes (Holzhäcksel) = verrottet extrem langsam. Die richtige Mischung erhitzt sich auf 50-65 °C und tötet Unkrautsamen und Krankheitserreger ab.',
        details: [
          'BRAUN (kohlenstoffreich, C:N > 30): Trockenes Laub, Stroh, Holzhäcksel, Karton (unbedruckt), Sägespäne, Eierkartons.',
          'GRÜN (stickstoffreich, C:N < 20): Küchenabfälle (Gemüsereste, Kaffeesatz, Teebeutel), frischer Rasenschnitt, Unkraut (OHNE Samen!), Brennnesseln.',
          'IDEAL: Abwechselnd Schichten (10 cm grün, 10 cm braun). Wie eine Lasagne.',
          'NIEMALS kompostieren: Fleisch/Fisch (Ratten!), gekochtes Essen (Ratten!), Hundekot/Katzenkot (Parasiten), kranke Pflanzen (Krankheit überlebt), Walnussblätter (hemmen Wachstum), behandeltes Holz.',
          'Kompost braucht Luft: nicht zu fest packen, gelegentlich umsetzen.',
          'Kompost braucht Feuchtigkeit: sollte sich wie ein ausgedrückter Schwamm anfühlen. Zu trocken = Verrottung stoppt. Zu nass = stinkt (anaerobe Fäulnis).',
          'Standort: halbschattig (nicht volle Sonne = trocknet aus), auf Erde (nicht auf Beton = Regenwürmer kommen von unten), mindestens 1 m von Grundstücksgrenze.',
        ],
        tip: 'Beschleuniger: Eine Schaufel fertiger Kompost oder Gartenerde zwischen die Schichten = Startkultur für Mikroorganismen. Funktioniert wie Sauerteig-Ansatz beim Brotbacken.',
        sourceNote: 'Heistinger, A.: Handbuch Bio-Gemüse, Kap. Kompost. Bio Austria Merkblatt Kompostierung.',
      },
      {
        title: 'Heißkompost vs. Kaltrotte',
        content: 'Es gibt zwei Ansätze: Heißkompost (thermophile Kompostierung) ist schnell (8-12 Wochen), tötet Unkrautsamen und Krankheiten, braucht aber Aufmerksamkeit und Volumen. Kaltrotte (Gartenkompost) ist einfach (Material drauflegen und warten), dauert aber 6-12 Monate und tötet keine Samen.',
        details: [
          'Heißkompost: Mindestvolumen 1 m³ auf einmal aufsetzen. Erhitzt sich auf 55-65 °C. Nach 3-4 Wochen umsetzen. Nach 8-12 Wochen fertig. Vorteil: schnell, hygienisch, tötet Samen.',
          'Kaltrotte: Laufend Material zuführen. Temperatur 20-35 °C. Keine besondere Pflege nötig. Dauert 6-12 Monate. Nachteil: Unkrautsamen überleben.',
          'Wurmkompost: Eisenia fetida (Kompostwürmer) in einer Kiste. Ideal für Balkongärtner und kleine Mengen. Wurmhumus ist der nährstoffreichste Kompost überhaupt.',
          'Bokashi: Fermentation unter Luftausschluss (japanische Methode). Funktioniert auch mit gekochten Speiseresten. Fermentiertes Material danach im Boden vergraben.',
          'Reifetest: Eine Handvoll riechen. Fertiger Kompost riecht nach Walderde, nicht nach Fäulnis. Kressetest: Kresse auf Kompost säen. Keimt und wächst sie? Kompost ist reif.',
        ],
        warning: 'Unreifen (noch warmen, stinkenden) Kompost nie direkt an Pflanzen geben! Die Abbauprodukte schädigen Wurzeln. Immer den Reifetest machen.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DÜNGUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'duengung',
    title: 'Biologisch Düngen',
    subtitle: 'Brennnesseljauche, Kompost, Mulch und was Pflanzen wirklich brauchen',
    color: '#22c55e',
    sourceIds: ['heistinger', 'kreuter', 'fibl', 'bio-austria'],
    relatedArticles: ['kompost', 'boden', 'mulchen'],
    sections: [
      {
        title: 'Die drei Hauptnährstoffe: N-P-K',
        content: 'Jeder Dünger wird durch drei Zahlen beschrieben: N (Stickstoff), P (Phosphor), K (Kalium). Stickstoff = Blattwachstum (grünes, üppiges Laub). Phosphor = Wurzel- und Blütenentwicklung. Kalium = Fruchtbildung und Widerstandsfähigkeit. Zu viel von einem schadet: überdüngter Stickstoff erzeugt riesige Blätter aber keine Früchte. Im Biogarten liefert Kompost alle drei in ausgewogenem Verhältnis.',
        details: [
          'Stickstoff (N): Treibt Blattwachstum an. Mangel = gelbe untere Blätter, schwaches Wachstum. Überschuss = riesige Blätter, wenig Früchte, Blattlaus-Anfälligkeit. Natürliche N-Quellen: Kompost, Brennnesseljauche, Hornspäne, Leguminosen (fixieren N aus der Luft!).',
          'Phosphor (P): Wurzeln, Blüten, Fruchtansatz. Mangel = violette Verfärbung der Blätter, schlechte Blütenbildung. Selten mangelhaft in österreichischen Böden. Natürliche P-Quellen: Kompost, Knochenmehl.',
          'Kalium (K): Fruchtqualität, Frostresistenz, Zellstabilität. Mangel = braune Blattränder, weiche Früchte. Natürliche K-Quellen: Kompost, Holzasche (vorsichtig! erhöht pH), Beinwell-Jauche.',
          'Calcium (Ca): Zellwandstabilität. Mangel = Blütenendfäule bei Tomaten (schwarzer Fleck am Boden). Oft nicht Ca-Mangel im Boden, sondern Transportproblem bei unregelmäßigem Gießen.',
          'Magnesium (Mg): Chlorophyll-Bestandteil. Mangel = Blätter werden gelb zwischen den Adern (Intervenal-Chlorose). Natürliche Mg-Quellen: Bittersalz (Epsom-Salz, 10 g/L Gießwasser).',
        ],
        tip: 'Im Biogarten gilt: Kompost ist dein Basisdünger (deckt alles ab). Brennnesseljauche als Stickstoff-Booster für Starkzehrer. Mehr brauchst du im ersten Jahr nicht.',
        sourceNote: 'FiBL Merkblatt Düngung im Biogemüsebau. Heistinger: Handbuch Bio-Gemüse.',
      },
      {
        title: 'Biologische Düngemittel selbst herstellen',
        content: 'Die besten Dünger wachsen in deinem Garten. Brennnesseln, Beinwell und Schachtelhalm liefern kostenlos hochwertige Pflanzenjauchen. Dazu kommen Kompost (Universaldünger), Mulch (Langzeitdünger) und Gründüngung (Lebend-Dünger).',
        details: [
          'Brennnesseljauche: 1 kg frische Brennnesseln + 10 L Wasser. 10-14 Tage stehen lassen (stinkt!), täglich umrühren. Durch Sieb gießen. Nährstoffgehalt (unverdünnt): 0,5-1,5% N, 0,3-0,7% K, 0,02-0,1% P. Verdünnung: 1:10 für Starkzehrer, 1:20 für Mittelzehrer, 1:50 für Blattdüngung (Sprühen). N liegt hauptsächlich als Ammonium vor (schnell verfügbar). Alle 2 Wochen anwenden.',
          'Beinwell-Jauche: Gleiche Methode wie Brennnessel. Reich an Kalium. Ideal für Tomaten und Paprika ab Fruchtbildung.',
          'Schachtelhalm-Brühe: 100 g getrockneten Schachtelhalm + 5 L Wasser, 24 Std einweichen, 30 Min köcheln. Verdünnung 1:5 sprühen. Die enthaltene Kieselsäure stärkt Zellwände. Versuche der Landesanstalt für Landwirtschaft (LfL) zeigen: im Anfangsstadium schwächt Schachtelhalm den Krankheitsverlauf bei Braunfäule ab, eine vollständige Wirksamkeit wurde jedoch nicht festgestellt. Vorbeugend einsetzen, nicht als Heilmittel.',
          'Hornspäne: Langsam wirkender Stickstoffdünger. 50-100 g/m² einharken. Wirkt 3-6 Monate. Für Starkzehrer-Beete im Frühjahr.',
          'Holzasche: Kaliumreich. Max. 100 g/m²/Jahr. Erhöht pH! Nicht bei kalkliebenden Böden (>pH 7). Nur Holzasche, nie Kohle- oder Papierasche.',
          'Kaffeesatz: Leicht sauer (pH 6,5), enthält Stickstoff, Kalium, Phosphor. Direkt auf Beete streuen oder in Kompost. Regenwürmer lieben Kaffeesatz.',
          'Eierschalen: Calcium-Quelle. Zerkleinern und einarbeiten. Wirkt langsam (Monate). Hilft NICHT akut gegen Blütenendfäule (das ist ein Gießproblem).',
        ],
        warning: 'Brennnesseljauche NIE unverdünnt gießen! Verbrennt Wurzeln. Immer 1:10 verdünnen. Und: Jauche stinkt bestialisch. Deckel oder Jutesack drüber, Nachbarn warnen.',
        sourceNote: 'Kreuter, M.-L.: Der Biogarten, Kap. Pflanzenstärkungsmittel. Bio Austria Düngerichtlinie.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MULCHEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'mulchen',
    title: 'Mulchen',
    subtitle: 'Die mächtigste Technik, die die meisten Anfänger überspringen',
    color: '#1e3a5f',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['boden', 'bewaesserung', 'kompost'],
    sections: [
      {
        title: 'Was ist Mulch und warum ist er so wichtig?',
        content: 'Mulch ist eine Schicht organisches Material (Stroh, Rasenschnitt, Laub, Holzhäcksel) auf der Bodenoberfläche. In der Natur gibt es keinen nackten Boden: Wälder haben eine Laubschicht, Wiesen eine Grasnarbe. Nackter Boden trocknet aus, erodiert, verkrustet und verliert Nährstoffe. Mulch imitiert den natürlichen Zustand und löst damit 5 Probleme gleichzeitig.',
        details: [
          '1. Verdunstungsschutz: Mulch reduziert Wasserverdunstung um 30-50%. Bei 20 m² Beet spart das 200-400 L Wasser pro Woche im Hochsommer.',
          '2. Unkrautunterdrückung: 5-8 cm Mulch blockieren Licht für Unkrautsamen. 80-90% weniger Jäten!',
          '3. Bodentemperatur-Regulierung: Im Sommer 5-8 °C kühler, im Winter 3-5 °C wärmer. Wurzeln mögen keine Temperaturextreme.',
          '4. Erosionsschutz: Starkregen wäscht nackten Boden weg. Mulch bremst den Aufprall.',
          '5. Bodenleben fördern: Regenwürmer lieben Mulch als Nahrung. Unter 5 cm Mulch finden sich 5-10x mehr Regenwürmer als ohne.',
        ],
        tip: 'Die goldene Mulch-Regel: 5-8 cm Schicht, aber NIE direkt am Pflanzenstiel (sonst fault er). Einen "Mulch-Kragen" von 3-5 cm Abstand um jeden Stiel lassen.',
        sourceNote: 'FiBL Merkblatt Mulchen im Gemüsebau. Kreuter: Der Biogarten.',
      },
      {
        title: 'Mulchmaterialien im Vergleich',
        content: 'Nicht jedes Material eignet sich für jeden Zweck. Rasenschnitt ist stickstoffreich aber fault in dicker Schicht. Stroh ist ideal für Tomaten und Erdbeeren. Holzhäcksel passen besser in Wege als auf Gemüsebeete (binden Stickstoff beim Verrotten).',
        details: [
          'Stroh: Der Klassiker für Gemüsebeete. Locker, lichtblockierend, verrottet mäßig schnell. Ideal für Tomaten, Erdbeeren ("Strawberry"!), Kartoffeln. Achtung: kann Getreide-Unkraut-Samen enthalten.',
          'Rasenschnitt: Kostenlos und stickstoffreich. Maximal 3-5 cm (dicker = fault und stinkt). Immer antrocknen lassen (1-2 Tage), dann ausbringen. Nicht auf Beete mit Möhren (Schneckenversteck).',
          'Laub: Ideal für Wintermulch. Im Herbst auf leere Beete. Eichenlaub ist sauer (gut für Heidelbeeren), Buchenlaub neutral. Ganz lassen (nicht häckseln) als Winterschutz.',
          'Holzhäcksel / Rindenmulch: Für Wege und Beerensträucher, NICHT für Gemüsebeete (bindet Stickstoff beim Verrotten = gelbe Pflanzen). Ausnahme: kompostierte Holzhäcksel (>6 Monate alt).',
          'Kompost: Dünger + Mulch in einem. 2-3 cm Schicht. Für Starkzehrer-Beete ideal.',
          'Zeitungspapier/Karton: 2-3 Lagen unter Stroh als Unkrautbarriere. Nur unbedrucktes Papier/brauner Karton. Verrottet innerhalb einer Saison.',
          'Lebendmulch: Weiß-Klee zwischen Kohlreihen, Kapuzinerkresse unter Obstbäumen. Bedeckt den Boden UND fixiert Stickstoff.',
        ],
        warning: 'Niemals frische Holzhäcksel auf Gemüsebeete! Die Verrottung entzieht dem Boden Stickstoff ("Stickstoff-Sperre"). Ergebnis: gelbe, kümmernde Pflanzen. Erst nach 6-12 Monaten Kompostierung verwenden.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PFLANZENSCHUTZ
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'pflanzenschutz',
    title: 'Pflanzenschutz biologisch',
    subtitle: 'Nützlinge, Mischkultur, Pflanzenstärkung und was wirklich hilft',
    color: '#ef4444',
    sourceIds: ['fibl', 'heistinger', 'kreuter', 'ages', 'bio-austria'],
    relatedArticles: ['boden', 'mulchen'],
    sections: [
      {
        title: 'Das Prinzip: Vorbeugen statt Bekämpfen',
        content: 'Im Biogarten gibt es keine "Feinde" die vernichtet werden müssen. Schädlinge und Krankheiten sind Symptome eines Ungleichgewichts. Gesunder Boden, richtige Fruchtfolge, Mischkultur und Artenvielfalt verhindern 80% aller Probleme. Die restlichen 20% sind beherrschbar.',
        details: [
          'Gesunder Boden = gesunde Pflanzen. Pflanzen in gutem Boden haben stärkere Abwehrkräfte (sekundäre Pflanzenstoffe).',
          'Fruchtfolge: Nie 2 Jahre hintereinander dasselbe (oder dieselbe Familie) am gleichen Platz. Krankheitserreger im Boden sterben ohne Wirtspflanze ab.',
          'Mischkultur: Unterschiedliche Pflanzen nebeneinander verwirren Schädlinge (Duftstoffe) und nutzen den Raum besser.',
          'Artenvielfalt: Ein Garten mit 20+ Pflanzenarten hat weniger Schädlinge als einer mit 3 Arten. Mehr Nischen = mehr Nützlinge.',
          'Toleranz: Einzelne Blattläuse sind KEIN Problem. Sie sind Nahrung für Marienkäfer und Schwebfliegen. Erst bei Massenbefall handeln.',
        ],
        tip: 'Bevor du irgendein Mittel (auch biologisches!) anwendest: Warte 5 Tage und beobachte. Oft löst die Natur das Problem selbst (Marienkäfer fressen Blattläuse, Regen wäscht Milben ab). Für aktuelle Warnungen: warndienst.at (AGES + Landwirtschaftskammern) sendet kostenlose Schädlingsalarme per Email.',
        sourceNote: 'FiBL Merkblatt Pflanzenschutz im Biogemüsebau. Bio Austria Richtlinie. AGES Warndienst Pflanzengesundheit: warndienst.at',
      },
      {
        title: 'Die wichtigsten Schädlinge in Österreich',
        content: 'Diese Schädlinge begegnen dir im österreichischen Gemüsegarten am häufigsten. Die meisten lassen sich mit einfachen Mitteln in Schach halten.',
        details: [
          'Blattläuse (Aphidoidea): Häufigster Schädling. Saugen Pflanzensaft, scheiden Honigtau aus (klebriger Film → Rußtau). Bekämpfung: Nützlinge fördern (Marienkäfer! Eine Larve frisst 400 Blattläuse), Brennnesseljauche sprühen (1:20), bei starkem Befall Kaliseife (Schmierseife 20 g/L).',
          'Schnecken (Nacktschnecken, v.a. Spanische Wegschnecke): Problem #1 für Salat, Kohl, Jungpflanzen. Bekämpfung: Schneckenzaun (physisch, 100% wirksam, 5-10 EUR/m), Bierfallen (lockt an, ertränkt), Nematoden (Phasmarhabditis hermaphrodita), abendliches Absammeln, Laufenten (beste Lösung, aber: Laufenten).',
          'Kohlweißling (Pieris brassicae): Raupen fressen Kohl, Kohlrabi, Brokkoli kahl. Bekämpfung: Kulturschutznetz (feinmaschig, 3-5 EUR/m²) von Anfang an auflegen. Biologisch: Bacillus thuringiensis (Bt-Präparat, FiBL-gelistet).',
          'Möhrenfliege (Psila rosae): Maden fressen Gänge in Karotten. Bekämpfung: Kulturschutznetz ab Aussaat, Mischkultur mit Zwiebeln (Duft verwirrt die Fliege), Aussaat-Termine verschieben (2. Generation im August meiden).',
          'Kartoffelkäfer (Leptinotarsa decemlineata): Gelb-schwarz gestreift, frisst Kartoffel- und Melanzani-Blätter kahl. Bekämpfung: Absammeln (regelmäßig!), Bt-Präparat bei Massenbefall, Neem-Öl.',
          'Spinnmilben (Tetranychidae): Winzig, Gespinste an Blattunterseiten. Typisch bei trockener Hitze (Glashaus!). Bekämpfung: Luftfeuchtigkeit erhöhen (besprühen), Raubmilben (Phytoseiulus persimilis) einsetzen.',
          'Erdflöhe (Psylliodes/Phyllotreta): Kleine schwarze Käfer, fressen winzige Löcher in Kohl/Radieschen/Rucola-Blätter. Bekämpfung: Feucht halten (Erdflöhe mögen es trocken), Vlies, Mischkultur mit Salat.',
        ],
        tip: 'Kulturschutznetze sind die beste Investition im Gemüsegarten. 3-5 EUR/m², einmal kaufen, jahrelang nutzen. Schützen gegen Kohlweißling, Möhrenfliege, Lauchmotte und sogar Hagelschlag. Gleich zu Beginn auflegen, nicht erst wenn der Schaden da ist. Biologische Mittel (in AT zugelassen, BAES Pflanzenschutzmittelregister): Bacillus thuringiensis (Bt) gegen Raupen, NeemAzal (Azadirachtin) gegen saugende/beißende Schädlinge, Kaliseife gegen Blattläuse. Kupferpräparate gegen Pilze (mit Mengenbegrenzung).',
        sourceNote: 'AGES Pflanzenschutzdienst. BAES Pflanzenschutzmittelregister (baes.gv.at). FiBL Betriebsmittelliste. Bio Austria.',
      },
      {
        title: 'Die wichtigsten Krankheiten',
        content: 'Pilzkrankheiten sind im feuchten mitteleuropäischen Klima der häufigste Krankheitskomplex. Die meisten lassen sich durch gute Belüftung, trockene Blätter und Fruchtfolge vermeiden.',
        details: [
          'Braunfäule (Phytophthora infestans): DER Tomaten-Killer. Braune Flecken auf Blättern, dann auf Früchten. Gefördert durch: Nässe auf Blättern, warme Nächte (>10 °C), dichte Bestände. Vorbeugung: NIE von oben gießen, gut belüften (Blattabstand!), untere Blätter entfernen, Schachtelhalm-Brühe VORBEUGEND sprühen (im Anfangsstadium wirksam, bei starkem Befall nicht mehr). Kupfer ist im Bio-Anbau zugelassen, aber problematisch (Schwermetall, reichert sich im Boden an, max. 3 kg/ha/Jahr). Befallene Teile sofort entfernen → Restmüll, NIEMALS Kompost.',
          'Echter Mehltau (Erysiphales): Weißer Belag auf Blattoberseiten. Typisch bei Zucchini, Gurken im Spätsommer. Vorbeugung: resistente Sorten, gute Belüftung. Befallene Blätter entfernen. Milch-Wasser-Sprühlösung (1:9) hilft vorbeugend.',
          'Falscher Mehltau (Peronosporales): Grau-violetter Belag auf Blattunterseiten, gelbe Flecken oben. Befällt Salat, Spinat, Zwiebeln, Basilikum. Vorbeugung: resistente Sorten, weiter Pflanzabstand, morgens gießen.',
          'Kohlhernie (Plasmodiophora brassicae): Verdickungen an Kohlwurzeln, Pflanze welkt. Bodenpilz, der 15+ Jahre überdauert! Vorbeugung: strikte Fruchtfolge (min. 7 Jahre kein Kreuzblütler am selben Platz), pH >7 (Kalk), keine befallene Erde verschleppen.',
          'Grauschimmel (Botrytis cinerea): Grauer Pelz auf Früchten (Erdbeeren, Tomaten, Salat). Vorbeugung: gute Belüftung, Erdbeeren auf Stroh, Tomaten ausgeizen. Befallene Früchte sofort entfernen.',
          'Kraut- und Knollenfäule: Wie Braunfäule bei Tomaten, befällt auch Kartoffeln. Knollen im Boden verfaulen. Vorbeugung: resistente Sorten, nie Tomaten und Kartoffeln nebeneinander pflanzen.',
        ],
        warning: 'Kranke Pflanzenteile NIEMALS auf den Kompost! Die meisten Pilzsporen überleben die Kompostierung (außer bei >65 °C Heißkompost). Befallenes Material in den Restmüll oder verbrennen.',
        sourceNote: 'AGES Pflanzenschutzdienst Wien. FiBL Merkblätter Pflanzenkrankheiten. LK NÖ Warndienst.',
      },
      {
        title: 'Nützlinge fördern',
        content: 'Ein Garten voller Nützlinge braucht kaum Pflanzenschutz. Marienkäfer, Florfliegen, Schwebfliegen, Schlupfwespen, Laufkäfer, Spinnen, Vögel und Igel halten Schädlinge natürlich in Schach. Dein Job: ihnen ein Zuhause bieten.',
        details: [
          'Marienkäfer: Eine Larve frisst 400-800 Blattläuse! Überwintert unter Laub, in Hohlräumen, Insektenhotels. Fördern: Laub-/Reisighaufen liegen lassen, Insektenhotel aufhängen.',
          'Florfliegen: Larven ("Blattlauslöwen") fressen noch mehr Blattläuse als Marienkäfer. Überwintert in Ritzen, Dachböden. Fördern: Holzhaufen, Insektenhotel.',
          'Schwebfliegen: Sehen aus wie Wespen, sind aber harmlos. Larven fressen Blattläuse. Fördern: Blühende Kräuter (Dill, Koriander, Petersilie blühen lassen!).',
          'Ohrwürmer: Fressen Blattläuse und andere Kleininsekten. Fördern: umgedrehte Blumentöpfe mit Stroh auf Stäben = Ohrwurm-Haus.',
          'Laufkäfer: Nachtaktive Bodenbewohner, fressen Schneckeneier und Larven. Fördern: Bodenbedeckung (Mulch), Totholz.',
          'Igel: Fressen Schnecken, Engerlinge, Insekten. Fördern: Laubhaufen in einer Ecke, Durchschlupf im Zaun (10x10 cm), kein Gift im Garten.',
          'Vögel (Meisen, Rotkehlchen): Fressen Raupen, Blattläuse, Schnecken. Fördern: Nistkästen, Wasserschale, naturnahe Hecke.',
        ],
        tip: 'Die einfachste Nützlingsförderung: einen Streifen des Gartens "wild" lassen. Brennnesseln, Holunder, Totholz, Laubhaufen: das ist ein 5-Sterne-Hotel für Nützlinge.',
        sourceNote: 'Bio Austria Nützlingsleitfaden. AGES Nützlingsliste Österreich.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ANZUCHT / VORKULTUR
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'anzucht',
    title: 'Vorkultur & Aussaat',
    subtitle: 'Samen richtig keimen, pikieren, abhärten und auspflanzen',
    color: '#22c55e',
    sourceIds: ['heistinger', 'arche-noah', 'palme'],
    relatedArticles: ['boden', 'duengung'],
    sections: [
      {
        title: 'Warum Vorkultur?',
        content: 'Österreich hat eine kurze Freiland-Saison (Mai-Oktober). Wärmeliebende Pflanzen wie Tomaten, Paprika, Chili und Melanzani brauchen 6-10 Wochen Vorsprung auf der Fensterbank, um im Sommer zu fruchten. Ohne Vorkultur reifen Paprika in Wien nie aus und Chili ist unmöglich. Die Investition: 2 Säcke Anzuchterde, Aussaattöpfe und ein sonniges Fenster.',
        details: [
          'VORKULTUR PFLICHT (ohne geht es in AT nicht): Tomate (ab Mitte März), Paprika (ab Ende Februar!), Chili (ab Jänner!), Melanzani (ab Ende Februar), Sellerie (ab Februar), Physalis (ab Februar).',
          'VORKULTUR OPTIONAL (schneller, aber Direktsaat geht auch): Salat, Kohlrabi, Kohl, Gurke, Zucchini, Kürbis, Basilikum.',
          'NUR DIREKTSAAT (vertragen kein Umpflanzen): Karotte, Radieschen, Erbse, Bohne, Spinat, Rucola, Dill, Petersilie.',
          'Wann starten? Rückwärts rechnen: Auspflanztermin (16. Mai nach Eisheiligen) minus Vorkulturzeit. Tomaten 6-8 Wochen = Aussaat Mitte März. Paprika 10-12 Wochen = Aussaat Ende Februar.',
        ],
        tip: 'Anfänger-Fehler Nr. 1: Zu früh aussäen! Wenn du im Jänner Tomaten säst, hast du im März 50 cm hohe vergeile Pflanzen die kein Licht bekommen. Mitte März reicht für Tomaten.',
      },
      {
        title: 'Keimbedingungen',
        content: 'Samen keimen unter spezifischen Bedingungen. Die drei Faktoren: Temperatur, Feuchtigkeit, Licht (oder Dunkelheit). Die meisten Gemüsesamen keimen bei 18-25 °C in gleichmäßig feuchter Erde. Einige brauchen Spezialbehandlung.',
        details: [
          'Wärmekeimer (22-28 °C): Paprika, Chili, Melanzani, Gurke, Kürbis, Basilikum. Heizmatte unter der Aussaatschale hilft enorm (15-30 EUR, wiederverwendbar).',
          'Normalkeimer (18-22 °C): Tomate, Salat, Kohlrabi, Kohl. Normale Zimmertemperatur reicht.',
          'Kaltkeimer (5-15 °C): Petersilie, Schnittlauch, Bärlauch. Keimen bei Wärme schlecht. Im Freien oder Kühlschrank stratifizieren.',
          'Lichtkeimer (Samen nicht bedecken!): Salat, Basilikum, Sellerie, Petersilie, Dill. Samen nur andrücken, nicht mit Erde bedecken.',
          'Dunkelkeimer (Samen bedecken): Tomate, Paprika, Gurke, Bohne, Mais. 0,5-3 cm mit Erde bedecken.',
          'Keimzeit variiert: Radieschen 3-5 Tage. Tomate 7-14 Tage. Paprika 10-21 Tage. Petersilie 21-28 Tage (!). Sellerie 14-28 Tage. Geduld!',
          'Substrat: Nährstoffarme Anzuchterde (nicht normale Blumenerde - zu viel Dünger verbrennt Keimlinge). Kokos-Quelltabletten funktionieren gut.',
        ],
        warning: 'Normale Blumenerde ist ZU nährstoffreich für Keimlinge. Die hohe Salzkonzentration verbrennt die zarten Wurzeln. Immer spezielle Aussaat-/Anzuchterde verwenden (3-5 EUR/10 L).',
        sourceNote: 'Heistinger, A.: Handbuch Bio-Gemüse. Arche Noah Aussaat-Anleitung.',
      },
      {
        title: 'Pikieren, Abhärten, Auspflanzen',
        content: 'Pikieren = Umsetzen der Keimlinge in größere Einzeltöpfe. Abhärten = schrittweises Gewöhnen an Außentemperaturen. Auspflanzen = endgültiges Setzen ins Beet. Jeder Schritt ist wichtig, keiner darf übersprungen werden.',
        details: [
          'Pikieren: Wenn das 2. echte Blattpaar erscheint (nicht die Keimblätter!). Einzeln in 7-9 cm Töpfe setzen. Tomate tiefer setzen als vorher (bildet Wurzeln am Stamm). Paprika/Melanzani NICHT tiefer (faulen!).',
          'Abhärten: 7-10 Tage vor Auspflanzen. Tag 1-3: 2 Stunden draußen im Schatten. Tag 4-6: 4-6 Stunden, halbschattig. Tag 7-10: ganzer Tag draußen, auch in der Sonne. Nachts reinholen wenn <10 °C.',
          'Auspflanzen: Nach Eisheiligen (16. Mai). Abends oder bei bewölktem Wetter. Pflanzloch gut wässern. Nicht bei voller Mittagssonne. Schutz mit Vlies für die ersten Nächte falls Kälte droht.',
          'Pflanzabstände einhalten: Zu eng = Krankheiten, Lichtmangel, Konkurrenz. Tomaten 60-70 cm, Paprika 40-50 cm, Salat 25 cm, Zucchini 100 cm.',
          'Angießen: Nach dem Einpflanzen DURCHDRINGEND gießen (5 L pro Pflanze). Danach 2-3 Tage nicht gießen (Wurzeln sollen in die Tiefe wachsen).',
        ],
        tip: 'Nicht abgehärtete Pflanzen die direkt von der Fensterbank ins Freiland kommen, erleiden Sonnenbrand und Kälteschock. Das Abhärten ist so wichtig wie das Keimen selbst.',
        sourceNote: 'Palme, W.: Gemüse und Kräuter im Hausgarten. Arche Noah Anbauanleitung.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SAATGUT
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'saatgut',
    title: 'Saatgut: Auswahl & Bezugsquellen',
    subtitle: 'Samenfeste Sorten, F1-Hybride, Bio-Saatgut und wo man in Österreich kauft',
    color: '#3b82f6',
    sourceIds: ['arche-noah', 'heistinger'],
    relatedArticles: ['anzucht'],
    sections: [
      {
        title: 'Samenfest vs. F1-Hybrid',
        content: 'Es gibt einen fundamentalen Unterschied: Samenfeste Sorten kannst du selbst vermehren (Samen ernten, nächstes Jahr wieder säen). F1-Hybride sind Kreuzungen zweier Inzuchtlinien, die höheren Ertrag oder Krankheitsresistenz haben, aber deren Nachkommen wild aufspalten. Im Hausgarten sind samenfeste Sorten die bessere Wahl: vielfältigerer Geschmack, Unabhängigkeit, und du erhältst alte Kulturpflanzenvielfalt.',
        details: [
          'Samenfest: Nachkommen sind sortenecht. Du kannst Samen ernten und nächstes Jahr säen. Mehr Geschmacksvielfalt, oft robuster an Standort angepasst. Nachteil: manchmal geringerer Ertrag als Hybride.',
          'F1-Hybrid: Kreuzung zweier reiner Linien. Erster Generation: einheitlich, oft höherer Ertrag, Krankheitsresistenz. Nachteil: Samen der F1-Früchte ergeben F2-Generation die aufspaltet (unbrauchbar). Jedes Jahr neu kaufen.',
          'Bio-Saatgut: Aus biologischem Anbau vermehrt. Keine chemische Saatgutbehandlung. In AT Bio-Pflicht für Bio-Betriebe. Für Hausgärten empfehlenswert aber nicht vorgeschrieben.',
          'CMS-Hybrid: Cytoplasmatische Männliche Sterilität durch Zellfusion. Umstritten im Bio-Bereich (ist es noch "natürliche Züchtung"?). Im Supermarkt-Gemüse weit verbreitet.',
        ],
        tip: 'Für Anfänger: Starte mit samenfesten Sorten von Arche Noah oder ReinSaat. Der Geschmack ist in der Regel besser als bei Supermarkt-Hybriden. Und du lernst dabei, wie Saatgutvermehrung funktioniert.',
        sourceNote: 'Arche Noah: Sortenhandbuch. Heistinger, A.: Handbuch Samengärtnerei.',
      },
      {
        title: 'Saatgut-Bezugsquellen in Österreich',
        content: 'Österreich hat exzellente Saatgut-Quellen für den Hausgarten. Arche Noah ist weltweit einzigartig in der Erhaltung alter Kultursorten.',
        details: [
          'Arche Noah (arche-noah.at): Die wichtigste Quelle. Tausende samenfeste Gemüse-, Kräuter- und Blumensorten, eines der größten privaten Sortenarchive Europas. Seit März 2026 mit neuem Online-"Sortenportal" (ehemals Sortenhandbuch). Mitgliedschaft ab 32 EUR/Jahr. Jährlicher Frühjahrsverkauf (April-Mai) in Schiltern bei Langenlois (NÖ): 200+ Obstbäume, 35+ Paradeiser-Sorten, 25+ Paprika/Chili. Saatgutfestival jährlich im Februar in Wien.',
          'ReinSaat (reinsaat.at): 700+ samenfeste Sorten in Bio- und Demeter-Qualität. Gegründet 1998 von Demeter-Bauern. Familienbetrieb in St. Leonhard/Hornerwald (NÖ). Zertifiziert: Demeter, Bio Austria, EU-Bio (AT-BIO-301). Exzellente Qualität, regional angepasste Züchtung.',
          'Samen Maier (samen-maier.at): Breiter Bio-Saatgut-Shop aus Österreich. Gemüse, Kräuter, Blumen. Gute Auswahl für Anfänger.',
          'SATIVA (sativa.bio): Schweizer Bio-Saatgut, in AT gut erhältlich. Starke Gemüse- und Kräuter-Auswahl. Besonders gute Tomaten-Sorten.',
          'Austrosaat / bellaflora: Konventionelles Saatgut im Baumarkt. F1-Hybride dominieren. Für Anfänger ok, aber samenfeste Vielfalt fehlt.',
          'Tauschbörsen: Arche Noah Saatgut-Tauschbörse (jährlich im Februar in Wien). Frühjahrsverkauf April-Mai in Schiltern. Lokale Gartler-Treffs. Facebook-Gruppen ("Saatgut-Tausch Österreich").',
          'Saatgut selbst gewinnen: Tomate, Paprika, Bohne, Erbse = einfach (Selbstbefruchter). Karotte, Zwiebel, Kohl = schwierig (Fremdbefruchter, brauchen Isolation).',
        ],
        sourceNote: 'Arche Noah: arche-noah.at. ReinSaat: reinsaat.at.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SELBSTVERSORGUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'selbstversorgung',
    title: 'Selbstversorgung planen',
    subtitle: 'Wie viel Fläche pro Person, welche Kulturen, ganzjährig essen aus dem eigenen Garten',
    color: '#22c55e',
    sourceIds: ['heistinger', 'palme', 'palme-winter', 'kreuter'],
    relatedArticles: ['konservierung', 'winteranbau', 'fruchtfolge-plan', 'obstanbau'],
    sections: [
      {
        title: 'Wie viel Fläche braucht Selbstversorgung?',
        content: 'Die klassische Faustregel lautet: 30-40 m2 Gemüsefläche pro Person für eine gute Eigenversorgung mit Frischgemüse von Mai bis Oktober. Für ganzjährige Selbstversorgung inklusive Einlagerung und Konservierung rechnet man mit 60-80 m2 pro Person. Dazu kommen Obstbäume (je 10-15 m2), Beerensträucher und Kräuter. Eine vierköpfige Familie braucht also 250-350 m2 Nutzgarten für weitgehende Unabhängigkeit vom Supermarkt beim Obst und Gemüse.',
        details: [
          'Stufe 1 - Naschgarten (5-15 m2): Kräuter, Salat, Radieschen, Tomaten, Erdbeeren. Ergänzung zum Einkauf. Auch am Balkon machbar.',
          'Stufe 2 - Grundversorgung (30-50 m2): Frischgemüse Mai-Oktober. Tomaten, Paprika, Gurken, Zucchini, Salat, Karotten, Zwiebeln, Bohnen, Kräuter. Plus Einmachen für Winter.',
          'Stufe 3 - Erweiterte Versorgung (60-100 m2): Ganzjährig mit Einlagerung (Kartoffeln, Karotten, Rote Bete, Zwiebeln, Kürbis) plus Glashaus für Wintersalate.',
          'Stufe 4 - Weitgehende Selbstversorgung (120-200 m2 pro Person): Getreide (Weizen, Roggen), Hülsenfrüchte für Trocknung, Obstbäume, Nüsse. Erfordert erheblichen Arbeitsaufwand.',
          'Balkon (3-8 m2): Erstaunlich viel möglich! 4-6 Tomatenpflanzen, Salat, Kräuter, Erdbeeren, Paprika. Eine Tomatenpflanze liefert 3-5 kg.',
          'Dein Setup (Garten ~200 m2 + Balkon + Glashaus): Ideal für Stufe 3. Mit dem neuen Glashaus ist ganzjährige Versorgung realistisch.',
        ],
        tip: 'Starte mit Stufe 2 und steigere dich. Lieber 30 m2 gut bewirtschaften als 100 m2 im Chaos. Im zweiten Jahr weißt du was funktioniert und kannst gezielt ausbauen.',
        sourceNote: 'Heistinger, A.: Handbuch Bio-Gemüse. Diverse Selbstversorgungsratgeber.',
      },
      {
        title: 'Die wichtigsten Kulturen für Selbstversorger',
        content: 'Nicht jedes Gemüse ist gleich wertvoll für die Selbstversorgung. Entscheidend sind: Kaloriengehalt (macht satt), Lagerfähigkeit (überbrückt den Winter), Ertrag pro Fläche und Aufwand. Kartoffeln, Kürbis, Bohnen, Karotten und Zwiebeln sind die "Big Five" der Selbstversorgung.',
        details: [
          'Kartoffeln: König der Selbstversorgung. 300-500 kg/100 m2. Lagerfähig bis Frühjahr. 4-6 kg Pflanzkartoffeln ergeben 40-60 kg Ernte. Günstiges Kalorien-pro-Fläche-Verhältnis.',
          'Kürbis/Zucchini: Enorm ertragreich. 1 Kürbispflanze = 5-15 kg. Hokkaido lagert 3-6 Monate. Butternut bis zu 12 Monate.',
          'Bohnen (trocken): Eiweiß-Quelle! Käferbohnen, Borlotti, weiße Bohnen. Trocknen und jahrelang lagern. 1-2 kg/10 m2 Trockengewicht.',
          'Karotten: 3-5 kg/m2 möglich. In feuchtem Sand im Keller bis März lagerbar. Staffelaussaat März-Juli = monatelang frisch.',
          'Zwiebeln: 2-4 kg/m2. Luftig und trocken gelagert bis Februar haltbar. Steckzwiebeln = einfachste Kultur überhaupt.',
          'Rote Bete: 2-3 kg/m2. In Sand eingelagert bis Februar. Extrem nahrhaft (Eisen, Folsäure).',
          'Knoblauch: Herbstpflanzung (Oktober) = große Knollen im Juli. Flechten, aufhängen, hält bis Frühjahr.',
          'Tomaten: DAS Einmach-Gemüse. 5-10 kg pro Pflanze. Sugo, Ketchup, getrocknete Tomaten halten 1+ Jahre.',
          'Salat/Spinat/Mangold: Kein Kalorienwert, aber Vitamine und Mineralstoffe ganzjährig (Glashaus!). Staffelaussaat.',
          'Kohl (Weißkraut, Rotkraut): Sauerkraut! 5-8 kg pro Pflanze. Fermentiert haltbar den ganzen Winter. Traditionelle österreichische Konservierung.',
        ],
        tip: 'Für den Anfang: Konzentriere dich auf die Kulturen, die du tatsächlich regelmäßig isst. Es hat keinen Sinn, 50 kg Rote Bete einzulagern, wenn du sie nicht magst.',
        sourceNote: 'Heistinger: Handbuch Bio-Gemüse. Kreuter: Der Biogarten.',
      },
      {
        title: 'Der Jahreskreislauf des Selbstversorgers',
        content: 'Selbstversorgung ist kein Projekt sondern ein Kreislauf. Jede Jahreszeit hat ihre Aufgaben, und das Geheimnis ist die Verzahnung: Während du im Juli Tomaten erntest, säst du gleichzeitig die Herbstkulturen. Während du im Oktober Kürbis einlagerst, steckst du Knoblauch für nächstes Jahr.',
        details: [
          'JÄNNER-FEBRUAR: Planung + Saatgutbestellung. Chili/Paprika vorziehen. Glashaus: Wintersalate ernten. Lager kontrollieren.',
          'MÄRZ-APRIL: Vorkultur Tomaten/Gurken/Kürbis. Freiland: Erbsen, Karotten, Radieschen, Salat. Beete vorbereiten. Kompost ausbringen.',
          'MAI: DER Pflanzmonat. Nach Eisheiligen alles raus. Bohnen, Mais säen. Mulchen. Bewässerung starten.',
          'JUNI: Erste große Ernte (Erdbeeren, Salat, Kohlrabi). Staffelaussaat weiterlaufen. Erste Einmach-Runde (Erdbeermarmelade).',
          'JULI-AUGUST: Ernte-Hochphase. Tomaten-Sugo einkochen (10 kg+). Gurken einlegen. Bohnen einfrieren. Kräuter trocknen. Gleichzeitig: Feldsalat, Spinat für Herbst säen!',
          'SEPTEMBER: Kürbis ernten und einlagern. Paprika rösten und einfrieren. Sauerkraut ansetzen. Knoblauch für nächstes Jahr stecken.',
          'OKTOBER: Karotten, Rote Bete, Sellerie in Sandkisten einlagern. Beete räumen. Gründüngung säen. Feigenbaum schützen.',
          'NOVEMBER-DEZEMBER: Glashaus-Salate ernten. Vorräte genießen. Planungen für nächstes Jahr. Saatgutkataloge studieren.',
        ],
        tip: 'Führe ein Gartentagebuch (oder nutze diesen Garden Hub!). Notiere: was wann gesät, was gut gewachsen, was nicht funktioniert hat, Wetterdaten. In 2-3 Jahren kennst du DEINEN Garten und DEIN Mikroklima besser als jedes Buch.',
      },
      {
        title: 'Kalorien-Rechnung: Reicht der Garten?',
        content: 'Ein Erwachsener braucht ca. 2000-2500 kcal/Tag. Gemüse allein liefert das nicht (zu wenig Kalorien pro kg). Die realistischen Kalorienlieferanten im Garten sind Kartoffeln (770 kcal/kg), Trockenbohnen (3300 kcal/kg!), Kürbis (260 kcal/kg) und Mais (860 kcal/kg). Selbstversorgung bedeutet nicht 100% aus dem Garten. Es bedeutet: Gemüse, Kräuter, Obst und einen Teil der Kohlenhydrate selbst anbauen, und Getreide, Öl und Milchprodukte zukaufen.',
        details: [
          'Kartoffeln: 770 kcal/kg. Bei 400 kg Ernte = 308.000 kcal. Deckt eine Person ~170 Tage bei 50% Kartoffel-Anteil.',
          'Trockenbohnen: 3300 kcal/kg. 20 kg Ernte = 66.000 kcal. Dazu hochwertiges Eiweiß (21 g/100 g).',
          'Kürbis: 260 kcal/kg. 50 kg Ernte = 13.000 kcal. Lagert 3-12 Monate.',
          'Mais: 860 kcal/kg. In AT eher als Polenta oder Tierfutter. Kleine Mengen realistisch.',
          'Tomaten: 180 kcal/kg. Kalorisch irrelevant, aber als Sugo die Basis unzähliger Mahlzeiten.',
          'Realistisch: Ein 100-m2-Gemüsegarten liefert 50-70% des Gemüsebedarfs und 10-20% des Gesamtkalorienbedarfs.',
          'Ergänzen: Getreide (Brot, Nudeln), Öl, Milch/Käse, Eier werden zugekauft. Das ist ok und normal.',
        ],
        sourceNote: 'Nährwertdaten: Österreichische Nährwerttabelle (ÖNWT), Universität Wien.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KONSERVIERUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'konservierung',
    title: 'Konservierung & Haltbarmachung',
    subtitle: 'Einkochen, Fermentieren, Trocknen, Einfrieren, Einlagern: so überbrückst du den Winter',
    color: '#ef4444',
    sourceIds: ['heistinger', 'kreuter'],
    relatedArticles: ['selbstversorgung', 'winteranbau'],
    sections: [
      {
        title: 'Warum konservieren?',
        content: 'Im Juli/August produziert ein gut geführter Garten mehr als eine Familie essen kann. Gleichzeitig liefert er im Dezember-Februar fast nichts (außer Glashaus). Konservierung ist die Brücke: was im Sommer zu viel ist, wird für den Winter haltbar gemacht. Die Methoden sind seit Jahrhunderten erprobt und erfordern kein spezielles Equipment. Ein großer Topf, Weckgläser und ein Keller reichen.',
        details: [
          'Einkochen (Weckgläser): Hält 1-5 Jahre. Ideal für Tomaten, Kompotte, Chutneys, Sugo, Letscho, Marmeladen.',
          'Fermentieren (Milchsäuregärung): Hält 6-12 Monate. Sauerkraut, Kimchi, fermentierte Bohnen, Salzgurken. Bonus: Probiotika!',
          'Trocknen: Hält 1-2 Jahre. Kräuter, Tomaten, Chili, Äpfel, Pilze. Luft, Ofen oder Dörrgerät.',
          'Einfrieren: Hält 6-12 Monate. Bohnen, Erbsen, Beeren, Kräuter-Eiswürfel, Paprika, Spinat.',
          'Einlagern (frisch): Hält 2-6 Monate. Kartoffeln, Karotten, Rote Bete, Sellerie, Äpfel, Kürbis, Zwiebeln, Knoblauch.',
          'Einlegen in Essig/Öl: Hält 6-12 Monate. Cornichons, Mixed Pickles, getrocknete Tomaten in Öl, Knoblauch in Öl.',
        ],
        tip: 'Starte mit dem Einfachsten: Tomatensugo einkochen und Kräuter trocknen. Das sind die zwei Methoden mit dem besten Aufwand-Ergebnis-Verhältnis.',
      },
      {
        title: 'Einkochen (Einwecken)',
        content: 'Einkochen ist die zuverlässigste Methode für säurehaltige Lebensmittel (Tomaten, Obst, Chutneys). Das Prinzip: Lebensmittel werden in sterile Gläser gefüllt, verschlossen und durch Erhitzung auf 85-100 °C pasteurisiert. Der entstehende Unterdruck versiegelt das Glas. Richtig eingekochte Konserven halten bei kühler, dunkler Lagerung mehrere Jahre.',
        details: [
          'Equipment: Große Kochtopf (mind. 30 cm hoch), Weckgläser oder Twist-Off-Gläser, Einmachtrichter (5 EUR), Glasheber (optional). Gesamtinvestition: 30-50 EUR.',
          'Tomatensugo: 5 kg Tomaten → 2-3 L Sugo. Tomaten häuten (kurz blanchieren), pürieren, 30 Min einkochen mit Salz, Basilikum, Knoblauch. Heiß in sterilisierte Gläser füllen, auf Kopf stellen.',
          'Letscho: DAS Burgenland-Rezept. Paprika (3 kg) + Tomaten (2 kg) + Zwiebeln (1 kg). Schneiden, 30 Min köcheln, heiß abfüllen. Hält 1-2 Jahre.',
          'Marmelade: Obst + Zucker (1:1 oder 2:1) + Zitronensaft. Aufkochen, 4 Min sprudelnd kochen, heiß abfüllen. Gelierprobe: Tropfen auf kalten Teller, wird er fest? Fertig.',
          'Chutney: Obst/Gemüse + Essig + Zucker + Gewürze. Grünes Tomaten-Chutney am Saisonende ist ein Klassiker.',
          'Sterilisation: Gläser 10 Min in kochendem Wasser oder bei 130 °C im Ofen. Deckel nur kurz in heißes Wasser (Gummi!). Sofort nach dem Füllen verschließen.',
          'Säure ist entscheidend: Säurehaltige Lebensmittel (pH <4,6): Wasserbad-Methode reicht. Säurearme (Bohnen, Fleisch, Gemüsebrühe): Brauchen Druckeinkocher (120 °C) oder Essig-Zugabe.',
        ],
        warning: 'Säurearme Lebensmittel (Bohnen, Zucchini, Fleisch) NIE nur im Wasserbad einkochen! Botulismus-Gefahr (Clostridium botulinum). Entweder Druckeinkocher (115-120 °C) verwenden oder Essig/Zitronensäure zusetzen (pH <4,6).',
        sourceNote: 'Heistinger: Handbuch Bio-Gemüse, Kap. Konservierung. Bundesamt für Risikobewertung (BfR) Empfehlungen.',
      },
      {
        title: 'Fermentieren (Milchsäuregärung)',
        content: 'Fermentieren ist die älteste Konservierungsmethode der Menschheit und erlebt gerade eine Renaissance. Milchsäurebakterien (natürlich auf dem Gemüse vorhanden) wandeln Zucker in Milchsäure um. Der niedrige pH konserviert das Gemüse und erzeugt Probiotika, die die Darmgesundheit fördern. Sauerkraut ist das bekannteste Beispiel, aber fast jedes Gemüse lässt sich fermentieren.',
        details: [
          'Sauerkraut: DER österreichische Klassiker. 10 kg Weißkraut + 200 g Salz (2%). Hobeln, stampfen bis Saft austritt, in Gärtopf pressen, mit Gewicht beschweren, 3-6 Wochen fermentieren bei 18-22 °C. Dann kühl lagern (Keller, Kühlschrank).',
          'Salzgurken (Milchsauer, nicht Essig!): Kleine feste Gurken + Salzlake (30 g Salz/L Wasser) + Dill + Knoblauch + Meerrettich. 5-7 Tage bei Zimmertemperatur, dann kühl. DAS ist die traditionelle Salzgurke.',
          'Kimchi: Chinakohl + Rettich + Chili + Ingwer + Fischsauce (oder Sojasauce vegan). Koreanisch, aber mit österreichischem Chinakohl wunderbar machbar.',
          'Fermentierte Bohnen: Gekochte Bohnen in Salzlake. Nach 5-7 Tagen umami-artig.',
          'Grundregel: 2-3% Salz bezogen auf Gemüsegewicht. Zu wenig Salz = Fäulnis. Zu viel = Fermentation stoppt.',
          'Gärtopf vs. Glas: Gärtopf (Keramik mit Wasserrinne) ist ideal für große Mengen (10+ kg Sauerkraut). Einmachgläser (1-2 L) für kleine Mengen und Experimente.',
          'Zeichen guter Fermentation: Bläschen steigen auf (CO2), säuerlicher Geruch, leicht trübe Lake. KEIN Schimmel an der Oberfläche (immer unter Flüssigkeit halten!).',
        ],
        tip: 'Starter-Rezept: 1 kleiner Weißkohlkopf (1 kg). Fein hobeln. 20 g Salz darüber. 5 Min kneten/stampfen bis Saft austritt. In 1-L-Glas drücken (Gemüse UNTER Flüssigkeit!). Glas locker zuschrauben. 5-7 Tage bei Zimmertemperatur. Dann in Kühlschrank. Fertig ist dein erstes Sauerkraut!',
        sourceNote: 'Sandor Katz: The Art of Fermentation. Verschiedene österreichische Fermentier-Workshops.',
      },
      {
        title: 'Trocknen und Dörren',
        content: 'Trocknen entzieht dem Lebensmittel Wasser und stoppt damit Bakterien- und Schimmelwachstum. Getrocknete Kräuter, Tomaten, Chili und Äpfel halten 1-2 Jahre und nehmen kaum Platz ein. Die einfachste Methode ist Lufttrocknung (Kräuterbündel kopfüber aufhängen), die zuverlässigste ein Dörrgerät oder der Backofen.',
        details: [
          'Kräuter trocknen: Bündel kopfüber an warmem, luftigem Ort aufhängen (nicht in der Sonne!). Basilikum, Oregano, Thymian, Rosmarin, Salbei. In 5-7 Tagen trocken. In Gläser füllen.',
          'Tomaten trocknen: Halbieren, Kerne entfernen, Schnittfläche nach oben auf Backblech. Salz drüber. Bei 60-70 °C im Ofen 8-12 Stunden (Ofentür einen Spalt offen). Oder im Dörrgerät bei 60 °C, 12-18 Std.',
          'Chili trocknen: Ganze Schoten auf Schnur auffädeln, an warmem Ort aufhängen. 2-3 Wochen. Oder im Ofen bei 50 °C, 6-8 Std.',
          'Apfelringe: Kerngehäuse entfernen, in 5-mm-Scheiben schneiden, in Zitronenwasser tauchen (gegen Bräunung). Im Ofen bei 60 °C, 6-8 Std. Oder an der Schnur aufhängen (traditionell).',
          'Dörrgerät: Investition 40-100 EUR. Vorteil: gleichmäßige Temperatur, energieeffizienter als Ofen. Empfehlung: Modell mit Temperaturregelung (nicht nur an/aus).',
          'Lagerung: Getrocknetes in luftdichte Gläser (kein Plastik). Kühl, dunkel. Feuchtigkeit ist der Feind. Silicagel-Beutel helfen.',
        ],
        tip: 'Basilikum-Salz: Getrocknetes Basilikum mit grobem Salz im Mörser. Fantastisch auf Bruschetta, Pasta, Focaccia. Selbstgemachtes Geschenk!',
      },
      {
        title: 'Einlagern: der Erdkeller',
        content: 'Vor dem Kühlschrank war der Erdkeller die Standardmethode: kühl (2-8 °C), feucht (80-95% Luftfeuchtigkeit), dunkel und frostfrei. Viele Gemüse halten unter diesen Bedingungen 3-6 Monate: Kartoffeln, Karotten, Rote Bete, Sellerie, Äpfel, Kürbis, Zwiebeln, Knoblauch. Wer keinen Erdkeller hat, kann einen kühlen Kellerraum, eine ungeheizte Garage oder sogar eine Erdmiete nutzen.',
        details: [
          'Kartoffeln: Dunkel (Licht = grün = Solanin = giftig!), 4-8 °C, feucht. In Jutesäcken oder offenen Holzkisten. Nicht neben Äpfeln lagern (Ethylen fördert Keimung). Hält 4-6 Monate.',
          'Karotten: In feuchtem Sand einschlagen, in Holzkisten im Keller. 0-4 °C, 90%+ Luftfeuchtigkeit. Hält 3-5 Monate. Grün vorher abdrehen (zieht Wasser!).',
          'Rote Bete: Wie Karotten in Sand. Stiel 2 cm dran lassen (sonst blutet sie aus). Hält 3-4 Monate.',
          'Sellerie: In Sand, wie Karotten. Hält 2-3 Monate. Alternativ: in Scheiben einfrieren.',
          'Kürbis: Trocken, 10-15 °C (wärmer als anderes Lagergemüse!). Hokkaido: 3-4 Monate. Butternut: bis 12 Monate. Stiel immer dran lassen.',
          'Zwiebeln + Knoblauch: Trocken, luftig, 5-15 °C. In Netzen oder Zöpfen aufhängen. Hält 4-8 Monate.',
          'Äpfel: 0-4 °C, 90% Luftfeuchtigkeit. Einzeln in Zeitungspapier wickeln. Regelmäßig kontrollieren (1 fauler Apfel verdirbt den Korb). Nicht neben Kartoffeln (Ethylen). Hält 2-5 Monate je nach Sorte.',
          'Erdmiete: Loch im Garten (50 cm tief), Stroh auslegen, Gemüse rein, Stroh drüber, Erde drauf. Natürlicher Erdkeller. Traditionelle Methode für Karotten und Kartoffeln.',
        ],
        tip: 'Kein Keller? Ungeheizte Garage, Balkon-Isolierbox (Styropor-Kiste mit Deckel), oder kaltes Treppenhaus. Temperatur-Logger (10 EUR bei Amazon) hilft den besten Platz zu finden.',
        sourceNote: 'Kreuter: Der Biogarten, Kap. Lagerung. Traditionelle Lagermethoden Niederösterreich.',
      },
      {
        title: 'Einfrieren: Tipps und Tricks',
        content: 'Einfrieren ist die schnellste und vitaminschonendste Konservierungsmethode. Wichtig: Gemüse vor dem Einfrieren BLANCHIEREN (30-60 Sekunden in kochendes Wasser, dann in Eiswasser). Das stoppt Enzyme, die Geschmack, Farbe und Vitamine zerstören würden.',
        details: [
          'Bohnen: Putzen, in 3-cm-Stücke schneiden. 2 Min blanchieren. In Eiswasser abschrecken. Abtropfen, portionsweise einfrieren. Hält 10-12 Monate.',
          'Erbsen: Aus Hülsen lösen. 1 Min blanchieren. Abschrecken. Auf Backblech vorfrieren (30 Min), dann in Beutel. Rieseln so lose wie TK-Ware.',
          'Paprika: Entkernen, in Streifen schneiden. NICHT blanchieren. Auf Backblech vorfrieren. In Beutel. Oder: rösten, häuten, dann einfrieren.',
          'Spinat/Mangold: 30 Sek blanchieren. Ausdrücken (sonst Eiskristalle). In Portionskugeln formen. Einfrieren. Oder: als Pesto mit Öl in Eiswürfelform.',
          'Beeren: Auf Backblech in einer Schicht vorfrieren (1 Std). Dann in Beutel schütten. So kleben sie nicht zusammen.',
          'Kräuter: Klein schneiden, in Eiswürfelformen, mit Olivenöl auffüllen, einfrieren. 1 Kräuter-Eiswürfel = 1 Portion für Saucen, Suppen.',
          'Beschriftung: IMMER Inhalt + Datum draufschreiben. In 6 Monaten weißt du nicht mehr ob das Spinat oder Brennnesseln sind.',
          'Haltbarkeit im Tiefkühler: 10-12 Monate bei -18 °C. Danach sinkt die Qualität (Gefrierbrand), aber es ist nicht verdorben.',
        ],
        warning: 'Gurken, Salat, Tomaten (roh), Radieschen und wasserreiches Gemüse lassen sich NICHT einfrieren (werden matschig). Tomaten nur als Sugo/Sauce einfrieren.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WINTERANBAU
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'winteranbau',
    title: 'Winteranbau & Saisonverlängerung',
    subtitle: 'Frisches Gemüse von November bis März: Glashaus, Frühbeet, Vlies und winterharte Sorten',
    color: '#06b6d4',
    sourceIds: ['palme', 'palme-winter', 'heistinger'],
    relatedArticles: ['selbstversorgung', 'konservierung'],
    sections: [
      {
        title: 'Warum Winteranbau der Gamechanger ist',
        content: 'Die meisten Gärtner in Österreich bauen von Mai bis Oktober an und kaufen von November bis April im Supermarkt. DI Wolfgang Palme (HBLFA Schönbrunn) hat in jahrelanger Forschung gezeigt: mit einem unbeheizten Glashaus oder Folientunnel und den richtigen Sorten kann man in Wien ganzjährig frisches Gemüse ernten. Im Projekt "Wintergemüsevielfalt" (mit Bio Austria) wurden auf 7 Biobetrieben über 150 Gemüsesorten identifiziert, die für den unbeheizten Winteranbau geeignet sind. Ohne Heizung, ohne besondere Technik.',
        details: [
          'Unbeheiztes Glashaus in Wien: 3-5 °C wärmer als draußen. Reicht für Feldsalat, Spinat, Postelein, Asiasalate.',
          'Frühbeet: Flächer Kasten mit Glasdeckel. Noch wärmer als Glashaus (kleines Volumen = schnell aufgeheizt). Ideal für Radieschen, Salat, Kohlrabi ab Februar.',
          'Vlies/Flies: 2-4 °C Schutz. Direkt auf Pflanzen legen. Kostet 2-3 EUR/m. Verlängert Freiland-Saison um 3-4 Wochen.',
          'Winterharte Kulturen im Freiland: Grünkohl (-15 °C), Feldsalat (-15 °C), Winterlauch (-15 °C), Topinambur, Pastinake, Winterportulak.',
          'Prinzip: Im Winter nicht "anbauen" sondern "ernten". Die Pflanzen werden im August/September gesät und wachsen im Herbst heran. Im Winter halten sie still, wachsen kaum, aber man kann laufend ernten.',
          'Lichtminimum: Ab Wintersonnenwende (21.12.) werden die Tage wieder länger. Ab Mitte Jänner reagieren Pflanzen und beginnen wieder zu wachsen.',
        ],
        tip: 'Die einfachste Saisonverlängerung: Feldsalat im September ins Beet oder Glashaus säen. Er ist frosthart bis -15 °C und liefert den ganzen Winter frische Blätter. Kein Aufwand, kein Risiko.',
        sourceNote: 'Palme, W.: Ernte mich im Winter (2019). HBLFA Schönbrunn Versuchsergebnisse.',
      },
      {
        title: 'Die besten Winterkulturen für Österreich',
        content: 'Diese Kulturen sind erprobt für den Winteranbau in Österreichs Klimazone 7a/b. Die meisten werden im August/September gesät und von November bis März geerntet.',
        details: [
          'Feldsalat (Valerianella locusta): Der Winter-Star. Frosthart bis -15 °C. Saat August-September. Ernte November-März. Im Glashaus UND im Freiland. Kein Schutz nötig. Nussig, mild.',
          'Winterpostelein / Tellerkraut (Claytonia perfoliata): Frosthart bis -10 °C. Saat September. Ernte November-März. Wächst bei 5 °C noch. Saftig, knackig, mild. Samen sich selbst aus.',
          'Spinat "Winterriesen": Frosthart bis -10 °C. Saat Oktober. Ernte Dezember-Februar. Wird nach Frost süßer (Stärke → Zucker).',
          'Asiasalate (Mizuna, Tatsoi, Pak Choi): Frosthart bis -5 bis -10 °C. Saat September. Schnell wachsend. Vielfältige Aromen (mild bis senfartig).',
          'Grünkohl / Palmkohl (Brassica oleracea): Frosthart bis -15 °C. Saat Juli-August. Ernte November-März. Wird nach Frost dramatisch süßer. Superfood (mehr Vitamin C als Orangen).',
          'Winterkresse / Barbarakraut: Frosthart bis -15 °C. Saat August. Ernte November-April. Senfartig, peppig. Wildkraut-Charakter.',
          'Rucola (Wilde Rauke, Diplotaxis): Im Glashaus ganzjährig. Wächst sehr langsam im Winter aber stetig. Schärfer als Sommer-Rucola.',
          'Winterlauch "Blaugrüner Winter": Im Beet stehen lassen, frosthart bis -15 °C. Ernte nach Bedarf Oktober-März.',
          'Pastinake: Im Beet lassen, wird nach Frost süßer. Ernte Oktober-März. Tief mulchen zum Schutz.',
          'Topinambur (Helianthus tuberosus): Knollen im Boden lassen, bei Bedarf ausgraben. Frosthart. Ernte Oktober-März. Achtung: wuchert!',
        ],
        sourceNote: 'Palme, W.: Ernte mich im Winter. HBLFA Schönbrunn Sortenliste Wintergemüse.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OBSTANBAU
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'obstanbau',
    title: 'Obstanbau & Beeren',
    subtitle: 'Obstbäume, Beerensträucher und Wildobst für den Hausgarten in Österreich',
    color: '#f59e0b',
    sourceIds: ['arche-noah', 'lk-noe', 'lk-bgld'],
    relatedArticles: ['selbstversorgung', 'konservierung'],
    sections: [
      {
        title: 'Obstbäume für den Hausgarten',
        content: 'Obstbäume sind eine Investition in die Zukunft: 2-4 Jahre bis zur ersten nennenswerten Ernte, aber dann 30-100 Jahre Ertrag. Im pannonischen Klima (Wien, NÖ, Bgld) gedeihen fast alle mitteleuropäischen Obstarten hervorragend. Wichtig: Unterlage und Veredelung bestimmen die Größe. Für Hausgärten Halbstamm oder Buschbaum wählen (nicht Hochstamm: zu groß, zu spät ertragreich).',
        details: [
          'Apfel: DER österreichische Obstbaum. Sorten: "Kronprinz Rudolf" (alte AT-Sorte, Arche Noah), "Topaz" (schorfresistent, bio), "Elstar" (aromatisch). 2-3 Sorten für gegenseitige Bestäubung. Buschbaum: Ernte ab Jahr 3. 30-100 kg/Baum bei voller Größe.',
          'Zwetschke: Ideal für AT Klima. Sorten: "Hauszwetschke" (Standard), "Wangenheims Frühzwetschke" (selbstfruchtbar, früh), "Bühler" (Powidl!). 20-50 kg/Baum.',
          'Marille (Aprikose): Wachau-Star, aber auch im pannonischen Raum. Sorten: "Klosterneuburger" (AT-Züchtung), "Goldrich". Spätfrost-Risiko bei Blüte im März. Geschützten Standort wählen.',
          'Kirsche: Süßkirsche braucht Bestäubungspartner. Sorten: "Kordia" (groß, fest), "Burlat" (früh). Sauerkirsche "Schattenmorelle" ist selbstfruchtbar. Vogelschutz-Netz nötig!',
          'Birne: Wärmeliebend, ideal für pannonisches Klima. Sorten: "Williams Christ" (Edelbrand!), "Gute Luise", "Conference". Brauchen Bestäubungspartner.',
          'Feige: In Wien und Bgld zunehmend angebaut. "Brown Turkey" ist die robusteste Sorte (-12 °C wenn etabliert). Hausmauer = Wärmespeicher.',
          'Nuss: Walnuss braucht viel Platz (10-15 m Kronendurchmesser). Haselnuss ist kompakter. Beides: 5-10 Jahre bis Ertrag.',
          'Pflanzzeit: Herbst (Oktober-November) ist ideal. Wurzeln wachsen den Winter über an. Containerpflanzen auch im Frühling.',
        ],
        tip: 'Für kleine Gärten: Säulenobst oder Spalier an der Hauswand. Ein Spalier-Apfel braucht nur 30 cm Breite und liefert trotzdem 10-20 kg.',
        sourceNote: 'LK NÖ Obstbau-Sortenempfehlung. Arche Noah Sortendatenbank. LK Bgld.',
      },
      {
        title: 'Beerensträucher: schneller Ertrag',
        content: 'Beeren sind die Sofortbefriedigung im Obstgarten: Pflanzung im Herbst/Frühling, erste Ernte im nächsten Sommer. Sie brauchen wenig Platz, wenig Pflege und liefern vitaminreiches Obst zum Frischessen, Einfrieren und für Marmeladen.',
        details: [
          'Erdbeeren: Siehe Pflanzenlexikon. Pflanzung August für Ernte nächstes Jahr. 300-500 g pro Pflanze. Monatserdbeeren tragen Juni-Oktober.',
          'Himbeeren: "Autumn Bliss" (Herbsthimbeere, einfacher!) oder "Tulameen" (Sommerhimbeere, aromatischer). Rankhilfe (Drahtgerüst). 2-4 kg pro Laufmeter.',
          'Ribisel (Johannisbeeren): Rot, weiß, schwarz. Anspruchslos, frosthart, pflegeleicht. Schwarze Ribisel = höchster Vitamin-C-Gehalt aller Gartenfrüchte. 3-5 kg/Strauch.',
          'Stachelbeeren: "Invicta" (mehltauresistent), "Hinnonmäki Rot" (süß). Ertrag: 3-5 kg/Strauch. Jährlich auslichten.',
          'Heidelbeeren: Brauchen SAUREN Boden (pH 4,0-5,0)! In Rhododendron-Erde pflanzen oder Hochbeet mit Rindenhumus. "Bluecrop", "Duke" (selbstfruchtbar).',
          'Brombeeren: Dornenlose Sorten: "Loch Ness", "Navaho". Enorm ertragreich: 5-10 kg/Pflanze. Brauchen Rankhilfe. Können wuchern!',
          'Aronia (Apfelbeere): Superfood-Strauch. Frosthart bis -30 °C. Anspruchslos. Beeren für Saft, Marmelade, Trocknung. 5-8 kg/Strauch.',
          'Holunder: Wächst fast überall, oft wild vorhanden. Blüten → Holunderblütensirup/Sekt. Beeren → Saft, Gelee. Beeren nur gekocht genießen (roh leicht giftig).',
        ],
        tip: 'Beerensträucher entlang des Grundstücksrands pflanzen: sie bilden eine essbare Hecke, sparen Platz und sehen gut aus.',
        sourceNote: 'LK NÖ Beerenobst-Ratgeber. Arche Noah Sortenverzeichnis.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FRUCHTFOLGE-PLAN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'fruchtfolge-plan',
    title: 'Fruchtfolge: der 4-Jahres-Plan',
    subtitle: 'Detaillierter Rotationsplan mit Beispielbelegung für 4 Beete über 4 Jahre',
    color: '#f59e0b',
    sourceIds: ['heistinger', 'kreuter', 'fibl'],
    relatedArticles: ['boden', 'duengung', 'selbstversorgung'],
    sections: [
      {
        title: 'Warum Fruchtfolge unverzichtbar ist',
        content: 'Jede Pflanzenfamilie zieht bestimmte Krankheitserreger und Schädlinge an, die im Boden überdauern. Wenn du 2 Jahre hintereinander Tomaten am gleichen Platz anbaust, haben Nematoden, Fusarium und Co. ein Festmahl. Gleichzeitig laugt eine Starkzehrer-Monokultur den Boden einseitig aus. Fruchtfolge löst beides: Schädlinge finden keinen Wirt, Nährstoffe erholen sich.',
        details: [
          'Regel 1: Nie 2 Jahre dieselbe FAMILIE am selben Beet. Tomate → Tomate: NEIN. Tomate → Paprika: auch NEIN (beide Solanaceae). Tomate → Bohne: JA.',
          'Regel 2: Starkzehrer → Mittelzehrer → Schwachzehrer → Gründüngung/Pause. Dann wieder von vorn.',
          'Regel 3: Hülsenfrüchte (Bohnen, Erbsen) hinterlassen Stickstoff im Boden. Ideal VOR Starkzehrern.',
          'Regel 4: Kreuzblütler (Kohl, Kohlrabi, Radieschen, Rucola) haben das längste Rotationsintervall: mind. 6, besser 7 Jahre Anbaupause (Kohlhernie / Plasmodiophora brassicae überdauert als Dauersporen 15-20 Jahre im Boden!). Zusätzlich: pH >7 anstreben (Kalkung), da Kohlhernie in saurem Boden deutlich aggressiver ist.',
        ],
        warning: 'Kohlhernie (Plasmodiophora brassicae) ist die gefährlichste bodenbürtige Krankheit: befallene Wurzeln anschwellen, Pflanze welkt. Erreger überdauert 15-20 Jahre im Boden. Einmal infiziert, nie wieder Kreuzblütler an diesem Platz.',
        sourceNote: 'Heistinger: Handbuch Bio-Gemüse, Kap. Fruchtfolge. FiBL Merkblatt.',
      },
      {
        title: '4-Beete-Rotation: Praxisbeispiel',
        content: 'Teile deinen Gemüsegarten in 4 gleichgroße Beete auf. Jedes Beet durchläuft in 4 Jahren alle 4 Stufen. Am Ende des Zyklus fängt alles von vorn an. Dieses System funktioniert seit Jahrhunderten und ist die Basis der europäischen Landwirtschaft.',
        details: [
          'BEET A - Jahr 1 STARKZEHRER: Tomate, Paprika, Kürbis, Zucchini, Gurke, Sellerie, Kohl. Kompostgabe: 5-10 L/m2. Düngen mit Brennnesseljauche.',
          'BEET B - Jahr 1 MITTELZEHRER: Karotte, Rote Bete, Fenchel, Mangold, Kohlrabi, Salat. Kompostgabe: 3-5 L/m2.',
          'BEET C - Jahr 1 SCHWACHZEHRER: Bohnen, Erbsen, Kräuter, Zwiebeln, Knoblauch. Kompostgabe: 1-2 L/m2 oder keinen. Hülsenfrüchte fixieren ihren Stickstoff selbst!',
          'BEET D - Jahr 1 GRÜNDÜNGUNG/PAUSE: Phacelia, Gelbsenf, Klee, Luzerne. Oder: Erdäpfel (brauchen eigenes Beet wegen Kraut-/Knollenfäule).',
          'Jahr 2: Alles rückt eine Position: A→Mittelzehrer, B→Schwachzehrer, C→Gründüngung, D→Starkzehrer.',
          'Jahr 3: Wieder eine Position weiter.',
          'Jahr 4: Wieder eine Position. Danach: Zyklus beginnt von vorn.',
          'AUSNAHME: Mehrjährige Kulturen (Erdbeeren 3 Jahre, Spargel 10+ Jahre, Rhabarber 8+ Jahre, Kräuter) haben einen festen Platz außerhalb der Rotation.',
        ],
        tip: 'Zeichne deinen Beetplan und notiere jedes Jahr was wo stand. In 2-3 Jahren hast du ein perfektes Rotationssystem. Der Garden Hub Kalender hilft dir dabei.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HOCHBEET
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'hochbeet',
    title: 'Hochbeet: Planung und Aufbau',
    subtitle: 'Material, Schichtung, Bepflanzung und was man nach 3 Jahren macht',
    color: '#1e3a5f',
    sourceIds: ['kreuter', 'heistinger'],
    relatedArticles: ['boden', 'kompost', 'bewaesserung'],
    sections: [
      {
        title: 'Warum Hochbeet?',
        content: 'Hochbeete lösen die häufigsten Anfänger-Probleme auf einen Schlag: schlechter Boden (du füllst deinen eigenen), Schnecken (Schneckenkante montieren), Rückenprobleme (Arbeitshöhe 80 cm), Staunässe (perfekte Drainage). Dazu kommt ein Bonus: das Hochbeet kompostiert von innen und erzeugt Wärme. Pflanzen wachsen 2-3 Wochen schneller als im Bodenbeet.',
        details: [
          'Vorteile: Guter Boden unabhängig vom Untergrund. Rückenschonend. Weniger Schnecken. Wärmere Erde (Verrottung im Inneren). 2-3 Wochen Vorsprung.',
          'Nachteile: Teurer Aufbau (Material + Füllung). Trocknet schneller aus (2-3x gießen wie Bodenbeet!). Sackt 10-20 cm im ersten Jahr. Nach 5-7 Jahren muss die Füllung erneuert werden.',
          'Maße: Breite max. 120 cm (von beiden Seiten erreichbar). Höhe: 80 cm (ergonomisch). Länge: beliebig, 200-400 cm üblich.',
          'Material: Lärche (15-20 Jahre haltbar, kein Holzschutz nötig). Douglasie (12-15 Jahre). Fichte (5-8 Jahre, günstig aber kurzlebig). Nie Tropenholz. Metall (Cortenstahl, langlebig, teuer).',
          'Kosten: Holz selbst bauen 100-200 EUR. Fertigbausatz 200-500 EUR. Cortenstahl 400-1000 EUR. Füllung: 50-100 EUR (wenn man nicht alles aus dem Garten hat).',
        ],
        tip: 'Lärche unbehandelt ist die beste Wahl für Österreich. Wächst hier, kein Import nötig, hält 15-20 Jahre ohne Behandlung, wird silbergrau und sieht gut aus.',
      },
      {
        title: 'Schichtung: die Lasagne-Methode',
        content: 'Ein Hochbeet wird nicht einfach mit Erde gefüllt! Es wird geschichtet wie eine Lasagne: grobes Material unten (verrottet langsam, erzeugt Wärme), feines Material oben (Pflanzenerde). Die Verrottung der unteren Schichten liefert Nährstoffe und Wärme für 3-5 Jahre.',
        details: [
          'Schicht 1 (Boden, 20 cm): Grobes Holz, Äste, Baumschnitt, Holzhäcksel. Verrottet langsam (2-3 Jahre), gibt dabei Wärme frei, dient als Drainage.',
          'Schicht 2 (15 cm): Umgedrehte Grassoden, grober Kompost, Laub, Stroh, halbverrottetes Material.',
          'Schicht 3 (10 cm): Reifer Kompost, verrotteter Mist (Pferde- oder Hühnermist, NIE frisch!). Die Nährstoff-Turbine.',
          'Schicht 4 (25-30 cm): Mischung aus guter Gartenerde und reifem Kompost (2:1). Die Pflanzschicht. Hier wachsen die Wurzeln.',
          'Optionaler Boden: Wühlmausgitter am Boden (Maschenweite 13 mm) verhindert Untergrabung.',
          'Optionale Schneckenkante: Kupferband (5 cm breit) oder Schneckenkante aus Metall (nach außen überhängend, 45°). 90% Schnecken-Schutz.',
          'Sacken: Im ersten Jahr sackt die Füllung 10-20 cm. Einfach mit Kompost + Erde nachfüllen.',
        ],
        warning: 'Niemals frischen Mist (Pferd, Huhn, Rind) in die Pflanzschicht! Frischer Mist hat zu viel Ammoniak und verbrennt Wurzeln. Nur gut verrotteten Mist (6+ Monate alt, riecht nach Erde) verwenden.',
        sourceNote: 'Kreuter: Der Biogarten. Diverse Hochbeet-Ratgeber.',
      },
      {
        title: 'Bepflanzung und Fruchtfolge im Hochbeet',
        content: 'Das Hochbeet hat eine eigene Dynamik: im ersten Jahr ist der Nährstoffgehalt am höchsten (frische Verrottung), dann sinkt er. Daher: im 1. Jahr Starkzehrer, im 2. Jahr Mittelzehrer, im 3. Jahr Schwachzehrer. Im 4.-5. Jahr auffüllen und neu starten.',
        details: [
          'Jahr 1 (Starkzehrer): Tomate, Zucchini, Kürbis, Gurke, Kohl. Das Hochbeet ist jetzt eine Nährstoffbombe. Perfekt für hungrige Pflanzen.',
          'Jahr 2 (Mittelzehrer): Karotten, Rote Bete, Mangold, Kohlrabi, Fenchel, Salat. Immer noch gut versorgt.',
          'Jahr 3 (Schwachzehrer): Bohnen, Erbsen, Kräuter, Radieschen, Zwiebeln. Nährstoffe sind weniger, aber für Schwachzehrer reicht es.',
          'Jahr 4-5: Auffüllen mit Kompost (10 cm), wieder mit Starkzehrern starten. Oder: komplette Neufüllung nach 5-7 Jahren.',
          'Pflanzabstände im Hochbeet: 20% enger als im Bodenbeet möglich (mehr Nährstoffe, bessere Erde). Aber nicht übertreiben: Belüftung muss stimmen.',
          'Bewässerung: Hochbeete trocknen 2-3x schneller aus als Bodenbeete! Tropfschlauch installieren oder 2x täglich kontrollieren. Mulch hilft.',
        ],
        tip: 'Hochbeet-Hack: An den Seiten hängende Erdbeerpflanzen setzen. Der Platz an den Außenwänden wird oft verschwendet, aber Erdbeeren ranken dort perfekt.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KRÄUTER
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'kraeuter',
    title: 'Kräutergarten',
    subtitle: 'Anbau, Ernte, Trocknung und Verwendung der wichtigsten Küchenkräuter',
    color: '#22c55e',
    sourceIds: ['heistinger', 'kreuter'],
    relatedArticles: ['konservierung', 'selbstversorgung'],
    sections: [
      {
        title: 'Kräuter-Grundlagen',
        content: 'Kräuter sind die dankbarsten Gartenpflanzen: wenig Platz, wenig Pflege, riesiger Geschmacksunterschied zu gekauften Kräutern. Ein 1-m2-Kräuterbeet neben der Küchentür liefert mehr frische Kräuter als eine Familie verbrauchen kann. Die meisten mediterranen Kräuter (Rosmarin, Thymian, Salbei, Oregano) sind Schwachzehrer und bevorzugen magere, durchlässige, sonnige Standorte. Feuchtigkeitsliebende Kräuter (Petersilie, Schnittlauch, Minze) mögen es nahrhafter und schattiger.',
        details: [
          'SONNIG + TROCKEN + MAGER (mediterran): Rosmarin, Thymian, Oregano, Salbei, Lavendel, Majoran. Nicht düngen! Magerer Boden = mehr ätherische Öle = intensiverer Geschmack.',
          'SONNIG BIS HALBSCHATTIG + FEUCHT: Basilikum, Petersilie, Schnittlauch, Dill, Koriander, Minze. Regelmäßig gießen. Kompost einarbeiten.',
          'Einjährige Kräuter (jedes Jahr neu säen): Basilikum, Dill, Koriander, Kerbel, Bohnenkraut (Sommer).',
          'Mehrjährige Kräuter (einmal pflanzen, jahrelang ernten): Rosmarin, Thymian, Salbei, Oregano, Schnittlauch, Estragon, Minze, Liebstöckel.',
          'Minze-Warnung: Minze wuchert aggressiv! Immer in einem Topf (ohne Loch!) im Beet versenken. Sonst erobert sie alles.',
          'Standort: So nah wie möglich an der Küchentür. Wer bei Regen keine 20 Meter laufen will, erntet nicht. Kräuterspirale, Balkonkasten oder 1 m2 Beet direkt am Hauseingang.',
        ],
        tip: 'Kräuterspirale: Ein schneckenförmiges aufgeschichtetes Beet aus Steinen (1,5 m Durchmesser). Oben trocken-sonnig (Rosmarin, Thymian), unten feucht-schattig (Petersilie, Minze). Vereint alle Kräuter-Ansprüche auf minimaler Fläche.',
      },
      {
        title: 'Kräuter ernten und konservieren',
        content: 'Die wichtigste Regel: Kräuter nie einzelne Blätter zupfen, sondern immer ganze Triebspitzen abschneiden. Das fördert buschiges Wachstum und verhindert Blütenbildung (blühende Kräuter verlieren Aroma). Ernte am besten morgens nach dem Tau aber vor der Mittagshitze: da ist der Gehalt an ätherischen Ölen am höchsten.',
        details: [
          'Trocknen: Sträuße binden, kopfüber an luftigem, warmem, dunklem Ort (NICHT in der Sonne: zerstört Aromen). 5-7 Tage. Dann von Stielen streifen, in Gläser füllen. Haltbar 1-2 Jahre.',
          'Einfrieren: Klein schneiden, in Eiswürfelformen, mit Olivenöl auffüllen. 1 Würfel = 1 Portion. Ideal für Basilikum (trocknet schlecht), Petersilie, Schnittlauch, Dill.',
          'Pesto: Basilikum + Knoblauch + Pinienkerne/Walnüsse + Parmesan + Olivenöl. Einfrieren in kleinen Portionen. Auch mit Rucola, Petersilie oder Bärlauch machbar.',
          'Kräutersalz: Getrocknete Kräuter mit grobem Meersalz mörsern (Verhältnis 1:3). Rosmarin-Salz, Thymian-Salz, Kräuter-der-Provence-Salz. Perfektes Geschenk!',
          'Kräuteressig: Frische Zweige (Estragon, Thymian, Rosmarin) in guten Weißweinessig einlegen. 2 Wochen ziehen lassen. Abseihen. Hält 1+ Jahr.',
          'Kräuteröl: Getrocknete (nicht frische!) Kräuter in Olivenöl einlegen. Frische Kräuter in Öl → Botulismus-Risiko! Immer trocknen oder ansäuern.',
        ],
        warning: 'Frische Kräuter NIEMALS in Öl einlegen ohne Ansäuerung (Zitronensäure/Essig)! Feuchte Umgebung + kein Sauerstoff + Raumtemperatur = ideale Botulismus-Bedingungen (Clostridium botulinum). Getrocknete Kräuter in Öl sind sicher.',
        sourceNote: 'Heistinger: Handbuch Bio-Gemüse, Kap. Kräuter. Hygiene Austria Lebensmittelsicherheit.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MISCHKULTUR-TABELLE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'mischkultur',
    title: 'Mischkultur: Wer passt zu wem?',
    subtitle: 'Die vollständige Verträglichkeitstabelle, klassische Kombinationen und das Milpa-Prinzip',
    color: '#22c55e',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['fruchtfolge-plan', 'pflanzenschutz', 'selbstversorgung'],
    sections: [
      {
        title: 'Warum Mischkultur funktioniert',
        content: 'Mischkultur ist kein Esoterik sondern angewandte Ökologie. Die Mechanismen sind wissenschaftlich belegt: (1) Duftstoff-Verwirrung: Möhrenfliegen finden Karotten über den Geruch. Zwiebeln daneben überdecken diesen Geruch. (2) Nützlingsförderung: Blühende Kräuter zwischen Gemüse locken Schwebfliegen an, deren Larven Blattläuse fressen. (3) Platzeffizienz: Tiefwurzler (Tomate) + Flachwurzler (Salat) konkurrieren nicht um Wasser. (4) Stickstoff-Transfer: Leguminosen (Bohnen) geben über ihre Wurzelknöllchen Stickstoff an Nachbarpflanzen ab.',
        details: [
          'Tomate + Basilikum: Der Klassiker. Basilikum soll Weiße Fliege abwehren und den Geschmack verbessern (nicht bewiesen, aber die Pflanzen haben ähnliche Ansprüche). Beide mögen Sonne und Wärme.',
          'Karotte + Zwiebel: WISSENSCHAFTLICH BELEGT. Studien zeigen bis zu 80% Reduktion des Möhrenfliegen-Befalls (Psila rosae) in Mischkultur mit Zwiebeln. Die Schwefelduftstoffe der Zwiebel überlagern den Karottengeruch. Umgekehrt hält der Karottenduft die Zwiebelfliege (Delia antiqua) ab. Zusätzlich: mehr Beta-Carotin in den Karotten.',
          'Kürbis + Mais + Bohne (MILPA): Das 5000 Jahre alte System der Drei Schwestern. Mais = Rankhilfe für Bohne. Bohne = fixiert Stickstoff für Mais + Kürbis. Kürbis = bedeckt Boden (Unkraut, Feuchtigkeit). Perfektes System.',
          'Salat + Radieschen: Radieschen keimen in 5 Tagen und markieren die Reihe. Salat braucht 14 Tage. Bis der Salat Platz braucht, sind die Radieschen geerntet. Zeitlich versetzte Nutzung derselben Fläche.',
          'Erdbeere + Knoblauch: Knoblauch schützt Erdbeeren vor Grauschimmel (Botrytis). Die fungizide Wirkung von Allicin ist wissenschaftlich belegt.',
          'Tomate + Tagetes: Tagetes (Studentenblume) gibt Stoffe über die Wurzeln ab, die Nematoden im Boden reduzieren. Nachgewiesen in Studien der Universität Wageningen.',
          'Kohl + Sellerie: Sellerie verwirrt Kohlfliegen und Kohlweißlinge. Kohl beschattet den feuchtigkeitsliebenden Sellerie.',
        ],
        tip: 'Starte mit den drei bewährtesten Kombis: Karotte+Zwiebel, Tomate+Basilikum, Milpa. Damit machst du nichts falsch und lernst das Prinzip.',
        sourceNote: 'Kreuter: Der Biogarten, Mischkultur-Tabelle (Anhang). FiBL Merkblatt Mischkultur. Gertrud Franck: Gesunder Garten durch Mischkultur.',
      },
      {
        title: 'Gute Nachbarn: Übersichtstabelle',
        content: 'Diese Tabelle zeigt die wichtigsten positiven Kombinationen. Die Pflanzen profitieren gegenseitig voneinander durch Duftstoffe, Nährstoffaustausch, Platzeffizienz oder Nützlingsförderung.',
        details: [
          'TOMATE: Basilikum, Petersilie, Karotte, Knoblauch, Tagetes, Salat',
          'PAPRIKA: Tomate, Basilikum, Karotte, Ringelblume, Petersilie',
          'GURKE: Bohne, Dill, Salat, Erbse, Fenchel, Kohl',
          'KÜRBIS/ZUCCHINI: Bohne, Mais (Milpa!), Kapuzinerkresse, Borretsch',
          'KAROTTE: Zwiebel (!), Lauch, Tomate, Erbse, Salat, Schnittlauch',
          'SALAT: Radieschen, Karotte, Bohne, Erbse, Erdbeere, Kohlrabi',
          'BOHNE: Mais, Kürbis, Bohnenkraut (!), Erdbeere, Kartoffel, Gurke',
          'ERBSE: Karotte, Radieschen, Salat, Kohl, Fenchel',
          'KOHL: Sellerie, Erbse, Tomate, Dill, Kamille, Salat',
          'ERDBEERE: Knoblauch (!), Schnittlauch, Salat, Spinat, Borretsch',
          'KARTOFFEL: Bohne, Meerrettich (!), Spinat, Kohlrabi',
          'ZWIEBEL: Karotte (!), Erdbeere, Salat, Dill, Kamille',
        ],
        sourceNote: 'Kreuter: Der Biogarten, Tabelle 15. Heistinger: Handbuch Bio-Gemüse.',
      },
      {
        title: 'Schlechte Nachbarn: was man vermeiden sollte',
        content: 'Manche Pflanzen hemmen sich gegenseitig: durch Wurzelausscheidungen (Allelopathie), Konkurrenz um gleiche Nährstoffe, oder weil sie dieselben Krankheiten übertragen.',
        details: [
          'TOMATE + KARTOFFEL: Gleiche Krankheiten (Phytophthora)! Niemals nebeneinander.',
          'TOMATE + FENCHEL: Fenchel hemmt fast alles in seiner Nähe (allelopathisch).',
          'BOHNE + ZWIEBEL/KNOBLAUCH/LAUCH: Lauchgewächse hemmen Knöllchenbakterien der Bohnen.',
          'GURKE + TOMATE (im Glashaus): Unterschiedliche Klimaansprüche. Gurke braucht hohe Luftfeuchtigkeit, Tomate niedrige. Getrennte Zonen nötig.',
          'ERBSE + BOHNE: Gleiche Familie, gleiche Krankheiten. Abstand halten.',
          'DILL + KAROTTE: Gleiche Familie (Apiaceae), kreuzen sich und konkurrieren.',
          'FENCHEL + fast alles: Fenchel ist der "Einzelgänger" im Gemüsegarten. Wurzelausscheidungen hemmen viele Nachbarn. Am Beetrand oder einzeln pflanzen.',
          'WALNUSS: Juglon aus Walnussblättern und -wurzeln hemmt Wachstum im Umkreis von 10+ m. Keine Gemüsebeete unter Walnussbäumen.',
        ],
        warning: 'Tomate und Kartoffel NIEMALS nebeneinander pflanzen! Phytophthora infestans (Kraut- und Knollenfäule) befällt beide und überträgt sich über Sporenflug. Ein Befall der Kartoffeln infiziert innerhalb von Tagen die Tomaten.',
        sourceNote: 'Kreuter: Der Biogarten. FiBL Merkblatt Mischkultur und Fruchtfolge.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERMAKULTUR
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'permakultur',
    title: 'Permakultur-Grundlagen',
    subtitle: 'Dauerhafte Systeme statt Saisonarbeit: Waldgarten, Mulchbeete, Kreislaufwirtschaft',
    color: '#15803d',
    sourceIds: ['kreuter', 'fibl', 'bio-austria'],
    relatedArticles: ['boden', 'kompost', 'mischkultur', 'selbstversorgung'],
    sections: [
      {
        title: 'Was ist Permakultur?',
        content: 'Permakultur (permanent + agriculture/culture) ist ein Gestaltungssystem, das natürliche Ökosysteme nachahmt. Statt jedes Jahr den Boden umzugraben und Monokultur anzubauen, werden dauerhafte, sich selbst erhaltende Systeme aufgebaut. Im Hausgarten bedeutet das: mehrjährige Pflanzen (Beeren, Obstbäume, Kräuter) als Grundgerüst, Mulch statt nackter Boden, Kreisläufe (Kompost, Regenwasser), und Vielfalt statt Einfalt. Das Ergebnis: weniger Arbeit bei steigendem Ertrag über die Jahre.',
        details: [
          'Ethik der Permakultur: (1) Earth Care - Boden, Wasser und Biodiversität pflegen. (2) People Care - für die eigene Versorgung und Gemeinschaft sorgen. (3) Fair Share - Überschüsse teilen, Konsum begrenzen.',
          'Beobachten vor Handeln: Ein ganzes Jahr beobachten bevor man groß umgestaltet. Wo ist Sonne, Schatten, Wind? Wo läuft Wasser hin? Welche Pflanzen wachsen von allein?',
          'Zonen-Konzept: Zone 0 = Haus. Zone 1 = Küchengarten, Kräuter (täglich besucht). Zone 2 = Gemüsebeete, Glashaus (regelmäßig). Zone 3 = Obstbäume, Beeren (gelegentlich). Zone 4 = Wildnis, Naturhecke (selten). Zone 5 = Unberührt (Biodiversität).',
          'Jedes Element hat mehrere Funktionen: Ein Obstbaum liefert Obst + Schatten + Windschutz + Nützlingshabitat + Kompostmaterial (Laub). Ein Teich: Bewässerung + Biodiversität + Frösche (fressen Schnecken) + Mikroklima.',
          'Jede Funktion wird von mehreren Elementen erfüllt: Wasser kommt aus Regen + Zisterne + Leitung. Stickstoff kommt aus Kompost + Bohnen + Gründüngung.',
        ],
        tip: 'Du musst nicht alles auf einmal umstellen. Starte mit einem Permakultur-Element: z.B. "nie wieder umgraben, nur noch mulchen." Allein das verändert den Boden innerhalb von 2 Jahren fundamental.',
        sourceNote: 'Bill Mollison: Permaculture - A Designers Manual. Sepp Holzer: Der Agrar-Rebell (österreichischer Permakultur-Pionier).',
      },
      {
        title: 'No-Dig / Nie-Umgraben-Methode',
        content: 'Charles Dowding (UK) und andere haben in Langzeitversuchen gezeigt: Beete die NIE umgegraben werden, liefern gleiche oder bessere Erträge als umgegrabene. Der Grund: Umgraben zerstört die Bodenstruktur (Pilzfäden, Regenwurmgänge, Kapillarsystem), die der Boden über Monate aufbaut. No-Dig heißt: Kompost OBEN drauflegen, mulchen, die Bodenlebewesen machen den Rest.',
        details: [
          'Methode: Jedes Frühjahr 3–5 cm reifen Kompost auf die Beetoberfläche. Nicht einarbeiten! Direkt in den Kompost säen/pflanzen.',
          'Unkraut: Wenn ein Beet neu angelegt wird, Pappe/Karton auf die Wiese legen, 15 cm Kompost drauf. Pappe erstickt das Gras, Würmer zersetzen es. Nach 4–6 Wochen pflanzfertig.',
          'Vorteile: Weniger Arbeit (kein Umgraben!), bessere Bodenstruktur, mehr Regenwürmer, weniger Unkraut (Unkrautsamen werden nicht hochgeholt), bessere Wasserhaltung.',
          'Langzeitergebnis: Nach 3–5 Jahren No-Dig ist der Boden dunkel, krümelig, durchzogen von Regenwurmgängen und Pilzmycel. Die Grabegabel wird arbeitslos.',
          'Studie: Dowding, C. (2020): 10-Jahres-Vergleich Dig vs. No-Dig. Ergebnis: gleicher Ertrag, 50% weniger Arbeitszeit, deutlich bessere Bodenbiologie bei No-Dig.',
        ],
        tip: 'Neues Beet auf Rasen anlegen: Rasen mähen, 2 Lagen Pappe drauf (überlappend!), 15 cm Kompost drauf, fertig. Nach 6 Wochen direkt reinpflanzen. Kein Umgraben, kein Rasen entfernen.',
        sourceNote: 'Charles Dowding: No Dig Gardening (2022). Langzeit-Feldversuche Homeacres Farm, UK.',
      },
      {
        title: 'Waldgarten / Food Forest',
        content: 'Ein Waldgarten ist ein essbares Ökosystem in 7 Schichten, das die Struktur eines natürlichen Waldes nachahmt. Einmal etabliert (3–5 Jahre), produziert er Nahrung bei minimalem Pflegeaufwand. Für einen kleinen Hausgarten genügt ein "Miniwaldgarten" von 10–20 m2 mit 1–2 Obstbäumen und darunter gestaffelten Schichten.',
        details: [
          'Schicht 1 - Kronenbereich: Apfelbaum, Walnuss, Kirsche (Ertrag + Schatten + Windschutz)',
          'Schicht 2 - Kleine Bäume: Zwetschke, Marille, Feige (halbschattig unter großen Bäumen)',
          'Schicht 3 - Sträucher: Ribisel, Himbeere, Stachelbeere, Aronia, Holunder',
          'Schicht 4 - Krautschicht: Erdbeeren, Bärlauch, Waldmeister, Minze, Schnittlauch',
          'Schicht 5 - Bodenbedeckung: Walderdbeeren, Weißklee, Gundermann (Lebendmulch)',
          'Schicht 6 - Kletterpflanzen: Brombeere, Weintraube, Kiwi, Feuerbohne',
          'Schicht 7 - Wurzelschicht: Topinambur, Meerrettich, Pastinake (unterirdische Ernte)',
          'Zeitrahmen: Im 1. Jahr pflanzen, in den Jahren 2-3 etablieren, ab Jahr 4-5 zunehmender Ertrag bei abnehmender Pflege.',
        ],
        tip: 'Miniwaldgarten für 10 m2: 1 Halbstamm-Apfelbaum + 3 Ribiselsträucher darunter + Erdbeeren als Bodendecker + Schnittlauch + Minze am Rand. Nach 3 Jahren: Obst, Beeren, Kräuter und Erdbeeren ohne Aufwand.',
        sourceNote: 'Martin Crawford: Creating a Forest Garden (2010). Robert Hart: Forest Gardening (1996). Sepp Holzer Permakultur-Konzepte, Österreich.',
      },
      {
        title: 'Kreislaufwirtschaft im Garten',
        content: 'In der Permakultur gibt es keinen "Abfall". Jedes Ausgangsprodukt eines Prozesses ist Eingangsprodukt eines anderen. Küchenabfälle werden Kompost, Kompost wird Dünger, Dünger wird Gemüse, Gemüsereste werden wieder Kompost. Regenwasser wird gesammelt, Mulch reduziert Verdunstung, überschüssige Ernte wird konserviert oder getauscht.',
        details: [
          'Kompostkreislauf: Küche → Kompost → Beet → Küche. 200-400 kg Küchenabfälle/Jahr/Haushalt = 80-150 kg Kompost = Grunddüngung für 20-30 m2.',
          'Wasserkreislauf: Regen → Zisterne → Tropfbewässerung → Verdunstung → Regen. Mit Regenwassersammlung: 50-70% des Gießwasserbedarfs gedeckt.',
          'Mulchkreislauf: Rasenschnitt + Laub → Mulch → Bodenverbesserung → besseres Wachstum → mehr Mulchmaterial.',
          'Saatgutkreislauf: Samen kaufen → Pflanze → Samen ernten → nächstes Jahr säen. Mit samenfesten Sorten nach 3 Jahren Saatgut-Autarkie.',
          'Nährstoffkreislauf: Bohnen fixieren Stickstoff → Starkzehrer (Tomate) nutzen ihn → Pflanzenreste auf Kompost → Nährstoffe zurück in den Boden.',
          'Überschuss-Kreislauf: Zu viele Zucchini → Nachbarn/Foodsharing → soziales Netzwerk → Hilfe bei anderen Gartenarbeiten.',
        ],
        tip: 'Das erste Kreislauf-Element: ein Kompost. Das zweite: eine Regentonne. Damit hast du die beiden wichtigsten Kreisläufe geschlossen und sparst Geld und Ressourcen ab Tag 1.',
        sourceNote: 'Mollison, B.: Permaculture - A Designers Manual. Bio Austria Kreislaufwirtschafts-Leitfaden.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KLIMAWANDEL & GARTEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'klimawandel',
    title: 'Klimawandel & Garten in Österreich',
    subtitle: 'Was sich ändert, welche neuen Chancen und Risiken entstehen, und wie man sich anpasst',
    color: '#ef4444',
    sourceIds: ['zamg', 'ages', 'boku'],
    relatedArticles: ['bewaesserung', 'mulchen', 'pflanzenschutz'],
    sections: [
      {
        title: 'Was sich in Österreich bereits geändert hat',
        content: 'Österreich erwärmt sich doppelt so schnell wie der globale Durchschnitt. Die Vegetationsperiode hat sich laut GeoSphere Austria um +13,5 Tage auf durchschnittlich 212 Tage verlängert, wobei die stärkste Zunahme in den Niederungen Nord- und Ostösterreichs gemessen wurde. 2024 war das wärmste Jahr der Messgeschichte in Österreich. Für Gärtner bedeutet das: längere Saison, aber auch neue Herausforderungen.',
        details: [
          'Vegetationsperiode +13,5 Tage im österreichischen Mittel (GeoSphere Austria). In Wien/Burgenland noch stärker: bis zu +20 Tage.',
          'Temperaturanstieg: +2,3 °C seit 1850 in Österreich (globaler Schnitt: +1,2 °C). Alpenraum erwärmt sich schneller.',
          'Hitzetage (>30 °C): In Wien von 10/Jahr (1960er) auf 25-30/Jahr (2020er). Burgenland noch mehr.',
          'Trockenperioden: Sommer werden trockener, Starkregen häufiger aber kürzer. Weniger gleichmäßige Wasserversorgung.',
          'Frostfreie Periode verlängert: Letzter Frost im Osten jetzt oft schon Ende März statt Mitte April.',
          'Neue Schädlinge wandern ein: Baumwollkapselwurm (Helicoverpa armigera) aus dem Mittelmeerraum befällt bereits Tomaten und Salat in Österreich (AGES-Warnung).',
          'Kirschessigfliege (Drosophila suzukii): seit 2012 in AT, befällt Beeren und Steinobst.',
        ],
        tip: 'Die verlängerte Vegetationsperiode ist eine Chance: Du kannst früher starten (Vlies!) und länger ernten (Glashaus!). Gleichzeitig musst du mehr mulchen, mehr gießen und hitzeresistente Sorten wählen.',
        sourceNote: 'GeoSphere Austria Klimastatusbericht 2024. AGES Warndienst Pflanzengesundheit. klimawandelanpassung.at',
      },
      {
        title: 'Anpassungsstrategien für den Hausgarten',
        content: 'Der Klimawandel ist für Gärtner in Ostösterreich Fluch und Segen zugleich. Hier sind die wichtigsten Anpassungen, die du heute schon umsetzen kannst:',
        details: [
          'WASSER SPAREN ist die #1 Priorität: Tropfbewässerung, 8 cm Mulch, Regenwasser sammeln (Zisterne/IBC), Ollas (Tonbewässerung). Rasensprenger sind Wasserverschwendung.',
          'HITZESCHUTZ: Mulch (senkt Bodentemperatur um 5-8 °C), Schattierung mit Vlies für Salat/Spinat im Hochsommer, helle Farben für Hochbeete (schwarze Kisten werden zu heiß).',
          'SORTEN-WAHL: Hitze- und trockenheitsresistente Sorten wählen. "Schossfester" Salat. Trockenheitstolerante Tomaten. Arche Noah züchtet gezielt klimaangepasste Sorten.',
          'BODENAUFBAU: Humus speichert 5x sein Gewicht an Wasser. 1% mehr Humus = 170.000 L mehr Wasserhaltung pro Hektar. Kompost, Mulch, Gründüngung = Klimaanpassung.',
          'ZEITVERSCHIEBUNG: Aussaat 1-2 Wochen früher als traditionelle Kalender (Eisheilige verschieben sich). Herbstsaison 2-3 Wochen länger nutzbar.',
          'KULTURSCHUTZNETZ: Schützt gleichzeitig gegen Hitze (Schattierung ~15%), Hagel (zunehmendes Risiko), und neue Schädlinge. Multi-Funktion.',
          'SORTENVIELFALT statt Monokultur: Wenn eine Sorte versagt (Hitze, Krankheit), liefern die anderen. Nie alles auf eine Karte setzen.',
          'GLASHAUS als Saisonverlängerer: Bei richtigem Lüften kein Hitzeproblem. Im Herbst/Winter der Gamechanger für ganzjährige Versorgung.',
        ],
        warning: 'Traditionelle Anbaukalender (z.B. "Bauernkalender") basieren auf dem Klima von 1960-1990. Die Realität hat sich verschoben: Eisheilige sind statistisch weniger relevant, aber Starkregen und Hagel nehmen zu. Beobachte DEIN Mikroklima und pass den Kalender jährlich an.',
        sourceNote: 'klimawandelanpassung.at (Bundesministerium). BOKU Wien Klimaforschung. Arche Noah Sortenzüchtung.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GRÜNDÜNGUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'gruenduengung',
    title: 'Gründüngung',
    subtitle: 'Lebende Bodenkur: Phacelia, Senf, Klee und Co. als Bodenverbesserer und Bienenweide',
    color: '#22c55e',
    sourceIds: ['fibl', 'heistinger', 'kreuter', 'bio-austria'],
    relatedArticles: ['boden', 'kompost', 'fruchtfolge-plan'],
    sections: [
      {
        title: 'Was ist Gründüngung und warum ist sie wichtig?',
        content: 'Gründüngung bedeutet: Pflanzen anbauen, die nicht geerntet sondern in den Boden eingearbeitet werden (oder als Mulch liegenbleiben). Sie verbessern den Boden auf 5 Wegen gleichzeitig: Nährstoffanreicherung (Leguminosen fixieren ~30-40 kg Stickstoff/ha), Bodenlockerung (tiefe Wurzeln brechen Verdichtungen), Humusaufbau (Biomasse wird zu Humus), Unkrautunterdrückung (kein nackter Boden) und Erosionsschutz.',
        details: [
          'Leguminosen (Stickstoff-Fixierer): Klee, Lupine, Wicke, Ackerbohne. Knöllchenbakterien an den Wurzeln fixieren Luftstickstoff (N₂) und machen ihn pflanzenverfügbar. 30-40 kg N/ha zusätzlich. Ideal VOR Starkzehrern.',
          'Kreuzblütler (Schnellwachser): Gelbsenf, Ölrettich, Raps. Keimen in 3-5 Tagen, bedecken Boden schnell. Ölrettich bricht mit seiner Pfahlwurzel Verdichtungen. ACHTUNG: Nicht vor Kohl/Kohlrabi/Radieschen (gleiche Familie = Kohlhernie!).',
          'Phacelia (Bienenfreund): Die beste Allround-Gründüngung. Mit KEINER Gemüsefamilie verwandt (kein Fruchtfolge-Problem). Fantastische Bienenweide. 5-7 Wochen bis zur Blüte. Aussaat April-August.',
          'Buchweizen: Nicht frosthart, schnell wachsend, Bienenweide. Ideal für Sommerbegrünung leerer Beete.',
          'Wintergründüngung: Winterroggen, Winterwicke, Inkarnatklee. Im September/Oktober säen, überwintern, im Frühjahr einarbeiten.',
        ],
        tip: 'Standard-Empfehlung: Jedes Beet, das länger als 3 Wochen leer steht, bekommt Gründüngung. Am einfachsten: Phacelia-Samen breitflächig streuen, andrücken, fertig. Kostet 3-5 EUR für 100 m².',
        sourceNote: 'FiBL Merkblatt Gründüngung. Bio Austria Praxisleitfaden. Heistinger: Handbuch Bio-Gemüse.',
      },
      {
        title: 'Gründüngung in der Praxis: wann was säen',
        content: 'Der Zeitpunkt der Aussaat bestimmt welche Gründüngung sinnvoll ist. Hier eine Übersicht nach Jahreszeit:',
        details: [
          'FRÜHLING (März-April): Vor der Hauptkultur. Gelbsenf (schnell, 4-6 Wochen), Phacelia. Einarbeiten/abmähen bevor Hauptkultur gepflanzt wird.',
          'SOMMER (Juni-August): Nach Frühkartoffeln, nach Erbsen, nach Frühkohl. Buchweizen (wärmeliebend), Phacelia, Klee. Bedeckt leere Beete in der heißen Zeit.',
          'HERBST (August-September): Wintergründüngung nach Haupternte. Winterroggen, Winterwicke + Winterroggen (Mischung!), Inkarnatklee. Wächst bis Frost, überwintert, im Frühjahr einarbeiten.',
          'GANZJÄHRIG (Lebendmulch): Weißklee zwischen Kohlreihen, Erdbeeren auf Kleewiese. Nicht einarbeiten, dauerhaft stehen lassen.',
          'Einarbeiten: Am besten 2-3 Wochen VOR der Neupflanzung abmähen und oberflächlich einharken (nicht tief untergraben!). Oder: als Mulch liegen lassen (No-Dig-Methode).',
          'Frostempfindliche Gründüngung (Senf, Phacelia, Buchweizen): Friert im Winter ab und bildet eine natürliche Mulchschicht. Im Frühjahr einfach zur Seite räumen und direkt pflanzen.',
        ],
        warning: 'Gelbsenf und Ölrettich NIEMALS vor Kreuzblütlern (Kohl, Kohlrabi, Radieschen, Rucola) als Gründüngung verwenden! Gleiche Familie = Kohlhernie-Risiko. Stattdessen Phacelia, Klee oder Buchweizen nehmen.',
        sourceNote: 'FiBL Merkblatt Gründüngung im Gemüsebau. Kreuter: Der Biogarten, Kap. Gründüngung.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BODENANALYSE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'bodenanalyse',
    title: 'Bodenanalyse: so geht\'s',
    subtitle: 'Wann, wo, wie Bodenproben nehmen, und was die Ergebnisse bedeuten',
    color: '#f59e0b',
    sourceIds: ['ages', 'boku', 'lk-noe'],
    relatedArticles: ['boden', 'duengung'],
    sections: [
      {
        title: 'Wann ist eine Bodenanalyse sinnvoll?',
        content: 'Eine professionelle Bodenanalyse ist sinnvoll wenn: du einen neuen Garten anlegst (was ist überhaupt im Boden?), der Garten auf ehemaligem Industrie-/Gewerbeland liegt (Schwermetalle?), Pflanzen trotz guter Pflege schlecht wachsen (Nährstoffmangel? pH-Problem?), oder alle 3-5 Jahre als Routine-Check. Für Hausgärten bietet die AGES in Österreich offizielle Bodenanalysen an.',
        details: [
          'AGES Basispaket (Österreich): pH-Wert, Phosphor, Kalium, Magnesium, Humusgehalt, C/N-Verhältnis, Kalkgehalt, Korngrößenverteilung. Kosten: ca. 282 EUR inkl. MwSt (Stand 2025).',
          'AGES Erweiterung I (Schwermetalle): Arsen, Blei, Cadmium, Chrom, Kupfer, Nickel, Quecksilber, Zink u.a. Bewertung nach Nutzungsrichtung (Gemüsegarten). Kosten: ca. 136 EUR zusätzlich.',
          'AGES Erweiterung II (Spurenelemente): Empfohlen bei geplanter Nutzung als Gemüse-/Obstgarten. Zeigt ob Bor, Mangan, Eisen ausreichend vorhanden sind.',
          'Alternative: Einfache pH-Teststreifen (5 EUR) oder digitales pH-Messgerät (20-50 EUR) für den Schnellcheck zu Hause.',
          'Kontakt AGES: bodenbox@ages.at. Man bekommt eine "Bodenbox" zugeschickt, füllt sie mit Probe und schickt sie zurück (Rückporto inklusive).',
        ],
        tip: 'Für die meisten Hausgärten reicht ein pH-Schnelltest (5 EUR) als erster Schritt. Nur wenn Probleme auftreten oder der Garten auf unbekanntem Boden liegt, lohnt sich die volle AGES-Analyse.',
        sourceNote: 'AGES Bodenuntersuchungen: ages.at/umwelt/boden/bodenuntersuchungen. Preisliste AGES BGPE 2025.',
      },
      {
        title: 'Bodenprobe richtig nehmen',
        content: 'Die Probe muss repräsentativ sein: nicht nur von einer Stelle, sondern als Mischprobe aus dem ganzen Beet. Falsch genommene Proben liefern nutzlose Ergebnisse.',
        details: [
          'Zeitpunkt: Frühjahr (vor der Düngung) oder Herbst (nach der Ernte). Nicht direkt nach Kalkung oder Kompostgabe (3-4 Wochen warten).',
          'Werkzeug: Spaten oder Bodenstecher. Sauberer Eimer (kein Metalleimer, kann Ergebnisse verfälschen).',
          'Technik: An 10-15 verschiedenen Stellen des Beetes jeweils einen Spatenstich setzen, von der Seite eine dünne Scheibe (2 cm) der oberen 25 cm abnehmen. Alle Scheiben im Eimer mischen. Das ist die Mischprobe.',
          'Tiefe: 0-25 cm für Gemüsebeete. 0-10 cm für Rasen.',
          'Menge: ca. 500 g der Mischprobe in einen Plastikbeutel füllen. Beschriften (Datum, Ort, Beetname). Lufttrocknen lassen (nicht im Ofen!).',
          'Getrennte Proben: Verschiedene Beete = verschiedene Proben. Rasen ≠ Gemüsebeet ≠ Obstwiese.',
          'AGES-Bodenbox: Die AGES schickt eine fertige Box mit Anleitung. Probe einfüllen, verschließen, ab in den Briefkasten.',
        ],
        sourceNote: 'AGES Anleitung Bodenprobenahme. LK NÖ Merkblatt Bodenuntersuchung.',
      },
      {
        title: 'Ergebnisse interpretieren',
        content: 'Die Analyseergebnisse kommen mit Bewertung ("niedrig / mittel / hoch / sehr hoch") für jeden Parameter. Hier die wichtigsten Werte und was sie für deinen Gemüsegarten bedeuten:',
        details: [
          'pH 6,0-7,0: Optimal für Gemüse. Darunter: Kalk zugeben. Darüber (>7,5): Schwefel oder sauren Kompost.',
          'Humus 3-5%: Gut. Unter 2%: Kompost aufbringen (5-10 L/m²/Jahr). Über 6%: sehr gut, weniger düngen nötig.',
          'Phosphor (P₂O₅) "mittel" (12-20 mg/100g): Ideal. Oft zu hoch in Hausgärten (zu viel Kompost!). Bei "sehr hoch": Kompostgabe reduzieren.',
          'Kalium (K₂O) "mittel" (15-25 mg/100g): Ideal. Bei "niedrig": Holzasche (vorsichtig, pH!) oder Beinwell-Jauche.',
          'Magnesium (Mg) "mittel": Ideal. Bei "niedrig": Bittersalz (Epsom-Salz, 50 g/m²).',
          'C/N-Verhältnis 10-15: Gute Humusqualität. Über 20: zu viel unverrottetes Material (Holzhäcksel?). Unter 10: sehr aktiver, schnell mineralisierbarer Humus.',
          'Schwermetalle: Die AGES bewertet nach Nutzungsrichtung. Für Gemüsegärten gelten strenge Grenzwerte. Bei Überschreitung: kein Wurzelgemüse anbauen, Hochbeete als Alternative.',
        ],
        tip: 'In 90% der Hausgärten ist der Phosphor-Wert zu hoch (zu viel Kompost über Jahre). Das ist kein Drama, aber: bei sehr hohem P weniger Kompost geben und stattdessen nur mulchen. Stickstoff liefert die Brennnesseljauche.',
        sourceNote: 'AGES Bewertungsschemata Bodenanalyse. BOKU Wien Institut für Bodenforschung.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NATÜRLICHE DÜNGER: HAUSMITTEL FAKTENCHECK
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'hausmittel-duenger',
    title: 'Naturliche Dünger: was wirklich wirkt',
    subtitle: 'Kaffeesatz, Bananenschale, Eierschale, Holzasche, Urin: Faktencheck mit echten Nährstoffwerten',
    color: '#f59e0b',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['duengung', 'kompost', 'boden'],
    sections: [
      {
        title: 'Ubersicht: was funktioniert, was Mythos ist',
        content: 'Im Internet kursieren unzählige "Wunderdünger" aus der Küche. Manche sind wissenschaftlich sinnvoll, andere wirkungslos oder sogar schädlich. Hier ein ehrlicher Faktencheck mit echten Nährstoffwerten:',
        details: [
          'WIRKT GUT: Kompost (Universaldünger #1), Brennnesseljauche (schneller N-Lieferant), Beinwell-Jauche (Kalium), Kaffeesatz (leicht sauer, N+K), Holzasche (Kalium, aber pH-Erhöhung!), Hornspäne (langsamer N-Dünger).',
          'WIRKT ETWAS: Bananenschalen (wenig Kalium, besser in Kompost), Eierschalen (Calcium, aber wirkt erst nach Monaten), Kartoffelkochwasser (minimal Kalium+Stärke).',
          'WIRKT NICHT/SCHADET: Milch auf Blätter (Pilzgefahr bei Überdosierung), Reis-/Nudel-Kochwasser (kaum messbare Nährstoffe), Zucker im Gießwasser (zieht Schädlinge an), Backpulver gegen Mehltau (wirkungslos bei Echtem Mehltau).',
        ],
        tip: 'Die Wahrheit: Kompost + Brennnesseljauche + Mulch sind alles was du brauchst. Küchenabfälle gehören AUF den Kompost, nicht direkt ans Beet. Der Kompost ist das "Magen" des Gartens, der alles aufbereitet.',
      },
      {
        title: 'Kaffeesatz: der unterschatzte Allrounder',
        content: 'Kaffeesatz ist tatsächlich ein brauchbarer Dünger und einer der wenigen Küchenabfälle, die direkt aufs Beet können. Ein durchschnittlicher Haushalt produziert 4-8 kg Kaffeesatz pro Jahr, das ist eine relevante Nährstoffmenge.',
        details: [
          'Nährstoffgehalt (Stiftung Warentest): 2% Stickstoff (N), 0,4% Phosphor (P), 0,8% Kalium (K). Dazu Magnesium, Schwefel und Spurenelemente.',
          'pH-Wert: 6,2-6,8 (leicht sauer). Gut für Tomaten, Erdbeeren, Heidelbeeren. Nicht für kalkliebende Pflanzen überdosieren.',
          'Anwendung: Trocknen lassen (Schimmelgefahr bei Nässe!), dann direkt auf Beete streuen oder in Kompost einarbeiten. Max. 50 g/m²/Monat.',
          'Regenwürmer lieben Kaffeesatz! Ideal als Lockmittel für den Kompost.',
          'NICHT direkt an Keimlinge (zu viel Koffein hemmt Keimung). Erst ab 4. Woche nach Aussaat.',
          'Kaffeesatz-Tee: 100 g Kaffeesatz in 5 L Wasser über Nacht ziehen lassen. Abseihen. Gießwasser für Zimmerpflanzen und Balkonkästen.',
        ],
        sourceNote: 'Stiftung Warentest 2022: "Kaffeesatz und Eierschalen". Diverse Nährstoffanalysen.',
      },
      {
        title: 'Holzasche: kraftvoll aber riskant',
        content: 'Holzasche ist der kaliumreichste natürliche Dünger und eine traditionelle Methode in Österreich (Bauernregeln!). Aber: sie ist ein Schwermetall-Konzentrat und erhöht den pH stark. Nur von unbehandeltem Holz, und in Maßen.',
        details: [
          'Nährstoffgehalt: 5-15% Kalium (K₂O), 1-5% Phosphor (P₂O₅), 15-40% Calcium (CaO). Dazu Magnesium, Eisen, Mangan.',
          'pH-Effekt: STARK alkalisch (pH 11-13)! 100 g Holzasche auf 1 m² erhöht den pH um ca. 0,2 Einheiten. Auf kalkhaltigen Böden (wie in weiten Teilen des Burgenlands) NICHT verwenden!',
          'Maximalmenge: 100 g/m²/Jahr. Nicht mehr! Schwermetalle (Cadmium, Blei) konzentrieren sich in Asche.',
          'NUR Asche von: unbehandeltem Holz, Stroh, Baumschnitt. NIEMALS: Kohle, Briketts, Papier, behandeltes/lackiertes Holz, Spanplatten.',
          'Beste Anwendung: Auf Starkzehrer-Beete (Tomate, Kürbis) im Frühjahr. Leicht einharken. Oder: in den Kompost (max. 5% des Kompostvolumens).',
          'Gute Kombination: Holzasche + Kaffeesatz. Asche hebt pH, Kaffeesatz senkt ihn. Gleichen sich teilweise aus.',
        ],
        warning: 'Holzasche NIEMALS auf saure Böden (Heidelbeeren, Rhododendren) oder kalkhaltige Böden geben. Und NIEMALS Asche von behandeltem Holz, Kohle oder Papier verwenden (Schwermetalle, Dioxine). Nur reine Holzasche aus dem Kamin/Ofen.',
      },
      {
        title: 'Eierschalen: Mythos vs. Realitat',
        content: 'Eierschalen bestehen zu 95% aus Calciumcarbonat (CaCO₃) und sind damit ein Kalk-Dünger. Aber: sie zersetzen sich EXTREM langsam. Ganze Eierschalen auf dem Beet sind fast wirkungslos. Der Trick: fein mahlen.',
        details: [
          'Inhalt: 95% Calciumcarbonat (gleicher Stoff wie Gartenkalk). Dazu: Spurenelemente (Magnesium, Phosphor, Strontium).',
          'Problem: Ganze Eierschalen brauchen Jahre bis zur Zersetzung. Stücke im Beet sind nach 2 Jahren noch sichtbar.',
          'Lösung: Eierschalen FEIN MAHLEN (Mörser, Mixer, Kaffeemühle). Das Pulver hat 100x mehr Oberfläche und wirkt deutlich schneller.',
          'Anwendung Pulver: 50-100 g/m²/Jahr. Leicht einharken. Wirkt pH-erhöhend (wie Kalk).',
          'Schnecken-Mythos: Scharfe Eierschalen um Pflanzen als Schneckenschutz? WIRKUNGSLOS (wissenschaftlich widerlegt). Schnecken kriechen problemlos über Eierschalen.',
          'Bessere Verwendung: Ab in den Kompost (zerkleinert). Dort beschleunigen sie die Zersetzung und regulieren den pH.',
          'Nicht gegen Blütendfäule bei Tomaten! Das ist kein Calcium-Mangel im Boden, sondern ein Transport-Problem bei unregelmäßigem Gießen. Mehr gießen hilft, nicht mehr Eierschalen.',
        ],
        sourceNote: 'Stiftung Warentest 2022. Diverse gartenwissenschaftliche Quellen.',
      },
      {
        title: 'Bananenschalen: uberschatzt',
        content: 'Bananenschalen werden als "Wunderdünger" gehypt, sind aber nährstoffarmer als behauptet. Sie gehören in den Kompost, nicht direkt ans Beet.',
        details: [
          'Nährstoffgehalt (frisch): ca. 0,9% Kalium (K), 0,1% Phosphor (P), 0,1% Magnesium. Stickstoff: kaum messbar.',
          'Zum Vergleich: Holzasche hat 5-15% Kalium. Ein Kaffeesatz hat mehr Nährstoffe als eine Bananenschale.',
          'Problem direkt am Beet: Fault langsam, zieht Fruchtfliegen und Wespen an, sieht unschön aus.',
          'Besser: Bananenschalen KLEIN SCHNEIDEN und in den Kompost. Oder: trocknen, pulverisieren, dann als Dünger streuen.',
          'Bananenschalen-Wasser (48 Std in Wasser einlegen): Minimal wirksam, schadet nicht. Für Zimmerpflanzen ok, für den Gemüsegarten irrelevant.',
          'Pestizid-Bedenken: Konventionelle Bananen werden stark behandelt. Bio-Bananen bevorzugen, oder zumindest gut waschen.',
        ],
      },
      {
        title: 'Urin: der Tabu-Dünger mit wissenschaftlicher Ruckendeckung',
        content: 'Es klingt unangenehm, ist aber wissenschaftlich belegt: Menschlicher Urin ist ein hochwertiger Stickstoffdünger. Forscher des Leibniz-Instituts für Gemüse- und Zierpflanzenbau (IGZ) haben nachgewiesen, dass recycelter Urin-Dünger genauso effektiv wirkt wie konventionelle Mineraldünger. Im Permakultur- und Selbstversorger-Bereich wird er zunehmend genutzt.',
        details: [
          'Nährstoffgehalt: Harnstoff besteht zu 50% aus Stickstoff. Urin enthält ca. 6-8 g N/L, 0,5-1 g P/L, 1-2 g K/L. Das entspricht einem NPK-Verhältnis von 11:1:2.',
          'Wissenschaft: IGZ-Studie 2024 zeigt: keine signifikanten Ertragsunterschiede zwischen Urin-Dünger und mineralischer Referenzdüngung. Pflanzenaufnahme der Nährstoffe auf gleichem Niveau.',
          'Verdünnung: IMMER 1:10 mit Wasser verdünnen (unverdünnt verbrennt Wurzeln durch Salzgehalt).',
          'Anwendung: Auf Starkzehrer-Beete (Tomate, Kürbis, Kartoffel) gießen. NICHT auf Blattgemüse (Salat, Spinat: Nitrat-Einlagerung) und NICHT in den letzten 4 Wochen vor Ernte.',
          'Hygiene: Frischer Urin ist nahezu keimfrei. Aber: kein Urin von Personen mit Antibiotika oder Hormonpräparaten (Pille!) verwenden. Diese Substanzen gelangen sonst in den Boden und ins Gemüse.',
          'Forschungsprojekt "U-Cycle": Sucht aktuell Test-Gärtner für wissenschaftliche Validierung von Urin-Dünger im Hausgarten.',
        ],
        warning: 'KEIN Urin von Personen verwenden, die Medikamente (Antibiotika, Hormone, Chemotherapie) einnehmen. Diese Rückstände gelangen in Boden und Pflanzen. Nicht auf Blattgemüse anwenden (Nitrat). Und: immer 1:10 verdünnen.',
        sourceNote: 'Leibniz-Institut für Gemüse- und Zierpflanzenbau (IGZ), Studie 2024. Kraut&Rüben Magazin. Permakultur.de.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNKRAUT: ERKENNEN, NUTZEN, MANAGEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'unkraut',
    title: 'Unkraut: erkennen, nutzen, managen',
    subtitle: 'Zeigerpflanzen lesen, essbare Wildkrauter ernten, Wurzelunkraut besiegen',
    color: '#22c55e',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['boden', 'mulchen', 'pflanzenschutz'],
    sections: [
      {
        title: 'Unkraut als Zeigerpflanze: dein Boden spricht zu dir',
        content: 'Bevor du ein einziges "Unkraut" herausreißt: schau es dir an. Wildkräuter sind die besten Bodenindikatoren, die es gibt. Sie verraten dir gratis, was eine AGES-Bodenanalyse für 280 EUR zeigt: ob dein Boden sauer oder kalkhaltig ist, nährstoffreich oder arm, verdichtet oder locker, feucht oder trocken.',
        details: [
          'BRENNNESSEL (Urtica dioica): Zeigt stickstoffreichen, humusreichen, gut versorgten Boden an. Wo Brennnesseln wachsen, ist der Boden grundsätzlich gut. Bonus: bester Jauche-Rohstoff.',
          'VOGELMIERE (Stellaria media): Zeigt guten, humusreichen, feuchten Boden mit ausgewogenem pH an. Wo Vogelmiere wächst, stimmt alles. Sie ist die Bodenqualitäts-Ampel auf GRÜN.',
          'LÖWENZAHN (Taraxacum officinale): Zeigt verdichteten, kalkhaltigen, stickstoffreichen Boden an. Typisch für ehemalige Rasenflächen. Tiefe Pfahlwurzel lockert den Boden.',
          'SAUERAMPFER (Rumex acetosa): Zeigt SAUREN Boden an (pH <6). Wenn viel Sauerampfer wächst: Kalk nötig (für Gemüse).',
          'ACKERSCHACHTELHALM (Equisetum arvense): Zeigt verdichteten, staunassen Boden an. Drainage oder Hochbeete nötig.',
          'GIERSCH (Aegopodium podagraria): Zeigt schattigen, feuchten, nährstoffreichen Boden an. Oft unter Bäumen/Hecken.',
          'QUECKE (Elymus repens): Zeigt verdichteten, trockenen Boden an. Tiefe Lockerung (Gründüngung mit Ölrettich) hilft.',
          'KAMILLE (Matricaria chamomilla): Zeigt kalkhaltigen, lehmigen Boden an. Gut für die meisten Gemüse.',
          'ACKER-STIEFMÜTTERCHEN (Viola arvensis): Zeigt sauren, kalkarmen Boden an. Kalkung empfohlen.',
          'HIRTENTÄSCHEL (Capsella bursa-pastoris): Zeigt neutralen, mäßig nährstoffreichen Boden an. Guter Allround-Indikator.',
        ],
        tip: 'Statt Unkraut zu bekämpfen, beobachte zuerst 1-2 Wochen was wächst. Das ist eine kostenlose Bodenanalyse. Vogelmiere + Brennnessel = perfekter Boden. Sauerampfer + Schachtelhalm = kalken und drainieren.',
        sourceNote: 'BZL (Bundesinformationszentrum Landwirtschaft): Zeigerpflanzen. Kreuter: Der Biogarten.',
      },
      {
        title: 'Essbare Wildkrauter: Unkraut in die Kuche',
        content: 'Viele "Unkräuter" sind nahrhafter als Kulturgemüse. Brennnessel enthält mehr Eisen als Spinat, Giersch mehr Vitamin C als Orangen, Vogelmiere mehr Protein als Salat. Statt sie zu bekämpfen: aufessen. Das spart Arbeit und liefert Vitamine.',
        details: [
          'BRENNNESSEL: Junge Triebspitzen (April-Mai) wie Spinat verwenden. Blanchiert verlieren sie die Brennhaare. Suppe, Knödelfüllung, Pesto, Chips (frittiert). Plus: Jauche als Dünger.',
          'GIERSCH: Junge Blätter (März-Mai) schmecken nach Petersilie/Karotte. Salat, Pesto, Smoothie, Spinat-Ersatz. Enthält 15x mehr Vitamin C als Kopfsalat.',
          'VOGELMIERE: Ganzjährig mild-nussig. Salat, Pesto, aufs Brot. Enthält Vitamin C, Kalium, Magnesium, Eisen. Die leckerste Wildpflanze für Einsteiger.',
          'LÖWENZAHN: Junge Blätter (vor der Blüte!) als Salat, leicht bitter. Blüten für Löwenzahnhonig (Sirup). Wurzeln geröstet als Kaffeeersatz. Knospenkomplett essbar.',
          'BÄRLAUCH (Allium ursinum): März-April, vor der Blüte. Pesto, Suppe, Butter. ACHTUNG: Verwechslungsgefahr mit Maiglöckchen (tödlich giftig!) und Herbstzeitlose (tödlich giftig!). Im Zweifelsfall: NICHT pflücken.',
          'FRANZOSENKRAUT (Galinsoga parviflora): In Südamerika als Gemüse kultiviert! Milde Blätter in Salat oder gekocht.',
          'SPITZWEGERICH (Plantago lanceolata): Blätter zerquetscht auf Insektenstiche (kühlt, entzündungshemmend). Junge Blätter in Salat.',
          'GUNDERMANN (Glechoma hederacea): Intensiv aromatisch, in kleinen Mengen als Gewürz. Traditionelles Wildkraut in der österreichischen Küche.',
        ],
        warning: 'BÄRLAUCH: Verwechslungsgefahr mit Maiglöckchen und Herbstzeitlose ist tödlich real. Sicherster Test: Blatt zerreiben, riecht es nach Knoblauch? Ja = Bärlauch. Nein = FINGER WEG. Im Zweifelsfall lieber kaufen als sammeln. Auch: Fuchsbandwurm-Risiko bei bodennahem Sammeln. Immer gründlich waschen.',
        sourceNote: 'smarticular.net: Essbare Unkräuter. ZDF Ratgeber Wildkräuter. Diverse Wildkräuterführer.',
      },
      {
        title: 'Die 5 hartnaeckigsten Unkrauter und wie man sie besiegt',
        content: 'Manche Wildkräuter sind leicht zu handhaben (Vogelmiere: einfach jäten oder essen). Andere sind echte Gegner mit tiefen Rhizomen und extremer Regenerationsfähigkeit. Hier die schwierigsten Fälle und was WIRKLICH hilft:',
        details: [
          'GIERSCH (Aegopodium podagraria): Der Alptraum jedes Gärtners. Rhizom-Netzwerk bis 50 cm tief, jedes Stückchen regeneriert. NICHT umgraben (verteilt Rhizome!). Einzige Lösung: Lichtblockade. 2-3 Lagen Pappe/Karton + 15 cm Mulch. Nach 1-2 Jahren ist er ausgehungert. Oder: akzeptieren und essen.',
          'QUECKE (Elymus repens): Rhizome durchdringen sogar Kartoffeln. Mit Grabegabel VORSICHTIG lockern, Rhizome herausziehen (jedes Stück entfernen!). Pappe+Mulch-Methode wirkt auch. Gründüngung mit Ölrettich konkuriert erfolgreich.',
          'ACKERWINDE (Convolvulus arvensis): Wurzelsystem bis 2 m tief (!). Kann nicht ausgerottet werden. Management: Triebe regelmäßig abschneiden (schwächt die Pflanze über 2-3 Jahre). An Rankgitter umleiten (weg von Gemüse). Nicht umgraben!',
          'LÖWENZAHN (Taraxacum): Pfahlwurzel bis 30 cm. Mit Löwenzahnstecher vor der Blüte ausstechen (GANZE Wurzel!). Wenn Wurzelrest bleibt: treibt neu aus. Regelmäßig stechen, über 2-3 Jahre wird er weniger. Oder: Blätter ernten.',
          'HAHNENFUSS/BUTTERBLUME (Ranunculus repens): Kriechende Ausläufer, bildet Tochterrosetten. Mit Grabegabel lockern, alle Ausläufer entfernen. Mulch hilft. Zeigt feuchten Boden an: evtl. Drainage verbessern.',
        ],
        tip: 'Die effektivste Unkrautbekämpfung: MULCH. 8 cm Stroh/Holzhäcksel/Rasenschnitt auf dem Beet blockiert 80-90% der Unkräuter. Die restlichen 10% einmal pro Woche 15 Minuten jäten: das schafft jeder.',
      },
      {
        title: 'Unkraut-Management: Strategien statt Kampf',
        content: 'Im Biogarten bekämpft man Unkraut nicht mit Gift, sondern mit Strategie. Das Ziel ist nicht "null Unkraut" (unmöglich und ökologisch schädlich) sondern "Unkraut auf ein handhabbares Level reduzieren".',
        details: [
          'Strategie 1 MULCH: Die mächtigste Waffe. 5-8 cm organisches Material (Stroh, Rasenschnitt, Laub) unterdrückt 80-90% der Samenunkräuter. Nur Wurzelunkräuter durchdringen Mulch.',
          'Strategie 2 HACKEN/JÄTEN: Regelmäßig, oberflächlich, bei trockenem Wetter. Klein anfangen (wöchentlich 15 Min). Unkraut-Keimlinge im 2-Blatt-Stadium sind am einfachsten zu beseitigen. Je größer, desto aufwändiger.',
          'Strategie 3 PAPPE/KARTON: Für neue Beete oder hartnäckige Flächen. 2-3 Lagen Karton (überlappend!), darauf 15 cm Kompost. Unkraut stirbt unter der Lichtblockade. Nach 6-8 Wochen pflanzbereit.',
          'Strategie 4 DICHT PFLANZEN: Eng gesetzte Kulturen beschatten den Boden und lassen Unkraut wenig Licht. Salat, Kartoffeln, Kürbis bedecken schnell den Boden.',
          'Strategie 5 GRÜNDÜNGUNG: Leere Beete sofort begrünen (Phacelia, Buchweizen). Kein nackter Boden = kein Platz für Unkraut.',
          'Strategie 6 UNKRAUTVLIES: Unter Wegen (nicht unter Gemüsebeeten). Hält jahrelang. Darauf Holzhäcksel oder Kies.',
          'NIEMALS: Roundup/Glyphosat oder andere Herbizide im Gemüsegarten. Auch "bio-taugliche" Mittel auf Essigsäure/Pelargonsäure-Basis sind nicht selektiv und schädigen alle Pflanzen.',
        ],
        warning: 'Unkraut mit Samenständen NIEMALS auf den normalen Kompost! Die Samen überleben die Kompostierung (außer bei >65 °C Heißkompost). In den Restmüll oder 2 Wochen in einer schwarzen Tüte in der Sonne "kochen" (Solarisation).',
        sourceNote: 'Kreuter: Der Biogarten, Kap. Unkraut. FiBL Merkblatt Unkrautmanagement. Neudorff.at.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GARDEN HACKS: VERIFIED VS. MYTHS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'garten-hacks',
    title: 'Garten-Hacks: was funktioniert, was Mythos ist',
    subtitle: 'Cut-and-come-again, Hausmittel, Social-Media-Tipps: wissenschaftlich gepruft',
    color: '#f59e0b',
    sourceIds: ['heistinger', 'kreuter', 'fibl', 'boku'],
    relatedArticles: ['hausmittel-duenger', 'pflanzenschutz', 'mulchen'],
    sections: [
      {
        title: 'Cut-and-Come-Again: was wirklich nachwachst',
        content: 'Das Prinzip "einmal pflanzen, mehrfach ernten" funktioniert tatsachlich bei vielen Pflanzen, ist aber kein Wundermittel. Studien zeigen: Pflücksalat (Lactuca sativa) produziert bei Blätterntemethode uber Wochen hinweg, wobei die Pflanze nach jedem Schnitt an Masse zunimmt. Entscheidend: NIE das Vegetationszentrum (Herz) beschadigen.',
        details: [
          'FUNKTIONIERT HERVORRAGEND: Pflücksalat (aussere Blätter ernten, Herz stehen lassen: wochenlange Ernte). Mangold (aussere Stiele abschneiden, nachwuchs uber 6+ Monate). Grunkolh/Palmkohl (untere Blätter ernten, oben wachst weiter, Monate). Spinat (3 cm uber Boden schneiden, treibt 2-3x nach). Rucola (3 cm uber Basis schneiden, schneller Nachwuchs).',
          'FUNKTIONIERT GUT: Basilikum (Triebspitzen schneiden = Verzweigung = MEHR Blätter, nicht weniger). Petersilie (aussere Stiele ernten, zweijahrig). Schnittlauch (bodennah schneiden, treibt unbegrenzt nach). Minze (schneiden fordert Buschigkeit).',
          'FUNKTIONIERT EINGESCHRANKT: Kopfsalat (nur Pflucktypen, nicht Kopftypen). Sellerie (kann vom Strunk nachwachsen, aber langsam und schwach). Porree (treibt dunne Triebe vom Stummel, kaum praktisch). Pak Choi (kann nachwachsen, schosst aber oft).',
          'FUNKTIONIERT NICHT: Karotte, Radieschen, Rote Bete (Wurzelgemüse = einmalige Ernte). Kürbis, Zucchini (Früchte ernten ja, aber Pflanze wachst nicht "nach"). Tomate (Ausgeizen fordert Ertrag, aber kein cut-and-come-again Prinzip).',
          'WISSENSCHAFT: Studie (ScienceDirect 2021): Lactuca sativa cv. Outredgeous bei cut-and-come-again Ernte: Pflanzen verdoppelten sich in Frischgewicht, Trockengewicht und Blattflache vom 1. zum 2. Schnitt. 3 Ernten von derselben Pflanze uber 56 Tage.',
        ],
        tip: 'Die effektivste Cut-and-Come-Again Kombination für den Balkon: 1 Kiste Pflücksalat + 1 Kiste Mangold + 1 Topf Basilikum + 1 Topf Schnittlauch. Alle 4 liefern wochenlang von einer einzigen Pflanzung.',
        sourceNote: 'ScienceDirect: Comparison of two controlled-release fertilizer formulations for cut-and-come-again harvest (2021). ResearchGate: Comparison of Two Harvest Methods for Lettuce Production.',
      },
      {
        title: 'Social-Media-Hacks: Faktencheck',
        content: 'Instagram und TikTok sind voll mit "Garten-Hacks" die viral gehen. Manche sind genial, viele sind wirkungslos oder sogar schadlich. Hier ein wissenschaftlicher Faktencheck der beliebtesten:',
        details: [
          'EIERSCHALEN GEGEN SCHNECKEN: WIDERLEGT. Schnecken kriechen problemlos uber Eierschalen. Mehrfach in kontrollierten Versuchen getestet. Eierchalen sind ein Kalk-Dünger (wenn gemahlen), aber KEIN Schneckenschutz.',
          'KAFFEESATZ GEGEN SCHNECKEN: WIDERLEGT. Kein nachweisbarer Abschreckungseffekt in Versuchen. Kaffeesatz ist ein guter Dünger (2% N), aber kein Schneckenmittel.',
          'EIERSCHALEN GEGEN BLUTENDFAULE BEI TOMATEN: WIDERLEGT. Blutendfaule ist KEIN Calcium-Mangel im Boden, sondern ein Transportproblem durch unregelmassiges Gießen (University of Minnesota Extension). Eierschalen zersetzen sich viel zu langsam, um irgendeine Sofort-Wirkung zu haben. Losung: GLEICHMASSIG gießen.',
          'BITTERSALZ (EPSOM SALT) ALS WUNDERDUENGER: TEILWEISE WIDERLEGT. Bittersalz (MgSO4) hilft NUR bei nachgewiesenem Magnesiummangel (Intervenal-Chlorose). Ohne Mangel: wirkungslos. BEI BLUTENDFAULE SOGAR SCHADLICH: uberschussiges Magnesium konkuriert mit Calcium und verschlimmert das Problem.',
          'MILCH GEGEN MEHLTAU: TEILWEISE BESTATIGT. Verdunnte Milch (1:9 mit Wasser) zeigt in einigen Studien vorbeugende Wirkung gegen Echten Mehltau. Wirkt uber Milchproteine + UV-Licht (bildet antimikrobielle Radikale). Nicht gegen Falschen Mehltau. Uberdosierung = Pilzbefall durch Milchfett.',
          'ZIMT GEGEN DAMPING-OFF: BESTATIGT. Zimt hat nachgewiesene antifungale Eigenschaften. Dunn auf Aussaaterde gestreut, reduziert er Pilzbefall bei Keimlingen (Damping-off). Einer der wenigen Social-Media-Hacks mit wissenschaftlicher Basis.',
          'BANANEN IM PFLANZLOCH: UBERBEWERTET. Bananenschale enthalt wenig Kalium (0,9%), fault langsam, zieht Fruchtfliegen an. Kompost ist 10x effektiver. In den Kompost werfen, nicht ins Pflanzloch.',
          'TOMATEN MIT ZUCKER BEGIESSEN: WIRKUNGSLOS. Pflanzen konnen keinen Zucker uber die Wurzeln aufnehmen. Zucker im Boden zieht Ameisen und Pilze an. Komplett sinnlos.',
          'ASPIRIN IM GIESSWASSER: SCHWACH BELEGT. Salicylsaure (in Aspirin) kann pflanzliche Abwehr aktivieren (Systemic Acquired Resistance). Effekt in Studien minimal und inkonsistent. Brennnesseljauche ist effektiver und kostenlos.',
          'BACKPULVER GEGEN MEHLTAU: SCHWACH BELEGT. Natriumbicarbonat kann oberflachlich den pH auf Blättern anheben und Mehltau hemmen. Wirkung schwacher als Milch-Wasser und deutlich schwacher als Schwefel- oder Kupferpraparate.',
        ],
        warning: 'Bittersalz (Epsom Salt) bei Blutendfaule an Tomaten ist KONTRAPRODUKTIV. Uberschussiges Magnesium blockiert die Calcium-Aufnahme und verschlimmert das Problem. Die Losung ist gleichmassiges Gießen, nicht mehr Dünger.',
        sourceNote: 'University of Minnesota Extension: Coffee grounds, eggshells and Epsom salts. BBC Science Focus: 7 biggest gardening myths debunked. Oregon State University: Coffee grounds pH research.',
      },
      {
        title: 'Die ECHTEN Hacks die deinen Ertrag verdoppeln',
        content: 'Vergiss die Social-Media-Gimmicks. Diese Techniken sind wissenschaftlich belegt und haben den größten Effekt auf deinen Gartenertrag:',
        details: [
          'HACK #1 STAFFELAUSSAAT: Alle 2-3 Wochen neue Reihen Salat + Radieschen saen. Statt einmal 5 kg auf einmal und dann nichts mehr: 12+ Wochen gleichmassig frisches Gemüse. Nullkosten, maximaler Effekt. Das ist DER Anfanger-Hack.',
          'HACK #2 MULCH (8 cm): Reduziert Wasserverdunstung um 30-50%, unterdruckt 80-90% der Unkrauter, reguliert Bodentemperatur (5-8 C kuehler im Sommer), fordert Regenwurmer. Eine Schicht Stroh kostet 5 EUR und spart 50+ Stunden Jaten pro Saison.',
          'HACK #3 MISCHKULTUR KAROTTE+ZWIEBEL: Wissenschaftlich belegt: bis zu 80% weniger Mohrenfliegen-Befall. Die Schwefelduftstoffe der Zwiebel uberlagern den Karottengeruch. Kostet nichts extra.',
          'HACK #4 BRENNNESSELJAUCHE: Kostenloser, hochwertiger Stickstoff-Dünger aus einem "Unkraut". 1 kg Brennnesseln + 10 L Wasser, 14 Tage vergären, 1:10 verdünnen. Ersetzt jeden gekauften N-Dünger für Starkzehrer.',
          'HACK #5 BASILIKUM-TRIEBSPITZEN SCHNEIDEN: Nie einzelne Blätter pflücken! Immer die Spitze mit 2 Blattpaaren abschneiden. Die Pflanze verzweigt sich und produziert ab dann DOPPELT so viele Blätter. Nach 3 Schnitten ist ein buschiger Strauch statt einer langen Rute.',
          'HACK #6 TOMATEN TIEF PFLANZEN: Tomaten tiefer einsetzen als sie im Topf standen (bis zu den Keimblättern). Am vergrabenen Stamm bilden sich zusatzliche Wurzeln = starkere Pflanze = mehr Ertrag. Wissenschaftlich belegt bei Solanaceae.',
          'HACK #7 GLASHAUS (auch klein): Selbst ein 2x3 m Glashaus verlangert die Saison um 4-8 Wochen auf jeder Seite. HBLFA Schönbrunn Forschung: 80% mehr Tomatenertrag im Glashaus vs. Freiland. Und: Wintergemüse November-März.',
          'HACK #8 KOMPOSTTEE: 1 Schaufel reifer Kompost in 10 L Wasser, 24-48 Std beluften (Aquariumpumpe). Gießen: sofort verfügbare Mikroorganismen + Nährstoffe. Wie ein Probiotikum für den Boden.',
          'HACK #9 REGENWASSER STATT LEITUNGSWASSER: Kein Kalk, kein Chlor, Zimmertemperatur (kein Kälteschock für Gurken). IBC-Container (1000 L, 30-50 EUR gebraucht) an Regenrinne = 60% des Giesswasserbedarfs gratis.',
          'HACK #10 BODENBEDECKUNG 365 TAGE: Kein nackter Boden, niemals. Mulch, Grundungung, oder Wintergemüse. Nackter Boden = Erosion + Nährstoffverlust + Unkraut. Bedeckter Boden = Humusaufbau + Feuchtigkeit + Regenwurmer.',
        ],
        tip: 'Wenn du nur EINEN Hack umsetzen willst: Mulch. 8 cm Stroh auf jedes Beet. Das allein spart 50% Gießen, 80% Jaten, und verbessert den Boden jedes Jahr. Alles andere sind Bonus-Hacks.',
        sourceNote: 'HBLFA Schönbrunn Glashaus-Versuche. FiBL Merkblätter Mulch + Mischkultur. Diverse Universitatsstudien (Oregon State, Minnesota, Wageningen).',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ANFÄNGER: DIE 15 HÄUFIGSTEN FEHLER
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'anfaengerfehler',
    title: 'Die 15 haufigsten Anfangerfehler',
    subtitle: 'Was fast jeder falsch macht und wie du es von Anfang an richtig machst',
    color: '#ef4444',
    sourceIds: ['heistinger', 'kreuter'],
    relatedArticles: ['bewaesserung', 'anzucht', 'boden', 'duengung'],
    sections: [
      {
        title: 'Fehler 1-5: Gießen, Platz, Timing',
        content: 'Diese funf Fehler machen 80% aller Anfanger. Die gute Nachricht: alle sind leicht vermeidbar wenn man sie kennt.',
        details: [
          'FEHLER 1: ZU VIEL GIESSEN. Der #1-Killer. Anfänger gießen täglich ein bisschen = nasse Oberfläche, trockene Tiefe. Wurzeln faulen, Pflanzen werden SCHWÄCHER statt stärker. RICHTIG: Seltener, dafür TIEF gießen (5-10 cm Bodentiefe durchfeuchten). Fingerprobe: Finger 5 cm tief in Erde. Feucht? Nicht gießen. Trocken? Gießen. So einfach.',
          'FEHLER 2: ZU ENG PFLANZEN. "Da passt noch eine Tomate rein!" Nein. Zu enge Pflanzen konkurrieren um Licht, Wasser, Nährstoffe. Ergebnis: alle kumern, keine tragt gut. RICHTIG: Pflanzabstande sind nicht Vorschlage sondern Minimum. Tomate 60-70 cm, Kürbis 100 cm, Salat 25 cm. Lieber weniger Pflanzen mit vollem Ertrag.',
          'FEHLER 3: ZU FRUEH SAEEN (VORKULTUR). Tomaten im Januar vorziehen = lange, dunne, vergeilte Pflanzen im März die kein Licht bekommen. RICHTIG: Tomaten ab Mitte März (6-8 Wochen vor Auspflanzen). Paprika ab Ende Februar. Nicht fruher, ausser du hast Pflanzenlampen.',
          'FEHLER 4: ZU FRUEH AUSPFLANZEN. Frostempfindliche Pflanzen vor Eisheiligen (16. Mai) ins Freiland = Tod in einer kalten Nacht. RICHTIG: Eisheilige abwarten. Oder: Vlies bereithalten. Im Glashaus ist es fruher sicher.',
          'FEHLER 5: ALLES AUF EINMAL SAEEN. 20 Kopfe Salat gleichzeitig = 3 Wochen Salat-Uberfluss, dann nichts mehr. RICHTIG: Staffelaussaat! Alle 2-3 Wochen eine kleine Reihe. 12 Wochen gleichmassig frischer Salat statt einer Schwemme.',
        ],
        tip: 'Faustregel für das erste Jahr: Lieber 5 Kulturen gut machen als 20 schlecht. Starte mit: Radieschen + Salat + Zucchini + Tomate + Kräuter. Alle 5 sind anfängerfreundlich und verzeihen Fehler.',
      },
      {
        title: 'Fehler 6-10: Boden, Dünger, Pflege',
        content: 'Diese Fehler passieren meist ab dem zweiten Monat, wenn die Pflanzen wachsen und Pflege brauchen:',
        details: [
          'FEHLER 6: BODEN IGNORIEREN. Samen in harten, ungepflegten Boden werfen und hoffen. RICHTIG: Vor dem ersten Saeen: Boden lockern (Grabegabel, NICHT Spaten), 3-5 cm Kompost einarbeiten, pH pruefen (Teststreifen 5 EUR). Das allein verdoppelt den Ertrag.',
          'FEHLER 7: ZU VIEL DUENGER. "Viel hilft viel" = viele Blätter, keine Früchte, verbrannte Wurzeln, Blattlaus-Magnet. Überdüngter Stickstoff produziert weiches, anfalliges Gewebe. RICHTIG: Kompost als Basisdünger (3 L/m²). Brennnesseljauche 1:10 für Starkzehrer, alle 2 Wochen. Mehr braucht kein Anfanger.',
          'FEHLER 8: NICHT MULCHEN. Nackter Boden = Unkraut, Verdunstung, Erosion, Temperaturschwankungen. RICHTIG: 5-8 cm Stroh oder Rasenschnitt auf jedes Beet. Sofort nach dem Pflanzen. Der eine Schritt der 50% aller Probleme lost.',
          'FEHLER 9: TOMATEN NICHT AUSGEIZEN. Unausgegeizte Tomaten = undurchdringlicher Dschungel, wenig Licht, kleine Früchte, Braunfaule durch fehlende Beluftung. RICHTIG: Wochentlich Seitentriebe in den Blattachseln ausbrechen. Einfach mit Daumen und Zeigefinger abknipsen, solange sie klein sind (unter 5 cm).',
          'FEHLER 10: FRUCHTFOLGE IGNORIEREN. 3 Jahre Tomaten am selben Beet = Nematoden, Fusarium, Phytophthora-Party. RICHTIG: Nie 2 Jahre dieselbe Pflanzenfamilie am selben Platz. Beetplan fuhren (Garden Hub hilft!).',
        ],
        tip: 'Wenn du nur 3 Dinge richtig machst, bist du schon besser als 80% aller Anfänger: (1) Mulchen, (2) Pflanzabstände einhalten, (3) Nicht zu viel gießen.',
      },
      {
        title: 'Fehler 11-15: Ernte, Schadlinge, Planung',
        content: 'Diese Fehler betreffen die spätere Saison und die langfristige Planung:',
        details: [
          'FEHLER 11: ZU SPAET ERNTEN. Zucchini als Fussball, holzige Radieschen, bitterer Salat. Gemüse schmeckt am besten JUNG. RICHTIG: Zucchini bei 15-20 cm, Radieschen sobald Knolle sichtbar, Salat vor dem Schossen. Täglich kontrollieren in der Erntephase.',
          'FEHLER 12: SCHNECKEN UNTERSCHAETZEN. Eine einzige Nacht mit Nacktschnecken kann 20 Salatpflanzen vernichten. RICHTIG: Schneckenzaun (physische Barriere, 100% wirksam), Bierfallen, abendliches Absammeln. Vorbeugend: Mulch, trockene Oberflache am Abend (morgens gießen statt abends).',
          'FEHLER 13: BLATTLÄUSE PANIK. Einzelne Blattlause = KEIN Notfall. Sie sind Nahrung für Marienkäfer. RICHTIG: 5 Tage warten und beobachten. Oft regeln Nutzlinge das Problem von selbst. Bei Massenbefall: Kaliseife (20 g/L Wasser) sprühen. Nie breit wirkende Insektizide (toten auch Nutzlinge).',
          'FEHLER 14: KEIN GARTENTAGEBUCH. Im nächsten Jahr weisst du nicht mehr: was stand wo? Was hat funktioniert? Wann wurde gesaet? RICHTIG: Notizen machen. Was, wo, wann, wie viel Ertrag, was hat nicht geklappt. Der Garden Hub Kalender und die Aktivitäten sind genau dafür da.',
          'FEHLER 15: ZU VIEL AUF EINMAL. 200 m² Gemuesegarten im ersten Jahr = Uberforderung, Frust, Aufgabe. RICHTIG: Klein starten. 10-20 m² im ersten Jahr. Naechstes Jahr erweitern. Lieber einen kleinen Garten der Freude macht als einen grossen der Stress verursacht.',
        ],
        warning: 'Der allergrößte Anfaengerfehler: Aufgeben nach dem ersten Misserfolg. JEDER Gaertner hat im ersten Jahr Ausfaelle. Das ist normal und kein Versagen. Im zweiten Jahr kennst du deinen Boden, dein Klima, dein Mikroklima - und alles wird besser.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TROUBLESHOOTING: SYMPTOM → DIAGNOSE → LÖSUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'troubleshooting',
    title: 'Troubleshooting: Symptom, Diagnose, Losung',
    subtitle: 'Deine Pflanze sieht krank aus? Hier findest du die Ursache und was du JETZT tun kannst',
    color: '#ef4444',
    sourceIds: ['ages', 'fibl', 'heistinger', 'kreuter'],
    relatedArticles: ['pflanzenschutz', 'bewaesserung', 'duengung'],
    sections: [
      {
        title: 'Gelbe Blätter: 8 mogliche Ursachen',
        content: 'Gelbe Blätter sind das haufigste Symptom und konnen 8 verschiedene Ursachen haben. Die Position der Vergilbung verrat die Ursache:',
        details: [
          'UNTERE Blätter gelb, oben grun = STICKSTOFFMANGEL (N). Haufigste Ursache. N ist mobil: Pflanze zieht N aus alten Blättern für neues Wachstum. LOSUNG: Brennnesseljauche 1:10, Hornspane 50 g/m², oder Kompost nachduengen.',
          'Blätter gelb ZWISCHEN den Adern (Adern bleiben grun) = MAGNESIUMMANGEL (Mg) oder EISENMANGEL (Fe). Intervenal-Chlorose. Bei Mg: Bittersalz (10 g/L Giesswasser). Bei Fe: pH pruefen (bei pH >7,5 wird Fe unlöslich).',
          'Blätter KOMPLETT gelb + welk = UEBERWASSERUNG / STAUNAESSE. Wurzeln faulen, konnen kein Wasser/Nährstoffe mehr aufnehmen. LOSUNG: Sofort aufhoren zu gießen. Drainage verbessern. Bei Topfpflanzen: umtopfen, faule Wurzeln entfernen.',
          'Gelbe Blätter + schlechtes Wachstum bei JUNGEN Pflanzen = KALTE. Unter 10 C stoppen viele Gemüse das Wachstum. Paprika unter 15 C = gelbe Blätter. LOSUNG: Vlies, Glashaus, oder einfach abwarten bis es warmer wird.',
          'Gelbe Flecken/Muster auf Blättern = VIROSE (Tabakmosaik, Gurkenmosaik etc.) oder PILZ (Falscher Mehltau: gelbe Flecken oben, grauer Belag unten). VIROSE: keine Heilung, befallene Pflanze entfernen. PILZ: befallene Blätter entfernen, besser beluften.',
          'Gelbe Blätter NUR an Tomaten im August/September = NORMAL. Herbstliche Alterung. Untere Blätter sowieso entfernen (Beluftung, Braunfaule-Vorbeugung).',
          'Gelbe Blätter im TOPF/BALKONKASTEN = oft NAHRSTOFFMANGEL (begrenzte Erdmenge, ausgelaugt). LOSUNG: Flussigdünger (Bio-Gemüsedünger) alle 2 Wochen. Oder Brennnesseljauche 1:10.',
          'Gelbe Blätter bei Heidelbeeren = fast IMMER pH zu hoch (>5,5). LOSUNG: Rhododendronerde nachfullen, nur Regenwasser gießen, Nadelstreu-Mulch.',
        ],
        tip: 'Diagnosehilfe: Wo sind die gelben Blätter? UNTEN = Stickstoff. ZWISCHEN Adern = Magnesium/Eisen. UEBERALL = Wasser/Kalte/Virus. Im Topf = Nährstoffmangel. Das deckt 90% der Falle ab.',
      },
      {
        title: 'Welke Pflanzen: 5 Ursachen',
        content: 'Wenn Pflanzen welken, denkt jeder sofort an Wassermangel. Aber es gibt 5 mogliche Ursachen, und 2 davon werden durch MEHR Wasser schlimmer:',
        details: [
          'URSACHE 1: WASSERMANGEL (haufigste). Erde trocken bei Fingerprobe. LOSUNG: Tief gießen (5 L pro Pflanze). Danach mulchen. Am nächsten Tag erholt sich die Pflanze.',
          'URSACHE 2: UEBERWASSERUNG / WURZELFAULE. Erde ist NASS, Pflanze welkt trotzdem. Wurzeln sind braun/matschig statt weiss. LOSUNG: NICHT mehr gießen! Drainage verbessern. Bei Topfpflanzen: umtopfen in trockene Erde, faule Wurzeln wegschneiden.',
          'URSACHE 3: HITZE-WELKE. Pflanzen welken mittags bei grosser Hitze (>32 C), erholen sich abends. Das ist NORMAL und kein Notfall. Pflanze reguliert Verdunstung. LOSUNG: Nur gießen wenn sie abends NOCH welk ist. Mittags-Welke ist okay.',
          'URSACHE 4: FUSARIUM/VERTICILLIUM-WELKE (Pilz). Pflanze welkt einseitig oder komplett, Erde ist feucht. Gefassbuendel im Stangel braun (Schnitttest). KEINE HEILUNG. Befallene Pflanze entfernen + entsorgen (Restmull, NICHT Kompost). Fruchtfolge einhalten.',
          'URSACHE 5: WURZELSCHAEDEN. Wuehlmaus, Engerling, Nematoden. Pflanze welkt ohne offensichtlichen Grund. Ausgraben und Wurzeln kontrollieren. LOSUNG: Wuehlmausgitter, Nematoden-feindliche Tagetes pflanzen, Fruchtfolge.',
        ],
        warning: 'KRITISCH: Welke Pflanze + feuchter Boden = NICHT noch mehr gießen! Das ist das Gegenteil von Wassermangel. Ueberwasserung (Wurzelfaule) totet mehr Pflanzen als Trockenheit. Fingerprobe IMMER vor dem Gießen.',
      },
      {
        title: 'Loecher in Blättern: was frisst meine Pflanzen?',
        content: 'Löcher in Blättern haben verschiedene Verursacher. Die Art der Schadigung verrat den Tater:',
        details: [
          'GROSSE, UNREGELMAESSIGE LOECHER + SCHLEIMSPUREN = SCHNECKEN. Fressen nachts, hinterlassen Silberspur. SOFORTMASSNAHME: Abendliches Absammeln (ab Dammerung mit Taschenlampe). LANGFRISTIG: Schneckenzaun, morgens statt abends gießen, Mulch (Ironie: zieht Schnecken an, aber Nutzen ueberwiegt).',
          'KLEINE RUNDE LOECHER (1-2 mm, wie Schrotkugeln) = ERDFLOEHE. Typisch bei Kohl, Radieschen, Rucola. Springen weg wenn man sie beruhrt. LOSUNG: Feucht halten (Erdflohe mogen Trockenheit), Vlies/Kulturschutznetz, feine Steinmehl-Bestaubung.',
          'BLATTER SKELETTIERT (nur Adern uebrig) = RAUPEN (Kohlweisslingsraupen, gruen, an Blattunterseite). LOSUNG: Absammeln. Kulturschutznetz von Anfang an. Bei Massenbefall: Bacillus thuringiensis (Bt, biologisch).',
          'LOECHER + SILBRIGE/BRONZEFARBENE BLATTOBERFLAECHE = THRIPSE. Winzige Insekten (1 mm), saugen an Zellen. LOSUNG: Blautafeln (Klebefallen), Raubmilben (Amblyseius cucumeris), Neem-Ol.',
          'BLATTRAND-EINKERBUNGEN (halbmondformig) = DICKMAULRUESSLER. Nachtaktiv, frisst Einkerbungen am Blattrand. Larven im Boden fressen Wurzeln (schlimmer!). LOSUNG: Nematoden (Heterorhabditis bacteriophora) gegen Larven im Boden. Abends absammeln.',
          'LOECHER IN FRUCHTEN (Tomate, Paprika) = EULENFALTER-RAUPEN (Gemüseeule/Baumwollkapselwurm). Bohren sich in Früchte. LOSUNG: Kulturschutznetz, Bt-Praparate, Pheromonfallen. AGES-Warnung: Baumwollkapselwurm (Helicoverpa armigera) breitet sich durch Klimawandel in AT aus.',
        ],
        tip: 'Diagnose-Trick: Nachts mit Taschenlampe in den Garten. Die meisten Frasschadlinge sind nachtaktiv. Schnecken, Raupen, Dickmaulruessler: alle ab Dammerung in flagranti erwischen.',
        sourceNote: 'AGES Warndienst Pflanzengesundheit. FiBL Schadlingsliste. Kreuter: Der Biogarten.',
      },
      {
        title: 'Weisser/grauer Belag auf Blättern: Mehltau',
        content: 'Weisser oder grauer Belag ist fast immer Mehltau, aber es gibt 2 VERSCHIEDENE Krankheiten die vollig unterschiedlich behandelt werden:',
        details: [
          'ECHTER MEHLTAU (Erysiphales): Weisser, mehliger Belag auf BLATTOBERSEITE. Tritt bei TROCKENHEIT + Warme auf. Typisch: Zucchini, Kürbis, Gurke im Spätsommer. MASSNAHMEN: Befallene Blätter entfernen. Milch-Wasser (1:9) vorbeugend sprühen. Schwefelkalk-Praparate (Bio-zugelassen). Resistente Sorten wahlen. NICHT ubertreibend: im August ist Mehltau an Zucchini NORMAL und die Pflanze tragt trotzdem noch wochenlang.',
          'FALSCHER MEHLTAU (Peronosporales): Gelbe Flecken auf BLATTOBERSEITE, grau-violetter Belag auf BLATTUNTERSEITE. Tritt bei NASSE + Kuhle auf. Befaellt: Salat, Spinat, Zwiebel, Basilikum. MASSNAHMEN: Weiter Pflanzabstand (Beluftung!), morgens gießen (Blätter trocknen ab), Kupferpraparate (Bio-zugelassen, aber Schwermetall). Resistente Sorten.',
          'UNTERSCHIED WICHTIG: Echter Mehltau = Trockenheits-Krankheit (mehr Wasser hilft). Falscher Mehltau = Nasse-Krankheit (weniger Wasser hilft). Verwechslung fuhrt zu VERSCHLIMMERUNG.',
          'BRAUNFAEULE (Phytophthora infestans, an Tomaten): NICHT Mehltau, wird aber oft verwechselt. Braune Flecken (nicht weiss!) auf Blättern und Früchten. Breitet sich bei Regen + Warme explosionsartig aus. SOFORTMASSNAHME: Befallene Blätter/Früchte entfernen und in Restmull (NICHT Kompost!). Nie von oben gießen. Glashaus schutzt am besten.',
        ],
        tip: 'Einfache Diagnose: Belag auf OBERSEITE, bei TROCKENHEIT = Echter Mehltau. Belag auf UNTERSEITE, bei NASSE = Falscher Mehltau. BRAUNE Flecken an Tomaten = Braunfaule (Phytophthora). Drei verschiedene Krankheiten, drei verschiedene Behandlungen.',
        sourceNote: 'AGES Pflanzenschutzdienst. FiBL Merkblätter Mehltau/Braunfaule. Kreuter: Der Biogarten.',
      },
      {
        title: 'Notfall-Checkliste: Pflanze in Trouble',
        content: 'Schnelle Entscheidungshilfe wenn etwas nicht stimmt:',
        details: [
          'PFLANZE WELKT → Fingerprobe: Erde trocken? → Gießen. Erde nass? → NICHT gießen, Drainage prufen. Erholt sich abends? → Nur Hitze-Welke, kein Problem.',
          'GELBE BLAETTER UNTEN → Stickstoffmangel → Brennnesseljauche 1:10',
          'GELBE BLAETTER ZWISCHEN ADERN → Magnesiummangel → Bittersalz 10 g/L',
          'LOECHER IN BLAETTERN → Nachts kontrollieren → Schnecken: Absammeln/Zaun. Erdflohe: feucht halten. Raupen: Bt-Praeparat.',
          'WEISSER BELAG OBEN → Echter Mehltau → Blätter entfernen, Milch-Wasser 1:9',
          'GRAUER BELAG UNTEN → Falscher Mehltau → Abstand, trockener halten, Kupfer',
          'BRAUNE FLECKEN AN TOMATEN → Braunfaule → Sofort entfernen, nie von oben gießen',
          'SCHWARZER FLECK AM TOMATENBODEN → Blutendfaule → Gleichmassiger gießen (NICHT mehr Kalzium!)',
          'BLAETTER ROLLEN SICH → Hitze/Trockenstress (bei Paprika/Tomate normal), Kalte (<10 C), oder Virose (wenn einseitig)',
          'PFLANZE WAECHST NICHT → Zu kalt (<10 C), Staunaesse, pH-Problem, Nährstoffmangel. Boden testen.',
          'KEIMLING KNICKT UM (Damping-off) → Zu feucht, zu kalt, zu dicht gesaet. Besser beluften, weniger gießen, Zimt streuen.',
          'BLUETEN FALLEN AB (Tomate/Paprika) → Nachttemperatur <10 C, Hitzestress >35 C, oder Wasserstress. Bedingungen stabilisieren.',
        ],
        tip: 'In 90% der Falle sind die Ursachen banal: zu viel Wasser, zu wenig Wasser, zu kalt, oder Nährstoffmangel. Exotische Krankheiten und Schadlinge sind selten. Zuerst die einfachen Ursachen ausschliessen.',
        sourceNote: 'Diverse Quellen: AGES, FiBL, Heistinger, Kreuter. Zusammengestellt als Schnellreferenz.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SELBSTVERSORGER: LAGER- UND VORRATS-KALENDER
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'vorratskalender',
    title: 'Vorratskalender: ganzjahrig essen aus dem Garten',
    subtitle: 'Monat für Monat: was du frisch erntest, was aus dem Lager kommt, und was du konserviert hast',
    color: '#f59e0b',
    sourceIds: ['heistinger', 'palme', 'palme-winter', 'kreuter'],
    relatedArticles: ['selbstversorgung', 'konservierung', 'winteranbau'],
    sections: [
      {
        title: 'Die Versorgungslücke: Februar-April',
        content: 'Die größte Herausforderung für Selbstversorger ist nicht der Sommer (da gibt es zu viel) sondern der Spätwinter/Vorfrühling. Februar bis April ist die "Hunger Gap": Lagergemüse geht zur Neige, im Garten wachst noch nichts. Diese Lücke zu schliessen ist das Meisterstuck der Selbstversorgung.',
        details: [
          'JANUAR: Lager: Kartoffeln, Karotten, Rote Bete, Sellerie (in Sand), Kürbis (trocken), Zwiebeln, Knoblauch. Konserven: Tomatensugo, Letscho, Marmelade, Sauerkraut, eingelegte Gurken. Tiefkuhl: Bohnen, Erbsen, Beeren, Spinat, Kräuter-Würfel. Glashaus: Feldsalat, Winterpostelein, Spinat (frisch!).',
          'FEBRUAR: Lager wird dunner. Kartoffeln beginnen zu keimen (Keime abbrechen, noch geniessbar). Karotten/Rote Bete kontrollieren (faulige entfernen). Sauerkraut-Fass geht zur Neige. Glashaus: Feldsalat, Postelein noch erntbar. Frisches Blattgrun ist jetzt Gold wert.',
          'MÄRZ: HUNGER GAP beginnt. Lager fast leer (nur noch Kürbis, Zwiebeln, Knoblauch, Konserven). ABER: Erste frische Ernte! Bärlauch (wild), Schnittlauch (treibt aus), Winterlauch (steht noch im Beet). Glashaus: letzte Feldsalat-Ernte. Ab Mitte März: erste Radieschen + Rucola im Glashaus gesät.',
          'APRIL: Lücke schliesst sich. Frisch: Radieschen (Glashaus), Rucola, Spinat (erste Direktsaat keimt), Rhabarber. Überbrückung: Konserven, TK-Vorräte, letzter Kürbis.',
          'MAI-OKTOBER: Frisch-Versorgung. Ab Mai kein Problem mehr. Ernte übersteigt Bedarf ab Juli. JETZT konservieren für nächsten Winter!',
          'NOVEMBER-DEZEMBER: Ernte: Winterlauch, Grünkohl, Feldsalat, Glashaus-Salate. Lager frisch gefüllt: Kartoffeln, Karotten, Rote Bete, Kürbis, Zwiebeln. Konserven frisch eingekocht. Bester Zeitraum des Jahres für Selbstversorger.',
        ],
        tip: 'Die Hunger Gap (Feb-April) schliesst man mit 3 Strategien: (1) Glashaus-Wintersalate (Feldsalat, Postelein), (2) Lagerfähiges Gemüse (Kürbis hält bis April!), (3) Konserven und TK-Vorräte strategisch aufteilen (nicht alles im Dezember aufessen).',
        sourceNote: 'Palme: Ernte mich im Winter. Heistinger: Handbuch Bio-Gemüse. Kreuter: Der Biogarten.',
      },
      {
        title: 'Einkochen: die 5 wichtigsten Rezepte für Selbstversorger',
        content: 'Diese 5 Einmach-Rezepte bilden das Ruckgrat der Winterversorgung. Alle sind sicher (pH <4,6) und halten 1-3 Jahre. Zusammen decken sie Saucen, Beilagen, Fruhstuck und Snacks ab.',
        details: [
          'REZEPT 1: TOMATENSUGO (10-Liter-Batch). 10 kg Tomaten waschen, vierteln. In grossem Topf 30 Min weichkochen. Durch Passiergerät ("Flotte Lotte") drehen. Mit Salz (2 TL/L), Basilikum, Knoblauch 30 Min einkochen bis cremig. HEISS in sterilisierte Gläser füllen (1 cm Kopfraum), sofort verschliessen, auf Kopf stellen. pH Tomaten: 4,0-4,5 (sicher für Heissabfullung). Haltbarkeit: 2-3 Jahre kühl + dunkel.',
          'REZEPT 2: LETSCHO (Burgenland-Klassiker). 3 kg Paprika (rot, entkernt, in Streifen) + 2 kg Tomaten (gehautet, gewürfelt) + 1 kg Zwiebeln (Ringe) + 3 EL Öl + Salz + Pfeffer + Zucker. Paprika + Zwiebeln 15 Min andünsten. Tomaten dazu, 30 Min köcheln. HEISS abfüllen. pH: <4,5 (Tomaten + Paprika). Haltbar 1-2 Jahre.',
          'REZEPT 3: SAUERKRAUT (20-kg-Batch für den Winter). 20 kg Weiskraut fein hobeln. 400 g Salz (2% vom Gewicht) darüber streuen. MIT DEN HÄNDEN kneten/stampfen bis reichlich Saft austritt (20-30 Min). In Gärtopf oder 10-L-Eimer pressen. Gewicht drauf (mit Wasser gefüllte Tüte im Beutel). 3-6 Wochen bei 18-22 C fermentieren (Blaschen = Fermentation aktiv). NICHT öffnen wahrend Fermentation! Danach kühl lagern (Keller, Kühlschrank). Haltbar: 6-12 Monate.',
          'REZEPT 4: SALZGURKEN (milchsauer). Kleine feste Gurken waschen, NICHT schälen. Salzlake: 50 g Salz pro 1 L Wasser. Gläser mit Gurken füllen, dazwischen: Dill-Dolden, Knoblauchzehen, Meerrettich-Stückchen, Senfkörner, Lorbeer. Lake aufgießen (Gurken müssen komplett bedeckt sein). Locker verschliessen. 5-7 Tage bei Zimmertemperatur. Dann kühl lagern. Haltbar: 6-12 Monate. NICHT verwechseln mit Essig-Gurken (anderes Verfahren).',
          'REZEPT 5: ERDBEER-/RIBISEL-MARMELADE. 1 kg Früchte + 500 g Gelierzucker 2:1 + 2 EL Zitronensaft. Aufkochen, 4 Min sprudelnd kochen, abschäumen. Gelierprobe: Tropfen auf kalten Teller, wird fest = fertig. HEISS in sterilisierte Gläser, sofort verschliessen, auf Kopf stellen. Haltbar: 2+ Jahre.',
        ],
        warning: 'BOTULISMUS-SICHERHEIT: Tomaten (pH 4,0-4,5) und Obst (pH 3,0-4,0) sind SICHER für Heissabfullung (Wasserbad, 85-100 C). Sauerarme Lebensmittel (Bohnen pH 5-6, Fleisch pH 5-7, Gemüsebrühe) sind NICHT sicher für Heissabfüllung: brauchen Druckeinkocher (115-120 C) oder Essig/Zitronensaure-Zusatz (pH unter 4,6 bringen). Clostridium botulinum produziert sein Toxin NUR bei pH >4,6 in sauerstofffreier Umgebung. Unter 4,6 bist du sicher.',
        sourceNote: 'Steiermarkgarten.at: Sicher Einkochen. Wurzelwerk: Botulismus vermeiden. Kraut&Rüben: Einkochen-Anleitung.',
      },
      {
        title: 'Lagerbedingungen pro Gemüsetyp',
        content: 'Jedes Lagergemüse hat andere Anspruche an Temperatur und Luftfeuchtigkeit. Falsches Lagern = Faulnis oder Austrocknung innerhalb von Wochen.',
        details: [
          'KARTOFFELN: 4-8 C, 85-90% Luftfeuchtigkeit, DUNKEL (Licht = Solanin-Bildung = grün = giftig). In Jutesäcken oder offenen Kisten. NICHT neben Äpfeln (Ethylen fördert Keimung). Haltbar: 4-6 Monate. Keime regelmässig abbrechen.',
          'KAROTTEN: 0-2 C, 95%+ Luftfeuchtigkeit. In feuchtem Sand in Holzkisten (Sandlagerung). Grün abdrehen (nicht abschneiden: zieht Feuchtigkeit). Haltbar: 3-5 Monate.',
          'ROTE BETE: Wie Karotten. 0-2 C, Sand. Stiel 2 cm stehen lassen (sonst blutet sie aus). Haltbar: 3-4 Monate.',
          'SELLERIE: In Sand wie Karotten. 0-2 C. Haltbar: 2-3 Monate. Alternativ: scheibchenweise einfrieren.',
          'PASTINAKE/SCHWARZWURZEL: Am besten im Beet lassen und bei Bedarf ausgraben (frosthart!). Oder wie Karotten in Sand. Haltbar im Keller: 2-3 Monate.',
          'KÜRBIS: 10-15 C (!), TROCKEN (50-60% Luftfeuchtigkeit). Wichtig: wärmer als anderes Lagergemüse! Stiel dran lassen. Auf Regal legen, nicht stapeln. Hokkaido: 3-4 Monate. Butternut: bis 12 Monate (!). Muskat: 6-9 Monate.',
          'ZWIEBELN: 5-15 C, trocken, luftig. In Netzen oder als Zöpfe aufhängen. Haltbar: 4-8 Monate (Lagersorten bis 10 Monate).',
          'KNOBLAUCH: 5-15 C, trocken, luftig. Flechten oder in Netzen. Haltbar: 6-9 Monate (Herbst-gepflanzter hält länger als Frühlings-gepflanzter).',
          'ÄPFEL: 0-4 C, 85-90% Luftfeuchtigkeit. Einzeln in Zeitungspapier wickeln. Regelmässig kontrollieren (1 fauler = alle faul). NICHT neben Kartoffeln oder Kohl lagern (Ethylen!). Haltbar je nach Sorte: "Topaz" 3 Monate, "Boskoop" 5 Monate.',
          'KOHL/KRAUT: 0-2 C, 90% Luftfeuchtigkeit. Ganze Köpfe kopfüber aufhängen oder auf Regal. Haltbar: 2-3 Monate. Oder: als Sauerkraut 6-12 Monate.',
          'NÜSSE (Walnuss, Haselnuss): In Netzbeuteln, trocken, kühl. Nach Ernte 2-3 Wochen trocknen. Haltbar: 12+ Monate (ungeschält).',
        ],
        tip: 'Kein Keller? Alternativen: Ungeheizte Garage (oft 4-10 C im Winter), Erdmiete (Loch im Garten, 50 cm tief, Stroh drin, Erde drauf), Isolierbox auf dem Balkon (Styropor-Kiste mit Deckel, mit Stroh ausgepolstert), kaltes Treppenhaus. Temperatur-Logger (10 EUR) hilft den besten Platz zu finden.',
        sourceNote: 'Kreuter: Der Biogarten, Kap. Lagerung. Heistinger: Handbuch Bio-Gemüse. Traditionelle Lagermethoden NÖ/Bgld.',
      },
      {
        title: 'Vorrats-Masterplan: Mengen für 2 Personen, 1 Jahr',
        content: 'Konkreter Mengenplan für weitgehende Selbstversorgung (Gemüse + Obst) für 2 Personen über ein ganzes Jahr. Getreide, Öl und Milchprodukte werden zugekauft.',
        details: [
          'LAGERGEMÜSE (frisch einlagern): 100 kg Kartoffeln (20 m2 Anbau). 30 kg Karotten (8 m2). 15 kg Rote Bete (5 m2). 10 kg Sellerie (3 m2). 20 kg Zwiebeln (5 m2). 5 kg Knoblauch (5 m2). 40 kg Kürbis (10 m2, ca. 4-6 Kürbisse). 10 kg Äpfel (1-2 Bäume).',
          'EINKOCHEN (Gläser): 30 L Tomatensugo (aus ca. 30 kg Tomaten = 6-8 Pflanzen). 10 L Letscho (8 kg Paprika + 5 kg Tomaten). 10 L Gurken eingelegt. 5 L Marmelade (div. Beeren + Obst). 5 L Chutneys / Relishes.',
          'FERMENTIEREN: 20 kg Sauerkraut (= 20 kg Weisskraut). 5 L milchsaure Gurken.',
          'TIEFKÜHLEN: 10 kg Bohnen (blanchiert). 5 kg Erbsen. 5 kg Beeren (Himbeere, Ribisel, Erdbeere). 5 kg Spinat/Mangold (portioniert). 2 kg Kräuter-Würfel (in Eiswürfelform + Olivenöl).',
          'TROCKNEN: 2 kg getrocknete Tomaten. 1 kg getrocknete Kräuter (Basilikum, Oregano, Thymian, Rosmarin, Salbei). 0,5 kg Chilischoten getrocknet.',
          'GLASHAUS (Winterernte frisch): Feldsalat, Winterpostelein, Spinat, Asiasalate (Nov-März): ca. 10 kg Frischgemüse gesamt.',
          'FREILAND (Winterernte): Grünkohl, Winterlauch, Pastinake (Nov-März): ca. 10 kg.',
          'SUMME ANBAUFLÄCHE: ca. 80-100 m2 Gemüse + 10-15 m2 Glashaus + Obstbäume/Beeren. Plus Kräuterbeet 3-5 m2.',
          'ARBEITSAUFWAND: Sommer: 5-8 Std/Woche Gartenarbeit + 2-3 Wochenenden Einkochen/Einlegen. Winter: 1-2 Std/Woche. Realistisch neben Vollzeitjob wenn gut geplant.',
        ],
        tip: 'Starte im ersten Jahr mit der Hälfte. 50 m2 + Glashaus + 3 Einkoch-Wochenenden. Im zweiten Jahr weisst du was funktioniert und kannst hochskalieren. Perfektion kommt mit Erfahrung, nicht mit Planung.',
        sourceNote: 'Eigene Berechnung basierend auf Ertragsdaten (Heistinger, fryd.app Ertragsrechner) und DGE Ernährungsempfehlungen.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WISSENSCHAFTLICH BELEGTE GARTEN-TECHNIKEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'wissenschaft-techniken',
    title: 'Wissenschaftlich belegte Garten-Techniken',
    subtitle: 'Was die Forschung wirklich bewiesen hat: Mykorrhiza, Regenwurmer, Tagetes, Pflanzenkohle, Hügelkultur',
    color: '#3b82f6',
    sourceIds: ['boku', 'fibl', 'heistinger'],
    relatedArticles: ['boden', 'pflanzenschutz', 'mischkultur', 'permakultur', 'garten-hacks'],
    sections: [
      {
        title: 'Mykorrhiza: das unsichtbare Wurzelnetzwerk',
        content: 'Mykorrhiza-Pilze sind die mächtigsten Verbündeten deiner Pflanzen, und die meisten Gärtner wissen nichts von ihnen. Die Pilzfäden (Hyphen) verbinden sich mit Pflanzenwurzeln und erweitern deren Nährstoff-Reichweite um den Faktor 100-1000. Im Gegenzug erhält der Pilz Zucker von der Pflanze. Diese Symbiose existiert seit 450 Millionen Jahren und betrifft 80-90% aller Landpflanzen.',
        details: [
          'WIRKUNG (wissenschaftlich belegt): Phosphor-Aufnahme um 200-500% erhöht (Pilzhyphen erreichen P-Quellen die Wurzeln nicht können). Toleranz gegen Trockenheit erhöht (Pilznetzwerk transportiert Wasser aus größerem Bodenvolumen). Toleranz gegen Krankheitserreger erhöht (kompetitive Verdrängung pathogener Pilze). Pflanzen über Pilznetzwerk VERBUNDEN: können Warnsignale und sogar Nährstoffe austauschen ("Wood Wide Web").',
          'GEMÜSE die von Mykorrhiza profitieren: Tomate, Paprika, Karotte, Zwiebel, Knoblauch, Kartoffel, Gurke, Bohne, Erbse, Erdbeere, Spargel, Salat, Fenchel.',
          'GEMÜSE die KEINE Mykorrhiza bilden: Kreuzblütler (Kohl, Kohlrabi, Radieschen, Rucola, Brokkoli), Gänsefußgewächse (Spinat, Mangold, Rote Bete), Knöterichgewächse (Rhabarber, Buchweizen). Diese Familien haben andere Strategien zur Nährstoffaufnahme.',
          'FÖRDERN: Nicht umgraben (Umgraben zerreißt das Myzel-Netzwerk!), Mulch (Pilze lieben organisches Material), Fruchtfolge mit Mykorrhiza-Partnern, keine Phosphor-Überdüngung (bei P-Überangebot braucht die Pflanze den Pilz nicht und beendet die Symbiose).',
          'ZERSTÖREN: Tiefes Umgraben, chemische Fungizide, hohe Phosphor-Düngung, nackter Boden (ohne lebende Wurzeln stirbt das Netzwerk).',
          'Mykorrhiza-Impfstoff kaufen? Kommerziell erhältliche Mykorrhiza-Präparate (10-20 EUR) können den Start beschleunigen, sind aber NICHT nötig wenn der Boden gesund ist. In einem nicht umgegrabenen Boden mit Fruchtfolge sind die Pilze bereits vorhanden.',
        ],
        tip: 'Die einfachste Mykorrhiza-Förderung: NICHT umgraben. Das allein schützt das bestehende Pilznetzwerk. Kombiniert mit Mulch und Fruchtfolge baut sich in 2-3 Jahren ein starkes Mykorrhiza-System von selbst auf.',
        sourceNote: 'Freie Universität Berlin: Mykorrhiza-Forschung. BioMyc Environment: Mykorrhiza im Gemüseanbau. Kraut&Rüben: Nützliche Pilze. International Fachliteratur zu AMF (Arbuskuläre Mykorrhiza).',
      },
      {
        title: 'Regenwurmer: die besten Mitarbeiter im Garten',
        content: 'Ein einziger Regenwurm produziert pro Jahr 3-5 kg Regenwurmkot (Wurmhumus), den nährstoffreichsten natürlichen Dünger der Welt. In einem gesunden Gartenboden leben 100-400 Regenwürmer pro Quadratmeter. Sie belüften den Boden mit ihren Gängen (Infiltration +100-400%), zersetzen organisches Material, und produzieren Ton-Humus-Komplexe die Nährstoffe speichern.',
        details: [
          'LEISTUNG (quantifiziert): Lumbricus terrestris (Tauwurm) gräbt Gänge bis 3 m tief (!). 100-400 Würmer/m2 in gesundem Boden. Pro Wurm 3-5 kg Kot/Jahr (reichstes Substrat im Boden). Infiltrationsrate des Bodens +100-400% durch Wurmgänge. Pro Hektar und Jahr: 40-100 Tonnen Erde durch den Wurmdarm transportiert.',
          'FÖRDERN: Mulch ist das #1 Wurmfutter (Stroh, Laub, Rasenschnitt). Nie umgraben (zerteilt Würmer und zerstört Gänge). Kompost aufbringen. Keine Pestizide/Herbizide. Boden feucht halten (Würmer atmen über die Haut  -  Trockenheit = Tod). Kaffeesatz auf Beete (Würmer lieben es).',
          'SCHÄDIGEN: Umgraben/Pflügen (LfL Bayern: mechanische Bearbeitung führt zu hohen Populationseinbrüchen). Bodenverdichtung (schweres Gerät, Betreten bei Nässe). Mineraldünger (versauert den Boden). Schneckenkorn auf Metaldehyd-Basis (auch für Würmer giftig  -  Eisen-III-Phosphat ist wurmsicher).',
          'Bodenverdichtung ist für Regenwürmer besonders schädlich: Der Druck reduziert die Porenräume, die Regenwürmer für ihre Fortbewegung und Gänge benötigen.',
          'WURMKOMPOST (Vermicomposting): Eisenia fetida (Kompostwürmer, NICHT Lumbricus!) in einer Kiste mit Küchenabfällen. Produziert den konzentriertesten Naturdünger. NPK 5x höher als normaler Kompost. Ideal für Balkon-Gärtner.',
        ],
        tip: 'Wurm-Test: Grabegabel 30 cm tief einstechen, Scholle umdrehen, Würmer zählen. Unter 5 Würmer pro Spatenstich = Boden braucht mehr organisches Material (Mulch, Kompost). Über 10 Würmer = ausgezeichnet.',
        sourceNote: 'LfL Bayern: Regenwurmpopulationen. Agrarheute: Regenwürmer bauen Humus. Universität Hohenheim: Regenwurmforschung. Hypersoil: Bodenbildung.',
      },
      {
        title: 'Tagetes gegen Nematoden: bewiesen vom Julius Kuhn-Institut',
        content: 'Die Nematoden-Wirkung von Tagetes (Studentenblumen) ist eine der am besten dokumentierten Garten-Techniken überhaupt. Das Julius Kühn-Institut (JKI, Bundesforschungsinstitut für Kulturpflanzen) hat den Wirkmechanismus detailliert erforscht und eine Reduktion wandernder Wurzelnematoden (Pratylenchus spp.) um bis zu 95% nachgewiesen.',
        details: [
          'WIRKMECHANISMUS (JKI): Tagetes-Wurzeln sondern Terthiophene (schwefelhaltige Verbindungen) ab, die Nematoden anlocken. Nematoden dringen in die Wurzel ein. Tagetes reagiert mit Peroxidase-Produktion + Schwefelverbindungen aus der Endodermis → Nematoden werden IN der Wurzel getötet. Genial: die Pflanze lockt den Schädling aktiv an und tötet ihn dann.',
          'WIRKSAMKEIT: Tagetes patula (niedrige Studentenblume) zeigt die beste Wirkung. Reduktion von Pratylenchus-Nematoden um bis zu 95% (JKI). 3 Monate Anbaudauer für optimale Wirkung (intensive Durchwurzelung nötig).',
          'ANWENDUNG: Tagetes als Vor- oder Nachkultur auf Beeten anbauen, die Nematoden-Probleme hatten (schwaches Wachstum trotz guter Versorgung, verkümmerte Wurzeln). 3 Monate wachsen lassen, dann einarbeiten. ODER: als Randbepflanzung zwischen Gemüsereihen (kontinuierliche Wirkung).',
          'EINSCHRÄNKUNG: Wirkt hauptsächlich gegen WANDERNDE Wurzelnematoden (Pratylenchus). Gegen ZYSTENBILDENDE Nematoden (Heterodera, Globodera bei Kartoffeln) ist die Wirkung geringer. Gegen Wurzelgallennematoden (Meloidogyne) ist Tagetes NICHT wirksam.',
          'BONUS: Tagetes lockt Schwebfliegen, Marienkäfer und andere Nützlinge an (Blüten). Optisch schön im Gemüsebeet.',
        ],
        tip: 'Universeller Tipp: Tagetes patula an den Rand jedes Gemüsebeetes pflanzen. Kostet 2 EUR Saatgut, reduziert Nematoden, lockt Nützlinge, und sieht gut aus. Win-win-win.',
        sourceNote: 'Julius Kühn-Institut (JKI): Tagetesanbau zur Bekämpfung von pflanzenparasitären Nematoden. Land&Forst: Nematoden-Bekämpfung mit Tagetes.',
      },
      {
        title: 'Pflanzenkohle / Terra Preta: vielversprechend aber nuanciert',
        content: 'Pflanzenkohle (Biochar) ist der Versuch, die legendäre Terra Preta (schwarze Erde) des Amazonas nachzubauen: Böden die vor 2000+ Jahren von indigenen Völkern mit Holzkohle, Kompost und Küchenabfällen angereichert wurden und bis heute extrem fruchtbar sind. Die Forschungslage ist vielversprechend aber nuanciert.',
        details: [
          'WAS IST ES: Pflanzenkohle ist Holz/Biomasse die unter Sauerstoffausschluss bei 400-700 °C verkohlt wird (Pyrolyse). Poröse Struktur (wie Schwamm), riesige Oberfläche (300-500 m2/g), sehr stabil (überdauert Jahrhunderte im Boden).',
          'BELEGTE VORTEILE (Meta-Analyse Schweiz, 37 Studien): Verfügbares Wasser im Boden +28%. Feldkapazität +20%. Besonders wirksam auf sandigen, nährstoffarmen Böden. CO2-Speicherung im Boden (Kohlenstoff bleibt Jahrhunderte stabil).',
          'EINSCHRÄNKUNGEN: Positive Ertragswirkung bisher hauptsächlich auf nährstoffarmen tropischen Böden nachgewiesen. Auf nährstoffreichen europäischen Böden (wie Tschernosem in Burgenland!) ist der Effekt GERINGER oder nicht nachweisbar. Schweizer Bundesamt für Umwelt (2026): Bisher keine Ertragssteigerung in der Schweizer Landwirtschaft nachgewiesen. Langzeiteffekte auf Bodenorganismen unklar.',
          'WICHTIG: Pflanzenkohle NIEMALS pur in den Boden einarbeiten! Unbeladene Kohle ENTZIEHT zunächst Nährstoffe aus dem Boden (Adsorption). IMMER zuerst "aufladen": Pflanzenkohle in Kompost einmischen (10% Volumenanteil), 4-8 Wochen kompostieren, DANN ausbringen.',
          'FÜR NÄHRSTOFFREICHE BÖDEN (z.B. Nordburgenland/NÖ): Die Böden im Osten Österreichs sind oft bereits fruchtbar und humusreich. Pflanzenkohle bringt hier WENIGER als auf armem Sandboden. Wenn du es probieren willst: 5-10% Pflanzenkohle in den Kompost mischen. Nicht als Wundermittel erwarten.',
        ],
        warning: 'Pflanzenkohle NIE pur auf Beete streuen! Unaufgeladene Kohle entzieht dem Boden zunächst Nährstoffe (Adsorption). Immer erst 4-8 Wochen in Kompost "aufladen" lassen. Und: auf bereits guten Böden (Tschernosem) ist der Effekt minimal.',
        sourceNote: 'Meta-Analyse Pflanzenkohle Schweiz (37 Studien): Wasserretention +28%. Naturefund: Biochar Studies. Schweizer BAFU 2026. FiBL Betriebsmittelliste: Pflanzenkohle gelistet.',
      },
      {
        title: 'Hügelkultur: Sepp Holzers Erbe',
        content: 'Hügelkultur ist eine Technik die vom österreichischen Permakultur-Pionier Sepp Holzer (Krameterhof, Lungau, 1100-1500 m Höhe) bekannt gemacht wurde. Prinzip: Holzstämme und Äste werden aufgeschichtet, mit Kompost und Erde bedeckt und bepflanzt. Das verrottende Holz speichert Wasser (wie ein Schwamm), gibt jahrelang Wärme und Nährstoffe frei, und vergrößert die Anbaufläche.',
        details: [
          'AUFBAU: Graben ausheben (30-50 cm). Baumstämme/dicke Äste reinlegen. Dünnere Äste darauf. Rasensoden (umgedreht). Halbfertiger Kompost. Reife Erde (15-20 cm). Ergebnis: 1-1,5 m hoher Hügel. Bepflanzen an den Seiten und oben.',
          'VORTEILE: Holz speichert Wasser wie ein Schwamm (nach 1-2 Jahren vollgesogen, gibt es langsam ab). Verrottung erzeugt Wärme (Mikroklima 2-3 °C wärmer als Umgebung). Vergrößert die Anbaufläche um 30-50% (Hügelform = mehr Oberfläche). 15-20 Jahre Nährstofflieferung durch langsame Holzverrottung.',
          'WISSENSCHAFTLICHE EINORDNUNG: BOKU Wien hat den Krameterhof 1995 besucht und als "Permakultur-Musterbetrieb" bestätigt. Quantitative Ertragsstudien zu Hügelkultur speziell sind jedoch rar. Die Einzelmechanismen (Wasserspeicherung in Totholz, Wärmefreisetzung durch Verrottung) sind wissenschaftlich belegt, die Kombination als "Hügelkultur" ist eher Erfahrungswissen als Laborwissenschaft.',
          'FÜR TROCKENE STANDORTE: Im trockenen pannonischen Klima könnte die Wasserspeicher-Funktion interessant sein. Ein Mini-Hügelbeet (1 x 3 m) als Experiment: dicker Ast-Kern, Kompost drauf, Kürbis oben, Salat an den Seiten.',
          'SEPP HOLZER: Betreibt den Krameterhof im Lungau (Salzburg) auf 1100-1500 m Höhe. Anbau von Steinobst, Gemüse und Getreide in Höhenlagen die das eigentlich nicht zulassen. Nutzt Mikroklima-Effekte (Teiche als Wärmespeicher, Felsreflektoren) um die Winterhärtezone zu verschieben. Seine Bücher: "Der Agrar-Rebell" (2002), "Sepp Holzers Permakultur" (2004).',
        ],
        sourceNote: 'BOKU Wien Besuch Krameterhof 1995. Sepp Holzer: Der Agrar-Rebell. Wikipedia: Holzer Permaculture.',
      },
      {
        title: 'Trap Cropping: Opferpflanzen als Schadlingsfallen',
        content: 'Trap Cropping ist eine wissenschaftlich belegte Technik: man pflanzt eine "Opferpflanze" die für den Schädling attraktiver ist als die Hauptkultur. Der Schädling konzentriert sich auf die Falle und lässt das Gemüse in Ruhe.',
        details: [
          'KAPUZINERKRESSE als Blattlaus-Falle: Kapuzinerkresse ist für Blattläuse attraktiver als fast jedes Gemüse. Am Rand des Gemüsebeetes pflanzen → Blattläuse gehen auf die Kapuzinerkresse statt auf Bohnen/Paprika. Bonus: Blüten + Blätter der Kapuzinerkresse sind essbar (pfeffrig wie Kresse).',
          'SENF/RAPS als Erdfloh-Falle: Erdflöhe bevorzugen Senf gegenüber Kohl/Radieschen. Senf-Reihe am Beetrand → Erdflöhe konzentrieren sich dort. Opferpflanze nach 3-4 Wochen entfernen (mitsamt Erdflöhen).',
          'TAGETES als Nematoden-Falle: (siehe oben) Lockt Nematoden aktiv an und tötet sie in der Wurzel. Bis zu 95% Reduktion (JKI).',
          'RINGELBLUME (Calendula) als Weisse-Fliege-Falle: Weiße Fliege bevorzugt Ringelblumen. Bonus: Ringelblumenblüten sind essbar und medizinisch verwendbar (Calendula-Salbe).',
          'Studien zeigen: Polykultur (viele verschiedene Pflanzen) reduziert Schädlingsdruck generell um 30-50% gegenüber Monokultur. Grund: Schädlinge finden ihre Wirtspflanze in einem "Dschungel" aus Düften schwerer als in einer reinen Reihe.',
        ],
        tip: 'Einfachster Einstieg: Kapuzinerkresse + Tagetes an den Rand jedes Gemüsebeetes. Beide sind essbar, beide schützen aktiv, beide locken Nützlinge an. Kosten: 3 EUR Saatgut.',
        sourceNote: 'ATTRA (National Center for Appropriate Technology): Companion Planting & Botanical Pesticides. Virginia Tech: Companion Planting in Gardening. Studie Marigold volatiles vs. aphids (2005).',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ANFÄNGER: DIE ERSTEN 12 MONATE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'erste-schritte',
    title: 'Dein erster Gemüsegarten: Schritt für Schritt',
    subtitle: 'Von null auf Ernte in 12 Monaten: was du wann tust, und was du NICHT tun solltest',
    color: '#22c55e',
    sourceIds: ['heistinger', 'kreuter', 'palme'],
    relatedArticles: ['anfaengerfehler', 'selbstversorgung', 'boden'],
    sections: [
      {
        title: 'Was du im ERSTEN Jahr brauchst (und was nicht)',
        content: 'Im ersten Jahr brauchst du weniger als du denkst. Kein Glashaus, keinen Traktor, keine 50 verschiedenen Samen. Du brauchst: einen Fleck Erde (3-10 m²), 5 Sorten Samen, Kompost, Wasser, und Geduld.',
        details: [
          'DU BRAUCHST: Spaten oder Grabegabel, Giesskanene (10 L), 5 Sorten Saatgut (Radieschen, Pflücksalat, Zucchini, Buschbohne, Krauter), 1 Sack Kompost (40 L), Stroh oder Rasenschnitt zum Mulchen. Gesamtkosten: 30-50 EUR.',
          'DU BRAUCHST NICHT (im ersten Jahr): Glashaus, Fruhbeet, Dünger (ausser Kompost), Pflanzenschutzmittel, 30 verschiedene Sorten, Hochbeet, teure Gerate, Bodenanalyse (es sei denn Verdacht auf Belastung).',
          'FLÄCHE: 3-5 m² für den Anfang. Das klingt klein, reicht aber fur: 1 Reihe Radieschen, 1 Reihe Salat, 2 Zucchini-Pflanzen, 1 Reihe Buschbohnen, 1 Ecke Krauter. Im zweiten Jahr erweitern.',
          'STANDORT: Die sonnigste Stelle die du hast (mind. 6 Std direkte Sonne). Nahe am Haus (du gehst ofter hin wenn es nicht weit ist). Wasseranschluss in der Nahe.',
          'BEET VORBEREITEN: (1) Rasen entfernen oder Pappe drauflegen, (2) Boden 20 cm tief lockern (Grabegabel, NICHT umgraben), (3) 3-5 cm Kompost aufstreuen und leicht einharken. Fertig.',
        ],
        tip: 'Die 5 anfängerfreundlichsten Kulturen (in dieser Reihenfolge): (1) Radieschen (4 Wochen, unkaputtbar), (2) Pflücksalat (6 Wochen, cut-and-come-again), (3) Zucchini (1 Pflanze = 20+ Früchte), (4) Buschbohnen (direkt saen, keine Rankhilfe), (5) Schnittlauch (pflanzen und vergessen). Damit hast du von Juni bis Oktober frisches Gemüse.',
      },
      {
        title: 'Monatsplan für Anfanger (Österreich, Zone 7)',
        content: 'Ein konkreter Plan für dein erstes Gartenjahr. Nur die einfachsten Kulturen, nur die wichtigsten Arbeiten.',
        details: [
          'MAERZ: Beet vorbereiten (lockern, Kompost). Radieschen + Salat direkt saen. Erbsen saen (optional).',
          'APRIL: 2. Satz Radieschen + Salat. Krauter pflanzen (Schnittlauch, Petersilie). Beet für Mai vorbereiten.',
          'MAI (AB 16.!): Zucchini-Jungpflanzen setzen (2 Stuck reichen!). Buschbohnen direkt saen. Tomate (Jungpflanze kaufen wenn keine Vorkultur).',
          'JUNI: Erste Ernte! Radieschen, Salat, Kraeuter. Gießen + Mulch aufbringen. Staffelaussaat: neuer Salat.',
          'JULI: Zucchini TAEGLICH ernten (15-20 cm!). Bohnen ernten. Tomaten ausgeizen. Gießen, Gießen, Gießen.',
          'AUGUST: Tomaten ernten! Zucchini ernten. Bohnen ernten. Feldsalat säen (für Herbst). Tomatensugo einkochen.',
          'SEPTEMBER: Letzte Tomaten, Bohnen, Zucchini. Feldsalat waechst. Beet raumen, Kompost aufsetzen.',
          'OKTOBER: Feldsalat ernten (bis in den Winter!). Beet mit Mulch/Grundungung bedecken. Knoblauch stecken.',
          'NOVEMBER-FEBRUAR: Feldsalat ernten wenn vorhanden. Saatgutkataloge studieren. Plan für nächstes Jahr.',
          'Arbeitsaufwand im Schnitt: 2-3 Stunden pro Woche im Sommer, 30 Min im Winter. Das ist machbar neben einem Vollzeitjob.',
        ],
        sourceNote: 'Basierend auf Heistinger: Handbuch Bio-Gemüse und Kreuter: Der Biogarten, vereinfacht für Einsteiger.',
      },
      {
        title: 'Ertragsplanung: wie viel erntet man pro m2?',
        content: 'Damit du realistisch planen kannst, hier die durchschnittlichen Erträge pro Quadratmeter für die wichtigsten Kulturen (Hausgarten-Niveau, nicht Profi-Anbau):',
        details: [
          'KARTOFFEL: 3-5 kg/m2 (Frühkartoffel weniger, Lagerkartoffel mehr). 10 m2 = 30-50 kg = 3-4 Monate Kartoffelversorgung für 2 Personen.',
          'TOMATE: 5-10 kg/m2 (bei 3-4 Pflanzen/m2 im Glashaus bis 15 kg/m2). 5 Pflanzen = 25-50 kg Tomaten = 20+ L Sugo.',
          'ZUCCHINI: 5-10 kg/Pflanze (!). 2 Pflanzen auf 2 m2 = 10-20 kg. Mehr als eine Familie essen kann.',
          'KÜRBIS: 5-15 kg/Pflanze. 2 Pflanzen auf 4 m2 = 10-30 kg. Hokkaido lagert 3-6 Monate.',
          'SALAT: 3-5 kg/m2 (Staffelaussaat: 4 Sätze pro Saison). 3 m2 = 10-15 kg = frischer Salat März-November.',
          'KAROTTE: 3-5 kg/m2. 5 m2 = 15-25 kg. In Sand gelagert bis März.',
          'ZWIEBEL: 2-4 kg/m2. 5 m2 = 10-20 kg. Luftig gelagert bis Februar.',
          'BOHNE (trocken): 200-400 g/m2 Trockengewicht. 10 m2 = 2-4 kg Trockenbohnen = Eiweiss für Monate.',
          'KOHL/KRAUT: 5-8 kg/Pflanze. 5 Pflanzen auf 5 m2 = 25-40 kg = 10+ L Sauerkraut.',
          'ROTE BETE: 2-3 kg/m2. 3 m2 = 6-9 kg. In Sand gelagert bis Februar.',
          'KNOBLAUCH: 0,5-1 kg/m2. 5 m2 = 2,5-5 kg. Geflochten hält er bis Frühling.',
          'ERDBEERE: 0,3-0,5 kg/Pflanze. 20 Pflanzen auf 4 m2 = 6-10 kg.',
          'ERTRAGSREGEL: 2-3 kg Gemüse pro m2 und Jahr ist ein guter Hausgarten-Durchschnitt. Bei intensivem Anbau (Staffelaussaat, Glashaus, guter Boden) sind 4-6 kg/m2 möglich.',
        ],
        tip: 'Planung für 2 Personen (Selbstversorgung Mai-Oktober + Einlagern für Winter): 20 m2 Kartoffeln + 10 m2 Starkzehrer (Tomate, Zucchini, Kürbis) + 10 m2 Wurzelgemüse (Karotten, Rote Bete, Zwiebeln) + 5 m2 Salat/Blattgemüse + 5 m2 Bohnen/Erbsen + 5 m2 Kräuter = 55 m2 Gesamtfläche.',
        sourceNote: 'Ertragsrechner fryd.app. Heistinger: Handbuch Bio-Gemüse. DGE Kalorienbedarf.',
      },
      {
        title: 'Die 5 besten Kulturen für ABSOLUTE Anfanger',
        content: 'Diese 5 Pflanzen sind fast unkaputtbar, ertragreich und zeigen schnell Erfolge. Starte damit und erweitere im zweiten Jahr.',
        details: [
          'NR 1: RADIESCHEN. Direktsaat, 4 Wochen bis Ernte. Kein Vorziehen, kein Umpflanzen. Einfach Samen in die Erde, feucht halten, ernten. Perfekt für Kinder und jeden, der schnelle Ergebnisse will. Risiko: nahezu null. Einziger Fehler: zu spaet ernten (dann holzig).',
          'NR 2: PFLUCKSALAT / BABY LEAF MIX. Direktsaat oder Jungpflanzen. 6 Wochen bis erste Ernte. Cut-and-come-again: aussere Blätter ernten, Herz waechst weiter. Wochenlange Ernte von einer Aussaat. Risiko: Schnecken (Schneckenzaun) und Hitze (schosst ab 25 C - im Schatten oder Fruehjahr/Herbst anbauen).',
          'NR 3: ZUCCHINI. 1-2 Jungpflanzen ab Mitte Mai setzen. Eine Pflanze liefert 15-25 Früchte uber 3 Monate. Extrem ertragreich. Braucht Platz (1 m²) und Wasser. Risiko: Mehltau im August (normal, Pflanze traegt trotzdem). TAEGLICH ernten bei 15-20 cm!',
          'NR 4: BUSCHBOHNEN. Direktsaat ab Mitte Mai (Frost = Tod, daher Eisheilige abwarten). Keine Rankhilfe noetig (anders als Stangenbohnen). Alle 2-3 Tage ernten. Verbessert den Boden (Stickstoff-Fixierer). Risiko: zu frueh saeen (Frost), zu spaet ernten (zaehe Hulsen).',
          'NR 5: SCHNITTLAUCH + BASILIKUM. Schnittlauch: einmal pflanzen, jahrelang ernten. Null Pflege. Basilikum: neben Tomaten, Triebspitzen ernten. Das Kraeuter-Duo für jeden Anfaenger. Risiko: Basilikum stirbt unter 10 C, Schnittlauch ist unkaputtbar.',
        ],
        tip: 'Wenn sogar diese 5 dir zu viel sind: Starte nur mit Radieschen und Schnittlauch. Radieschen geben dir den schnellen Erfolg (4 Wochen!), Schnittlauch den langfristigen (jahrelang). Naechstes Jahr erweiterst du um Salat und Zucchini.',
      },
    ],
  },
];

export const WIKI_ARTICLE_MAP = Object.fromEntries(WIKI_ARTICLES.map(a => [a.id, a]));

const IMG = 'images/slides/infografik-de/';
export const ARTICLE_IMAGES: Record<string, string> = {
  boden:                  IMG + 'infografik-de_bodenaufbau-schichten-querschnitt_mit-text.png',
  bewaesserung:           IMG + 'infografik-de_bewaesserung-tief-flach-vergleich_mit-text.png',
  kompost:                IMG + 'infografik-de_kompost-schwarzes-gold-haende_mit-text.png',
  duengung:               IMG + 'infografik-de_fundament-feuchtigkeit-mulch-kompost_mit-text.png',
  mulchen:                IMG + 'infografik-de_mulch-stroh-bedeckter-boden_mit-text.png',
  pflanzenschutz:         IMG + 'infografik-de_oesterreich-pflanzen-wiki-boden_mit-text.png',
  anzucht:                IMG + 'infografik-de_eisheilige-glashaus-nacht_mit-text.png',
  saatgut:                IMG + 'infografik-de_regionale-dna-heimische-pflanzen_mit-text.png',
  selbstversorgung:       IMG + 'infografik-de_gartenjahr-selbstversorgung-ziel_mit-text.png',
  konservierung:          IMG + 'infografik-de_winter-ernte-kreislauf-vorrat_mit-text.png',
  winteranbau:            IMG + 'infografik-de_saisonverlaengerung-glashaus-nebel_mit-text.png',
  obstanbau:              IMG + 'infografik-de_zonenplanung-beerenguerte-perimeter_mit-text.png',
  'fruchtfolge-plan':     IMG + 'infografik-de_fruchtfolge-4-jahre-kreis_mit-text.png',
  hochbeet:               IMG + 'infografik-de_hochbeet-lasagne-methode_mit-text.png',
  kraeuter:               IMG + 'infografik-de_kuechenhof-kraeuter-corten-beet_mit-text.png',
  mischkultur:            IMG + 'infografik-de_mischkultur-gute-nachbarn-tomaten_mit-text.png',
  permakultur:            IMG + 'infografik-de_permakultur-system-kreislauf-draufsicht_mit-text.png',
  klimawandel:            IMG + 'infografik-de_pannonischer-wechsel-traditionell-klimafit_mit-text.png',
  gruenduengung:          IMG + 'infografik-de_klimafitter-naturgarten-blumenwiese_mit-text.png',
  bodenanalyse:           IMG + 'infografik-de_pannonisches-prinzip-heatmap-oesterreich_mit-text.png',
  'hausmittel-duenger':   IMG + 'infografik-de_ertragsrechner-kalorien-korb_mit-text.png',
  unkraut:                IMG + 'infografik-de_klimafitter-naturgarten-zusammenfassung_mit-text.png',
  'garten-hacks':         IMG + 'infografik-de_garden-hub-app-tablet-ui_mit-text.png',
  anfaengerfehler:        IMG + 'infografik-de_garten-dialog-wiese-schaukel_mit-text.png',
  troubleshooting:        IMG + 'infografik-de_pannonisches-klima-verstehen_mit-text.png',
  vorratskalender:        IMG + 'infografik-de_gartenkalender-22-kulturen-jahrplan_mit-text.png',
  'wissenschaft-techniken': IMG + 'infografik-de_garden-wiki-wissenschaft-tablet_mit-text.png',
  'erste-schritte':       IMG + 'infografik-de_hochbeet-lasagne-methode_mit-text.png',
};
