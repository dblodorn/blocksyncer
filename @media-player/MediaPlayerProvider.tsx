import { createContext, useContext, ReactNode } from 'react'
import { useMediaPlayer } from './useMediaPlayer'

export type MediaPlayerProps = {
  mediaRef: any
  children: ReactNode
}

const MediaPlayerContext = createContext<{
  mediaPlaying?: boolean
  isLoaded?: boolean
  duration?: number
  isMuted?: boolean
  progress?: number
  pausePlayHandler?: () => void
  playHandler?: () => void
  pauseHandler?: () => void
  timeUpdateHandler?: () => void
  loadedHandler?: () => void
}>({})

export function useMediaPlayerProvider() {
  return useContext(MediaPlayerContext)
}

export function MediaPlayerProvider({ mediaRef, children }: MediaPlayerProps) {
  const {
    mediaPlaying,
    isLoaded,
    duration,
    isMuted,
    progress,
    pausePlayHandler,
    playHandler,
    pauseHandler,
    timeUpdateHandler,
    loadedHandler,
  } = useMediaPlayer(mediaRef)

  return (
    <MediaPlayerContext.Provider
      value={{
        mediaPlaying,
        isLoaded,
        duration,
        isMuted,
        progress,
        pausePlayHandler,
        playHandler,
        pauseHandler,
        timeUpdateHandler,
        loadedHandler,
      }}
    >
      {children}
    </MediaPlayerContext.Provider>
  )
}
