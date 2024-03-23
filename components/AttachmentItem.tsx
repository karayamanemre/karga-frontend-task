import { FileText } from "lucide-react";
import Image from "next/image";

export default function AttachmentItem() {
	const attachments = [
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/15.jpg",
			timeAgo: "2 mins ago",
			fileName: "Tech requirements.pdf",
			fileSize: "720 KB",
			addedMessage: "Added a file to Marketing site redesign",
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/15.jpg",
			timeAgo: "2 mins ago",
			fileName: "Tech requirements.pdf",
			fileSize: "720 KB",
			addedMessage: "Added a file to Marketing site redesign",
		},
	];

	return (
		<div className='relative'>
			<div className='absolute left-[27px] md:left-[30px] top-0 bottom-0 md:w-0.5 w-[1px] bg-gray-300'></div>

			{attachments.map((attachment, index) => (
				<div
					className='flex flex-col items-start px-4 relative w-full'
					key={index}>
					<div className='flex items-center gap-4'>
						<Image
							src={attachment.userImage}
							alt={attachment.userName}
							className='rounded-full md:w-8 md:h-8 h-6 w-6'
							width={32}
							height={32}
						/>
						<div className='flex items-center md:gap-4 gap-2'>
							<p className='font-medium text-xs md:text-sm'>
								{attachment.userName}
							</p>
							<p className='text-xs text-gray-500'>{attachment.timeAgo}</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-2 ml-12 md:text-sm text-xs'>
						<p className='text-xs hidden md:flex'>{attachment.addedMessage}</p>
						<div className='flex items-center md:gap-4 gap-2'>
							<FileText
								size={24}
								className='text-red-500'
							/>
							<div className='flex flex-col'>
								<p className='font-medium text-[10px] md:text-xs'>
									{attachment.fileName}
								</p>
								<p className='text-[10px] md:text-xs text-gray-500'>
									{attachment.fileSize}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
