import Connector from '@/services/APIConnector';

// @ts-expect-error
const connector = new Connector({});

export const searchBarConfig = {
  apiConnector: connector,
  alwaysSearchOnInitialLoad: false,
  trackUrlState: false,
  autocompleteQuery: {
    results: {
      resultsPerPage: 10,
      result_fields: {
        // specify the fields you want from the index to display the results
        product_name: { snippet: { size: 100, fallback: true } },
        model: { snippet: { size: 100, fallback: true } },
        brand: { snippet: { size: 100, fallback: true } },
        range: { snippet: { size: 100, fallback: true } },
        slug: { raw: {} },
        images: { raw: {} },
      },
      search_fields: {
        // specify the fields you want to search on
        product_name: {},
        model: {},
        brand: {},
        range: {},
      },
    },
    suggestions: {
      types: {
        documents: {
          fields: ['product_name', 'model'],
        },
      },
      size: 5,
    },
  },
};
