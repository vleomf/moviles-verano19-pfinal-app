import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import InicioProfesor from './actividades/InicioProfesor'
import Home from './actividades/Home'
import NuevoCurso from './actividades/NuevoCurso'

const MainNavigator = createStackNavigator({
  ActividadInicioProfesor: InicioProfesor,
  ActividadInicio: Home,
  ActividadNuevoCurso: NuevoCurso
},{
  initialRouteName: 'ActividadInicio'
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}