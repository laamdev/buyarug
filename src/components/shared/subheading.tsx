import { ReactNode } from 'react';

interface IProps {
  id?: string;
  children: ReactNode;
}

export const Subheading = ({ children, id }: IProps) => {
  return (
    <h2
      id={id}
      className="text-2xl font-black uppercase text-stone-900 lg:text-4xl"
    >
      {children}
    </h2>
  );
};
