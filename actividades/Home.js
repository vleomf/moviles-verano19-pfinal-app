import React, {Component} from 'react';
import {StyleSheet, Image, View, TextInput, Text, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import * as authProvider from '../provedores/auth';
import DropdownAlert from 'react-native-dropdownalert';

export default class Home extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        
        // Enlace con métodos (poder ocupar operador this)
        this._IniciarSesion = this._IniciarSesion.bind(this);

        this.state = {
            correo: 'victor.munozf@docente.buap.mx',
            password: 'manager'
        }
    }
  
    render() {
        return (
        <View style={styles.container}>
            <Image source={require('../imagenes/logo.png')} style={styles.logo}/>
            <Text style={styles.etiqueta}>Moviles PF</Text>
            <View style={styles.contenedorInput}>
                <Image source={require('../imagenes/iconos/envelope-icon-w.png')} 
                style={styles.inputIcono}/>
                <TextInput value={this.state.correo} 
                onChangeText={ correo => this.setState({correo})}
                style={styles.input}/>
            </View>
            <View style={styles.contenedorInput}>
                <Image source={require('../imagenes/iconos/lock-icon-w.png')} 
                style={styles.inputIcono}/>
                <TextInput value={this.state.password} 
                onChangeText={ password => this.setState({password})}
                secureTextEntry={true}
                style={styles.input}/>
            </View>
            <Button style={styles.boton} onPress={this._IniciarSesion}>ACCEDER</Button>
            <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
        </View>
        );
    }

    async _IniciarSesion() {
        let res;
        try
        {
        res = await authProvider.autorizar(this.state.correo, this.state.password);
        await AsyncStorage.setItem('token', res.token);
        await AsyncStorage.setItem('datosUsuario', JSON.stringify(res.usuario));
        }
        catch(e)
        {
        switch(e)
        {
            case 502: this.dropDownAlertRef.alertWithType('error', 'Error de servidor'); break;
            case 500: this.dropDownAlertRef.alertWithType('error', 'Error de servidor'); break;
            case 400: this.dropDownAlertRef.alertWithType('info', 'Debes enviar correo y contraseña');  break;
            case 404: this.dropDownAlertRef.alertWithType('info', 'Correo electronico no registrado');  break;
            case 401: this.dropDownAlertRef.alertWithType('info', 'Contraseña incorrecta');  break;
            default:  this.dropDownAlertRef.alertWithType('error', 'Error General');
        }
        }
        finally
        {
        if(res)
        {
            switch(res.usuario.rol)
            {
            case 'profesor':
                    this.props.navigation.navigate('ActividadInicioProfesor')
                break;
            case 'estudiante':
                break;
            }
        }
        }
    }
}

    const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6B6879',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    etiqueta: {
        color: '#FFFFFF',
        margin: 5
    },  
    logo: {
        width: 80,
        height: 80
    },
    contenedorInput: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    inputIcono: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        padding: 0,
        width: '50%',
        color: '#FFFFFF'
    },
    boton: {
        width: '100%',
        color: '#FFFFFF',
        backgroundColor: '#444152',
        marginTop: 20,
        paddingTop: 5,
        paddingBottom : 5,
        paddingLeft: 75,
        paddingRight: 75
    }
});
