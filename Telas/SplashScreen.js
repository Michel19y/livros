import { View, Text } from "react-native";
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'red' }}>

     
     <LottieView style={{ flex: 1, backgroundColor:'black' }}
        autoPlay
        loop={false}
        source={require('../assets/tela.json')}
        onAnimationFinish={() => navigation.navigate('Estige')}
      /> 
    </View>
  );
}
