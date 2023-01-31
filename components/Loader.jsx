import React from "react";

const Loader = ({ loaderTailwind, disableText }) => {
	return (
		<div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-xl absolute flex gap-4 justify-center rounded-xl items-center w-full h-full z-[100]">
			{!disableText && <p className="text-xl animate-pulse">Coming Soon...</p>}
			<div
				className={`${loaderTailwind} border-2 border-white border-t-transparent animate-spin w-20 h-20 rounded-full`}
			></div>
		</div>
	);
};

export default Loader;
