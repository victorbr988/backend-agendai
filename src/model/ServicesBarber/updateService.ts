import { Client, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function updateServiceFields(id: string, data: Client): Promise<string> {
  const clientUpdated = await prisma.services.update({
    where: { id },
    data
  })

  return clientUpdated.id;
}
