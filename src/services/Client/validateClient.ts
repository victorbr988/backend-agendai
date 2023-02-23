import { ClientProps } from "../../types";
import { randomUUID } from "crypto";
import { encrypted } from "../../utils/bcrypt";
import { createClientInDatabase } from "../../model/Client/createClientInDatabase";
import { findUniqueUser } from "../../model/Client/fIndUniqueUser";

export async function validateClient(data: ClientProps): Promise<string> {
  const validations = [
    data.name.length < 4,
    data.password.length < 4,
    data.phoneNumber.length < 11,
    data.uniqueIdentifier.length < 11
  ]
  const isValidFields = validations.every(field => field === false)

  if(!isValidFields) {
    throw new Error("Campos inválidos")
  }

  const userAlreadExists = await findUniqueUser(data.uniqueIdentifier)

  if(userAlreadExists) throw new Error("Usuário já existe")

  const encryptedPassword = await encrypted(data.password);

  const objectCLientInformations = {
    id: randomUUID(),
    name: data.name,
    phoneNumber: data.phoneNumber,
    uniqueIdentifier: data.uniqueIdentifier,
    password: encryptedPassword
  }

  const createdClient =  await createClientInDatabase(objectCLientInformations)

  return createdClient
}