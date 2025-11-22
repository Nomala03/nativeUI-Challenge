import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import IconCircle from "@/components/IconCircle";
import TimerDots from "@/components/TimerDots";

const { width, height } = Dimensions.get("window");

export default function MainScreen() {
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
            style={{ width: 45, height: 45, marginLeft: 12 }}
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
              />{" "}
            </IconCircle>

            <IconCircle>
              <Image
                source={require("../assets/images/trash-bin.png")}
                style={styles.bin}
              />
            </IconCircle>
          </View>
        </View>

        {/* Mode Selector*/}
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

        {/* Pill Image & Timer */}
        <View style={styles.centerRow}>
          
            <View style={styles.pillBottleShadow}>
              <Image
                source={require("../assets/images/pills.png")}
                style={styles.pillImage}
                resizeMode="contain"
              />
            </View>
          
          <View style={{ marginBottom: 80 }}>
            <TimerDots active={60} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    width: width * 0.95,
    height: height * 0.68,
    backgroundColor: "#f7B615",
    marginTop: 20,
    padding: 18,
    paddingHorizontal: 24,
    alignSelf: "center",
    borderRadius: 28,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
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
  iconText: {
    fontWeight: "600",
  },
  cart: {
    fontSize: 16,
  },
  userImage: {
    width: 40,
    height: 40,
    backgroundColor: "#DB8B00",
    borderRadius: 20,
    padding: 10,
  },
  bin: {
    width: 20,
    height: 20,
  },
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
  centerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    justifyContent: "space-between",
  },

  pillBottleShadow: {
    width: 200,
    height: 260,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 12,
  },
  pillImage: {
    width: 200,
    height: 380,
    marginLeft: 60,
  },
});
