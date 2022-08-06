import { useRef, MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { Box, BoxProps, Icon, Button, Flex } from '@zoralabs/zord'
import { PlayPause } from './PlayerUi'
import { useMediaPlayer } from '../useMediaPlayer'

export interface AudioPlayerProps extends BoxProps {
  src?: string
  autoplay?: boolean
}

export function AudioPlayer({ src, autoplay = false, ...props }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    mediaPlaying,
    // isLoaded,
    duration,
    isMuted,
    progress,
    pausePlayHandler,
    playHandler,
    pauseHandler,
    timeUpdateHandler,
    loadedHandler,
  } = useMediaPlayer(audioRef)

  useEffect(() => {
    console.log(progress, duration)
  }, [duration, progress])

  return (
    <Box {...props}>
      <PlayPause
        fn={pausePlayHandler}
        isPlaying={mediaPlaying}
        w="x12"
        h="x12"
        borderRadius="round"
        backgroundColor="primary"
        style={{ filter: 'var(--shadow-light' }}
      />
      <Box
        as="audio"
        w="100%"
        src={src}
        ref={audioRef}
        loop={true}
        preload="auto"
        autoPlay={autoplay}
        muted={isMuted}
        playsInline
        onPlay={playHandler}
        onPause={pauseHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedData={loadedHandler}
      />
    </Box>
  )
}
