import { Image, StyleSheet, Text, View } from "react-native";
import { UsbProduct } from "../type/product";

export default function UsbItem({product}: {product: UsbProduct}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: product.image}} style={styles.image} />
            </View>
            
            <View style={styles.contentContainer}>
                <Text style={styles.productName} numberOfLines={2}>
                    {product.product_name}
                </Text>
                
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{product.rating} <Text style={styles.comment}>({product.comment})</Text></Text>
                </View>
                
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.discount}>{product.discount}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    image: {
        width: 100,
        height: 100,
        objectFit: 'cover',
        borderRadius: 5,
    },
    contentContainer: {
        flex: 1,
    },
    productName: {
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
        marginBottom: 5,
        lineHeight: 16,
    },
    ratingContainer: {
        marginBottom: 5,
    },
    rating: {
        fontSize: 11,
        color: '#FFC107',
    },
    comment: {
        fontSize: 11,
        color: '#666',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#d70018',
    },
    discount: {
        fontSize: 11,
        color: '#27AE60',
        backgroundColor: '#E8F5E8',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 3,
    },
});