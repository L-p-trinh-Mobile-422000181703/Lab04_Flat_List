import { FlatList, StyleSheet, Text, View } from "react-native";
import UsbItem from "../components/UsbItem";
import { usbList } from "../database/product";

export default function ProductListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Bạn có thắc mắc gì với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      <View style={styles.link}>
        <FlatList
          data={usbList[0]}
          renderItem={({ item }) => <UsbItem product={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
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
  row: {
    justifyContent: 'space-around',
  },
});
