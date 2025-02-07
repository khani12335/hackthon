import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "gtq2b2p8",
  dataset: "production",
  apiVersion:"2024-02-07",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skCcGEftffU7MjIfAmEfMdy6WfxyeJb4CXovnlcnoKecHX9TuL8vL4lFSeoZfuS345ovR0V2nPo0a30s4kMr9zoYu3DDsDOtTq06wz4nsfTeka8TuMBqT5rdfYDf6t1pi16pxHeKZRAra4EoVoTZqGb3WOWOAJ0bYluguSkCTN6H9JGZsV0R"
})
