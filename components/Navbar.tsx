import { Bell } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className='fixed top-0 left-0 w-full h-[72px] flex items-center justify-between px-4 bg-white border-b border-[#EAECF0]'>
			<h2 className='text-[#145389] leading-6 text-[20px] font-bold'>
				kargakarga
			</h2>
			<div className='flex items-center justify-center gap-4 text-[#667085]'>
				<Bell />
				<Bell />
				<Image
					src='/logo.png'
					alt='logo'
					width={50}
					height={50}
				/>
			</div>
		</nav>
	);
}
