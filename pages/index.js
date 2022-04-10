import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.second}></div>
      <div className={styles.first}>
        <div className={styles.third}>
          {/* <div className=""></div> */}
          <div className={`font-mangueira flex flex-col ${styles.fourth}`}>
            <div className="flex justify-center pt-10">
              <div className="bg-[#F0F1EE]/20 text-center py-2 px-4">
                <img src="/assets/images/microphone.svg" alt="" />
                <h1 className="pt-2 text-4xl font-bold text-orange font-mangueira">
                  Gist
                </h1>
              </div>
            </div>
            <div className="lg:flex flex-1">
              <div className=" w-[90%] mx-auto lg:w-1/2 h-full lg:h-[unset] flex justify-center">
                <div className="md:w-4/6 h-[70vh] flex flex-col justify-center">
                  <h1 className="text-2xl mb-6 md:text-[50px] text-dark font-bold font-[Mangueira]">
                    Share the Gist
                  </h1>
                  <div className={`${styles.intro}`}>
                    <h2 className="font-medium md:text-2xl leading-relaxed">
                      Gist is the next generation of social built on top of the
                      ethereum blockchain. Consumer social will never be the
                      same. Welcome to Web3.
                    </h2>
                  </div>
                  <div className="mt-6 bg-greyInput rounded-lg flex justify-between">
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      className="bg-transparent flex-1 outline-none p-4 placeholder:text-dark placeholder:font-bold"
                    />
                    <button className="bg-orange p-3 text-sm sm:text-lg text-white font-semibold rounded-md">Join Waitlist</button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/assets/images/hand.png"
                  alt=""
                  className="w-[46rem] xl3:w-[60rem] ml-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
