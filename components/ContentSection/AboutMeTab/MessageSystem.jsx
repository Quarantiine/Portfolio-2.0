import React, { useState } from "react";

const MessageSystem = () => {
	const [name, setName] = useState(``);
	const [email, setEmail] = useState(``);
	const [message, setMessage] = useState(``);

	const settingName = (n) => {
		setName(n);
	};

	const settingEmail = (e) => {
		setEmail(e);
	};

	const settingMessage = (e) => {
		setMessage(e);
	};

	return (
		<>
			<div className="w-full flex flex-col justify-center items-center">
				<p className="mx-auto w-[70%] rounded-md bg-yellow-600 my-5 py-2">COMING SOON</p>
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
					</div>
				</form>
			</div>
		</>
	);
};

export default MessageSystem;
