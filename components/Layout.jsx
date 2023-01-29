import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const [loadDoc, setLoadDoc] = useState(false);

	useEffect(() => {
		document.readyState ? setLoadDoc(true) : setLoadDoc(false);
	}, [loadDoc]);

	return (
		<>
			{!loadDoc && (
				<div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-xl absolute flex justify-center items-center w-full h-full z-[100]">
					<div className="border-2 border-white border-t-transparent animate-spin w-20 h-20 rounded-full"></div>
				</div>
			)}
			<div className={`bg-[#111] top-0 left-0 w-full text-white min-h-[100vh] pb-20`}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
