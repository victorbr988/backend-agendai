import { Barber, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createBarberInDatabase(data: Barber): Promise<string> {
  const clientCreated = await prisma.barber.create({
    data
  })

  return clientCreated.id
}