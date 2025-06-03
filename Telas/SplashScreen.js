import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCores } from '../Contexts/CoresContext';
import { Video } from 'expo-av';

export default function SplashScreen() {
  const navigation = useNavigation();
  const { tema } = useCores();

  return (
    <View style={[styles.container, { backgroundColor: tema?.fundo || '#1a1a1a' }]}>
      <Video
        source={require('../assets/video/poi.mp4')}
        shouldPlay
        resizeMode="cover"
        isLooping={false}
        style={styles.videoFullScreen}
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            navigation.replace('Tabs');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoFullScreen: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
