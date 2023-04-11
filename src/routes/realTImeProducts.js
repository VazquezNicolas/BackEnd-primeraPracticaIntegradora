const {Router} = require ('express'); 
const {products} = require ('../productsManager');

const router = Router();                       

//Todos los productos
router.get('/', (req,res) => {
  
        const limit = req.query.limit;
        const productos =   products.getProducts();
        
        if (limit){
            respuesta =  productos.slice(0,limit)
        } else {
            respuesta = productos;
        }
//        res.send(respuesta) 
        res.render('realTimeProducts.handlebars', {respuesta} )
});

//Agregar Producto
router.post('/', (req,res) => {
const {title, description, price, thumbnail, code, stock, status, category} = req.body;
products.addProduct(title, description, price, thumbnail, code, stock, status, category);
const respuesta =   products.getProducts();

res.render('realTimeProducts.handlebars', {respuesta} )
})

//Eliminar por Id
router.delete('/:pid', (req,res) => {
    
        const pid = req.params.pid;
         console.log(pid+"desde router")
         products.deleteProduct(pid)

         const respuesta =   products.getProducts();
         res.render('realTimeProducts.handlebars', {respuesta} )
          
})

module.exports = router;   