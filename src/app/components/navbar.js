import { BsDashLg } from "react-icons/bs";
import { TiTabsOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between text-[#689775] bg-[#191b20] z-50 fixed top-0 w-full">
        <ul className="flex text-sm my-1.5">
          <li className="mx-2 hover:cursor-pointer">File</li>
          <li className="mx-2 hover:cursor-pointer">Edit</li>
          <li className="mx-2 hover:cursor-pointer">View</li>
          <li className="mx-2 hover:cursor-pointer">Go</li>
          <li className="mx-2 hover:cursor-pointer">Run</li>
          <li className="mx-2 hover:cursor-pointer">Terminal</li>
          <li className="mx-2 hover:cursor-pointer">Help</li>
        </ul>
        <div className="flex justify-center items-center -ml-4">
          Madhavi Gupta - Visual Studio Code
        </div>
        <div className="flex mx-3  my-1.5">
          <BsDashLg className="text-xl hover:cursor-pointer" />
          <TiTabsOutline className="mx-4 text-xl hover:cursor-pointer" />
          <RxCross2 className="text-xl hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
