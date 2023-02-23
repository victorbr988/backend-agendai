import { Request, Response } from "express";
import { updateServiceFields } from "../../model/ServicesBarber/updateService";


export async function updateService(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  try {
    const updatedService = await updateServiceFields(id, request.body)

    return response.status(200).json({ Id: updatedService})
  } catch(err) {
    return response.status(400).json({ message: err })
  }
}
