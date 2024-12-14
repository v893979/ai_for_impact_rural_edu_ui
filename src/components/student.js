import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import Navbar8 from '../components/navbar8'
import './contact10.css'
import AudioPlayer from './AudioPlayer';


const Student = (props) => {
    const audioFileUrl = '/Grade7-Maths.wav'; // If stored in the 'public' directory
    const audioFileUrl_1 = '/Grade7-Maths_Entire_book.wav';
    const audioFileUrl_Geometry = '/Geometry.wav';

    return (
      <div className="contact10-container1 thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content1 thq-flex-row">
            <div className="contact10-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact10-text18">Your Live Virtual Teacher, Abby</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact10-text20">
                      Your live virtual teacher Abby teaches mathematics to grade 7 students. 
                    </span>
                  </Fragment>
                )}
              </p>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <button className="navbar8-action11 thq-button-animated thq-button-filled" onClick={() => {
                            window.open("https://ddna-vaibhav-rastogi-org93bf--eduzone.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzM2NDAxNDYsImlzcyI6InNpZ25lZF91cmwtYzJiY2UxYjctNjJjOC00NjQ5LTgxNGItMmM4Mzk2NjJmOWZkIiwiZXhwIjoxODE5OTUzNzQ2LCJlbWFpbCI6InZhaWJoYXYtcmFzdG9naS1vcmc5M2JmLS1lZHV6b25lQGRkbmEuc3R1ZGlvIiwic291bElkIjoiZGRuYS12YWliaGF2LXJhc3RvZ2ktb3JnOTNiZi0tZWR1em9uZSJ9.iEGW1_6tP1xf9EYXd6xZ_M0aR0TciMSxFuTugmwaDQ0", "_blank", "noopener,noreferrer");
                        }}>
                        <span>
                            {props.action1 ?? (
                            <Fragment>
                                <span className="navbar8-text23">Learn live from your teacher</span>
                            </Fragment>
                            )}
                        </span>
                    </button>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="contact10-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact10-text18">Your Recorded Video Lessons</span>
                  </Fragment>
                )}
              </h2>
              <div className="video-container"> {/* Add a container for styling if needed */}
                <div>
                    <Fragment>
                        <span className="contact10-text18"><b>Recorded lecture on exploration of whole numbers</b><br/></span>
                    </Fragment>
                </div>
                    <iframe
                    width="560"  // Adjust width as needed
                    height="315" // Adjust height as needed
                    src="https://www.youtube.com/embed/ghy5ZYcoCzM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
          </div>
          <div>
            <div className="contact10-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact10-text18">Your Recorded Podcasts</span>
                  </Fragment>
                )}
              </h2>
              <div>
                <span>Podcast on the content of entire grade 7 book</span>
                <AudioPlayer audioSrc={audioFileUrl_1} />
              </div>
              <div>
                <span>Chapter 1: Whole Numbers</span>
                <AudioPlayer audioSrc={audioFileUrl} />
              </div>
              <div>
                <span>Chapter 2: Geometry</span>
                <AudioPlayer audioSrc={audioFileUrl_Geometry} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  Student.defaultProps = {
    location2Description: undefined,
    location2: undefined,
    location2ImageSrc:
      'https://images.unsplash.com/photo-1599652301647-d5ee6100b577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE4ODE3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    heading1: undefined,
    location1: undefined,
    location2ImageAlt: 'Email Icon',
    content1: undefined,
    location1ImageAlt: 'Main Office Image',
    location1Description: undefined,
    location1ImageSrc:
      'https://images.unsplash.com/photo-1573227895118-8f8fa1172a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjE4ODE3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  }
  
  Student.propTypes = {
    location2Description: PropTypes.element,
    location2: PropTypes.element,
    location2ImageSrc: PropTypes.string,
    heading1: PropTypes.element,
    location1: PropTypes.element,
    location2ImageAlt: PropTypes.string,
    content1: PropTypes.element,
    location1ImageAlt: PropTypes.string,
    location1Description: PropTypes.element,
    location1ImageSrc: PropTypes.string,
  }
  
  export default Student
