import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Header from "./header";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      image: require("../assets/images/product01.webp"),
      name: "Đồng Hồ Rolex - Nam M126333-0012",
      qty: 1,
      size: "41mm",
      price: 427500000,
      selected: true,
    },
    {
      id: "2",
      image: require("../assets/images/product02.webp"),
      name: "Đồng Hồ Rolex - Nam M126281RBR",
      qty: 1,
      size: "40mm",
      price: 43700000,
      selected: true,
    },
    {
      id: "3",
      image: require("../assets/images/product03.webp"),
      name: "Đồng Hồ Rolex - Nam M126233-0025",
      qty: 1,
      size: "42mm",
      price: 440000000,
      selected: true,
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const toggleItemSelection = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <TouchableOpacity
        onPress={() => toggleItemSelection(item.id)}
        style={styles.checkbox}
      >
        {item.selected ? (
          <Feather name="check-square" size={24} color="#00796B" />
        ) : (
          <Feather name="square" size={24} color="#888" />
        )}
      </TouchableOpacity>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemInfo}>Size: {item.size}</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, -1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.qty}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemPrice}>
        {(item.price * item.qty).toLocaleString("vi-VN")} ₫
      </Text>
    </View>
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => (item.selected ? sum + item.price * item.qty : sum),
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Giỏ hàng</Text>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
          <View style={styles.summaryContainer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Tổng cộng:</Text>
              <Text style={styles.totalAmount}>
                {totalAmount.toLocaleString("vi-VN")} ₫
              </Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 15,
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00796B", // Màu xanh đậm cho tiêu đề
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Màu nền trắng cho từng mục giỏ hàng
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkbox: {
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00796B", // Màu xanh đậm cho tên sản phẩm
  },
  itemInfo: {
    fontSize: 14,
    color: "#666",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00796B", // Màu cam cho giá sản phẩm
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    width: 23,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00796B", // Màu xanh đậm cho nút tăng giảm số lượng
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  totalContainer: {
    flex: 1,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00796B", // Màu cam cho tổng số tiền
  },
  checkoutButton: {
    backgroundColor: "#00796B", // Màu xanh đậm cho nút thanh toán
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 100,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Cart;
