import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import { Button,Menu,Container,Grid,Rail,Segment,Message,Image,Icon,Divider} from 'semantic-ui-react';
import uuid from 'uuid/v4';
export default class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render(){
          const { activeItem } = this.state
        return (
            <Container textAlign="center">
                <div>
                    <Head>
                        <title>HashtagMate - I mess with tweets of a specific tag</title>
                        <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png"/>
                        <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>
                        <link rel="manifest" href="/static/icons/manifest.json"/>
                        <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#6596a3"/>
                        <link rel="shortcut icon" href="/static/icons/favicon.ico"/>
                        <meta name="msapplication-config" content="/static/icons/browserconfig.xml"/>
                        <meta name="theme-color" content="#ffffff"/>
                        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                    </Head>
                    <Container>
                        <Grid columns={3} padded>
                            <Grid.Column>
                                <Image size="small" floated="left" circular src={'/static/images/logo.png'}/>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' columns={6}>
                                <h1 style={{fontWeight:100}}>
                                    HashtagMate<br/>
                                    <small>I mess with tweets of a specific tag</small>
                                </h1>
                            </Grid.Column>
                        </Grid>
                    </Container>
                    <Menu>
                        <Link href={{ pathname: '/hashtag', query: { name: 'Rwot' } }}>
                            <Menu.Item name = 'Rwot' active={activeItem === 'home'}>
                                #Rwot
                            </Menu.Item>
                        </Link>
                        <Link href={{ pathname: '/hashtag', query: { name: 'Rwot' } }}>
                            <Menu.Item name = 'Rwot' active={activeItem === 'home'}>
                                #ThousandHills
                            </Menu.Item>
                        </Link>
                    </Menu>
                    <Container>
                        <Grid columns={3}>
                            {this.props.tweets.map((tweet)=>{
                                return(
                                    <Grid.Column key={uuid()}>
                                        <Grid.Row style={{textAlign:'left',border:'1px solid #eee',borderRadius:'5px'}}>
                                            <div style={{backgroundColor:'#'+tweet.user.profile_link_color,borderRadius:'5px 5px 0px 0px',padding:'5px',paddingBottom:'15px'}}>
                                                <Image floated="left" circular src={tweet.user.profile_image_url}/>
                                                <a href={'https://twitter.com/'+tweet.user.screen_name} target="_blank" style={{color:'#fff',fontWeight:100}}><b>{tweet.user.name}<br/>@{tweet.user.screen_name}</b></a>
                                            </div>
                                            {(tweet.entities.urls.length>0)?
                                                <a href={tweet.entities.urls[0].url} target="_blank" style={{color:'#333',fontWeight:100}}>
                                                    <p style={{padding:'10px'}}>{tweet.text}</p>
                                                </a>
                                                :<p style={{padding:'10px'}}>{tweet.text}</p>
                                            }
                                        </Grid.Row>
                                    </Grid.Column>
                                )
                            })}
                        </Grid>
                    </Container>
                    <Container>
                        <Divider/>
                        <Grid columns={1} padded textAlign="center">
                            <Grid.Column verticalAlign='middle'>
                                <b>
                                    <i style={{fontWeight:100}}>Kgl-Codes - HashtagMate(A weekend Hackathon)</i><br/>
                                    <i>Kigali <Icon name="heart" as='i' color='red'/> Codes</i>
                                </b>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            </Container>
        );
    }
}
App.getInitialProps = async function() {
  const res = await fetch('http://localhost:8081/hashtag/rwot')
  const tweets = await res.json()
  console.log(tweets.length);
  return {
    tweets: tweets,
  }
}