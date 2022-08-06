import { useCallback, useEffect, useState } from 'react'

export function useMediaPlayer(mediaRef: any) {
  const [mediaPlaying, setMediaPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!mediaRef.current) {
      return
    }
    if (mediaPlaying) {
      mediaRef.current.play()
    } else {
      mediaRef.current.pause()
    }
  }, [mediaPlaying])

  const pausePlayHandler = useCallback(() => {
    setMediaPlaying(!mediaPlaying)
  }, [mediaPlaying, setMediaPlaying])

  const playHandler = useCallback(() => {
    setMediaPlaying(true)
  }, [mediaPlaying, setMediaPlaying])

  const pauseHandler = useCallback(() => {
    setMediaPlaying(false)
  }, [mediaPlaying, setMediaPlaying])

  const loadedHandler = useCallback(() => {
    if (!mediaRef.current) {
      return
    }
    setDuration(mediaRef.current.duration)
    setProgress(mediaRef.current.currentTime)
    setIsLoaded(true)
  }, [])

  const timeUpdateHandler = useCallback(() => {
    if (!mediaRef.current) {
      return
    }
    setProgress(mediaRef.current.currentTime)
  }, [mediaRef.current])

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted)
  }, [isMuted, setIsMuted])

  useEffect(() => {
    isMuted ? (mediaRef.current.muted = true) : (mediaRef.current.muted = false)
  }, [isMuted, mediaRef])

  return {
    pausePlayHandler,
    playHandler,
    pauseHandler,
    loadedHandler,
    timeUpdateHandler,
    toggleMute,
    isMuted,
    mediaPlaying,
    isLoaded,
    duration,
    progress,
  }
}
