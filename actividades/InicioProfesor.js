import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import * as cursosProvider from '../provedores/cursos'
import DropdownAlert from 'react-native-dropdownalert';
import ElementoCurso from '../componentes/ElementoCurso'
import Button from 'react-native-button';

export default class InicioProfesor extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            hoy: [],
            cursos: []
        }

        this._CrearCurso = this._CrearCurso.bind(this)
    }

    render() {
        return(
            <View style={styles.mainview}>
                 <FlatList
                    data={this.state.hoy}
                    renderItem={({item}) => <ElementoCurso curso={item}/>}
                    keyExtractor={item => item.id.toString()}
                />
                <Button style={styles.botonCrear}
                    onPress={this._CrearCurso}
                >NUEVO CURSO</Button>
                <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
            </View>
        )
    }

    _CrearCurso() {
        this.props.navigation.navigate('ActividadNuevoCurso')
    }

    async _ObtenerCursos() {
        try {
            let hoy = await cursosProvider.obtenerHoy();
            let cursos = await cursosProvider.obtener();
            this.setState({
                hoy: hoy,
                cursos: cursos
            })
        }
        catch(e) {
            switch(e)
            {
                case 502: this.dropDownAlertRef.alertWithType('error', 'Error de servidor'); break;
                case 500: this.dropDownAlertRef.alertWithType('error', 'Error de servidor'); break;
                default:  this.dropDownAlertRef.alertWithType('error', 'Error General');
            }
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this._ObtenerCursos()
        })
    }

    componentWillUnmount() {
        this.focusListener.remove()
    }
    
}
const styles = StyleSheet.create({
    mainview: {
        height: '100%',
        width: '100%',
        display: 'flex',
        paddingTop: 10,
    },
    botonCrear:{
        width: '97%',
        color: '#FFFFFF',
        backgroundColor:'#444152',
        margin: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }
})
