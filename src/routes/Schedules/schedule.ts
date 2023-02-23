import express from "express";
import { createSchedule } from "../../controllers/Schedules/createSchedule";
import { updateSchedules } from "../../controllers/Schedules/updateSchedules";

export const routerSchedule = express.Router()

routerSchedule.post("/", createSchedule)
routerSchedule.put("/:id", updateSchedules)
