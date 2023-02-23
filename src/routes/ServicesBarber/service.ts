import express from "express";
import { createServiceBarber } from "../../controllers/ServicesBarber/createServiceBarber";
import { updateService } from "../../controllers/ServicesBarber/updateService";

export const routerService = express.Router()

routerService.post("/", createServiceBarber)
routerService.put("/:id", updateService)