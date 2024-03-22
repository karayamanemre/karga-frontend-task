export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, password } = body;

		const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();

		if (response.ok) {
			const token = data.data.token;
			const headers = new Headers({
				"Content-Type": "application/json",
				"Set-Cookie": `token=${token}; HttpOnly; Path=/; SameSite=Strict; Secure`,
			});
			return new Response(JSON.stringify({ status: "success" }), {
				status: 200,
				headers: headers,
			});
		} else {
			return new Response(JSON.stringify(data), {
				status: response.status,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	} catch (error) {
		console.error("Login API route error:", error);
		return new Response(JSON.stringify({ error: "An error occurred" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
