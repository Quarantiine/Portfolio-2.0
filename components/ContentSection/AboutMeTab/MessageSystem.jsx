import React, { useEffect, useRef, useState } from "react";
import ServiceAPI from "./ServiceAPI";
import CommentSection from "./CommentSection";

const MessageSystem = () => {
	const { addingMessageSystem } = ServiceAPI();
	const [name, setName] = useState(``);
	const [email, setEmail] = useState(``);
	const [message, setMessage] = useState(``);
	const [messageSent, setMessageSent] = useState(false);
	const [nameCheck, setNameCheck] = useState(false);
	const [emailCheck, setEmailCheck] = useState(false);
	const [messageCheck, setMessageCheck] = useState(false);
	const [activateSendBtn, setActivateSendBtn] = useState(false);
	const sendMessageRef = useRef();

	useEffect(() => {
		name.length > 2 ? setNameCheck(true) : setNameCheck(false);
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? setEmailCheck(true) : setEmailCheck(false);
		message.length > 5 ? setMessageCheck(true) : setMessageCheck(false);

		if (nameCheck && emailCheck && messageCheck) {
			setActivateSendBtn(true);
		}
		if (!nameCheck || !emailCheck || !messageCheck) {
			setActivateSendBtn(false);
		}

		// console.log(allMes.map((message) => message));
	});

	const settingName = (n) => {
		setName(n);
		// console.log(name);
	};

	const settingEmail = (e) => {
		setEmail(e);
		// console.log(email);
	};

	const settingMessage = (e) => {
		setMessage(e);
		// console.log(message);
	};

	const sendMessage = () => {
		addingMessageSystem(name, email, message);
		setMessageSent(true);
		setName(``);
		setEmail(``);
		setMessage(``);

		sendMessageRef.current = setTimeout(() => {
			setMessageSent(false);
			setActivateSendBtn(false);
		}, 3000);
	};

	return (
		<>
			<div
				className={`${
					messageSent ? "-translate-y-0" : "-translate-y-40"
				} transition duration-500 fixed z-[102] top-10 w-fit h-fit px-5 py-2 bg-green-500 rounded-md text-center flex justify-center items-center`}
			>
				<p>Comment Submitted</p>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-20">
				<form className="" action={null}>
					<div className="flex flex-col justify-center items-center gap-5 w-full sm:w-[500px] mx-auto">
						<div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center gap-5">
							<div className="flex flex-col justify-center items-start gap-1 w-full">
								<label htmlFor="name">Name:</label>
								<input
									className="text-white px-3 py-1 rounded-md bg-[#222] outline-none w-full"
									type="text"
									name="name"
									value={name}
									onChange={(e) => {
										settingName(e.target.value);
									}}
								/>
							</div>

							<div className="flex flex-col justify-center items-start gap-1 w-full">
								<label htmlFor="email">Email:</label>
								<input
									className="text-white px-3 py-1 rounded-md bg-[#222] outline-none w-full"
									type="email"
									name="email"
									value={email}
									onChange={(e) => {
										settingEmail(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className="w-full mx-auto flex flex-col justify-center items-center sm:items-start gap-1">
							<label htmlFor="message">Message</label>
							<textarea
								className="w-full min-h-[150px] max-h-[200px] text-white px-3 py-1 rounded-md bg-[#222] outline-none"
								name="message"
								value={message}
								onChange={(e) => {
									settingMessage(e.target.value);
								}}
							></textarea>
						</div>
						{activateSendBtn ? (
							<input
								className="w-full base-bg-1 py-1 rounded-md btn"
								ref={sendMessageRef}
								onClick={(e) => {
									e.preventDefault();
									sendMessage();
								}}
								type="submit"
								name="submit"
								value={"Send"}
							/>
						) : (
							<input
								className="w-full bg-[#333] py-1 rounded-md opacity-50"
								disabled
								type="submit"
								name="submit"
								value={"Waiting..."}
							/>
						)}
					</div>
				</form>

				<CommentSection />
			</div>
		</>
	);
};

export default MessageSystem;
