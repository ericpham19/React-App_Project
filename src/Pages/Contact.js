import React from "react";

const Contact = () => {
  return (
    <div className= " flex grid  place-items-center border border-solid border-black-200 mt-40 pb-60 pt-40" style= {{backgroundImage: `url("https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`}}>
      <div className="border border-solid pl-10 pr-10 pb-5">
        <h1 className="text-center text-red-600 font-bold mt-2 ">Contact Form</h1>
      <form className="flex grid gap-5 " method="post" action="http://localhost:3000/users">
        <label className= "text-red-600 font-bold">
          Name
          <input className= "border border-solid border-red-200 mt-10 ml-4 focus:ring-2" type="text" name="name" id="name" />
        </label>
        <label className= "text-red-600 font-bold">
          Email
          <input className= "border border-solid border-red-200  ml-5 focus:ring-2" type="email" name="email" id="email" />
        </label>
        <label className= "text-red-600 font-bold">
         Anything you like about the app?
          <textarea className="border block  border-solid border-red-200 ml-16 focus:ring-2" type="text" name="message" id="subject" rows="3" />
        </label>
        <label className= "text-red-600 font-bold">
          How can I improve this app?
          <textarea className= "border block ml-16 border-solid border-red-200 focus:ring-2" name="feedback" id="feedback" rows="3" />
        </label>
        <button className= "border border-solid border-red-200 focus:ring-2 text-red-600"type="submit">Send</button>
        <input className= "border border-solid border-red-200 text-red-600" type="reset" value="Clear" />
      </form>
      </div>
      
    </div>
  );
};

export default Contact;
