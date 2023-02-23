import { Client, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function updateClientFields(uniqueIdentifier: string, data: Client): Promise<string> {
  const clientUpdated = await prisma.client.update({
    where: { uniqueIdentifier },
    data
  })

  return clientUpdated.id;
}
