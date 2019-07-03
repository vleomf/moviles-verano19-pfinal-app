import React, {Component} from 'React'
import {StyleSheet, View, Text, Slider} from 'react-native'
import Button from 'react-native-button'
import NavigationService from '../servicios/ServicioNavegador'

export default class ActividadesCurso extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tareas: 0.0,
            practicas: 0.0,
            investigaciones: 0.0,
            presentaciones: 0.0,
            proyecto: 0.0,
            asistencias: 0.0
        }
    }
    render() {
        return(
            <View style={styles.contenedorPrincipal}>
                <View style={styles.contenedorAjustes}>
                    <View style={styles.contenedorControl}>
                        <Text style={styles.controlTexto}>Tareas</Text>
                        <Slider
                            value={this.state.tareas}
                            onValueChange={val => this.setState({tareas: val})}
                            style={styles.controlSlider}
                            minimumValue={0.0}
                            maximumValue={100.0}
                            step={5.0}
                        />
                        <Text style={styles.controlPorcentaje}>{this.state.tareas}</Text>
                    </View>
                    <View style={styles.contenedorControl}>
                        <Text style={styles.controlTexto}>Prácticas</Text>
                        <Slider
                            value={this.state.practicas}
                            onValueChange={val => this.setState({practicas: val})}
                            style={styles.controlSlider}
                            minimumValue={0.0}
                            maximumValue={100.0}
                            step={5.0}
                        />
                        <Text style={styles.controlPorcentaje}>{this.state.practicas}</Text>
                    </View>
                    <View style={styles.contenedorControl}>
                        <Text style={styles.controlTexto}>Investigaciones</Text>
                        <Slider
                            value={this.state.investigaciones}
                            onValueChange={val => this.setState({investigaciones: val})}
                            style={styles.controlSlider}
                            minimumValue={0.0}
                            maximumValue={100.0}
                            step={5.0}
                        />
                        <Text style={styles.controlPorcentaje}>{this.state.investigaciones}</Text>
                    </View>
                    <View style={styles.contenedorControl}>
                        <Text style={styles.controlTexto}>Presentaciones</Text>
                        <Slider
                            value={this.state.presentaciones}
                            onValueChange={val => this.setState({presentaciones: val})}
                            style={styles.controlSlider}
                            minimumValue={0.0}
                            maximumValue={100.0}
                            step={5.0}
                        />
                        <Text style={styles.controlPorcentaje}>{this.state.presentaciones}</Text>
                    </View>
                    <View style={styles.contenedorControl}>
                        <Text style={styles.controlTexto}>Proyecto</Text>
                        <Slider
                            value={this.state.proyecto}
                            onValueChange={val => this.setState({proyecto: val})}
                            style={styles.controlSlider}
                            minimumValue={0.0}
                            maximumValue={100.0}
                            step={5.0}
                        />
                        <Text style={styles.controlPorcentaje}>{this.state.proyecto}</Text>
                    </View>
                    <View style={styles.contenedorControl}>
                        <Text style={styles.controlTexto}>Asistencias</Text>
                        <Slider
                            value={this.state.asistencias}
                            onValueChange={val => this.setState({asistencias: val})}
                            style={styles.controlSlider}
                            minimumValue={0.0}
                            maximumValue={100.0}
                            step={5.0}
                        />
                        <Text style={styles.controlPorcentaje}>{this.state.asistencias}</Text>
                    </View>
                </View>
                <View style={styles.contenedorLista}>

                </View>
                <Button style={styles.botonNuevaActividad}
                    onPress={this._CrearActividad}
                >CREAR</Button>
            </View>
        )
    }

    _CrearActividad() {
        NavigationService.navigate('ActividadCrearActividad')
    }
}

const styles = StyleSheet.create({
    contenedorAjustes: {
        width: '100%',
        paddingTop: 10
    },
    contenedorControl: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },  
    contenedorPrincipal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    contenedorLista: {
        width:'100%'
    },
    botonNuevaActividad: {
        width: '96%',
        backgroundColor: '#444152',
        color: '#FFFFFF',
        margin: 5,
    },
    controlTexto:{
        flex:1.5,
        marginLeft: 5,
        fontSize: 11
    },
    controlSlider:{
        flex:3
    },
    controlPorcentaje:{
        flex: 0.5,
        paddingRight: 5
    }
})