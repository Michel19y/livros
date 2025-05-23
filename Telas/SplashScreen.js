import { View } from "react-native";
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        autoPlay
        loop={false}
        source={require('../assets/agua.json')}
        onAnimationFinish={() => navigation.navigate('Estige')}
      />
    </View>
  );
}
