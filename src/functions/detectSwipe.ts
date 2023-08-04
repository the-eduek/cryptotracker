export default function detectSwipe(swipeElt: HTMLElement, upHook: () => void, downHook: () => void) : void {
  if (!('ontouchstart' in window)) return;
  
  // variables to track touch coordinates
  let startY: number, distY: number;

  // minimum swipe distance threshold
  const minSwipeDistance : number = 50;

  // event listener for touch start
  function handleTouchStart(event: TouchEvent) {
    event.preventDefault();
    const touch : Touch = event.touches[0];
    distY = 0;
    startY = touch.clientY;
  };

  swipeElt.addEventListener('touchstart', handleTouchStart);

  // event listener for touch move
  function handleTouchMove(event: TouchEvent) {
    event.preventDefault();
    const touch : Touch = event.touches[0];
    distY = touch.clientY - startY;
  };

  swipeElt.addEventListener('touchmove', handleTouchMove);

  // event listener for touch end
  function handleTouchEnd() {
    // check if swipe distance is greater than the minimum threshold
    if (Math.abs(distY) > minSwipeDistance) {
      // negative distance = swipe up, positive distance = swipe down
      distY < 0 ? upHook() : downHook();
    };
  };

  swipeElt.addEventListener('touchend', handleTouchEnd);
};