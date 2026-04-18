import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type QuotePayload = {
  fullName?: string;
  companyName?: string;
  companyEmail?: string;
  phoneNumber?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as QuotePayload;

  if (
    !payload.fullName ||
    !payload.companyName ||
    !payload.companyEmail ||
    !payload.phoneNumber ||
    !payload.message
  ) {
    return NextResponse.json(
      { message: "Please complete all fields before submitting." },
      { status: 400 }
    );
  }

  const record = {
    fullName: payload.fullName,
    companyName: payload.companyName,
    companyEmail: payload.companyEmail,
    phoneNumber: payload.phoneNumber,
    message: payload.message
  };

  try {
    await prisma.quoteRequest.create({
      data: record
    });
  } catch {
    const dataDir = path.join(process.cwd(), "data");
    const fallbackPath = path.join(dataDir, "quote-requests.json");

    await mkdir(dataDir, { recursive: true });

    const existing = await readFallbackRequests(fallbackPath);
    existing.push({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...record
    });

    await writeFile(fallbackPath, JSON.stringify(existing, null, 2), "utf8");
  }

  return NextResponse.json({
    message: "Your request has been received. Our team will contact you shortly."
  });
}

async function readFallbackRequests(filePath: string) {
  try {
    const content = await readFile(filePath, "utf8");
    return JSON.parse(content) as Array<Record<string, string>>;
  } catch {
    return [];
  }
}
