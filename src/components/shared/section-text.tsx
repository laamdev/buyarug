interface IProps {
  children: React.ReactNode;
}

export const SectionText = ({ children }: IProps) => {
  return <p className="mt-4 text-lg text-stone-700 lg:text-xl">{children}</p>;
};
