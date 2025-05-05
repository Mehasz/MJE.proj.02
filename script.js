import { MusicTools } from "./MusicTools.js";

let midiInput = document.getElementById("midiInput");
let freqInput = document.getElementById("freqInput");
let dbfsInput = document.getElementById("dbfsInput");
let linearInput = document.getElementById("linearInput");
let freqResult = document.getElementById("freqResult");
let midiResult = document.getElementById("midiResult");
let linearResult = document.getElementById("linearResult");
let dbfsResult = document.getElementById("dbfsResult");

document.getElementById("midiToFreq").addEventListener("click", function () {
  const midi = parseFloat(midiInput.value);
  const freq = MusicTools.midiPitchToFrequency(midi);
  freqResult.textContent = `${freq}`;
});
document.getElementById("freqToMidi").addEventListener("click", function () {
  const freq = parseFloat(freqInput.value);
  const midi = MusicTools.frequencyToMidiPitch(freq);
  midiResult.textContent = `${midi}`;
});
document.getElementById("dbfsToLinear").addEventListener("click", function () {
  const dbfs = parseFloat(dbfsInput.value);
  const linear = MusicTools.dbfsToLinearAmplitude(dbfs);
  linearResult.textContent = `${linear}`;
});
document.getElementById("linearToDbfs").addEventListener("click", function () {
  const linear = parseFloat(linearInput.value);
  const dbfs = MusicTools.linearAmplitudeTodBfs(linear);
  dbfsResult.textContent = `${dbfs}`;
});
