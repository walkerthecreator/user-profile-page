import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req : NextRequest , { params } : { params :{ id : string } } ){
    const { github , instagram , linkedin , twitter , figma , youtube } = await req.json()
    const updatedLinks = await prisma.link.update({
        where : { id : parseInt(params.id , 10) } , 
        data : { github , instagram , linkedin , twitter , figma , youtube }
    })
    return NextResponse.json(updatedLinks)
}