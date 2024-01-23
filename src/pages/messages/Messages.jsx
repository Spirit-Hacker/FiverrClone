import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'

const Messages = () => {

//   const currentUser = {
//     id : 1,
//     username : "Pranil",
//     isSeller : true
//  }

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nostrum quidem eos doloremque facere, aliquam reiciendis beatae optio? 
                  Voluptates molestiae similique perferendis eaque a debitis reprehenderit 
                  tenetur odit voluptatum? Magnam, quasi!`

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className='active'>
            <td>
              Pranil Dhutraj
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>2 hours ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr className='active'>
            <td>
              Pranil Dhutraj
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>3 hours ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td>
              Pranil Dhutraj
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>3 days ago</td>
          </tr>

          <tr>
            <td>
              Pranil Dhutraj
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>4 day ago</td>
          </tr>

          <tr>
            <td>
              Pranil Dhutraj
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>5 days ago</td>
          </tr>
          
          <tr>
            <td>
              Pranil Dhutraj
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>6 days ago</td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Messages
