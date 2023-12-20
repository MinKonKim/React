import React from "react";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

const Home = () => {
  return (
    <section name="home" className="felx w-full h-screen bg-zinc-200">
      <div className="grid md:grid-col-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-8 md:items">
          <p className="text-2xl ">Use our chat platform</p>
          <h1 className="py-3 text-5xl font-bold dm:text-7xl">Chat message</h1>
          <p className="text-2xl">Chatty is the best chat platform</p>
          <button className="py-3 px-6 sm:w-[60%] my-4"></button>
        </div>
        <div className="flex flex-col justify-center px-2">
          <h2 className="font-semibold xs:test-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
            Easily download app
            <br className="hidden sm:block" />
            Google & Apple
          </h2>
          <p className="text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            여기는 아무말이나 적는 곳 입니다 왜냐면 아무말이나 적어야 하기
            때문입니다. 대충 길어보이는 글
          </p>
          <div className="flex felx-row flex-wrap mt-6 sm:mt-10">
            <img
              src={apple}
              alt="apple_store"
              className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="google_play"
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
