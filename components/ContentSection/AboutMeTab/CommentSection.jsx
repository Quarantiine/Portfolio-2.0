import React, { useEffect, useState } from "react";
import ServiceAPI from "./ServiceAPI";
import Image from "next/image";

const CommentSection = () => {
	const { allMes, deletingCommment } = ServiceAPI();
	const [closeDiscretion, setCloseDiscretion] = useState(false);

	// useEffect(() => console.log(allMes));

	const commentTimeSystem = (timeSec) => {
		const timeMili = timeSec * 1000;
		const displayDate = new Date(timeMili);
		const month = displayDate.getUTCMonth();
		const day = displayDate.getDate();
		const year = displayDate.getFullYear();
		const timeSystem = () => {
			const hour = displayDate.getHours() > 12 ? displayDate.getHours() - 12 : displayDate.getHours();
			const min = displayDate.getHours() < 11 ? `${displayDate.getMinutes()} am` : `${displayDate.getMinutes()} pm`;

			const fullTime = `${hour}:${min}`;
			return fullTime;
		};
		const fullDateText = `${month + 1}/${day}/${year} - Time: ${timeSystem()}`;
		// console.log(date.getTime() + time);
		// console.log(displayDate.toString());
		return fullDateText;
	};

	return (
		<>
			<div className="w-full md:w-[700px] h-fit flex flex-col justify-center items-center gap-10">
				<div className="flex flex-col justify-start items-start gap-1 w-full">
					<h1 className="text-3xl font-semibold mr-auto">COMMENT SECTION</h1>
					{!closeDiscretion && (
						<h3 className="flex justify-between items-center gap-2 px-5 text-xl text-white base-bg-1 py-2 rounded-md w-full font-light mr-auto">
							Please respect others comments
							<span>
								<Image
									onClick={() => setCloseDiscretion(true)}
									className="btn"
									src="/icons/close.svg"
									alt="account circle"
									width={20}
									height={20}
								/>
							</span>
						</h3>
					)}
				</div>
				<div className="flex flex-col justify-center items-start gap-10 w-full">
					{allMes.length > 0 ? (
						allMes.map((message, i) => (
							<React.Fragment key={message.id}>
								<div className="w-full h-fit flex flex-col justify-start items-start gap-2">
									<div className="flex justify-center items-center gap-2">
										<div className="relative w-[50px] h-[50px]">
											<Image
												className="bg-black p-1 rounded-full"
												src="/icons/account_circle.svg"
												alt="account circle"
												fill
												sizes="true"
											/>
										</div>
										<p className="text-xl font-medium">{message.name}</p>
										{message.email === "02danwar.buss@gmail.com" && (
											<p className="text-sm base-bg-1 px-3 py-1 rounded-md">CREATOR</p>
										)}
									</div>
									<div className="bg-black w-full h-fit px-4 py-2 text-start rounded-xl">
										<p className="text-xl">{message.message}</p>
										<div className="flex justify-between items-center gap-2">
											<p className="text-md text-[#333]">{commentTimeSystem(message.createdTime?.seconds)}</p>
											{message.email === "02danwar.buss@gmail.com" ? (
												<>
													<div className="relative w-fit h-fit">
														<div className="w-full h-full absolute top-0 left-0 bg-black opacity-90 cursor-not-allowed" />
														<Image
															onClick={() => deletingCommment(message.id)}
															className="btn"
															src={"/icons/delete.svg"}
															alt="trash"
															width={15}
															height={15}
														/>
													</div>
												</>
											) : (
												<Image
													onClick={() => deletingCommment(message.id)}
													className="btn"
													src={"/icons/delete.svg"}
													alt="trash"
													width={15}
													height={15}
												/>
											)}
										</div>
									</div>
								</div>
							</React.Fragment>
						))
					) : (
						<div className="bg-black w-full h-fit py-10 rounded-xl">
							<div className="w-20 h-20 border border-[#0E51FF] animate-spin border-t-transparent rounded-full mx-auto"></div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CommentSection;
