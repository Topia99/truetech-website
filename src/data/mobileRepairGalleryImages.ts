import deviceInspection from '../assets/mobile-repair-gallery/device-inspection.svg';
import finalTesting from '../assets/mobile-repair-gallery/final-testing.svg';
import mobileRepairSetup from '../assets/mobile-repair-gallery/mobile-repair-setup.svg';
import repairInProgress from '../assets/mobile-repair-gallery/repair-in-progress.svg';

export const mobileRepairGalleryImages = [
  {
    src: mobileRepairSetup,
    alt: 'Illustrated mobile phone repair setup with organized tools and phone service workflow',
    caption: 'Mobile repair setup',
  },
  {
    src: deviceInspection,
    alt: 'Illustrated phone inspection step before mobile repair service begins',
    caption: 'Device inspection before repair',
  },
  {
    src: repairInProgress,
    alt: 'Illustrated onsite phone repair in progress during a mobile service visit',
    caption: 'Repair in progress',
  },
  {
    src: finalTesting,
    alt: 'Illustrated final phone testing after a mobile repair is completed',
    caption: 'Final testing after repair',
  },
] as const;
