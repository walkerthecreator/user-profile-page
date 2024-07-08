import prisma from "@/lib/prisma";
import { NextResponse , NextRequest } from "next/server";


interface UserData {
    name: string;
    email: string;
    profile: string;
    banner: string;
    links?: {
      github?: string;
      instagram?: string;
      twitter?: string;
      youtube?: string;
      figma?: string;
      linkedin?: string;
    };
    workExperiences?: Array<{
      name: string;
      organisation: string;
      startingDate: Date;
      endingDate: Date;
      isPresent: boolean;
    }>;
    projects?: Array<{
      name: string;
      description: string;
      link: string;
    }>;
    hackathons?: Array<{
      name: string;
      organisedBy: string;
      year: number;
    }>;
    certificates?: Array<{
      name: string;
      organisation: string;
      year: number;
    }>;
  }



export async function POST(req : NextRequest){
        try {
          const userData : UserData = await req.json();
    
          const result = await prisma.$transaction(async (prisma) => {
            // creating user meta data
            const user = await prisma.user.create({
              data: {
                name: userData.name,
                email: userData.email,
                profile: userData.profile,
                banner: userData.banner,
              },
            });
    
            // Create links data
            if (userData.links) {
              await prisma.link.create({
                data: {
                  ...userData.links,
                  userId: user.id,
                },
              });
            }
    
            // Creatnig workexperinces
            if (userData.workExperiences) {
              await prisma.workExperience.createMany({
                data: userData.workExperiences.map(work => ({
                  ...work,
                  userId: user.id,
                })),
              });
            }
    
            // creating projects data
            if (userData.projects) {
              await prisma.project.createMany({
                data: userData.projects.map(project => ({
                  ...project,
                  userId: user.id,
                })),
              });
            }
    
            // Creating hackathons data
            if (userData.hackathons) {
              await prisma.hackathon.createMany({
                data: userData.hackathons.map(hackathon => ({
                  ...hackathon,
                  userId: user.id,
                })),
              });
            }
    
            // creating certificates
            if (userData.certificates) {
              await prisma.certificate.createMany({
                data: userData.certificates.map(certificate => ({
                  ...certificate,
                  userId: user.id,
                })),
              });
            }
    
            return user;
          });
    
          return NextResponse.json({result})
        } catch (error) {
          console.error('Error creating user:', error);
          return NextResponse.json({ error: 'Failed to create user' });
        }
    }    
