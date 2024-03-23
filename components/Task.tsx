import { useBoard } from "@/app/contexts/BoardContext";
import { Task as TaskType } from "@/app/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Copy, Plus } from "lucide-react";
import { MdFlag } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";
import DetailModal from "./DetailModal";
import { useState } from "react";
import Avatars from "./Avatars";
import { Button } from "./ui/button";
import DetailTabs from "./DetailTabs";

interface TaskProps {
	task: TaskType;
	index: number;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
	const { flags, boards } = useBoard();
	const taskFlag = flags.find((flag) => flag.id === task.flagId);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const boardName =
		boards.find((board) => board.id === task.boardId)?.name || "Unknown Board";

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<>
			<Draggable
				draggableId={String(task.code)}
				index={index}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						onClick={handleOpenModal}
						className='rounded-lg border bg-white space-y-2 p-4 w-full flex flex-col'>
						<h4 className='text-xs'>{task.name}</h4>
						<div className='flex justify-between items-center'>
							<p className='text-sm'>{task.description}</p>
							<Avatar>
								<AvatarImage src='https://randomuser.me/api/portraits/women/23.jpg' />
							</Avatar>
						</div>
						<div className='flex items-center text-xs gap-2 text-gray-500'>
							<Calendar size={16} />
							<span>{`${new Date(
								task.startDate
							).toLocaleDateString()} - ${new Date(
								task.endDate
							).toLocaleDateString()}`}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-xs'>Milestone Name</span>
							{taskFlag && (
								<>
									<MdFlag
										style={{ color: taskFlag.color }}
										size={22}
									/>
								</>
							)}
						</div>
					</div>
				)}
			</Draggable>
			<DetailModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				task={task}>
				<div className='md:w-4/6 w-full flex flex-col h-full md:p-6 p-2 border-r'>
					<p className='self-end border rounded-lg p-2 text-xs md:text-sm'>
						{new Date(task.startDate).toLocaleDateString()} -{" "}
						{new Date(task.endDate).toLocaleDateString()}
					</p>
					<h2 className='md:text-xl text-base font-semibold md:p-10 p-2'>
						{task.name}
					</h2>
					<p className='flex items-center md:px-10 md:py-6 px-2 py-0 text-xs md:text-sm'>
						ID: #{task.id} <Copy className='ml-2 md:w-4 md:h-4 h-3 w-3' />
					</p>
					<div className='flex flex-col md:flex-row md:items-center items-start md:gap-4 gap-1 md:px-10 px-2'>
						<div className='flex flex-col justify-between md:p-10 py-2 md:gap-6 gap-1'>
							<p className='text-xs md:text-base'>Task Status</p>
							<p className='font-semibold text-xs md:text-base'>{boardName}</p>
						</div>
						<div className='flex flex-col md:p-10 gap-2 md:gap-6'>
							<p className='text-xs md:text-base'>Assingment</p>
							<div className='flex items-center'>
								<Avatars />
								<Button
									size='icon'
									variant='ghost'
									className='md:w-8 md:h-8 w-4 h-4 border-dashed border rounded-full hover:bg-gray-200 focus:outline-none ml-2'>
									<Plus />
								</Button>
							</div>
						</div>
						<div className='flex flex-col md:p-10 gap-2 md:gap-6'>
							<p className='text-xs md:text-base'>Priority</p>
							{taskFlag && (
								<>
									<MdFlag
										style={{ color: taskFlag.color }}
										className='md:w-5 md:h-5 h-4 w-4'
									/>
								</>
							)}
						</div>
					</div>
					<div className='md:px-10 px-2 w-full'>
						<p className='text-xs md:text-base'>Description</p>
						<p className='text-xs md:text-sm'>
							{task.description} Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Velit aspernatur, illum quidem minima ipsum
							modi. Lorem ipsum dolor sit amet.
						</p>
					</div>
					<DetailTabs />
				</div>
			</DetailModal>
		</>
	);
};
