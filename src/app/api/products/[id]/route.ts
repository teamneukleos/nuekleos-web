import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { updateProductSchema } from "@/lib/models/validation-schema";

export async function PATCH (
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const validation = updateProductSchema.safeParse(await req.json());

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 }
    );
  }

  const updatedBook = await prisma.product.update({
    where: { id },
    data: validation.data,
  });

  return NextResponse.json(updatedBook);
}

export async function DELETE (
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const deletedProduct = await prisma.product.update({
    where: { id },
    data: { deleted_at: new Date() },
  });

  return NextResponse.json(deletedProduct);
}
