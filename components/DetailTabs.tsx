import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Paperclip } from "lucide-react";
import SubTask from "./ui/SubTask";
import AttachmentItem from "./AttachmentItem";

export default function DetailTabs() {
	return (
		<Tabs
			defaultValue='boards'
			className='w-full mt-4 flex flex-col rounded-xl border'>
			<TabsList className='w-full bg-gray-100 justify-around rounded-b-none'>
				<TabsTrigger
					value='attachment'
					className='border-none flex items-center gap-2'>
					<Paperclip size={16} />
					Attachment
				</TabsTrigger>
				<TabsTrigger
					value='subtask'
					className='border-none flex items-center gap-2'>
					<Paperclip size={16} />
					Sub Task
				</TabsTrigger>
				<TabsTrigger
					value='comment'
					className='border-none flex items-center gap-2'>
					<Paperclip size={16} />
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
				<SubTask />
			</TabsContent>
		</Tabs>
	);
}
