import { Request, Response } from "express";
import { findUniqueUser } from "../../model/Client/fIndUniqueUser";

export async function getUniqueUser(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  try{
    const userAlreadExists = await findUniqueUser(id)
    if (userAlreadExists) return response.status(200).json(userAlreadExists)

    throw new Error("Usuário não existe")
  } catch(err) {
    return response.status(400).json({ message: err })
  }
}