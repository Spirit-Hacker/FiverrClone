import React from 'react'
import "./Orders.scss"

const Orders = () => {

  const currentUser = {
    id : 1,
    username : "Pranil",
    isSeller : true
}

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>

          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Orders
