import { Card, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import noticias from "../json/news.json"

const ESNews = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    setNews(noticias);
    setIsLoading(false);
  }, []);

  return (
    <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
      <h1 style={{ color: "#FFF", textAlign: "center" }}>Notícias</h1>
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