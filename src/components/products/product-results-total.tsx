interface IProps {
  children: React.ReactNode;
}

export const ProductResultsTotal = ({ children }: IProps) => {
  return <div className="mt-2 text-base font-medium">{children} Products</div>;
};
