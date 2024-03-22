import {
	ChevronDown,
	ChevronRight,
	ChevronUp,
	Ellipsis,
	Move,
	SquareArrowOutUpRight,
	Star,
	Trash,
	X,
} from "lucide-react";
import { RiHome6Line } from "react-icons/ri";
import { Button } from "./ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const DetailModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
			onClick={onClose}>
			<div
				className='bg-white rounded-lg border shadow-xl max-w-7xl w-full'
				onClick={(e) => e.stopPropagation()}>
				<div className='flex justify-between items-center border-b p-4 text-[#475467]'>
					<div className='flex items-center gap-4 font-semibold'>
						<ChevronUp />
						<ChevronDown />
						<RiHome6Line size={22} />
						<ChevronRight />
						<p>25 Proje</p>
						<ChevronRight />
						<p>Projects</p>
						<ChevronRight />
						<p className='text-[#2083D7]'>Frontend Case</p>
						<Move />
					</div>
					<div className='flex items-center text-[#98A2B3] gap-4'>
						<Popover>
							<PopoverTrigger>
								<Button
									size='icon'
									variant='ghost'>
									<Ellipsis />
								</Button>
							</PopoverTrigger>
							<PopoverContent className='flex items-center justify-center gap-4 w-max'>
								<Button
									variant='destructive'
									size='sm'
									className='flex items-center gap-2'>
									<Trash size={20} />
									<p>Taskı Sil</p>
								</Button>
							</PopoverContent>
						</Popover>

						<Button
							size='icon'
							variant='ghost'
							className='p-1 rounded-full hover:bg-gray-200 focus:outline-none'>
							<SquareArrowOutUpRight />
						</Button>
						<Button
							size='icon'
							variant='ghost'>
							<Star />
						</Button>
						<Button
							size='icon'
							variant='ghost'
							onClick={onClose}>
							<X />
						</Button>
					</div>
				</div>
				<div className='flex h-[600px]'>{children}</div>
			</div>
		</div>
	);
};

export default DetailModal;
