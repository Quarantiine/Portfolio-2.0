import React from "react";
import { initializeApp } from "firebase/app";
import { getDocs, doc, onSnapshot, getFirestore, deleteDoc, addDoc, collection } from "firebase/firestore";

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

	initializeApp(firebaseConfig);
	const db = getFirestore();
	const colRef = collection(db, "", "");

	return {};
};

export default ServiceAPI;
