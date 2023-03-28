import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-800 h-screen flex flex-col items-center justify-center"
    >
      <div className="w-[80%] flex flex-col items-center">
        <h1 className="mb-[5rem] text-4xl text-center text-white">Contact</h1>
        <h2 className="text-2xl text-center text-white mb-4">Send me a direct message!</h2>
        <form action="https://getform.io/f/2bce8a6b-4a81-44de-95ed-0d62adfea293" method="POST" encType="multipart/form-data">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 form-container">
              <input
                type="text"
                name="name"
                className="uppercase p-3 border-2 rounded-lg border-gray-400"
                placeholder="Name"
                required
              />
              <input
                type="text"
                name="phone"
                className="uppercase p-3 border-2 rounded-lg border-gray-400"
                placeholder="Phone"
              />
            </div>
            <input
              type="email"
              name="email"
              className="uppercase w-full p-3 border-2 rounded-lg border-gray-400"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              className="uppercase w-full p-3 border-2 rounded-lg border-gray-400"
              placeholder="Subject"
            />
            <textarea
              name="email-body"
              rows="5"
              className="w-full p-3 border-2 rounded-lg border-gray-400"
              placeholder="Let's connect!"
              required
            ></textarea>
            <div>
              <button type="submit" className="w-full py-3 bg-cyan-700 rounded-md text-white text-lg send-btn">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
