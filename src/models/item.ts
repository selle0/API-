import { Schema, model } from "mongoose";
import { Noticia } from "../interfaces/noticia.interface";

const ItemSchema = new Schema<Noticia>(
  {
    titulo: {
      type: String,
      required: true,
    },
    contenido: {
      type: String,
      required: true,
    },
    fecha_publicacion: {
      type: String,
      required: true,
    },
    categorias: {
      type: [String],
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
    localizacion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
