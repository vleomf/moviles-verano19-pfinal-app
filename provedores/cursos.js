import {AsyncStorage} from 'react-native';
const apiconf = require('./apiconf.json');
const axios   = require('axios');

exports.obtener = () => {
    const url = `${apiconf.url}/cursos`;
    return new Promise(async (resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {
                'host' : 'proyecto.moviles.mx',
                'x-api-key' : await AsyncStorage.getItem('token')
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

exports.obtenerHoy = () => {
    const url = `${apiconf.url}/cursos?hoy=true`;
    return new Promise(async (resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {
                'host' : 'proyecto.moviles.mx',
                'x-api-key' : await AsyncStorage.getItem('token')
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

exports.crear = (curso, salon, horarios) => {
    const url =  `${apiconf.url}/cursos`;
    const datos = {
        'curso' : curso,
        'salon' : salon,
        'horarios' : horarios
    };
    return new Promise( async(resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            headers:{
                'host' : 'proyecto.moviles.mx',
                'x-api-key': await AsyncStorage.getItem('token')
            },
            data: datos
        })
        .then(response => {
            return resolve(response.data)
        })
        .catch(error => {
            console.log(error.response.data.error.ofensa);
            return reject(error.response.status)
        });
    });
}