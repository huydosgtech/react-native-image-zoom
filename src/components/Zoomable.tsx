import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useZoomable } from '../hooks/useZoomable';
import type { ImageZoomProps, ImageZoomRef } from '../types';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
const Zoomable: ForwardRefRenderFunction<ImageZoomRef, ImageZoomProps> = (
  {
    uri = '',
    minScale,
    maxScale,
    scale,
    doubleTapScale,
    maxPanPointers,
    isPanEnabled,
    isPinchEnabled,
    isSingleTapEnabled,
    isDoubleTapEnabled,
    onInteractionStart,
    onInteractionEnd,
    onPinchStart,
    onPinchEnd,
    onPanStart,
    onPanEnd,
    onSingleTap,
    onDoubleTap,
    onProgrammaticZoom,
    onResetAnimationEnd,
    onLayout,
    style = {},
    children,
    ...props
  },
  ref
) => {
  const { animatedStyle, gestures, onZoomableLayout } = useZoomable({
    children,
    minScale,
    maxScale,
    scale,
    doubleTapScale,
    maxPanPointers,
    isPanEnabled,
    isPinchEnabled,
    isSingleTapEnabled,
    isDoubleTapEnabled,
    onInteractionStart,
    onInteractionEnd,
    onPinchStart,
    onPinchEnd,
    onPanStart,
    onPanEnd,
    onSingleTap,
    onDoubleTap,
    onProgrammaticZoom,
    onResetAnimationEnd,
    onLayout,
    ref,
  });

  return (
    <GestureDetector gesture={gestures}>
      <Animated.View
        style={[styles.image, style, animatedStyle]}
        onLayout={onZoomableLayout} 
      >
        {children ? (
          children
        ) : (
          <Animated.Image
            source={{ uri }}
            resizeMode="contain"
            {...props}
          />
        )}
      </Animated.View>
    </GestureDetector>
  );
};

export default forwardRef(Zoomable);
