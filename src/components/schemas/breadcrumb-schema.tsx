import { BreadcrumbJsonLd } from 'next-seo';

import { BASE_URL } from '@/utils/constants';

interface IBreadcrumb {
  breadcrumb: string;
  href: string;
}
interface IProps {
  breadcrumbData: IBreadcrumb[];
}

export const BreadcrumbSchema = ({ breadcrumbData }: IProps) => {
  const schemaData = breadcrumbData.map((item, idx) => ({
    position: idx,
    name: item.breadcrumb.split('-').join(' '),
    item: `${BASE_URL}${item.href}`,
  }));

  return <BreadcrumbJsonLd itemListElements={schemaData} />;
};
