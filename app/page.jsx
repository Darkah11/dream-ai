"use client";
import React, { useContext, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

export default function Home() {
  const data = [
    {
      url: "/vid-1.MP4",
      title: "Title Gains Before Grains",
      img: "/pic-1.png",
      body: "This rooster isn’t waking up early just to crow—he’s hitting the gym! Watch as he pumps iron and crushes the treadmill like a true feathered fitness freak. Who needs pre-workout when you’ve got farm-fresh determination? 💪😂 #BeastMode #GymRooster #NoDaysOff",
    },
    {
      url: "/vid-2.MP4",
      title: "Happy Doge, Maximum Wow! 😃🐶",
      img: "/pic-2.png",
      body: "You’ve seen the classic Doge, but have you ever seen him this happy? Much smile, very joy, so wholesome! This is the ultimate glow-up—proof that even the most legendary memes can get an upgrade. 😂✨ #HappyDoge #MuchSmile #VeryWow",
    },
    {
      url: "/vid-3.MP4",
      title: "When the Crypto Whale Resurfaces 🐋🚀",
      img: "/pic-3.png",
      body: " Thought the whales were gone? Think again! This legendary beast isn’t breaching the ocean—it’s breaking out of the sand, just like a true crypto whale making a comeback. Hold tight, the market’s about to make waves! 🌊😂 #CryptoWhale #WhaleSZN #ToTheMoon",
    },
    {
      url: "/vid-4.MP4",
      title: "Meow-sic to My Ears! 🎶🐱",
      img: "/pic-4.png",
      body: "Who knew a cat could have vocals this smooth? 🎤😻 Watch as this feline superstar sings its heart out to APT by ROSÉ & Bruno Mars. Move over, pop icons—there’s a new sensation in town! 😂🎶 #SingingCat #Meowgic #FelineIdol",
    },
    {
      url: "/vid-5.MP4",
      title: "Hawk Tuah: The Ultimate Splash Zone 🌊😂",
      img: "/pic-5.png",
      body: "When she said Hawk Tuah she really meant it! Witness the legendary power in full force as she unleashes a waterfall straight from the depths of her soul. Stay back or bring a raincoat—this one’s got RANGE! 💦🤣 #HawkTuah #WaterfallMoment #StayHydrated",
    },
    {
      url: "/vid-6.MP4",
      title: "Heavenly Paws: Dogs & Cats Take Flight! 🐾👼",
      img: "/pic-6.png",
      body: "When pets get their wings, they really take off! 😂 Watch as these little angels—both doggos and kitties—soar through the streets, proving that heaven is full of fur and fun. Who knew the afterlife had such good company? 🌟🐶🐱 #AngelPets #FlyingFurballs #HeavenlyPaws",
    },
    {
      url: "/vid-7.MP4",
      title: "The Strongest Carry in History 💪🐷🎒",
      img: "/pic-7.png",
      body: "Forget superhero team-ups—this is the real power duo! Watch as Peter Dinklage casually gives The Rock a piggyback ride like it’s nothing. Strength? Legendary. Confidence? Unmatched. Physics? Irrelevant. 😂🔥 #DinklageStrong #TheRockGotCarried #PeakPower",
    },
    {
      url: "/vid-8.MP4",
      title: "First Contact: Ocean Edition 👽🌊",
      img: "/pic-8.png",
      body: " Forget Area 51—something truly out of this world just washed up! 🛸👀 This bizarre sea creature has everyone questioning reality as crowds gather to document the ultimate “What is that?!” moment. Are we looking at a deep-sea mystery or an alien visitor? You decide! 😂🐙 #AlienOrFish #DeepSeaMystery #FirstContact",
    },
    {
      url: "/vid-9.MP4",
      title: "Turtly Adorable or Fur-real Confusing? 🐢🐶",
      img: "/pic-9.png",
      body: " Evolution just dropped a wild new update! 😂 Witness the rare dog-turtle hybrid casually strolling the beach like it’s the most normal thing ever. Is it a fast turtle or a slow dog? Science may never know. 🌊🤣 #TurtleDog #EvolutionGlitch #BeachBeast",
    },
    {
      url: "/vid-10.mp4",
      title: " It Wasn't Me: Political Remix 🎤😂",
      img: "/pic-10.png",
      body: "Trump and Putin? They’re not just world leaders—they’re karaoke stars too! 🎶 Watch as they belt out a remix of 'It Wasn’t Me,' but with a twist: it’s all about Trump’s epic blunders. From questionable decisions to hilarious mishaps, this is a musical roast you won’t want to miss! 😂🔥 #ItWasntMe #TrumpRemix #PoliticalKaraoke",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const LeftArrow = () => {
    const visibility = useContext(VisibilityContext);
    const isFirstItemVisible = visibility.useIsVisible("first", true);
    return (
      <button
        disabled={isFirstItemVisible}
        onClick={() => visibility.scrollPrev()}
        className="left hidden md:block"
      >
        Left
      </button>
    );
  };
  const ref = useRef(null);
  const handleScroll = (offset) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  const RightArrow = () => {
    const visibility = useContext(VisibilityContext);
    const isLastItemVisible = visibility.useIsVisible("last", false);
    return (
      <button
        disabled={isLastItemVisible}
        onClick={() => visibility.scrollNext()}
        className="  bg-gray-600 bg-opacity-50 flex-grow-0 hidden md:block bg-none outline-none"
      >
        Right
      </button>
    );
  };

  return (
    <>
      <section className=" relative min-h-screen flex px-5 md:px-12 lg:px-24 py-10  hero">
        <div className=" -skew-y-[4deg] bg-black  bg-opacity-50 z-10 absolute w-full top-0 origin-bottom-left left-0 h-full object-cover" />
        <img
          src="/img-3.jpg"
          alt=""
          className="absolute hero-bg top-0 left-0 -z-10 w-full h-full object-cover origin-bottom-left -skew-y-[4deg] "
        />
        <audio id="audio" loop autoPlay>
          <source src="/ai.mp3" type="audio/mpeg" />
        </audio>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" w-full relative z-30 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-y-16"
        >
          <div>
            <h1 className=" font-bold text-white text-3xl mt-5 lg:text-4xl lg:max-w-[700px]">
              Meme Dream AI - The Ultimate AI-Powered Meme Coin!
            </h1>
            <p className=" mt-4 text-white max-w-[300px] mx-auto md:mx-0">
              🚀 Tired of missing out on the next big crypto? Meme Dream AI
              isn’t just another AI coin
            </p>
            <div className=" flex gap-3 justify-center md:justify-start items-center mt-5">
              <Link href={"https://t.me/+ulCbxLsPcuMzNTA0"}>
                <button className=" w-[150px] md:w-[180px] border hover:bg-transparent hover:text-deepBlue border-deepBlue bg-deepBlue py-2 rounded-lg text-white font-semibold">
                  Join Telegram
                </button>
              </Link>
              <Link href={"https://x.com/DreamAI0"}>
                <button className=" w-[150px] md:w-[180px] hover:bg-transparent border border-lightBlue hover:text-lightBlue bg-lightBlue py-2 rounded-lg text-black font-semibold">
                  Join X
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src="cheers.png" alt="" />
          </div>
        </motion.div>
      </section>
      <section className=" px-5 py-10 lg:px-12 md:pb-24 ">
        <div className=" md:flex justify-between items-center gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className="md:flex-1"
          >
            <h2 className=" text-deepBlue font-bold text-3xl">
              About <span className=" line">$DreamAi</span>
            </h2>
            <p className=" mt-3">
              it’s the future of viral content and community-driven success!
              While other AI projects focus on a single idea, we harness the
              power of every AI to create the best, smartest, and most engaging
              content in the crypto space. As AI evolves, so will we—bigger,
              better, and unstoppable. 💡 More AI = More Innovation = More
              Growth 💡 Don’t just dream about making it big in crypto—make it a
              reality with Meme Dream AI! 🚀🔥
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className="md:flex-1 flex justify-end"
          >
            <img
              src="/logo-left.png"
              alt="dream ai image"
              className="   mt-8 md:mt-0 w-full`"
            />
          </motion.div>
        </div>
      </section>
      <section className=" slash  py-10  bg-lightBlue relative pb-24 md:pb-36">
        <div className=" -skew-y-[4deg] bg-lightBlue -z-10 absolute w-full top-0 origin-bottom-left left-0 h-full object-cover" />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" z-30"
        >
          <h2 className=" text-center text-3xl font-bold text-deepBlue ">
            Gallery
          </h2>
          <div className=" relative">
            <div
              className=" flex justify-between absolute z-30 w-full top-0 bottom-0 m-auto px-5"
            >
              <button
              onClick={() => handleScroll(-340)}
                style={{ cursor: "pointer" }}
              >
                <img src="/prev.png" alt="" className=" w-10 h-10 opacity-80" />
              </button>
              <button
                onClick={() => handleScroll(340)}
                style={{ cursor: "pointer" }}
              >
                <img src="/next.png" alt="" className=" w-10 h-10 opacity-80" />
              </button>
            </div>
            <div ref={ref} className=" flex flex-row shrink-0  gap-5 items-cente overflow-x-auto scroller mt-5 ml-2">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-white min-w-[320px] rounded-lg p-3 relative pb-16"
                  >
                    <div className="relative">
                      <div className=" w-full h-full absolute bg-black top-0 left-0 rounded-lg bg-opacity-30" />
                      <img
                        src={item.img}
                        alt=""
                        className=" w-full h-[200px] object-cover rounded-lg"
                      />
                    </div>
                    <div className=" mt-5 ">
                      <h3 className=" text-xl font-semibold text-left">
                        {item.title}
                      </h3>
                      <p className=" text-sm mt-2">{item.body}</p>
                      <Link href={item.url}>
                        <button className=" z-30 absolute bottom-3 left-5 w-[100px] hover:bg-transparent border border-lightBlue hover:text-lightBlue bg-lightBlue mt-3 py-[5px] rounded-lg text-white text-sm font-semibold">
                          Play Video
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            scrollContainerClassName=" flex flex-row items-"
          >
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white min-w-[300px] rounded-lg p-3 mr-5 h-full flex-1"
                >
                  <div className="relative">
                    <div className=" w-full h-full absolute bg-black top-0 left-0 rounded-lg bg-opacity-30" />
                    <img
                      src={item.img}
                      alt=""
                      className=" w-full h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className=" mt-5">
                    <h3 className=" text-lg font-semibold text-center">
                      {item.title}
                    </h3>
                    <p className=" text-sm mt-1">{item.body}</p>
                    <Link href={item.url}>
                      <button className=" w-[100px] hover:bg-transparent border border-lightBlue hover:text-lightBlue bg-lightBlue mt-3 py-[5px] rounded-lg text-white text-sm font-semibold">
                        Play Video
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </ScrollMenu> */}
        </motion.div>
        <div className=" mt-12">
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay
            autoPlaySpeed={2000}
            keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <img src="img-1.jpg" alt="" className=" mr-3" />
            <img src="img-2.jpg" alt="" />
            <img src="img-3.jpg" alt="" />
            <img src="img-4.jpg" alt="" />
          </Carousel>
        </div>
      </section>
      <footer className=" relative px-5 py-10 lg:px-12 bg-deepBlue flex flex-col items-center">
        <div className=" -skew-y-[4deg] bg-deepBlue z-10 absolute w-full top-0 origin-bottom-left left-0 h-full object-cover" />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" z-20 flex flex-col justify-center items-center"
        >
          <div>
            <img src="/logo-right.png" alt="" className=" w-36" />
          </div>
          <div className=" text-center mt-5 max-w-[400px] mx-auto">
            <h2 className=" text-3xl font-bold text-white">$DreamAI</h2>
            <p className=" text-white">
              This isn’t just a coin—it’s a community. Don’t just invest, be a
              part of something bigger. Together, we grow, we succeed, and we
              change lives. The future is ours to build
            </p>
          </div>
          <div className=" flex items-center gap-3 mt-5">
            <Link href={"https://t.me/+ulCbxLsPcuMzNTA0"}>
              <img src="/telegram.png" alt="" className=" hover:w-10" />
            </Link>
            <Link href={"https://x.com/DreamAI0"}>
              <img src="/x.png" alt="" className=" hover:w-10" />
            </Link>
          </div>
          <p className=" mt-24 text-center text-white">
            Copyright ©2025 DreamAI. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
}
