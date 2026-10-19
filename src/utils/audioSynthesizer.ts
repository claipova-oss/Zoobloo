/**
 * Web Audio API synthesizer for natural animal soundscapes.
 * Operates without external audio file dependencies.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playAnimalSound(type: 'savanna' | 'rainforest' | 'polar' | 'ocean', onEnd?: () => void) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (type === 'savanna') {
      // Lion / Savanna low chest resonance rumble
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.8);
      osc.frequency.exponentialRampToValueAtTime(35, now + 1.8);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 1.5);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 2.0);

      // Low secondary sub rumble
      const sub = ctx.createOscillator();
      const subGain = ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(40, now);
      sub.frequency.exponentialRampToValueAtTime(30, now + 1.8);
      subGain.gain.setValueAtTime(0.01, now);
      subGain.gain.linearRampToValueAtTime(0.4, now + 0.4);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
      sub.connect(subGain);
      subGain.connect(ctx.destination);
      sub.start(now);
      sub.stop(now + 2.0);

      setTimeout(() => onEnd?.(), 2100);

    } else if (type === 'rainforest') {
      // Canopy Macaw / Songbird vibrant warbles
      const duration = 2.2;
      const notes = [
        { start: 0.1, freqStart: 1800, freqEnd: 2400, dur: 0.25 },
        { start: 0.45, freqStart: 2500, freqEnd: 1900, dur: 0.3 },
        { start: 0.9, freqStart: 2200, freqEnd: 3100, dur: 0.4 },
        { start: 1.45, freqStart: 2900, freqEnd: 2100, dur: 0.35 },
      ];

      notes.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.freqStart, now + n.start);
        osc.frequency.exponentialRampToValueAtTime(n.freqEnd, now + n.start + n.dur);

        gain.gain.setValueAtTime(0.001, now + n.start);
        gain.gain.linearRampToValueAtTime(0.2, now + n.start + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.start + n.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + n.start);
        osc.stop(now + n.start + n.dur);
      });

      setTimeout(() => onEnd?.(), duration * 1000);

    } else if (type === 'polar') {
      // Arctic wind resonance with gentle penguin call chirp
      const bufferSize = ctx.sampleRate * 2.0;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(260, now);
      filter.frequency.linearRampToValueAtTime(420, now + 1.0);
      filter.frequency.linearRampToValueAtTime(240, now + 2.0);
      filter.Q.value = 5.0;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(now);
      whiteNoise.stop(now + 2.0);

      // Penguin harmonic chirp
      const chirp = ctx.createOscillator();
      const chirpGain = ctx.createGain();
      chirp.type = 'square';
      chirp.frequency.setValueAtTime(420, now + 0.6);
      chirp.frequency.exponentialRampToValueAtTime(320, now + 1.2);
      chirpGain.gain.setValueAtTime(0.001, now + 0.6);
      chirpGain.gain.linearRampToValueAtTime(0.08, now + 0.8);
      chirpGain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);

      const chirpFilter = ctx.createBiquadFilter();
      chirpFilter.type = 'lowpass';
      chirpFilter.frequency.value = 800;

      chirp.connect(chirpFilter);
      chirpFilter.connect(chirpGain);
      chirpGain.connect(ctx.destination);
      chirp.start(now + 0.6);
      chirp.stop(now + 1.4);

      setTimeout(() => onEnd?.(), 2100);

    } else if (type === 'ocean') {
      // Gentle ocean swell + dolphin whistle sweep
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now + 0.3);
      osc.frequency.exponentialRampToValueAtTime(2800, now + 0.9);
      osc.frequency.exponentialRampToValueAtTime(1900, now + 1.5);

      gain.gain.setValueAtTime(0.001, now + 0.3);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + 0.3);
      osc.stop(now + 1.7);

      setTimeout(() => onEnd?.(), 1900);
    }
  } catch (err) {
    console.error('Audio playback error', err);
    onEnd?.();
  }
}
