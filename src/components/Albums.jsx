import { Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material"

const ESAlbums = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/12/Avicii-Logo.png"
          style={{ maxWidth: 50, margin: "0 auto" }}
        />
          Álbuns
        </h1>
      <Grid container style={{ margin: "0 auto" }}>
        <Grid item xs={12} md={4}>
          <Card xs={{ maxWidth: 345 }} style={{ margin: "2rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://upload.wikimedia.org/wikipedia/en/e/e5/Avicii_-_True_%28Album%29.png"
              />
            <CardContent style={{ fontFamily: 'Roboto' }}>
              <Link
                gutterBottom
                variant="h5"
                href="https://open.spotify.com/album/2H6i2CrWgXE1HookLu8Au0"
                underline="none"
                color="inherit"
              >
                True (2013)
              </Link>
              <Typography variant="body2" color="text.secondary">
                Primeiro álbum de sucesso de Avicii
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card xs={{ maxWidth: 345 }} style={{ margin: "2rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://upload.wikimedia.org/wikipedia/pt/e/ea/Avicii_Stories_Capa.jpg"
              />
            <CardContent>
              <Link
                  gutterBottom
                  variant="h5"
                  href="https://open.spotify.com/album/7dqftJ3kas6D0VAdmt3k3V"
                  underline="none"
                  color="inherit"
                >
                  Stories (2015)
                </Link>
              <Typography variant="body2" color="text.secondary">
                Segundo álbum de sucesso de Avicii
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card xs={{ maxWidth: 345 }} style={{ margin: "2rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://upload.wikimedia.org/wikipedia/pt/9/9a/Avicii_-_Tim.png"
              />
            <CardContent>
                <Link
                  gutterBottom
                  variant="h5"
                  href="https://open.spotify.com/album/6Ad1E9vl75ZB3Ir87zwXIJ"
                  underline="none"
                  color="inherit"
                >
                  Tim (2019)
                </Link>
              <Typography variant="body2" color="text.secondary">
                Terceiro álbum de sucesso de Avicii
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default ESAlbums