export interface Flag {
	id: number;
	name: string;
	color: string;
	priority: number;
}

export interface Task {
	id: number;
	createdUserId: number;
	name: string;
	description: string | null;
	code: number;
	boardId: number;
	createdAt: string;
	deletedAt: string | null;
	deletedUserId: number | null;
	endDate: string;
	flagId: number;
	order: number;
	startDate: string;
	updatedAt: string;
}

export interface Board {
	completeAction: boolean;
	createdAt: string;
	deletedAt: string | null;
	id: number;
	name: string;
	openAction: boolean;
	order: number;
	tasks: Task[];
	updatedAt: string;
}
