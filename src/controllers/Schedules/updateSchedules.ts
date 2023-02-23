import { Request, Response } from "express";
import { validityUpdate } from "../../services/Schedules/validityUpdate";

export async function updateSchedules(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  try {
    const updatedClient = await validityUpdate(id, request.body)

    return response.status(200).json({ Id: updatedClient})
  } catch(err) {
    return response.status(400).json({ message: err })
  }
}
