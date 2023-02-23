import { Request, Response } from "express";
import { validateClient } from "../../services/Client/validateClient";
import { ClientProps } from "../../types";

export async function createUserClient(request: Request, response: Response): Promise<Response> {
  const {
    name,
    uniqueIdentifier,
    phoneNumber,
    password
  }: ClientProps = request.body

  try{
    const createdClient = await validateClient({name, uniqueIdentifier, phoneNumber, password})

    return response.status(200).json({ clientID: createdClient })
  }catch(err: any) {
    return response.status(400).json({message: err.message})
  }
}
