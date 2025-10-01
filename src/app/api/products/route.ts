import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { productSchema } from "@/lib/models/validation-schema";

export async function GET () {
  try {
    const products = await prisma.product.findMany({ where: { deleted_at: null } });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error in GET request:", error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST (req: NextRequest) {
  try {
    const validation = productSchema.safeParse(await req.json());

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.issues }, { status: 400 });
    }

    const product = await prisma.product.create({ data: { name: validation.data.name, description: validation.data.description } });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error in POST request:", error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
