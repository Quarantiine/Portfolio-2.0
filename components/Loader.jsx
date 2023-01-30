import React from "react";

const Loader = () => {
	return (
		<div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-xl absolute flex justify-center rounded-xl items-center w-full h-full z-[100]">
			<div className="border-2 border-white border-t-transparent animate-spin w-20 h-20 rounded-full"></div>
		</div>
	);
};

export default Loader;
