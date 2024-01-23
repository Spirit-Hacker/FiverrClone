import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link className='link' to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Actions</th>
          </tr>

          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293166726/original/43632134769a9935463401b384181912c6a4fc2f.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>145</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default MyGigs
