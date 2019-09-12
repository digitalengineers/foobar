# Motivation
Mobile App für die Ad-hoc-Organisation von Gesprächsrunden auf Konferenzen/Veranstaltungen jeglicher Art.  
Die Gesprächsrunden sollen von den Teilnehmern seber erzeugt und zeitlich und räumlich organisiert werden können.

# Anwendungsfälle
1. Zuordnen von Tags zu Positionen  
Hierbei geht es um die ggf. räumliche Zuordnung der Raumbezeichnungen, wenn sie auf einem Plan angezeigt werden sollen. Ohne Plan ist eine Benennung ausreichend.
1. Registrieren von Teilnehmern  
Suchen oder Erfassen der Daten für Teilnehmer, ggf. Zuordnen zu der Veranstaltung
1. Definition eines Themas  
Erfassen eines Themas mit Verantwortlichen zu einer Veranstaltung, evtl. Zuordnung von Zeit und Ort
1. Voting für Themen  
Für eine bessere Raumzuordnung, Ermittlung des Interesses/potentiellen Teilnehmer
1. Starten eines Themas  
Für Ad-hoc-Themen oder zeitlich nicht definierten Themen kann das Thema gestartet werden, hierzu sollte auch ein Ort festgelegt worden sein.
1. Erstellen von Tags  
Eine Möglichkeit QR- oder NFC-Tags zu schreiben. Voraussichtlich in Klartext, um auch die einfache textuelle Zuordnung von Orten vornehmen zu können.

# Daten
Grobe Dartsellung der benötigten Informationen.
## Veranstaltung
ist möglicherweise nicht notwendig
- Name
- Beschreibung
- Termin
- Teilnehmer[]
- Themen[]
- Orte[]
## Teilnehmer
- Name
- Vorname
- Orga ?Ist Orga ein extra Typ?  
...
## Thema
- Titel
- Beschreibung
- Stichworte[]
- Verantwortlicher[]
- Teilnehmer[]
- Ort
- Beginn
- Ende
## Ort
- Name

# Sichten
- Liste der aktuellen Themen  
Eine Sortierung/Gruppierung nach
  - Zeit
  - Stichwort
  - Ort
- Detailansicht Teilnehmers  
  - Name, Vorname, ...
  - Themen (Verantwortlicher)
  - Themen (Teilnehmer)
- Login
- Impressum
- Neues Thema
- Detailansicht Thema