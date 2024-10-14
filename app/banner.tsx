import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    require("../assets/images/banner.jpg"),
    require("../assets/images/banner1.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Thay đổi hình ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={[
            styles.image,
            {
              opacity: currentImage === index ? 1 : 0, // Chỉ hiện hình ảnh hiện tại
              transform: [
                {
                  translateX: width * (index - currentImage),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400, // Chiều cao của banner
    width: width * 0.9, // Kích thước nhỏ hơn chiều rộng màn hình
    alignSelf: "center", // Căn giữa banner
    overflow: "hidden",
    marginVertical: 20, // Khoảng cách trên và dưới
  },
  image: {
    position: "absolute",
    width: "100%", // Đảm bảo hình ảnh chiếm toàn bộ chiều rộng
    height: "100%", // Đảm bảo hình ảnh chiếm toàn bộ chiều cao
    resizeMode: "cover", // Đảm bảo hình ảnh được cắt tỉ lệ
    transition: 'opacity 0.5s ease-in-out', // Thêm hiệu ứng chuyển tiếp
  },
});

export default Banner;
