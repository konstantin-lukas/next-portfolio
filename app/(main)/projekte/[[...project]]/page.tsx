import Projects from "./page.client";
import type {Metadata} from "next";
import {projects} from "@/app/utils/data";

export async function generateMetadata({params}: {
    params: { project: string }
}): Promise<Metadata> {
    let projectName = decodeURIComponent(params.project);
    let projectDescription;
    const project = projects.find(
        x => x.name.toLowerCase().replaceAll(' ', '-') === projectName
    );
    if (project) {
        projectName = project.name;
        projectDescription = project.about;
    } else {
        projectName = "Projekte";
        projectDescription =
            "Hier findest du einige meiner Programmierprojekte aus meiner Ausbildung, Freizeit oder Unizeit.";
    }

    return {
        title: projectName + " | Konstantin Lukas",
        description: projectDescription
    }
}

export default function Page() {
    return (
        <Projects/>
    )
}