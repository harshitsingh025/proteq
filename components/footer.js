import Link from 'next/link'
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <footer>
      <div className="car-top default show">
				<span>
          <img src="img/car.png" />
        </span>
			</div>
      <div className="footerTop">        
        <div className="container">
          <div className="footerLinks">
              <Link href="/about">About Proteq</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/contact">Contact</Link>
          </div>          
          <div className="footerInfo">
            <p><span>Address:</span> L-102, Prime Mall Irla, Vile Parle (W), Mumbai - 400 056</p>
            <p><span>Phone No:</span> <Link href="tel:8422898422">+91-8422 89 8422</Link> <Link href="tel:8422898422"><a className="ml-3"> +91-8422 89 8422</a></Link></p>
            <p><span>Email:</span> info@proteq.co.in</p>
          </div>
          <div className="footerSocial">
            <a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.youtube.com/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-left text-center">
              <p>Copyright©2021 www.proteq.co.in All Rights Reserved.</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-right text-center">
              <div className="copyrightLinks">
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/"><img src="img/whatsapp.svg" className="img-fluid" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
