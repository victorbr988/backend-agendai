import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { routerClients } from './routes/Client/clients';
import { routerBarbers } from './routes/Barber/barber';
import { routerSchedule } from './routes/Schedules/schedule';
import { routerService } from './routes/ServicesBarber/service';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clients', routerClients);
app.use('/barber', routerBarbers);
app.use('/schedule', routerSchedule)
app.use('/service', routerService)
// app.use('/profile');

const port: string | undefined = process.env.PORT

app.listen(port, () => console.log(`App listining on port ${port}`))