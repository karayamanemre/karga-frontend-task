"use client";
import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

interface UserProfileType {
	fullName: string;
	email: string;
}

interface UserProfileContextType {
	user: UserProfileType | null;
	setUser: React.Dispatch<React.SetStateAction<UserProfileType | null>>;
}

const UserProfileContext = createContext<UserProfileContextType | null>(null);

export const useUserProfile = () =>
	useContext(UserProfileContext) as UserProfileContextType;

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<UserProfileType | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await fetch("/api/profile", {
					method: "GET",
					headers: {
						Accept: "application/json",
					},
					credentials: "include",
				});
				if (response.ok) {
					const { data } = await response.json();
					setUser(data);
				} else {
					throw new Error("Failed to fetch profile");
				}
			} catch (error) {
				console.error("Failed to fetch profile:", error);
			}
		};

		fetchProfile();
	}, []);

	return (
		<UserProfileContext.Provider value={{ user, setUser }}>
			{children}
		</UserProfileContext.Provider>
	);
};
