import React from 'react'

function Footer() {
  return (
    <div className='p-5 mt-4' style={{backgroundColor: "#333"}}>
      <div className=' foot ' style={{ color: "white", display: "flex" , justifyContent: "space-around"}}>
        <div className="about">
              <p>
                <h3 id="about">About</h3>
                <p><a href="About.html">About us</a></p>
                <p><a href="About.html">how it works</a></p>
                <p><a href="About.html">Careers</a></p>
                <p><a href="About.html">accessibility</a></p>
                <p><a href="About.html">advertising</a></p>
              </p>
        </div>
        <div >
              <p>
                  <h3 >Terms</h3>
                  <p><a href="terms.html">Privacy Policy</a></p>
                  <p><a href="terms.html"> Terms and Conditions</a></p>
                  <p><a href="terms.html"> Copyright Policy</a></p>
                  <p><a href="terms.html"> Code of Conduct</a></p> 
              </p>
        </div>
        <div >
              <p>
                <h3 id="about">contact me</h3>
                <p><a href="https://www.aserhailu2020@gmail.com">aserhailu2020@gmail.com</a></p>
                <p><a href="About.html">+251953101912</a></p>
                <p><a href="About.html"> AASTU, Tulu Dimtu, Addis Ababa, Ethiopia</a></p>
              </p>
           
            </div>
          <div class="about">
            <p>
              <h3 id="about">Job seekers</h3>
              <p><a href="About.html">Find Jobs</a></p>
              <p><a href="About.html">Register</a></p>
              <p><a href="About.html">post CV</a></p>
              <p><a href="About.html">Job Alerts</a></p>
            </p>
          </div>
          <div class="terms">
              <p>
                <h3 id="terms">work with us</h3>
                <p><a href="terms.html">Contact Admin</a></p>
                <p><a href="terms.html">Become partner</a></p>
                <p><a href="terms.html"> Explore</a></p>
                <p><a href="terms.html"> Code of Conduct</a></p>
            </p>
            </div>
    </div>
    <div>
    <div className="copyright">
          <p> 
            Placeholder ® is a registered Trademark of Placeholder Technology Pty Limited ()
          </p>
          <p>
            Copyright &copy; 2022 Placeholder Technology Pty Limited ()
          </p>
        </div>
    </div>
    </div>
  )
}

export default Footer