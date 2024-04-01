import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const PageTitle = ({ children }: IProps) => {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};
