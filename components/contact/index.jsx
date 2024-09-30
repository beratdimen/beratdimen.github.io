"use client";
import { ContactAction } from "@/action/contact";
import "@/components/contact/contact.css";
import { useFormState } from "react-dom";

export default function Contact() {
  const [state, action] = useFormState(ContactAction, null);
  return (
    <div className="contactContainer">
      <h1>Contact</h1>
      <form action={action}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Entry Your Name"
            name="name"
            id="name"
          />
        </label>
        {state?.errors?.name && <p>{state?.errors?.name}</p>}

        <label htmlFor="">
          <input
            type="text"
            placeholder="Entry Your Surname"
            name="surname"
            id="surname"
          />
        </label>
        {state?.errors?.surname && <p>{state?.errors?.surname}</p>}

        <label htmlFor="">
          <input
            type="number"
            placeholder="Entry Your Phone Number"
            name="phone"
            id="phone"
          />
        </label>
        {state?.errors?.phone && <p>{state?.errors?.phone}</p>}

        <label htmlFor="">
          <textarea
            placeholder="Entry Your Message"
            name="message"
            id="message"
          />
        </label>
        {state?.errors?.message && <p>{state?.errors?.message}</p>}

        <button>Send</button>
      </form>
    </div>
  );
}
