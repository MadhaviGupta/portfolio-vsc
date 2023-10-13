import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
export default function Contact() {
  return (
    <div className="pt-20 md:pl-80 pl-20 text-textPrimary">
      <div className="md:text-2xl text-lg font-bold flex md:m-6 m-3">
        Any feedback or question?
        <br /> Leave a message.
      </div>
      <div className="flex justify-start md:ml-6 ml-2">
        <form
          action="https://getform.io/f/b5fb0d9b-5cdd-4b28-8fed-7d9dd0d5f188"
          method="POST"
          className="bg-[#1a1c22] md:px-6 md:py-3 px-4 py-2 rounded-md md:w-96 w-80"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="flex my-2">
              <AiOutlineUser className="m-1" />
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="rounded-md p-2 mb-2 w-full border-2 border-bgPrimary bg-bgPrimary focus:border-[#fa6c5f] outline-none"
            />
            <label htmlFor="name" className="flex my-2">
              <AiOutlineMail className="m-1" />
              Your Email
            </label>
            <input
              type="email"
              name="email"
              className="rounded-md p-2 mb-2 w-full border-2 border-bgPrimary bg-bgPrimary focus:border-[#fa6c5f] outline-none"
            />
            <label htmlFor="name" className="flex my-2">
              <AiOutlineMessage className="m-1" />
              Message
            </label>
            <textarea
              rows={7}
              name="message"
              className="rounded-md p-2 mb-2 w-full border-2 border-bgPrimary bg-bgPrimary focus:border-[#fa6c5f] outline-none"
            />
          </div>
          <div className="flex justify-center m-3">
            <button
              type="submit"
              className="flex border-2 text-sm md:text-md text-mainText border-[#ffffff] hover:text-subtext md:p-2 p-1.5 rounded-lg hover:shadow-lg hover:shadow-subtext/20 transition-all duration-500 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
