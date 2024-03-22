"use client";
import { useUser } from "@/app/contexts/UserContext";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart2, Bell } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
	const { user } = useUser();

	return (
		<aside className='fixed top-0 left-0 h-full pt-[72px] flex'>
			<div className='w-[72px] bg-[#363f72] flex flex-col items-center justify-between py-10 text-[#667085] px-2'>
				<div className='flex flex-col gap-8'>
					<Bell size={24} />
					<Bell size={24} />
					<Bell size={24} />
					<Bell size={24} />
				</div>
				<div className='flex flex-col gap-8 items-center'>
					<Bell size={24} />
					<Bell size={24} />
					<Bell size={24} />
					<Bell size={24} />
					<Image
						src='https://randomuser.me/api/portraits/men/35.jpg'
						alt='avatar'
						width={48}
						height={48}
						className='rounded-full'
					/>
				</div>
			</div>
			<div className='bg-white border-r border-[#EAECF0] w-[282px] py-10 px-3 flex flex-col gap-4 items-start justify-between'>
				<div className='w-full'>
					<h2 className='text-base text-[#101828] font-[500] ml-2'>Projeler</h2>
					<Accordion
						type='single'
						collapsible
						className='text-sm w-full gap-2 flex flex-col'>
						<AccordionItem
							value='item-1'
							className='border-none'>
							<AccordionTrigger className='hover:bg-gray-100 px-4 py-2 rounded-lg border-none '>
								<span className='w-2 h-2 rounded-full bg-red-500'></span>Proje
								İsim 1
							</AccordionTrigger>
							<AccordionContent className='flex flex-col items-start text-sm'>
								<ul className='w-full space-y-2 text-xs'>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Overview
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Notifications
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Analytics
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Reports
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value='item-2'
							className='border-none'>
							<AccordionTrigger className='hover:bg-gray-100 px-4 py-2 rounded-lg border-none '>
								<span className='w-2 h-2 rounded-full bg-[#2083D7]'></span>Proje
								İsim 2
							</AccordionTrigger>
							<AccordionContent>
								<ul className='w-full space-y-2'>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Overview
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Notifications
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Analytics
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Reports
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value='item-3'
							className='border-none'>
							<AccordionTrigger className='hover:bg-gray-100 px-4 py-2 rounded-lg border-none '>
								<span className='w-2 h-2 rounded-full bg-[#FEC84B]'></span>Proje
								İsim 3
							</AccordionTrigger>
							<AccordionContent>
								<ul className='w-full space-y-2'>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Overview
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Notifications
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Analytics
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Reports
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value='item-4'
							className='border-none'>
							<AccordionTrigger className='hover:bg-gray-100 px-4 py-2 rounded-lg border-none '>
								<span className='w-2 h-2 rounded-full bg-[#7F56D9]'></span>Proje
								İsim 4
							</AccordionTrigger>
							<AccordionContent>
								<ul className='w-full space-y-2'>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Overview
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Notifications
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Analytics
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
									<li className='flex items-center justify-between w-full hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg'>
										Reports
										<span className='text-xs border rounded-full bg-gray-100 py-1 px-2'>
											10
										</span>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div className='text-[#667085] text-sm flex justify-start items-center gap-4 hover:bg-gray-100 w-full p-2 rounded-lg'>
						<BarChart2 />
						<p>Proje Oluştur</p>
					</div>
				</div>
				{user && (
					<div>
						<p className='text-sm font-semibold'>{user.fullName}</p>
						<p className='text-sm'>{user.email}</p>
					</div>
				)}
			</div>
		</aside>
	);
}
