import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Frugal Serious Manatee</title>
        <meta property="og:title" content="Frugal Serious Manatee" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#features</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#teachers</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#parents</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Features</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">For Teachers</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">For Parents</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Sign In</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Get Started</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our AI-powered learning platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore our features including AI-Powered Virtual Tutor and
              Personalized Learning Paths.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Tools for teachers to manage classrooms, track student progress,
              and personalize instruction.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Track your child&apos;s progress and communicate effectively with
              our parent dashboard.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Welcome to our cutting-edge AI-powered learning platform that
              revolutionizes the way students learn and excel. With our virtual
              tutor, personalized learning paths, interactive materials, and
              more, education has never been more engaging and effective.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Empower Your Learning with AI-Powered Education
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">AI-Powered Virtual Tutoring</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">
              Teacher Tools &amp; Classroom Management
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Educational Podcast Creation</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              AI-powered virtual tutor to assist students in learning
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Tools for teachers to manage classrooms, track individual student
              progress, personalize instruction, and communicate effectively
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Automatically create educational podcasts on various topics
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Sign up now and unlock the power of AI-driven education!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to revolutionize your learning experience?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">AI-Powered Virtual Tutor</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Adaptive Assessments</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Interactive Learning Materials</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Get personalized tutoring sessions with our AI-powered virtual
              tutor to enhance your learning experience.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Take adaptive assessments that adjust to your skill level,
              providing targeted feedback and insights for improvement.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Engage with interactive learning materials that make studying fun
              and effective.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">$99.99/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Sign Up Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">$199.99/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Sign Up Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">$299.99/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">AI-Powered Virtual Tutor</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Personalized Learning Paths</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Interactive Learning Materials</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">All features in Basic Plan</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Automated Educational Podcasts</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">
              Tools for Creative Tasks Assistance
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">All features in Standard Plan</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Adaptive Assessments</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">Classroom Management Tools</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Sign Up</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Take Assessments</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Engage with Virtual Tutor</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Track Progress</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Create an account on our platform to access all the features and
              resources.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Complete adaptive assessments to identify your strengths and areas
              for improvement.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Interact with our AI-powered virtual tutor for personalized
              learning experiences.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Monitor your progress, view personalized learning paths, and
              access interactive learning materials.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              Great platform for students of all levels.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              Highly recommend for teachers looking to personalize instruction.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Fun and engaging way to learn new concepts.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              A must-have tool for parents who want to stay involved in their
              child&apos;s education.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              My child has shown remarkable improvement in their grades since
              using this platform. The personalized learning paths have really
              made a difference!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">Emily Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Michael Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">Parent</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Teacher</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Student</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Parent</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">123 AI Way, Education City</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">support@ailearningplatform.com</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Visit our main office for inquiries and support.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              Email us for any assistance or questions.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
