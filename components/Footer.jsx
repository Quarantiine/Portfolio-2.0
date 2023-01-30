import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const footerData = [
		{ link: "https://www.instagram.com/thedevreplicator___/", img: "/images/instagram-img-link.svg" },
		{ link: "https://www.linkedin.com/in/daniel-ward-071010205/", img: "/images/linkedIn-img-link.svg" },
		{ link: "https://www.youtube.com/channel/UCGRMcnQqJE6qSJcMMVoGidQ", img: "/images/youtube-img-link.svg" },
	];

	return (
		<>
			<div className="bg-[#000] w-full h-fit py-10 px-5 text-white">
				<div className="mx-auto w-[70%] sm:w-[90%] flex flex-col lg:flex-row justify-center items-center gap-10">
					<div className="flex flex-col sm:flex-row lg:flex-col justify-center items-start gap-5">
						<div>
							<h1 className="text-lg font-semibold">Socials</h1>
							<div className="flex flex-col justify-center items-start gap-1">
								<Link href={"https://codepen.io/Daniel_CoDe"} target="_blank" className="text-sm font-light btn">
									My Codepen
								</Link>
								<Link href={"https://github.com/Quarantiine/"} target={"_blank"} className="text-sm font-light btn">
									My GitHub
								</Link>
							</div>
						</div>
						<div>
							<h1 className="text-lg font-semibold">Contact</h1>
							<div className="flex flex-col justify-center items-start gap-1">
								<p className="text-sm font-light select-all cursor-default">Danielward.occ@gmail.com</p>
								<p className="text-sm font-light select-all cursor-default">(469)-329-8147</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center items-center gap-5">
						{footerData.map((data, i) => (
							<Link key={i} href={data.link} target="_blank">
								<Image className="btn" src={data.img} alt="social media link" width={180} height={180} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
