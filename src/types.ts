export type FCProps<T = unknown> = React.FC<
  {
    children?: React.ReactNode;
    className?: string;
  } & T
>;

//TODO: make this accessible everywhere
