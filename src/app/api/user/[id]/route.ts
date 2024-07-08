import { NextRequest, NextResponse } from "next/server";
import users from "@/constants/user"
import prisma from "@/lib/prisma";


export async function GET(req : NextRequest , { params }: { params : { id : string }  }){
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id , 10) },
        include: {
          links: true,
          work: true,
          projects: true,
          hackathons: true,
          certificates: true,
        },
      });    
      return NextResponse.json({ data : user })
  }


export async function PUT(req : NextRequest , { params } : { params :{ id : string } } ){
    const updateData = await req.json()
    const user = await prisma.user.update({
        where : { id : parseInt(params.id , 10) } , 
        data : { banner : updateData.banner , profile : updateData.banner }
    })
    return NextResponse.json(user)
    // const updatedData = await Prisma.models.updateOne({})
}