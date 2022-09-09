import cardObject from "./cards";

const randomCardsArr = (numbCards) => {
  const halfCards = numbCards / 2;
  const arr = [];
  let i = 0,
    j = 0;

  while (i < numbCards) {
    if (j === halfCards) {
      j = 0;
    }
    let random = Math.floor(Math.random() * numbCards);

    if (!arr.some((element) => element.id === random)) {
      arr.push({
        id: random,
        card: cardObject[j],
        bind: j,
        rotate: false,
        valid: 0,
        set: 0,
      });

      i++;
      j++;
    }
  }
  return arr;
};

export default randomCardsArr;
