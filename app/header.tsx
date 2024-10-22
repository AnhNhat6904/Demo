import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";

const Header = ({ item }) => {
  const navigation = useNavigation();

  const handleLogoPress = () => {
    navigation.navigate("home");
  };

  const handleCartPress = () => {
    navigation.navigate("cart", { product: item });
  };

  const handleLoginPress = () => {
    navigation.navigate("index");
  };

  const handleRegisterPress = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={handleLogoPress}
        >
          <Image
            source={require("../assets/images/logo.jpg")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.authButtons}>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.authButtonText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.authButtonText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color="black" /> {/* Contact icon */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleCartPress}>
            <Ionicons name="cart-outline" size={24} color="black" /> {/* Shopping cart icon */}
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    overflow: "hidden",
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  searchButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  authButtonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  separator: {
    marginHorizontal: 5,
    color: "#999",
    fontSize: 14,
  },
  iconButtons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
  cartBadge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;
