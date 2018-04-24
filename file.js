const multiplicar = require('./multiplicar');
var colors = require('colors');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').command('multiplicar', 'Lista la tabla de multiplicar', opts).command('crear', 'Guarda un archivo con la tabla de multiplicar', opts).help()
    .example('node file.js multiplicar -b 15 -l 30', 'Crea la tabla de multiplicar del 15 al 30')
    .argv

switch (argv._[0]) {
    case 'multiplicar':
        console.log(colors.blue.underline(multiplicar.listar(argv.base, argv.limite)));
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Archivo ${archivo} creado`);
        }).catch(e => {
            console.log(e);
        });
        break;
    default:
        console.log("Comando no reconocido");
}