import { Request, Response } from "express";
import { updateClientFields } from "../../model/Client/updateClient";

export async function updateClient(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  try {
    const updatedClient = await updateClientFields(id, request.body)

    return response.status(200).json({ Id: updatedClient})
  } catch(err) {
    return response.status(400).json({ message: err })
  }
}
