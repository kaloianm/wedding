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

    <Sticky enabled={true} top={25}>
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
            <h2>JOCELYN</h2>
            <p>
              <Image className="thumbnail" src="img/jocelyn-baby.jpg" alt="Jocelyn" /> Jocelyn is hot and shit. This is some long
              paragraph to test the image around text wrapping.
            </p>
          </Col>

          <Col className="one-half column">
            <h2>KAL</h2>
            <p>
              <Image className="thumbnail" src="img/kal-baby.jpg" alt="Kal" /> Kal is not too shabby too. This is some long paragraph
              to test the image around text wrapping.
            </p>
          </Col>
        </Row>
      </Grid>

      <hr />

      <Grid>
        <Row>
          <Col className="twelve columns">
            <h2>HOW WE MET</h2>
            <p>
              Being children of the modern day and age we met on OK cupid. This is some long paragraph to test the alignment with
              the image and the flow of the text around it.
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

            <h2>THE ENGAGEMENT</h2>
            <p>In Cannes and shit ...</p>
          </Col>
        </Row>
      </Grid>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <Grid>
        <Row>
          <Col className="one-half column">
            <h2>CEREMONY</h2>
            <p>15:00 @ Sveti Marak Church Courtyard</p>
            <p>
              <Image className="location-image" src="img/svetimarak.jpg" alt="Sveti Marak" />
            </p>
            <p>
              <a href="https://goo.gl/tGGyYy">Google Maps</a> | <a href="https://goo.gl/tGGyYy">Tourist Map</a>
            </p>
          </Col>

          <Col className="one-half column">
            <h2>RECEPTION</h2>
            <p>16:00 @ Bonj les Bains Beach Club</p>
            <p>
              <Image className="location-image" src="img/bonjlesbainsbeachclub.jpg" alt="Bonj Les Bains Beach Club" />
            </p>
            <p>
              <a href="https://goo.gl/tGGyYy">Google Maps</a> | <a href="https://goo.gl/tGGyYy">Tourist Map</a>
            </p>
          </Col>
        </Row>
      </Grid>

      <hr />

      <Grid>
        <Row>
          <h2>BRIDAL PARTY</h2>
          <Col className="twelve columns">
            <h2>Bridesmaids </h2>
            <div>
              <p>
                Coming Soon!<br />
              </p>
            </div>
          </Col>

          <Col className="twelve columns">
            <h2>Groomsmen</h2>
            <div>
              <p>
                Coming Soon!<br />
              </p>
            </div>
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
