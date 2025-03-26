import { useIOStore } from "./store";

type Div = HTMLDivElement | null
type Div2 = HTMLDivElement[] | null;



export const useSlots = () => {
  const SlotSpin = async function (
    slots1: Div,
    slots2: Div,
    slots3: Div,
    announcement: Div
  ) {
    if (!slots1) return;
    if (!slots2) return;
    if (!slots3) return;
  
    const userInput = useIOStore.getState().userInput;
    const slotsA = slots1.querySelectorAll("div") as unknown as HTMLDivElement[]
    const slotsB = slots2.querySelectorAll("div") as unknown as HTMLDivElement[]
    const slotsC = slots3.querySelectorAll("div") as unknown as HTMLDivElement[]
    console.log(slotsA)

    for (let x = 0; x < userInput.betNumber; x++) {
      const multiplier = Odds();
      console.log(multiplier);
      Reset(slotsA, slotsB, slotsC);
      for (let i = 0; i < slotsC.length; i++) {
        slotsA[i].style.animation = "scroll 1s linear forwards infinite";
        slotsB[i].style.animation = "scroll 1.25s linear forwards infinite";
        slotsC[i].style.animation = "scroll 1.5s linear forwards infinite";
      }

      await sleep(5000);
      if (multiplier === 100) {
        result("-9", "-9", "-9", slotsA, slotsB, slotsC);
        wins = wins + userInput.wager * multiplier;
      } else if (multiplier === 45) {
        result("-1", "-1", "-6", slotsA, slotsB, slotsC);
        wins = wins + userInput.wager * multiplier;
      } else if (multiplier === 20) {
        result("-3", "-3", "-7", slotsA, slotsB, slotsC);
        wins = wins + userInput.wager * multiplier;
      } else if (multiplier === 10) {
        result("-4", "-3", "-8", slotsA, slotsB, slotsC);
        wins = wins + userInput.wager * multiplier;
      } else if (multiplier === 2) {
        result("-5", "-6", "-4", slotsA, slotsB, slotsC);
        wins = wins + userInput.wager * multiplier;
      } else if (multiplier === 0) {
        result("-7", "-5", "-9", slotsA, slotsB, slotsC);
        wins = wins + userInput.wager * multiplier;
      }
      await sleep(2000);
      if (x != userInput.betNumber) {
        Reset(slotsA, slotsB, slotsC);
      }
    }
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
    SlotSpin,
  };
};

let wins = 0;

const sleep = function (time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const result = async function (
  a: string,
  b: string,
  c: string,
  slots1: Div2,
  slots2: Div2,
  slots3: Div2
) {
    if (!slots1) return;
    if (!slots2) return;
    if (!slots3) return;
  for (let i = 0; i < slots1.length; i++) {
    slots1[i].style.setProperty("--slot", "9");
    slots1[i].style.setProperty("--slot", a);
    slots1[i].style.animation = "scroll 2s 1s forwards ";
  }

  await sleep(500);
  for (let i = 0; i < slots2.length; i++) {
    slots2[i].style.setProperty("--slot", "9");
    slots2[i].style.setProperty("--slot", b);
    slots2[i].style.animation = "scroll 2s 1.5s forwards ";
  }

  await sleep(500);
  for (let i = 0; i < slots3.length; i++) {
    slots3[i].style.setProperty("--slot", "9");
    slots3[i].style.setProperty("--slot", c);
    slots3[i].style.animation = "scroll 2s 2s forwards ";
  }
};

const Odds = function () {
  const RNG = Math.floor(Math.random() * 100);

  if (RNG <= 2) {
    console.log(`x100 ${RNG}`);
    return (100);
  } else if (RNG >= 6 && RNG <= 12) {
    console.log(`x45 ${RNG}`);
    return (45);
  } else if (RNG >= 16 && RNG <= 28) {
    console.log(`x20 ${RNG}`);
    return (20);
  } else if (RNG >= 31 && RNG <= 45) {
    console.log(`x10 ${RNG}`);
    return (10);
  } else if (RNG >= 51 && RNG <= 75) {
    console.log(`x2 ${RNG}`);
    return (2);
  } else {
    console.log("you lost");
    return (0);
  }
 
};
  
const Reset = function (slotsA:Div2, slotsB: Div2, slotsC: Div2): void {
    if (!slotsA) return;
    if (!slotsB) return;
    if (!slotsC) return;
  for (let i = 0; i < slotsA.length; i++) {

    slotsA[i].style.setProperty("--slot", "-9");
  }
  for (let i = 0; i < slotsB.length; i++) {
    slotsB[i].style.setProperty("--slot", "-9");
  }

  for (let i = 0; i < slotsC.length; i++) {
    slotsC[i].style.setProperty("--slot", "-9");
  }
};
