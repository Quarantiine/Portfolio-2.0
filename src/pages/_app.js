import "@/styles/globals.css";
import Layout from "components/Layout";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Suspense>
	);
}
