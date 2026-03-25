import AddNoteForm from "@/components/addNoteForm";
import Notes from "@/app/notes/page";
import { getNotes } from "@/lib/helper";

export const revalidate = 30;

export default function Home() {
  const notes = getNotes() || [];

  return (
    <div className="flex flex-col">
      <AddNoteForm />
      <Notes notes={notes} />
    </div>
  );
}
