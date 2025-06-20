import correctSound from '/correct.wav';
import wrongSound from '/wrong.wav';

export default function useSound(enabled) {
  const playCorrect = () => {
    if (enabled) {
      const audio = new Audio(correctSound);
      audio.play();
    }
  };

  const playWrong = () => {
    if (enabled) {
      const audio = new Audio(wrongSound);
      audio.play();
    }
  };

  return { playCorrect, playWrong };
}