import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBuilding, faUniversity, faSignature, faClock} from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    elemento: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
    },
    contenedorMatricula: {
        width: '100%',
        backgroundColor: '#003b5c',
        display: 'flex',
        alignItems: 'center'
    },
    textoMatricula: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    contenedorUbicacion:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    textoUno: {
        fontSize: 11,
    }
})

export default class ElementoCurso extends Component {
    render() {
        return(
            <TouchableOpacity onPress={() =>console.log('click??')}
                style={styles.elemento}
            >
                <View style={styles.contenedorMatricula}>
                    <Text style={styles.textoMatricula}>{this.props.curso.matricula}</Text>
                </View>
                <View style={styles.contenedorUbicacion}>
                    <FontAwesomeIcon icon={faSignature} />
                    <Text>{`  ${this.props.curso.nombre}`}</Text>
                </View>  
                <View style={styles.contenedorUbicacion}>
                    <FontAwesomeIcon icon={faUniversity} />
                    <Text>{`  ${this.props.curso.institucion}`}</Text>
                </View>  
                <View style={styles.contenedorUbicacion}>
                    <FontAwesomeIcon icon={faBuilding} />
                    <Text>{`  ${this.props.curso.edificio} - ${this.props.curso.salon}`}</Text>
                </View>   
                <View style={styles.contenedorUbicacion}>
                    <FontAwesomeIcon icon={faClock} />
                    <Text>{`  ${this.props.curso.hora}`}</Text>
                </View>               
            </TouchableOpacity>
        )
    }
}

