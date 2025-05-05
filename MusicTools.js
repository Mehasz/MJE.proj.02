export const MusicTools = {
  midiPitchToFrequency(midiNote) {
    return 440 * Math.pow(2, (midiNote - 69) / 12);
  },
  frequencyToMidiPitch(frequency) {
    return 69 + 12 * Math.log2(frequency / 440);
  },
  dbfsToLinearAmplitude(dBfs) {
    return Math.pow(10, dBfs / 20);
  },
  linearAmplitudeTodBfs(amp) {
    return 20 * Math.log10(amp);
  },
};
