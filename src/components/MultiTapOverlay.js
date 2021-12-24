import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default function MultiTapOverlay ({
  onLongPress,
  onMultiTaps,
  multiTapCount = 4,
  multiTapDelay = 300,
  children,
}) {
  const [lastPress, setLastPress] = useState(null)
  const [tapCount, setTapCount] = useState(0)

  const handlePress = () => {
    const now = Date.now()

    setLastPress(now)
    if (now - lastPress <= multiTapDelay) {
      if (tapCount < multiTapCount - 1) {
        setTapCount(tapCount + 1)
      } else {
        setTapCount(0)

        onMultiTaps && onMultiTaps()
      }
    } else {
      setTapCount(1)
    }
  }
  const handleLongPress = () => onLongPress && onLongPress()

  return (
    <TouchableOpacity
      delayLongPress={1000}
      activeOpacity={0.8}
      onLongPress={handleLongPress}
      onPress={handlePress}>
      {children}
    </TouchableOpacity>
  )
}
