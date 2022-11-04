import { Card, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

const ESNews = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(
    () => {
      setIsLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setNews(data)
          setIsLoading(false)
        })
    },
    []
  )

  return (
    <div style={{ maxWidth:"70rem", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Notícias</h1>
      {
        isLoading && <CircularProgress />
      }
      {
        news.map((noticia) => (
          <Card variant="outlined" style={
            {
              marginBottom: "1rem",
              textAlign: "left",
              padding: "1rem",
              borderRadius: "2rem"
            }
            }>
            <div>
              <h2>{noticia.title}</h2>
              <div>{noticia.body}</div>
            </div>
          </Card>
        ))
      }
    </div>
  )
}

export default ESNews