import { ScheduleProps, ServiceProps } from "../../types";
import { findUniqueBarber } from "../../model/Barber/findUniqueBarber";
import { findUniqueUser } from "../../model/Client/fIndUniqueUser";
import { createScheduleInDatabase } from "../../model/Schedules/createScheduleInDatabase";
import { randomUUID } from "crypto";

export async function validateSchedule(data: ScheduleProps): Promise<string> {
  const barberFounded: any = await findUniqueBarber(data.barberId)
  const clientFounded = await findUniqueUser(data.clientId)

  if(!barberFounded) {
    throw new Error("Barbearia sem cadastro")
  }

  if(!clientFounded) {
    throw new Error("Cliente sem cadastro")
  }

  const daysOfTheWeek: any = {
    0: "Domingo",
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado",
  }
  const servicesBarber: any = []
  barberFounded.services.forEach((service: ServiceProps) => servicesBarber.push(service.name))

  const getDayWeek: string = daysOfTheWeek[new Date(data.dateSchedules).getDay()]

  if (!barberFounded.workingDays.includes(getDayWeek)) throw new Error("Barbearia não disponível nesta data")
  
  for (let value of data.services) {
    if (!servicesBarber.includes(value)){
      throw new Error("Barbearia não oferece este serviço")
    }
  }

  const objectSchedule = {
    id: randomUUID(),
    ...data
  }

  const createdSchedule =  await createScheduleInDatabase(objectSchedule)

  return createdSchedule
}