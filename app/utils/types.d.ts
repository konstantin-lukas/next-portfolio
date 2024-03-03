export type Context = "Hobbyprojekt" | "Ausbildung" | "Übungsprojekt";

export type ProjectBrief = {
    name: string,
    year: number,
    context: Context
}