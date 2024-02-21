import React from "react";
import "../css/input.css";
import "../css/output.css";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer text-white md:flex md:items-center md:justify-between block bg-[#38383B] px-12 pt-20 pb-12">
      <div className="logo flex flex-col gap-3 mb-[50px] md:mb-0">
        <span className="text-3xl font-bold">Fabrice</span>
        <p>
          Conçu par <span className="underline text-[#A8A6A1]">Fabrice</span>
        </p>
      </div>
      <div className="menufooter flex gap-[80px] pr-[150px]">
        <ul className="flex flex-col gap-3">
          <a href="">
            <li className="underline text-[#A8A6A1]">Acheter</li>
          </a>
          <a href="">
            <li className="underline text-[#A8A6A1]">Notre histoire</li>
          </a>
        </ul>
        <ul className="flex flex-col gap-3">
          <a href="">
            <li className="underline text-[#A8A6A1]">Journal</li>
          </a>
          <a href="">
            <li className="underline text]-[#A8A6A1">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
