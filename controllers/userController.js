const user = require("../models/User"); //se requiere el modelo a usar por el controlador para controlar escribir actualiar

const userController = {
  //se crea el controlador

  create: async (req, res) => {
    //metodo create asyncrona que depende de req y res

    const {
      name,
      lastName,
      mail,
      password,
    } = req.body; //toda la informacion que envia el usuario desde el front, para pasar esos datos para crear un nuevo modelo
    try {
      //se hace toda la lógica para atrapar la informacion

      await new user(req.body).save(); //se define un nuevo evento con los requerimientos que se solicitan{ name,   lastName, mail,password o se usa la variable

      res.status(201).json({
        message: "message created",
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        message: "'couldn't create user",
      });
    }
  },
};
module.exports = userController; //para poder requerirlo en otros lugares se tiene que exportar
