import { INote } from "@/lib/types/note";
import { v4 as uuidv4 } from "uuid";

export const notes: INote[] = [
  {
    id: uuidv4(),
    title: "First Note",
    content: "This is the first note",
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: "Second Note",
    content: "This is the second note",
    createdAt: new Date().toISOString(),
  },
];