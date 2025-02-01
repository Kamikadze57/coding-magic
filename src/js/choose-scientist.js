const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const filters = document.querySelectorAll('.choose-scientist__btn');
const boxes = document.querySelectorAll('.choose-scientist__item');
let index = 0;
let num = 0;
let can = false;
let on = true;

filters[0].addEventListener('click', zero);
filters[1].addEventListener('click', one);
filters[2].addEventListener('click', two);
filters[3].addEventListener('click', three);
filters[4].addEventListener('click', four);
filters[5].addEventListener('click', five);
filters[6].addEventListener('click', six);
filters[7].addEventListener('click', seven);
filters[8].addEventListener('click', eight);

function clearBoxes() {
  for (let i of boxes) {
    i.innerHTML = '';
  }
}

function addRotating() {
  for (let i of boxes) {
    i.style.transform = 'scaleX(-1)';
  }
}

function removeRotating() {
  for (let i of boxes) {
    i.style.transform = 'scaleX(1)';
  }
}

function zero(e) {
  if (on) {
    if (can) {
      filters[num].style.color = 'white';
    } else {
      can = true;
    }
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 0;
    on = false;
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        for (let scientist of scientists) {
          if (scientist.born >= 1801 && scientist.born <= 1900) {
            boxes[
              index
            ].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
            index++;
          }
        }
        index = 0;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function one(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 1;
    on = false;
    scientists.sort((a, b) => a.name.localeCompare(b.name));
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        for (let scientist of scientists) {
          boxes[
            index
          ].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
          index++;
        }
        index = 0;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function two(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 2;
    on = false;
    scientists.sort((a, b) => a.dead - a.born - (b.dead - b.born));
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        for (let scientist of scientists) {
          boxes[
            index
          ].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
          index++;
        }
        index = 0;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function three(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 3;
    on = false;
    scientists.sort((a, b) => b.born - a.born);
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        boxes[0].innerHTML = `${scientists[0].name} ${scientists[0].surname} <br> ${scientists[0].born}-${scientists[0].dead}`;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function four(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 4;
    on = false;
    const obj = scientists.find(
      el => el.name === 'Albert' && el.surname === 'Einstein'
    );
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        boxes[0].innerHTML = `${obj.name} ${obj.surname} <br> ${obj.born}-${obj.dead}`;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function five(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 5;
    on = false;
    const objs = scientists.filter(el => el.name[0] === 'S');
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        for (let scientist of objs) {
          boxes[
            index
          ].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
          index++;
        }
        index = 0;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function six(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 6;
    on = false;
    const objs = scientists.filter(el => el.name[0] !== 'A');
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        for (let scientist of objs) {
          boxes[
            index
          ].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
          index++;
        }
        index = 0;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function seven(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 7;
    on = false;
    scientists.sort((a, b) => a.dead - a.born - (b.dead - b.born));
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        boxes[0].innerHTML = `${scientists[0].name} ${scientists[0].surname} <br> ${scientists[0].born}-${scientists[0].dead}`;
        boxes[1].innerHTML = `${scientists[scientists.length - 1].name} ${
          scientists[scientists.length - 1].surname
        } <br> ${scientists[scientists.length - 1].born}-${
          scientists[scientists.length - 1].dead
        }`;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}

function eight(e) {
  if (on) {
    filters[num].style.color = 'white';
    e.currentTarget.style.color = 'rgb(21, 212, 24)';
    num = 8;
    on = false;
    const objs = scientists.filter(el => el.name[0] === el.surname[0]);
    addRotating();
    setTimeout(clearBoxes, 250);
    setTimeout(() => {
      removeRotating();
      setTimeout(() => {
        for (let scientist of objs) {
          boxes[
            index
          ].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
          index++;
        }
        index = 0;
      }, 250);
      setTimeout(() => (on = true), 1000);
    }, 1000);
  }
}
