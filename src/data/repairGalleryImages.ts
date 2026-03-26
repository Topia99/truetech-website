import crackedScreenBefore from '../assets/repair-gallery/cracked-screen-before.svg';
import displayDamageExample from '../assets/repair-gallery/display-damage-example.svg';
import screenRepairInProgress from '../assets/repair-gallery/screen-repair-in-progress.svg';
import finishedScreenAfter from '../assets/repair-gallery/finished-screen-after.svg';

export const repairGalleryImages = [
  {
    src: crackedScreenBefore,
    alt: 'Illustrated example of a cracked iPhone screen before repair',
    caption: 'Cracked screen before repair',
  },
  {
    src: displayDamageExample,
    alt: 'Illustrated example of iPhone display damage with lines and dark spots',
    caption: 'Severe display damage example',
  },
  {
    src: screenRepairInProgress,
    alt: 'Illustrated example of an iPhone screen replacement in progress',
    caption: 'Screen replacement in progress',
  },
  {
    src: finishedScreenAfter,
    alt: 'Illustrated example of a finished iPhone screen after repair',
    caption: 'Finished screen after repair',
  },
] as const;
