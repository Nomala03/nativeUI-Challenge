import { SafeAreaView } from "react-native-safe-area-context";
import MainScreen from "@/screens/MainScreen";

export default function index () {
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <MainScreen />
    </SafeAreaView>
  );
}