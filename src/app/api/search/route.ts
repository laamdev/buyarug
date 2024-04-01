import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector'
import { NextRequest, NextResponse } from 'next/server'

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

export async function POST(req: NextRequest, res: NextResponse) {
  const { requestState, queryConfig } = await req.json()
  await connector.onSearch(requestState, queryConfig)
  res.json() // Remove the argument from the function call
}
