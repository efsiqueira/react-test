import { Box, Grid, Typography } from "@mui/material"
import img from '../images/av.jpg';
const ESAbout = () => {
  return (
    <Box style={
      {
        minHeight: 'calc(100vh - 60px)',
        backgroundPosition: '9% 20%',
        backgroundRepeat: 'no-repeat'
      }
    }>
      <Grid container style={{ backgroundColor: "black" }}>
        <Grid item sm={12} md={6}>
          <img src={img} alt="Avicii" className="img-fluid" />
        </Grid>
        <Grid item sm={12} md={6}>
          <Box align="right" style={
            {
              color: '#FFF',
              padding: '2rem',
              lineHeight: '1.8rem',
              fontFamily: 'Roboto'
            }
          }
          >
            <Typography variant="h1" >Sobre Avicii</Typography>
            <Typography variant="p">Tim Bergling nasceu em 8 de setembro de 1989 em Estocolmo, Suécia, e morreu em 20 de abril de 2018.</Typography>
            <Typography variant="p">Avicii surgiu na indústria da música quando ele tinha 6 anos de idade, fazendo um remix para o jogo "Lazy Jones" de Commodore 64. Isto levou seu primeiro lançamento pela Strike Recordings com o título de "Lazy Jones".</Typography>
            <Typography variant="p">O crítico de dança da Hotpress Sean Russell descreveu-o como "o único DJ capaz de chicoteamento de instrumentos e público numa apresentação completa".</Typography>
            <Typography variant="p">Em 2010, Avicii lançou uma colaboração com seu colega, o DJ russo John Dahlbäck, intitulada "Don't Hold Back". Além disso, tem projetos com DJs internacionalmente reconhecidos como Tiësto e Sebastian Ingrosso. Embora suas obras sejam principalmente músicas eletrônicas, a EMI lançou uma versão vocal de sua música "Bromance", intitulada "Seek Bromance".</Typography>
            <Typography variant="p">Em outubro de 2010, Avicii assinou um contrato com a gravadora discográfica europeia A&R com EMI Music Publishing. Com sede em Londres e Nova York, a EMI é a quarta maior empresa grupo e família de gravadoras da indústria de gravação, tornando-a uma das "quatro grandes" gravadoras e um membro da RIAA (Recording Industry Association of America).</Typography>
            <Typography variant="p">Em 2011, sua faixa de colaboração em "Sunshine", com David Guetta, foi nomeada para um Grammy na categoria de Melhor Gravação Dance. Sua faixa "Penguin" passou a constituir em amostra por Leona Lewis. Porém, há conflitos e controvérsia a respeito de Avicii receber royalties sobre suas criações.</Typography>
            <Typography variant="p">Em 2014, cancelou sua turnê por problema de saúde. Segundo a Billboard, a lista de shows incluíam apresentações em grandes festivais, como o TomorrowWorld, e mais shows nos EUA e Ásia.</Typography>
            <Typography variant="p">Em 29 de março de 2016, anuncia sua aposentadoria dos palcos devido a um problema de saúde e que dará uma "pausa" na música.</Typography>
            <Typography variant="p">Em Janeiro de 2017 revelou que após uma pausa de um ano está voltando e pretende lançar "o melhor álbum de sua carreira"</Typography>
            <Typography variant="p">Em 03 de agosto de 2017 foi anunciado seu retorno. Foi anunciado o lançamento do EP AV?CI (01) para o dia 10 de agosto de 2017.</Typography>
            <Typography variant="p">Em 20 de abril de 2018, sua assessoria confirmou sua morte, aos 28 anos. Seu corpo foi encontrado em Mascate, Omã.</Typography>
            <Typography variant="p">Entre as influências de Avicii estão Tiësto,David Guetta, Daft Punk, Laidback Luke, Sebastian Ingrosso, Steve Angello, Axwell, Ryan Blair, Eric Prydz, Josef Kelly, Basto e Ste Kirwan.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ESAbout