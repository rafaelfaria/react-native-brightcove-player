import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import {
    View,
    Platform,
    StyleSheet,
    Slider as RNSlider
} from 'react-native'
import Slider from '@react-native-community/slider'
const ThumbTracker = require('../Resources/controller.png')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    slider: {
        marginHorizontal: -15,
    },
    trackStyle: {
        borderRadius: 1
    },
    sliderFullScreen: {
        marginHorizontal: -15,
        marginBottom:0
    }
})

const Scrubber = (props) => {
    const trackColor = 'rgba(255,255,255,0.5)'
    const { progress, theme, onSeek, onSeekRelease } = props
    return (
        <View style={styles.container}>
            { Platform.OS === 'ios' ?
                <Slider
                    onValueChange={val => onSeek(val)}
                    onSlidingComplete={val => onSeekRelease(val)}
                    value={progress === Number.POSITIVE_INFINITY ? 0 : progress}
                    trackStyle={styles.trackStyle}
                    minimumTrackTintColor={theme.scrubberBar}
                    maximumTrackTintColor={trackColor}
                    trackClickable
                    thumbImage={ThumbTracker}
                />
                :
                <RNSlider
                    style={props.fullScreen ? styles.sliderFullScreen : styles.slider}
                    onValueChange={val => onSeek(val)}
                    onSlidingComplete={val => onSeekRelease(val)}
                    value={progress}
                    thumbTintColor={"#e8e8e8"}
                    minimumTrackTintColor={theme.scrubberBar}
                    maximumTrackTintColor={trackColor}
                />
            }
        </View>
    )
}

Scrubber.propTypes = {
    onSeek: PropTypes.func.isRequired,
    onSeekRelease: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
}

export { Scrubber }
