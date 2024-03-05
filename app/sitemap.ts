import { MetadataRoute } from 'next';
import {projects} from "@/app/utils/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = "https://konstantin-lukas.de";
    const projekte = projects.map((p, i) => {
        const priority =
            Math.floor(
                10 * (((((projects.length - i) / projects.length) + (projects.length - 1)) / projects.length) - 0.2)
            ) / 10;
        return {
            url: domain + "/" + encodeURIComponent(p.name.toLowerCase().replaceAll(' ', '-')),
            lastModified: new Date(),
            priority
        }
    });
    return [
        {
            url: domain,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: domain + "/projekte",
            lastModified: new Date(),
            priority: 0.9,
        },
        ...projekte
    ]
}