import Typewriter from "typewriter-effect";
export default function Home(props) {
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="md:pl-80 pl-20">
          <div className="flex text-mainText justify-start md:text-7xl text-5xl font-bold m-2 w-full md:pt-56 pt-28">
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hey there! I'm Madhavi.").start();
              }}
            /> */}
            Hey there! I'm Madhavi.
          </div>
          <div className="flex justify-start font-bold md:text-3xl text-lg text-subText m-2 mt-4 w-64 md:w-96">
            A front-end developer and a tech enthusiast.
          </div>
          <div className="my-12"></div>
          <div className="flex justify-start">
            <button
              className="flex md:text-lg text-sm border-2 text-mainText border-[#ffffff] hover:text-subText p-3 rounded-lg transition-all duration-500 ease-in-out md:mx-5 mx-2 font-bold hover:shadow-lg hover:shadow-subText/20"
              onClick={() => {
                props.setContent("socials");
              }}
            >
              Connect with Me
            </button>
            <button className="flex md:text-lg text-sm border-2 text-mainText border-[#ffffff] hover:text-subText p-3 rounded-lg transition-all duration-500 ease-in-out md:mx-5 mx-2 font-bold hover:shadow-lg hover:hover:shadow-subText/20">
              <a href="/MadhaviGuptaResume.pdf" download>
                Download my Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="text-[160px] font-extrabold text-gray-800/60 pl-80 -mt-96 -z-10 absolute md:block hidden">
        Madhavi <br />
        Gupta
      </div>
    </div>
  );
}
