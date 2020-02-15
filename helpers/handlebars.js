function hbsHelpers(hbs) {
    return hbs.create({
        default: 'main',
        helpers: {
            stringifyParks: (property) => {
                return JSON.stringify(property)
            }
        }
    })
}

module.exports = hbsHelpers