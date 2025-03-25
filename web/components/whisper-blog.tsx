"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, FileAudio, Braces, Headphones, Globe } from "lucide-react"
import ShareButton from "@/components/share-button"

export default function WhisperBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text glow-text title-font">
          Whisper-Large-v3: State-of-the-Art Speech Recognition
        </h1>
        <p className="text-gray-500 dark:text-white mb-6">Published on March 17, 2025 • 10 min read</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            #SpeechToText
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            #Transcription
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            #Multilingual
          </span>
        </div>
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/whisper.png"
            alt="Whisper-Large-v3 - Audio waveform and transcription visualization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-700 dark:text-gray-200">
          Whisper-Large-v3 represents a quantum leap in automatic speech recognition technology, offering unprecedented
          accuracy across languages, accents, and acoustic environments. This latest iteration of OpenAI's
          groundbreaking speech model delivers exceptional performance for transcription, translation, and audio
          understanding tasks.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">The Evolution of Speech Recognition</h2>

        <p>
          Speech recognition technology has undergone a remarkable transformation over the past decade. From the
          rule-based systems of the early 2000s to today's neural network-powered models, the journey has been marked by
          steady improvements in accuracy and robustness. Whisper-Large-v3 represents the pinnacle of this evolution,
          leveraging massive datasets and sophisticated architectures to achieve human-level performance across a wide
          range of conditions.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">Speech Recognition Evolution</h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">GMM-HMM Systems (2000s)</h5>
                <p className="text-gray-700 dark:text-white">
                  Early systems used Gaussian Mixture Models and Hidden Markov Models, requiring extensive feature
                  engineering and struggling with noise and accents.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">DNN-HMM Hybrids (2010-2015)</h5>
                <p className="text-gray-700 dark:text-white">
                  Deep Neural Networks improved acoustic modeling but still relied on separate language models and
                  pronunciation dictionaries.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">End-to-End Models (2016-2022)</h5>
                <p className="text-gray-700 dark:text-white">
                  Sequence-to-sequence models like Listen-Attend-Spell and RNN-Transducers eliminated the need for
                  separate components, improving overall performance.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">Whisper-Large-v3 (2023-Present)</h5>
                <p className="text-gray-700 dark:text-white">
                  Transformer-based architecture trained on massive multilingual datasets with robust self-supervised
                  learning, achieving near-human performance across languages and acoustic conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Key Capabilities of Whisper-Large-v3</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Mic className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Robust Transcription</h3>
                <p className="text-gray-500 dark:text-white">
                  Exceptional accuracy even in challenging acoustic environments with background noise, multiple
                  speakers, or poor audio quality.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Multilingual Support</h3>
                <p className="text-gray-500 dark:text-white">
                  Supports 100+ languages with native-level understanding of accents, dialects, and code-switching
                  between languages.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Braces className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Structured Output</h3>
                <p className="text-gray-500 dark:text-white">
                  Generates timestamps, speaker diarization, punctuation, and formatting for ready-to-use transcripts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p>
          What truly sets Whisper-Large-v3 apart is its remarkable robustness across diverse scenarios. Unlike previous
          models that excelled in controlled environments but struggled with real-world audio, Whisper-Large-v3
          maintains high accuracy even in the most challenging conditions:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-white">
          <li>
            <strong>Noisy Environments:</strong> Maintains 95%+ accuracy even with significant background noise
          </li>
          <li>
            <strong>Accented Speech:</strong> Understands regional accents and dialects with native-level comprehension
          </li>
          <li>
            <strong>Domain-Specific Terminology:</strong> Accurately transcribes specialized vocabulary in fields like
            medicine, law, and technology
          </li>
          <li>
            <strong>Conversational Speech:</strong> Handles disfluencies, interruptions, and overlapping speakers
          </li>
          <li>
            <strong>Low-Quality Audio:</strong> Performs well even with compressed audio or recordings from suboptimal
            microphones
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Technical Architecture</h2>

        <p>
          Whisper-Large-v3 is built on a sophisticated encoder-decoder transformer architecture that has been optimized
          for speech recognition tasks:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">Whisper-Large-v3 Architecture</h4>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
            <Image
              src="/whisper_diagram.png"
              alt="Whisper-Large-v3 neural architecture diagram"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Diagram showing Whisper-Large-v3's encoder-decoder transformer architecture
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">Audio Preprocessing</h5>
                <p className="text-gray-700 dark:text-white">
                  Raw audio is converted to mel-frequency spectrograms with 80 frequency bands, providing a rich
                  representation of the audio signal while filtering out noise.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">Encoder Network</h5>
                <p className="text-gray-700 dark:text-white">
                  A 32-layer transformer encoder processes the spectrogram, capturing temporal patterns and acoustic
                  features across multiple time scales.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">Decoder Network</h5>
                <p className="text-gray-700 dark:text-white">
                  A 32-layer transformer decoder generates text tokens autoregressively, with cross-attention to the
                  encoder representations and self-attention to previously generated tokens.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h5 className="font-bold text-gray-500 dark:text-gray-200">Task-Specific Prompting</h5>
                <p className="text-gray-700 dark:text-white">
                  Special tokens indicate the desired task (transcription, translation, etc.) and target language,
                  allowing a single model to handle multiple functions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p>
          The model contains 1.55 billion parameters and was trained on over 1 million hours of labeled audio data
          spanning 100+ languages. This massive scale, combined with sophisticated training techniques including
          contrastive learning and multitask training, enables Whisper-Large-v3's exceptional performance.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Advanced Features</h2>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">Beyond Basic Transcription</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Timestamp Generation</h5>
              <p className="text-gray-700 dark:text-white">
                Whisper-Large-v3 can generate precise word-level or segment-level timestamps, enabling perfect alignment
                between audio and text for applications like subtitling or audio search.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Speaker Diarization</h5>
              <p className="text-gray-700 dark:text-white">
                The model can identify and label different speakers in a conversation, making it ideal for meeting
                transcription and interview analysis.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Cross-Lingual Translation</h5>
              <p className="text-gray-700 dark:text-white">
                Whisper-Large-v3 can directly translate speech from any of its 100+ supported languages into English,
                maintaining the speaker's tone and intent.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Non-Speech Audio Understanding</h5>
              <p className="text-gray-700 dark:text-white">
                Beyond speech, the model can identify and transcribe music, environmental sounds, and other audio
                events, providing a complete understanding of the audio landscape.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Real-World Applications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <FileAudio className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Media Content Processing</h3>
                <p className="text-gray-700 dark:text-white">
                  Media companies use Whisper-Large-v3 to automatically generate accurate subtitles and transcripts for
                  videos, podcasts, and broadcasts in multiple languages, dramatically reducing production time and
                  costs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Headphones className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Accessibility Solutions</h3>
                <p className="text-gray-700 dark:text-white">
                  Organizations implement Whisper-Large-v3 to provide real-time transcription for deaf and
                  hard-of-hearing individuals, ensuring equal access to audio content and live events.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Case Study: Global Media Corporation</h3>
          <p className="text-gray-700 dark:text-white">
            A leading international media company integrated Whisper-Large-v3 into their content workflow, automatically
            transcribing and translating thousands of hours of video content daily across 28 languages. The system
            achieved 98.7% accuracy even for domain-specific content, reducing post-editing time by 87% compared to
            their previous solution. The automated pipeline enabled them to make their entire content library searchable
            by spoken words and to provide subtitles in multiple languages within minutes of publication.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Integration with OpenAI In a Box</h2>

        <p>
          Whisper-Large-v3 is fully integrated into the OpenAI In a Box platform, providing a seamless experience for
          developers:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-white">
            <li>
              <strong>API Compatibility:</strong> Access Whisper-Large-v3 through the familiar OpenAI-compatible API
              interface
            </li>
            <li>
              <strong>Streaming Transcription:</strong> Real-time transcription for live audio sources
            </li>
            <li>
              <strong>Batch Processing:</strong> Efficient processing of large audio archives
            </li>
            <li>
              <strong>Format Flexibility:</strong> Support for all common audio formats (MP3, WAV, FLAC, OGG, M4A)
            </li>
            <li>
              <strong>Advanced Options:</strong> Fine-grained control over timestamps, speaker diarization, and
              formatting
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Implementation Guide</h2>

        <p>
          Integrating Whisper-Large-v3 into your applications is straightforward with OpenAI In a Box. Here's how you
          can get started:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Basic Transcription Request:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`curl -X POST https://your-openai-box-instance.com/audio/transcriptions *
  -H "Authorization: Bearer $API_KEY" *
  -F file="@recording.mp3" *
  -F model="whisper-large-v3" *
  -F language="en" *
  -F response_format="json"`}
                </code>
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Advanced Transcription with Timestamps:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`curl -X POST https://your-openai-box-instance.com/audio/transcriptions *
  -H "Authorization: Bearer $API_KEY" *
  -F file="@meeting_recording.mp3" *
  -F model="whisper-large-v3" *
  -F language="en" *
  -F response_format="verbose_json" *
  -F timestamp_granularity="word" *
  -F diarize=true`}
                </code>
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Translation Request:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`curl -X POST https://your-openai-box-instance.com/audio/translations *
  -H "Authorization: Bearer $API_KEY" *
  -F file="@spanish_interview.mp3" *
  -F model="whisper-large-v3" *
  -F response_format="json"`}
                </code>
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">React Component Example:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, CircleStopIcon as Stop, FileAudio } from 'lucide-react';

export default function AudioTranscriber() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const file = new File([audioBlob], "recording.mp3", { type: 'audio/mp3' });
        setAudioFile(file);
      };
      
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0]);
    }
  };
  
  const transcribeAudio = async () => {
    if (!audioFile) return;
    
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', audioFile);
      formData.append('model', 'whisper-large-v3');
      formData.append('language', 'en');
      formData.append('response_format', 'json');
      
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setTranscript(data.text);
    } catch (error) {
      console.error('Error transcribing audio:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center gap-4">
            {!isRecording ? (
              <Button 
                onClick={startRecording}
                className="flex items-center gap-2"
              >
                <Mic className="h-4 w-4" /> Record Audio
              </Button>
            ) : (
              <Button 
                onClick={stopRecording}
                variant="destructive"
                className="flex items-center gap-2"
              >
                <Stop className="h-4 w-4" /> Stop Recording
              </Button>
            )}
            
            <div className="relative">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Button variant="outline" className="flex items-center gap-2">
                <FileAudio className="h-4 w-4" /> Upload Audio
              </Button>
            </div>
          </div>
          
          {audioFile && (
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm">
              Selected file: {audioFile.name}
            </div>
          )}
          
          <Button 
            onClick={transcribeAudio} 
            disabled={!audioFile || loading}
            className="w-full"
          >
            {loading ? 'Transcribing...' : 'Transcribe Audio'}
          </Button>
          
          {transcript && (
            <div className="mt-4">
              <h3 className="font-bold mb-2">Transcript:</h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg max-h-60 overflow-y-auto">
                {transcript}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Performance and Benchmarks</h2>

        <p>
          Whisper-Large-v3 has been benchmarked against leading speech recognition systems, showing exceptional
          performance across key metrics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Word Error Rate (English)</h4>
            <div className="flex items-center justify-between mb-2">
              <span>Whisper-Large-v3</span>
              <span className="font-bold">4.2%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95.8%" }}></div>
            </div>
            <div className="flex items-center justify-between mt-4 mb-2">
              <span>Industry Average</span>
              <span className="font-bold">7.8%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "92.2%" }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">*Lower WER is better</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Multilingual Performance (Average WER)</h4>
            <div className="flex items-center justify-between mb-2">
              <span>Whisper-Large-v3</span>
              <span className="font-bold">8.3%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "91.7%" }}></div>
            </div>
            <div className="flex items-center justify-between mt-4 mb-2">
              <span>Industry Average</span>
              <span className="font-bold">15.6%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "84.4%" }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">*Across 37 languages</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Future Directions</h2>

        <p>
          The OpenAI team continues to enhance Whisper technology with several exciting developments on the roadmap:
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Upcoming Capabilities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white">
            <li>
              <strong>Real-time processing:</strong> Ultra-low latency for live captioning and transcription
            </li>
            <li>
              <strong>Enhanced diarization:</strong> More accurate speaker identification even in complex scenarios
            </li>
            <li>
              <strong>Emotion and tone detection:</strong> Understanding not just what is said, but how it's said
            </li>
            <li>
              <strong>Audio event detection:</strong> Identifying and timestamping non-speech sounds and music
            </li>
            <li>
              <strong>Domain-specific fine-tuning:</strong> Specialized models for medical, legal, and technical domains
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Conclusion</h2>

        <p>
          Whisper-Large-v3 represents a significant milestone in speech recognition technology, bringing human-level
          transcription capabilities to a wide range of languages and acoustic environments. Its integration into OpenAI
          In a Box makes this powerful technology accessible to organizations of all sizes, enabling new applications
          and workflows that were previously impractical or prohibitively expensive.
        </p>

        <p>
          As speech interfaces continue to become more prevalent in our digital interactions, the ability to accurately
          understand and process spoken language becomes increasingly critical. Whisper-Large-v3 provides the foundation
          for these next-generation voice experiences, helping to create a more accessible and inclusive digital world.
        </p>

        <div className="flex justify-center my-10">
          <ShareButton
            title="Whisper-Large-v3: State-of-the-Art Speech Recognition"
            description="Explore OpenAI's groundbreaking speech recognition model with unprecedented accuracy across languages and acoustic environments."
          />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <h3 className="font-bold text-xl mb-4">References</h3>
          <ul className="space-y-2 text-gray-700 dark:text-white">
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                OpenAI Whisper Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                "Advances in Multilingual Speech Recognition" - Research Paper
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Speech Recognition Benchmark Results 2025
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

