const blog = require ('../models/Blog')

const blogController = {


    create: async(req, res) => {

     const { title,
        description,
        user,
        date,
        category,
        photo } = req.body
        
          try {
            //se hace toda la lógica para atrapar la informacion
      
            await new blog(req.body).save(); 
            console.log(req.body)//se define un nuevo evento con los requerimientos que se solicitan{ name,   lastName, mail,password o se usa la variable
      
            res.status(201).json({
              message: "message created",
              success: true,
            });
          } catch (error) {
            res.status(400).json({
              message: "'couldn't create blog",
            });
          }
        },

        
      };
      module.exports = blogController;