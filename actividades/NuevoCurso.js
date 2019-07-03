import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, Text, TextInput} from 'react-native'
import Button from 'react-native-button'
import DatePicker from 'react-native-datepicker'
import * as cursosProvider from '../provedores/cursos'
import DropdownAlert from 'react-native-dropdownalert'

export default class NuevoCurso extends Component {

    static navigationOptions = {
       title: 'Nuevo Curso'
    }

    constructor(props) {
        super(props)
        this.state = {
            curso:{
                matricula: '',
                nombre: '',
                inicio: '',
                fin: ''
            },
            salon: {
                codigo: '',
                edificio: '',
                facultad: '',
                institucion: '',
            },
            horarios: {
                lunes: '',
                martes: '',
                miercoles: '',
                jueves: '',
                viernes: '',
                sabado: ''
            }
            
        }

        this._CrearCurso = this._CrearCurso.bind(this)
    }

    render() {
        return(
            <ScrollView>
                {/* DATOS CURSO */}
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Matrícula</Text>
                    <TextInput style={styles.textoInput}
                        value={this.state.curso.matricula}
                        placeholder=' '
                        onChangeText={matricula => {
                            let curso = {...this.state.curso}
                            curso.matricula = matricula
                            this.setState({curso})
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Nombre</Text>
                    <TextInput style={styles.textoInput}
                        value={this.state.curso.nombre}
                        onChangeText={nombre => {
                            let curso = {...this.state.curso}
                            curso.nombre = nombre
                            this.setState({curso})
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Inicia</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='date'
                        date={this.state.curso.inicio}
                        placeholder=' '
                        onDateChange={inicio => {
                            let curso = {...this.state.curso}
                            curso.inicio = inicio
                            this.setState({curso})
                        }}
                        format='YYYY-MM-DD'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Termina</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='date'
                        date={this.state.curso.fin}
                        placeholder=' '
                        onDateChange={fin => {
                            let curso = {...this.state.curso}
                            curso.fin = fin
                            this.setState({curso})
                        }}
                        format='YYYY-MM-DD'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.separador}></View>
                {/* DATOS SALON */}
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Salón</Text>
                    <TextInput style={styles.textoInput}
                        value={this.state.salon.codigo}
                        onChangeText={codigo => {
                            let salon = {...this.state.salon}
                            salon.codigo = codigo
                            this.setState({salon})
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Edificio</Text>
                    <TextInput style={styles.textoInput}
                        value={this.state.salon.edificio}
                        onChangeText={edificio => {
                            let salon = {...this.state.salon}
                            salon.edificio = edificio
                            this.setState({salon})
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Facultad</Text>
                    <TextInput style={styles.textoInput}
                        value={this.state.salon.facultad}
                        onChangeText={facultad => {
                            let salon = {...this.state.salon}
                            salon.facultad = facultad
                            this.setState({salon})
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Institución</Text>
                    <TextInput style={styles.textoInput}
                        value={this.state.salon.institucion}
                        onChangeText={institucion => {
                            let salon = {...this.state.salon}
                            salon.institucion = institucion
                            this.setState({salon})
                        }}
                    />
                </View>
                <View style={styles.separador}></View>
                {/* DATOS HORARIOS */}
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Lunes</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='time'
                        date={this.state.horarios.lunes}
                        placeholder=' '
                        onDateChange={hora => {
                            let horarios = {...this.state.horarios}
                            horarios.lunes = hora
                            this.setState({horarios})
                        }}
                        format='HH:mm'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Martes</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='time'
                        date={this.state.horarios.martes}
                        placeholder=' '
                        onDateChange={hora => {
                            let horarios = {...this.state.horarios}
                            horarios.martes = hora
                            this.setState({horarios})
                        }}
                        format='HH:mm'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Miércoles</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='time'
                        date={this.state.horarios.miercoles}
                        placeholder=' '
                        onDateChange={hora => {
                            let horarios = {...this.state.horarios}
                            horarios.miercoles = hora
                            this.setState({horarios})
                        }}
                        format='HH:mm'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Jueves</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='time'
                        date={this.state.horarios.jueves}
                        placeholder=' '
                        onDateChange={hora => {
                            let horarios = {...this.state.horarios}
                            horarios.jueves = hora
                            this.setState({horarios})
                        }}
                        format='HH:mm'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Viernes</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='time'
                        date={this.state.horarios.viernes}
                        placeholder=' '
                        onDateChange={hora => {
                            let horarios = {...this.state.horarios}
                            horarios.viernes = hora
                            this.setState({horarios})
                        }}
                        format='HH:mm'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.textoEtiqueta}>Sábado</Text>
                    <DatePicker
                        style={styles.textoDate}
                        mode='time'
                        date={this.state.horarios.sabado}
                        placeholder=' '
                        onDateChange={hora => {
                            let horarios = {...this.state.horarios}
                            horarios.sabado = hora
                            this.setState({horarios})
                        }}
                        format='HH:mm'
                        confirmBtnText='Aceptar'
                        cancelBtnText='Cancelar'
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                    />
                </View>
                <Button onPress={this._CrearCurso}
                    style={styles.botonCrear}
                >CREAR</Button>
                <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
            </ScrollView>
        )
    }

    async _CrearCurso() {
        let horarios = [];
        horarios.push( {'dia':'L', 'hora':this.state.horarios.lunes} );
        horarios.push( {'dia':'A', 'hora':this.state.horarios.martes});
        horarios.push( {'dia':'M', 'hora':this.state.horarios.miercoles});
        horarios.push( {'dia':'J', 'hora':this.state.horarios.jueves});
        horarios.push( {'dia':'V', 'hora':this.state.horarios.viernes});
        horarios.push( {'dia':'S', 'hora':this.state.horarios.sabado});
        try
        {
            let res = await cursosProvider.crear(this.state.curso, this.state.salon, horarios);
            if(res)
            {
                this.dropDownAlertRef.alertWithType('success', 'Curso Creado!')
                this.props.navigation.navigate('ActividadInicioProfesor')
            }
        }
        catch(e)
        {
            switch(e)
            {
                case 502: this.dropDownAlertRef.alertWithType('error', 'Error de servidor'); break;
                case 500: this.dropDownAlertRef.alertWithType('error', 'Error de servidor'); break;
                case 401: this.dropDownAlertRef.alertWithType('info',  'Acceso no autorizado'); break;
                case 400: this.dropDownAlertRef.alertWithType('info',  'Error al rellenar formulario'); break;
                default:  this.dropDownAlertRef.alertWithType('error', 'Error General');
            }
        }
    }
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    separador: {
        marginBottom: 20
    },  
    textoEtiqueta: {
        width: 70,
        color: '#444152',
        paddingTop: 25
    },
    textoInput: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#444152'
    },
    textoDate: {
        flex: 1,
        padding: 2.5,
        borderBottomWidth: 1,
        borderBottomColor: '#444152'
    },
    botonCrear: {
        backgroundColor: '#444152',
        margin: 5,
        padding: 5,
        color: '#FFFFFF'
    }
});