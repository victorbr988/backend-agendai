import { Barber, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function updateBarberFields(uniqueIdentifier: string, data: Barber): Promise<string> {
  const barberUpdated = await prisma.barber.update({
    where: { uniqueIdentifier },
    data
  })

  return barberUpdated.id;
}