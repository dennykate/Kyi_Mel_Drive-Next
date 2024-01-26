import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const { searchParams } = new URL(req.url as string);
    const targetUrl = searchParams.get("target_url");

    if (!targetUrl?.includes("mediafire"))
      return NextResponse.json({ message: "Invalid URL" }, { status: 400 });

    const response = await axios.get(targetUrl);

    const $ = cheerio.load(response.data);

    const link = $(".popsok").attr("href");

    return NextResponse.json({ mesage: "success", link });
  } catch (error) {
    return NextResponse.json({ message: "fail to load" });
  }
}
