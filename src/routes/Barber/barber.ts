import express from "express";
import { createUserBarber } from "../../controllers/Barber/createUserBarber";
import { getAllBarbers } from "../../controllers/Barber/getAllBarbers";
import { getUniqueBarber } from "../../controllers/Barber/getUniqueBarber";
import { updateBarber } from "../../controllers/Barber/updateBarber";

export const routerBarbers = express.Router()

routerBarbers.post("/", createUserBarber)
routerBarbers.get("/:id", getUniqueBarber)
routerBarbers.get("/", getAllBarbers)
routerBarbers.put("/:id", updateBarber)