import Loader from "components/Loader";
import Image from "next/image";

const AboutMeTab = () => {
	return (
		<div className="relative flex gap-2 justify-center items-center w-full h-full">
			{/* <Loader loaderTailwind={"!w-10 !h-10"} /> */}
			<div className="w-[70%] h-auto mx-auto flex flex-col justify-center items-center gap-32">
				<div className="w-fit h-auto grid grid-cols-2 justify-center items-center">
					<div className="bg-gray-700 w-80 h-80 rounded-md"></div>
					<div className="flex flex-col justify-center items-start gap-2">
						<h1 className="text-2xl font-medium">Daniel Ward</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis est fuga quos eligendi reprehenderit
							voluptas tempora.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10">
					<div className="flex flex-col justify-center items-start gap-10">
						<div className="flex justify-center items-center gap-10">
							<div className="flex flex-col justify-center items-start gap-3">
								<h1 className="text-3xl font-semibold">PROGRAMMING SKILLS</h1>
								<ul className="flex justify-center items-start pl-10 gap-20 list-disc">
									<div>
										<li>HTML</li>
										<li>CSS</li>
										<li>JS</li>
										<li>React</li>
										<li>Tailwind</li>
									</div>
									<div>
										<li>Next.js</li>
										<li>Node.js</li>
										<li>Sass</li>
										<li>SCSS</li>
										<li>NPM</li>
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
									<li>GitHub</li>
									<li>eCommerce Websites</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="bg-gray-700 w-80 h-80 rounded-md"></div>
				</div>
				<div className="w-full text-center flex flex-col justify-center items-center gap-7">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non assumenda alias, recusandae error
						nesciunt rerum aperiam iste libero voluptatibus qui voluptates officia minus dolor neque! Sit necessitatibus
						inventore error?
					</p>
					<div className="flex w-full flex-col justify-center items-center gap-2">
						<p>CHECK OUT MY SOCIAL MEDIA</p>
						<Image src="/icons/arrow_downward.svg" alt="" width={30} height={30} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeTab;
