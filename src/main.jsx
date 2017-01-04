/**
 * Main entry point for the client application.
 */

'use strict';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/lib/Row';
import Sticky from 'react-stickynode';
import Image from 'react-bootstrap/lib/Image';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const styles = {
    backgroundImage: {
        backgroundImage: 'url(img/bgimage0.jpg)',
        height: '100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    whiteSpace: {
        height: '200px',
    },
};

const websiteContent = (
  <div style={styles.backgroundImage}>

    <div style={styles.whiteSpace}></div>

    <TitleBar id="titlebar">
    </TitleBar>

    <div style={styles.whiteSpace}></div>

    <Sticky enabled={true}>
      <Menu id="menu"
            items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                    { label: 'THE WEDDING', href: 'wedding' },
                    { label: 'RSVP', href: 'rsvp' },
                    { label: 'LOGISTICS', href: 'logistics' },
                    { label: 'GIFTS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
      <Grid>
        <Row>
          <Col className="one-half column">
            <p>
              <Image className="thumbnail" src="img/jocelyn-baby.jpg" alt="Jocelyn" /> Jocelyn is a lovely uncomplicated girl who was
              born and raised in New York. As exciting as New York was for an impressionable young girl she made it her mission to live
              &amp; explore as many beautiful cities as she could. Thanks to her beloved sister Wendy it was possible to jump from the
              neon nights of Miami, to the multi diverse city of London, to then learn the leisure ways of Italy. While Jocelyn was
              exploring and realizing her passion in life she realized she needed to find her way back to the city she knew her dream
              job was waiting for her in Fashion.
            </p>
          </Col>

          <Col className="one-half column">
            <p>
              <Image className="thumbnail" src="img/kal-baby.jpg" alt="Kal" /> Kal is a burly Eastern European who moved from his
              homeland Bulgaria at the young age of 22 to the lovely city of Toronto. Kal then found himself in the IT mecca of
              Seattle and realized after 9 years of the beautiful mountain backdrop and serene lakes that he needs to escape to the
              center of the universe, New York.
            </p>
          </Col>
        </Row>
      </Grid>

      <hr />

      <Grid>
        <Row>
          <Col className="twelve columns">
            <p>
              <Image className="proposal-image" src="img/proposal.jpg" alt="Kal Proposing To Jocelyn" />
            </p>

            <h2>OUR STORY</h2>
            <p>
              Being children of the modern day and age, our story began with venturing onto OKCupid. As hesitant as one of
              us was to engage herself with a complete stranger online (while the other happily explored with enthusiasm) it
              soon became apparent the first date we met the natural occurrences when 2 people meet and all feelings of the
              unknown disappeared because at that moment right in front of me I was meeting my best friend. As the cliche tale
              goes, the rest is history.
            </p>
          </Col>
        </Row>
      </Grid>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <Grid>
        <Row>
          <Col className="one-half column">
            <h2>CEREMONY</h2>
            <p>16:00 @ Sveti Marak (St Mark&#39;s) Church Courtyard</p>
            <p>
              <Image className="location-image" src="img/svetimarak.jpg" alt="Sveti Marak" />
            </p>
            <p>
              <a href="https://goo.gl/maps/BvKtzdCKGDm" target="_blank">Google Maps</a> | 
              <a href="img/city-hvar-map.jpg" target="_blank">Tourist Map</a>
            </p>
          </Col>

          <Col className="one-half column">
            <h2>RECEPTION</h2>
            <p>17:00 @ Bonj les Bains Beach Club</p>
            <p>
              <Image className="location-image" src="img/bonjlesbainsbeachclub.jpg" alt="Bonj Les Bains Beach Club" />
            </p>
            <p>
              <a href="https://goo.gl/maps/MGBa94iBaA42" target="_blank">Google Maps</a> | 
              <a href="img/city-hvar-map.jpg" target="_blank">Tourist Map</a>
            </p>
          </Col>
        </Row>
      </Grid>

      <hr />

      <Grid>
        <Row>
          <h2>ON THE WEDDING DAY</h2>
          <Col className="twelve columns">
              <p>
                Coming Soon!<br />
              </p>
          </Col>
        </Row>
      </Grid>

      <hr />

      <Grid>
        <Row>
          <h2>BEFORE &amp; AFTER</h2>
          <Col className="twelve columns">
              <p>
                Coming soon, but be prepared for a cocktail evening out on the day before and a hangover brunch on the day after :)<br />
              </p>
          </Col>
        </Row>
      </Grid>
    </TopicContainer>

    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="logistics" title="Logistics">
      <Grid>
        <Row>
          <h2>GETTING THERE</h2>
          <p>Flight, ferry, etc ...</p>
        </Row>

        <hr />

        <Row>
          <h2>ACCOMMODATIONS</h2>
          <p>Hotels, discouns, etc ...</p>
        </Row>

        <hr />

        <Row>
          <h2>MAPS AND THINGS TO DO</h2>
          <div id="gmap">
            <iframe width="600" height="450" frameBorder="0" style={{border:0}} src="https://goo.gl/OgRIJ6" allowFullScreen></iframe>
          </div>
        </Row>

        <hr />

        <Row>
          <h2>ABOUT CROATIA</h2>
          <p>Write some shit about Croatia</p>
        </Row>
      </Grid>
    </TopicContainer>

    <TopicContainer id="gifts" title="Gifts">
      <p>Dear family and friends,</p>
      <p>We feel honoured that you are all travelling a long way to come and celebrate our special day with
         us. For this reason we don't want anyone to feel obliged to buy us gifts. Your presence is the
         biggest gift.
      </p>
      <p>If you do feel that you want to give us a gift please remember that just like you, we will only have
         a suitcase full of clothes so we won't be able to carry any items back.
      </p>
      <p>Thank you in advance!
      </p>
    </TopicContainer>

    <div style={styles.whiteSpace}></div>

    <div>
        Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from 
        <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
    </div>

  </div>
);      

ReactDOM.render(websiteContent, document.getElementById('content'));
