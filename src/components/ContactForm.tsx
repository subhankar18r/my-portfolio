"use client";

import { useState, useRef } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    formData.append("access_key", "16caa7da-a055-4b43-be3a-a09f5a585650");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", { duration: 3000 });
      } else {
        toast.error(
          "Failed to send message. Please try other ways to contact.",
          { duration: 5000 }
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try other ways to contact.", {
        duration: 5000,
      });
    } finally {
      form.reset(); // ✅ Reset form here
      setLoading(false);
    }
  }

  return (
    <div className="right w-full rounded-lg shadow-md md:w-1/2">
      <h3 className="mt-2 mb-4 text-xl font-semibold text-gray-200">
        Or just leave me a message..
      </h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
        noValidate
      >
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-gray-200"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-500 py-2 text-white transition hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
