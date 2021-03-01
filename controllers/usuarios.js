const { response, request} = require('express');


const usuariosGet = ( req = request, res = response ) => {
    
    const { q, nombre = 'No name', page = 1, limit } = req.query;
    res.json({
        msg:"get api - usuariosGet",
        q, 
        nombre, 
        page,
        limit
    })
};

const usuariosPost = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({
            msg:"post api - usuariosPost",
            nombre,
            edad
    })
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg:"put api - usuariosPut",
        id
    })
};

const usuariosPatch = (req, res) => {
    res.json({
        msg:"patch api - usuariosPatch"
    })
};

const usuariosDelete = (req, res) => {
    res.json({
        msg:"delete api - usuariosDelete"
    })
};



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete  
}