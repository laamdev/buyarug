export const sitemapQuery = {
  size: 10000,
  query: {
    match_all: {}
  },
  aggs: {
    brands: {
      terms: {
        field: 'brand.enum',
        size: 10000,
        order: {
          _key: 'asc'
        }
      },
      aggs: {
        qweranges: {
          terms: {
            field: 'range.enum',
            size: 10000,
            order: {
              _key: 'asc'
            }
          }
        }
      }
    },
    styles: {
      terms: {
        field: 'style.enum',
        size: 10000,
        order: {
          _key: 'asc'
        }
      }
    }
  }
}
export const allProductsQuery = {
  size: 10000,
  query: {
    match_all: {}
  }
}
export const featuredProductsQuery = {
  size: 10000,
  query: {
    bool: {
      filter: [
        {
          term: {
            featured: true
          }
        }
      ]
    }
  }
}
export const clearanceProductsQuery = {
  size: 10000,
  query: {
    bool: {
      filter: [
        {
          term: {
            clearance: true
          }
        }
      ]
    }
  }
}
export const megaMenuQuery = {
  size: 0,
  aggs: {
    brands: {
      terms: {
        field: 'brand.enum',
        size: 10000,
        order: {
          _key: 'asc'
        }
      },
      aggs: {
        qweranges: {
          terms: {
            field: 'range.enum',
            size: 10000,
            order: {
              _key: 'asc'
            }
          }
        }
      }
    },
    styles: {
      terms: {
        field: 'style.enum',
        size: 10000,
        order: {
          _key: 'asc'
        }
      }
    }
  }
}
export const stylesPathsQuery = {
  size: 10000,
  aggs: {
    styles: {
      terms: {
        field: 'style.enum'
      }
    }
  }
}

export const stylesQuery = (slug: string) => {
  return {
    size: 10000,
    query: {
      term: {
        'style.slug': slug
      }
    }
  }
}

export const brandsQuery = (slug: string) => {
  return {
    size: 10000,
    query: {
      term: {
        'brand.slug': slug
      }
    }
  }
}

export const rangesPathsQuery = () => {
  return {
    size: 0,
    aggs: {
      brands: {
        terms: {
          field: 'brand.enum'
        },
        aggs: {
          qweranges: {
            terms: {
              field: 'range.enum'
            }
          }
        }
      }
    }
  }
}

export const rangesQuery = ({
  brandSlug,
  rangeSlug
}: {
  brandSlug: string
  rangeSlug: string
}) => {
  return {
    query: {
      bool: {
        must: [
          {
            term: {
              'brand.slug': brandSlug
            }
          },
          {
            term: {
              'range.slug': rangeSlug
            }
          }
        ]
      }
    },
    size: 100
  }
}

export const coloursPathsQuery = {
  size: 10000,
  aggs: {
    colors: {
      terms: {
        field: 'color.enum'
      }
    }
  }
}

export const coloursQuery = (slug: string) => {
  return {
    size: 10000,
    query: {
      term: {
        'color.slug': slug
      }
    }
  }
}
