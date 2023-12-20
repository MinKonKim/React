import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section name="footer" className="w-full px-2 text-gray-300 bg-slate-700">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solution</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Support</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">COMPANY</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">LEGAL</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            Please Subscribe and Like Button
          </p>
          <p className="py-4">
            The latest news, articles, and resoureces, sent to your inbox
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md "
              type="email"
              placeholder="Enter email"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-50">
        <p className="py-4">2023 Chatty,LLc,All rights reserved</p>
        <div className="flex justify-between px-5 sm-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </section>
  );
};

export default Footer;
