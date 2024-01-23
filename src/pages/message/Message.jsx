import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className='link' to="/messages">MESSAGES</Link> {" > PRANIL DHUTRAJ"}
        </span>
        <div className="messages">

          <div className="item">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item owner">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item owner">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item owner">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item owner">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item owner">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>
          <div className="item owner">
            <img src="http://localhost:3000/pdimage.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eum est odit, voluptate quidem expedita, ratione a 
              corrupti ea voluptatibus illum nemo eos vel porro obcaecati quos, 
              excepturi adipisci accusantium minus illo molestiae sunt pariatur? 
              Aliquid numquam aperiam eius itaque.
            </p>
          </div>

        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='Write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
