"use client";
import { useState, useEffect } from "react";
import { useBoard } from "@/app/contexts/BoardContext";
import {
	Task as TaskType,
	Flag as FlagType,
	Board as BoardType,
} from "@/app/types";
import { DatePickerWithRange } from "./DatePicker";
import { DateRange } from "react-day-picker";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface EditTaskFormProps {
	task: TaskType;
	onSubmit: (task: TaskType) => void;
	onCancel: () => void;
}

export const EditTaskForm: React.FC<EditTaskFormProps> = ({
	task,
	onSubmit,
	onCancel,
}) => {
	const { flags, boards } = useBoard();
	const [editedTask, setEditedTask] = useState<TaskType>(task);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(task.startDate),
		to: new Date(task.endDate),
	});

	useEffect(() => {
		setEditedTask(task);
		setDateRange({
			from: new Date(task.startDate),
			to: new Date(task.endDate),
		});
	}, [task]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
	};

	const handleFlagChange = (selectedFlagId: string) => {
		setEditedTask((prevTask) => ({
			...prevTask,
			flagId: Number(selectedFlagId),
		}));
	};

	const handleBoardChange = (selectedBoardId: string) => {
		setEditedTask((prevTask) => ({
			...prevTask,
			boardId: Number(selectedBoardId),
		}));
	};

	const handleDateChange = (range: DateRange) => {
		setDateRange(range);
		setEditedTask((prevTask) => ({
			...prevTask,
			startDate: range.from ? range.from.toISOString() : prevTask.startDate,
			endDate: range.to ? range.to.toISOString() : prevTask.endDate,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(editedTask);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-4'>
			<Input
				type='text'
				name='name'
				value={editedTask.name}
				onChange={handleInputChange}
				placeholder='Task Name'
			/>
			<Textarea
				name='description'
				value={editedTask.description || ""}
				onChange={handleInputChange}
				placeholder='Description'
			/>
			<Select
				value={editedTask.flagId.toString()}
				onValueChange={handleFlagChange}>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{flags.map((flag: FlagType) => (
						<SelectItem
							key={flag.id}
							value={flag.id.toString()}>
							{flag.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select
				value={editedTask.boardId.toString()}
				onValueChange={handleBoardChange}>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{boards.map((board: BoardType) => (
						<SelectItem
							key={board.id}
							value={board.id.toString()}>
							{board.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<DatePickerWithRange
				selectedDates={dateRange}
				onDateChange={handleDateChange}
			/>
			<div className='flex justify-end space-x-2'>
				<Button
					onClick={onCancel}
					variant='secondary'>
					Cancel
				</Button>
				<Button
					type='submit'
					variant='outline'>
					Save Changes
				</Button>
			</div>
		</form>
	);
};
