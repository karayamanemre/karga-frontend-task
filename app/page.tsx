"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useUser } from "./contexts/UserContext";

export default function Home() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const { setUser } = useUser();
	const router = useRouter();

	const togglePasswordVisibility = () => {
		setIsPasswordShown(!isPasswordShown);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage("");

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
				credentials: "include",
			});

			const data = await response.json();

			if (response.ok) {
				const { fullName, email } = data.data;
				setUser({ fullName, email });
				router.push("/dashboard");
			} else {
				const errorMessage =
					data.messages?.join(", ") ||
					"Giriş başarısız. Lütfen bilgilerinizi kontrol edip tekrar deneyin.";
				setErrorMessage(errorMessage);
			}
		} catch (error) {
			console.error("Login error:", error);
			setErrorMessage(
				"Giriş yapılırken beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
			);
		}
	};

	return (
		<div className='max-w-2xl mx-auto h-screen flex flex-col items-center justify-center p-6'>
			{errorMessage && (
				<div
					className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full'
					role='alert'>
					<strong className='font-bold'>Hata! </strong>
					<span className='block sm:inline'>{errorMessage}</span>
				</div>
			)}
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-4 w-full bg-accent p-10 sm:p-24 shadow-lg rounded-lg border'>
				<div className='flex items-center justify-center gap-2'>
					<LogIn />
					<h1 className='font-semibold text-2xl text-center'>Login</h1>
				</div>

				<div>
					<label>Email:</label>
					<Input
						type='email'
						value={email}
						onChange={handleEmailChange}
					/>
				</div>
				<div>
					<label>Password:</label>
					<div className='relative'>
						<Input
							type={isPasswordShown ? "text" : "password"}
							value={password}
							onChange={handlePasswordChange}
							className='pr-10'
						/>
						<div
							className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
							onClick={togglePasswordVisibility}>
							{isPasswordShown ? (
								<EyeOff
									size={20}
									className='text-gray-600 hover:text-gray-500 cursor-pointer'
								/>
							) : (
								<Eye
									size={20}
									className='text-gray-600 hover:text-gray-500 cursor-pointer'
								/>
							)}
						</div>
					</div>
				</div>
				<Button
					type='submit'
					className='mt-10 bg-[#363f72] text-white hover:bg-[#363f72]'>
					Login
				</Button>
			</form>
		</div>
	);
}
