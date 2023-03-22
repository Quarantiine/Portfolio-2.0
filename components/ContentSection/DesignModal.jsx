import { ModalCtx } from "components/Layout";
import Image from "next/image";
import React, { useContext } from "react";

const DesignModal = ({ link }) => {
	return (
		<>
			<div className="fixed w-full h-full flex justify-center items-center z-40 bg-[rgba(0,0,0,0.8)] backdrop-blur-md">
				<CloseBtn />
				<iframe className="w-full h-full" src={link}></iframe>
			</div>
		</>
	);
};

const CloseBtn = () => {
	const { setModalOpen } = useContext(ModalCtx);

	return (
		<>
			<Image
				className="bg-black rounded-full w-fit h-fit z-50 absolute top-5 right-5 cursor-pointer"
				onClick={() => setModalOpen(false)}
				src={"/icons/close.svg"}
				alt="close"
				width={20}
				height={20}
			/>
		</>
	);
};

export default DesignModal;
