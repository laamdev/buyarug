interface IProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: IProps) => {
  return (
    <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 lg:text-5xl">
      {children}
    </h2>
  );
};
