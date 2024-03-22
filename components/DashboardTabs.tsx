"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Board as BoardType, Flag as FlagType } from "@/app/types";
import { Board } from "./Board";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

interface DashboardTabsProps {
	boards: BoardType[];
	flags: FlagType[];
}

export const DashboardTabs: React.FC<DashboardTabsProps> = ({
	boards,
	flags,
}) => {
	const [localBoards, setLocalBoards] = useState<BoardType[]>([]);

	useEffect(() => {
		setLocalBoards(boards);
	}, [boards]);

	const onDragEnd = async (result: DropResult) => {
		const { draggableId, source, destination } = result;

		if (!destination) return;

		if (destination.droppableId === source.droppableId) {
			const newBoards = [...localBoards];
			const sourceBoard = newBoards.find(
				(board) => board.id === parseInt(source.droppableId)
			);
			const movedTask = sourceBoard?.tasks.find(
				(task) => String(task.code) === draggableId
			);
			sourceBoard?.tasks.splice(source.index, 1);
			if (movedTask) {
				sourceBoard?.tasks.splice(destination.index, 0, movedTask);
			}

			setLocalBoards(newBoards);
		} else {
			const newBoards = [...localBoards];
			const sourceBoard = newBoards.find(
				(board) => board.id === parseInt(source.droppableId)
			);
			const destinationBoard = newBoards.find(
				(board) => board.id === parseInt(destination.droppableId)
			);
			const movedTask = sourceBoard?.tasks.find(
				(task) => String(task.code) === draggableId
			);
			sourceBoard?.tasks.splice(source.index, 1);
			if (movedTask) {
				destinationBoard?.tasks.splice(destination.index, 0, movedTask);
			}

			setLocalBoards(newBoards);
		}

		const boardId = parseInt(destination.droppableId);
		const taskCode = draggableId;

		try {
			const response = await fetch(`/api/tasks/${taskCode}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ boardId }),
				credentials: "include",
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.messages.join(", "));
			}
		} catch (error) {
			console.error("Failed to update task:", error);
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Tabs
				defaultValue='boards'
				className='w-full mt-4 flex flex-col'>
				<TabsList className='w-max'>
					<TabsTrigger value='boards'>Boards</TabsTrigger>
					<TabsTrigger value='list'>List</TabsTrigger>
					<TabsTrigger value='other1'>Other</TabsTrigger>
					<TabsTrigger value='other2'>Other</TabsTrigger>
					<TabsTrigger value='other3'>Other</TabsTrigger>
					<TabsTrigger value='other4'>Other</TabsTrigger>
					<TabsTrigger
						value='other5'
						className='border-none'>
						Other
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value='boards'
					className='flex overflow-x-auto py-2 scrollbar-none'>
					<div className='flex space-x-2'>
						{localBoards.map((board) => (
							<Board
								key={board.id}
								board={board}
								flags={flags}
							/>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</DragDropContext>
	);
};
