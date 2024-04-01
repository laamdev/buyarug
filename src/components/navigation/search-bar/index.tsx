import { SearchBox, SearchProvider } from '@elastic/react-search-ui'

import { AutocompleteView } from '@/components/navigation/search-bar/auto-complete-view'
import { InputView } from '@/components/navigation/search-bar/input-view'
import { searchBarConfig } from '@/lib/elasticSearch/searchBarConfig'

export const SearchBar = () => {
  return (
    <SearchProvider config={searchBarConfig}>
      <SearchBox
        autocompleteResults={{
          titleField: 'product_name',
          urlField: ''
        }}
        inputView={InputView}
        // @ts-expect-error
        autocompleteView={AutocompleteView}
      />
    </SearchProvider>
  )
}
