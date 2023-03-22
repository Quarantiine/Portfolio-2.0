import React, { createContext, useEffect, useReducer, useState } from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import DesignModal from "./ContentSection/DesignModal";

export const ModalCtx = createContext();

const modalReducer = (state, { type, payload }) => {
	switch (type) {
		case "Modal":
			return {
				...state,
				link: payload.link,
			};
		default:
			console.log("Unknown Action: ", type, payload);
	}
};

const Layout = ({ children }) => {
	const [loadDoc, setLoadDoc] = useState(false);
	const [stateModal, dispatchModal] = useReducer(modalReducer, { link: "" });
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => console.log(stateModal.link));

	useEffect(() => {
		document.readyState ? setLoadDoc(true) : setLoadDoc(false);
	}, [loadDoc]);

	return (
		<ModalCtx.Provider value={{ stateModal, dispatchModal, modalOpen, setModalOpen }}>
			{!loadDoc && <Loader disableText={true} />}
			{modalOpen && <DesignModal link={stateModal.link} />}
			<div className={`bg-[#111] top-0 left-0 w-full text-white min-h-[100vh] pb-20`}>
				<main>{children}</main>
			</div>
			<Footer />
		</ModalCtx.Provider>
	);
};

export default Layout;
