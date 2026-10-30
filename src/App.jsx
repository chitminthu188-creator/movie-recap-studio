
import { useState } from 'react'
import './App.css'

function App() {
  const [source, setSource] = useState('upload')
  const [video, setVideo] = useState(null)
  const [videoLink, setVideoLink] = useState('')
  const [message, setMessage] = useState('Ready to start')

  const handleStart = () => {
    if (!video && !videoLink.trim()) {
      setMessage('Please upload a video or enter a link.')
      return
    }
    setMessage('Frontend ready. AI workflow connection is the next step.')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="brand-icon">🎬</div>
          <div>
            <h2>Movie Recap Studio</h2>
            <span>AI Automatic Video Creator</span>
          </div>
        </div>
        <div className="header-status">
          <span className="status-dot"></span> System Ready
        </div>
      </header>

      <main className="main">
        <section className="welcome">
          <span className="eyebrow">AI VIDEO WORKFLOW</span>
          <h1>Create Movie Recaps<br />
            <span>Automatically.</span>
          </h1>
          <p>Upload your video, generate Burmese narration,
            subtitles and create your final video.</p>
        </section>

        <section className="panel">
          <div className="section-heading">
            <div>
              <span className="step-number">01</span>
              <h2>Video Source</h2>
            </div>
            <span className="small-label">CHOOSE SOURCE</span>
          </div>

          <div className="source-tabs">
            {[
              ['upload', '📁', 'Upload Video'],
              ['youtube', '▶', 'YouTube'],
              ['tiktok', '♪', 'TikTok'],
              ['link', '🔗', 'Web Link']
            ].map(([id, icon, label]) => (
              <button
                key={id}
                className={`source-tab ${source === id ? 'active' : ''}`}
                onClick={() => setSource(id)}
              >
                <span>{icon}</span>{label}
              </button>
            ))}
          </div>

          {source === 'upload' ? (
            <label className="upload-area">
              <input
                type="file"
                accept="video/*,audio/*"
                hidden
                onChange={(e) => setVideo(e.target.files[0])}
              />
              <div className="upload-icon">⬆</div>
              <h3>{video ? video.name : 'Drop your video here'}</h3>
              <p>{video ? 'File selected successfully' : 'or click to browse files'}</p>
              <span className="file-types">MP4 · MOV · MP3 · WAV</span>
            </label>
          ) : (
            <div className="link-area">
              <label>Paste your {source === 'youtube' ? 'YouTube' : source === 'tiktok' ? 'TikTok' : 'video'} URL</label>
              <input
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                placeholder="https://..."
              />
            </div>
          )}
        </section>

        <section className="panel">
          <div className="section-heading">
            <div>
              <span className="step-number">02</span>
              <h2>AI Recap Settings</h2>
            </div>
          </div>

          <div className="settings-grid">
            <div className="setting">
              <label>Output Language</label>
              <div className="setting-value">🇲🇲 Myanmar (Burmese)</div>
            </div>
            <div className="setting">
              <label>Voice Selection</label>
              <div className="setting-value">Male / Female</div>
            </div>
            <div className="setting">
              <label>Video Ratio</label>
              <div className="setting-value">Original Ratio</div>
            </div>
            <div className="setting">
              <label>Subtitle Timing</label>
              <div className="setting-value">Preserve Timestamps</div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="section-heading">
            <div>
              <span className="step-number">03</span>
              <h2>Automatic Workflow</h2>
            </div>
          </div>

          <div className="workflow">
            {[
              ['01', 'Extract Transcript', 'Original speech recognition'],
              ['02', 'Myanmar Translation', 'Accurate Burmese subtitles'],
              ['03', 'Generate Voice Over', 'AI Burmese narration'],
              ['04', 'Video Processing', 'Blur, music and watermark'],
              ['05', 'Export MP4', 'Preview and download']
            ].map(([number, title, description]) => (
              <div className="workflow-item" key={number}>
                <span className="workflow-number">{number}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
                <span className="waiting">Waiting</span>
              </div>
            ))}
          </div>

          <button className="start-button" onClick={handleStart}>
            ✨ Start Automatic Recap
          </button>
          <p className="message">{message}</p>
        </section>

        <footer>
          <span>Movie Recap Studio</span>
          <span>AI Powered Video Creation</span>
        </footer>
      </main>
    </div>
  )
}

export default App
