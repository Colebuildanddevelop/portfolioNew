import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import stonkImg from '../static/stonkkings.png';
import friendsImg from '../static/friends.png';
import predictImg from '../static/predict.png';
import stupidShirtsImg from '../static/stupidshirts.png';
import notRedditImg from '../static/reddit.png';
import playlisterImg from '../static/playlister.png';
import railsIcon from '../static/rails.svg';
import postgresqlIcon from '../static/postgresql.svg';
import bootstrapIcon from '../static/bootstrap.svg';
import reactIcon from '../static/react.svg';
import reduxIcon from '../static/redux.svg';
import nodeIcon from '../static/node.svg';
import mongoIcon from '../static/mongoDb.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  workContainer: {
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 100, 
      paddingRight: 100
    },
    maxWidth: '100%', 
    margin: 'auto'
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'StonkKings'} 
          buttonText={'Website'}
          timeout={250}
          backgroundColor={'#ff6637'}
          image={stonkImg}
          stack={[reactIcon, reduxIcon, nodeIcon, mongoIcon]}
          description={
            `StonkKings allows users to create and participate in tournaments varying in entry fees, entry limits, and durations. Upon entering a tournament, users receive a simulated trading account to make simulated trades. When the tournament concludes, the user with the highest account balance receives all the tournament's entry fees. I created StonkKings to allow new traders to compete against a known player pool for an arbitrarily small sum of money. This restructuring essentially allows new meta strategies to emerge when it comes to generating returns trading stocks. I wrote the backend following model, view, and controller design patterns using NodeJs, Mongoose, and MongoDB. The frontend was conceived with react and redux for central state management, and Material UI for styling.`
          }
          website={"https://stonk-kings.herokuapp.com/"}
          github={"https://github.com/Colebuildanddevelop/TKings"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'FriendsWithVidz'} 
          buttonText={'Website'}
          timeout={500}
          backgroundColor={'#9356ff'}
          image={friendsImg}
          stack={[reactIcon, reduxIcon, 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          description={
            `FriendsWithVidz allows users to add YouTube videos to a public queue. Videos play server-side, ensuring everyone is experiencing the video at the same time. While a video is playing, the user who queued the video is displayed. 
            Displaying the user in this way grants the viewing audience the ability to express their liking for the video or cast a vote to skip the video. I added this feature to create incentives for users to only queue videos that the viewing party will enjoy.
            Furthermore, a live chat allows for discussion to create an alive, social experience. FriendsWithVidz was built with Firebase, React, Redux, and Material UI.`
          }
          website={"https://friendswithvids.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/friendswithvids"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'PredictBR'} 
          buttonText={'Website'}
          timeout={750}
          backgroundColor={'#86ffa3'}
          image={predictImg}
          stack={[reactIcon, 'https://cdn-images-1.medium.com/max/400/1*uFuRJ8osF_ma0FF7Un1cag.png', 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          description={
           `All state and user funds are handled by solidity code I wrote hosted on the Ethereum Network. A decentralized backend provides users transparency. Furthermore, hosting on Ethereum ensures that I don't have access to funds and cannot modify logic or state associated with tournaments. 
            Users compete by casting predictions concerning a given asset’s closing price at the end of a given duration. Once a tournament has started, predictions are no longer accepted. To make a prediction, users must pay an associated fee.
            Users can make as many predictions as they please before the tournament starts. When the tournament concludes, the user with the closest prediction to the asset's price at that time will be awarded the accumulated fees from all user predictions. 
            `
          }
          website={"https://valueisright.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/PredictBr"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'StupidShirts'} 
          buttonText={'Website'}
          timeout={1000}
          backgroundColor={'#909090'}
          image={stupidShirtsImg}
          stack={[reactIcon, reduxIcon, 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          description={
            `A storefront template that can be used to create multiple online stores. Payments are handled with a PCI compliant custom stripe integrated checkout API. I created StupidShirts with 
            Google firebase for the backend. For the frontend I used React and Redux for central state management. Shopping cart data 
            is stored client side using local storage.`
          }
          website={"https://stupid-shirts.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/StupidShirts"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'Playlister'} 
          buttonText={'Demo'}
          timeout={1250}
          backgroundColor={'#fc6464'}
          image={playlisterImg}
          stack={[reactIcon, railsIcon, bootstrapIcon, postgresqlIcon]}
          description={`
            A platform that allows users to create playlists and share with others! Users can vote on which playlist they think is best and sort playlists by popularity. 
            Created using the YouTube API, Ruby on Rails for object-relational mapping, JWT for user authentication, PostgreSQL for data storage, and React Bootstrap for styling.
          `}
          website={'https://www.youtube.com/watch?v=4YI3ROmPnB8'}
          github={'https://github.com/Colebuildanddevelop/mod4-project'}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'NotReddit'} 
          buttonText={'Demo'}
          timeout={1500}
          backgroundColor={'royalblue'}
          image={notRedditImg}
          stack={[railsIcon]}
          description={`
            A social platform that allows users to make posts related to different user-created categories. Users also can create categories themselves and subscribe to these categories.
            Users can like and comment on posts as well as sort posts by popularity. NotReddit was created using a Rails backend for ORM, embedded ruby for the frontend, and MySQL for data
            persistence.   
          `}
          website={'https://www.youtube.com/watch?v=DjTKA2AZJ0M'}
          github={'https://github.com/Colebuildanddevelop/Mod2-project'}
        />
      </Grid>
    </>
  )
}

export default Projects;