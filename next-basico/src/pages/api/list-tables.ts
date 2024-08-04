// pages/api/list-tables.ts
import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const result =
      await sql`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`;
    return response.status(200).json({ tables: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
