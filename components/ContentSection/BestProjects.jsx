import Loader from "components/Loader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BestProjects = () => {
	const [loaded, setLoaded] = useState(false);

	const projects = [
		{
			title: "Listology",
			link: "https://listology.vercel.app",
			codeLink: "https://github.com/Quarantiine/listology-web-app",
			img: "/images/projectW-6.png",
			lang: [
				{ text: "React", fullTxt: "React" },
				{ text: "JS", fullTxt: "Javascript" },
				{ text: "Tailwind", fullTxt: "Tailwind" },
				{ text: "Next.js", fullTxt: "Next.js" },
				{ text: "NPM", fullTxt: "Node Package Manager" },
				{ text: "Firebase", fullTxt: "Firebase" },
				{ text: "APIs", fullTxt: "APIs" },
				{ text: "CSS", fullTxt: "Cascading Style Sheets" },
				{ text: "GSAP", fullTxt: "GreenSock Animation Platform" },
			],
			tags: [{ tag: "react" }, { tag: "3 week" }, { tag: "my web designs" }, { tag: "next.js" }],
			completionTime: "COMPLETION TIME: ~ 3 weeks",
			id: 1,
		},
	];
	return (
		<>
			<div className="flex flex-col justify-center items-center gap-10">
				<h1 className="text-center mx-auto text-4xl sm:text-5xl font-semibold">BEST PROJECT</h1>
				{projects.map((project, i) => (
					<React.Fragment key={i}>
						<div
							className={`relative transition-all duration-200 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-lg bg-gray-900 overflow-hidden p-2`}
						>
							<p className="absolute top-0 left-0 z-10 bg-black w-8 sm:w-12 h-8 sm:h-12 text-white flex justify-center items-center rounded-br-lg shadow-lg sm:shadow-xl text-md sm:text-2xl">
								{i + 1}
							</p>
							<div className="relative w-full h-full">
								<div className="absolute w-full h-full top-0 left-0 rounded-md overflow-hidden">
									{/* <Loader disableText={true} /> */}
									<Image
										className="object-cover object-top"
										src={project.img}
										alt={`${project.title} img`}
										fill
										sizes="true"
									/>
									<div className="bg-gradient-to-t to-transparent from-black absolute w-full h-full"></div>
								</div>
								<div className="absolute top-0 left-0 w-full h-full flex justify-between p-2 items-end gap-2">
									<div className="flex flex-col justify-center items-start gap-2">
										<div className="tags-container w-[100px] sm:w-[200px] flex justify-start items-center gap-2 pb-1 overflow-x-scroll overflow-y-hidden">
											{project.lang.map((langs, i) => (
												<React.Fragment key={i}>
													<p
														title={langs.fullTxt}
														className="base-bg-1 py-[1px] px-2 rounded-md h-fit w-full text-[12px] sm:text-xl"
													>
														{langs.text}
													</p>
												</React.Fragment>
											))}
										</div>
										<div className="flex flex-col justify-center items-start">
											<p className="text-md sm:text-2xl font-semibold line-clamp-1 sm:w-[200px]" title={project.title}>
												{project.title}
											</p>
											<p className="text-[9px] sm:text-base font-thin">{project.completionTime}</p>
										</div>
									</div>
									<div className="flex flex-col justify-center items-center gap-2">
										<Link href={project.link} target={`_blank`} className="w-full">
											<button className="base-bg-1 px-2 py-1 sm:px-10 sm:py-2 text-md sm:text-xl rounded-sm hover:opacity-60 w-full">
												Website
											</button>
										</Link>
										<Link href={project.codeLink} target={`_blank`} className="w-full">
											<button className="border px-2 py-1 border-white hover:bg-[#0E51FF] hover:border-transparent transition sm:px-10 sm:py-2 text-md sm:text-xl rounded-sm w-full">
												Code
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</>
	);
};

export default BestProjects;
