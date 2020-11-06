import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const Todo = (props) => {
    return(
        <View style={[{margin: 8, padding: 8}, styles.item]}>
        <Text>{props.item}</Text>
        <Button title={'Delete'} color={'red'} onPress={() => props.delete(props.item)} />
        </View>
    )
}

const FunctionalList = () => {

    const [text, setText] = useState()
    const [list, setList] = useState(['Hello World'])

    useEffect(() => {
        setList(list)

        return () => {
            setList([]);
            setText('');
        }
    }, [])

   const addItem = () => {
        const updatedList = list
        updatedList.push(text)
        setList(updatedList)
        setText('')
    }

    const deleteItem = (index) => {
        const updatedList = list.filter(todo => todo !== index);
        setList(updatedList)
    }

    return(
        <View style={{ width: '20%', marginTop: 50}}>
        <Text style={[styles.align, styles.font]}>Functional List</Text>
        {list.map((x, index) => <Todo key={x} item={x} index={index} delete={deleteItem}/>)}
        <View style={{marginTop: 8}}>
        <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)} />
        <Button title={'Add Item'} onPress={addItem} />
        </View>
    </View>
    )
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

export default FunctionalList;