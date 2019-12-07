import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
const TodoItem = ({
    title,
    onPress,
}) => {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                disabled={!onPress}
                onPress={() => onPress && onPress()}>
                <View>
                 <Text>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginHorizontal: 20,
    },

});

export default TodoItem;