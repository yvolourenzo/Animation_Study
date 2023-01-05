import React, { Component } from 'react';
import {
       StyleSheet,
       Text,
       View , 
       Animated
       } from 'react-native';

class App extends Component{

constructor(props){
  super(props);
  this.state = { 
    // passa o valor inicial
    LarAnimada: new Animated.Value(150),
    AltAnimada: new Animated.Value(50),
    // começa com ele visivel
    OpacidadeAnimada:  new Animated.Value(0)
  };

Animated.sequence([
   
  Animated.timing(
      this.state.OpacidadeAnimada,
    {
      toValue: 1,
      duration: 1500
    }
    ),

    Animated.parallel([
      
      Animated.timing(
        this.state.LarAnimada,{
          toValue: 300,
          duration: 2000
        }
      ),

      Animated.timing(
        this.state.AltAnimada,{
          toValue: 200,
          duration: 2000
        }
      )

    ]),

    Animated.timing(
      this.state.OpacidadeAnimada,{
        toValue: 0,
        duration: 1500
      }
    )


  ]).start();

  // Animated.timing(
  //   // diz a state que vai ser animada
  //   this.state.LarAnimada,
  // { 
  //   // O valor que ela vai ser
  //   toValue: 350,
  //   // Duração da animação
  //   duration: 500
  // }
  // ).start();

}
  render(){
    return(
        <View style={styles.container}>
            
            <Animated.View style={{
               width:  this.state.LarAnimada,
               height: this.state.AltAnimada,
               backgroundColor: '#4169E1', 
               justifyContent: 'center',
               opacity: this.state.OpacidadeAnimada}}>
                <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>
            </Animated.View>

            </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
