import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../type/product";

export default function ProductItem({product}: {product: Product}) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: product.image}} style={styles.image} />
            </View>
            
            <View>
                <Text style={styles.name}>{product.product_name}</Text>
                <Text style={styles.name}>Shop: 
                    <Text style={styles.shop}>{product.shop}</Text>
                </Text>
            </View>

            <View>
                <Button title="Chat" color="red" onPress={() => {}}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginHorizontal: 10,
        gap: 4
    },

    image: {
        width: 120,
        height: 120,
        objectFit: 'cover',
        borderRadius: 10,
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    shop: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: 'red',
    },
    button: {
        marginTop: 10,
        padding: 10,
    },
});