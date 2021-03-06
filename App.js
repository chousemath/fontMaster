import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import {
    Dimensions,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CardFlip from 'react-native-card-flip';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as _ from 'lodash';
import * as INTER from '@expo-google-fonts/inter';
import * as ROBOTO from '@expo-google-fonts/roboto';
import * as PTSANS from '@expo-google-fonts/pt-sans';
import * as RALEWAY from '@expo-google-fonts/raleway';
import * as MONTSERRAT from '@expo-google-fonts/montserrat';
import * as SOURCESANSPRO from '@expo-google-fonts/source-sans-pro';
import * as OSWALD from '@expo-google-fonts/oswald';
import * as SLABO27PX from '@expo-google-fonts/slabo-27px';
import * as LATO from '@expo-google-fonts/lato';
import * as OPENSANS from '@expo-google-fonts/open-sans';
import * as LORA from '@expo-google-fonts/lora';
import * as NOTOSANS from '@expo-google-fonts/noto-sans';
import * as NUNITOSANS from '@expo-google-fonts/nunito-sans';
import {
    animate,
    animatedTiming,
    animateNative,
} from './libraries/animation.service';

let card;
const fonts = [
    [
        'NunitoSans_200ExtraLight',
        'NunitoSans_200ExtraLight_Italic',
        'NunitoSans_300Light',
        'NunitoSans_300Light_Italic',
        'NunitoSans_400Regular',
        'NunitoSans_400Regular_Italic',
        'NunitoSans_600SemiBold',
        'NunitoSans_600SemiBold_Italic',
        'NunitoSans_700Bold',
        'NunitoSans_700Bold_Italic',
        'NunitoSans_800ExtraBold',
        'NunitoSans_800ExtraBold_Italic',
        'NunitoSans_900Black',
        'NunitoSans_900Black_Italic',
    ],
    [
        'NotoSans_400Regular',
        'NotoSans_400Regular_Italic',
        'NotoSans_700Bold',
        'NotoSans_700Bold_Italic',
    ],
    [
        'Lora_400Regular',
        'Lora_500Medium',
        'Lora_600SemiBold',
        'Lora_700Bold',
        'Lora_400Regular_Italic',
        'Lora_500Medium_Italic',
        'Lora_600SemiBold_Italic',
        'Lora_700Bold_Italic',
    ],
    [
        'OpenSans_300Light',
        'OpenSans_300Light_Italic',
        'OpenSans_400Regular',
        'OpenSans_400Regular_Italic',
        'OpenSans_600SemiBold',
        'OpenSans_600SemiBold_Italic',
        'OpenSans_700Bold',
        'OpenSans_700Bold_Italic',
        'OpenSans_800ExtraBold',
        'OpenSans_800ExtraBold_Italic',
    ],
    [
        'Lato_100Thin',
        'Lato_100Thin_Italic',
        'Lato_300Light',
        'Lato_300Light_Italic',
        'Lato_400Regular',
        'Lato_400Regular_Italic',
        'Lato_700Bold',
        'Lato_700Bold_Italic',
        'Lato_900Black',
        'Lato_900Black_Italic',
    ],
    ['Slabo27px_400Regular'],
    [
        'Oswald_200ExtraLight',
        'Oswald_300Light',
        'Oswald_400Regular',
        'Oswald_500Medium',
        'Oswald_600SemiBold',
        'Oswald_700Bold',
    ],
    [
        'SourceSansPro_200ExtraLight',
        'SourceSansPro_200ExtraLight_Italic',
        'SourceSansPro_300Light',
        'SourceSansPro_300Light_Italic',
        'SourceSansPro_400Regular',
        'SourceSansPro_400Regular_Italic',
        'SourceSansPro_600SemiBold',
        'SourceSansPro_600SemiBold_Italic',
        'SourceSansPro_700Bold',
        'SourceSansPro_700Bold_Italic',
        'SourceSansPro_900Black',
        'SourceSansPro_900Black_Italic',
    ],
    [
        'Montserrat_100Thin',
        'Montserrat_100Thin_Italic',
        'Montserrat_200ExtraLight',
        'Montserrat_200ExtraLight_Italic',
        'Montserrat_300Light',
        'Montserrat_300Light_Italic',
        'Montserrat_400Regular',
        'Montserrat_400Regular_Italic',
        'Montserrat_500Medium',
        'Montserrat_500Medium_Italic',
        'Montserrat_600SemiBold',
        'Montserrat_600SemiBold_Italic',
        'Montserrat_700Bold',
        'Montserrat_700Bold_Italic',
        'Montserrat_800ExtraBold',
        'Montserrat_800ExtraBold_Italic',
        'Montserrat_900Black',
        'Montserrat_900Black_Italic',
    ],
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
    'I had always heard your entire life flashes in front of your eyes the second before you die.',
    'First of all, that one second isn’t a second at all.',
    'It stretches on forever, like an ocean of time.',
    'For me, it was lying on my back at Boy Scout Camp, watching falling stars.',
    'And yellow leaves from the maple trees that lined our street.',
    'Or my grandmother’s hands, and the way her skin seemed like paper.',
    'And the first time I saw my cousin Tony’s brand new Firebird.',
    'And Janie, and Janie.',
    'And Carolyn.',
    'I guess I could be pretty pissed off about what happened to me, but it’s hard to stay mad when there’s so much beauty in the world.',
    'Sometimes I feel like I’m seeing it all at once, and it’s too much.',
    'My heart fills up like a balloon that’s about to burst.',
    'And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain, and I can’t feel anything but gratitude for every single moment of my stupid little life.',
    'You have no idea what I’m talking about, I’m sure.',
    'But don’t worry.',
    'You will someday.',
    'I had always heard your entire life flashes in front of your eyes the second before you die.',
    'First of all, that one second isn’t a second at all.',
    'It stretches on forever, like an ocean of time.',
    'For me, it was lying on my back at Boy Scout Camp, watching falling stars.',
    'And yellow leaves from the maple trees that lined our street.',
    'Or my grandmother’s hands, and the way her skin seemed like paper.',
    'And the first time I saw my cousin Tony’s brand new Firebird.',
    'And Janie, and Janie.',
    'And Carolyn.',
    'I guess I could be pretty pissed off about what happened to me, but it’s hard to stay mad when there’s so much beauty in the world.',
    'Sometimes I feel like I’m seeing it all at once, and it’s too much.',
    'My heart fills up like a balloon that’s about to burst.',
    'And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain, and I can’t feel anything but gratitude for every single moment of my stupid little life.',
    'You have no idea what I’m talking about, I’m sure.',
    'But don’t worry.',
    'You will someday.',
];
function FontText({ t, i }) {
    const [opacity] = useState(new Animated.Value(0));
    useEffect(() => {
        setTimeout(() => {
            animateNative(opacity, t.timeout, 1);
        });
    }, []);
    return (
        <Animated.Text
            key={`internal-text-${i}`}
            numberOfLines={1}
            style={{
                opacity,
                includeFontPadding: false,
                textAlign: 'left',
                marginBottom: 24,
                fontSize: 24,
                fontFamily: t.font,
            }}
            key={`text-${i}`}>
            {t.text}
        </Animated.Text>
    );
}
export default function App() {
    const usedFonts = useRef([]);
    const [animatedValue] = useState(new Animated.Value(0));
    const flipValue = useRef(0);
    animatedValue.addListener(({ value }) => {
        flipValue.current = value;
    });
    const frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });
    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });
    const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
    const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };
    const [opacity] = useState(new Animated.Value(0));
    const [show, setShow] = useState(false);
    const [text, setText] = useState([]);
    const [font, setFont] = useState('');
    let [loadedNunitoSans, errorNunitoSans] = NUNITOSANS.useFonts({
        NunitoSans_200ExtraLight: NUNITOSANS.NunitoSans_200ExtraLight,
        NunitoSans_200ExtraLight_Italic:
            NUNITOSANS.NunitoSans_200ExtraLight_Italic,
        NunitoSans_300Light: NUNITOSANS.NunitoSans_300Light,
        NunitoSans_300Light_Italic: NUNITOSANS.NunitoSans_300Light_Italic,
        NunitoSans_400Regular: NUNITOSANS.NunitoSans_400Regular,
        NunitoSans_400Regular_Italic: NUNITOSANS.NunitoSans_400Regular_Italic,
        NunitoSans_600SemiBold: NUNITOSANS.NunitoSans_600SemiBold,
        NunitoSans_600SemiBold_Italic: NUNITOSANS.NunitoSans_600SemiBold_Italic,
        NunitoSans_700Bold: NUNITOSANS.NunitoSans_700Bold,
        NunitoSans_700Bold_Italic: NUNITOSANS.NunitoSans_700Bold_Italic,
        NunitoSans_800ExtraBold: NUNITOSANS.NunitoSans_800ExtraBold,
        NunitoSans_800ExtraBold_Italic:
            NUNITOSANS.NunitoSans_800ExtraBold_Italic,
        NunitoSans_900Black: NUNITOSANS.NunitoSans_900Black,
        NunitoSans_900Black_Italic: NUNITOSANS.NunitoSans_900Black_Italic,
    });
    let [loadedNotoSans, errorNotoSans] = NOTOSANS.useFonts({
        NotoSans_400Regular: NOTOSANS.NotoSans_400Regular,
        NotoSans_400Regular_Italic: NOTOSANS.NotoSans_400Regular_Italic,
        NotoSans_700Bold: NOTOSANS.NotoSans_700Bold,
        NotoSans_700Bold_Italic: NOTOSANS.NotoSans_700Bold_Italic,
    });
    let [loadedLora, errorLora] = LORA.useFonts({
        Lora_400Regular: LORA.Lora_400Regular,
        Lora_500Medium: LORA.Lora_500Medium,
        Lora_600SemiBold: LORA.Lora_600SemiBold,
        Lora_700Bold: LORA.Lora_700Bold,
        Lora_400Regular_Italic: LORA.Lora_400Regular_Italic,
        Lora_500Medium_Italic: LORA.Lora_500Medium_Italic,
        Lora_600SemiBold_Italic: LORA.Lora_600SemiBold_Italic,
        Lora_700Bold_Italic: LORA.Lora_700Bold_Italic,
    });
    let [loadedOpenSans, errorOpenSans] = OPENSANS.useFonts({
        OpenSans_300Light: OPENSANS.OpenSans_300Light,
        OpenSans_300Light_Italic: OPENSANS.OpenSans_300Light_Italic,
        OpenSans_400Regular: OPENSANS.OpenSans_400Regular,
        OpenSans_400Regular_Italic: OPENSANS.OpenSans_400Regular_Italic,
        OpenSans_600SemiBold: OPENSANS.OpenSans_600SemiBold,
        OpenSans_600SemiBold_Italic: OPENSANS.OpenSans_600SemiBold_Italic,
        OpenSans_700Bold: OPENSANS.OpenSans_700Bold,
        OpenSans_700Bold_Italic: OPENSANS.OpenSans_700Bold_Italic,
        OpenSans_800ExtraBold: OPENSANS.OpenSans_800ExtraBold,
        OpenSans_800ExtraBold_Italic: OPENSANS.OpenSans_800ExtraBold_Italic,
    });
    let [loadedLato, errorLato] = LATO.useFonts({
        Lato_100Thin: LATO.Lato_100Thin,
        Lato_100Thin_Italic: LATO.Lato_100Thin_Italic,
        Lato_300Light: LATO.Lato_300Light,
        Lato_300Light_Italic: LATO.Lato_300Light_Italic,
        Lato_400Regular: LATO.Lato_400Regular,
        Lato_400Regular_Italic: LATO.Lato_400Regular_Italic,
        Lato_700Bold: LATO.Lato_700Bold,
        Lato_700Bold_Italic: LATO.Lato_700Bold_Italic,
        Lato_900Black: LATO.Lato_900Black,
        Lato_900Black_Italic: LATO.Lato_900Black_Italic,
    });
    let [loadedSlabo27px, errorSlabo27px] = SLABO27PX.useFonts({
        Slabo27px_400Regular: SLABO27PX.Slabo27px_400Regular,
    });
    let [loadedOswald, errorOswald] = OSWALD.useFonts({
        Oswald_200ExtraLight: OSWALD.Oswald_200ExtraLight,
        Oswald_300Light: OSWALD.Oswald_300Light,
        Oswald_400Regular: OSWALD.Oswald_400Regular,
        Oswald_500Medium: OSWALD.Oswald_500Medium,
        Oswald_600SemiBold: OSWALD.Oswald_600SemiBold,
        Oswald_700Bold: OSWALD.Oswald_700Bold,
    });
    let [loadedSourceSansPro, errorSourceSansPro] = SOURCESANSPRO.useFonts({
        SourceSansPro_200ExtraLight: SOURCESANSPRO.SourceSansPro_200ExtraLight,
        SourceSansPro_200ExtraLight_Italic:
            SOURCESANSPRO.SourceSansPro_200ExtraLight_Italic,
        SourceSansPro_300Light: SOURCESANSPRO.SourceSansPro_300Light,
        SourceSansPro_300Light_Italic:
            SOURCESANSPRO.SourceSansPro_300Light_Italic,
        SourceSansPro_400Regular: SOURCESANSPRO.SourceSansPro_400Regular,
        SourceSansPro_400Regular_Italic:
            SOURCESANSPRO.SourceSansPro_400Regular_Italic,
        SourceSansPro_600SemiBold: SOURCESANSPRO.SourceSansPro_600SemiBold,
        SourceSansPro_600SemiBold_Italic:
            SOURCESANSPRO.SourceSansPro_600SemiBold_Italic,
        SourceSansPro_700Bold: SOURCESANSPRO.SourceSansPro_700Bold,
        SourceSansPro_700Bold_Italic:
            SOURCESANSPRO.SourceSansPro_700Bold_Italic,
        SourceSansPro_900Black: SOURCESANSPRO.SourceSansPro_900Black,
        SourceSansPro_900Black_Italic:
            SOURCESANSPRO.SourceSansPro_900Black_Italic,
    });
    let [loadedMontserrat, errorMontserrat] = MONTSERRAT.useFonts({
        Montserrat_100Thin: MONTSERRAT.Montserrat_100Thin,
        Montserrat_100Thin_Italic: MONTSERRAT.Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight: MONTSERRAT.Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic:
            MONTSERRAT.Montserrat_200ExtraLight_Italic,
        Montserrat_300Light: MONTSERRAT.Montserrat_300Light,
        Montserrat_300Light_Italic: MONTSERRAT.Montserrat_300Light_Italic,
        Montserrat_400Regular: MONTSERRAT.Montserrat_400Regular,
        Montserrat_400Regular_Italic: MONTSERRAT.Montserrat_400Regular_Italic,
        Montserrat_500Medium: MONTSERRAT.Montserrat_500Medium,
        Montserrat_500Medium_Italic: MONTSERRAT.Montserrat_500Medium_Italic,
        Montserrat_600SemiBold: MONTSERRAT.Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic: MONTSERRAT.Montserrat_600SemiBold_Italic,
        Montserrat_700Bold: MONTSERRAT.Montserrat_700Bold,
        Montserrat_700Bold_Italic: MONTSERRAT.Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold: MONTSERRAT.Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic:
            MONTSERRAT.Montserrat_800ExtraBold_Italic,
        Montserrat_900Black: MONTSERRAT.Montserrat_900Black,
        Montserrat_900Black_Italic: MONTSERRAT.Montserrat_900Black_Italic,
    });
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

        let ff = fonts.filter((f) => !usedFonts.current.includes(f[0]));
        if (ff.length === 0) {
            usedFonts.current = [];
            ff = _.cloneDeep(fonts);
        }

        const idx = Math.floor(Math.random() * ff.length);
        const _font = ff[idx];

        const fontCount = _font.length;
        const quoteCount = quote.length;
        let count = 0;
        let fonti = 0;
        let quotei = 0;
        while (count < 50) {
            if (fonti === fontCount) fonti = 0;
            if (quotei === quoteCount) quotei = 0;
            _text.push({
                text: quote[quotei],
                font: _font[fonti],
                timeout: 100 * count,
            });
            count++;
            fonti++;
            quotei++;
        }

        setText(_.shuffle(_text));
        setFont(_font[0]);
        usedFonts.current.push(_font[0]);
    };

    let start = 0;
    useEffect(() => {
        start = new Date().valueOf();
        SplashScreen.preventAutoHideAsync();
        resetList();
    }, []);

    const cardFlip = () => {
        if (flipValue.current >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10,
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10,
            }).start();
        }
    };
    const handleShowFont = () => {
        alert('hello');
        cardFlip();
        setTimeout(() => {
            setShow(false);
            animateNative(opacity, 300, 1);
        }, 300);
    };
    const handleShowList = () => {
        animateNative(opacity, 200, 0);
        setTimeout(() => resetList(), 200);
        setTimeout(() => setShow(true), 300);
        cardFlip();
    };
    useEffect(() => {
        if (
            loadedNunitoSans &&
            loadedNotoSans &&
            loadedLora &&
            loadedOpenSans &&
            loadedLato &&
            loadedSlabo27px &&
            loadedOswald &&
            loadedSourceSansPro &&
            loadedMontserrat &&
            loadedRaleway &&
            loadedPtsans &&
            loadedInter &&
            loadedRoboto
        ) {
            const now = new Date().valueOf();
            let diff = now - start;
            diff = diff > 1000 ? 0 : Math.max(diff, start + 1000 - now);
            setTimeout(() => {
                SplashScreen.hideAsync();
                setTimeout(() => setShow(true), 150);
            }, diff);
        }
    }, [
        loadedNunitoSans,
        loadedNotoSans,
        loadedLora,
        loadedOpenSans,
        loadedLato,
        loadedSlabo27px,
        loadedOswald,
        loadedSourceSansPro,
        loadedMontserrat,
        loadedRaleway,
        loadedPtsans,
        loadedInter,
        loadedRoboto,
    ]);
    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={handleShowFont}>
                <Animated.View style={[frontAnimatedStyle, styles.flipCard]}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainer}>
                        {show &&
                            text.map((t, i) => (
                                <FontText
                                    key={`external-text-${i}`}
                                    t={t}
                                    i={i}
                                />
                            ))}
                    </ScrollView>
                </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
                style={[
                    backAnimatedStyle,
                    styles.flipCard,
                    styles.flipCardBack,
                ]}>
                <TouchableWithoutFeedback onPress={handleShowList}>
                    <View
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: font,
                        }}>
                        <Text style={{ fontSize: 32 }}>
                            {font.split('_')[0]}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
            <StatusBar style='auto' />
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
    flipCard: {
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
    },
    contentContainer: { paddingHorizontal: 32 },
});
