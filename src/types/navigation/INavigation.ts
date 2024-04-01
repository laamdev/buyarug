import { ICategory } from '@/types/navigation/ICategory'
import { IPage } from '@/types/navigation/IPage'

export interface INavigation {
  categories: ICategory[]
  pages: IPage[]
}
