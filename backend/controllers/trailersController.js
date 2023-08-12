const asyncHandler = require ("express-async-handler");
const Trailer = require ("../models/trailer");

const createTrailer = asyncHandler(async (req, res) => {
    const {Título, Año, Director, Actores, Genero, Reseña, Imagen_de_Portada, link_del_trailer} = req.body;

    if (!Título||!Año||!Actores||!Genero||!Reseña||!Imagen_de_Portada||!Link_del_trailer) {
        return res.status(400).json({message:'Complete todos los campos'})
    }

    const trailer = await Trailer.create({
        Título, 
        Año, 
        Director, 
        Actores, 
        Genero, 
        Reseña, 
        Imagen_de_Portada, 
        link_del_trailer
    })
    res.status(200).json(trailer)
});

const getAllTrailers = asyncHandler(async (req, res) => {

    res.status(200).json(posts);
})
