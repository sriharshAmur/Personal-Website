import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Submit");
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = () => {
    let err = {};
    if (name === "") {
      err.name = "!!! Name is required.";
    }
    if (email === "") {
      err.email = "!!! Email is required.";
    }
    if (message === "") {
      err.message = "!!! Message is required.";
    }
    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }

    const data = {
      name,
      email,
      message,
    };
    const url = import.meta.env.PUBLIC_FORMBOLD_URL;
    axios({
      method: "POST",
      url: url,
      data: data,
    })
      .then((r) => {
        setStatus("Sent");
      })
      .catch((r) => {
        console.log("error");
      });
  };

  const Form = () => {
    return (
      <form
        onSubmit={onSubmit}
        className="flex flex-col h-full justify-between"
      >
        <input
          className="w-full bg-[#212121] text-white p-2 pl-0 border-b-2 border-white outline-0 my-4"
          placeholder="Your Name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError((err) => {
              err.name = "";
              return err;
            });
          }}
          required
        />
        {error.name && <p className="text-red-500">{error.name}</p>}
        <input
          className="w-full bg-[#212121] text-white p-2 pl-0 border-b-2 border-white outline-0 my-4"
          placeholder="Your Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError((err) => {
              err.email = "";
              return err;
            });
          }}
          required
        />
        {error.email && <p className="text-red-500">{error.email}</p>}
        <textarea
          className="w-full bg-[#212121] text-white p-2 pl-0 border-b-2 border-white outline-0 my-4"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError((err) => {
              err.message = "";
              return err;
            });
          }}
          required
        ></textarea>
        {error.message && <p className="text-red-500">{error.message}</p>}
        <submit
          onClick={() => onSubmit()}
          type="submit"
          className="border-2 border-white text-white w-fit ml-auto px-4 py-2 cursor-pointer hover:text-black hover:bg-white"
        >
          {status}
        </submit>
      </form>
    );
  };
  return (
    <div className="flex-1  py-6 px-10 bg-[#212121] mt-8 md:mt-0 text-white">
      {status === "Sent" ? (
        <div className="h-full grid place-items-center">
          Your Message has been Received.
        </div>
      ) : (
        <Form />
      )}
    </div>
  );
}
