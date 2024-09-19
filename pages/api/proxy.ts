import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.query;

  if (!category || typeof category !== "string") {
    return res
      .status(400)
      .json({ error: "Category is required and must be a string" });
  }

  const apiUrl = `http://ad8b4b2c04ec.115532cb.alx-cod.online:5000/go/${category}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
