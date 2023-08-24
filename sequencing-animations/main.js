const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// shorthand function for calling animation
function animateAlice(alice) {
  return alice.animate(aliceTumbling, aliceTiming);
}

// Callback hell version
function animationCallback() {
  const promise1 = animateAlice(alice1).finished;

  promise1.then(() => {
    const promise2 = animateAlice(alice2).finished;
    promise2.then(() => {
      animateAlice(alice3);
    });
  });
}

//animationCallback();

// Promise chain version
function animationChain() {
  animateAlice(alice1).finished.then(() => {
    animateAlice(alice2).finished.then(() => {
      animateAlice(alice3);
    });
  });
}

//animationChain();

async function asyncAnimation(alice) {
  try {
    const finished = await animateAlice(alice).finished;
    return finished;
  } catch (error) {
    console.error(`Could not animate: ${error}`);
  }
}

// async / await version
asyncAnimation(alice1).then(() => {
  asyncAnimation(alice2).then(() => {
    asyncAnimation(alice3);
  });
});
