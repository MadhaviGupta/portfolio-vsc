import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
export default function Contact() {
  return (
    <div className="pl-80 pt-20">
      <div className="flex justify-center">
        <form
          action="https://getform.io/f/b5fb0d9b-5cdd-4b28-8fed-7d9dd0d5f188"
          method="POST"
          className="bg-slate-200 px-6 py-4 rounded-md w-96 text-blue-900"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="flex my-2">
              <AiOutlineUser className="m-1" />
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="rounded-md p-2 mb-2 w-full border-2 border-slate-300 bg-white focus:border-blue-900"
            />
            <label htmlFor="name" className="flex my-2">
              <AiOutlineMail className="m-1" />
              Your Email
            </label>
            <input
              type="email"
              name="email"
              className="rounded-md p-2 mb-2 border-2 border-slate-300 bg-white "
            />
            <label htmlFor="name" className="flex my-2">
              <AiOutlineMessage className="m-1" />
              Message
            </label>
            <textarea
              rows={7}
              name="message"
              className="rounded-md p-2 mb-1 border-2 border-slate-300 bg-white"
            />
          </div>
          <div className="flex justify-center m-3">
            <button
              type="submit"
              className="bg-[#121c2b] p-3 rounded-lg text-white hover:text-slate-300 hover:shadow-md hover:shadow-slate-500 transition-all duration-500 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
