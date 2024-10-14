import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import biểu tượng

const Footer = () => {
  const handleFacebookPress = () => {
    console.log("Facebook icon pressed");
  };

  const handleInstagramPress = () => {
    console.log("Instagram icon pressed");
  };

  const handleTwitterPress = () => {
    console.log("Twitter icon pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>Liên hệ: 0387332488</Text>
      <Text style={styles.linkText}>Chính sách bảo mật</Text>
      <Text style={styles.copyText}>©Cửa hàng Rolex. Top 1 thương hiệu thời trang.</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Icon name="facebook" size={20} color="#0a48c9" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Icon name="instagram" size={20} color="#eb002f" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTwitterPress}>
          <Icon name="twitter" size={20} color="#1da1f2" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333", // Màu nền xám
    padding: 20,
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 15 // Khoảng cách dưới cùng giữa biểu tượng và văn bản
  },
  icon: {
    marginHorizontal: 10, // Khoảng cách giữa các biểu tượng
  },
  linkText: {
    color: "white", // Màu chữ đen
    fontSize: 14,
    marginVertical: 5,
  },
  copyText: {
    color: "white", // Màu chữ đen
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Footer;
