"use client";

import Link from "next/link";
import { removeNote } from "@/actions/note";
import { useRouter } from "next/navigation";

export default function Notes({ notes }: any) {
  const router = useRouter();

  if (!notes || notes.length === 0) {
    return <p>No notes found</p>;
  }

  const handleDelete = async (id: string) => {
    await removeNote(id);
    router.refresh();
  };

  return (
    <div className="min-h-screen min-w-lg flex justify-center pt-8 px-4">
      <div className="w-full bg-white shadow-lg rounded-2xl p-6 max-h-[550px] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">My Notes</h1>
        </div>
        <div className="flex flex-col gap-4">
          {notes.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p className="text-lg font-medium">No notes available</p>
              <p className="text-sm mt-1">Try adding a new note</p>
            </div>
          ) : (
            notes.map((note: any) => (
              <div
                key={note.id}
                className="flex justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition"
              >
                <div className="flex flex-col">
                  <Link href={`/notes/${note.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                      {note.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {note.content}
                  </p>
                  <span className="text-xs text-gray-400 mt-2 block">
                    {new Date(note.createdAt).toLocaleString()}
                  </span>
                </div>
                <button
                  title="Delete Note"
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-700 text-white text-xs px-3 py-1 cursor-pointer rounded-md hover:bg-red-600 transition h-fit self-start"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
