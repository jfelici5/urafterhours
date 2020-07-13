import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import {Row, Col} from 'antd';
import './App.css';
import erin from './headshots/erin.jpg'

/*C:\Users\jackf\OneDrive\afterhours\public*/

const style = {   padding: '10vw 0' };
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


function Main(){

    return(
<div>        
<section className="et-hero-tabs">
<div className="et-hero-tabs-container">
    <a className="et-hero-tab" href="#tab-es6">HOME</a>
    <a className="et-hero-tab" href="#tab-flexbox">ABOUT</a>
    <a className="et-hero-tab" href="#tab-other">MEMBERS</a>
    <a className="et-hero-tab" href="#tab-react"><img src = {'finallogopng.png'} alt = "pleasework" className = "logo-image-tab"/></a>
    <a className="et-hero-tab" href="#tab-react">MUSIC</a>
    <a className="et-hero-tab" href="#tab-angular">GALLERY</a>
    <a className="et-hero-tab" href="#tab-angular">NEWS</a>
    <span className="et-hero-tab-slider"></span>
  </div>
  <div className = "title-holder">
  <Row>
      <Col span={24}>
          <h1 className = "after">After Hours <h3 className = "premiere">Rochester's premiere co-ed a cappella group</h3></h1>
           
      </Col>
      
    </Row>
  
  
  
  </div>
  
</section>


<main className="et-main">
  <div className ="content-holder">
  <section className="et-slide-about" id="tab-es6">
    <h1><img src = {'finallogopng.png'} alt = "pleasework" className = "logo-image"/></h1>
    <h1 className = "about-heading-text">ABOUT AFTER HOURS</h1>
    <h3 className = "about-text">After Hours, the University of Rochester's oldest co-ed a cappella group, was formed in 1998 as a vocal jazz group called Charivari. In 2000, the group was renamed After Hours and evolved into the ensemble it now is. While our members spend most of their time together building friendships through tight harmonies and kick-ass tunes, we pride ourselves on being close friends outside of rehearsal as well.
    <br/>
    <br/>
After Hours has participated in ICCAs (International Championship of Collegiate A Cappella) throughout its many years of being hosted regionally. In both 2013 and 2015, After Hours placed first in the Regional Division, advancing to the ICCA semifinals. In the 2019 ICCA Regionals, After Hours took third place, and brought home the accolade of “Best Arrangement”, by our talented Reagan Casteel, class of 2020. 
    <br/>
    <br/>
If you'd like to see us live, After Hours has two major concerts per year, one each in the fall and spring, in addition to a joint Meliora Weekend concert with UR's other a cappella groups. Also throughout the school year, we perform at various events and shows often held by other UR clubs. We sing serenades for Valentine's Day and take road trips to any place we possibly can. We also frequently take Spring Break Tours, and sing in different cities such as DC, NYC, Philly, and more!
</h3>
  </section>
  </div>
  </main>
  <section className="et-slide-upcoming" id="tab-es6">
    <h1 className = "about-heading-text">UPCOMING SHOWS</h1>
    <h3 className = "about-text">
      No upcoming shows.
</h3>
  </section>
  <main className="et-main">
  <div className ="content-holder">
  <section className="slideshow" id="tab-flexbox">
    <div className = "grid">
            
            <div className = "grace">
            </div>
             
            <div className = "ben">
                
            </div>
            <div className = "erin">
              
            </div>
            <div className = "sydney">
              
            </div>
            <div className = "steven">
              
            </div>
            <div className = "zoe">
              
            </div>
            <div className = "emma">
              
            </div>
            <div className = "ashwin">
              
            </div>
            <div className = "luke">
              
            </div>
            <div className = "jack">
              
            </div>
            <div className = "franklin">
              
            </div>
          </div>

  </section>
  <section className="slideshow" id="tab-flexbox">
    <div className = "grid">
            
            <div className = "info-holder">
             <div className = "japan">

             </div>
             <div className = "juice-info"></div>
            </div>  
            <div className = "info-holder">
                
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
            <div className = "info-holder">
              
            </div>
          </div>

  </section>
  <section className="et-slide-repertoire" id="tab-react">
    <h1 className ="about-heading-text">OUR REPERTOIRE</h1>
    <h3></h3>

    <div className = "grid">
      <div className = "album-cover">
        <div className = "japan">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">LOST IN JAPAN</p>
          <p className = "album-text">SHAWN MENDES | ARR. REAGAN CASTEEL</p>
        </div>
      </div>  
      <div className = "album-cover">
      <div className = "juice">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">JUICE</p>
          <p className = "album-text">LIZZO | ARR. REAGAN CASTEEL</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "bellyache">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">BELLYACHE</p>
          <p className = "album-text">BILLIE EILISH | ARR. MATT KYONG</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "treasure">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">TREASURE</p>
          <p className = "album-text">BRUNO MARS | ARR. LUKE NASH</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "more">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">MORE AND MANY MORE</p>
          <p className = "album-text">LAWRENCE | ARR. REAGAN CASTEEL</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "acid">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">ACID DREAMS</p>
          <p className = "album-text">MAX | ARR. RYAN RACICOT</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "bestpart">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">BEST PART</p>
          <p className = "album-text">DANIEL CAESAR | ARR. MATT KYONG</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "cough">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">COUGH SYRUP</p>
          <p className = "album-text">YOUNG THE GIANT | ARR. BEN RICHARDSON</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "brooklyn">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">BROOKLYN IN THE SUMMER</p>
          <p className = "album-text">ALOE BLACC | ARR. BEN RICHARDSON</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "soclose">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">SO CLOSE</p>
          <p className = "album-text">NOTD AND FELIX JAEHN | ARR. BEN RICHARDSON</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "heart">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">HEART SHAPED BOX</p>
          <p className = "album-text">NIRVANA | ARR. REAGAN CASTEEL</p>
        </div>
      </div>
      <div className = "album-cover">
      <div className = "dance">
        </div>
        <div className = "juice-info">
          <p className = "album-heading">CAN WE DANCE</p>
          <p className = "album-text">THE VAMPS | ARR. BEN RICHARDSON</p>
        </div>
      </div>
      
    </div>




  </section>
  <section className="et-slide" id="tab-angular">
    <h1>Angular</h1>
    <h3>something about angular</h3>
  </section>
  <section className="et-slide" id="tab-other">
    <h1>Other</h1>
    <h3>something about other</h3>
  </section>
  </div>
</main>
</div>
    );

    
}




export default Main;