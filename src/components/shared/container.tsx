import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Container = ({ children }: IProps) => {
  return <div className="mx-auto mt-12 max-w-5xl">{children}</div>;
};
