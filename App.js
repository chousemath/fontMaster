import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {
    useFonts,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

const fonts = [
    ['Inter_700Bold', 'Inter_800ExtraBold', 'Inter_900Black',],
];
const quote = "I had always heard your entire life flashes in front of your eyes the second before you die. First of all, that one second isn’t a second at all. It stretches on forever, like an ocean of time. For me, it was lying on my back at Boy Scout Camp, watching falling stars. And yellow leaves from the maple trees that lined our street. Or my grandmother’s hands, and the way her skin seemed like paper. And the first time I saw my cousin Tony’s brand new Firebird. And Janie, and Janie. And Carolyn. I guess I could be pretty pissed off about what happened to me, but it’s hard to stay mad when there’s so much beauty in the world. Sometimes I feel like I’m seeing it all at once, and it’s too much. My heart fills up like a balloon that’s about to burst. And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain, and I can’t feel anything but gratitude for every single moment of my stupid little life. You have no idea what I’m talking about, I’m sure. But don’t worry. You will someday.";
export default function App() {
    const [text, setText] = useState([]);
    const [loaded, error] = useFonts({
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });
    useEffect(() => {
        const _quote = quote.split('.');
        const _text = [];
        const _font = fonts[Math.floor(Math.random() * fonts.length)];
        for (let i = 0; i < _font.length; i++) {
            _text.push({
                text: _quote[Math.floor(Math.random() * _quote.length)],
                font: _font[i],
            });
        }
        setText(_text);
    }, []);
    const renderText = (t, i) => {
        return (
            <Text
                numberOfLines={4}
                style={{ fontFamily: t.font }}
                key={`text-${i}`}>{t.text}</Text>
        );
    };
  return (
      <View style={{flex: 1}}>
          <SafeAreaView style={styles.container}>
              {loaded && text.map(renderText)}
              <StatusBar style="auto" />
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      paddingLeft: 32,
  },
});
