import { Link } from "react-router-dom";
import "./footer.scss"

export default function Footer() {
  return (
    <>
      <div className="bigFooter  bg-[#d9ffb9]">
        <div className="foote">
          <Link className="log" to={"/"}><img src="https://media.tenor.com/c9hBqUmb588AAAAj/sustainability-environment.gif" alt="" /><p>EcoSwap</p></Link>
          <ul>
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/about"}>About</Link>
            <Link className="link" to={"/murojaat"}>Murojaat qilish</Link>
            <Link className="link" to={"/contact"}>Contact</Link>
          </ul>
        </div>

        <div className="en">
          <h1>Coddy Crushers</h1>
        </div>
      </div>
    </>
  )

}