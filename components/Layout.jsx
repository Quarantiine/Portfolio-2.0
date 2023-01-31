import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Loader from "./Loader";

const Layout = ({ children }) => {
	const [loadDoc, setLoadDoc] = useState(false);

	useEffect(() => {
		document.readyState ? setLoadDoc(true) : setLoadDoc(false);
	}, [loadDoc]);

	return (
		<>
			{!loadDoc && <Loader disableText={true} loaderTailwind={"fixed"} />}
			<div className={`bg-[#111] top-0 left-0 w-full text-white min-h-[100vh] pb-20`}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
