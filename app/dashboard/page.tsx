"use client";
import { DashboardTabs } from "@/components/DashboardTabs";
import { Board as BoardType, Flag as FlagType } from "../types";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
	const [boards, setBoards] = useState<BoardType[]>([]);
	const [flags, setFlags] = useState<FlagType[]>([]);

	const fetchBoardsAndFlags = async () => {
		try {
			const boardsResponse = await fetch("/api/boards", {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
				credentials: "include",
			});
			if (boardsResponse.ok) {
				const { data: boardsData } = await boardsResponse.json();
				setBoards(boardsData);
			}

			const flagsResponse = await fetch("/api/flags", {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
				credentials: "include",
			});
			if (flagsResponse.ok) {
				const { data: flagsData } = await flagsResponse.json();
				setFlags(flagsData);
			}
		} catch (error) {
			console.error("Failed to fetch data:", error);
		}
	};

	useEffect(() => {
		fetchBoardsAndFlags();
	}, []);

	console.log(boards);

	return (
		<div className='ml-[354px] mt-[72px] px-10 pt-6'>
			<div className='flex items-center justify-between'>
				<h2 className='text-[#145389] text-[22px] font-[600]'>Frontend Case</h2>
				<Filter
					size={20}
					className='text-[#98a2b3]'
				/>
			</div>
			<DashboardTabs
				boards={boards}
				flags={flags}
			/>
		</div>
	);
}
