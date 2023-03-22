import Head from "next/head";
import Image from "next/image";
import { createContext, useEffect, useState } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ContentSection from "components/ContentSection/ContentSection";
gsap.registerPlugin(ScrollTrigger);

const TabBtnsCtx = createContext();
export { TabBtnsCtx };

export default function Home() {
	const tabsBtns = [{ title: "Projects" }, { title: "About Me" }];
	const [btnClicked, setBtnClicked] = useState(tabsBtns[0].title);

	const heroImgTailwind = "-translate-y-32 opacity-0";
	const heroTitleTailwind = "-translate-y-32 opacity-0";
	useEffect(() => {
		const animationCtx = gsap.context(() => {
			const heroImgTL = gsap.timeline();
			const heroTitleTL = gsap.timeline();

			heroImgTL.to(".hero-img", {
				opacity: 1,
				duration: 1,
				translateY: 0,
			});

			heroTitleTL.to(
				".hero-title",
				{
					opacity: 1,
					duration: 2,
					translateY: 0,
					stagger: {
						each: 0.1,
					},
				},
				0.7
			);
		});

		const scrollAnimationCtx = gsap.context(() => {
			const heroImgTL = gsap.timeline();
			const heroTitleTL = gsap.timeline();
			heroImgTL.to(".hero-img", {
				scrollTrigger: {
					scrub: 1,
					trigger: ".hero-img",
					start: "top top",
					end: "bottom top",
					// markers: true,
				},
				translateY: 100,
				scale: 1.5,
			});
			heroTitleTL.to(".hero-title", {
				scrollTrigger: {
					scrub: 3,
					trigger: ".hero-img",
					start: "top top",
					end: "bottom top",
					// markers: true,
				},
				scale: 1.4,
			});
		});

		return () => {
			animationCtx.revert();
			scrollAnimationCtx.revert();
		};
	}, []);

	return (
		<TabBtnsCtx.Provider value={{ tabsBtns, btnClicked, setBtnClicked }}>
			<Head>
				<title>Home | DWP</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/youtube logo 1 sm.png" />
			</Head>
			<main id="main-index" className="flex flex-col justify-center items-center gap-10">
				<HeroSection heroTitleTailwind={heroTitleTailwind} heroImgTailwind={heroImgTailwind} />
				{/* ADD A COMPONENT THAT SHOWCASES THE MOST ADVANCE PROJECTS FIRST */}
				<div className="flex flex-col gap-32 justify-center items-center w-[90%] sm:w-[90%]">
					<div className="flex flex-col gap-5 justify-center items-center">
						<Tabs tabsBtns={tabsBtns} btnClicked={btnClicked} setBtnClicked={setBtnClicked} />
						<ContentSection />
					</div>
				</div>
			</main>
		</TabBtnsCtx.Provider>
	);
}

const Tabs = ({ tabsBtns, btnClicked, setBtnClicked }) => {
	return (
		<>
			<div className="w-fit p-1 flex flex-wrap gap-5 justify-center sm:justify-start items-center">
				{tabsBtns.map((tab, i) => (
					<button
						className={`${
							btnClicked === tab.title ? "base-bg-1" : "bg-transparent"
						} btn w-fit h-fit px-4 py-1 border rounded-md text-lg`}
						onClick={(e) => setBtnClicked(e.target.textContent)}
						key={i}
					>
						{tab.title}
					</button>
				))}
			</div>
		</>
	);
};

const HeroSection = ({ heroTitleTailwind, heroImgTailwind }) => {
	const [heroImgLoaded, setHeroImgLoaded] = useState(false);

	return (
		<>
			<div
				className={`relative w-full h-[600px] 2xl:h-[800px] bg-[#111] overflow-hidden flex justify-center items-center ${
					heroImgLoaded ? "animate-none" : "animate-pulse"
				}`}
			>
				<div className="absolute left-0 right-0 mx-auto z-10 flex flex-col items-center justify-center gap-3 text-center px-10">
					<h1 className={`${heroTitleTailwind} hero-title text-4xl sm:text-6xl font-bold`}>MY PORTFOLIO</h1>
					<h2 className={`${heroTitleTailwind} hero-title text-xl font-light`}>YOU WILL BE AMAZED</h2>
					<h3 className={`${heroTitleTailwind} hero-title text-[10px] font-thin text-[#444]`}>BY: DANIEL WARD</h3>
				</div>
				<Image
					className={`${heroImgTailwind} hero-img object-cover object-top`}
					src="/images/hero-bg-img.jpg"
					alt="hero img"
					fill
					sizes="true"
					onLoad={() => setHeroImgLoaded(true)}
				/>
				<div className="absolute w-full h-full bg-gradient-to-t from-[#111] via-[#111111d5] to-transparent"></div>
				<div className="absolute w-full h-full bg-gradient-to-t from-[#111] via-[#11111186] to-transparent"></div>
			</div>
		</>
	);
};
