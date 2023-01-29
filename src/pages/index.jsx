import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState();

	return (
		<>
			<Head>
				<title>Home | DWP</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="" />
			</Head>
			<main></main>
		</>
	);
}
