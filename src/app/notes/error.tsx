'use client';

import { useEffect } from "react";

export default function NotesError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-full py-10 gap-4">
      <p className="text-red-500 text-lg">
        Something went wrong while loading notes.
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}