import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { findUniqueBarber } from "../../model/Barber/findUniqueBarber";
import { createServiceInDatabase } from "../../model/ServicesBarber/createServiceBarber";
import { ServiceProps } from "../../types";

export async function createServiceBarber(request: Request, response: Response): Promise<Response> {
  const {
    name,
    price,
    barberId
  }: ServiceProps = request.body

  try{
    const barberFounded = await findUniqueBarber(barberId)

    if(!barberFounded) throw new Error("Barbearia não possui cadastro")

    const objectService = {
      id: randomUUID(),
      name,
      price,
      barberId
    }

    const createdService = await createServiceInDatabase(objectService)

    return response.status(200).json({ BarberID: createdService })
  }catch(err: any) {
    return response.status(400).json({message: err.message})
  }
}
