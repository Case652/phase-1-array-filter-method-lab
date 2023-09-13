// Code your solution here
function findMatching(drivers, search) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === search.toLowerCase()
        }
    )
}

function fuzzyMatch(drivers, search) {
    return drivers.filter(function(driver) {
        return driver.toUpperCase().substring([0], search.length) === search.toUpperCase()
        }
    )
}

function matchName(drivers, search) {
    return drivers.filter(function(driver) {
        return driver.name === search
        }
    )
}
