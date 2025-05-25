import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');
const NUM_PARTICULAS = 25;

function Particulas() {
  // Criar várias partículas animadas
  return (
    <>
      {Array.from({ length: NUM_PARTICULAS }).map((_, i) => {
        const translateY = useRef(new Animated.Value(-Math.random() * height)).current;
        const translateX = Math.random() * width;
        const duration = 3000 + Math.random() * 3000;

        useEffect(() => {
          const loop = () => {
            translateY.setValue(-50);
            Animated.timing(translateY, {
              toValue: height + 50,
              duration,
              useNativeDriver: true,
            }).start(() => loop());
          };
          loop();
        }, []);

        return (
          <Animated.View
            key={i}
            style={[
              styles.particula,
              {
                left: translateX,
                transform: [{ translateY }],
                opacity: Math.random() * 0.5 + 0.5,
              },
            ]}
          />
        );
      })}
    </>
  );
}

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Partículas de fundo */}
      <Particulas />

      {/* Animação do livro */}
      <LottieView
        source={require('../assets/json/livro.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={styles.lottieAnimation}
        onAnimationFinish={() => navigation.replace('Tabs')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  lottieAnimation: {
    width: width * 0.8,
    height: height * 0.6,
    zIndex: 1,
  },
  particula: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffdb73', // dourado suave
    zIndex: 0,
  },
});
