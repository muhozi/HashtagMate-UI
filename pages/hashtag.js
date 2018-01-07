import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import uuid from 'uuid/v4';
import { Button,Menu,Container,Grid,Rail,Segment,Message,Image } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
export default class Hashtag extends React.Component{
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
                        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                    </Head>
                    <Container>
                        <h1>HashtagMate</h1>
                    </Container>
                    <Menu>
                        <Menu.Item name = 'Rwot' active={activeItem === 'home'}>
                            <Link prefetch href="/my/login">
                              #Rwot
                            </Link>
                        </Menu.Item>
                        <Menu.Item name = 'Rwot'>
                            <Link prefetch href="/my/login">
                              #ThousandHills
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Container>
                        <Grid columns={3}>
                            {this.props.tweets.map((tweet)=>{
                                return(
                                    <Grid.Column key={uuid()}>
                                        <Grid.Row style={{textAlign:'left',border:'1px solid #eee',borderRadius:'5px'}}>
                                            <div style={{backgroundColor:'#'+tweet.user.profile_background_color,color:'#'+tweet.user.profile_link_color,borderRadius:'5px 5px 0px 0px',padding:'5px',paddingBottom:'15px'}}>
                                                <Image floated="left" circular src={tweet.user.profile_image_url}/>
                                                <b>{tweet.user.name}<br/>@{tweet.user.screen_name}</b>
                                            </div>
                                            <p style={{padding:'10px'}}>{tweet.text}</p>
                                        </Grid.Row>
                                    </Grid.Column>
                                )
                            })}
                        </Grid>
                    </Container>
                </div>
            </Container>
        );
    }
}
Hashtag.getInitialProps = async function() {
  const res = await fetch('http://localhost:8081/hashtag/rwot')
  const tweets = await res.json()

  return {
    tweets: tweets,
  }
}