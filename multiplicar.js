const fs = require('fs');

let listar = (base, limite) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base * i}\n`;
    }
    return data;
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}x${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}x${limite}.txt`);
            }
        })
    })
}

module.exports = {
    crearArchivo,
    listar
}