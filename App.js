import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableWithoutFeedback, ScrollView, SafeAreaView, Text, View } from 'react-native';
import CardFlip from 'react-native-card-flip';
import * as Font from 'expo-font';
import * as _ from 'lodash';
import * as INTER from '@expo-google-fonts/inter';
import * as ROBOTO from '@expo-google-fonts/roboto';
import * as PTSANS from '@expo-google-fonts/pt-sans';
import * as RALEWAY from '@expo-google-fonts/raleway';

let card;
const fonts = [
    [
        'Raleway_100Thin',
        'Raleway_100Thin_Italic',
        'Raleway_200ExtraLight',
        'Raleway_200ExtraLight_Italic',
        'Raleway_300Light',
        'Raleway_300Light_Italic',
        'Raleway_400Regular',
        'Raleway_400Regular_Italic',
        'Raleway_500Medium',
        'Raleway_500Medium_Italic',
        'Raleway_600SemiBold',
        'Raleway_600SemiBold_Italic',
        'Raleway_700Bold',
        'Raleway_700Bold_Italic',
        'Raleway_800ExtraBold',
        'Raleway_800ExtraBold_Italic',
        'Raleway_900Black',
        'Raleway_900Black_Italic',
    ],
    [
        'PTSans_400Regular',
        'PTSans_400Regular_Italic',
        'PTSans_700Bold',
        'PTSans_700Bold_Italic',
    ],
    [
        'Roboto_100Thin',
        'Roboto_100Thin_Italic',
        'Roboto_300Light',
        'Roboto_300Light_Italic',
        'Roboto_400Regular',
        'Roboto_400Regular_Italic',
        'Roboto_500Medium',
        'Roboto_500Medium_Italic',
        'Roboto_700Bold',
        'Roboto_700Bold_Italic',
        'Roboto_900Black',
        'Roboto_900Black_Italic',
    ],
    [
        'Inter_100Thin',
        'Inter_200ExtraLight',
        'Inter_300Light',
        'Inter_400Regular',
        'Inter_500Medium',
        'Inter_600SemiBold',
        'Inter_700Bold',
        'Inter_800ExtraBold',
        'Inter_900Black',
    ],
];
const quote = [
    "I had always heard your entire life flashes in front of your eyes the second before you die.",
    "First of all, that one second isn’t a second at all.",
    "It stretches on forever, like an ocean of time.",
    "For me, it was lying on my back at Boy Scout Camp, watching falling stars.",
    "And yellow leaves from the maple trees that lined our street.",
    "Or my grandmother’s hands, and the way her skin seemed like paper.",
    "And the first time I saw my cousin Tony’s brand new Firebird.",
    "And Janie, and Janie.",
    "And Carolyn.",
    "I guess I could be pretty pissed off about what happened to me, but it’s hard to stay mad when there’s so much beauty in the world.",
    "Sometimes I feel like I’m seeing it all at once, and it’s too much.",
    "My heart fills up like a balloon that’s about to burst.",
    "And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain, and I can’t feel anything but gratitude for every single moment of my stupid little life.",
    "You have no idea what I’m talking about, I’m sure.",
    "But don’t worry.",
    "You will someday.",
    "I had always heard your entire life flashes in front of your eyes the second before you die.",
    "First of all, that one second isn’t a second at all.",
    "It stretches on forever, like an ocean of time.",
    "For me, it was lying on my back at Boy Scout Camp, watching falling stars.",
    "And yellow leaves from the maple trees that lined our street.",
    "Or my grandmother’s hands, and the way her skin seemed like paper.",
    "And the first time I saw my cousin Tony’s brand new Firebird.",
    "And Janie, and Janie.",
    "And Carolyn.",
    "I guess I could be pretty pissed off about what happened to me, but it’s hard to stay mad when there’s so much beauty in the world.",
    "Sometimes I feel like I’m seeing it all at once, and it’s too much.",
    "My heart fills up like a balloon that’s about to burst.",
    "And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain, and I can’t feel anything but gratitude for every single moment of my stupid little life.",
    "You have no idea what I’m talking about, I’m sure.",
    "But don’t worry.",
    "You will someday.",
];
export default function App() {
    const [text, setText] = useState([]);
    const [font, setFont] = useState('');
    let [loadedRaleway, errorRaleway] = RALEWAY.useFonts({
        Raleway_100Thin: RALEWAY.Raleway_100Thin,
        Raleway_100Thin_Italic: RALEWAY.Raleway_100Thin_Italic,
        Raleway_200ExtraLight: RALEWAY.Raleway_200ExtraLight,
        Raleway_200ExtraLight_Italic: RALEWAY.Raleway_200ExtraLight_Italic,
        Raleway_300Light: RALEWAY.Raleway_300Light,
        Raleway_300Light_Italic: RALEWAY.Raleway_300Light_Italic,
        Raleway_400Regular: RALEWAY.Raleway_400Regular,
        Raleway_400Regular_Italic: RALEWAY.Raleway_400Regular_Italic,
        Raleway_500Medium: RALEWAY.Raleway_500Medium,
        Raleway_500Medium_Italic: RALEWAY.Raleway_500Medium_Italic,
        Raleway_600SemiBold: RALEWAY.Raleway_600SemiBold,
        Raleway_600SemiBold_Italic: RALEWAY.Raleway_600SemiBold_Italic,
        Raleway_700Bold: RALEWAY.Raleway_700Bold,
        Raleway_700Bold_Italic: RALEWAY.Raleway_700Bold_Italic,
        Raleway_800ExtraBold: RALEWAY.Raleway_800ExtraBold,
        Raleway_800ExtraBold_Italic: RALEWAY.Raleway_800ExtraBold_Italic,
        Raleway_900Black: RALEWAY.Raleway_900Black,
        Raleway_900Black_Italic: RALEWAY.Raleway_900Black_Italic,
    });
    let [loadedPtsans, errorPtsans] = PTSANS.useFonts({
        PTSans_400Regular: PTSANS.PTSans_400Regular,
        PTSans_400Regular_Italic: PTSANS.PTSans_400Regular_Italic,
        PTSans_700Bold: PTSANS.PTSans_700Bold,
        PTSans_700Bold_Italic: PTSANS.PTSans_700Bold_Italic,
    });
    let [loadedInter, errorInter] = INTER.useFonts({
        Inter_100Thin: INTER.Inter_100Thin,
        Inter_200ExtraLight: INTER.Inter_200ExtraLight,
        Inter_300Light: INTER.Inter_300Light,
        Inter_400Regular: INTER.Inter_400Regular,
        Inter_500Medium: INTER.Inter_500Medium,
        Inter_600SemiBold: INTER.Inter_600SemiBold,
        Inter_700Bold: INTER.Inter_700Bold,
        Inter_800ExtraBold: INTER.Inter_800ExtraBold,
        Inter_900Black: INTER.Inter_900Black,
    });
    let [loadedRoboto, errorRoboto] = ROBOTO.useFonts({
        Roboto_100Thin: ROBOTO.Roboto_100Thin,
        Roboto_100Thin_Italic: ROBOTO.Roboto_100Thin_Italic,
        Roboto_300Light: ROBOTO.Roboto_300Light,
        Roboto_300Light_Italic: ROBOTO.Roboto_300Light_Italic,
        Roboto_400Regular: ROBOTO.Roboto_400Regular,
        Roboto_400Regular_Italic: ROBOTO.Roboto_400Regular_Italic,
        Roboto_500Medium: ROBOTO.Roboto_500Medium,
        Roboto_500Medium_Italic: ROBOTO.Roboto_500Medium_Italic,
        Roboto_700Bold: ROBOTO.Roboto_700Bold,
        Roboto_700Bold_Italic: ROBOTO.Roboto_700Bold_Italic,
        Roboto_900Black: ROBOTO.Roboto_900Black,
        Roboto_900Black_Italic: ROBOTO.Roboto_900Black_Italic,
    });
    const resetList = () => {
        const _text = [];
        const _font = fonts[Math.floor(Math.random() * fonts.length)];
        let _quote = _.shuffle(quote);
        for (let i = 0; i < _font.length; i++) _text.push({text: _quote[i].slice(0, 40), font: _font[i],});
        _quote = _.shuffle(quote);
        for (let i = 0; i < (40 - _font.length); i++) _text.push({text: _quote[Math.floor(Math.random() * _quote.length)].slice(0, 30), font: _font[i],});
        setText(_text);
        setFont(_font[0]);
    };
    useEffect(() => {
        resetList();
    }, []);
    const renderText = (t, i) => {
        return (
            <Text
                numberOfLines={1}
                style={{
                    includeFontPadding: false,
                    textAlign: 'left',
                    marginBottom: 24,
                    fontSize: 24,
                    fontFamily: t.font,
                }}
                key={`text-${i}`}>{t.text}</Text>
        );
    };
    const handleShowFont = () => {
        card.flip();
    };
    const handleShowList = () => {
        setTimeout(() => {
            resetList();
        }, 200);
        card.flip();
    };
  return (
      <View style={{flex: 1}}>
          <SafeAreaView style={styles.container}>
              <CardFlip style={styles.cardContainer} ref={ref => card = ref} >
                      <ScrollView
                              showsVerticalScrollIndicator={false}
                              contentContainerStyle={styles.contentContainer}>
                  <TouchableWithoutFeedback onPress={handleShowFont}>
                          <View style={{flex: 1}}>
                              {loadedRaleway && loadedPtsans && loadedInter && loadedRoboto && text.map(renderText)}
                              </View>
                  </TouchableWithoutFeedback>
                      </ScrollView>
                  <TouchableWithoutFeedback onPress={handleShowList}>
                      <View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: font,}}>
                          <Text style={{fontSize: 32,}}>{font.split('_')[0]}</Text>
                          </View>
                  </TouchableWithoutFeedback>
              </CardFlip>
              <StatusBar style="auto" />
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
      paddingLeft: 32,
  },
    contentContainer: {paddingHorizontal: 32},
});
