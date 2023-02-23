import { Request, Response } from "express";
import { findAllBarbers } from "../../model/Barber/getAllBarbers";

export async function getAllBarbers(_request: Request, response: Response): Promise<Response> {
  try{
    const barbers = await findAllBarbers()

    return response.status(200).json({barbers})
  } catch(err: any) {
    return response.status(400).json({ message: err.message})
  }
}