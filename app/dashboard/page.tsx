"use client";
import { useBoard } from "../contexts/BoardContext";
import { DashboardTabs } from "@/components/DashboardTabs";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
	return (
		<div className='ml-[354px] mt-[72px] px-10 pt-6 max-h-screen'>
			<div className='flex items-center justify-between'>
				<h2 className='text-[#145389] text-[22px] font-[600]'>Frontend Case</h2>
				<Filter
					size={20}
					className='text-[#98a2b3]'
				/>
			</div>
			<DashboardTabs />
		</div>
	);
}
