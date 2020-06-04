export const ShuffleIcon = () => {
  return (
    <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
      <polyline points="0,35 0,25 30,25 30,10 60,30 30,50 30,35 " transform="translate(20, 0)"></polyline>
      <polyline points="0,35 0,25 30,25 30,10 60,30 30,50 30,35 " transform="rotate(180)translate(-75, -100)"></polyline>
    </svg>
  );
};

export const PlayButtonSvg = (
  <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
    <polyline points="10, 20 110, 60 10, 100 10, 20" transform="scale(0.9)" />
  </svg>
);

export const ExitIcon = () => {
  return (
    <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="0" y="10" width="15" height="80" transform="rotate(-40)translate(0, 20)"></rect>
      <rect x="0" y="10" width="15" height="80" transform="rotate(40)translate(60, -45)"></rect>
    </svg>
  );
};

export const AddButtonSvg = () => {
  return (
    <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="37" y="10" width="25" height="80"></rect>
      <rect x="10" y="40" width="80" height="25"></rect>
    </svg>
  );
};
