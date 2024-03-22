"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
	FC,
} from "react";
import { Board as BoardType, Flag as FlagType } from "../types";

interface BoardContextType {
	boards: BoardType[];
	setBoards: React.Dispatch<React.SetStateAction<BoardType[]>>;
	flags: FlagType[];
	setFlags: React.Dispatch<React.SetStateAction<FlagType[]>>;
	fetchBoards: () => void;
}

const BoardContext = createContext<BoardContextType | null>(null);

export const useBoard = () => useContext(BoardContext) as BoardContextType;

interface BoardProviderProps {
	children: ReactNode;
}

export const BoardProvider: FC<BoardProviderProps> = ({ children }) => {
	const [boards, setBoards] = useState<BoardType[]>([]);
	const [flags, setFlags] = useState<FlagType[]>([]);

	const fetchBoards = async () => {
		try {
			const response = await fetch("/api/boards");
			if (response.ok) {
				const { data: boardsData } = await response.json();
				setBoards(boardsData);
			} else {
				throw new Error("Failed to fetch boards");
			}
		} catch (error) {
			console.error("Error fetching boards:", error);
		}
	};
	useEffect(() => {
		const fetchFlags = async () => {
			try {
				const response = await fetch("/api/flags");
				const { data: flagsData } = await response.json();
				setFlags(flagsData);
			} catch (error) {
				console.error("Error fetching flags:", error);
			}
		};

		fetchFlags();
		fetchBoards();
	}, []);

	return (
		<BoardContext.Provider
			value={{
				boards,
				setBoards,
				flags,
				setFlags,
				fetchBoards,
			}}>
			{children}
		</BoardContext.Provider>
	);
};
