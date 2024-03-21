import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Board as BoardType, Flag as FlagType } from "@/app/types";
import { Board } from "./Board";

interface DashboardTabsProps {
	boards: BoardType[];
	flags: FlagType[];
}

export const DashboardTabs: React.FC<DashboardTabsProps> = ({
	boards,
	flags,
}) => {
	return (
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
					{boards.map((board) => (
						<Board
							key={board.id}
							board={board}
							flags={flags}
						/>
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
};
