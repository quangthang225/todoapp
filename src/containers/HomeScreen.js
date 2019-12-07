import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import { SafeAreaView, FlatList, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
class HomeScreen extends Component {
    mapStateToProps = state => ({
        todos: state.todos
    })

    mapDispatchToProps = dispatch => ({
        toggleTodo: id => dispatch(toggleTodo(id))
    })

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <TodoItem title={item.title} />}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={this.clickHandler}
                    style={styles.fab}>
                    <Image
                        source={{
                            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                        }}
                        style={styles.imageFAB}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        right: 30,
        bottom: 30,
    },
    imageFAB: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }

});

export default HomeScreen;