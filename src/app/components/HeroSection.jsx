import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-6xl font-extrabold">
            Hi, I&apos;m Arya
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Hi 👋, I&apos;m Arya Shakya, final year student currently pursuing
            Computer Engineering degree at Kathmandu University, Dhulikhel.
            <br />
            <br />I have always been curious and fascinated by technology.
            During the learning process, I have learned about different
            programming languages and technologies like Python, Flutter, C++, JavaScript,
            etc. by working on related projects. Currently, I am exploring
            Machine Learning and Deep Learning as well.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Contact Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
            <Image
              src="/images/heroimage.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={280}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
