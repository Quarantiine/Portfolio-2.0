import { TabBtnsCtx } from "@/pages";
import { useContext } from "react";
import AboutMeTab from "./AboutMeTab";
import ProjectTab from "./ProjectTab";

const ContentSection = () => {
	const { tabsBtns, btnClicked, setBtnClicked } = useContext(TabBtnsCtx);

	return (
		<>
			<div className="w-fit h-[500px] relative">
				{btnClicked === tabsBtns[0].title ? <ProjectTab /> : null}
				{btnClicked === tabsBtns[1].title ? <AboutMeTab /> : null}
			</div>
		</>
	);
};

export default ContentSection;
