import { Noticia } from "../interfaces/noticia.interface";
import ItemModel from "../models/item";

const insertNoticia = async (item: Noticia) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getNoticias = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getNoticia = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateNoticia = async (id: string, data: Noticia) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteNoticia = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({ _id: id });
  return responseItem;
};

const getLocation = async (searchText: string) => {
  const responseItems = await ItemModel.find({
    $or: [
      { 'localizacion': { $regex: searchText, $options: 'i' } },
    ],
  });
  return responseItems;
};


export { insertNoticia, getNoticias, getNoticia, updateNoticia, deleteNoticia, getLocation };
