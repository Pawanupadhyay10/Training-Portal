import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import drive from '../images/drive.svg';
import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { fontFamily, textAlign } from '@mui/system';
import { Avatar } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Carousell from './Carousell';
import owlcor from './owlcor';
import Owlcor from './owlcor';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const useStyles = makeStyles({
    margin: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cover: {
        backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143464039-fcedcbb5-e565-42e0-8d43-bd384a51a72e.png)`,
        backgroundPosition: "center",
        minHeight:'100vh',
        width:'100%'
    },
    driveicon :{
        marginTop: '60px',
        marginLeft : '28px',
        height: 'auto',
        width: 'auto',
    },
    organgeicon :{
        height: 'auto',
        width: 'auto',
         marginTop: '100px',
        marginLeft: '0px',
    },
    youtubeicon :{
        marginTop: '40px',
        height: 'auto',
        width: 'auto',
        marginLeft: '0px',
    },
    biggogleicon: {
        marginTop: '60px',
        height: 'auto',
        width: 'auto',
        marginLeft: '100px',
        marginRight: '28px',
    },
    yellowcircle: {
        height: 'auto',
        width: 'auto',
        marginLeft: '38px',
        marginTop: '60px',
    },
    skybluecircle: {
        height: 'auto',
        width: 'auto',
        marginLeft: '220px',
        marginTop: '60px',
    },
    learntext: {
       paddingLeft: '50px',
       marginTop: '-60px',
       width: 'auto',
       height: 'auto',
    },
    vector :{
        height: 'auto',
        width: 'auto',
        marginLeft: '-50px',
        marginTop:'-50px',
    },
    vector1: {
        height: 'auto',
        width: 'auto',
        marginLeft: '30px',
        marginTop: '-65px',
    },
    greencircle: {
        height: 'auto',
        width: 'auto',
        marginLeft: '55px',
    },
    bluestar: {
        height: 'auto',
        width: 'auto',
        marginLeft: '-40px',
        marginTop: '-40px', 
    },
    zoom: {
        height: 'auto',
        width: 'auto',
        marginTop: '-33px',
    },
    bluebox: {
        height: 'auto',
        Width: 'auto',
       
    },
    bluebox1: {
        height: '250px',
        Width: '250px',
        marginLeft: '70px',
    },
    textsupport: {
         justifyContent: 'center',
         marginLeft: '50px',
         marginRight: 'auto',
         marginTop:'50px',
    },
    frame: {
    height: 'auto',
    width: 'auto    ',
    }, 
    frame2: {
        backgroundColor: 'var(--cerulean)',
        borderRadius: '9.03px',
        background: 'linear - gradient(97.47deg, #2C296C 3.64 %, #040142 100 %)',
        width: '100%',
        

    },
    frame3: {
        backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143670402-7a6f3a7c-d7b0-49e8-8128-bdd5e33dcbdc.png)`,
        height: '1164px',
        width: '92%',
        marginLeft: '60px',
    },
    cardd :{
        background: 'color: var(--white',
        borderRadius: '20px',
        boxShadow: '0px 4px 60px #0000001c',
        height: '383px',
        width: '281px',
    },
    cardd1: {
        background:'color: var(--mist - gray)',
        borderRadius: '10px',
        height: '363px',
        width: '260px',
    },
    textside: {
        position: 'absolute',
        width: '547px',
        height: '258px',
        left: '813px',
        top: '1648px',
        fontFamily:"Montserrat",
        fontWeight:'600',
        fontFamily: 'Montserrat', 
         display: 'flex',
         alignItems: 'center',
        letterSpacing: '0',
    },
    leftend : {
        alignItems: 'flex-end',
        height: '300px',
        Width: '300px',
    },
    gifts : {
        height: '117px',
        letterSpacing: '0',
        width: '940px' 
    },
    cousel1: {
        backgroundImage:`url(https://user-images.githubusercontent.com/52281814/143683715-bfd8e71b-c367-49b5-99ec-0a53b2475962.png)`,
        height: 'auto',
        width: 'auto',
    }
        
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(3, 3, 3, 3),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(5em + ${theme.spacing(6)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));
    

const Home = () => { 
     const classes = useStyles();

    return ( 
        <div className={classes.cover}>
          <Container>
            <Grid paddingLeft={3} container spacing={4} columns={12}>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.driveicon}><img src="https://user-images.githubusercontent.com/52281814/143473213-651e5378-8948-4f80-82bd-fef0b93ef50a.png"/></Paper>
                    <Paper elevation={0} className={classes.yellowcircle}><img src="https://user-images.githubusercontent.com/52281814/143477414-ba8f9952-c5a8-4069-94da-fe06e433a295.png" /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.organgeicon}><img src="https://user-images.githubusercontent.com/52281814/143472136-e812bb34-f546-4a3b-aa54-8a29bd72059f.png" /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.youtubeicon}><img src={drive} /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.biggogleicon}><img src="https://user-images.githubusercontent.com/52281814/143471959-769cd9f3-8374-4ca8-a1c6-c3c245c2d6d9.png"/></Paper>
                    <Paper elevation={0} className={classes.skybluecircle}><img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" /></Paper>
                </Grid>
            </Grid>
            <Grid container spacing={4} columns={12}>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.learntext}>
                        <Typography fontWeight={600} paddingLeft={5} variant="h2" component="h3">
                    Learning Today
                    </Typography>
                        <Typography fontWeight={600}  variant="h2" component="h3">
                          Leading Tomorrow
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                   
                </Grid>
            </Grid>
            <Grid container spacing={4} columns={12}>
                <Grid item  xs={1}>
                    <Paper elevation={0} className={classes.vector}><img src="https://user-images.githubusercontent.com/52281814/143528246-dee026ce-182c-4df7-b86e-1029c328eba4.png" /></Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={0} className={classes.vector1}><img src="https://user-images.githubusercontent.com/52281814/143528351-dda28f98-520f-4657-89ef-4f523c34fc54.png" /></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.greencircle}><img src="https://user-images.githubusercontent.com/52281814/143528748-943297e0-26fa-4190-8eb8-bce564f9c305.png" /></Paper>
                </Grid>
                 <Grid item xs={2}>
                    <Paper elevation={0} className={classes.bluestar}><img src="https://user-images.githubusercontent.com/52281814/143528403-cbca69e0-9731-42ab-8318-0438c5d3a558.png" /></Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper elevation={0} className={classes.zoom}><img src="https://user-images.githubusercontent.com/52281814/143539808-22b651a5-3cf6-416b-b720-6198061f0925.png" /></Paper>
                </Grid>
            </Grid >
            <Grid container spacing={2} columns={12} justifyContent='center'>
                <Grid xs={3}>
                </Grid>
                <Grid xs={6}>
                    <Paper className={classes.margin} >
                        <Search >
                            <SearchIconWrapper >
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <Button  variant="contained"><SearchIcon />Search</Button>
                        </Search>
                    </Paper>
                </Grid>
                <Grid xs={3}>
                </Grid>
            </Grid>
          </Container>
            <Grid container columns={12}>
                <Grid item xs={2}>
                    <Paper elevation={0}><img src="https://user-images.githubusercontent.com/52281814/143560984-849b814a-bcce-4c79-b56a-bfd0ea596993.png" />
                    </Paper>
                </Grid > 
                <Grid item  xs={8}>
                    
                </Grid>
                <Grid item  xs={2}>
                    <Paper elevation={0} ><img className={classes.bluebox1} src="https://user-images.githubusercontent.com/52281814/143602737-1052ea03-7db1-4959-b0b7-8f5619dc99d7.png" /></Paper>
                </Grid >
            </Grid>
            <Grid container justifyContent='center' marginTop='-70px' columns={12}>
                <Typography 
                     fontFamily="Montserrat" 
                     fontWeight={600} 
                     variant="h3" 
                     color="#D0D0D0" 
                     component="h3">
                        Our proud supporters
                    </Typography>
            </Grid>
            <Container>
                <Grid className={classes.frame} columns={6} marginTop='40px'>

                    <Grid item xs={4}>
                        <Paper elevation={0} >
                            <img src="https://user-images.githubusercontent.com/52281814/143611471-e14ef306-d424-425d-a57d-f96fec5d4125.png" />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
            <div spacing={2} className={classes.frame3}>
                <Grid container  className={classes.frame2} column={12}>
                    
                    <Grid marginLeft='25px' item xs={3}>
                        <Container >
                        <Paper  elevation={0} className={classes.cardd}>
                            <Paper className={classes.cardd1}>
                                <img src="https://user-images.githubusercontent.com/52281814/143671114-0c024fbe-ce96-4849-a959-ca110e186ef8.png" />
                            </Paper>
                        </Paper>
                        <br></br>
                        <Paper  elevation={0} className={classes.cardd}>
                            <Paper className={classes.cardd1}>
                                <img src="https://user-images.githubusercontent.com/52281814/143671114-0c024fbe-ce96-4849-a959-ca110e186ef8.png" />
                            </Paper>
                        </Paper>
                            <br></br>
                            <Paper  elevation={0} className={classes.cardd}>
                                <Paper className={classes.cardd1}>
                                    <img src="https://user-images.githubusercontent.com/52281814/143671114-0c024fbe-ce96-4849-a959-ca110e186ef8.png" />
                                </Paper>
                            </Paper>
                        </Container>
                    </Grid>
                        <Grid item marginLeft='5px'marginTop='200px' xs={3}> 
                                <Paper elevation={0} className={classes.cardd}>
                                    <Paper className={classes.cardd1}>
                                        <img src="https://user-images.githubusercontent.com/52281814/143671114-0c024fbe-ce96-4849-a959-ca110e186ef8.png" />
                                    </Paper>
                                </Paper>
                                <br></br>
                                <Paper elevation={0} className={classes.cardd}>
                                    <Paper className={classes.cardd1}>
                                        <img src="https://user-images.githubusercontent.com/52281814/143671114-0c024fbe-ce96-4849-a959-ca110e186ef8.png" />
                                    </Paper>
                                </Paper>
                        </Grid>   
                    <Grid item xs={6} 
                      justifyContent='center' marginTop='-60px' columns={12}>
                        <Typography
                            className={classes.textside}
                            color='#FFFFFF'
                            width='520px'
                            marginLeft='750px'
                            marginTop='-800px'
                            variant="h3"
                            component="h3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum libero sollicitudin, tristique ipsum ac,
                        </Typography>
                    </Grid>
                    {/* <Grid item className={classes.leftend} xs={2}>
                        <Paper >
                            <img src='https://user-images.githubusercontent.com/52281814/143675052-8ba80dd6-1ee0-4a4a-9fb9-354c2416f0b8.png'>
                         </img>
                        </Paper>
                    </Grid> */}
               </Grid>
            </div>
            <div>
            <Grid container columns={12}>
                <Grid item xs={3} ></Grid>
                <Grid item xs={6}>
                  <Typography
                  marginTop='190px'
                  width='804px'
                  height='117px'
                  fontFamily='Montserrat'
                  fontWeight='700'
                  align='center'
                  fontSize='50px'>
                  Why choose Learn For Cause?
                  </Typography>
                </Grid>
                <Grid item xs={3} ></Grid>
            </Grid>
              <Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item >
                                        <Avatar  sx={{ bgcolor:'#236CF6' }} variant="rounded">1</Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column'paddingLeft={3} spacing={1}>
                                    <Grid item xs>
                                        <Typography>Learn the theory</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography>Lorem ipsum dolor sit amet, consectetur </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                    </Grid>
                    <Grid item xs={6}>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item >
                                        <Avatar sx={{ bgcolor: '#48E2E4' }} variant="rounded">2</Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' paddingLeft={3} spacing={1}>
                                        <Grid item xs>
                                            <Typography>Learn the theory</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>Lorem ipsum dolor sit amet, consectetur </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                    </Grid>
                    <Grid Paper xs={6}>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item >
                                        <Avatar sx={{ bgcolor: '#2C296C' }} variant="rounded">3</Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' paddingLeft={3} spacing={1}>
                                        <Grid item xs>
                                            <Typography>Learn the theory</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>Lorem ipsum dolor sit amet, consectetur </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                    </Grid>
                    <Grid item xs={6}>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item >
                                        <Avatar sx={{ bgcolor: '#1CB0F6' }} variant="rounded">4</Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' paddingLeft={3} spacing={1}>
                                        <Grid item xs>
                                            <Typography>Learn the theory</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>Lorem ipsum dolor sit amet, consectetur </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                    </Grid>
                </Grid>
                </Grid>
            </div>
            <div>
                <Grid container bgcolor="#FFF" columns={12}>
                    <Grid item xs={2} ></Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.gifts}
                            marginTop='190px'
                            variant="h6" component="h5"
                            fontFamily='Montserrat'
                            fontWeight='bold'
                            align='center'
                            fontSize='50px'
                            display='flex'>
                            Some awesome gifts from our side
                        </Typography>
                    </Grid>
                    <Grid item xs={2} ></Grid>
                </Grid>
            </div>
            <br></br>
            <br></br>
            <div >
                <Carousell/>
            </div>
            <div>
                <Grid container bgcolor="#FFF" columns={12}>
                    <Grid item xs={4} ></Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.gifts}
                            marginTop='190px'
                            variant="h6" component="h5"
                            fontFamily='Montserrat'
                            fontWeight='bold'
                            align='center'
                            fontSize='50px'
                            display='flex'
                            justifyContent='center'>
                            Past Events
                        </Typography>
                    </Grid>
                    <Grid item xs={4} ></Grid>
                </Grid>
            </div>
            <br></br>
            <br></br>
            <div >
               <Container >
                    <Grid container direction='row' marginTop='60px' backgroundColor='#FFF'columns={12} >
                        <Grid marginTop='250px' item xs={2}>
                        <ArrowBackIosIcon/>
                        </Grid>
                        <Grid item marginLeft='-170px'  xs={6}>
                            <img src='https://user-images.githubusercontent.com/52281814/143687593-46879a02-e5b9-41b3-8b24-799b8987535f.png' />
                        </Grid>
                        <Grid marginTop='250px' marginLeft='170px' marginRight='0px' item xs={2}>
                        <ArrowForwardIosIcon/>
                        </Grid>
                </Grid>
           </Container>
            </div>
            <br></br>
            <br></br>
            <Grid container bgcolor="#FFF" columns={12}>
                <Grid item xs={4} ></Grid>
                <Grid item paddingLeft='165px' xs={4}>
                   <Button>Show More Options</Button>
                </Grid>
                <Grid item xs={4} ></Grid>
            </Grid>
        </div>
     );
}
 
export default Home;