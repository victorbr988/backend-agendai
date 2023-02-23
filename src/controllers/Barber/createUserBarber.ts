import { Request, Response } from "express";
import { validateBarber } from "../../services/Barber/validateFields";
import { BarberProps } from "../../types";

export async function createUserBarber(request: Request, response: Response): Promise<Response> {
  const {
    name,
    uniqueIdentifier,
    phoneNumber,
    password,
    assessments,
    workingDays,
    workingHours
  }: BarberProps = request.body

  try{
    const createdBarber = await validateBarber({
      name, 
      uniqueIdentifier, 
      phoneNumber, 
      password, 
      assessments,
      workingDays,
      workingHours
    })

    return response.status(200).json({ BarberID: createdBarber })
  }catch(err: any) {
    return response.status(400).json({message: err.message})
  }
}
