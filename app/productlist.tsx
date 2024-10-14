import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const products = [
  {
    id: "1",
    name: "Đồng Hồ Rolex - Nam M126333-0012",
    image: require("../assets/images/product01.webp"),
    originalPrice: 450000000,
    discountedPrice: 427500000,
    soldCount: 100,
  },
  {
    id: "2",
    name: "Đồng Hồ Rolex - Nam M126281RBR",
    image: require("../assets/images/product02.webp"),
    originalPrice: 460000000,
    discountedPrice: 437000000,
    soldCount: 150,
  },
  {
    id: "3",
    name: "Đồng Hồ Rolex - Nam M126233-0025",
    image: require("../assets/images/product03.webp"),
    originalPrice: 440000000,
    discountedPrice: 418000000,
    soldCount: 150,
  },
  {
    id: "4",
    name: "Đồng Hồ Rolex - Nam M126334-0016",
    image: require("../assets/images/product04.webp"),
    originalPrice: 420000000,
    discountedPrice: 392000000,
    soldCount: 150,
  },
  {
    id: "5",
    name: "Đồng Hồ Rolex - Nam M126231-0037",
    image: require("../assets/images/product05.webp"),
    originalPrice: 430000000,
    discountedPrice: 408500000,
    soldCount: 150,
  },
  {
    id: "6",
    name: "Đồng Hồ Rolex - Nam M126331-0002",
    image: require("../assets/images/product06.webp"),
    originalPrice: 400000000,
    discountedPrice: 380500000,
    soldCount: 150,
  },
];

const ProductItem = ({ item }) => {
  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate("productdetail", { product: item });
  };

  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={handleProductPress}>
        <Image source={item.image} style={styles.productImage} />
      </TouchableOpacity>
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>
          {item.discountedPrice.toLocaleString()} đ
        </Text>
        <Text style={styles.originalPrice}>
          {item.originalPrice.toLocaleString()} đ
        </Text>
      </View>
      <Text style={styles.soldCount}>Đã bán {item.soldCount}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Feather name="shopping-cart" size={18} color="white" />
        <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductList = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.productList}
    />
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: 5, // Giảm khoảng cách tổng thể để tiết kiệm không gian
  },
  productItem: {
    width: (width - 30) / 2,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15, // Tăng khoảng cách giữa các sản phẩm
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%", // Sử dụng chiều rộng 100% để đảm bảo hình ảnh vừa khít
    height: 150, // Điều chỉnh chiều cao hình ảnh
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF4500", // Màu đỏ cho giá khuyến mãi
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
  },
  soldCount: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: "#007BFF", // Màu xanh cho nút thêm vào giỏ
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 5,
  },
  addToCartText: {
    color: "white",
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ProductList;
