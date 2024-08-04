// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export default async function createTable() {
//   await sql`CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     email TEXT NOT NULL,
//     password TEXT NOT NULL
//   )`;
//   return NextResponse.text("Table created");
// }

import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const result = await sql` CREATE TABLE IF NOT EXISTS Users (
        id VARCHAR(255) PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        nome TEXT NOT NULL,
        senha TEXT NOT NULL
      );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
