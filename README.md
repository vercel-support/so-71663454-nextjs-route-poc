PoC for https://stackoverflow.com/questions/71663454/how-to-create-an-api-dynamic-route-in-next-js.

```
// /api/[productType]

export default function handler (req, res) {
  const baseUrl ='https://myUrl/phone?$filter'

  const { productType } = req.query
  
  const url = `${baseUrl}=${productType}`
  res.json({ productType, query: req.query, url })
}

```

If you visit the link using https://so-71663454-nextjs-route-poc.vercel-support.app/api/phone=name-eq-'iphone'

You should be able to see the following result:

```
{
  "productType": "phone=name-eq-'iphone'",
  "query": {
    "productType": "phone=name-eq-'iphone'"
  },
  "url": "https://myUrl/phone?$filter=phone=name-eq-'iphone'"
}
```
