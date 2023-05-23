import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Layout from "./component/Layout";
import Anitation from "./component/Anitation";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "./component/Skill";
import profileImg from "../../public/profileImg.jpg";
interface AnimationValue {
  value: number;
}
const AnimationNumber = ({ value }: AnimationValue) => {
  const ref = useRef<HTMLSpanElement>(null);
  const moitonValue = useMotionValue(0);
  const springValue = useSpring(moitonValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) {
      moitonValue.set(value);
    }
  }, [isInview, value, moitonValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};
const AnimationString = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayedString, setDisplayedString] = useState("");

  const generateRandomString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomString = "";
    for (let i = 0; i < value.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let count = 0;

    const animateString = () => {
      const randomString = generateRandomString();
      setDisplayedString(randomString);
      count++;

      if (count < 10) {
        timeout = setTimeout(animateString, 100);
      } else {
        setDisplayedString(value);
      }
    };

    animateString();

    return () => clearTimeout(timeout);
  }, [value]);

  return <span ref={ref} className="text-5xl">{displayedString}</span>;
};
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <main className="flex w-full fles-col items-center justify-center">
        <Layout clssName="pt-16">
          <Anitation text="Introduce myself" className="mb-16" />
          <div className="col-span-2 flex flex-col justify-between items-end">
              <div className="flex flex-col item-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimationNumber value={21} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  AGE
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                <AnimationString value="AoyamaGakuin" />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  UniverSity
                </h2>
              </div>
              <div className="flex flex-col item-end justify-center">
                <span className="inline-block text-7xl font-bold">
                <AnimationString value="COLLEGE OF COMMUNITY STUDIES" />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                Department of 
                </h2>
              </div>
            </div>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75"></h2>
              <p className="font-medium">
               こんにちは！私は青山学院大学の学生です。現在はフロントエンドエンジニアを目指しています。
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " >
              <Image
                src={profileImg}
                alt="profileImg"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              </div>
            </div>
          </div>
          <Skill />
        </Layout>
      </main>
    </>
  );
};
export default About;
