import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Header from "./header";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const ProductDetail = ({ navigation }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: "1",
    name: "Đồng Hồ Rolex - Nam M126333-0012",
    price: 450000000,
    salePrice: 427500000,
    soldCount: 100,
    image: require("../assets/images/product01.webp"),
    description: "Mô tả chi tiết về sản phẩm.",
    sizes: ["35-40mm", "40-45mm", "45-49mm", "FREE"],
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Đồng Hồ Rolex - Nam M126281RBR",
      price: 460000000,
      image: require("../assets/images/product02.webp"),
    },
    {
      id: "3",
      name: "Đồng Hồ Rolex - Nam M126233-0025",
      price: 440000000,
      image: require("../assets/images/product03.webp"),
    },
    {
      id: "4",
      name: "Đồng Hồ Rolex - Nam M126334-0016",
      price: 420000000,
      image: require("../assets/images/product04.webp"),
    },
  ];

  const renderRelatedProduct = ({ item }) => (
    <View style={styles.relatedProductItem}>
      <Image source={item.image} style={styles.relatedProductImage} />
      <Text style={styles.relatedProductName}>{item.name}</Text>
      <Text style={styles.relatedProductPrice}>
        {item.price.toLocaleString("vi-VN")} ₫
      </Text>
    </View>
  );

  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header navigation={navigation} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image
              source={product.image}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceWrapper}>
                <Text
                  style={[styles.price, product.salePrice && styles.strikethrough]}
                >
                  {product.price.toLocaleString("vi-VN")} ₫
                </Text>
                {product.salePrice && (
                  <Text style={styles.salePrice}>
                    {product.salePrice.toLocaleString("vi-VN")} ₫
                  </Text>
                )}
              </View>
              <Text style={styles.soldCount}>Đã bán {product.soldCount}</Text>
            </View>

            <Text style={styles.sectionTitle}>Chọn kích cỡ:</Text>
            <View style={styles.sizeContainer}>
              {product.sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[styles.sizeButtonText, selectedSize === size && styles.selectedSizeButtonText]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Số lượng:</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Mô tả sản phẩm:</Text>
            <Text style={styles.description}>{product.description}</Text>

            <Text style={styles.sectionTitle}>Sản phẩm liên quan:</Text>
            <FlatList
              data={relatedProducts}
              renderItem={renderRelatedProduct}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartButtonText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Mua ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  content: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 250,
    width: width,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: width * 0.8,
    height: "100%",
  },
  infoContainer: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 18, // Tăng kích thước văn bản
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  price: {
    fontSize: 15,
    color: "#888",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  salePrice: {
    fontSize: 18, // Tăng kích thước cho giá khuyến mãi
    color: "#FF6600",
  },
  sectionTitle: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 6,
    color: "#00796B",
  },
  sizeContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  selectedSizeButton: {
    borderColor: "#00796B",
  },
  sizeButtonText: {
    fontSize: 12, // Điều chỉnh kích thước chữ cho nút kích cỡ
  },
  selectedSizeButtonText: {
    color: "#00796B",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: "#00796B",
    fontSize: 20,
  },
  quantityText: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 14, // Điều chỉnh kích thước mô tả
    lineHeight: 24,
    marginBottom: 10,
    color: "#555",
  },
  relatedProductItem: {
    marginRight: 15,
    width: 100,
  },
  relatedProductImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  relatedProductName: {
    fontSize: 12,
    marginTop: 5,
  },
  relatedProductPrice: {
    fontSize: 12,
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cartButton: {
    backgroundColor: "#B2EBF2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#00796B",
  },
  cartButtonText: {
    color: "#00796B",
    fontSize: 15,
  },
  buyButton: {
    backgroundColor: "#00796B",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  soldCount: {
    fontSize: 12,
    color: "#888",
  },
});

export default ProductDetail;
