import { getNote } from "@/lib/helper";
import Link from "next/link";

export default async function NoteDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = getNote(id);

  if (!note)
    return (
      <div>
        <Link href="/" className="text-blue-600">
          Back to home page
        </Link>
        <h3 className="mt-4">Note not found</h3>
      </div>
    );

  return (
    <div>
      <Link href="/" className="text-blue-600">
        Back to home page
      </Link>
      <div className="flex justify-between mt-10 mb-2">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          My Note Details
        </h1>
      </div>
      <div className="flex flex-col w-full min-w-lg bg-white shadow-lg rounded-2xl p-6">
        <div key={note.id} className="flex justify-between p-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
              {note.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {note.content}
            </p>
            <span className="text-xs text-gray-400 mt-2 block">
              {new Date(note.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
