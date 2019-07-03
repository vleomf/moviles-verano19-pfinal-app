import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, Picker} from 'react-native'
import Button from 'react-native-button'

export default class CrearActividad extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={styles.contenedorPrincipal}>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Índice</Text>
                    <TextInput 
                        style={styles.textoEntrada}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Nombre</Text>
                    <TextInput 
                        style={styles.textoEntrada}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Descripción</Text>
                    <TextInput 
                        style={styles.textoEntrada}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Criterio Evaluación</Text>
                    <Picker
                        // selectedValue={this.state.language}
                        style={styles.textoEntrada}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Tarea"           value="Tarea" />
                        <Picker.Item label="Práctica"        value="Práctica" />
                        <Picker.Item label="Investigación"   value="Investigación" />
                        <Picker.Item label="Presentación"    value="Presentación" />
                        <Picker.Item label="Actividad Extra" value="Actividad Extra" />
                        <Picker.Item label="Proyecto"        value="Proyecto" />
                    </Picker>
                </View>
                <Button style={styles.botonGuardar}>GUARDAR</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    textoEtiqueta: {
        flex: 1,
        paddingTop: 25,
        color: '#444152',
        fontWeight: 'bold',
        fontSize: 12,
        paddingLeft: 5,
        paddingRight: 5
    },
    textoEntrada: {
        flex: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#444152'
    },
    botonGuardar:{
        marginTop: 40,
        margin: 15,
        backgroundColor: '#444152',
        color: '#FFFFFF'
    }
})