import { findUniqueBarber } from "../../model/Barber/findUniqueBarber";
import { findUniqueUser } from "../../model/Client/fIndUniqueUser";
import { updateScheduleFields } from "../../model/Schedules/updateSchedule";
import { ScheduleProps } from "../../types";

export async function validityUpdate(id: string, data: ScheduleProps) {
  const barberFounded: any = await findUniqueBarber(data.barberId)
  const clientFounded = await findUniqueUser(data.clientId)

  if(!barberFounded) {
    throw new Error("Barbearia sem cadastro")
  }

  if(!clientFounded) {
    throw new Error("Cliente sem cadastro")
  }

  const scheduleUpdated = updateScheduleFields(id, data)

  return scheduleUpdated
}