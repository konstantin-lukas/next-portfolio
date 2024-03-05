import type { Metadata } from "next";
import {josefinSans} from './fonts';
import "./globals.scss";
import {ReactNode} from "react";
import Menu from "@/app/shared/Menu";


export const metadata: Metadata = {
  title: "Konstantin Lukas | Full-Stack Developer",
  description:
      "Ich bin Konstantin Lukas, ausgebildeter Mediengestalter Digital & Print " +
      "sowie Informatik-Student an der HU zu Berlin",
  keywords:
      "Konstantin Lukas, Konstantin, Lukas, Constantin, Lukas Mediengestalter, " +
      "Full-Stack Developer, Entwickler, Next.js, React, TypeScript, Python, C++, C/C++, " +
      "HTML, CSS, PHP, JavaScript, JS, AJAX, XML, JSON, SQL, Sprachen, Languages, Idiomas, " +
      "Mediengestaltung, Media Design, Diseño de Medios, Mediengestalter Digital & Print, " +
      "Digital, Print, Media, Artificial Intelligence, AI, KI, Photoshop, InDesign, Illustrator, " +
      "Adobe, Kameras, Cameras, Fotografie, Photography, Grafikdesign, Vektor, Pixel, Drucker, SEO, " +
      "Vanilla, Cookies, Session, Zalando, Studios, Web Development, Front-End, Back-End, Portfolio",
  authors: [
    { name: "Konstantin Lukas", url: "konstantin-lukas.de" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Menu/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
