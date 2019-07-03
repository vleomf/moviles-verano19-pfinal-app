const apiconf = require('./apiconf.json');
const axios   = require('axios');

exports.autorizar = (correoElectronico, password) => {
    const url = `${apiconf.url}/autorizar`;
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            headers: {
                'host' : 'proyecto.moviles.mx'
            },
            data:{
               correoElectronico: correoElectronico,
               password: password 
            }
        })
        .then(response => {
            return resolve(response.data)
        })
        .catch(error => {
            return reject(error.response.status)
        });
    });
}