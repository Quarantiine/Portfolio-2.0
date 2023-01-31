import { TabBtnsCtx } from "@/pages";
import { useContext } from "react";
import AboutMeTab from "./AboutMeTab";
import ProjectTab from "./ProjectTab";

const ContentSection = () => {
	const { tabsBtns, btnClicked, setBtnClicked } = useContext(TabBtnsCtx);

	return (
		<>
			<div className="w-full h-full py-10 relative">
				{btnClicked === tabsBtns[0].title ? <ProjectTab /> : null}
				{btnClicked === tabsBtns[1].title ? <AboutMeTab /> : null}
			</div>
		</>
	);
};

export default ContentSection;
