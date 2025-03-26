import { useIOStore } from "./store";
import { Ecoin } from "./types";
type Div = HTMLDivElement | null;

export const useCoinFlip = () => {
  const setSide = useIOStore((state) => state.setSide);
  const userInput = useIOStore((state) => state.userInput);
  const setWins = useIOStore((state) => state.setWins);
  let wins = 0;

  const FlipCoin = async function (cardComponent: Div, announcement: Div) {
    if (!cardComponent) return;

    if (userInput.face === null || userInput.wager === null) {
      console.log("please select stuff");
      return;
    }
    for (let i = 1; i <= userInput.betNumber; i++) {
      const RNG = Math.floor(Math.random() * 2) + 1; //the odds for the game 50/50
      console.log(RNG);
      if (userInput.face === Ecoin.Heads && RNG == 1) {
        cardComponent.style.animationName = Ecoin.Heads;
        console.log(`you won ${userInput.wager * 2}`);
        wins = wins + userInput.wager * 2;
        setSide(Ecoin.Heads);
      } else if (userInput.face === Ecoin.Tails && RNG == 2) {
        cardComponent.style.animationName = Ecoin.Tails;
        console.log(`you won ${userInput.wager * 2}`);
        wins = wins + userInput.wager * 2;
        setSide(Ecoin.Tails);
      } else if (userInput.face === Ecoin.Heads && RNG == 2) {
        cardComponent.style.animationName = Ecoin.Tails;
        console.log("you lost to tails");
        setSide(Ecoin.Tails);
      } else if (userInput.face === Ecoin.Tails && RNG == 1) {
        cardComponent.style.animationName = Ecoin.Heads;
        console.log("you lost to heads");
        setSide(Ecoin.Heads);
      }

      await sleep(4000);
      cardComponent.style.animationName = "static"; //resets the animation
      await sleep(50);
    }
    setWins(wins);
    if (!announcement) return
    if (wins != 0) {
      console.log(`congrats, you won ${wins}`);
      announcement.innerHTML = `congrats, you won $${wins}`;
    } else {
      console.log("better luck next time");
      announcement.innerHTML = `you lost, better luck next time`;
    }
  };
  return {
    FlipCoin,
  };
};

const sleep = function (time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
