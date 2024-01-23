import React from 'react'
import "./Gig.scss"
import Slider from 'infinite-react-carousel';

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="breadcrumbs">{"FIVERR > GRAPHICS & DESIGN > "}</div>
          <h1>I will create ai generated art for you</h1>

          <div className="user">
            <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/cc1a0a8d348d7568798a3f29697b2014-1686621430555/aebccb49-7a6b-457a-803b-5c30fe5b18c8.jpg" alt="" 
            />
            <span>Pranil Dhutraj</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/322305795/original/a730cbb399fea1bbc0e896fdca673aa99a2ab014.jpg" alt="" 
            />
            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/322315351/original/44bada1b2909935b92342714600e706c2612de5e.jpg" alt="" 
            />
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/517d7cbf696f5185674d0268089bc4dc-1684270146446/rogueshadow94_a_necromorph_zombie_alian_from_dead_space_with_lo_20803674-d0cd-4dac-bcd1-48104b04f2da-gigapixel-art-scale-2_00x.png" alt=""
            />
          </Slider>

          <h2>About This Gig</h2>
          <p>
          Hi, my name is Pranil. I am a designer with 10 years of experience.
          I have been designing art with the help of AI (Artificial Intelligence) for 2 years. 
          I use it to make one-of-a-kind art pieces that only the imagination can create. 
          This generated art can be anything that you can imagine, 
          Get in contact with me today, and {"let's"} work together to make something never seen before!
          </p>

          <div className="seller">
            <h2>About Seller</h2>
            <div className="user">
              <img src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/6bb5afb909d20eb509faa1fcee26adbf-1684270058210/rogueshadow94_a_horror_scene_inspired_by_the_thing_snow_dark_ic_4c0a5eb2-7093-4d7a-a951-17a68d870ff1-gigapixel-art-scale-2_00x.png" alt="" 
              />
              <div className="info">
                <span>Pranil Dhutraj</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">

                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. responce time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 Day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>

              </div>
              <hr />
              <p>
                My name is Pranil, I enjoy creating AI generated art in my spare time.
                I have a lot of expirience using AI program that means. I know what to prompt
                the AI with to get a great and incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/userimage.png" alt="" />
                <div className="info">
                  <span>Pranil Dhutraj</span>
                  <div className="contry">
                    <img src="/img/tiranga.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
                I use it to make one-of-a-kind art pieces that only the imagination can create.
                This generated art can be anything that you can imagine, Get in contact with me
                today, and {"let's"} work together to make something never seen before!
                I have a lot of expirience using AI program that means. I know what to prompt the
                AI with to get a great and incredibly detailed result.
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
                <span>Yes</span>
              </div>
            </div>

            <hr />

            <div className="item">
              <div className="user">
                <img className='pp' src="/img/userimage.png" alt="" />
                <div className="info">
                  <span>Pranil Dhutraj</span>
                  <div className="contry">
                    <img src="/img/tiranga.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
                I use it to make one-of-a-kind art pieces that only the imagination can create.
                This generated art can be anything that you can imagine, Get in contact with me
                today, and {"let's"} work together to make something never seen before!
                I have a lot of expirience using AI program that means. I know what to prompt the
                AI with to get a great and incredibly detailed result.
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
                <span>Yes</span>
              </div>
            </div>

            <hr />

            <div className="item">
              <div className="user">
                <img className='pp' src="/img/userimage.png" alt="" />
                <div className="info">
                  <span>Pranil Dhutraj</span>
                  <div className="contry">
                    <img src="/img/tiranga.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I use it to make one-of-a-kind art pieces that only the imagination can create.
                This generated art can be anything that you can imagine, Get in contact with me
                today, and {"let's"} work together to make something never seen before!
                I have a lot of expirience using AI program that means. I know what to prompt the
                AI with to get a great and incredibly detailed result.
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
                <span>Yes</span>
              </div>
            </div>

            <hr />
          </div>

        </div>
        <div className="right">

          <div className="price">
            <h3>1. AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique high quality AI generated image based on a description that you give me.</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork Delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image Upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional Design</span>
            </div>
          </div>
          <button>Continue</button>

        </div>
      </div>
    </div>
  )
}

export default Gig
