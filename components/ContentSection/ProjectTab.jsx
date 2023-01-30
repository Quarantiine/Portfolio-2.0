const ProjectTab = () => {
	return (
		<>
			<div className="flex justify-center items-center">
				<TabBar />
				<TabContent />
			</div>
		</>
	);
};

const TabBar = () => {
	return (
		<div className="hidden sm:flex w-[270px] h-[497px] rounded-lg bg-black flex-col justify-start items-start gap-3 p-3">
			<h1 className="text-center font-semibold text-4xl">FILTERS</h1>
			<div className="flex flex-col gap-1 justify-center items-start">
				<p className="btn font-thin">DIFFICULTY</p>
				<p className="btn font-thin">FRAMEWORK/LANGUAGE</p>
				<p className="btn font-thin">COMPLETION TIME</p>
				<p className="btn font-thin">TYPE</p>
			</div>
		</div>
	);
};

const TabContent = () => {
	return (
		<div className="tab-content flex flex-wrap justify-center items-center gap-5 relative h-[495px] overflow-y-scroll px-5">
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
			<div className="w-[200px] h-[200px] rounded-lg bg-gray-900"></div>
		</div>
	);
};

export default ProjectTab;
