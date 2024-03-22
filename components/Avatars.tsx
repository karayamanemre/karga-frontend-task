import Image from "next/image";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export default function Avatars() {
	return (
		<div className='flex -space-x-3'>
			<Image
				className='rounded-full border-2 border-white'
				src='https://randomuser.me/api/portraits/men/25.jpg'
				alt='Avatar 1'
				width={32}
				height={32}
			/>
			<Image
				className='rounded-full border-2 border-white'
				src='https://randomuser.me/api/portraits/women/35.jpg'
				alt='Avatar 2'
				width={32}
				height={32}
			/>
			<Image
				className='rounded-full border-2 border-white'
				src='https://randomuser.me/api/portraits/women/34.jpg'
				alt='Avatar 3'
				width={32}
				height={32}
			/>
			<div className='w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-sm'>
				+5
			</div>
		</div>
	);
}
