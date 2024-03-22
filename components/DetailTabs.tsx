import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paperclip } from "lucide-react";

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
				className='flex'></TabsContent>
		</Tabs>
	);
}
