//menu setup

const menu = {
    main: `
    divbot [command] <options>
    
    about ................. show info about package
    version ............... show package version
    help .................. show help menu for a command

    pull .................. run divination program
    `,
    pull:`
    divbot pull [spread or number of cards] [divination method]
    `
}

//function
module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]
    console.log(menu[subCmd] || menu.main)
}