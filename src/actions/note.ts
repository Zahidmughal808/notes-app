"use server";

import { revalidatePath } from "next/cache";
import { addNote, deleteNote } from "@/lib/helper";

export async function createNote(formData:FormData) {
 const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  addNote(title, content);
  revalidatePath("/");
}

export async function removeNote(id:string) {
  deleteNote(id);
  revalidatePath("/");
}