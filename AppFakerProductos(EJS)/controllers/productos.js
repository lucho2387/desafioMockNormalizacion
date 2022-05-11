const fs = require('fs')
const { faker } = require('@faker-js/faker')


module.exports = {

    formProduct: (req,res) => {
        res.render('Inicio')
    },
    
    listProduct: (req,res) => {
        let productos = []
        for (let i = 1; i < 6; i++) {
            const datos = 
                {   
                    id: i,
                    nombre: faker.commerce.productName(),
                    precio: faker.commerce.price(),
                    foto: faker.image.imageUrl()
                }
            productos.push(datos)
        }
        res.render('listaProducto', {productos})
    },
}
