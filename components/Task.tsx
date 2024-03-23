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
				<div className='w-4/6 flex flex-col h-full p-6 border-r'>
					<p className='self-end border rounded-lg p-2 text-sm'>
						{new Date(task.startDate).toLocaleDateString()} -{" "}
						{new Date(task.endDate).toLocaleDateString()}
					</p>
					<h2 className='text-xl font-semibold p-10'>{task.name}</h2>
					<p className='flex items-center px-10 py-6 text-sm'>
						ID: #{task.id}{" "}
						<Copy
							size={16}
							className='ml-2'
						/>
					</p>
					<div className='flex items-center gap-4 px-10'>
						<div className='flex flex-col justify-between p-10 gap-6'>
							<p>Task Status</p>
							<p className='font-semibold'>{boardName}</p>
						</div>
						<div className='flex flex-col p-10 gap-6'>
							<p>Assingment</p>
							<div className='flex items-center'>
								<Avatars />
								<Button
									size='icon'
									variant='ghost'
									className='w-8 h-8 border-dashed border rounded-full hover:bg-gray-200 focus:outline-none ml-2'>
									<Plus />
								</Button>
							</div>
						</div>
						<div className='flex flex-col p-10 gap-6'>
							<p>Priority</p>
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
					<div className='px-10 w-full'>
						<p>Description</p>
						<p className='text-sm'>
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
