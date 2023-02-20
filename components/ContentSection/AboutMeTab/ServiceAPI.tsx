import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
	getDocs,
	doc,
	onSnapshot,
	getFirestore,
	deleteDoc,
	addDoc,
	collection,
	query,
	serverTimestamp,
	orderBy,
} from "firebase/firestore";

const ServiceAPI = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyCx3IaXdZuuWu8Ex4wJvq6eJLZSEvLwhGw",
		authDomain: "messages-80c42.firebaseapp.com",
		projectId: "messages-80c42",
		storageBucket: "messages-80c42.appspot.com",
		messagingSenderId: "88237096134",
		appId: "1:88237096134:web:01d7fa90e3e12050a3ebc7",
		measurementId: "G-LF8BN8GN4N",
	};
	const [allMes, setAllMes] = useState([]);

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const colRefPath = `allMessages/portfolio/messages`;
	const colRef = collection(db, colRefPath);
	const q = query(colRef, orderBy("createdTime"));

	useEffect(() => {
		onSnapshot(q, (ss) => {
			let allMessages = [];
			setAllMes(allMessages);
			ss.docs.map((doc) => {
				allMessages.unshift({
					...doc.data(),
					id: doc.id,
				});
				// console.log(allMes);
			});
		});
		// getDocs(q)
		// 	.then((ss) => {
		// 		ss.docs.map((doc) => {
		// 			let allMessages: any = [];
		// 			allMessages.push({
		// 				...doc.data(),
		// 				id: doc.id,
		// 			});
		// 			setAllMes(allMessages);
		// 			console.log(allMes);
		// 		});
		// 	})
		// 	.catch((err) => console.log(err.message));
	}, []);

	const addingMessageSystem = async (name: string, email: string, message: string) => {
		await addDoc(colRef, {
			name: name,
			email: email,
			message: message,
			createdTime: serverTimestamp(),
		}).catch((err) => console.log(err.message));
	};

	const deletingCommment = async (id: string) => {
		const docRef = doc(db, colRefPath, id);
		deleteDoc(docRef).catch((err) => console.log(err.message));
	};

	return { allMes, addingMessageSystem, deletingCommment };
};

export default ServiceAPI;
