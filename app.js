/* ══════════════════════════════════════════════════════════
   Sugam v2 — JioSaavn API + YouTube Dual Player
   ══════════════════════════════════════════════════════════ */

// ── SAAVN API ──
const SAAVN_API = 'https://saavn.sumit.co/api';

const DEFAULT_TRACKS = [
    // ── Hindi ──
    { id: 'e-ORhEE9VVg', title: 'Tum Hi Ho', artist: 'Arijit Singh', source: 'youtube', duration: '4:22', thumb: 'https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg', genre: 'hindi' },
    { id: 'hoNb6fQ3hO0', title: 'Channa Mereya', artist: 'Arijit Singh', source: 'youtube', duration: '4:49', thumb: 'https://i.ytimg.com/vi/hoNb6fQ3hO0/hqdefault.jpg', genre: 'hindi' },
    { id: 'U0yg3JFtwcM', title: 'Kesariya', artist: 'Arijit Singh', source: 'youtube', duration: '4:28', thumb: 'https://i.ytimg.com/vi/U0yg3JFtwcM/hqdefault.jpg', genre: 'hindi' },
    { id: 'BddP6PYo2gs', title: 'Tujhe Kitna Chahne Lage', artist: 'Arijit Singh', source: 'youtube', duration: '4:45', thumb: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg', genre: 'hindi' },
    { id: 'xVOBjrkfBMU', title: 'Hawayein', artist: 'Arijit Singh', source: 'youtube', duration: '4:48', thumb: 'https://i.ytimg.com/vi/xVOBjrkfBMU/hqdefault.jpg', genre: 'hindi' },
    { id: 'IcW0Ysk8TZk', title: 'Apna Bana Le', artist: 'Arijit Singh', source: 'youtube', duration: '4:10', thumb: 'https://i.ytimg.com/vi/IcW0Ysk8TZk/hqdefault.jpg', genre: 'hindi' },
    { id: 'ElFRl2nWQy4', title: 'Tera Ban Jaunga', artist: 'Tulsi Kumar & Akhil Sachdeva', source: 'youtube', duration: '3:56', thumb: 'https://i.ytimg.com/vi/ElFRl2nWQy4/hqdefault.jpg', genre: 'hindi' },
    { id: 'qIvMeRsilrA', title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal & Asees Kaur', source: 'youtube', duration: '3:50', thumb: 'https://i.ytimg.com/vi/qIvMeRsilrA/hqdefault.jpg', genre: 'hindi' },
    { id: 'pXRviuL6vMY', title: 'Kal Ho Naa Ho', artist: 'Sonu Nigam', source: 'youtube', duration: '5:24', thumb: 'https://i.ytimg.com/vi/pXRviuL6vMY/hqdefault.jpg', genre: 'hindi' },
    { id: 'cYOB941gyXI', title: 'Tere Bina', artist: 'A.R. Rahman', source: 'youtube', duration: '5:27', thumb: 'https://i.ytimg.com/vi/cYOB941gyXI/hqdefault.jpg', genre: 'hindi' },
    // ── Punjabi ──
    { id: 'DG-kYsfRLog', title: 'Excuses', artist: 'AP Dhillon & Gurinder Gill', source: 'youtube', duration: '3:32', thumb: 'https://i.ytimg.com/vi/DG-kYsfRLog/hqdefault.jpg', genre: 'punjabi' },
    { id: 'GCF8MfKbHHs', title: 'Brown Munde', artist: 'AP Dhillon', source: 'youtube', duration: '3:14', thumb: 'https://i.ytimg.com/vi/GCF8MfKbHHs/hqdefault.jpg', genre: 'punjabi' },
    { id: 'V1Pl8CzNFCw', title: 'Lover', artist: 'Diljit Dosanjh', source: 'youtube', duration: '3:06', thumb: 'https://i.ytimg.com/vi/V1Pl8CzNFCw/hqdefault.jpg', genre: 'punjabi' },
    { id: 'LjBQ84TgSM8', title: 'Kya Baat Ay', artist: 'Harrdy Sandhu', source: 'youtube', duration: '3:24', thumb: 'https://i.ytimg.com/vi/LjBQ84TgSM8/hqdefault.jpg', genre: 'punjabi' },
    { id: '8mUFCPXrDEs', title: 'Lahore', artist: 'Guru Randhawa', source: 'youtube', duration: '3:10', thumb: 'https://i.ytimg.com/vi/8mUFCPXrDEs/hqdefault.jpg', genre: 'punjabi' },
    { id: 'vTIIMJ9tUc8', title: 'High Rated Gabru', artist: 'Guru Randhawa', source: 'youtube', duration: '3:22', thumb: 'https://i.ytimg.com/vi/vTIIMJ9tUc8/hqdefault.jpg', genre: 'punjabi' },
    { id: 'ByH_2qJmqMM', title: 'Waalian', artist: 'Harnoor', source: 'youtube', duration: '3:35', thumb: 'https://i.ytimg.com/vi/ByH_2qJmqMM/hqdefault.jpg', genre: 'punjabi' },
    // ── Pop ──
    { id: 'lp-EO5I60KA', title: 'Blinding Lights', artist: 'The Weeknd', source: 'youtube', duration: '3:20', thumb: 'https://i.ytimg.com/vi/lp-EO5I60KA/hqdefault.jpg', genre: 'pop' },
    { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran', source: 'youtube', duration: '3:53', thumb: 'https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg', genre: 'pop' },
    { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', source: 'youtube', duration: '4:41', thumb: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg', genre: 'pop' },
    { id: '2Vv-BfVoq4g', title: 'Perfect', artist: 'Ed Sheeran', source: 'youtube', duration: '4:23', thumb: 'https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg', genre: 'pop' },
    { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', source: 'youtube', duration: '4:30', thumb: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg', genre: 'pop' },
    // ── EDM ──
    { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker', source: 'youtube', duration: '3:32', thumb: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg', genre: 'edm' },
    { id: 'IcrbM1l_BoI', title: 'Closer', artist: 'The Chainsmokers ft. Halsey', source: 'youtube', duration: '4:04', thumb: 'https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg', genre: 'edm' },
    // ── Rock ──
    { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen', source: 'youtube', duration: '5:55', thumb: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg', genre: 'rock' },
    { id: 'hT_nvWreIhg', title: 'Counting Stars', artist: 'OneRepublic', source: 'youtube', duration: '4:17', thumb: 'https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg', genre: 'pop' },
];

// ── MOOD PLAYLISTS ──
const MOOD_TRACKS = {
    chill: [
        { id: 'e-ORhEE9VVg', title: 'Tum Hi Ho', artist: 'Arijit Singh' },
        { id: 'hoNb6fQ3hO0', title: 'Channa Mereya', artist: 'Arijit Singh' },
        { id: 'BddP6PYo2gs', title: 'Tujhe Kitna Chahne Lage', artist: 'Arijit Singh' },
        { id: 'xVOBjrkfBMU', title: 'Hawayein', artist: 'Arijit Singh' },
        { id: 'pXRviuL6vMY', title: 'Kal Ho Naa Ho', artist: 'Sonu Nigam' },
        { id: '2Vv-BfVoq4g', title: 'Perfect', artist: 'Ed Sheeran' },
        { id: 'ElFRl2nWQy4', title: 'Tera Ban Jaunga', artist: 'Tulsi Kumar' },
        { id: 'IcW0Ysk8TZk', title: 'Apna Bana Le', artist: 'Arijit Singh' },
        { id: 'cYOB941gyXI', title: 'Tere Bina', artist: 'A.R. Rahman' },
        { id: 'qIvMeRsilrA', title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal' },
        { id: 'ByH_2qJmqMM', title: 'Waalian', artist: 'Harnoor' },
        { id: 'U0yg3JFtwcM', title: 'Kesariya', artist: 'Arijit Singh' },
        { id: 'e5bS-qB0040', title: 'Kinni Kinni', artist: 'Diljit Dosanjh' },
        { id: 'A8_SgXWnK-4', title: 'Baarishein', artist: 'Anuv Jain' },
        { id: 'fhyfUf4qO2w', title: 'Co2', artist: 'Anuv Jain' },
        { id: 'a7f-Hap_oV8', title: 'Alag Aasman', artist: 'Anuv Jain' },
        { id: 'f5t-fK54G4U', title: 'Iktara', artist: 'Kavita Seth' },
        { id: 'jH1i-WId8g0', title: 'Kabira', artist: 'Tochi Raina' },
        { id: 'lEe4yRk8Xoo', title: 'Zaalima', artist: 'Arijit Singh' },
        { id: 'SAcpESN_Fk4', title: 'Dil Diyan Gallan', artist: 'Atif Aslam' }
    ],
    energy: [
        { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Bruno Mars' },
        { id: 'DG-kYsfRLog', title: 'Excuses', artist: 'AP Dhillon' },
        { id: 'GCF8MfKbHHs', title: 'Brown Munde', artist: 'AP Dhillon' },
        { id: '8mUFCPXrDEs', title: 'Lahore', artist: 'Guru Randhawa' },
        { id: 'vTIIMJ9tUc8', title: 'High Rated Gabru', artist: 'Guru Randhawa' },
        { id: 'LjBQ84TgSM8', title: 'Kya Baat Ay', artist: 'Harrdy Sandhu' },
        { id: 'lp-EO5I60KA', title: 'Blinding Lights', artist: 'The Weeknd' },
        { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi' },
        { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran' },
        { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker' },
        { id: 'IcrbM1l_BoI', title: 'Closer', artist: 'The Chainsmokers' },
        { id: '7wtfhZwyrcc', title: 'Believer', artist: 'Imagine Dragons' },
        { id: 'wnJ6LuUFpMo', title: 'Mi Gente', artist: 'J Balvin' },
        { id: '34Na4j8AVgA', title: 'Starboy', artist: 'The Weeknd' },
        { id: '3gN9vR9m9wY', title: 'Elevate', artist: 'Karan Aujla' },
        { id: 'cAM0Aa70RYU', title: 'Softly', artist: 'Karan Aujla' },
        { id: 'eW55kexCkW0', title: 'One Love', artist: 'Shubh' },
        { id: '4ND9g4S_5hE', title: 'Cheques', artist: 'Shubh' },
        { id: 'P_K-M7yU5m0', title: 'We Rollin', artist: 'Shubh' },
        { id: '8Qs2dO9G93U', title: 'Naah', artist: 'Harrdy Sandhu' }
    ],
    focus: [
        { id: 'cYOB941gyXI', title: 'Tere Bina', artist: 'A.R. Rahman' },
        { id: 'e-ORhEE9VVg', title: 'Tum Hi Ho', artist: 'Arijit Singh' },
        { id: 'hoNb6fQ3hO0', title: 'Channa Mereya', artist: 'Arijit Singh' },
        { id: '2Vv-BfVoq4g', title: 'Perfect', artist: 'Ed Sheeran' },
        { id: 'pXRviuL6vMY', title: 'Kal Ho Naa Ho', artist: 'Sonu Nigam' },
        { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen' },
        { id: 'hT_nvWreIhg', title: 'Counting Stars', artist: 'OneRepublic' },
        { id: 'xVOBjrkfBMU', title: 'Hawayein', artist: 'Arijit Singh' },
        { id: 'U0yg3JFtwcM', title: 'Kesariya', artist: 'Arijit Singh' },
        { id: 'qIvMeRsilrA', title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal' },
        { id: 'T94PHkuyd8c', title: 'Kun Faya Kun', artist: 'A.R. Rahman' },
        { id: '5a4O9c96oVY', title: 'Yeh Firdous', artist: 'A.R. Rahman' },
        { id: 'Vi-V1M8mUYo', title: 'Ocean Eyes', artist: 'Billie Eilish' },
        { id: 'e3NLOOf5eH4', title: 'Lovely', artist: 'Billie Eilish & Khalid' },
        { id: 'hLQl3WQQoQ0', title: 'Someone Like You', artist: 'Adele' },
        { id: 'qgmXPNn_WD0', title: 'Photograph', artist: 'Ed Sheeran' },
        { id: 'kTJczUoc26U', title: 'Stay', artist: 'The Kid LAROI & Justin Bieber' },
        { id: 'oyEuk8j83bo', title: 'Love Yourself', artist: 'Justin Bieber' },
        { id: 'euCqAq6DYSY', title: 'Let Me Love You', artist: 'DJ Snake ft. Justin Bieber' },
        { id: 'nFSX47-tpeI', title: 'Attention', artist: 'Charlie Puth' }
    ],
    party: [
        { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Bruno Mars' },
        { id: 'DG-kYsfRLog', title: 'Excuses', artist: 'AP Dhillon' },
        { id: 'GCF8MfKbHHs', title: 'Brown Munde', artist: 'AP Dhillon' },
        { id: '8mUFCPXrDEs', title: 'Lahore', artist: 'Guru Randhawa' },
        { id: 'vTIIMJ9tUc8', title: 'High Rated Gabru', artist: 'Guru Randhawa' },
        { id: 'V1Pl8CzNFCw', title: 'Lover', artist: 'Diljit Dosanjh' },
        { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi' },
        { id: 'lp-EO5I60KA', title: 'Blinding Lights', artist: 'The Weeknd' },
        { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran' },
        { id: 'IcrbM1l_BoI', title: 'Closer', artist: 'The Chainsmokers' },
        { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker' },
        { id: 'rM7Z-Fh9Ww8', title: 'Wakhra Swag', artist: 'Navv Inder ft. Badshah' },
        { id: 'NTHz9eW9-6g', title: 'Kar Gayi Chull', artist: 'Badshah' },
        { id: '8yS1GvP8z6o', title: 'Abhi Toh Party Shuru Hui Hai', artist: 'Badshah' },
        { id: 'hXnri8N79sY', title: 'Dilliwaali Girlfriend', artist: 'Arijit Singh' },
        { id: 'k3N-9mY_P0s', title: 'Baby Girl', artist: 'Guru Randhawa & Dhvani Bhanushali' },
        { id: 'wnJ6LuUFpMo', title: 'Mi Gente', artist: 'J Balvin' },
        { id: 'aNtzX-t2hF0', title: 'Gasolina', artist: 'Daddy Yankee' },
        { id: 'KQ6zr6kCPj8', title: 'Party Rock Anthem', artist: 'LMFAO' },
        { id: '7zp1TbLFPp8', title: 'Danza Kuduro', artist: 'Don Omar' }
    ],
};

const GENRE_INFO = {
    pop: { emoji: '🎤', label: 'Pop Hits' },
    edm: { emoji: '🎧', label: 'EDM' },
    hindi: { emoji: '🇮🇳', label: 'Hindi' },
    punjabi: { emoji: '🎶', label: 'Punjabi' },
    hiphop: { emoji: '🎤', label: 'Hip Hop' },
    rock: { emoji: '🎸', label: 'Rock' },
    chill: { emoji: '😌', label: 'Chill' },
};

// ── State ──
let playlist = [];
let currentIndex = -1;
let ytPlayer = null;
let saavnAudio = null;         // HTML5 Audio for Saavn
let activePlayer = 'none';     // 'youtube' | 'saavn' | 'none'
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let volume = 80;
let progressTimer = null;
let currentView = 'home';
let npOpen = false;
let carouselIndex = 0;
let recentlyPlayed = [];
let customCovers = {};
let autoThemeTimer = null;
let coverEditTarget = -1;
let playCounts = {};
let artistCounts = {};
let genreCounts = {};
let wasDragged = false;
let likedTrackIds = [];
let currentEqPreset = 'balance';
let canvas, ctx, animFrame;
let canvas2, ctx2;
let customPlaylists = {};
let visualizerParticles = [];
let trackIdToAdd = null;

const THEMES = {
    dark:     { base: '#000000', surface: '#121212', elevated: '#181818', gradient: '#1a3a2a', textBase: '#ffffff', textSubdued: '#a7a7a7', textMuted: '#6a6a6a' },
    midnight: { base: '#050520', surface: '#0a0a2e', elevated: '#12124a', gradient: '#0a0a3e', textBase: '#ffffff', textSubdued: '#a7a7a7', textMuted: '#6a6a6a' },
    forest:   { base: '#030f03', surface: '#0a1f0a', elevated: '#143314', gradient: '#0a2a0a', textBase: '#ffffff', textSubdued: '#a7a7a7', textMuted: '#6a6a6a' },
    sunset:   { base: '#100505', surface: '#2a0a0a', elevated: '#3a1515', gradient: '#3a1a0a', textBase: '#ffffff', textSubdued: '#a7a7a7', textMuted: '#6a6a6a' },
    ocean:    { base: '#030d1a', surface: '#0a1a2a', elevated: '#0f2640', gradient: '#0a2a4a', textBase: '#ffffff', textSubdued: '#a7a7a7', textMuted: '#6a6a6a' },
    purple:   { base: '#0a0518', surface: '#120b24', elevated: '#1a0f35', gradient: '#250949', textBase: '#fdfcff', textSubdued: '#b8afd3', textMuted: '#766e92' },
    light:    { base: '#f5f2fc', surface: '#ffffff', elevated: '#efeaf8', gradient: '#e5daf7', textBase: '#1e123b', textSubdued: '#6c5d94', textMuted: '#9a8ebf' }
};

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadAllData();
    loadPlaylist();
    loadPrefs();
    
    // EQ Preset setup
    const savedEq = localStorage.getItem('vb_eq_preset') || 'balance';
    currentEqPreset = savedEq;
    document.querySelectorAll('.eq-preset-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.preset === currentEqPreset);
    });

    bindEvents();
    initCanvas();
    initSaavnAudio();
    loadYTApi();
    setGreeting();
    renderQuickPicks();
    renderRecentlyPlayed();
    renderSmartSuggestions();
    renderPlaylists();
}

// ══════════════════════════════════════════════════════════
// SAAVN AUDIO PLAYER (HTML5)
// ══════════════════════════════════════════════════════════
function initSaavnAudio() {
    saavnAudio = document.getElementById('saavn-audio');
    saavnAudio.volume = volume / 100;

    saavnAudio.addEventListener('play', () => { isPlaying = true; syncPlayBtns(); startProgress(); });
    saavnAudio.addEventListener('pause', () => { isPlaying = false; syncPlayBtns(); stopProgress(); });
    saavnAudio.addEventListener('ended', () => { isPlaying = false; syncPlayBtns(); stopProgress(); isRepeat ? play(currentIndex) : next(); });
    saavnAudio.addEventListener('error', (e) => {
        console.warn('[VibeBox] Saavn audio error:', e);
        // Try next track on error
        setTimeout(next, 1500);
    });
}

async function ensureSaavnStreamUrl(track) {
    if (track.source !== 'saavn') return true;
    if (track.streamUrl) return true;
    
    try {
        const res = await fetch(`${SAAVN_API}/songs?ids=${track.id}`);
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        
        const isSuccess = data.success || data.status === 'success';
        const results = data.data || [];
        
        if (isSuccess && results.length > 0) {
            const song = results[0];
            const streamUrl = getBestQuality(song.downloadUrl);
            if (streamUrl) {
                track.streamUrl = streamUrl;
                if (!track.thumb) {
                    const images = song.image || [];
                    track.thumb = images.length > 0 ? (images[images.length - 1].link || images[images.length - 1].url || images[0].link || images[0].url || '') : '';
                }
                return true;
            }
        }
    } catch (e) {
        console.error('[VibeBox] Failed to fetch stream URL for:', track.id, e);
    }
    return false;
}

function stopAllPlayers() {
    // Stop YouTube
    if (ytPlayer && ytPlayer.pauseVideo) {
        try { ytPlayer.pauseVideo(); } catch (e) {}
    }
    // Stop Saavn audio
    if (saavnAudio) {
        saavnAudio.pause();
        saavnAudio.currentTime = 0;
    }
    isPlaying = false;
    stopProgress();
}

// ══════════════════════════════════════════════════════════
// STORAGE
// ══════════════════════════════════════════════════════════
function loadAllData() {
    customCovers = JSON.parse(localStorage.getItem('vb_covers') || '{}');
    recentlyPlayed = JSON.parse(localStorage.getItem('vb_recent') || '[]');
    likedTrackIds = JSON.parse(localStorage.getItem('vb_liked_ids') || '[]');
    playCounts = JSON.parse(localStorage.getItem('vb_playcounts') || '{}');
    artistCounts = JSON.parse(localStorage.getItem('vb_artists') || '{}');
    genreCounts = JSON.parse(localStorage.getItem('vb_genres') || '{}');
    customPlaylists = JSON.parse(localStorage.getItem('vb_playlists') || '{}');
}

function loadPlaylist() {
    const saved = localStorage.getItem('vb_tracks');
    const custom = saved ? JSON.parse(saved) : [];
    playlist = [...DEFAULT_TRACKS, ...custom];
    renderAll();
}

function saveCustom() {
    const custom = playlist.filter(t => t.source === 'youtube' || t.source === 'saavn' || t.source === 'local');
    const cleanCustom = custom.map(t => {
        if (t.source === 'local') {
            const copy = {...t};
            delete copy.streamUrl;
            return copy;
        }
        return t;
    });
    localStorage.setItem('vb_tracks', JSON.stringify(cleanCustom.filter(t => !DEFAULT_TRACKS.some(d => d.id === t.id))));
}

function getThumb(t) { return customCovers[t.id] || t.thumb; }

function addToRecent(trackId) {
    recentlyPlayed = recentlyPlayed.filter(id => id !== trackId);
    recentlyPlayed.unshift(trackId);
    if (recentlyPlayed.length > 30) recentlyPlayed.length = 30;
    localStorage.setItem('vb_recent', JSON.stringify(recentlyPlayed));
}

function trackPlay(track) {
    playCounts[track.id] = (playCounts[track.id] || 0) + 1;
    localStorage.setItem('vb_playcounts', JSON.stringify(playCounts));
    artistCounts[track.artist] = (artistCounts[track.artist] || 0) + 1;
    localStorage.setItem('vb_artists', JSON.stringify(artistCounts));
    const genre = track.genre || 'other';
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    localStorage.setItem('vb_genres', JSON.stringify(genreCounts));
}

function renderAll() {
    renderCarousel(); renderTracklist(playlist, 'tracklist-body'); renderLibrary(); renderQuickPicks();
}

// ══════════════════════════════════════════════════════════
// YOUTUBE API (Fallback for YT tracks)
// ══════════════════════════════════════════════════════════
function loadYTApi() {
    if (window.YT && window.YT.Player) { window.onYouTubeIframeAPIReady(); return; }
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
}

window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player('yt-player-iframe', {
        height: '1', width: '1',
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, rel: 0, modestbranding: 1, iv_load_policy: 3, origin: window.location.origin },
        events: { onReady: e => e.target.setVolume(volume), onStateChange: onYTState, onError: () => { if (activePlayer === 'youtube') setTimeout(next, 1500); } }
    });
};

function onYTState(e) {
    if (activePlayer !== 'youtube') return;
    if (e.data === YT.PlayerState.PLAYING) { isPlaying = true; syncPlayBtns(); startProgress(); }
    else if (e.data === YT.PlayerState.PAUSED) { isPlaying = false; syncPlayBtns(); stopProgress(); }
    else if (e.data === YT.PlayerState.ENDED) { isPlaying = false; syncPlayBtns(); stopProgress(); isRepeat ? play(currentIndex) : next(); }
}

// ══════════════════════════════════════════════════════════
// TRANSPORT (Dual Player)
// ══════════════════════════════════════════════════════════
function togglePlay() {
    if (currentIndex < 0) { play(0); return; }

    if (activePlayer === 'saavn') {
        if (saavnAudio.paused) { saavnAudio.play(); isPlaying = true; }
        else { saavnAudio.pause(); isPlaying = false; }
        syncPlayBtns();
    } else if (activePlayer === 'youtube') {
        if (!ytPlayer || !ytPlayer.getPlayerState) return;
        const s = ytPlayer.getPlayerState();
        if (s === YT.PlayerState.PLAYING || s === YT.PlayerState.BUFFERING) { ytPlayer.pauseVideo(); isPlaying = false; }
        else { ytPlayer.playVideo(); isPlaying = true; }
        syncPlayBtns();
    }
}

async function play(index) {
    if (index < 0 || index >= playlist.length) return;
    currentIndex = index;
    const t = playlist[index];

    // Stop whatever was playing
    stopAllPlayers();
    
    // Show mini-player
    const mp = document.getElementById('mini-player');
    if (mp) mp.classList.remove('hidden');
    
    updateUI(index);

    if (t.source === 'saavn') {
        activePlayer = 'saavn';
        // Ensure stream URL is loaded
        const success = await ensureSaavnStreamUrl(t);
        if (!success) {
            console.warn('[VibeBox] Failed to resolve Saavn stream URL, playing next track.');
            setTimeout(next, 1000);
            return;
        }
        
        saavnAudio.src = t.streamUrl;
        saavnAudio.play().catch(e => console.warn('Saavn play failed:', e));
        isPlaying = true;
    } else if (t.source === 'local') {
        activePlayer = 'saavn';
        if (!t.streamUrl) {
            showToast(`Session expired. Re-import '${t.title}' to play.`);
            setTimeout(next, 1500);
            return;
        }
        saavnAudio.src = t.streamUrl;
        saavnAudio.play().catch(e => {
            console.warn('Local file play failed:', e);
            showToast(`Failed to play local file. Re-import.`);
            setTimeout(next, 1500);
        });
        isPlaying = true;
    } else {
        // ── YOUTUBE PLAYBACK ──
        activePlayer = 'youtube';
        if (ytPlayer && ytPlayer.loadVideoById) ytPlayer.loadVideoById(t.id);
        isPlaying = true;
    }

    syncPlayBtns();
    openNP();
    addToRecent(t.id);
    trackPlay(t);
    renderRecentlyPlayed();
    renderSmartSuggestions();
    fetchLyrics(t);
}

function next() { if (!playlist.length) return; play(isShuffle ? Math.floor(Math.random() * playlist.length) : (currentIndex + 1) % playlist.length); }
function prev() {
    if (activePlayer === 'saavn' && saavnAudio.currentTime > 3) { saavnAudio.currentTime = 0; return; }
    if (activePlayer === 'youtube' && ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getCurrentTime() > 3) { ytPlayer.seekTo(0, true); return; }
    play((currentIndex - 1 + playlist.length) % playlist.length);
}

// ══════════════════════════════════════════════════════════
// UI SYNC
// ══════════════════════════════════════════════════════════
function updateUI(index) {
    const t = playlist[index]; if (!t) return;
    const $ = id => document.getElementById(id);
    const thumb = getThumb(t);
    $('mp-cover').src = thumb; $('mp-title').textContent = t.title; $('mp-artist').textContent = t.artist;
    $('np-artwork').src = thumb; $('np-title').textContent = t.title; $('np-artist').textContent = t.artist;
    $('np-time-cur').textContent = '0:00'; $('np-time-total').textContent = t.duration || '--:--';
    $('np-seekbar-fill').style.width = '0%'; $('mp-progress-fill').style.width = '0%';
    $('np-bg').style.backgroundImage = `url(${thumb})`;
    // Show source badge
    const src = $('np-source');
    if (src) src.textContent = t.source === 'saavn' ? '🎵 PLAYING FROM JIOSAAVN' : 'PLAYING FROM YOUTUBE';
    
    // Sync heart icon state
    const isLiked = likedTrackIds.includes(t.id);
    const likeBtn = $('np-like');
    if (likeBtn) {
        likeBtn.classList.toggle('liked', isLiked);
        const heartIcon = likeBtn.querySelector('i');
        if (heartIcon) heartIcon.className = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    }

    // Sync carousel index if played song is in carousel tracks
    const tracks = getCarouselTracks();
    const cIdx = tracks.findIndex(track => track.id === t.id);
    if (cIdx >= 0) {
        carouselIndex = cIdx;
    }
    renderCarousel();
    renderTracklist(playlist, 'tracklist-body');
    renderLibrary();
}

function syncPlayBtns() {
    const c = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    ['np-play-icon', 'mp-play-icon'].forEach(id => { const e = document.getElementById(id); if (e) e.className = c; });
}
function openNP() { npOpen = true; document.getElementById('np-screen').classList.add('open'); }
function closeNP() { npOpen = false; document.getElementById('np-screen').classList.remove('open'); }

// ══════════════════════════════════════════════════════════
// PROGRESS (Dual)
// ══════════════════════════════════════════════════════════
function startProgress() { stopProgress(); progressTimer = setInterval(tickProgress, 300); }
function stopProgress() { if (progressTimer) clearInterval(progressTimer); }
function tickProgress() {
    let cur = 0, dur = 0;

    if (activePlayer === 'saavn') {
        cur = saavnAudio.currentTime || 0;
        dur = saavnAudio.duration || 0;
    } else if (activePlayer === 'youtube') {
        if (!ytPlayer || !ytPlayer.getCurrentTime) return;
        cur = ytPlayer.getCurrentTime() || 0;
        dur = ytPlayer.getDuration() || 0;
    }

    if (dur <= 0) return;
    const pct = (cur / dur) * 100;
    document.getElementById('np-seekbar-fill').style.width = pct + '%';
    document.getElementById('np-time-cur').textContent = fmtTime(cur);
    document.getElementById('np-time-total').textContent = fmtTime(dur);
    document.getElementById('mp-progress-fill').style.width = pct + '%';
    if (currentIndex >= 0) playlist[currentIndex].duration = fmtTime(dur);
}
function fmtTime(s) { const m = Math.floor(s / 60), sc = Math.floor(s % 60); return m + ':' + (sc < 10 ? '0' : '') + sc; }

// ══════════════════════════════════════════════════════════
// RENDER: Carousel
// ══════════════════════════════════════════════════════════
function getCarouselTracks() {
    // 1. Get all liked tracks from current playlist
    let likedTracks = playlist.filter(t => likedTrackIds.includes(t.id));
    
    // 2. Get recently played tracks (excluding liked tracks)
    let recentTracks = [];
    recentlyPlayed.forEach(id => {
        const track = playlist.find(t => t.id === id);
        if (track && !likedTrackIds.includes(id)) {
            recentTracks.push(track);
        }
    });
    
    // 3. Combine them
    let combined = [...likedTracks, ...recentTracks];
    
    // 4. Limit to max 10
    let carouselTracks = combined.slice(0, 10);
    
    // 5. Fallback to default tracks (max 10) if empty
    if (carouselTracks.length === 0) {
        carouselTracks = playlist.slice(0, 10);
    }
    
    return carouselTracks;
}

function renderCarousel() {
    const stage = document.getElementById('carousel-stage'), dotsEl = document.getElementById('carousel-dots');
    if (!stage) return; stage.innerHTML = '';
    
    const tracks = getCarouselTracks();
    if (!tracks.length) return;
    
    carouselIndex = Math.max(0, Math.min(carouselIndex, tracks.length - 1));
    
    tracks.forEach((t, i) => {
        const off = i - carouselIndex; if (Math.abs(off) > 3) return;
        const card = document.createElement('div');
        card.className = 'carousel-card' + (off === 0 ? ' active' : '');
        const sc = off === 0 ? 1 : Math.max(0.72, 1 - Math.abs(off) * 0.12);
        const op = off === 0 ? 1 : Math.max(0.35, 1 - Math.abs(off) * 0.22);
        card.style.transform = `translateX(${off * 130}px) rotateY(${off * -10}deg) scale(${sc})`;
        card.style.opacity = op; card.style.zIndex = 10 - Math.abs(off);
        card.style.filter = off === 0 ? 'none' : `blur(${Math.min(Math.abs(off) * 1.8, 5)}px)`;
        card.innerHTML = `<img class="carousel-card-img" src="${getThumb(t)}" alt=""><div class="carousel-card-overlay"></div><div class="carousel-card-info"><div class="carousel-card-name">${t.title}</div><div class="carousel-card-artist">${t.artist}</div></div><button class="card-play-btn"><i class="fa-solid fa-play"></i></button>`;
        card.addEventListener('click', (e) => {
            if (wasDragged) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (off === 0) {
                const globalIndex = playlist.findIndex(track => track.id === t.id);
                if (globalIndex >= 0) play(globalIndex);
            } else {
                carouselIndex = i;
                renderCarousel();
            }
        });
        stage.appendChild(card);
    });
    
    if (dotsEl) { 
        dotsEl.innerHTML = ''; 
        tracks.forEach((_, i) => { 
            const d = document.createElement('button'); 
            d.className = 'carousel-dot' + (i === carouselIndex ? ' active' : ''); 
            d.addEventListener('click', () => { carouselIndex = i; renderCarousel(); }); 
            dotsEl.appendChild(d); 
        }); 
    }
}
function carouselPrev() {
    const tracks = getCarouselTracks();
    if (!tracks.length) return;
    carouselIndex = (carouselIndex - 1 + tracks.length) % tracks.length;
    renderCarousel();
}
function carouselNext() {
    const tracks = getCarouselTracks();
    if (!tracks.length) return;
    carouselIndex = (carouselIndex + 1) % tracks.length;
    renderCarousel();
}

// ══════════════════════════════════════════════════════════
// RENDER: Quick Picks / Recently Played / Smart Suggestions
// ══════════════════════════════════════════════════════════
function renderQuickPicks() {
    const row = document.getElementById('quick-picks-row'); if (!row) return; row.innerHTML = '';
    const genres = {};
    playlist.forEach((t, i) => { const g = t.genre || 'other'; if (!genres[g]) genres[g] = []; genres[g].push({ track: t, index: i }); });
    Object.keys(genres).forEach(g => {
        const info = GENRE_INFO[g] || { emoji: '🎵', label: g };
        const tracks = genres[g];
        const hdr = document.createElement('div'); hdr.className = 'h-card'; hdr.style.cssText = 'width:110px;flex-shrink:0;';
        hdr.innerHTML = `<div class="h-card-img" style="position:relative;width:110px;height:110px;border-radius:10px;overflow:hidden;"><img src="${getThumb(tracks[0].track)}" alt="" style="width:100%;height:100%;object-fit:cover;"><div style="position:absolute;inset:0;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;"><span style="font-size:24px;">${info.emoji}</span><span style="font-size:10px;font-weight:700;text-transform:uppercase;">${info.label}</span></div></div><div class="h-card-name">${info.label}</div><div class="h-card-sub">${tracks.length} tracks</div>`;
        hdr.addEventListener('click', () => play(tracks[0].index));
        row.appendChild(hdr);
        tracks.slice(0, 3).forEach(({ track: t, index: gi }) => {
            const card = document.createElement('div'); card.className = 'h-card';
            card.innerHTML = `<div class="h-card-img" style="position:relative;"><img src="${getThumb(t)}" alt="" style="width:130px;height:130px;object-fit:cover;border-radius:8px;"><div class="cover-edit-badge" data-idx="${gi}"><i class="fa-solid fa-camera"></i></div></div><div class="h-card-name">${t.title}</div><div class="h-card-sub">${t.artist}</div>`;
            card.addEventListener('click', e => { if (e.target.closest('.cover-edit-badge')) { e.stopPropagation(); triggerCoverEdit(gi); return; } play(gi); });
            row.appendChild(card);
        });
    });
}

function renderRecentlyPlayed() {
    const shelf = document.getElementById('shelf-recent'), row = document.getElementById('recent-row');
    if (!shelf || !row) return;
    const recent = recentlyPlayed.map(id => playlist.find(t => t.id === id)).filter(Boolean).slice(0, 10);
    if (!recent.length) { shelf.style.display = 'none'; return; }
    shelf.style.display = 'block'; row.innerHTML = '';
    recent.forEach(t => { const gi = playlist.indexOf(t), card = document.createElement('div'); card.className = 'h-card'; card.innerHTML = `<div class="h-card-img"><img src="${getThumb(t)}" alt="" style="width:130px;height:130px;object-fit:cover;border-radius:8px;"></div><div class="h-card-name">${t.title}</div><div class="h-card-sub">${t.artist}</div>`; card.addEventListener('click', () => play(gi)); row.appendChild(card); });
}

async function renderSmartSuggestions() {
    const row = document.getElementById('smart-row'); if (!row) return;
    const shelf = document.getElementById('shelf-smart'); if (!shelf) return;
    
    // 1. Determine tastes from history
    const sortedArtists = Object.entries(artistCounts).sort((a, b) => b[1] - a[1]);
    const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
    
    const topArtists = sortedArtists.map(e => e[0]);
    const topGenres = sortedGenres.map(e => e[0]);
    
    // Construct search queries based on taste profile
    let queries = [];
    let headingText = "✨ Discover Hindi & Punjabi Hits";
    
    if (topArtists.length > 0) {
        queries.push(topArtists[0]);
        headingText = `✨ Recommendations based on ${topArtists[0]}`;
        if (topArtists.length > 1) queries.push(topArtists[1]);
    }
    
    if (topGenres.length > 0) {
        const fav = topGenres[0];
        if (fav === 'hindi') {
            queries.push("Hindi Hits");
            if (queries.length === 0) headingText = "✨ Hindi Hits for you";
        } else if (fav === 'punjabi') {
            queries.push("Punjabi Hits");
            if (queries.length === 0) headingText = "✨ Punjabi Vibes for you";
        } else {
            queries.push(fav);
            if (queries.length === 0) headingText = `✨ Suggested ${GENRE_INFO[fav]?.label || fav} tracks`;
        }
    }
    
    // Ensure we have at least Hindi and Punjabi defaults if history is empty
    if (queries.length === 0) {
        queries.push("Latest Hindi Hits");
        queries.push("Trending Punjabi");
    }
    
    try {
        // Fetch candidates concurrently
        const fetchPromises = queries.slice(0, 3).map(q => 
            fetch(`${SAAVN_API}/search/songs?query=${encodeURIComponent(q)}&limit=12`)
                .then(r => r.ok ? r.json() : null)
                .catch(() => null)
        );
        
        const responses = await Promise.all(fetchPromises);
        
        // Combine results
        let candidatesMap = new Map();
        responses.forEach(res => {
            if (!res) return;
            const success = res.success || res.status === 'success';
            const results = res.data?.results || res.data || [];
            if (success) {
                results.forEach(song => {
                    if (song.id) candidatesMap.set(song.id, song);
                });
            }
        });
        
        const candidates = Array.from(candidatesMap.values());
        if (candidates.length === 0) { shelf.style.display = 'none'; return; }
        
        // 2. AI-like Scoring and Ranking algorithm
        const scoredCandidates = candidates.map(song => {
            let score = 0;
            const title = (song.name || song.title || '').toLowerCase();
            const primaryArtist = (song.primaryArtists || song.artists?.primary?.map(a => a.name).join(', ') || '').toLowerCase();
            
            // Boost matches for favorite artists
            topArtists.forEach((artist, index) => {
                const artLower = artist.toLowerCase();
                if (primaryArtist.includes(artLower)) {
                    // Highest boost for top artist, decreasing for others
                    score += index === 0 ? 8 : (index === 1 ? 4 : 2);
                }
            });
            
            // Boost matches for favorite genres
            topGenres.forEach((genre, index) => {
                const genLower = genre.toLowerCase();
                if (primaryArtist.includes(genLower) || title.includes(genLower)) {
                    score += index === 0 ? 6 : 3;
                }
            });
            
            // Familiarity Boost: If recently played
            const isRecent = recentlyPlayed.includes(song.id);
            if (isRecent) {
                score += 3;
            }
            
            // Discovery Penalty: If already saved in tracklist, heavily penalize to prioritize NEW songs
            const alreadyInPlaylist = playlist.some(t => t.id === song.id);
            if (alreadyInPlaylist) {
                score -= 15;
            }
            
            // Serendipity Entropy: Add a small random factor to ensure fresh recommendations on every load
            score += Math.random() * 3.5;
            
            return { song, score };
        });
        
        // Sort by score descending
        scoredCandidates.sort((a, b) => b.score - a.score);
        
        // Render top 10
        shelf.style.display = 'block';
        row.innerHTML = '';
        
        const heading = shelf.querySelector('.shelf-header h3');
        if (heading) heading.textContent = headingText;
        
        const top10 = scoredCandidates.slice(0, 10);
        top10.forEach(({ song }) => {
            const images = song.image || [];
            const thumb = images.length > 0 ? (images[images.length - 1].link || images[images.length - 1].url || images[0].link || images[0].url || '') : '';
            const artists = song.artists?.primary?.map(a => a.name).join(', ') || song.artists?.all?.map(a => a.name).join(', ') || song.primaryArtists || song.singers || 'Unknown';
            const dur = song.duration ? fmtTime(parseInt(song.duration)) : '--:--';
            
            const card = document.createElement('div');
            card.className = 'h-card';
            card.innerHTML = `
                <div class="h-card-img">
                    <img src="${thumb}" alt="" style="width:130px;height:130px;object-fit:cover;border-radius:8px;">
                </div>
                <div class="h-card-name">${escapeHtml(song.name || 'Unknown')}</div>
                <div class="h-card-sub">${escapeHtml(artists)}</div>
            `;
            
            const trackData = {
                id: song.id,
                title: song.name || 'Unknown',
                artist: artists,
                duration: dur,
                thumb: thumb,
                streamUrl: getBestQuality(song.downloadUrl),
            };
            
            card.addEventListener('click', () => {
                addSaavnTrack(trackData, true);
            });
            
            row.appendChild(card);
        });
    } catch (err) {
        console.warn('[VibeBox] Failed to load smart suggestions:', err);
        shelf.style.display = 'none';
    }
}

// ══════════════════════════════════════════════════════════
// RENDER: Tracklist / Library
// ══════════════════════════════════════════════════════════
function renderTracklist(tracks, containerId) {
    const el = document.getElementById(containerId); if (!el) return; el.innerHTML = '';
    if (!tracks.length) { el.innerHTML = '<div style="padding:24px;text-align:center;color:#6a6a6a;">No tracks</div>'; return; }
    tracks.forEach((t, i) => {
        const gi = playlist.indexOf(t), row = document.createElement('div');
        row.className = 'track-row' + (gi === currentIndex ? ' playing' : '');
        let badge = t.source === 'saavn' ? '<span style="color:#1db954;font-size:9px;font-weight:700;">SAAVN</span>' : '';
        if (t.source === 'local') {
            badge = '<span class="local-badge">LOCAL</span>';
        }
        row.innerHTML = `
            <div class="tr-thumb-wrap">
                <img class="tr-thumb" src="${getThumb(t)}" alt="">
                <div class="cover-edit-badge" data-idx="${gi}"><i class="fa-solid fa-camera"></i></div>
            </div>
            <div class="tr-info">
                <span class="tr-name">${t.title} ${badge}</span>
                <span class="tr-artist">${t.artist}</span>
            </div>
            <span class="tr-dur">${t.duration || '--:--'}</span>
            <button class="track-add-btn" title="Add to playlist"><i class="fa-solid fa-plus"></i></button>
        `;
        row.addEventListener('click', e => {
            if (e.target.closest('.cover-edit-badge')) {
                e.stopPropagation();
                triggerCoverEdit(gi);
                return;
            }
            if (e.target.closest('.track-add-btn')) {
                e.stopPropagation();
                openAddToPlaylistModal(t.id);
                return;
            }
            play(gi >= 0 ? gi : i);
        });
        el.appendChild(row);
    });
}

function renderLibrary() {
    const el = document.getElementById('library-list'); if (!el) return; el.innerHTML = '';
    playlist.forEach((t, i) => {
        const d = document.createElement('div'); d.className = 'lib-item' + (i === currentIndex ? ' active' : '');
        const badge = t.source === 'local' ? ' <span class="local-badge">LOCAL</span>' : '';
        d.innerHTML = `
            <img class="lib-item-img" src="${getThumb(t)}" alt="">
            <div class="lib-item-info" style="flex-grow:1;min-width:0;">
                <span class="lib-item-name">${t.title}${badge}</span>
                <span class="lib-item-sub">${t.artist} · ${t.source === 'saavn' ? '🎵 Saavn' : (t.source === 'local' ? '📁 Local' : (t.genre || 'YouTube'))}</span>
            </div>
            <button class="track-add-btn" title="Add to playlist"><i class="fa-solid fa-plus"></i></button>
        `;
        d.addEventListener('click', e => {
            if (e.target.closest('.track-add-btn')) {
                e.stopPropagation();
                openAddToPlaylistModal(t.id);
                return;
            }
            play(i);
        });
        el.appendChild(d);
    });
}

// ══════════════════════════════════════════════════════════
// COVER IMAGE CHANGE
// ══════════════════════════════════════════════════════════
function triggerCoverEdit(idx) { coverEditTarget = idx; document.getElementById('cover-file-input').click(); }
function handleCoverFile(file) {
    if (!file || coverEditTarget < 0) return;
    const r = new FileReader();
    r.onload = e => { customCovers[playlist[coverEditTarget].id] = e.target.result; localStorage.setItem('vb_covers', JSON.stringify(customCovers)); renderAll(); if (currentIndex === coverEditTarget) updateUI(currentIndex); coverEditTarget = -1; };
    r.readAsDataURL(file);
}

// ══════════════════════════════════════════════════════════
// YOUTUBE LINK IMPORT
// ══════════════════════════════════════════════════════════
function importLink(inputId, statusId) {
    const input = document.getElementById(inputId), status = document.getElementById(statusId);
    if (!input || !status) return;
    const url = input.value.trim();
    if (!url) { status.textContent = '✗ Paste a YouTube URL'; status.className = 'paste-hint error'; return; }
    const vid = extractID(url);
    if (!vid) { status.textContent = '✗ Invalid link'; status.className = 'paste-hint error'; return; }
    if (playlist.some(t => t.id === vid)) { play(playlist.findIndex(t => t.id === vid)); input.value = ''; status.textContent = '✓ Already added!'; status.className = 'paste-hint success'; return; }
    status.textContent = '⟳ Fetching...';
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${vid}`)
        .then(r => r.ok ? r.json() : Promise.reject()).then(d => doAddYT(vid, (d.title || 'YouTube Track').replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim(), d.author_name || 'YouTube', input, status))
        .catch(() => doAddYT(vid, 'YouTube Track', 'YouTube', input, status));
}
function doAddYT(vid, title, artist, input, status) {
    playlist.push({ id: vid, title, artist, source: 'youtube', duration: '--:--', thumb: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`, genre: 'other' });
    saveCustom(); renderAll(); play(playlist.length - 1);
    status.textContent = '✓ Added: ' + title; status.className = 'paste-hint success'; input.value = '';
    document.getElementById('paste-modal-overlay').classList.remove('open');
}
function extractID(url) {
    if (!url) return null; url = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    for (const p of [/youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/, /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/, /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/, /youtu\.be\/([a-zA-Z0-9_-]{11})/, /music\.youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/]) { const m = url.match(p); if (m) return m[1]; }
    return null;
}

// ══════════════════════════════════════════════════════════
// PERSONALIZATION
// ══════════════════════════════════════════════════════════
function loadPrefs() {
    applyTheme(localStorage.getItem('vb_theme') || 'purple');
    applyAccent(localStorage.getItem('vb_accent') || '#b44aff');
    const bgImg = localStorage.getItem('vb_bg_img'), bgOp = localStorage.getItem('vb_bg_opacity') || '30';
    if (bgImg) applyBgImage(bgImg, parseInt(bgOp));
    document.getElementById('bg-opacity').value = bgOp;
    const autoT = localStorage.getItem('vb_auto_theme') === 'true';
    document.getElementById('auto-theme-toggle').checked = autoT;
    if (autoT) startAutoTheme();
}
function applyTheme(name) {
    const t = THEMES[name]; if (!t) return; const r = document.documentElement;
    r.style.setProperty('--bg-base', t.base); 
    r.style.setProperty('--bg-surface', t.surface); 
    r.style.setProperty('--bg-elevated', t.elevated);
    r.style.setProperty('--bg-card', t.elevated);
    r.style.setProperty('--text-base', t.textBase || '#ffffff');
    r.style.setProperty('--text-subdued', t.textSubdued || '#a7a7a7');
    r.style.setProperty('--text-muted', t.textMuted || '#6a6a6a');
    
    // Toggle light-theme class on body to allow stylesheet specific overrides
    if (name === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    
    const g = document.getElementById('main-gradient'); if (g) g.style.background = `linear-gradient(180deg, ${t.gradient} 0%, ${t.surface} 100%)`;
    localStorage.setItem('vb_theme', name);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === name));
}
function applyAccent(c) { document.documentElement.style.setProperty('--accent', c); localStorage.setItem('vb_accent', c); document.querySelectorAll('.accent-btn').forEach(b => b.classList.toggle('active', b.dataset.accent === c)); }
function compressAndApplyBg(file, opacity) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const maxDim = 1024;
            let width = img.width;
            let height = img.height;
            if (width > height) {
                if (width > maxDim) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                }
            } else {
                if (height > maxDim) {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }
            }
            
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            
            const compressedData = canvas.toDataURL('image/jpeg', 0.7);
            try {
                applyBgImage(compressedData, opacity);
            } catch (e) {
                console.error('[VibeBox] Failed to save background to localStorage:', e);
                const el = document.getElementById('custom-bg');
                el.style.backgroundImage = `url(${compressedData})`;
                el.style.setProperty('--bg-opacity', (opacity / 100).toString());
                el.classList.add('visible');
                document.body.classList.add('has-custom-bg');
            }
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function applyBgImage(dataUrl, opacity) {
    const el = document.getElementById('custom-bg'); el.style.backgroundImage = `url(${dataUrl})`; el.style.setProperty('--bg-opacity', (opacity / 100).toString());
    el.classList.add('visible'); document.body.classList.add('has-custom-bg');
    try {
        localStorage.setItem('vb_bg_img', dataUrl);
        localStorage.setItem('vb_bg_opacity', opacity.toString());
    } catch(e) {
        console.warn('[VibeBox] LocalStorage save failed:', e);
    }
}
function removeBgImage() { document.getElementById('custom-bg').style.backgroundImage = ''; document.getElementById('custom-bg').classList.remove('visible'); document.body.classList.remove('has-custom-bg'); localStorage.removeItem('vb_bg_img'); }
function startAutoTheme() { stopAutoTheme(); const n = Object.keys(THEMES); let i = 0; autoThemeTimer = setInterval(() => { i = (i + 1) % n.length; applyTheme(n[i]); }, 30000); }
function stopAutoTheme() { if (autoThemeTimer) { clearInterval(autoThemeTimer); autoThemeTimer = null; } }

// ══════════════════════════════════════════════════════════
// MOOD PLAYLIST
// ══════════════════════════════════════════════════════════
function playMood(mood) {
    const mt = MOOD_TRACKS[mood]; if (!mt || !mt.length) return;
    mt.forEach(m => { if (!playlist.some(t => t.id === m.id)) playlist.push({ id: m.id, title: m.title, artist: m.artist, source: 'youtube', duration: '--:--', thumb: `https://i.ytimg.com/vi/${m.id}/hqdefault.jpg`, genre: mood }); });
    isShuffle = true; const npSh = document.getElementById('np-shuffle'); if (npSh) npSh.classList.add('active');
    renderAll(); play(playlist.findIndex(t => t.id === mt[0].id));
}

// ══════════════════════════════════════════════════════════
// EVENT BINDING
// ══════════════════════════════════════════════════════════
function bindEvents() {
    document.getElementById('np-play-pause').addEventListener('click', togglePlay);
    document.getElementById('np-next').addEventListener('click', next);
    document.getElementById('np-prev').addEventListener('click', prev);
    document.getElementById('np-down').addEventListener('click', closeNP);
    const npSh = document.getElementById('np-shuffle');
    npSh.addEventListener('click', () => { isShuffle = !isShuffle; npSh.classList.toggle('active', isShuffle); });
    const npRp = document.getElementById('np-repeat');
    npRp.addEventListener('click', () => { isRepeat = !isRepeat; npRp.classList.toggle('active', isRepeat); });

    // Seekbar (dual)
    document.getElementById('np-seekbar').addEventListener('click', e => {
        const r = e.currentTarget.getBoundingClientRect();
        const pct = (e.clientX - r.left) / r.width;
        if (activePlayer === 'saavn' && saavnAudio.duration) { saavnAudio.currentTime = saavnAudio.duration * pct; }
        else if (activePlayer === 'youtube' && ytPlayer && ytPlayer.getDuration) { ytPlayer.seekTo(ytPlayer.getDuration() * pct, true); }
    });

    document.getElementById('np-like').addEventListener('click', function () { 
        if (currentIndex < 0) return;
        const currentTrack = playlist[currentIndex];
        if (!currentTrack) return;
        
        const idx = likedTrackIds.indexOf(currentTrack.id);
        if (idx >= 0) {
            likedTrackIds.splice(idx, 1);
            this.classList.remove('liked');
            const heartIcon = this.querySelector('i');
            if (heartIcon) heartIcon.className = 'fa-regular fa-heart';
        } else {
            likedTrackIds.push(currentTrack.id);
            this.classList.add('liked');
            const heartIcon = this.querySelector('i');
            if (heartIcon) heartIcon.className = 'fa-solid fa-heart';
        }
        localStorage.setItem('vb_liked_ids', JSON.stringify(likedTrackIds));
        renderCarousel();
    });
    document.getElementById('np-artwork').addEventListener('click', () => { if (currentIndex >= 0) triggerCoverEdit(currentIndex); });
    document.getElementById('mp-play-pause').addEventListener('click', e => { e.stopPropagation(); togglePlay(); });
    document.getElementById('mp-close-btn').addEventListener('click', e => {
        e.stopPropagation(); // Avoid triggering openNP
        document.getElementById('mini-player').classList.add('hidden');
    });
    document.getElementById('mp-content').addEventListener('click', e => { 
        if (e.target.closest('#mp-close-btn') || e.target.closest('#mp-play-pause')) return;
        if (currentIndex >= 0) openNP(); 
    });
    document.getElementById('carousel-prev').addEventListener('click', carouselPrev);
    document.getElementById('carousel-next').addEventListener('click', carouselNext);

    // YT Import
    document.getElementById('yt-add-btn').addEventListener('click', () => importLink('yt-url-input', 'paste-status'));
    document.getElementById('yt-url-input').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); importLink('yt-url-input', 'paste-status'); } });
    document.getElementById('yt-add-btn-modal').addEventListener('click', () => importLink('yt-url-input-modal', 'paste-status-modal'));
    document.getElementById('yt-url-input-modal').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); importLink('yt-url-input-modal', 'paste-status-modal'); } });
    document.getElementById('btn-add-top').addEventListener('click', () => { document.getElementById('paste-modal-overlay').classList.add('open'); setTimeout(() => document.getElementById('yt-url-input-modal').focus(), 150); });
    document.getElementById('paste-modal-close').addEventListener('click', () => document.getElementById('paste-modal-overlay').classList.remove('open'));
    document.getElementById('paste-modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) e.target.classList.remove('open'); });

    // Settings
    document.getElementById('btn-settings').addEventListener('click', () => document.getElementById('settings-overlay').classList.add('open'));
    document.getElementById('settings-close').addEventListener('click', () => document.getElementById('settings-overlay').classList.remove('open'));
    document.getElementById('settings-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) e.target.classList.remove('open'); });
    
    // EQ Presets
    document.querySelectorAll('.eq-preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.eq-preset-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentEqPreset = this.dataset.preset;
            localStorage.setItem('vb_eq_preset', currentEqPreset);
        });
    });
    document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => applyTheme(b.dataset.theme)));
    document.querySelectorAll('.accent-btn').forEach(b => b.addEventListener('click', () => applyAccent(b.dataset.accent)));
        const bgFile = document.getElementById('bg-file-input');
    document.getElementById('btn-upload-bg').addEventListener('click', () => { bgFile.value = ''; bgFile.click(); });
    bgFile.addEventListener('change', function () {
        const f = this.files[0];
        if (!f) return;
        compressAndApplyBg(f, parseInt(document.getElementById('bg-opacity').value));
    });
    document.getElementById('btn-remove-bg').addEventListener('click', removeBgImage);
    document.getElementById('bg-opacity').addEventListener('input', e => { const bg = localStorage.getItem('vb_bg_img'); if (bg) applyBgImage(bg, parseInt(e.target.value)); });
    document.getElementById('auto-theme-toggle').addEventListener('change', e => { localStorage.setItem('vb_auto_theme', e.target.checked.toString()); e.target.checked ? startAutoTheme() : stopAutoTheme(); });
    const coverInput = document.getElementById('cover-file-input');
    coverInput.addEventListener('change', function () { if (this.files[0]) handleCoverFile(this.files[0]); this.value = ''; });
    document.querySelectorAll('.bnav-tab').forEach(tab => tab.addEventListener('click', () => switchView(tab.dataset.view)));
    document.querySelectorAll('.mood-card').forEach(card => card.addEventListener('click', () => playMood(card.dataset.mood)));
    document.getElementById('btn-clear-custom').addEventListener('click', () => { if (!confirm('Clear custom tracks?')) return; playlist = [...DEFAULT_TRACKS]; saveCustom(); if (currentIndex >= playlist.length) currentIndex = -1; renderAll(); });
    document.getElementById('main-scroll').addEventListener('scroll', () => { document.querySelector('.topbar').classList.toggle('scrolled', document.getElementById('main-scroll').scrollTop > 40); });

    // Show lyrics toggle event
    const btnShowLyrics = document.getElementById('btn-show-lyrics');
    if (btnShowLyrics) {
        btnShowLyrics.addEventListener('click', () => {
            const overlay = document.getElementById('np-lyrics-overlay');
            if (overlay) {
                const isOpen = overlay.classList.toggle('open');
                btnShowLyrics.style.color = isOpen ? 'var(--accent)' : 'var(--text-subdued)';
            }
        });
    }

    // Local files selector events
    const btnImportLocal = document.getElementById('btn-import-local');
    const localFileInput = document.getElementById('local-file-input');
    if (btnImportLocal && localFileInput) {
        btnImportLocal.addEventListener('click', () => {
            localFileInput.click();
        });
        localFileInput.addEventListener('change', function() {
            const files = this.files;
            if (!files.length) return;
            const LOCAL_THUMB = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="%23b44aff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`;
            
            let importCount = 0;
            Array.from(files).forEach(file => {
                const url = URL.createObjectURL(file);
                let title = file.name.replace(/\.[^/.]+$/, "");
                let artist = "Local Audio";
                if (title.includes(' - ')) {
                    const parts = title.split(' - ');
                    artist = parts[0].trim();
                    title = parts[1].trim();
                } else if (title.includes('-')) {
                    const parts = title.split('-');
                    artist = parts[0].trim();
                    title = parts[1].trim();
                }
                
                const id = 'local-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
                const track = {
                    id: id,
                    title: title,
                    artist: artist,
                    source: 'local',
                    duration: '--:--',
                    thumb: LOCAL_THUMB,
                    streamUrl: url,
                    genre: 'local'
                };
                
                const tempAudio = new Audio(url);
                tempAudio.addEventListener('loadedmetadata', () => {
                    track.duration = fmtTime(tempAudio.duration);
                    renderAll();
                });
                
                playlist.push(track);
                importCount++;
            });
            
            saveCustom();
            renderAll();
            showToast(`Imported ${importCount} local files!`);
            this.value = '';
        });
    }

    // Backup & Restore events
    const btnExportBackup = document.getElementById('btn-export-backup');
    if (btnExportBackup) {
        btnExportBackup.addEventListener('click', () => {
            const backup = {
                likes: likedTrackIds,
                playlists: customPlaylists,
                tracks: playlist.filter(t => !DEFAULT_TRACKS.some(d => d.id === t.id) && t.source !== 'local'),
                settings: {
                    theme: localStorage.getItem('vb_theme') || 'purple',
                    accent: localStorage.getItem('vb_accent') || '#b44aff',
                    bgOpacity: localStorage.getItem('vb_bg_opacity') || '30',
                    bgImg: localStorage.getItem('vb_bg_img') || ''
                }
            };
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup));
            const dlAnchorElem = document.createElement('a');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "sugam_backup.json");
            dlAnchorElem.click();
            showToast("Backup exported successfully!");
        });
    }
    
    const btnImportBackupTrigger = document.getElementById('btn-import-backup-trigger');
    const backupFileInput = document.getElementById('backup-file-input');
    if (btnImportBackupTrigger && backupFileInput) {
        btnImportBackupTrigger.addEventListener('click', () => {
            backupFileInput.click();
        });
        backupFileInput.addEventListener('change', function() {
            const file = this.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.likes !== undefined) {
                        localStorage.setItem('vb_liked_ids', JSON.stringify(data.likes || []));
                    }
                    if (data.playlists !== undefined) {
                        localStorage.setItem('vb_playlists', JSON.stringify(data.playlists || {}));
                    }
                    if (data.tracks !== undefined) {
                        localStorage.setItem('vb_tracks', JSON.stringify(data.tracks || []));
                    }
                    if (data.settings) {
                        if (data.settings.theme) localStorage.setItem('vb_theme', data.settings.theme);
                        if (data.settings.accent) localStorage.setItem('vb_accent', data.settings.accent);
                        if (data.settings.bgOpacity) localStorage.setItem('vb_bg_opacity', data.settings.bgOpacity);
                        if (data.settings.bgImg) localStorage.setItem('vb_bg_img', data.settings.bgImg);
                    }
                    showToast("Backup imported! Reloading...");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                } catch(err) {
                    showToast("Invalid backup JSON file");
                    console.error(err);
                }
            };
            reader.readAsText(file);
            this.value = '';
        });
    }

    // Custom playlists events
    const btnCreatePlaylist = document.getElementById('btn-create-playlist');
    if (btnCreatePlaylist) {
        btnCreatePlaylist.addEventListener('click', () => {
            const name = prompt('Enter playlist name:');
            if (name && name.trim()) {
                const trimmed = name.trim();
                if (customPlaylists[trimmed]) {
                    showToast('Playlist already exists!');
                    return;
                }
                customPlaylists[trimmed] = [];
                localStorage.setItem('vb_playlists', JSON.stringify(customPlaylists));
                renderPlaylists();
                showToast(`Created playlist '${trimmed}'`);
            }
        });
    }
    
    const addPlaylistModalClose = document.getElementById('add-playlist-modal-close');
    if (addPlaylistModalClose) {
        addPlaylistModalClose.addEventListener('click', () => {
            document.getElementById('add-playlist-modal-overlay').classList.remove('open');
        });
    }
    
    const addPlaylistModalOverlay = document.getElementById('add-playlist-modal-overlay');
    if (addPlaylistModalOverlay) {
        addPlaylistModalOverlay.addEventListener('click', e => {
            if (e.target === e.currentTarget) e.target.classList.remove('open');
        });
    }

    // ── SEARCH (Local + JioSaavn API) ──
    const si = document.getElementById('search-input');
    let searchTimeout = null;
    si.addEventListener('input', () => {
        const q = si.value.trim();
        if (q) {
            // Local results (instant)
            const ql = q.toLowerCase();
            const local = playlist.filter(t => t.title.toLowerCase().includes(ql) || t.artist.toLowerCase().includes(ql) || (t.genre && t.genre.toLowerCase().includes(ql)));
            renderTracklist(local, 'search-tracklist-body');
            document.getElementById('search-results').style.display = local.length ? 'block' : 'none';
            document.getElementById('category-grid').style.display = 'none';
            // Saavn API search (debounced)
            clearTimeout(searchTimeout);
            document.getElementById('yt-search-section').style.display = 'block';
            document.getElementById('yt-search-loader').style.display = 'flex';
            document.getElementById('yt-results-list').innerHTML = '';
            searchTimeout = setTimeout(() => searchSaavn(q), 500);
        } else {
            document.getElementById('search-results').style.display = 'none';
            document.getElementById('category-grid').style.display = 'grid';
            document.getElementById('yt-search-section').style.display = 'none';
            clearTimeout(searchTimeout);
        }
    });
    document.getElementById('search-clear').addEventListener('click', () => { si.value = ''; si.dispatchEvent(new Event('input')); });
    document.querySelectorAll('.cat-card').forEach(c => c.addEventListener('click', () => { si.value = c.dataset.genre; si.dispatchEvent(new Event('input')); }));

    // Touch swipe
    const wrapper = document.getElementById('carousel-wrapper');
    let tSX = 0, tSY = 0, tD = 0, sw = false, isH = null;
    wrapper.addEventListener('touchstart', e => { tSX = e.touches[0].clientX; tSY = e.touches[0].clientY; tD = 0; sw = true; isH = null; }, { passive: true });
    wrapper.addEventListener('touchmove', e => { if (!sw) return; const dx = e.touches[0].clientX - tSX, dy = e.touches[0].clientY - tSY; if (isH === null) isH = Math.abs(dx) > Math.abs(dy); if (isH) { tD = dx; if (e.cancelable) e.preventDefault(); } }, { passive: false });
    wrapper.addEventListener('touchend', () => { if (!sw) return; sw = false; if (isH && Math.abs(tD) > 40) { tD > 0 ? carouselPrev() : carouselNext(); } tD = 0; isH = null; });
    let md = false, msx = 0, mD = 0;
    wrapper.addEventListener('mousedown', e => { md = true; msx = e.clientX; mD = 0; e.preventDefault(); });
    window.addEventListener('mousemove', e => { if (md) mD = e.clientX - msx; });
    window.addEventListener('mouseup', () => { if (!md) return; md = false; if (Math.abs(mD) > 40) { mD > 0 ? carouselPrev() : carouselNext(); } mD = 0; });
    const npS = document.getElementById('np-screen'); let npTY = 0;
    npS.addEventListener('touchstart', e => { npTY = e.touches[0].clientY; }, { passive: true });
    npS.addEventListener('touchend', e => { if (e.changedTouches[0].clientY - npTY > 80) closeNP(); });
    document.addEventListener('keydown', e => { if (e.target.tagName === 'INPUT') return; if (e.key === 'ArrowLeft') carouselPrev(); else if (e.key === 'ArrowRight') carouselNext(); else if (e.key === ' ') { e.preventDefault(); togglePlay(); } else if (e.key === 'Escape') { closeNP(); document.getElementById('settings-overlay').classList.remove('open'); document.getElementById('paste-modal-overlay').classList.remove('open'); } });
}

// ══════════════════════════════════════════════════════════
// VIEWS
// ══════════════════════════════════════════════════════════
function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.bnav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('view-' + view).classList.add('active');
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    document.getElementById('topbar-search-container').style.display = view === 'search' ? 'block' : 'none';
    if (view === 'search') document.getElementById('search-input').focus();
    document.getElementById('main-scroll').scrollTop = 0;
}

function setGreeting() {
    const h = new Date().getHours();
    document.getElementById('greeting').textContent = h < 12 ? 'Good Morning' : h < 18 ? 'Good Afternoon' : 'Good Evening';
}

// ══════════════════════════════════════════════════════════
// JIOSAAVN SEARCH API (Open Source — saavn.dev)
// ══════════════════════════════════════════════════════════
async function searchSaavn(query) {
    const loader = document.getElementById('yt-search-loader');
    const songList = document.getElementById('yt-results-list');
    const playlistList = document.getElementById('yt-playlists-list');
    const playlistsGroup = document.getElementById('search-playlists-group');
    
    loader.style.display = 'flex';
    songList.innerHTML = '';
    playlistList.innerHTML = '';
    playlistsGroup.style.display = 'none';

    try {
        const [songsRes, playlistsRes, albumsRes] = await Promise.all([
            fetch(`${SAAVN_API}/search/songs?query=${encodeURIComponent(query)}&limit=15`).then(r => r.ok ? r.json() : null).catch(() => null),
            fetch(`${SAAVN_API}/search/playlists?query=${encodeURIComponent(query)}&limit=10`).then(r => r.ok ? r.json() : null).catch(() => null),
            fetch(`${SAAVN_API}/search/albums?query=${encodeURIComponent(query)}&limit=10`).then(r => r.ok ? r.json() : null).catch(() => null)
        ]);

        // Render Songs
        const songsSuccess = songsRes?.success || songsRes?.status === 'success';
        const songsData = songsRes?.data?.results || songsRes?.data || [];
        if (songsSuccess && songsData.length > 0) {
            renderSaavnResults(songsData);
        } else {
            songList.innerHTML = '<div class="yt-no-results">No songs found on JioSaavn.</div>';
        }

        // Combine Playlists & Albums
        let playlistItems = [];
        if ((playlistsRes?.success || playlistsRes?.status === 'success') && playlistsRes?.data?.results) {
            playlistItems = playlistItems.concat(playlistsRes.data.results.map(p => ({ ...p, type: 'playlist' })));
        }
        if ((albumsRes?.success || albumsRes?.status === 'success') && albumsRes?.data?.results) {
            playlistItems = playlistItems.concat(albumsRes.data.results.map(a => ({ ...a, type: 'album' })));
        }

        if (playlistItems.length > 0) {
            playlistsGroup.style.display = 'block';
            renderSaavnPlaylists(playlistItems);
        }
    } catch (err) {
        console.warn('[VibeBox] Saavn search error:', err);
        songList.innerHTML = '<div class="yt-no-results">⚠ Saavn API unavailable. Try again later.</div>';
    }

    loader.style.display = 'none';
}

function renderSaavnResults(results) {
    const list = document.getElementById('yt-results-list');
    list.innerHTML = '';

    results.forEach(song => {
        if (!song.id) return;

        // Get best quality download URL
        const downloadUrls = song.downloadUrl || [];
        const streamUrl = getBestQuality(downloadUrls);
        if (!streamUrl) return;

        // Get image
        const images = song.image || [];
        const thumb = images.length > 0 ? (images[images.length - 1].link || images[images.length - 1].url || images[0].link || images[0].url || '') : '';

        // Get artist names
        const artists = song.artists?.primary?.map(a => a.name).join(', ') || song.artists?.all?.map(a => a.name).join(', ') || song.primaryArtists || song.singers || 'Unknown';

        // Duration
        const dur = song.duration ? fmtTime(parseInt(song.duration)) : '--:--';

        const alreadyAdded = playlist.some(t => t.id === song.id);
        const card = document.createElement('div');
        card.className = 'yt-result-card';
        card.innerHTML = `
            <img class="yt-result-thumb" src="${thumb}" alt="" onerror="this.style.display='none'">
            <div class="yt-result-info">
                <span class="yt-result-title">${escapeHtml(song.name || 'Unknown')}</span>
                <span class="yt-result-channel">${escapeHtml(artists)}</span>
                <span class="yt-result-dur">${dur} · <span style="color:#1db954;font-weight:600;">JioSaavn</span></span>
            </div>
            <button class="yt-add-btn ${alreadyAdded ? 'added' : ''}" title="${alreadyAdded ? 'Already added' : 'Add & Play'}">
                <i class="fa-solid ${alreadyAdded ? 'fa-check' : 'fa-plus'}"></i>
            </button>
        `;

        const trackData = {
            id: song.id,
            title: song.name || 'Unknown',
            artist: artists,
            duration: dur,
            thumb: thumb,
            streamUrl: streamUrl,
        };

        // Click card → play
        card.addEventListener('click', e => {
            if (e.target.closest('.yt-add-btn')) return;
            addSaavnTrack(trackData, true);
        });

        // Click + → add
        const btn = card.querySelector('.yt-add-btn');
        btn.addEventListener('click', e => {
            e.stopPropagation();
            if (btn.classList.contains('added')) {
                const idx = playlist.findIndex(t => t.id === song.id);
                if (idx >= 0) play(idx);
                return;
            }
            addSaavnTrack(trackData, true);
            btn.classList.add('added');
            btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        });

        list.appendChild(card);
    });
}

function renderSaavnPlaylists(items) {
    const list = document.getElementById('yt-playlists-list');
    list.innerHTML = '';

    items.forEach(item => {
        const id = item.id;
        if (!id) return;

        const images = item.image || [];
        const thumb = images.length > 0 ? (images[images.length - 1].link || images[images.length - 1].url || images[0].link || images[0].url || '') : '';
        const title = item.name || item.title || 'Unknown';
        const sub = item.type === 'album' ? `Album · ${item.artist || item.primaryArtists || ''}` : 'Playlist';

        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `
            <div class="h-card-img" style="position:relative;">
                <img src="${thumb}" alt="" style="width:130px;height:130px;object-fit:cover;border-radius:8px;">
                <div class="playlist-play-overlay">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="h-card-name">${escapeHtml(title)}</div>
            <div class="h-card-sub">${escapeHtml(sub)}</div>
        `;

        card.addEventListener('click', () => {
            loadAndPlaySaavnCollection(id, item.type);
        });

        list.appendChild(card);
    });
}

async function loadAndPlaySaavnCollection(id, type) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = `Loading ${type}...`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('visible'), 50);

    try {
        const endpoint = type === 'album' ? `${SAAVN_API}/albums?id=${id}` : `${SAAVN_API}/playlists?id=${id}`;
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        
        const isSuccess = data.success || data.status === 'success';
        const collection = data.data;
        const songs = collection?.songs || [];
        
        if (isSuccess && songs.length > 0) {
            songs.forEach(song => {
                if (playlist.some(t => t.id === song.id)) return;
                
                const images = song.image || [];
                const thumb = images.length > 0 ? (images[images.length - 1].link || images[images.length - 1].url || images[0].link || images[0].url || '') : '';
                const artists = song.artists?.primary?.map(a => a.name).join(', ') || song.artists?.all?.map(a => a.name).join(', ') || song.primaryArtists || song.singers || 'Unknown';
                const dur = song.duration ? fmtTime(parseInt(song.duration)) : '--:--';
                const streamUrl = getBestQuality(song.downloadUrl);

                playlist.push({
                    id: song.id,
                    title: song.name || 'Unknown',
                    artist: artists,
                    source: 'saavn',
                    duration: dur,
                    thumb: thumb,
                    streamUrl: streamUrl,
                    genre: 'hindi',
                });
            });

            saveCustom();
            renderAll();
            
            const playIdx = playlist.findIndex(t => t.id === songs[0].id);
            if (playIdx >= 0) {
                play(playIdx);
            }
            
            toast.textContent = `Loaded ${songs.length} tracks!`;
        } else {
            toast.textContent = `Empty ${type} or error loading.`;
        }
    } catch (e) {
        console.error('[VibeBox] Failed to load collection:', e);
        toast.textContent = `⚠ Failed to load ${type}.`;
    }

    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

function getBestQuality(downloadUrls) {
    if (!downloadUrls || !downloadUrls.length) return null;
    const order = ['320kbps', '160kbps', '96kbps', '48kbps', '12kbps'];
    for (const q of order) {
        const match = downloadUrls.find(d => d.quality === q);
        if (match && (match.link || match.url)) return match.link || match.url;
    }
    return downloadUrls[downloadUrls.length - 1]?.link || downloadUrls[downloadUrls.length - 1]?.url || null;
}

function addSaavnTrack(data, autoPlay) {
    const exists = playlist.findIndex(t => t.id === data.id);
    if (exists >= 0) { if (autoPlay) play(exists); return; }

    const track = {
        id: data.id,
        title: data.title,
        artist: data.artist,
        source: 'saavn',
        duration: data.duration,
        thumb: data.thumb,
        streamUrl: data.streamUrl,
        genre: 'hindi',
    };

    playlist.push(track);
    saveCustom();
    renderAll();
    if (autoPlay) play(playlist.length - 1);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ══════════════════════════════════════════════════════════
// CANVAS VISUALIZER
// ══════════════════════════════════════════════════════════
function initCanvas() {
    canvas = document.getElementById('visualizer-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        fitCanvas();
    }
    canvas2 = document.getElementById('circular-visualizer-canvas');
    if (canvas2) {
        ctx2 = canvas2.getContext('2d');
        fitCircularCanvas();
    }
    window.addEventListener('resize', () => {
        fitCanvas();
        fitCircularCanvas();
    });
    drawVis();
}

function fitCanvas() {
    if (!canvas) return;
    const p = canvas.parentElement;
    if (p) { canvas.width = p.clientWidth; canvas.height = p.clientHeight; }
}

function fitCircularCanvas() {
    if (!canvas2) return;
    canvas2.width = 280;
    canvas2.height = 280;
}

function drawVis() {
    animFrame = requestAnimationFrame(drawVis);
    const t = Date.now() * 0.003;
    const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#b44aff';
    
    // Draw linear visualizer
    if (ctx && canvas && canvas.width > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const bars = 24;
        const gap = 3;
        const bw = (canvas.width - gap * (bars - 1)) / bars;

        for (let i = 0; i < bars; i++) {
            let h;
            if (isPlaying) {
                const p = (i / bars) * Math.PI * 2;
                const vm = volume / 100;
                
                if (currentEqPreset === 'bass') {
                    h = Math.abs(Math.sin(p * 2 + t) * 24 + Math.cos(p * 5 - t * 1.3) * 12 + Math.sin(p * 8 + t * 2.5) * 6) * vm;
                    if (i < bars / 3) h *= 1.8;
                    else h *= 0.8;
                } else if (currentEqPreset === 'smooth') {
                    h = Math.abs(Math.sin(p * 1.2 + t * 0.7) * 18 + Math.cos(p * 2.5 - t * 0.4) * 8) * vm;
                } else if (currentEqPreset === 'club') {
                    h = Math.abs(Math.sin(p * 2 + t) * 16 + Math.cos(p * 5 - t * 1.3) * 10) * vm;
                    if (i >= bars / 3) {
                        h = Math.abs(Math.sin(p * 4.5 + t * 2.5) * 24 + Math.cos(p * 8 - t * 3.2) * 15) * vm;
                    }
                } else {
                    h = Math.abs(Math.sin(p * 2 + t) * 24 + Math.cos(p * 5 - t * 1.3) * 12 + Math.sin(p * 8 + t * 2.5) * 6) * vm;
                }
                h = Math.max(3, h);
            } else {
                h = Math.sin(i * 0.5 + t * 0.3) * 2 + 3;
            }

            const x = i * (bw + gap);
            const y = canvas.height - h;

            ctx.fillStyle = accent;
            ctx.globalAlpha = 0.5 + (h / canvas.height) * 0.5;
            ctx.beginPath();
            if (ctx.roundRect) ctx.roundRect(x, y, bw, h, [2, 2, 0, 0]);
            else ctx.rect(x, y, bw, h);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    // Draw circular visualizer
    if (ctx2 && canvas2 && canvas2.width > 0) {
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        const cx = 140;
        const cy = 140;
        const r_base = 110;
        
        let pulse = 0;
        if (isPlaying) {
            if (currentEqPreset === 'bass') pulse = Math.abs(Math.sin(t * 5) * 6) * (volume / 100);
            else if (currentEqPreset === 'club') pulse = Math.abs(Math.sin(t * 7) * 4) * (volume / 100);
            else pulse = Math.abs(Math.sin(t * 3.5) * 3) * (volume / 100);
        } else {
            pulse = Math.sin(t * 0.8) * 1.5;
        }

        const totalBars = 60;
        for (let i = 0; i < totalBars; i++) {
            const angle = (i / totalBars) * Math.PI * 2;
            let h = 0;

            if (isPlaying) {
                const vm = volume / 100;
                let val = 0;
                if (currentEqPreset === 'bass') {
                    val = Math.sin(angle * 2 + t * 2) * 15 + Math.cos(angle * 4 - t) * 8;
                    if (i < totalBars / 4 || i > (totalBars * 3) / 4) {
                        val *= 1.6;
                    }
                } else if (currentEqPreset === 'smooth') {
                    val = Math.sin(angle * 1.5 + t) * 10 + Math.cos(angle * 3.5 - t * 0.5) * 5;
                } else if (currentEqPreset === 'club') {
                    val = Math.sin(angle * 4.5 + t * 3) * 16 + Math.cos(angle * 9 - t * 2) * 8;
                } else {
                    val = Math.sin(angle * 3 + t) * 12 + Math.cos(angle * 7 - t * 1.5) * 6;
                }
                h = Math.max(2, Math.abs(val) * vm);
            } else {
                h = Math.max(1, (Math.sin(angle * 3.5 + t) * 2 + 3));
            }

            const x1 = cx + Math.cos(angle) * (r_base + pulse);
            const y1 = cy + Math.sin(angle) * (r_base + pulse);
            const x2 = cx + Math.cos(angle) * (r_base + pulse + h);
            const y2 = cy + Math.sin(angle) * (r_base + pulse + h);

            ctx2.strokeStyle = accent;
            ctx2.lineWidth = 2.5;
            ctx2.lineCap = 'round';
            ctx2.shadowBlur = 6;
            ctx2.shadowColor = accent;
            ctx2.beginPath();
            ctx2.moveTo(x1, y1);
            ctx2.lineTo(x2, y2);
            ctx2.stroke();
        }

        // Draw audio-reactive floating particles
        if (isPlaying) {
            if (visualizerParticles.length < 35 && Math.random() < 0.3) {
                visualizerParticles.push({
                    angle: Math.random() * Math.PI * 2,
                    dist: r_base + pulse,
                    speed: 0.8 + Math.random() * 1.5,
                    size: 1 + Math.random() * 2,
                    alpha: 1
                });
            }
        }

        visualizerParticles.forEach((p, idx) => {
            p.dist += p.speed * (1 + pulse * 0.15);
            p.alpha = Math.max(0, 1 - (p.dist - r_base) / 30);

            ctx2.fillStyle = accent;
            ctx2.globalAlpha = p.alpha;
            ctx2.shadowBlur = 4;
            ctx2.shadowColor = accent;
            ctx2.beginPath();
            ctx2.arc(cx + Math.cos(p.angle) * p.dist, cy + Math.sin(p.angle) * p.dist, p.size, 0, Math.PI * 2);
            ctx2.fill();
        });

        visualizerParticles = visualizerParticles.filter(p => p.alpha > 0 && p.dist <= 140);
        ctx2.globalAlpha = 1;
        ctx2.shadowBlur = 0;
    }
}

// ══════════════════════════════════════════════════════════
    // HELPER FUNCTIONS (Playlists, Local Files, Backups, Lyrics)
    // ══════════════════════════════════════════════════════════
    function showToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('visible'), 50);
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 400);
        }, 2500);
    }

    function renderPlaylists() {
        const row = document.getElementById('playlists-row');
        if (!row) return;
        row.innerHTML = '';
        
        const names = Object.keys(customPlaylists);
        if (names.length === 0) {
            row.innerHTML = '<div style="padding:12px;color:var(--text-muted);font-size:12px;">No playlists yet</div>';
            return;
        }
        
        names.forEach(name => {
            const count = customPlaylists[name].length;
            const card = document.createElement('div');
            card.className = 'playlist-card';
            card.innerHTML = `
                <div class="playlist-thumb">
                    <i class="fa-solid fa-music"></i>
                    <button class="playlist-delete-btn" title="Delete Playlist"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="playlist-name">${escapeHtml(name)}</div>
                <div class="playlist-count">${count} tracks</div>
            `;
            
            card.addEventListener('click', e => {
                if (e.target.closest('.playlist-delete-btn')) {
                    e.stopPropagation();
                    if (confirm(`Delete playlist '${name}'?`)) {
                        delete customPlaylists[name];
                        localStorage.setItem('vb_playlists', JSON.stringify(customPlaylists));
                        renderPlaylists();
                        showToast(`Deleted playlist '${name}'`);
                    }
                    return;
                }
                playPlaylist(name);
            });
            
            row.appendChild(card);
        });
    }

    function playPlaylist(name) {
        const trackIds = customPlaylists[name] || [];
        if (trackIds.length === 0) {
            showToast("Playlist is empty. Add songs first!");
            return;
        }
        const availableIds = trackIds.filter(id => playlist.some(t => t.id === id));
        if (availableIds.length === 0) {
            showToast("No tracks in this playlist are currently available.");
            return;
        }
        
        const firstId = availableIds[0];
        const idx = playlist.findIndex(t => t.id === firstId);
        if (idx >= 0) {
            play(idx);
            showToast(`Playing playlist '${name}'`);
        }
    }

    function openAddToPlaylistModal(trackId) {
        trackIdToAdd = trackId;
        const overlay = document.getElementById('add-playlist-modal-overlay');
        if (!overlay) return;
        overlay.classList.add('open');
        
        const selectList = document.getElementById('playlist-select-list');
        if (!selectList) return;
        selectList.innerHTML = '';
        
        const names = Object.keys(customPlaylists);
        if (names.length === 0) {
            selectList.innerHTML = '<div style="text-align:center;padding:12px;color:var(--text-muted);font-size:12px;">No custom playlists. Create one in the Library view.</div>';
            return;
        }
        
        names.forEach(name => {
            const count = customPlaylists[name].length;
            const item = document.createElement('div');
            item.className = 'playlist-select-item';
            item.innerHTML = `
                <div class="playlist-select-icon"><i class="fa-solid fa-folder"></i></div>
                <div class="playlist-select-info">
                    <span class="playlist-select-name">${escapeHtml(name)}</span>
                    <span class="playlist-select-count">${count} tracks</span>
                </div>
            `;
            item.addEventListener('click', () => {
                if (!customPlaylists[name].includes(trackIdToAdd)) {
                    customPlaylists[name].push(trackIdToAdd);
                    localStorage.setItem('vb_playlists', JSON.stringify(customPlaylists));
                    showToast(`Added to playlist '${name}'`);
                } else {
                    showToast(`Already in playlist '${name}'`);
                }
                overlay.classList.remove('open');
                renderPlaylists();
            });
            selectList.appendChild(item);
        });
    }

    function sanitizeSearchTerm(str) {
        if (!str) return '';
        return str
            .replace(/\(.*?\)/g, '')
            .replace(/\[.*?\]/g, '')
            .replace(/\b(feat|ft|official|video|audio|lyrics|music|full song|hq|hd|screen)\b/gi, '')
            .replace(/[-|/\\_]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    async function fetchLyrics(track) {
        const lyricsContent = document.getElementById('np-lyrics-content');
        if (!lyricsContent) return;
        lyricsContent.innerHTML = '⟳ Loading lyrics...';
        
        // Don't try to query API for local tracks as they won't have matched artist names
        if (track.source === 'local') {
            lyricsContent.innerHTML = '<div style="font-size:12px;color:var(--text-subdued);">Lyrics not available for local audio.</div>';
            return;
        }

        const sanitizedArtist = sanitizeSearchTerm(track.artist);
        const sanitizedTitle = sanitizeSearchTerm(track.title);
        
        try {
            const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(sanitizedArtist)}/${encodeURIComponent(sanitizedTitle)}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error('Lyrics not found');
            const data = await res.json();
            
            if (data.lyrics) {
                const formatted = data.lyrics
                    .replace(/\n\r/g, '<br>')
                    .replace(/\r/g, '<br>')
                    .replace(/\n/g, '<br>');
                lyricsContent.innerHTML = `<div class="lyrics-text" style="font-size:13px;line-height:1.7;font-weight:500;text-align:center;max-height:220px;overflow-y:auto;padding-right:4px;">${formatted}</div>`;
            } else {
                throw new Error('Empty lyrics');
            }
        } catch (e) {
            console.warn('Lyrics fetch failed:', e);
            const query = encodeURIComponent(`${track.artist} ${track.title} lyrics`);
            lyricsContent.innerHTML = `
                <div style="font-size:12px;color:var(--text-subdued);margin-bottom:12px;">Lyrics not found.</div>
                <a href="https://www.google.com/search?q=${query}" target="_blank" class="lyrics-fallback-btn">
                    <i class="fa-solid fa-magnifying-glass"></i> Search Google
                </a>
            `;
        }
    }
