import { NextApiResponse } from "next";

export async function GET(req: Request, res: NextApiResponse) {
	try {
		const token = req.headers.get("authorization")?.split(" ")[1];

		const response = await fetch(`${process.env.API_BASE_URL}/boards`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
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
