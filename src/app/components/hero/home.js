import Image from "next/image";
import Typewriter from "typewriter-effect";
import main from "../../../../public/images/main.png";
import { BsArrowUpRight } from "react-icons/bs";
export default function Home(props) {
  return (
    <div className="flex w-full justify-between">
      <div className="pl-80">
        <div className="flex justify-start text-5xl tracking-tight m-2 font-mono w-full pt-56">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hey there! I'm Madhavi.").start();
            }}
          />
        </div>
        <div className="flex justify-start text-2xl text-slate-400 font-mono m-2 mt-4 tracking-tighter">
          A front-end developer and a tech enthusiast.
        </div>
        <div className="my-12"></div>
        <div className="flex justify-start">
          <button
            className="border-2 border-white p-3 rounded-lg hover:bg-white hover:text-slate-900 hover:shadow-lg transition-all duration-500 ease-in-out"
            onClick={() => {
              props.setContent("socials");
            }}
          >
            socials Me
          </button>
          <button
            className="flex border-2 border-white p-3 rounded-lg hover:bg-white hover:text-slate-900 hover:shadow-lg transition-all duration-500 ease-in-out mx-5"
            onClick={() => {
              props.setContent("about");
            }}
          >
            Know more about me
            <BsArrowUpRight className="my-1 mx-1.5" />
          </button>
          <button className="flex border-2 border-white p-3 rounded-lg hover:bg-white hover:text-slate-900 hover:shadow-lg transition-all duration-500 ease-in-out">
            Download my Resume
          </button>
        </div>
      </div>
      <div className="w-4/12 flex justify-center">
        <Image
          src={main}
          width={400}
          height={400}
          alt="main"
          className="w-9/12 mt-5 pt-20"
        />
      </div>
    </div>
  );
}
