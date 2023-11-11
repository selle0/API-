import { Request, Response, Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
  getLocationitem,
} from "../controllers/item";


const router = Router();

router.get("/", getItems);

router.get("/:id",  getItem);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

router.get("/location/:searchText", getLocationitem);

export { router };
