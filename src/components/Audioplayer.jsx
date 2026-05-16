import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Music2,
    Minimize2,
    ListMusic,
    SkipBack,
    SkipForward,
    ChevronDown,
} from 'lucide-react'

const tracks = [
    {
        id: 1,
        title: 'Illusion Theme',
        artist: 'Illusion1',
        src: `${import.meta.env.BASE_URL}audio/Illusion_theme.mp3`,
        cover: `${import.meta.env.BASE_URL}image/snowfall.jpg`,
    },
    {
        id: 2,
        title: 'Rain on my window',
        artist: 'UnderCurrent',
        src: `${import.meta.env.BASE_URL}audio/rainonmywindow.mp3`,
        cover: `${import.meta.env.BASE_URL}image/rainwindow.jpg`,
    },
    {
        id: 3,
        title: 'School rooftop',
        artist: 'Hisohkah',
        src: `${import.meta.env.BASE_URL}audio/schoolrooftop.mp3`,
        cover: `${import.meta.env.BASE_URL}image/shinji.jpg`,
    },
    {
        id: 4,
        title: 'Tek it',
        artist: 'Cafuné',
        src: `${import.meta.env.BASE_URL}audio/tekit-cafune.mp3`,
        cover: `${import.meta.env.BASE_URL}image/tekit.jpg`,
    },
]

export default function Audioplayer() {
    const audioRef = useRef(null)

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(0.65)
    const [isMuted, setIsMuted] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)

    const currentTrack = useMemo(() => {
        return tracks[currentTrackIndex]
    }, [currentTrackIndex])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const handleLoadedMetadata = () => {
            setDuration(audio.duration || 0)
        }

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime || 0)
        }

        const handleEnded = () => {
            handleNextTrack(true)
        }

        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [currentTrackIndex])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.volume = isMuted ? 0 : volume
    }, [volume, isMuted])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        setCurrentTime(0)
        setDuration(0)

        audio.load()

        if (isPlaying) {
            audio.play().catch((error) => {
                console.error('Không thể tự phát bài mới:', error)
                setIsPlaying(false)
            })
        }
    }, [currentTrackIndex])

    const togglePlay = async () => {
        const audio = audioRef.current
        if (!audio) return

        try {
            if (isPlaying) {
                audio.pause()
                setIsPlaying(false)
            } else {
                await audio.play()
                setIsPlaying(true)
            }
        } catch (error) {
            console.error('Không thể phát nhạc:', error)
        }
    }

    const handleSeek = (e) => {
        const audio = audioRef.current
        if (!audio || !duration) return

        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const percent = Math.min(Math.max(clickX / rect.width, 0), 1)

        audio.currentTime = percent * duration
        setCurrentTime(audio.currentTime)
    }

    const toggleMute = () => {
        setIsMuted(prev => !prev)
    }

    const handlePreviousTrack = () => {
        setCurrentTrackIndex(prev => {
            if (prev === 0) return tracks.length - 1
            return prev - 1
        })
    }

    const handleNextTrack = () => {
        setCurrentTrackIndex(prev => {
            if (prev === tracks.length - 1) return 0
            return prev + 1
        })
    }

    const handleSelectTrack = (index) => {
        setCurrentTrackIndex(index)
        setIsPlaylistOpen(false)
    }

    const formatTime = (time) => {
        if (!time || Number.isNaN(time)) return '0:00'

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const progress = duration ? (currentTime / duration) * 100 : 0

    return (
        <>
            <audio ref={audioRef} src={currentTrack.src} preload="metadata" />

            <AnimatePresence mode="wait">
                {isMinimized ? (
                    <motion.button
                        key="mini-player-dot"
                        type="button"
                        initial={{ opacity: 0, scale: 0.7, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setIsMinimized(false)}
                        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full border border-primary/30 bg-dark-800/85 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.22)] flex items-center justify-center group"
                        aria-label="Mở trình phát nhạc"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />

                        <Music2
                            size={22}
                            className="relative z-10 text-white/90 group-hover:text-primary transition-colors"
                        />

                        {isPlaying && (
                            <>
                                <span className="absolute inset-0 rounded-full border border-primary/40 animate-ping" />
                                <span className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                            </>
                        )}
                    </motion.button>
                ) : (
                    <motion.div
                        key="full-player"
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[calc(100vw-32px)] glass-card rounded-2xl p-4 border border-primary/20 bg-dark-800/80 backdrop-blur-xl shadow-[0_0_35px_rgba(6,182,212,0.18)]"
                    >
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                                    Portfolio Music
                                </span>

                                {isPlaying && (
                                    <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-400/20 font-mono">
                                        Playing
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    onClick={() => setIsPlaylistOpen(prev => !prev)}
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:bg-white/5 transition-all"
                                    aria-label="Mở playlist"
                                >
                                    <ListMusic size={16} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setIsMinimized(true)}
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:bg-white/5 transition-all"
                                    aria-label="Thu gọn trình phát nhạc"
                                >
                                    <Minimize2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/20 flex items-center justify-center shrink-0">
                                <img
                                    src={currentTrack.cover}
                                    alt={currentTrack.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                                <Music2 size={22} className="absolute text-white/80" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <button
                                    type="button"
                                    onClick={() => setIsPlaylistOpen(prev => !prev)}
                                    className="w-full flex items-start justify-between gap-3 text-left"
                                >
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-text-primary truncate">
                                            {currentTrack.title}
                                        </p>
                                        <p className="text-xs text-text-muted truncate">
                                            {currentTrack.artist}
                                        </p>
                                    </div>

                                    <ChevronDown
                                        size={16}
                                        className={`mt-1 text-text-muted transition-transform ${isPlaylistOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSeek}
                                    className="group mt-3 w-full h-2 rounded-full bg-dark-600/80 overflow-hidden block"
                                    aria-label="Seek music"
                                >
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                                        style={{ width: `${progress}%` }}
                                    />
                                </button>

                                <div className="mt-1 flex justify-between text-[11px] text-text-muted font-mono">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isPlaylistOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, y: -6 }}
                                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                                    exit={{ opacity: 0, height: 0, y: -6 }}
                                    transition={{ duration: 0.22 }}
                                    className="mt-4 overflow-hidden"
                                >
                                    <div className="max-h-48 overflow-y-auto rounded-xl border border-primary/10 bg-dark-900/50 p-2 space-y-1">
                                        {tracks.map((track, index) => {
                                            const active = index === currentTrackIndex

                                            return (
                                                <button
                                                    key={track.id}
                                                    type="button"
                                                    onClick={() => handleSelectTrack(index)}
                                                    className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-all ${active
                                                        ? 'bg-primary/15 border border-primary/25'
                                                        : 'hover:bg-white/5 border border-transparent'
                                                        }`}
                                                >
                                                    <div className="w-9 h-9 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                                                        <img
                                                            src={track.cover}
                                                            alt={track.title}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none'
                                                            }}
                                                        />
                                                        <Music2 size={16} className="absolute text-white/70" />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <p className={`text-xs font-medium truncate ${active ? 'text-primary' : 'text-text-primary'}`}>
                                                            {track.title}
                                                        </p>
                                                        <p className="text-[11px] text-text-muted truncate">
                                                            {track.artist}
                                                        </p>
                                                    </div>

                                                    {active && (
                                                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
                                                    )}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handlePreviousTrack}
                                    className="w-9 h-9 rounded-full text-text-muted hover:text-primary hover:bg-white/5 flex items-center justify-center transition-all"
                                    aria-label="Bài trước"
                                >
                                    <SkipBack size={18} fill="currentColor" />
                                </button>

                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    className="w-11 h-11 rounded-full bg-gradient-to-r from-primary to-cyan-400 text-white flex items-center justify-center hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                                >
                                    {isPlaying ? (
                                        <Pause size={20} fill="currentColor" />
                                    ) : (
                                        <Play size={20} fill="currentColor" className="ml-0.5" />
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleNextTrack}
                                    className="w-9 h-9 rounded-full text-text-muted hover:text-primary hover:bg-white/5 flex items-center justify-center transition-all"
                                    aria-label="Bài tiếp theo"
                                >
                                    <SkipForward size={18} fill="currentColor" />
                                </button>
                            </div>

                            <div className="flex items-center gap-3 flex-1">
                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    className="text-text-muted hover:text-primary transition-colors"
                                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                </button>

                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={isMuted ? 0 : volume}
                                    onChange={(e) => {
                                        setIsMuted(false)
                                        setVolume(Number(e.target.value))
                                    }}
                                    className="w-full accent-cyan-400 cursor-pointer"
                                    aria-label="Volume"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}