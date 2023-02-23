import { Client, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createClientInDatabase(data: Client): Promise<string> {
  const clientCreated = await prisma.client.create({
    data
  })

  return clientCreated.id
}