import { Request, Response } from "express";
import { updateBarberFields } from "../../model/Barber/updateBarber";

export async function updateBarber(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  try {
    const updatedBarber = await updateBarberFields(id, request.body)

    return response.status(200).json({ Id: updatedBarber})
  } catch(err) {
    return response.status(400).json({ message: err })
  }
}
