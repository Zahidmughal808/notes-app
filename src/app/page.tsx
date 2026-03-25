import AddNoteForm from "@/components/addNoteForm";
import Notes from "@/app/notes/page";
import { getNotes } from "@/lib/helper";

//export const revalidate = 30;
export const dynamic = "force-dynamic";

export default function Home() {
  const notes = getNotes() || [];

  if (!notes || notes.length === 0) {
  return <p>No notes found</p>;
}

  return (
    <div className="flex flex-col">
      <AddNoteForm />
      <Notes notes={notes} />
    </div>
  );
}
