import Image from "next/image";
import React, { useContext, useState } from "react";
import mySkills from "../../data/mySkills.json";
import Loader from "components/Loader";
import MessageSystem from "./AboutMeTab/MessageSystem";
import { TabBtnsCtx } from "@/pages";
import Link from "next/link";

const AboutMeTab = () => {
	const [loaded, setLoaded] = useState(false);
	const [loaded2, setLoaded2] = useState(false);
	const { viewResume, setViewResume } = useContext(TabBtnsCtx);

	return (
		<div className="relative flex gap-2 justify-center items-center w-full h-full">
			<div className="w-[90%] lg:w-[70%] h-auto mx-auto flex flex-col justify-center items-center gap-24">
				<div className="w-full xl:w-[600px] h-auto grid gap-10 xl:gap-0 grid-cols-1 xl:grid-cols-2 justify-start items-center">
					<div className="bg-gray-700 w-44 sm:w-64 h-44 sm:h-64 mx-auto xl:m-0 relative overflow-hidden rounded-xl">
						<Image
							src="/images/about-me-picture.jpg"
							alt="About me picture of creator"
							fill
							sizes="true"
						/>
						<Loader loaderTailwind={"!w-10 !h-10"} disableText={true} />
					</div>
					<div className="flex flex-col justify-center items-center text-center xl:text-start xl:items-start gap-2 mx-auto xl:m-0 w-[90%] sm:w-full">
						<h1 className="text-3xl font-semibold">DANIEL WARD</h1>
						<p>
							Im a React developer with a passion for delivering successful and
							well rounded projects. I excel at crafting clean, efficient code
							and delivering exceptional user experiences.
						</p>
						<Link
							target="_blank"
							href="https://docs.google.com/document/d/e/2PACX-1vQySjAs9ysPn9Qu5w_wcen5MyyHwofOtkTuyDeVtmH8LePwcKVqhJ9E0UQR-oZvcRqevI1kDCXmYQ2k/pub"
							// onClick={() => setViewResume(!viewResume)}
							className="mt-5 px-5 py-1 rounded-md base-bg-1 hover:opacity-80 transition-all"
						>
							View Resume
						</Link>
					</div>
				</div>

				<div className="w-full text-center flex flex-col justify-center items-center gap-7">
					<h1 className="text-3xl font-semibold">COMMENT BELOW</h1>
					<p className="w-[90%] sm:w-[550px]">
						Thank you for visiting my portfolio. Im a dedicated React developer
						and I am ready to bring my skills to your next project or look
						forward to working with you. Comment your thoughts or questions
						below.
					</p>
					<MessageSystem />
					{/* <div className="flex w-full flex-col justify-center items-center gap-3">
						<p>CHECK OUT MY SOCIAL MEDIAS</p>
						<Image
							className="animate-bounce"
							src="/icons/arrow_downward.svg"
							alt="arrow down icon"
							width={30}
							height={30}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};
export default AboutMeTab;
