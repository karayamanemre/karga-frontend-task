import Image from "next/image";

export default function ActivityItem() {
	const activity = [
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/15.jpg",
			timeAgo: "2 mins ago",
			addedMessage: "Invited John Doe to the project",
			isOnline: true,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/25.jpg",
			timeAgo: "5 mins ago",
			addedMessage: "Created a new task for design",
			isOnline: false,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/35.jpg",
			timeAgo: "10 mins ago",
			addedMessage: "Commented on the logo design task",
			isOnline: true,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/45.jpg",
			timeAgo: "15 mins ago",
			addedMessage: "Completed the budget report",
			isOnline: false,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/15.jpg",
			timeAgo: "2 mins ago",
			addedMessage: "Invited John Doe to the project",
			isOnline: true,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/25.jpg",
			timeAgo: "5 mins ago",
			addedMessage: "Created a new task for design",
			isOnline: false,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/35.jpg",
			timeAgo: "10 mins ago",
			addedMessage: "Commented on the logo design task",
			isOnline: true,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/45.jpg",
			timeAgo: "15 mins ago",
			addedMessage: "Completed the budget report",
			isOnline: false,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/15.jpg",
			timeAgo: "2 mins ago",
			addedMessage: "Invited John Doe to the project",
			isOnline: true,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/25.jpg",
			timeAgo: "5 mins ago",
			addedMessage: "Created a new task for design",
			isOnline: false,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/35.jpg",
			timeAgo: "10 mins ago",
			addedMessage: "Commented on the logo design task",
			isOnline: true,
		},
		{
			userName: "Olivia Rhye",
			userImage: "https://randomuser.me/api/portraits/women/45.jpg",
			timeAgo: "15 mins ago",
			addedMessage: "Completed the budget report",
			isOnline: false,
		},
	];

	return (
		<div className='relative bg-[#F3F6FD]'>
			<div className='absolute left-[27px] md:left-[30px] top-0 bottom-0 md:w-0.5 w-[1px] bg-gray-300'></div>

			{activity.map((activity, index) => (
				<div
					className='flex flex-col items-start px-4 relative w-full'
					key={index}>
					<div className='relative flex items-center gap-4'>
						<div className='relative mt-4'>
							<Image
								src={activity.userImage}
								alt={activity.userName}
								className='rounded-full w-6 h-6 md:w-8 md:h-8'
								width={32}
								height={32}
							/>
							{activity.isOnline && (
								<span
									className='absolute right-0 bottom-0 block h-3 w-3 bg-green-500 rounded-full border-2 border-white'
									style={{ right: "-4px", bottom: "-4px" }}></span>
							)}
						</div>
						<div>
							<p className='font-medium text-xs md:text-sm'>
								{activity.userName}
							</p>
							<p className='md:text-xs text-[10px] text-gray-500'>
								{activity.timeAgo}
							</p>
						</div>
					</div>
					<div className='pl-12 text-sm pt-0 md:pt-2 md:pb-4 pb-1'>
						<p className='text-xs'>{activity.addedMessage}</p>
					</div>
					{activity.isOnline && (
						<span className='absolute right-10 top-4 md:block hidden h-4 w-4 bg-green-500 rounded-full border-2 border-white'></span>
					)}
				</div>
			))}
		</div>
	);
}
