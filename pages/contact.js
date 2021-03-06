import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
// import Header from '../components/header';
// import Footer from '../components/footer';
import Link from 'next/link';

export default function Contact() {
  const router = useRouter();
  return (
    <main className='content'>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/img/logo.svg' />
      </Head>
      {/* <Header /> */}
      <section className='contactBanner'>
        <div className='container'>
          <h1>Get in touch With us</h1>
          <h4>Lorem Ipsum is simply dummy text of the printing and</h4>
        </div>
      </section>
      <section className='contactInfo'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 p-md-0'>
              <div className='contactInfoLeft'>
                <h2>Contact info</h2>
              </div>
            </div>
            <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 p-md-0'>
              <div className='contactInfoRight'>
                <ul className='list-unstyled m-0'>
                  <li>
                    <h3>Location</h3>
                    <p>
                      L-102, Prime Mall Irla, Vile Parle<br></br> (W), Mumbai -
                      400 056
                    </p>
                  </li>
                  <li>
                    <h3>Contact no</h3>
                    <p>
                      <Link href='tel:8422898422'>+91-8422 89 8422</Link>
                      <Link href='tel:8422898422'>+91-8422 89 8422</Link>
                    </p>
                  </li>
                  <li>
                    <h3>Email</h3>
                    <p>
                      <Link href='mailto:info@proteq.co.in'>
                        info@proteq.co.in
                      </Link>
                    </p>
                  </li>
                  <li>
                    <h3>Timing</h3>
                    <p>
                      Mon to Sat ??? 10:30 am to 6:30 pm <br></br>Sunday ??? closed
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contactForm'>
        <div className='contactBg'></div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry???s standard
              </p>
              <h1 className='heading mb-4'>contact us</h1>
              <form>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                    />
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone Number'
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <textarea
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                    ></textarea>
                  </div>
                  <div className='col-md-12 text-right'>
                    <button type='button' className='btn'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src='img/contactFom-Img.png' className='contactFormImg' />
      </section>
      <section className='contactMap'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9875784307906!2d72.83788341437722!3d19.108200855926253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90b1c944469%3A0x8f5d3c94ff32e51d!2sProteQ!5e0!3m2!1sen!2sin!4v1619601695658!5m2!1sen!2sin'
          width='100%'
          height='450'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </section>
      {/* <Footer /> */}
    </main>
  );
}
