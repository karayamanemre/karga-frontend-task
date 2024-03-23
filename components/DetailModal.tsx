"use client";
import { useBoard } from "@/app/contexts/BoardContext";
import { useState, useEffect } from "react";
import { Task as TaskType } from "@/app/types";
import {
	ChevronDown,
	ChevronRight,
	ChevronUp,
	Edit2Icon,
	Ellipsis,
	ListFilter,
	MessageSquareText,
	Move,
	Search,
	SquareArrowOutUpRight,
	Star,
	Trash,
	X,
} from "lucide-react";
import { RiHome6Line } from "react-icons/ri";
import { Button } from "./ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import ActivityItem from "./ActivityItem";
import { Input } from "./ui/input";
import { EditTaskForm } from "./EditTaskForm";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	task: TaskType;
}

const DetailModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	task,
}) => {
	const { deleteTask, fetchBoards } = useBoard();
	const [isEditFormVisible, setIsEditFormVisible] = useState(false);

	const handleTaskUpdate = async (updatedTask: TaskType) => {
		try {
			const response = await fetch(`/api/tasks/${task.code}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedTask),
			});
			const data = await response.json();
			if (response.ok) {
				setIsEditFormVisible(false);
				toast.success("Task updated successfully!");
				onClose();
				fetchBoards();
			} else {
				toast.error(`Error: ${data.message}`);
			}
		} catch (error) {
			toast.error("An error occurred while updating the task.");
		}
	};

	const handleEdit = () => {
		setIsEditFormVisible(true);
	};

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
			onClick={onClose}>
			<div
				className='bg-white rounded-lg border shadow-xl max-w-[95vw] w-full h-[95vh] overflow-hidden pb-0'
				onClick={(e) => e.stopPropagation()}>
				<div className='flex justify-center md:justify-between items-center border-b p-3 text-[#475467]'>
					<div className='md:flex hidden items-center gap-4  text-base font-semibold'>
						<ChevronUp />
						<ChevronDown />
						<RiHome6Line className='w-4 h-4 md:w-6 md:-h6' />
						<ChevronRight />
						<p>25 Proje</p>
						<ChevronRight />
						<p>Projects</p>
						<ChevronRight />
						<p className='text-[#2083D7]'>Frontend Case</p>
						<Move className='h-4 w-4 hidden md:flex' />
					</div>
					<div className='flex sm:justify-center justify-between w-full sm:w-max items-center text-[#98A2B3] md:gap-4 gap-0'>
						<Popover>
							<PopoverTrigger>
								<Button
									size='icon'
									variant='ghost'>
									<Ellipsis className='w-4 h-4 md:w-6 md:h-6' />
								</Button>
							</PopoverTrigger>
							<PopoverContent className='flex flex-col items-center justify-center gap-4 w-max'>
								<div className='flex gap-2 items-center'>
									<Button
										size='sm'
										onClick={handleEdit}
										className='flex items-center gap-2 text-xs md:text-sm'>
										<Edit2Icon className='w-4 h-4' />
										<p className='hidden md:block'>Taskı Düzenle</p>
									</Button>

									<Button
										variant='destructive'
										size='sm'
										onClick={() => {
											deleteTask(task.code);
											setTimeout(() => toast("Task başarıyla silindi"), 750);
										}}
										className='flex items-center gap-2 text-xs md:text-sm'>
										<Trash size={20} />
										<p className='hidden md:block'>Taskı Sil</p>
									</Button>
								</div>

								{isEditFormVisible && task && (
									<EditTaskForm
										task={task}
										onSubmit={handleTaskUpdate}
										onCancel={() => setIsEditFormVisible(false)}
									/>
								)}
							</PopoverContent>
						</Popover>

						<Button
							size='icon'
							variant='ghost'
							className='p-1 rounded-full hover:bg-gray-200 focus:outline-none'>
							<SquareArrowOutUpRight className='w-4 h-4 md:w-6 md:h-6' />
						</Button>
						<Button
							size='icon'
							variant='ghost'>
							<Star className='w-4 h-4 md:w-6 md:h-6' />
						</Button>
						<Button
							size='icon'
							variant='ghost'
							onClick={onClose}>
							<X className='w-4 h-4 md:w-6 md:h-6' />
						</Button>
					</div>
				</div>
				<div className='flex h-full justify-between'>
					{children}
					<div className='border-r h-full flex flex-col md:w-[400px] w-[150px]'>
						<div className='w-full border-b'>
							<div className='flex w-full md:p-3 p-1 items-center justify-between'>
								<h2 className='text-[#145389] font-semibold text-xs md:text-base'>
									Activity
								</h2>
								<div className='flex gap-4 text-[#98A2B3]'>
									<Search className='w-4 h-4 md:w-6 md:h-6' />
									<ListFilter className='w-4 h-4 md:w-6 md:h-6' />
								</div>
							</div>
						</div>
						<div className='flex flex-col overflow-scroll scrollbar-none'>
							<ActivityItem />
						</div>
					</div>
					<div className='md:flex flex-col md:p-6 md:gap-6 p-0 gap-2 hidden items-center justify-start h-full text-[#D0D5DD]'>
						<div className='flex flex-col items-center'>
							<MessageSquareText
								size={30}
								className='text-[#F79009] w-4 h-4 md:w-6 md:h-6'
							/>
							<span className='text-xs md:text-sm text-[#F79009]'>
								Activity
							</span>
						</div>

						<div className='flex flex-col items-center'>
							<MessageSquareText
								size={30}
								className='w-4 h-4 md:w-6 md:h-6'
							/>
							<span className='text-xs md:text-sm'>Condition</span>
						</div>
						<div className='flex flex-col items-center'>
							<MessageSquareText
								size={30}
								className='w-4 h-4 md:w-6 md:h-6'
							/>
							<span className='text-xs md:text-sm'>QA</span>
						</div>
						<div className='flex flex-col items-center'>
							<MessageSquareText
								size={30}
								className='w-4 h-4 md:w-6 md:h-6'
							/>
							<span className='text-xs md:text-sm'>Meetings</span>
						</div>
						<div className='flex flex-col items-center'>
							<MessageSquareText
								size={30}
								className='w-4 h-4 md:w-6 md:h-6'
							/>
							<span className='text-xs md:text-sm'>Docs</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailModal;
