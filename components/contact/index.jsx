"use client";
import { ContactAction } from "@/action/contact";
import "@/components/contact/contact.css";
import { useFormState } from "react-dom";

export default function Contact() {
  const [state, action] = useFormState(ContactAction, null);
  return (
    <div className="contactContainer">
      <div className="contactMe">
        <h1>Detail</h1>
        <p>
          I would be delighted to assist you with my experience and expertise.
          If you’d like to collaborate on your projects, exchange ideas, or have
          any questions, please feel free to reach out to me. Together, we can
          find creative solutions and take steps toward success.
        </p>
        <div className="contactMeFooter">
          <div className="contactMeFooterDetail">
            <h5>Address</h5>
            <p>İstabul/Turkey</p>
          </div>
          <div className="contactMeFooterDetail">
            <h5>Phone</h5>
            <a href="">+90 999 999 9999</a>
          </div>
          <div className="contactMeFooterDetail">
            <h5>Email</h5>
            <a href="mailto:beratefedimen@hotmail.com">
              beratefedimen@hotmail.comm
            </a>
          </div>
        </div>
      </div>

      <div className="form">
        <h2>GET IN TOUCH</h2>

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
    </div>
  );
}
