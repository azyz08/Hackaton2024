import { Link } from "react-router-dom";
import "./footer.scss"
import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return(
        <>
        <footer className="w-full bg-white p-8 pt-0 dark:bg-black">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link className="flex items-center gap-4"> <img src="https://media.tenor.com/c9hBqUmb588AAAAj/sustainability-environment.gif" alt="" className="w-10" />
        <p className="text-green-700 text-xl mb-[-10px]">EcoSwap</p></Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
            Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
               About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Murojaat qilish
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact 
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; Coddy Camp
      </Typography>
    </footer>
        </>
    )
    
}