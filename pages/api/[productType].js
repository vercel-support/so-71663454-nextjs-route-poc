export default function handler (req, res) {
  const baseUrl ='https://myUrl/phone?$filter'

  const { productType } = req.query
  
  const url = `${baseUrl}=${productType}`
  res.json({ productType, query: req.query, url })
}
