"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				const { data } = await response.json();
				localStorage.setItem("token", data.token);
				router.push("/dashboard");
			} else {
				alert("Login failed. Please check your credentials and try again.");
			}
		} catch (error) {
			console.error("Login error:", error);
			alert(
				"An error occurred while trying to log in. Please try again later."
			);
		}
	};

	return (
		<div className='max-w-2xl mx-auto h-screen flex flex-col items-center justify-center p-6'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-4 w-full bg-accent p-10 shadow'>
				<h1 className='font-semibold'>Login</h1>
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
					<Input
						type='password'
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<Button
					variant='outline'
					type='submit'
					className='mt-10'>
					Login
				</Button>
			</form>
		</div>
	);
}
