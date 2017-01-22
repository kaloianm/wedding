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
    whiteSpace: {
        height: '200px',
    },
};

const websiteContent = (
  <div>

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
              and explore as many beautiful cities as she could. Thanks to her beloved sister Wendy it was possible to jump from the
              neon nights of Miami, through the diverse city of London, to then learn the leisurely ways of Italy. While Jocelyn was
              exploring and realizing her passion in life, she realized she needed to find her way back to the city she knew her dream
              job was waiting for her in fashion.
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

      <p>
        <Image className="proposal-image" src="img/proposal.jpg" alt="Kal Proposing To Jocelyn" />
      </p>

      <h2>OUR STORY</h2>
      <p>
        Being children of the modern day and age, our story began with venturing onto OK Cupid. As hesitant as one of us was to engage
        herself with a complete stranger online (while the other happily explored with enthusiasm) on our first date it soon became
        apparent that we met the natural occurrences when 2 people meet and all feelings of the unknown disappeared because at that moment
        right in front of me I was meeting my best friend. As the cliche tale goes, the rest is history.
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <Grid>
        <Col className="one-half column">
          <h2>CEREMONY</h2>
          <p>16:00 @ Sveti Marak (St Mark&#39;s) Church Courtyard</p>
          <p>
            <Image className="location-image" src="img/svetimarak.jpg" alt="Sveti Marak (St Mark's)" />
          </p>
          <p>
            <a href="https://goo.gl/maps/BvKtzdCKGDm">Google Maps</a> | <a href="img/city-hvar-map.jpg">Tourist Map</a>
          </p>
        </Col>
        <Col className="one-half column">
          <h2>RECEPTION</h2>
          <p>17:00 @ Bonj les Bains Beach Club</p>
          <p>
            <Image className="location-image" src="img/bonjlesbainsbeachclub.jpg" alt="Bonj Les Bains Beach Club" />
          </p>
          <p>
            <a href="https://goo.gl/maps/MGBa94iBaA42">Google Maps</a> | <a href="img/city-hvar-map.jpg">Tourist Map</a>
          </p>
        </Col>
      </Grid>

      <hr />

      <h2>ON THE WEDDING DAY</h2>
      <p>Coming Soon!
      </p>

      <hr />

      <h2>BEFORE &amp; AFTER</h2>
      <p>Coming soon, but be prepared for a cocktail evening out on the day before and a hangover brunch on the day after :)
      </p>
    </TopicContainer>

    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="logistics" title="Logistics">
      <p>We understand that going to a different country to attend a wedding can be a daunting experience. That's why in this section
         we have tried to compile information and links to help make your travel and hotel booking as simple as possible and to give
         you ideas for how to make a complete vacation out of your trip. Please read through it and if you feel you need any additional
         information or help, do not hesitate to contact us.
      </p>

      <hr />

      <h2>GETTING TO CROATIA</h2>
      <p>Being a popular summer tourist destination, getting to Croatia is relatively easy. The closest major city to Hvar is&nbsp;
         <a href="https://goo.gl/maps/a8JeWAEuugN2">Split</a> and it is fairly well connected by pretty much all European airlines
         and some low-cost carriers, such as&nbsp;
         <a href="https://wizzair.com/#/booking/select-flight/LTN/SPU/2017-08-22/2017-09-02/1/0/0">WizzAir</a> and&nbsp;
         <a href="https://www.eurowings.com/en.html">Eurowings</a>.
      </p>
      <p>The second closest major airport is in <a href="https://goo.gl/maps/goc5oZWa3wC2">Dubrovnik</a>. It is about 5 hours away
         from Hvar via a ferry, which is kind of far, but if you are planning on doing some touring before or after the wedding it is
         a great location to visit.
      </p>
      <p>As of the time of writing there are no&nbsp;
         <a href="https://www.kayak.com/flights/NYC-SPU/2017-08-25/2017-09-02/2adults">direct flights</a>&nbsp;
         from the US or Canada to Croatia, so guests coming from there will have to do at least one connection in a major European hub
         such as Frankfurt, Zurich or Amsterdam.
      </p>

      <hr />

      <h2>FERRY TO THE ISLAND OF HVAR</h2>
      <p>The Split airport is located about 25km (16mi) from the seaport from where the ferries leave for Hvar. According to the bus
         company's <a href="http://www.buscroatia.com/airport-split/">website</a> a taxi should cost about 35 EUR/40 USD for 1-3 people and
         a bus should be around 4 EUR/5 USD per person.
      </p>
      <div id="gmap">
        <iframe src="https://www.google.com/maps/d/embed?mid=1QdPbr1DgM7Cgiw2PwAbLgpINiSI"></iframe>
      </div>
      <p>Once you are at the seaport and looking for transportation to the island, please note that there are two landing spots on the
         island - Hvar Town and the Old Town (Stari Grad). The wedding will be in Hvar Town, which is in the south-west end of the island,
         not in the Old Town, which is on the nortern end. Please make sure you are boarding the right ferry, but even if you make a
         mistake, stay calm because there is a bus between the two.
      </p>
      <div id="gmap">
        <iframe src="https://www.google.com/maps/d/embed?mid=1H0mc9QKj_OwW1TZCWtQc_tb3s9k"></iframe>
      </div>
      <p>
        <a href="http://www.jadrolinija.hr/en/ferry-croatia">Jadrolinija</a><br />
        This is a high-speed catamaran service from Split to Hvar Town which takes about 65 min. This is the fastest option and costs
        around 10 EUR/11 USD per person.
      </p>
      <p>
        <a href="http://www.krilo.hr/en/index.html">Kapetan Luka</a><br />
        This is a regular ferry service which takes about 2.5 hours and should cost around 5-10 EUR/6-11 USD per person.
      </p>

      <hr />

      <h2>DRIVING</h2>
      <p>For those renting a car or driving to Croatia, we don't yet know what are the driving or parking conditions on the island. From
         reading various tour guides and traveller comments it appears that there are drivable roads and paid parking spots so it should
         not be a problem. However we will update this section more as we go on our exporatory trip in the spring.
      </p>

      <hr />

      <h2>ACCOMMODATIONS</h2>
      <p>Once on the island in Hvar Town there are various accommodation options ranging from fancy hotels to renting an apartment
         on <a href="https://goo.gl/uHTDYn">AirBnB</a>. The wedding will be in the Amfora Resort so any accommodation within walking
         distance from there should be fine.
      </p>
      <p>For guests wishing to stay in a hotel, the <a href="http://www.suncanihvar.com/">Suncani Hvar</a> chain of hotels offers 20%
         discount using this code (please click on the 'this' to show it or call us if it doesn't work).
      </p>

      <hr />

      <h2>THINGS TO DO IN CROATIA</h2>
      <p>Coming soon!
      </p>
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

  </div>
);      

ReactDOM.render(websiteContent, document.getElementById('content'));
