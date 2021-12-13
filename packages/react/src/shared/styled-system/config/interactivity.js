import system from '../core/system';

const config = {
  appearance: true,
  caretColor: {
    property: 'caretColor',
    scale: 'colors',
  },
  cursor: true,
  pointerEvents: true,
  resize: true,
  userSelect: true,
};

const interactivity = system(config);

export default interactivity;
