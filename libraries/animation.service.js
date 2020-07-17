import { Animated } from 'react-native';

const _anim = (duration, toValue) => ({
    duration,
    toValue,
    useNativeDriver: false,
});

/* 
according to then react massive documentation only transform and opacity changes are supported by the native driver at the moment
 */
const _animNative = (duration, toValue) => ({
    duration,
    toValue,
    useNativeDriver: true,
});
exports.anim = _anim;

/* 
this is to be used when i want to batch animations together using Animated.parallel
 */
exports.animatedTiming = (target, duration, toValue) =>
    Animated.timing(target, _anim(duration, toValue)).start();
exports.animate = (target, duration, toValue) =>
    Animated.timing(target, _anim(duration, toValue)).start();
exports.animateNative = (target, duration, toValue) =>
    Animated.timing(target, _animNative(duration, toValue)).start();
exports.animatedTimerNative = (target, duration, toValue) =>
    Animated.timing(target, _animNative(duration, toValue));
