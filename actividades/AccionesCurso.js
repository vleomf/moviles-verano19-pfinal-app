import * as React from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text, Switch } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import * as asistentesProvider from '../provedores/asistentes'
import moment from 'moment'
import AsistenteCurso from '../componentes/AsistenteCurso'
import ActividadesCurso from '../componentes/ActividadesCurso'
  
export default class AccionesCurso extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
              { key: 'first',  title: 'Asistencias' },
              { key: 'second', title: 'Actividades' },
            ],
            asistentes: []
        };

        this.curso = this.props.navigation.state.params.curso
        this._CambiarAsistencia = this._CambiarAsistencia.bind(this)
        this._ObtenerAsistentes = this._ObtenerAsistentes.bind(this)
    }

    render() {
        return (
          <TabView
            navigationState={this.state}
            renderScene = {({route}) => {
              switch(route.key)
              {
                case 'first':
                  return <AsistenteCurso 
                  asistentes={this.state.asistentes}
                  cambiarAsistenciaHandler={this._CambiarAsistencia} 
                  />; 
                  break;
                case 'second':
                  return <ActividadesCurso />
                  break;
                default:
                  return null;
              }
            }}
            renderTabBar={props =>
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: '#444152' }}
              />
            }
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          />
        );
    }

    async _CambiarAsistencia(asistente, indx) {
      let hora_actual = moment().format()
      try
      {
       if(!asistente.asistencia)
       {
          await asistentesProvider.registrarAsistencia(asistente.id, hora_actual, this.curso.id); 
       }
       else
       {
          await asistentesProvider.eliminarAsistencia(asistente.datosAsistencia.id, this.curso.id);
       }
       this._ObtenerAsistentes()
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
    async _ObtenerAsistentes() {
      try
      {
        const asistentes = await asistentesProvider.obtener(this.curso.id)
        this.setState({asistentes})
        console.log(asistentes);
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

    componentDidMount() {
      this._ObtenerAsistentes()
    }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});