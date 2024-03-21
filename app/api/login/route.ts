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

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
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
