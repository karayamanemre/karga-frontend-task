import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Paperclip } from "lucide-react";
import SubTask from "./SubTask";
import AttachmentItem from "./AttachmentItem";

export default function DetailTabs() {
	return (
		<Tabs
			defaultValue='boards'
			className='md:w-full md:mt-4 mt-2 flex flex-col rounded-xl border'>
			<TabsList className='md:w-full flex flex-wrap bg-gray-100 justify-start md:justify-around rounded-b-none'>
				<TabsTrigger
					value='attachment'
					className='border-none flex items-center gap-2 text-xs md:text-sm'>
					<Paperclip
						className='hidden md:block'
						size={16}
					/>
					Attachment
				</TabsTrigger>
				<TabsTrigger
					value='subtask'
					className='border-none flex items-center gap-2 text-xs md:text-sm'>
					<Paperclip
						className='hidden md:block'
						size={16}
					/>
					Sub Task
				</TabsTrigger>
				<TabsTrigger
					value='comment'
					className='border-none flex items-center gap-2 text-xs md:text-sm'>
					<Paperclip
						className='hidden md:block'
						size={16}
					/>
					Comment
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value='attachment'
				className='flex flex-col h-full'>
				<AttachmentItem />
			</TabsContent>
			<TabsContent
				value='subtask'
				className='flex flex-col'>
				<SubTask />
			</TabsContent>
		</Tabs>
	);
}
