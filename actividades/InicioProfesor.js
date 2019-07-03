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
                <ScrollView>
                    <FlatList
                        data={this.state.hoy}
                        renderItem={({item}) => <ElementoCurso curso={item}/>}
                        keyExtractor={item => item.id.toString()}
                    />
                </ScrollView>
                <Button style={styles.botonCrear}
                    onPress={this._CrearCurso}
                >NUEVO CURSO</Button>
                <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
            </View>
        )
    }

    _CrearCurso() {
        console.log('nuevo curso?');
        this.props.navigation.navigate('ActividadNuevoCurso')
    }

    async componentDidMount() {
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
}
const styles = StyleSheet.create({
    mainview: {
        height: '100%',
        width: '100%',
        display: 'flex',
        paddingTop: 10,
        alignItems: 'center'
    },
    botonCrear:{
        width: '100%',
        color: '#FFFFFF',
        backgroundColor:'#444152',
        margin: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 100,
        paddingRight: 100
    }
})
