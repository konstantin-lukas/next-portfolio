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

export const languages = [
    {
        id: "german",
        name: "deutsch",
        text: "Ich habe sehr viele breitgefächerte Interessen. " +
            "Die meisten davon involvieren in irgendeiner Form, neue Sachen zu lernen. " +
            "Lernen nimmt in meinem Leben einen super wichtigen Platz ein. Angefangen hat das 2015, " +
            "als ich zum ersten mal selbstständig eine Sprache gelernt habe. Heute könnte ich mir gar " +
            "nicht mehr vorstellen, wie es wäre, keine neuen Sprachen mehr zu lernen. Sprachen öffnen " +
            "einfach unglaublich viele Türen. Das meine ich jetzt nicht unbedingt beruflich, sondern eher " +
            "auf einer persönlichen Ebene. Es gibt Dinge auf dieser Welt, die man nur erleben und richtig verstehen kann, " +
            "wenn man eine bestimmte Sprache spricht. Mit jeder neuen Sprache, die man lernt, fängt man ein bisschen ein " +
            "neues Leben an und wird Teil einer Sprachgemeinschaft mit eigener Kultur, Denkenweise und das macht einfach " +
            "unglaublich viel Spaß.",
        level: "Muttersprache"
    },{
        id: "english",
        name: "englisch",
        text: "English is an incredibly important language for me. It's such a versatile but fun tool and " +
            "I've always had a fascination for the English-speaking world. I even remember I turned on the " +
            "BBC once when I was still in kindergarten. I didn't understand anything, of course, but I think " +
            "I wanted to pretend I did, and so wanting to speak English from an early age, I also started watching " +
            "a lot of American sitcoms. The language input I got from that made me speak English on a fairly high " +
            "level and my skills only improved since because I started using English in everyday life. " +
            "Speaking English is also what gave me the confidence to learn Japanese because I thought to myself " +
            "'Well, I have done it before. I have learnt English, so why wouldn't I be able to learn Japanese?' " +
            "And that really changed my life because I realized there's no excuse not learn something if you want " +
            "to learn it. That's what lead to all my other hobbies and many decisions in my life. I'm just really " +
            "happy everything happened the way it did.",
        level: "C2 (zertifiziert)",
        link: "https://www.cambridgeenglish.org/de/exams-and-tests/proficiency/"
    },{
        id: "japanese",
        name: "japanisch",
        text: "日本語を学習するのは、２０１５年末以来です。しかし、「なぜ日本に興味を持ってきた？」と聞かれても、" +
            "どう返事すればいいか分かりません。確かに、ずっと前からアニメ文化などに興味を持っていましたが、" +
            "どんなきっかけで日本語を学びたくなったかは分かりません。それは、新年の抱負でもなんでもなかったです。" +
            "ただやろうと思っただけです。でも、やってよかったです。とても素晴らしい文化を探検することができました。" +
            "音楽でも、映画でも、食事でも、まるで別世界を見つけたような感じです。私が語学学習に興味を持つようになったのも、" +
            "そのおかげです。それに、十分な努力さえあれば、何でも達成できるということがわかりました。従って、人生が大きく変化しました。" +
            "もっと積極的になったり、新しい興味ができたりしました。一言でいうと、いろいろ成長することができました。" +
            "ちゃんとした能力試験はまだ受けていませんが、機会があれば、JLPT N1（日本語能力試験）に挑戦したいと思います。",
        level: "C1 (geschätzt)"
    },{
        id: "spanish",
        name: "spanisch",
        text: "En 2018, después de haber aprendido japonés por 3 años, estaba preguntándome cuál sería " +
            "el próximo idioma a aprender. Dado que el japonés es bastante difícil, o sea que se necesita " +
            "muchísimo tiempo para aprenderlo, me apetecía un idioma más fácil. Así que, eché un vistazo a los " +
            "idiomas hablados en Europa. Al final me decidí por el español por la cantidad de gente que lo habla. " +
            "Y desde entonces, he tomado un gran interés en los programas de televisión de habla española, incluso " +
            "hasta el punto de pensar que quiero aprender el español a un nivel avanzado. Y por eso, a largo plazo, " +
            "mi meta principal es dar el examen DELE. Aunque supongo que no hay por qué darse prisa. Al fin y al cabo, " +
            "lo hago porque es divertido y no porque tenga que hacerlo.",
        level: "B2/C1 (geschätzt)"
    },{
        id: "french",
        name: "französisch",
        text: "Bien, le français, c'est en faite la langue que je parle le moins et je crois que ça changera pas. " +
            "La raison pour ça, c'est pas que j'aime pas le français - je l'aime bien - non, c'est plutôt parce que, " +
            "en ce moment, j'ai pas vraiment envie de l'apprendre jusqu'au même niveau que les autres langues que je parle. " +
            "Je pense qu'il y a un nombre maximum de langues qu'on peut parler à un niveau quasi natif. " +
            "Et c'est pour ça, que je voudrais plutôt me concentrer sur les autres langues que je parle. " +
            "Même si je l'aime bien, j'ai pas vraiment de connexion aussi forte avec le français, donc je vois pas " +
            "l'interêt d'investir du temps pour l'apprendre à un niveau avancé. Après tout, il faut investir une énorme " +
            "quantité de temps pour apprendre une langue à un niveau comparable à celui d'un natif. Pour faire court, " +
            "j'aime le français mais, pour l'instant, il me motive pas.",
        level: "B1 (geschätzt)"
    }
];