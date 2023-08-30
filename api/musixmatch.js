import fetch from "node-fetch";

export default async function handler(request, response) {
    try {
        const { chart, country, number } = request.body;
        const API_URL = "https://api.musixmatch.com/ws/1.1/";

        const params = new URLSearchParams({
            country,
            page: "1",
            format: "json",
            apikey: import.meta.env.VITE_MUSIXMATCH_API_KEY ?? "",
            page_size: number ? number.toString() : "10",
        });

        const url = `${API_URL}chart.${chart}.get?${params}`;
        console.log(url);
        const res = await fetch(url);
        const data = await res.text();

        console.log("Parsed Data:", data);

        return response.json(data);
    } catch (error) {
        console.error("Error processing request:", error);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
