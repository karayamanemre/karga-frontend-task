import { Task as TaskType, Flag as FlagType } from "@/app/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { MdFlag } from "react-icons/md";

interface TaskProps {
	task: TaskType;
	flags: FlagType[];
}

export const Task: React.FC<TaskProps> = ({ task, flags }) => {
	const taskFlag = flags?.find((flag) => flag.id === task.flagId);

	return (
		<div className='rounded-lg border space-y-2 p-4 max-w-full flex flex-col'>
			<h4 className='text-xs'>{task.name}</h4>
			<div className='flex justify-between items-center'>
				<p className='text-sm'>{task.description}</p>
				<Avatar>
					<AvatarImage src='https://randomuser.me/api/portraits/women/23.jpg' />
				</Avatar>
			</div>
			<div className='flex items-center text-xs gap-2 text-gray-500'>
				<Calendar size={16} />
				<span>{`${new Date(task.startDate).toLocaleDateString()} - ${new Date(
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
	);
};
