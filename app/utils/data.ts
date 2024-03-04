import {Context} from "@/app/utils/types";

export const projects = [
    {
        name: "Nox",
        year: 2020,
        context: "Ausbildung" as Context,
        about:
            "Nox ist eine junge Metal-Band aus Berlin. " +
            "Ich habe ihr Logo gestaltet und ihren Webauftritt implementiert. " +
            "Das Ganze ist durch eine MySQL-Datenbank gestützt, die es der Band möglich macht, " +
            "die Seite über das von mir geschriebene CMS stets aktuell zu halten.",
        tech: ["PHP", "HTML", "CSS", "JavaScript"],
        work: ["Content Management System", "User Interface & Design", "Backend", "Frontend", "Band-Logo"],
        links: [
            {
                text: "besuchen.",
                url: "https://nox-band.com/"
            }
        ]
    },{
        name: "Currency Input",
        year: 2021,
        context: "Hobbyprojekt" as Context,
        about:
            "Hierbei handelt es sich um eine in TypeScript geschriebene Library, " +
            "die sich an einen normalen Text-Input hängt und diesen so manipuliert, " +
            "dass immer ein korrekt formattierter Währungsstring angezeigt wird.",
        tech: ["TypeScript", "Rollup", "Jest"],
        work: ["Projektsetup", "Library-Logik", "Testing"],
        links: [
            {
                text: "GitHub.",
                url: "https://github.com/konstantin-lukas/intl-currency-input"
            }
        ]
    },{
        name: "Oslo",
        year: 2020,
        context: "Hobbyprojekt" as Context,
        about:
            "Oslo ist eine Electron-App für die persönliche Finanzverwaltung. " +
            "Ursprünglich habe ich dieses Programm in Python geschrieben, " +
            "später allerdings dann neu als Electron-App aufgesetzt und " +
            "dann nochmals später mit Electron und React implementiert.",
        tech: ["Electron", "React", "SCSS", "TypeScript", "SQLite"],
        work: ["UI/UX", "Programmlogik", "Logos & Piktogramme"],
        links: [
            {
                text: "GitHub.",
                url: "https://github.com/konstantin-lukas/oslo"
            }
        ]
    },{
        name: "Verdicare",
        year: 2023,
        context: "Übungsprojekt" as Context,
        about:
            "Verdicare ist ein kleines Übungsprojekt von mir um React zu lernen. " +
            "Dazu kommt ein Express Backend, das die Webseite liefert, " +
            "aber ansonsten hauptsächlich aus einer API besteht. " +
            "Der Inhalt wiederum basiert auf der Perenual API und dieser wird mithilfe der DeepL API übersetzt.",
        tech: ["React", "Express.js", "HTML", "Sass", "TypeScript", "Jest"],
        work: ["Gestaltung und Konzeption", "Backend", "Frontend", "Testing"],
        links: [
            {
                text: "GitHub.",
                url: "https://github.com/konstantin-lukas/verdicare"
            }
        ]
    },{
        name: "Untitled Ghost Game",
        year: 2023,
        context: "Freizeit & Uni" as Context,
        about: "Das hier ist ein kleines Spiel in dem man Geister mit seiner Taschenlampe bekämpft. " +
            "Wobei das Wort \"klein\" nicht ganz zutrifft, denn das Spiel ist ohne ein richtiges " +
            "Framework nur mit der SDL-Library entwickelt und der Source-Code ist ziemlich umfangreich. " +
            "Da ich allerdings noch nicht weiß, ob ich das Projekt noch mal aufnehmen werde, " +
            "ist der Source-Code nicht offen verfügbar.",
        tech: ["C++", "SDL2", "CMake", "Google Test"],
        work: ["Pixelart und Animation", "Spielelogik", "SFX (teilweise)"],
        links: [
            {
                text: "demo video.",
                url: "/videos/untitled_ghost_game.mp4"
            }
        ]
    }
];