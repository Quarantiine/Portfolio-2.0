import Image from "next/image";
import Link from "next/link";

const AboutMeTab = () => {
	const professionalProjects = [
		{
			link: "https://www.interludescores.com/",
			title: "Interlude Scores",
		},
		{
			link: "https://www.digitalpublishinginc.com/",
			title: "Digital Publishing Inc.",
		},
		{
			link: "https://www.heresamericathedreamersland.com/",
			title: "Heres America",
		},
		{
			link: "https://www.practicalamericanenglish.com/",
			title: "PAE Website",
		},
	];
	return (
		<div className="relative flex gap-2 justify-center items-center w-full h-full">
			{/* <Loader loaderTailwind={"!w-10 !h-10"} /> */}
			<div className="w-[90%] lg:w-[70%] h-auto mx-auto flex flex-col justify-center items-center gap-32">
				<div className="w-full xl:w-[600px] h-auto grid gap-10 xl:gap-0 grid-cols-1 xl:grid-cols-2 justify-start items-center">
					<div className="bg-gray-700 w-44 sm:w-64 h-44 sm:h-64 rounded-md mx-auto xl:m-0 relative overflow-hidden">
						<Image src="/images/about-me-picture.jpg" alt="About me picture of creator" fill sizes="true" />
					</div>
					<div className="flex flex-col justify-center items-center xl:items-start gap-2 text-center xl:text-start">
						<h1 className="text-2xl font-medium">Daniel Ward</h1>
						<p>
							Im a React developer with a passion for delivering successful and well rounded projects. I excel at
							crafting clean, efficient code and delivering exceptional user experiences. Take a look at my portfolio to
							see my work.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-10">
					<div className="block md:hidden bg-gray-700 w-44 sm:w-80 h-44 sm:h-80 rounded-md relative">
						<Image
							className="object-cover object-right"
							src="/images/about-skills-img.jpg"
							alt="react skill img"
							fill
							sizes="true"
						/>
					</div>
					<div className="flex flex-col justify-center items-center text-center md:text-start md:items-start gap-10">
						<div className="flex justify-center items-center gap-10">
							<div className="flex flex-col justify-center items-center text-center md:text-start md:items-start gap-3">
								<h1 className="text-3xl font-semibold">PROGRAMMING SKILLS</h1>
								<ul className="flex justify-center items-center text-center md:text-start md:items-start pl-10 gap-20 list-disc">
									<div>
										<li>HTML</li>
										<li>CSS</li>
										<li>JS</li>
										<li>React</li>
										<li>Tailwind</li>
										<li>Typescript</li>
									</div>
									<div>
										<li>Next.js</li>
										<li>Node.js</li>
										<li>Sass</li>
										<li>SCSS</li>
										<li>NPM</li>
										<li>Firebase</li>
									</div>
								</ul>
							</div>
						</div>
						<div className="flex justify-center items-center gap-10">
							<div className="flex flex-col justify-center items-start gap-3">
								<h1 className="text-3xl font-semibold">OTHER SKILLS</h1>
								<ul className="flex flex-col justify-center items-start gap-2 pl-10 list-disc">
									<li>UI Design</li>
									<li>Figma</li>
									<li>Git</li>
									<li>SEO</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="hidden md:block bg-gray-700 w-80 h-[215px] rounded-md relative overflow-hidden">
						<Image
							className="object-contain"
							src="/images/about-skills-img.jpg"
							alt="react skill img"
							fill
							sizes="true"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col flex-wrap justify-center items-center gap-5">
					<div className="flex flex-col flex-wrap justify-center items-center gap-2">
						<h1 className="text-3xl font-semibold text-center">PROFESSIONAL PROJECTS</h1>
						<h2 className="text-sm font-normal text-center">
							Professional projects I am working on at my current job as a React Developer.
						</h2>
					</div>
					<ul className="flex flex-wrap justify-center items-center gap-10 list-disc">
						{professionalProjects.map((project, i) => (
							<li className="relative" key={i}>
								<div className="w-fit h-fit absolute -bottom-6 left-0 right-0 mx-auto px-4 py-1 rounded-md base-bg-1 text-white">
									<p className="text-[10px]">In Progress</p>
								</div>
								<Link
									className="underline hover:no-underline"
									target={project.link === "#/" ? "_self" : "_blank"}
									href={project.link}
								>
									{project.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="w-full text-center flex flex-col justify-center items-center gap-7">
					<p>
						Thank you for visiting my portfolio. Im a dedicated React developer and am ready to bring my skills to your
						next project. Contact me for any questions.
					</p>
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
