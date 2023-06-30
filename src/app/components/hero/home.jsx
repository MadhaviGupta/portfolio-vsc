import Image from "next/image";
import Typewriter from "typewriter-effect";
import main from "../../../../public/images/main.png";
import main2 from "../../../../public/images/main2.png";
import main3 from "../../../../public/images/main3.png";
import { BsArrowUpRight } from "react-icons/bs";
export default function Home(props) {
  return (
    <div className="flex w-full justify-between">
      <div className="pl-80">
        <div className="flex text-[#fa6c5f] justify-start text-5xl m-2 w-full pt-56">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hey there! I'm Madhavi.").start();
            }}
          />
        </div>
        <div className="flex justify-start text-2xl text-[#689775]  m-2 mt-4">
          A front-end developer and a tech enthusiast.
        </div>
        <div className="my-12"></div>
        <div className="flex justify-start">
          <button
            className="flex border-2 text-[#fa6c5f] border-[#ffffff] hover:text-[#689775] p-3 rounded-lg hover:shadow-lg transition-all duration-500 ease-in-out"
            onClick={() => {
              props.setContent("socials");
            }}
          >
            Connect with Me
          </button>
          <button
            className="flex border-2 text-[#fa6c5f] border-[#ffffff] hover:text-[#689775] p-3 rounded-lg hover:shadow-lg transition-all duration-500 ease-in-out mx-5"
            onClick={() => {
              props.setContent("about");
            }}
          >
            Know more about me
            <BsArrowUpRight className="my-1 mx-1.5" />
          </button>
          <button className="flex border-2 text-[#fa6c5f] border-[#ffffff] hover:text-[#689775] p-3 rounded-lg hover:shadow-lg transition-all duration-500 ease-in-out">
            <a href="/MadhaviGuptaResume.pdf" download>
              Download my Resume
            </a>
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
