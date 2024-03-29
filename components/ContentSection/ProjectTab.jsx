import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ModalCtx } from "components/Layout";
import Link from "next/link";
import Image from "next/image";
import ContentFilters from "./ContentFilters";
import BestProjects from "./BestProjects";
import ProfessionalProjects from "./ProfessionalProjects";
import data from "../../data/projects.json";

export const FilterBtnActivationCtx = createContext();

const ProjectTab = () => {
	const [filterBtnText, setFilterBtnText] = useState(``);
	const [filterDropdownBtnText, setFilterDropdownBtnText] = useState(``);
	const totalProjects = useRef();

	return (
		<FilterBtnActivationCtx.Provider
			value={{ filterBtnText, setFilterBtnText, filterDropdownBtnText, setFilterDropdownBtnText }}
		>
			<div className="w-full flex flex-col justify-center items-center gap-32">
				<BestProjects />
				{/* <div className="flex flex-col justify-center items-center gap-10">
					<div className="flex flex-col justify-center items-center gap-4">
						<h1 className="text-center mx-auto text-4xl sm:text-5xl font-semibold">PERSONAL PROJECTS</h1>
						<h2 className="text-lg font-thin text-center w-[70%]">
							{`Projects I've worked on in my free time using various languages, frameworks, APIs, and libraries.`}
						</h2>
					</div>
					<div className="flex justify-center items-start gap-5 sm:gap-10">
						<ContentFilters totalProjects={totalProjects} />
						<TabContent filterDropdownBtnText={filterDropdownBtnText} totalProjects={totalProjects} />
						<p>Projects coming soon</p>
					</div>
				</div> */}
				<ProfessionalProjects />
			</div>
		</FilterBtnActivationCtx.Provider>
	);
};

const TabContent = ({ filterDropdownBtnText, totalProjects }) => {
	return (
		<div
			ref={totalProjects}
			className="tab-content flex flex-wrap justify-center items-start gap-5 relative w-full xl:w-fit h-full overflow-y-scroll px-1"
		>
			{data.map((project, i) => {
				return project.tags
					.filter((filteredTags) => filteredTags.tag === filterDropdownBtnText)
					.map(() => {
						return <Project key={project.id} index={i + 1} project={project} />;
					});
			})}
			{!filterDropdownBtnText &&
				data.map((project, i) => {
					return <Project key={project.id} index={i + 1} project={project} />;
				})}
		</div>
	);
};

const Project = ({ project, index }) => {
	const { setModalOpen, dispatchModal } = useContext(ModalCtx);

	return (
		<div
			className={`relative transition-all duration-200 w-[250px] h-[250px] rounded-lg bg-gray-900 overflow-hidden p-2`}
		>
			<p className="absolute top-0 left-0 z-10 bg-black w-8 h-8 text-white flex justify-center items-center rounded-br-lg shadow-lg">
				{index}
			</p>
			<div className="relative w-full h-full">
				<div className="absolute w-full h-full top-0 left-0 rounded-md overflow-hidden">
					<Image className="object-cover object-top" src={project.img} alt={`${project.title} img`} fill sizes="true" />
					<div className=" bg-gradient-to-t to-transparent from-black absolute w-full h-full"></div>
				</div>
				<div className="absolute top-0 left-0 w-full h-full flex justify-between p-2 items-end gap-2">
					<div className="flex flex-col justify-center items-start">
						<div className="tags-container w-[100px] flex justify-start items-center gap-2 pb-1 overflow-x-scroll overflow-y-hidden">
							{project.lang.map((langs, i) => (
								<p
									key={i}
									title={langs.fullTxt}
									className="base-bg-1 py-[1px] px-2 rounded-md h-fit w-full text-[12px]"
								>
									{langs.text}
								</p>
							))}
						</div>
						<p className="text-md font-semibold line-clamp-1" title={project.title}>
							{project.title}
						</p>
						<p className="text-[9px] font-thin">{project.completionTime}</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Link href={project.link} target={project.link === "#/" ? "_self" : `_blank`} className="w-full">
							<button className="base-bg-1 px-2 py-1 text-md rounded-sm hover:opacity-60 w-full">Website</button>
						</Link>
						<Link href={project.codeLink} target={project.codeLink === "#/" ? "_self" : `_blank`} className="w-full">
							<button className="border bg-white text-black hover:text-white border-white hover:bg-[#0E51FF] hover:border-transparent transition px-2 py-1 text-md rounded-sm w-full">
								Code
							</button>
						</Link>
						{project.design && (
							<button
								onClick={() => {
									setModalOpen(true);
									dispatchModal({
										type: "Modal",
										payload: {
											link: project.design,
										},
									});
								}}
								className="border border-white hover:bg-[#0E51FF] hover:border-transparent transition px-2 py-1 text-md rounded-sm w-full"
							>
								Design
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectTab;
