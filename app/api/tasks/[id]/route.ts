export async function PUT(req: Request) {
	const url = new URL(req.url);
	const code = url.pathname.split("/").pop();

	try {
		const token = req.headers
			.get("cookie")
			?.split("; ")
			.find((c) => c.startsWith("token="))
			?.split("=")[1];

		const taskUpdateData = await req.json();

		const response = await fetch(`${process.env.API_BASE_URL}/tasks/${code}`, {
			method: "PUT",
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
		console.error("Task update API route error:", error);
		return new Response(JSON.stringify({ error: "An error occurred" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}

export async function DELETE(req: Request) {
	const url = new URL(req.url);
	const code = url.pathname.split("/").pop();

	try {
		const token = req.headers
			.get("cookie")
			?.split("; ")
			.find((c) => c.startsWith("token="))
			?.split("=")[1];

		const response = await fetch(`${process.env.API_BASE_URL}/tasks/${code}`, {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: response.status,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Task update API route error:", error);
		return new Response(JSON.stringify({ error: "An error occurred" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
