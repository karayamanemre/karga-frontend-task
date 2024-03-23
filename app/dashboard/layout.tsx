"use client";
import { BoardProvider } from "../contexts/BoardContext";
import { UserProfileProvider } from "../contexts/UserContext";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsSidebarOpen(true);
			} else {
				setIsSidebarOpen(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<BoardProvider>
			<UserProfileProvider>
				<main className='overflow-hidden'>
					<Sidebar
						isSidebarOpen={isSidebarOpen}
						toggleSidebar={toggleSidebar}
					/>
					<Navbar />
					<div className={`flex-1 ${!isSidebarOpen ? "ml-20" : "ml-[372px]"}`}>
						{children}
					</div>
				</main>
			</UserProfileProvider>
		</BoardProvider>
	);
}
