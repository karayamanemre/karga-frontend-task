import { useState } from "react";
import { useBoard } from "@/app/contexts/BoardContext";
import { Flag as FlagType, Task as TaskType } from "@/app/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Ban, Check } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { DatePickerWithRange } from "./DatePicker";
import { DateRange } from "react-day-picker";

interface NewTaskFormProps {
	flags: FlagType[];
	boardId: number;
	onCancel: () => void;
	setShowNewTaskInputs: (show: boolean) => void;
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({
	flags,
	boardId,
	onCancel,
	setShowNewTaskInputs,
}) => {
	const { fetchBoards } = useBoard();
	const [newTaskName, setNewTaskName] = useState("");
	const [newTaskDescription, setNewTaskDescription] = useState("");
	const [selectedFlagId, setSelectedFlagId] = useState(flags[0]?.id.toString());
	const [dateRange, setDateRange] = useState<DateRange | undefined>();
	const [selectedUnit, setSelectedUnit] = useState("");

	const handleSelectChange = (value: string) => {
		setSelectedFlagId(value);
	};

	const handleUnitChange = (value: string) => {
		setSelectedUnit(value);
	};

	const handleNewTaskSubmit = async () => {
		const newTask = {
			name: newTaskName,
			description: newTaskDescription,
			boardId: boardId,
			flagId: Number(selectedFlagId),
			startDate: dateRange?.from
				? dateRange.from.toISOString()
				: new Date().toISOString(),
			endDate: dateRange?.to
				? dateRange.to.toISOString()
				: new Date().toISOString(),
			selectedUnit,
		};

		try {
			const response = await fetch("/api/tasks", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTask),
				credentials: "include",
			});
			const data = await response.json();
			if (response.ok) {
				setShowNewTaskInputs(false);
				setNewTaskName("");
				setNewTaskDescription("");
				setSelectedFlagId(flags[0]?.id.toString());
				fetchBoards();
			} else {
				throw new Error(data.messages?.join(", ") || "Failed to add task");
			}
		} catch (error) {
			console.error("Error adding task:", error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center gap-2 p-2'>
			<Input
				type='text'
				placeholder='Task Name'
				value={newTaskName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setNewTaskName(e.target.value)
				}
				className='h-8'
			/>
			<Textarea
				placeholder='Description'
				value={newTaskDescription}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
					setNewTaskDescription(e.target.value)
				}
				className='h-14'
			/>
			<Select
				value={selectedFlagId}
				onValueChange={handleSelectChange}>
				<SelectTrigger>
					<SelectValue placeholder='Priority' />
				</SelectTrigger>
				<SelectContent>
					{flags.map((flag) => (
						<SelectItem
							key={flag.id}
							value={flag.id.toString()}>
							{flag.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<DatePickerWithRange
				selectedDates={dateRange}
				onDateChange={setDateRange}
			/>
			<div className='flex items-center justify-between w-full'>
				<Button
					onClick={onCancel}
					size='icon'
					variant='destructive'
					className='h-8 w-8'>
					<Ban size={20} />
				</Button>
				<Button
					onClick={handleNewTaskSubmit}
					size='icon'
					variant='outline'
					className='h-8 w-8'>
					<Check size={20} />
				</Button>
			</div>
		</div>
	);
};
