import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector'
import { NextRequest } from 'next/server'

const apiKey = process.env.ESS_CLOUD_API_KEY
const id = process.env.ESS_CLOUD_ID!
const index = process.env.ESS_CLOUD_INDEX!

const connector = new ElasticsearchAPIConnector({
  apiKey,
  cloud: {
    id
  },
  index
})

export async function POST(req: NextRequest) {
  const { requestState, queryConfig } = await req.json()

  const response = await connector.onAutocomplete(requestState, queryConfig)

  return Response.json(response)
}
