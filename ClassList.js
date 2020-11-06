import React, { Component } from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'

const Todo = function(props) {
    return(
        <View style={[{margin: 8, padding: 8}, styles.item]}>
            <Text>{props.item}</Text>
            <Button title={'Delete'} color={'red'} onPress={() => props.delete(props.index)} />
        </View>
    )
}

class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            list: []
        }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount() {
        this.setState({
            list: ['Hello World']
        })
    }

    addItem() {
        const updatedList = this.state.list
        updatedList.push(this.state.text)
        this.setState({
            list: updatedList,
            text: ''
        })
    }

    deleteItem(index) {
        const updatedList = this.state.list
        updatedList.splice(index, 1)
        this.setState({
            list: updatedList
        })
    }

    render() {
        return(
            <View style={{ width: '20%'}}>
                <Text style={[styles.align, styles.font]}>Class List</Text>
                {this.state.list.map((x, index) => <Todo item={x} index={index} delete={this.deleteItem}/>)}
                <View style={{marginTop: 8}}>
                <TextInput style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({text})} />
                <Button title={'Add Item'} onPress={this.addItem} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderColor: 'grey', 
        borderWidth: 1, 
        borderRadius: 5, 
        backgroundColor: 'whitesmoke'
    },
    input: {
        borderRadius: 5, 
        borderWidth: 1, 
        marginBottom: 8, 
        padding: 8
    },
    align: {
        alignSelf: 'center'
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ClassList;