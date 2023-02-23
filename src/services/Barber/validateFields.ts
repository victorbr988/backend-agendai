import { BarberProps } from "../../types";
import { randomUUID } from "crypto";
import { encrypted } from "../../utils/bcrypt";
import { createBarberInDatabase } from "../../model/Barber/createBarberInDatabase";
import { findUniqueBarber } from "../../model/Barber/findUniqueBarber";
import { Barber } from "@prisma/client";

export async function validateBarber(data: BarberProps): Promise<string> {
  const validations = [
    data.name.length < 4,
    data.password.length < 4,
    data.phoneNumber.length < 11,
    data.uniqueIdentifier.length === 11 || data.uniqueIdentifier.length === 15
  ]
  const isValidFields = validations.every(field => field === false)

  if(!isValidFields) {
    throw new Error("Campos inválidos")
  }
  const barberAlreadExists = await findUniqueBarber(data.uniqueIdentifier)

  if(barberAlreadExists) throw new Error("Barbearia já existe")

  const encryptedPassword = await encrypted(data.password);

  const objectCLientInformations: Barber = {
    id: randomUUID(),
    name: data.name,
    phoneNumber: data.phoneNumber,
    uniqueIdentifier: data.uniqueIdentifier,
    password: encryptedPassword,
    assessements: 0,
    workingDays: data.workingDays,
    workingHours: data.workingHours
  }

  const createdBarber =  await createBarberInDatabase(objectCLientInformations)

  return createdBarber
}