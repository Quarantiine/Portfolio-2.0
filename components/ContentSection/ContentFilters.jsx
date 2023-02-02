import React, { useContext, useEffect, useState } from "react";
import { FilterBtnActivationCtx } from "./ProjectTab";

const ContentFilters = ({ totalProjects }) => {
	return (
		<>
			<TabBar totalProjects={totalProjects} />
		</>
	);
};

export default ContentFilters;

const TabBar = ({ totalProjects }) => {
	const filterBtns = [
		{ text: "ALL", dropdownText: [] },
		{ text: "DIFFICULTY", dropdownText: [{ text: "Easy" }, { text: "Intermidate" }, { text: "Hard" }] },
		{
			text: "FRAMEWORK/LANGUAGE",
			dropdownText: [{ text: "React" }, { text: "Html" }, { text: "Next.js" }, { text: "Create React App" }],
		},
		{
			text: "COMPLETION TIME",
			dropdownText: [{ text: "~ 1 Week" }, { text: "~ 2 weeks" }, { text: "~ 1 month" }, { text: "> 1 month" }],
		},
		{ text: "TYPE", dropdownText: [{ text: "My Web Designs" }, { text: "Replicated Websites" }] },
	];
	const { filterBtnText, setFilterBtnText, filterDropdownBtnText, setFilterDropdownBtnText } =
		useContext(FilterBtnActivationCtx);
	const [totalProjectsState, setTotalProjectsState] = useState(totalProjects.current?.childNodes.length);

	useEffect(() => {
		if (filterBtnText === "all") {
			setFilterBtnText(``);
			setFilterDropdownBtnText(``);
		}
		setTotalProjectsState(totalProjects.current?.childNodes.length);
	}, [
		filterBtnText,
		setFilterBtnText,
		filterDropdownBtnText,
		setFilterDropdownBtnText,
		setTotalProjectsState,
		totalProjectsState,
		totalProjects,
	]);

	return (
		<div className="hidden sm:flex w-fit h-[470px] rounded-lg bg-black flex-col justify-start items-start gap-3 p-3">
			<div className="flex justify-start items-center gap-3 w-full">
				<h1 className="text-center font-semibold text-4xl">FILTERS</h1>
				<p className="text-3xl font-normal base-col-1">{totalProjectsState}</p>
			</div>
			<div className="flex flex-col gap-1 justify-center items-start">
				{filterBtns.map((btn, i) => (
					<div key={i} className="filter-dropdown w-full relative p-1 flex flex-col justify-center items-start gap-1">
						<p onClick={(e) => setFilterBtnText(e.target.textContent.toLowerCase())} className="btn font-thin">
							{btn.text}
						</p>
						{filterBtnText === btn.text.toLowerCase() && (
							<div
								className={`filter-dropdown bg-[#111] rounded-md w-full flex flex-col justify-center items-start overflow-hidden`}
							>
								{btn.dropdownText.map((text, i) => (
									<button
										onClick={(e) => {
											setFilterDropdownBtnText(e.target.textContent.toLowerCase());
											// console.log(filterDropdownBtnText);
										}}
										key={i}
										className="cursor-pointer py-1 pl-2 text-start hover:bg-[#222] transition w-full"
									>
										{text.text}
									</button>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
