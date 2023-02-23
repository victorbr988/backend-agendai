import { Barber, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function findUniqueBarber(uniqueIdentifier: string): Promise<Barber | null> {
  const clientFounded = await prisma.barber.findUnique({
    where: { uniqueIdentifier },
    include: {
      schedules: {
        select: {
          id: true,
          clientId: true
        }
      },
      services: {
        select: {
          name: true,
          price: true
        }
      }
    }
  })

  return clientFounded;
}