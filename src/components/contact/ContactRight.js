import React from 'react';
import { useState } from 'react';

const ContactRight = () => {

    const [username, setusername] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
  
    const emailValidation = () => {
      return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
  
    const handleSend = (e) => {
      e.preventDefault();
      if (username === "") {
        setErrMsg("Username is required!");
      } else if (phonenumber === "") {
        setErrMsg("Phone Number is required!");
      } else if (email === "") {
        setErrMsg("please give your Email!");
      } else if (!emailValidation(email)) {
        setErrMsg("Give a valid email!");
      } else if (subject === "") {
        setErrMsg("please give your subject!");
      } else if (message === "") {
        setErrMsg("message is required");
      } else {
        setSuccessMsg(
          `Thank you dear ${username}, your message has been sent Successfully`
        );
        setErrMsg("");
        setusername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
  
        console.log(username, phonenumber, email, subject, message);
      }
    };
  return (
    <div className="w-[60%] h-full py-10 p-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 rounded-shadow-shadowOne">
    <form className="w-full flex flex-col gap-6 py-4">
      {errMsg && (
        <p
          className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
       shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce"
        >
          {errMsg}
        </p>
      )}
      {successMsg && (
        <p
          className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
      shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce"
        >
          {successMsg}
        </p>
      )}
      <div className="w-full flex gap-10">
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Your Name
          </p>
          <input
            onChange={(e) => setusername(e.target.value)}
            value={username}
            className={`${
              errMsg === "Username is required!" &&
              "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            phone number
          </p>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phonenumber}
            className={`${
              errMsg === "Phone Number is required!" &&
              "outline-designColor"
            } contactInput`}
            type="number"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">
          Email
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`${
            (errMsg === "please give your Email!") |
              "Give a valid email!" && "outline-designColor"
          } contactInput`}
          type="email"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">
          Subject
        </p>
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className={`${
            errMsg === "please give your subject!" &&
            "outline-designColor"
          } contactInput`}
          type="text"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">
          Message
        </p>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={`${
            errMsg === "message is required" && "outline-designolor"
          } contactTextArea`}
          cols="30"
          rows="8"
        ></textarea>
      </div>
      <div>
        <button
          onClick={handleSend}
          className="w-full h-12 rounded-lg text-base border-b-gray-400
          bg-[#141518] tracking-wider uppercase  hover:text- white duration-300 
          hover:border-[1px] hover:border-designColor border-transparent"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  )
}

export default ContactRight
