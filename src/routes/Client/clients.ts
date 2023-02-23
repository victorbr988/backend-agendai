import express from "express";
import { createUserClient } from "../../controllers/Client/createUserClient";
import { getUniqueUser } from "../../controllers/Client/getUniqueUser";
import { updateClient } from "../../controllers/Client/updateClient";

export const routerClients = express.Router()

routerClients.post("/", createUserClient)
routerClients.get("/:id", getUniqueUser)
routerClients.put("/:id", updateClient)