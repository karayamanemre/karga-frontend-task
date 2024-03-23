import { Calendar, Diamond, Flag, Link } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";

export default function SubTask() {
	return (
		<div className='h-16 border-b w-full flex items-center justify-between px-2'>
			<div className='flex flex-col justify-around h-full'>
				<div className='flex gap-2 items-center md:text-sm text-xs'>
					<Input
						type='radio'
						className='md:w-4 md:h-4 w-2 h-2'
					/>
					<p className='font-semibold text-[#475467]'>Task Content</p>
					<Link
						size={16}
						className='text-[#D0D5DD]'
					/>
					<p className='text-[#D0D5DD]'>#1235671</p>
				</div>
				<div className='flex items-center gap-2 md:text-sm text-xs text-[#98A2B3]'>
					<Calendar size={16} />
					<p>05.01.2024 - 12.03.2024</p>
					<Diamond size={10} />
					<p>Milestone Name</p>
					<Flag
						size={16}
						className='text-red-500'
					/>
				</div>
			</div>
			<div>
				<Image
					src='https://randomuser.me/api/portraits/women/35.jpg'
					alt='task image'
					width={40}
					height={40}
					className='rounded-full'
				/>
			</div>
		</div>
	);
}
