import { Board as BoardType, Flag as FlagType } from "@/app/types";
import { Plus, PlusIcon } from "lucide-react";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { Task } from "./Task";
import Image from "next/image";
import { Droppable } from "react-beautiful-dnd";

interface BoardProps {
	board: BoardType;
	flags: FlagType[];
}

export const Board: React.FC<BoardProps> = ({ board, flags }) => {
	return (
		<div className='rounded-xl bg-white border w-[319px] min-h-[550px]'>
			<div className='w-full flex items-center shadow-b justify-between border-b p-4'>
				<div className='flex items-center gap-4'>
					<h3 className='text-base text-[#4E5BA6] uppercase'>{board.name}</h3>
					<span className='text-[#175CD3] bg-[#EFF8FF] text-xs w-5 h-5 rounded-full border-[#B2DDFF] text-center border flex items-center justify-center'>
						{board.tasks.length}
					</span>
				</div>
				<div className='text-[#98A2B3] flex items-center gap-4'>
					<Plus />
					<IoEllipsisHorizontalCircle size={22} />
				</div>
			</div>
			<Droppable droppableId={String(board.id)}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className='p-2 space-y-2 flex flex-col items-center h-full'>
						{board.tasks.length ? (
							board.tasks.map((task, index) => (
								<Task
									key={task.id}
									task={task}
									flags={flags}
									index={index}
								/>
							))
						) : (
							<div className='flex flex-col h-full items-center justify-center group'>
								<Image
									src='/board_empty.png'
									alt='No tasks'
									width={180}
									height={150}
								/>
								<p className='text-gray-500 mt-2 invisible group-hover:visible flex items-center text-lg'>
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
