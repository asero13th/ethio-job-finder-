import React from 'react'
import { Image } from 'react-bootstrap'
function About() {
  return (
    <div className='mt-3 container p-5' style={{minHeight: "19vh", backgroundColor: "#f6f8fa"}}>
      <div className='d-flex justify-content-between mb-5'>
        <div class="image-container">
          <Image src="https://media.istockphoto.com/id/1345144783/photo/freelancers-working-on-new-projects.jpg?b=1&s=170667a&w=0&k=20&c=NAX0oItlF3lpBX8RmwNbS74yqrg-UvRqSl2nmcK8icM=" alt=""/>
        </div>
        <div class="text-container" style={{width: "30%"}}>
          <h2 class="upper-header">About us</h2>
            <p>We proudly boast of a team of experienced professionals who have served job seekers and clients in the 
              African job market for over 25 years. We have a team of qualified individuals committed to providing a 
              transparent service to all our customers. With their years of expertise in the field, our team is confident in 
              providing the best possible service to everyone.</p>
              
        </div>
      </div>
        <div className='d-flex justify-content-between'>
            <div style={{width: "30%"}}>
              <h2 class="upper-header">Why choose us?</h2>
                <p>We proudly boast of a team of experienced professionals who have served job seekers and clients in the 
                  African job market for over 25 years. We have a team of qualified individuals committed to providing a 
                  transparent service to all our customers. With their years of expertise in the field, our team is confident in 
                  providing the best possible service to everyone.</p>
                  <p>We provide a streamlined solution to our clients with customized recruitment services, payroll management, 
                    and HR consulting. By partnering with thousands of clients, we can deliver quality services and support to 
                    those who need it most.</p>
                    <p>With a team of experienced professionals with years of experience in this field, Africa Jobs Network is an
                      ideal choice for quality recruitment and HR services.</p>
              </div>
              <div >
                <Image src="https://media.istockphoto.com/id/1345144783/photo/freelancers-working-on-new-projects.jpg?b=1&s=170667a&w=0&k=20&c=NAX0oItlF3lpBX8RmwNbS74yqrg-UvRqSl2nmcK8icM=" alt=""/>
              </div>
          </div> 

    </div>
  )
}

export default About