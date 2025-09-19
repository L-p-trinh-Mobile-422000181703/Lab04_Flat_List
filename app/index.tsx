import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "../components/ProductItem";
import { productList } from "../database/product";

export default function ProductListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Bạn có thắc mắc gì với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      <View style={styles.link}>
        <FlatList
          data={productList}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.product_name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
  },
});
