export async function POST(req: Request) {
	try {
		const token = req.headers
			.get("cookie")
			?.split("; ")
			.find((c) => c.startsWith("token="))
			?.split("=")[1];

		const taskUpdateData = await req.json();

		const response = await fetch(`${process.env.API_BASE_URL}/tasks`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(taskUpdateData),
		});

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: response.status,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Task add API route error:", error);
		return new Response(JSON.stringify({ error: "An error occurred" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
