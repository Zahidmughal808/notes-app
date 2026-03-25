import { notes } from "@/lib/mock-data/notes";
import { INote } from "../types/note";
import { v4 as uuidv4 } from "uuid";

export function getNotes(): INote[] {
  return notes ?? [];
}

export function getNote(id: string) {
  return notes?.find((note) => note.id === id) || null
}

export function addNote(title: string, content: string): INote {
  const newNote: INote = {
    id: uuidv4(),
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  notes.unshift(newNote);
  return newNote;
}

export function deleteNote(id: string) {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
  }
}