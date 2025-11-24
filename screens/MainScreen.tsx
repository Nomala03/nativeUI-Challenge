import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import IconCircle from "@/components/IconCircle";
import TimerDots from "@/components/TimerDots";
import QuantitySelector from "@/components/QuantitySelector";

const { width, height } = Dimensions.get("window");

export default function MainScreen() {
  const [qty, setQty] = React.useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topRow}>
          <IconCircle style={{ marginLeft: 6 }}>
            <Image
              source={require("../assets/images/less.png")}
              style={styles.less}
            />{" "}
          </IconCircle>

          <Image
            source={require("../assets/images/XefagIcon.png")}
            style={{ width: 45, height: 45, marginLeft: 14 }}
          />

          <Text style={styles.title}>Xefag</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
              gap: 16,
            }}>
            <IconCircle>
              {" "}
              <Image
                source={require("../assets/images/user.png")}
                style={styles.userImage}
              />
            </IconCircle>

            <IconCircle>
              <Image
                source={require("../assets/images/trash-bin.png")}
                style={styles.bin}
              />
            </IconCircle>
          </View>
        </View>

        <View style={styles.modeRow}>
          <View style={styles.modeItem}>
            <Image
              source={require("../assets/images/flower.png")}
              style={styles.flower}
            />
            <Text style={styles.modeText}>Relax</Text>

            <Image
              source={require("../assets/images/moon.png")}
              style={styles.moon}
            />
            <Text style={[styles.modeText, { opacity: 0.5 }]}>Sleep</Text>
          </View>
        </View>

        {/* Mode Selector*/}

        <View style={styles.timerColumn}>
          {" "}
          <TimerDots active={30} />
        </View>

        {/* Pill Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/images/pills.png")}
            style={styles.pillImage}
            resizeMode="contain"
          />
        </View>

        {/* Bottom White Card */}
        <View style={styles.card}>
          <Text style={styles.title2}>Relax 30{"\n"}Dissolvable Wafers</Text>

          <Text style={styles.subtitle}>250 mg</Text>
          <View style={styles.cost}>
            {" "}
            <Text style={styles.price}>$25.50</Text>
            <View style={styles.quantityRow}>
              <QuantitySelector value={qty} onChange={setQty} />
            </View>
          </View>

          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyTxt}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BAD9EC",
    padding: 20,
  },

  topBar: {
    width: width * 0.9,
    height: height * 0.9,
    backgroundColor: "#F9C327",
    borderRadius: 34,
    position: "relative",
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
    marginTop: -6,

    //tilt slightly to the right
    transform: [{ rotate: "2.5deg" }],

    // add shadow to lift it off background
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  less: {
    width: 35,
    height: 35,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 12,
    color: "#0f0f0f",
    letterSpacing: 1,
  },

  userImage: {
    width: 40,
    height: 40,
    backgroundColor: "#DB8B00",
    borderRadius: 20,
    padding: 8,
  },

  bin: { width: 20, height: 20 },

  modeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  modeItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  flower: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#DB8B00",
    padding: 4,
  },

  modeText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
    color: "#0f0f0f",
  },

  moon: {
    width: 25,
    height: 25,
    borderRadius: 20,
    padding: 4,
    opacity: 0.5,
    marginLeft: 18,
  },

  timerColumn: {
    marginLeft: "auto",
    marginTop: -40,
  },

  pillImage: {
    width: width * 0.7,
    height: width * 0.95,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

  imageWrapper: {
    alignItems: "center",
    position: "absolute",
    top: "12%", 
    left: 0,
    right: 0,
  },

  card: {
    position: "absolute",
    width: width * 0.9,
    height: width * 0.7,
    alignSelf: "center",
    backgroundColor: "#fff",
    bottom: 0,
    borderRadius: 35,
    paddingHorizontal: width * 0.07,
    paddingVertical: width * 0.08,
  },

  title2: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    lineHeight: 35,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: "#666",
  },

  cost: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  
  quantityRow: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  buyBtn: {
    marginTop: 18,
    backgroundColor: "#FFD02A",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
  },

  buyTxt: {
    fontSize: 18,
    fontWeight: "600",
  },
});
