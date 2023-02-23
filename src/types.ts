export interface ClientProps {
  name: string;
  password: string;
  uniqueIdentifier: string;
  phoneNumber: string
}

export interface BarberProps extends ClientProps {
  assessments: number,
  workingDays: string[],
  workingHours: string[],
  services?: ServiceProps[]
}

export interface ScheduleProps {
  clientId: string,
  barberId: string,
  services: string[],
  dateSchedules: Date
}

export interface ServiceProps {
  name: string;
  price: number;
  barberId: string
}
