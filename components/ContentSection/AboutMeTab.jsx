import Image from "next/image";
import React, { useState } from "react";
import mySkills from "../../data/mySkills.json";
import Loader from "components/Loader";
import MessageSystem from "./AboutMeTab/MessageSystem";

const AboutMeTab = () => {
	const [loaded, setLoaded] = useState(false);
	const [loaded2, setLoaded2] = useState(false);
	return (
		<div className="relative flex gap-2 justify-center items-center w-full h-full">
			<div className="w-[90%] lg:w-[70%] h-auto mx-auto flex flex-col justify-center items-center gap-24">
				<div className="w-full xl:w-[600px] h-auto grid gap-10 xl:gap-0 grid-cols-1 xl:grid-cols-2 justify-start items-center">
					<div className="bg-gray-700 w-44 sm:w-64 h-44 sm:h-64 mx-auto xl:m-0 relative overflow-hidden rounded-xl">
						<Image
							className="z-[101]"
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
							Im a React developer with a passion for delivering successful and well rounded projects. I excel at
							crafting clean, efficient code and delivering exceptional user experiences.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center gap-20">
					<div className="block lg:hidden bg-gray-700 rounded-md relative overflow-hidden">
						{!loaded && <Loader disableText={true} />}
						<Image
							className="object-cover object-right"
							src="/images/about-skills-img.jpg"
							alt="react skill img"
							width={500}
							height={700}
							sizes="true"
							onLoad={() => setLoaded(true)}
						/>
					</div>
					<div className="flex flex-col sm:flex-row justify-center items-center text-center md:text-start md:items-start gap-12 w-full">
						<div className="flex justify-center items-center gap-10 w-full">
							<div className="flex flex-col justify-center items-center text-center md:text-start md:items-start gap-3">
								<h1 className="text-3xl font-semibold">PROGRAMMING SKILLS</h1>
								<ul className="flex justify-center text-start items-start md:pl-10 gap-20 list-disc">
									<div className="grid grid-cols-1 justify-center items-center gap-2">
										{mySkills.map((skillSets) => {
											return skillSets.skillSet1.map((skills, i) => (
												<React.Fragment key={i}>
													<li>{skills.skill}</li>
												</React.Fragment>
											));
										})}
									</div>
									<div className="grid grid-cols-1 justify-center items-center gap-2">
										{mySkills.map((skillSets) => {
											return skillSets.skillSet2.map((skills, i) => (
												<React.Fragment key={i}>
													<li>{skills.skill}</li>
												</React.Fragment>
											));
										})}
									</div>
								</ul>
							</div>
						</div>
						<div className="flex justify-center items-center gap-10">
							<div className="flex flex-col justify-center items-start gap-3">
								<h1 className="text-3xl font-semibold">OTHER SKILLS</h1>
								<ul className="flex flex-col justify-center items-start gap-2 md:pl-10 list-disc">
									<li>UI Design</li>
									<li>Figma</li>
									<li>Git</li>
									<li>SEO</li>
									<li>Firebase</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="hidden lg:block rounded-md relative overflow-hidden">
						{!loaded2 && <Loader disableText={true} />}
						<Image
							className="object-contain rounded-md"
							src="/images/about-skills-img.jpg"
							alt="react skill img"
							height={900}
							width={900}
							sizes="true"
							onLoad={() => setLoaded2(true)}
						/>
					</div>
				</div>

				<div className="w-full text-center flex flex-col justify-center items-center gap-7">
					<h1 className="text-3xl font-semibold">CONTACT ME</h1>
					<p className="w-[90%] sm:w-[550px]">
						Thank you for visiting my portfolio. Im a dedicated React developer and I am ready to bring my skills to
						your next project. Contact me for any questions.
					</p>
					<MessageSystem />
					<div className="flex w-full flex-col justify-center items-center gap-3">
						<p>CHECK OUT MY SOCIAL MEDIAS</p>
						<Image
							className="animate-bounce"
							src="/icons/arrow_downward.svg"
							alt="arrow down icon"
							width={30}
							height={30}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutMeTab;
