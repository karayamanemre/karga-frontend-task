"use client";
import { useCallback, useState } from "react";
import {
	Board as BoardType,
	Flag as FlagType,
	Task as TaskType,
} from "@/app/types";
import { Plus, PlusIcon } from "lucide-react";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { Task } from "./Task";
import Image from "next/image";
import { Droppable } from "@hello-pangea/dnd";
import { NewTaskForm } from "./NewTaskForm";

interface BoardProps {
	board: BoardType;
	flags: FlagType[];
}

export const Board: React.FC<BoardProps> = ({ board, flags }) => {
	const [showNewTaskInputs, setShowNewTaskInputs] = useState(false);

	const addNewTask = useCallback(async () => {
		setShowNewTaskInputs(true);
	}, []);

	return (
		<div className='rounded-xl bg-white border w-[319px] h-[550px] overflow-x-auto scrollbar-none'>
			<div className='w-full sticky bg-white z-20 top-0 flex items-center shadow-b justify-between border-b p-4'>
				<div className='flex items-center gap-4'>
					<h3 className='text-base text-[#4E5BA6] uppercase'>{board.name}</h3>
					<span className='text-[#175CD3] bg-[#EFF8FF] text-xs w-5 h-5 rounded-full border-[#B2DDFF] text-center border flex items-center justify-center'>
						{board.tasks.length}
					</span>
				</div>
				<div className='text-[#98A2B3] flex items-center gap-4'>
					<button
						onClick={addNewTask}
						type='button'
						className=''>
						<Plus />
					</button>
					<IoEllipsisHorizontalCircle size={22} />
				</div>
			</div>
			{showNewTaskInputs && (
				<NewTaskForm
					flags={flags}
					boardId={board.id}
					onCancel={() => setShowNewTaskInputs(false)}
					setShowNewTaskInputs={setShowNewTaskInputs}
				/>
			)}
			<Droppable droppableId={String(board.id)}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className='p-2 space-y-2 flex flex-col items-center h-full pb-2'>
						{board.tasks.length ? (
							board.tasks.map((task, index) => (
								<Task
									key={task.id}
									task={task}
									index={index}
								/>
							))
						) : showNewTaskInputs ? null : (
							<div className='flex flex-col h-full items-center justify-center group'>
								<Image
									src='/board_empty.png'
									alt='No tasks'
									width={180}
									height={150}
									style={{ width: 180, height: 150 }}
								/>
								<p
									onClick={addNewTask}
									className='text-gray-500 mt-2 invisible group-hover:visible flex items-center text-lg cursor-pointer'>
									<PlusIcon
										size={16}
										className='mr-2'
									/>
									New Task
								</p>
							</div>
						)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};
