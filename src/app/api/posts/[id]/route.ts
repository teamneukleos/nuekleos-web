import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { updatePostSchema } from "@/lib/models/validation-schema";
import { auth } from "@/auth";

export async function PATCH (req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const validation = updatePostSchema.safeParse(await req.json());

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.issues }, { status: 400 });
    }

    const { categoryIds, tagIds, ...postData } = validation.data;

    // If published status is being changed to true, set publishedAt
    const publishedAt = validation.data.published === true 
      ? new Date() 
      : validation.data.published === false 
        ? null 
        : undefined;

    // Delete existing relationships if new ones are provided
    if (categoryIds !== undefined) {
      await prisma.postCategory.deleteMany({
        where: { postId: params.id },
      });
    }

    if (tagIds !== undefined) {
      await prisma.postTag.deleteMany({
        where: { postId: params.id },
      });
    }

    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        ...postData,
        ...(publishedAt !== undefined && { publishedAt }),
        categories: categoryIds ? {
          create: categoryIds.map(categoryId => ({
            category: { connect: { id: categoryId } },
          })),
        } : undefined,
        tags: tagIds ? {
          create: tagIds.map(tagId => ({
            tag: { connect: { id: tagId } },
          })),
        } : undefined,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    // Transform the response
    const transformedPost = {
      ...post,
      categories: post.categories.map(pc => pc.category),
      tags: post.tags.map(pt => pt.tag),
    };

    return NextResponse.json(transformedPost);
  } catch (error) {
    console.error("Error in PATCH request:", error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE (req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Delete related records first
    await prisma.postCategory.deleteMany({
      where: { postId: params.id },
    });

    await prisma.postTag.deleteMany({
      where: { postId: params.id },
    });

    const post = await prisma.post.delete({
      where: { id: params.id },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error in DELETE request:", error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

