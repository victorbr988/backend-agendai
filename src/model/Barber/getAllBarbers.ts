import { Barber, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function findAllBarbers(): Promise<Barber[]> {
  const barbers: Barber[] = await prisma.barber.findMany({
    include: {
      schedules: {
        select: {
          dateSchedules: true,
          services: true,
          client: {
            select: {
              name: true,
              uniqueIdentifier: true,
              phoneNumber: true,
            }
          }
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
  return barbers
}