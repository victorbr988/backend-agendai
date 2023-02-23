import { Request, Response } from "express";
import { validateSchedule } from "../../services/Schedules/validateSchedule";
import { ScheduleProps } from "../../types";

export async function createSchedule(request: Request, response: Response): Promise<Response> {
  const {
    clientId,
    barberId,
    dateSchedules,
    services
  }: ScheduleProps = request.body

  try{
    const createdSchedule = await validateSchedule({ clientId, barberId, dateSchedules, services })

    return response.status(200).json({ ScheduleID: createdSchedule })
  }catch(err: any) {
    return response.status(400).json({message: err.message})
  }
}
