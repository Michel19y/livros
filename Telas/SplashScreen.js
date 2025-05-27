import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');
const NUM_PARTICULAS = 75;

// Temas disponíveis
const coresTema = {
  classico: {
    fundo: 'black',
    ativo: '#ffdb73',
  },
  neon: {
    fundo: '#001f3f',
    ativo: '#00d9ff',
  },
  claroRoxo: {
    fundo: '#e0f7ff',
    ativo: '#7b2cbf',
  },
};

// Utilitários de cor
function hexParaRgb(hex) {
  const valor = parseInt(hex.replace('#', ''), 16);
  return {
    r: (valor >> 16) & 255,
    g: (valor >> 8) & 255,
    b: valor & 255,
  };
}

function misturarCores(c1, c2, peso = 0.7) {
  return {
    r: Math.round(c1.r * peso + c2.r * (1 - peso)),
    g: Math.round(c1.g * peso + c2.g * (1 - peso)),
    b: Math.round(c1.b * peso + c2.b * (1 - peso)),
  };
}

function corParticulaAtual(nomeTema) {
  const tema = coresTema[nomeTema];
  if (!tema) return 'rgb(255, 0, 0)';
  const ativo = hexParaRgb(tema.ativo);
  const fundo = hexParaRgb(tema.fundo);
  const corFinal = misturarCores(ativo, fundo);
  return `rgb(${corFinal.r}, ${corFinal.g}, ${corFinal.b})`;
}


function Particulas({ cor }) {
  return (
    <>
      {Array.from({ length: NUM_PARTICULAS }).map((_, i) => {
        const translateY = useRef(new Animated.Value(-Math.random() * height)).current;
        const translateX = Math.random() * width;
        const duracao = 3000 + Math.random() * 3000;

        useEffect(() => {
          const animar = () => {
            translateY.setValue(-50);
            Animated.timing(translateY, {
              toValue: height + 50,
              duration: duracao,
              useNativeDriver: true,
            }).start(() => animar());
          };
          animar();
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
                backgroundColor: cor,
              },
            ]}
          />
        );
      })}
    </>
  );
}

export default function SplashScreen({ navigation }) {
  const nomesTemas = Object.keys(coresTema);
  const [temaAtualIndex, setTemaAtualIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTemaAtualIndex(prev => (prev + 1) % nomesTemas.length);
    }, 500); // troca a cada 0.5 segundo

    return () => clearInterval(intervalo);
  }, []);

  const nomeTema = nomesTemas[temaAtualIndex];
  const cor = corParticulaAtual(nomeTema);

  return (
    <View style={[styles.container, { backgroundColor: coresTema[nomeTema].fundo }]}>
      <Particulas cor={cor} />

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
    zIndex: 0,
  },
});
