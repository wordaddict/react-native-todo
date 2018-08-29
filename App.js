import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(e) {
    const value = e;
    this.setState({newTodo: value})
  }

  handlePress(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''})
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} type="text" onChangeText={this.handleChange.bind(this)}/>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Create Todo</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) => {
          return (
            <Text key={i}>{todo}</Text>
          ) 
        }
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
