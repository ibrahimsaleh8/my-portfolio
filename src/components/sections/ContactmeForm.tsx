"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Spinner } from "../ui/spinner";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function ContactmeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_KEY ?? "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Message has been sent");
    }
    setLoading(false);
    setMessage("");
    setEmail("");
    setName("");
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name-input">Name:</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          id="name-input"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email-input">Email:</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email-input"
          value={email}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message-input">Message:</Label>
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          required
          id="message-input"
          className="h-40"
          value={message}
          placeholder="Type your message here."
        />
      </div>

      <Button disabled={loading} className="w-32 flex items-center gap-1">
        {loading ? (
          <>
            <Spinner />
            Sending...
          </>
        ) : (
          "Send"
        )}
      </Button>
      <Toaster />
    </form>
  );
}
