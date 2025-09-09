import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Platform, Animated } from "react-native";
import "expo-dev-client";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-4400616293041503/4048211471";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="cart-outline" size={40} color="#1a3c34" />
        <Text style={styles.title}>SmartCart</Text>
      </View>
      <Text style={styles.subtitle}>Plan Meals, Shop Smart, Save Time</Text>

      {/* Main Content */}
      <Animated.View style={[styles.contentBox, { opacity: fadeAnim }]}>
        <Text style={styles.welcomeText}>
          Discover the easiest way to plan your meals and manage your grocery shopping.
        </Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => {}}>
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Banner Ad */}
      <View style={styles.adContainer}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1a3c34",
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#4b6b66",
    fontWeight: "400",
    marginVertical: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  contentBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 20,
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 28,
    fontWeight: "500",
  },
  ctaButton: {
    backgroundColor: "#1a3c34",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  adContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 10,
  },
});