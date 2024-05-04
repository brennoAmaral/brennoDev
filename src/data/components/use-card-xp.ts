import { useState } from 'react';

export default function useCardXp() {
  const [showOvelay, setOverlay] = useState<boolean>(false);

  function opacityOverlay() {
    return showOvelay ? 'opacity-100' : 'opacity-0';
  }

  return { showOvelay, setOverlay, opacityOverlay };
}
