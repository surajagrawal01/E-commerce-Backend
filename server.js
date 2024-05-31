const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const portNo = 3089
//express-validator for server side validation
const {validationResult, checkSchema} = require('express-validator')

//for accessing products image
app.use('/images', express.static('./public/images'));

//products-data
const products = require("./data/products")

//validation schema for user information
const orderValidationSchema = require("./validators/order-validation")

//api to get the product details
app.get('/api/products', async (req, res) => {
    try {
        res.status(200).json({
            data: products,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//api for placing order
app.post('/api/place-orders', checkSchema(orderValidationSchema) ,(req, res)=>{
    const body = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    res.json({
        data:body,
        status:'Order Placed Successful'
    })
})


app.listen(portNo, () => {
    console.log(`Server running on port ${portNo}`)
})