import Link from "next/link";
import React from "react";
import professionalProjects from "../../data/professionalProjects.json";

const ProfessionalProjects = () => {
	return (
		<div className="w-full flex flex-col flex-wrap justify-center items-center gap-12">
			<div className="flex flex-col flex-wrap justify-center items-center gap-4">
				<h1 className="text-center mx-auto text-4xl sm:text-5xl font-semibold">PROFESSIONAL PROJECTS</h1>
				<h2 className="text-lg font-thin text-center w-[70%]">
					{`Projects I've worked on at professional businesses and for clients as a experienced React Developer/UI Designer.`}
				</h2>
			</div>
			<div className="flex flex-wrap justify-center items-center gap-10">
				{professionalProjects.map((projects, i) => {
					return (
						<React.Fragment key={i}>
							<div
								className={`flex flex-col justify-center items-center gap-5 ${
									projects.fake ? "bg-[#111] border" : "hover:bg-[#000] bg-[#080808]"
								} px-5 sm:px-10 pt-5 pb-12 rounded-lg transition-all duration-300`}
							>
								{
									<>
										<div className="flex flex-col sm:flex-row justify-center gap-4 sm:justify-between items-center sm:gap-2 w-full">
											<div className="flex flex-col justify-center items-center sm:items-start w-full">
												<p
													className={`block sm:hidden mx-auto sm:mx-0 sm:mt-auto w-[90%] sm:w-64 text-center relative sm:bottom-1 text-sm px-3 py-1 mb-5 sm:mb-0 rounded-md bg-[#333] border-2 ${
														projects.working ? "border-green-500" : "border-orange-500"
													}`}
												>
													{projects.fake ? "N/A" : projects.working ? "Currently Employed" : "Past Job"}
												</p>
												<p className="text-sm text-center text-[#444]">COMPANY</p>
												<h1 className="text-2xl font-semibold rounded-md text-center">{projects.title}</h1>
											</div>
											<p
												className={`hidden sm:block sm:mt-auto w-[90%] ${
													projects.working ? "sm:w-48" : "sm:w-20"
												} text-center text-[10px] px-3 py-1 rounded-md bg-[#333] border-2 ${
													projects.working ? "border-green-500" : "border-orange-500"
												}`}
											>
												{projects.fake ? "N/A" : projects.working ? "Currently Employed" : "Past Job"}
											</p>
										</div>
									</>
								}
								<div className="flex flex-col justify-center items-center sm:items-start gap-1 w-full">
									<p className="text-sm text-center text-[#444]">WEBSITES</p>
									<div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:items-start gap-10 w-full">
										{projects.company.slice(0, 1).map((project, i) => (
											<ul key={i}>
												<li className="relative w-full text-center sm:text-start" key={i}>
													<div
														className={`w-[90px] text-center h-fit absolute -bottom-7 left-0 right-0 mx-auto sm:mx-0 px-2 py-1 rounded-md ${
															project.fullyFunctional ? "bg-green-500" : "bg-red-500"
														} bg-[#111] text-white`}
													>
														<p className="text-[10px]">{project.fullyFunctional ? "Completed" : "Not Completed"}</p>
													</div>
													<Link
														className="underline hover:no-underline text-center"
														target={project.link === "#/" ? "_self" : "_blank"}
														href={project?.link}
													>
														{project.name}
													</Link>
												</li>
											</ul>
										))}
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				})}
				<div className="w-full flex justify-center items-center">
					<Link
						className="text-center base-bg-1 px-5 py-2 rounded-md btn"
						href={"https://www.linkedin.com/in/daniel-ward-071010205/details/experience/"}
						target="_blank"
					>
						View More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProfessionalProjects;
