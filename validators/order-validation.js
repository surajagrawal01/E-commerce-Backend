const orderValidationSchema = {
    firstName:{
        notEmpty:{
            errorMessage:'firstName field is required'
        }
    },
    lastName:{
        notEmpty:{
            errorMessage:'lastName field is required'
        }
    },
    address:{
        notEmpty:{
            errorMessage:'address field is required'
        }
    }
}

module.exports = orderValidationSchema;