"use client";
import { createContext, useContext, useState } from "react";

type UserType = {
	fullName: string;
	email: string;
} | null;

type UserContextType = {
	user: UserType;
	setUser: (user: UserType) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<UserType>(null);

	const value = { user, setUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
