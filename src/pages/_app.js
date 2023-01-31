import "@/styles/globals.css";
import Layout from "components/Layout";
import Loader from "components/Loader";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
	return (
		<Suspense fallback={<Loader />}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Suspense>
	);
}
