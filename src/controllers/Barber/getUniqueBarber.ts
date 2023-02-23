import { Request, Response } from "express";
import { findUniqueBarber } from "../../model/Barber/findUniqueBarber";

export async function getUniqueBarber(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  try {
    const userAlreadExists = await findUniqueBarber(id)
    if (userAlreadExists) return response.status(200).json(userAlreadExists)

    throw new Error("Barbearia não existe")
  } catch(err) {
    return response.status(400).json({ message: err })
  }
}