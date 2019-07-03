import {AsyncStorage} from 'react-native';
const apiconf = require('./apiconf.json');
const axios   = require('axios');



exports.obtener = (idCurso) => {
    const url = `${apiconf.url}/cursos/${idCurso}/asistencias`;
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {
                'host' : 'proyecto.moviles.mx',
                'x-api-key' : AsyncStorage.getItem('token')
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

exports.registrarAsistencia = (idAsistente, fecha, idCurso) => {
    const url  = `${apiconf.url}/cursos/${idCurso}/asistencias`;
    const body = { 'asistente' : idAsistente, 'fecha' : fecha };
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            headers:{
                'host' : 'proyecto.moviles.mx',
                'x-api-key' : AsyncStorage.getItem('token')
            },
            data: body
        })
        .then(response => {
            return resolve(response.data)
        })
        .catch(error => {
            return reject(error.response.status)
        });
    });
}

exports.eliminarAsistencia = (idAsistencia, idCurso) => {
    const url = `${apiconf.url}/cursos/${idCurso}/asistencias/${idAsistencia}`;
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url: url,
            headers:{
                'host' : 'proyecto.moviles.mx',
                'x-api-key' : AsyncStorage.getItem('token')
            },
        })
        .then(response => {
            return resolve(response.data)
        })
        .catch(error => {
            return reject(error.response.status)
        });
    });
}