import { Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material"

const ESAlbums = () => {
  return (
    <div>
      <h1 style={{ color: "#FFF", textAlign: "center" }}>
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
                1.	"Wake Me Up"  	Tim Bergling, Ash Pournouri, Aloe Blacc, Mike Einziger	Avicii, Pournouri[a]<br/>
                2.	"You Make Me"  	Bergling, Pournouri, Salem Al Fakir, Vincent Pontare<br/>
                3.	"Hey Brother"  	Bergling, Pournouri, Pontare, Al Fakir<br/>
                4.	"Addicted to You"  	Bergling, Pournouri, Mac Davis, Josh Kratchic<br/>
                5.	"Dear Boy"  	Bergling, Pournouri, Jonas Knutsson, MØ<br/>
                6.	"Liar Liar"  	Bergling, Pournouri, Blacc, Einziger, Blondfire, Dreyer<br/>
                7.	"Shame on Me"  	Bergling, Pournouri, Nile Rodgers<br/>
                8.	"Lay Me Down"  	Bergling, Pournouri, Rodgers, Adam Lambert<br/>
                9.	"Hope There's Someone"  	Bergling, Pournouri<br/>
                10.	"Heart Upon My Sleeve"  	Bergling, Pournouri, Imagine Dragons<br/>
                11.	"Long Road to Hell"  	Bergling, Pournouri, Audra Mae, Alex Seaver<br/>
                12.	"Edom"  	Bergling, Pournouri<br/>
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
                1.	"Waiting for Love"<br/>
                2.	"Talk to Myself"<br/>
                3.	"Touch Me"<br/>
                4.	"Ten More Days"<br/>
                5.	"For a Better Day"<br/>
                6.	"Broken Arrows"<br/>
                7.	"True Believer"<br/>
                8.	"City Lights"<br/>
                9.	"Pure Grinding"<br/>
                10.	"Sunset Jesus"<br/>
                11.	"Can't Catch Me"<br/>
                12.	"Somewhere in Stockholm"<br/>
                13.	"Trouble"<br/>
                14.	"Gonna Love Ya"<br/>
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
                1.	"Peace of Mind" (participação de Vargas & Lagola)<br/>
                2.	"Heaven"<br/>
                3.	"SOS" (participação de Aloe Blacc)<br/>
                4.	"Tough Love" (participação de Agnes e Vargas & Lagola)<br/>
                5.	"Bad Reputation" (participação de Joe Janiak)<br/>
                6.	"Ain't a Thing" (participação de Bonn)<br/>
                7.	"Hold the Line" (participação de A R I Z O N A)<br/>
                8.	"Freak" (participação de Bonn)<br/>
                9.	"Excuse Me Mr. Sir" (participação de Vargas & Lagola)<br/>
                10.	"Heart Upon My Sleeve" (com Imagine Dragons)<br/>
                11.	"Never Leave Me" (participação de Joe Janiak)<br/>
                12.	"Fades Away" (participação de Noonie Bao)<br/>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default ESAlbums