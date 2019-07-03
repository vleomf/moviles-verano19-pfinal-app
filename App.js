import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import NavigationService from './servicios/ServicioNavegador'
import InicioProfesor from './actividades/InicioProfesor'
import Home from './actividades/Home'
import NuevoCurso from './actividades/NuevoCurso'
import AccionesCurso from './actividades/AccionesCurso'
import CrearActividad from './actividades/CrearActividad'

const MainNavigator = createStackNavigator({
  ActividadInicioProfesor: InicioProfesor,
  ActividadInicio: Home,
  ActividadNuevoCurso: NuevoCurso,
  ActividadAccionesCurso: AccionesCurso,
  ActividadCrearActividad: CrearActividad
},{
  initialRouteName: 'ActividadInicio'
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return <AppContainer 
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  }
}