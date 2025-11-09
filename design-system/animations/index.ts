/**
 * Design System - Animation Utilities
 * Reusable animation classes and keyframes
 */

export const animations = {
  // Fade animations
  fadeIn: 'animate-fadeIn',
  fadeOut: 'animate-fadeOut',
  
  // Slide animations
  slideIn: 'animate-slideIn',
  slideInLeft: 'animate-slideInLeft',
  slideInRight: 'animate-slideInRight',
  
  // Scale animations
  scaleIn: 'animate-scaleIn',
  scaleOut: 'animate-scaleOut',
  
  // Transition durations
  duration: {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
  },
  
  // Easing functions
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

export const keyframes = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  
  .animate-fadeOut {
    animation: fadeOut 0.3s ease-out;
  }
  
  .animate-slideIn {
    animation: slideIn 0.5s ease-out;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.5s ease-out;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.5s ease-out;
  }
  
  .animate-scaleIn {
    animation: scaleIn 0.3s ease-out;
  }
  
  .animate-scaleOut {
    animation: scaleOut 0.3s ease-out;
  }
`;
