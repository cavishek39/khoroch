import {PropsWithChildren, useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View, findNodeHandle} from 'react-native';
import {FONT_SCALE, SCREEN_WIDTH} from '../../constants/dimensions';
import React from 'react';

export default function Tabs({
  data,
}: PropsWithChildren<{data: any[]; scrollx: number}>) {
  const [measures, setMeasures] = useState([]);
  const containerRef = React.createRef();
  const scrollx = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const measurements = [];
    data.forEach((item, index) => {
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          measurements.push({
            x,
            y,
            width,
            height,
          });

          if (measurements.length === data.length) {
            setMeasures(measurements);
          }
        },
      );
    });
  }, []);

  console.log(measures);

  return (
    <View style={{width: SCREEN_WIDTH}}>
      <View
        ref={containerRef}
        style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {data.map(item => {
          return (
            <Tab
              key={item.id}
              item={item}
              length={data?.length}
              ref={item?.ref}
            />
          );
        })}
      </View>
      {measures?.length > 0 && (
        <Indicator measures={measures} scrollx={scrollx} />
      )}
    </View>
  );
}
const Tab = React.forwardRef(({item, length}, ref) => {
  return (
    <View ref={ref}>
      <Text style={{fontSize: 56 / length, fontWeight: '500'}}>
        {item?.title}
      </Text>
    </View>
  );
});

function Indicator({measures, scrollx}) {
  const inputRange = measures?.map((_, i) => i * SCREEN_WIDTH);

  const indicatorWidth = scrollx?.interpolate({
    inputRange,
    outputRange: measures?.map(measure => measure?.width),
  });

  const translateX = scrollx?.interpolate({
    inputRange,
    outputRange: measures?.map(measure => measure?.x),
  });

  return (
    <Animated.View
      style={{
        height: 4,
        backgroundColor: 'black',
        width: indicatorWidth,
        left: 0,
        position: 'absolute',
        bottom: -10,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
