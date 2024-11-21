const { body, validationResult } = require('express-validator');

const validate = {};

// VALIDATE NEW CONTACT VALUES
validate.addNewContactRules = () => {
    return [
        body('firstName')
        .trim()
        .isString()
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Firstname should not be empty"),

        body('lastName')
        .trim()
        .isString()
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Lastname should not be empty"),

        body('email')
        .trim()
        .isEmail()
        .escape()
        .notEmpty()
        .normalizeEmail()
        .withMessage("A valid email is required"),

        body('favoriteColor')
        .trim()
        .isString()
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Favorite color should not be empty"),

        body('birthdate')
        .isDate({ format: 'DD-MM-YYYY' })
        .withMessage('A valid date is required (DD-MM-YYYY)')
    ]
}
// CHECK NEW CONTACT VALIDATION
validate.checkAddNewContact = (req, res, next) => {
    let errors = [];
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json(errors);
    }
    next()
}

// VALIDATE UPDATE CONTACT
validate.updateContactRules = () => {
    return [
        body('firstName')
        .trim()
        .isString()
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Firstname should not be empty"),

        body('lastName')
        .trim()
        .isString()
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Lastname should not be empty"),

        body('email')
        .trim()
        .isEmail()
        .escape()
        .notEmpty()
        .normalizeEmail()
        .withMessage("A valid email is required"),

        body('favoriteColor')
        .trim()
        .isString()
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Favorite color should not be empty"),

        body('birthdate')
        .isDate({ format: 'DD-MM-YYYY' })
        .withMessage('A valid date is required (DD-MM-YYYY)')
    ]
}

validate.checkUpdateContact = (req, res, next) => {
    let errors = [];
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    next()
}


module.exports = validate;