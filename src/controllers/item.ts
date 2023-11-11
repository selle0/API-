import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertNoticia,
  getNoticia,
  getNoticias,
  updateNoticia,
  deleteNoticia,
  getLocation,
} from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getNoticia(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getNoticias();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateNoticia(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertNoticia(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteNoticia(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

const getLocationitem = async ({ params, query }: Request, res: Response) => {
  try {
    const { searchText } = params; 
    const response = await getLocation(searchText);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_LOCATION_ITEMS");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem,  getLocationitem};
