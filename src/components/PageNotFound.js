import React from 'react'
import { Image } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
function PageNotFound() {
  return (
    <div style={{minHeight: "19vh"}}>
        <div className='d-flex justify-content-center mt-3'>
          <Image style= {{width: "80%", height: "70vh", alignSelf: "center"}} src='https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg' />
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <Button variant='outline-warning' href='/'>Back to home page</Button>
        </div>
    </div>
  )
}

export default PageNotFound