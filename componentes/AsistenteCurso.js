import React, {Component} from 'react'
import {View, FlatList, Text, Switch, StyleSheet} from 'react-native'

export default class AsistenteCurso extends Component {

    constructor(props) {
        super(props)
        this._CambiarAsistencia = this._CambiarAsistencia.bind(this)
    }
   
    render() {
      return(
          <View style={[styles.scene, { backgroundColor: '#FFFFFF' }]}>
            <FlatList
              data={this.props.asistentes}
              renderItem={({item, index}) => <View style={{
                display:'flex',
                flexDirection:'row',
                padding: 5,
                alignItems: 'center'
              }}>
                  <Text style={{
                    flex:1,
                    color: '#444152',
                    fontWeight: 'bold',
                    fontSize: 12
                  }}>{item.matricula}</Text>
                  <Text style={{
                    flex:3,
                    fontSize: 13
                  }}>{`${item.apPaterno} ${item.apMaterno} ${item.nombre}`}</Text>
                  <Switch value={item.asistencia}
                    onValueChange={() => this._CambiarAsistencia(item, index)}
                  />
              </View>}
              keyExtractor={item => item.id.toString()}
            />
          </View> 
      )
    }

    async _CambiarAsistencia(asistente, indx) {
        this.props.cambiarAsistenciaHandler(asistente, indx)
    }
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
});