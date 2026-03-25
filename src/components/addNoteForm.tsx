"use client";

import { useState } from "react";
import { createNote } from "@/actions/note";

export default function AddNoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    try {
      await createNote(formData);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Failed to add note:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:gap-4">
        <div className="flex flex-col w-full">
          <label className="text-left font-semibold text-blue-950">Title</label>
          <input
            name="title"
            className="no-border bg-gray-200 p-2 rounded mt-1"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-left font-semibold text-blue-950">Content</label>
          <textarea
            name="content"
            className="no-border bg-gray-200 p-2 rounded mt-1"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`bg-green-700 text-xs text-white px-2 py-2 rounded-lg transition ${
              !isFormValid || isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "cursor-pointer hover:bg-green-500"
            }`}
            title="Add New Note"
          >
            {isSubmitting ? "Adding..." : "+ New Note"}
          </button>
        </div>
      </div>
    </form>
  );
}
