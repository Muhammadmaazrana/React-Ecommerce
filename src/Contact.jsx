import React from 'react'

function Contact() {
  return (
    <div className='contact my-3'>
      <h2 style={{textAlign:'center'}}>contact</h2><br />
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57835.05249927212!2d67.03004959186745!3d25.04456583219071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb343c1727792b3%3A0x774c5ea8a254dbbf!2sSurjani%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1685096468795!5m2!1sen!2s" 
      width="100%" 
      height="400" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container contact-form my-3">
      <form action="https://formspree.io/f/mknaavdd" method='POST'>
  <input type="text" class="form-control" name='user' id="exampleFormControlInput1" placeholder="Enter User Name"/>

    <br />
  <input type="email" class="form-control" name='email' id="exampleFormControlInput1" placeholder="Enter your Email"/>
<br />
  <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea><br />
<button type="submit" class="btn btn-primary">Submit</button></form></div>

    


      {/* <div>
      <form className='contact-form' action="">
        <input type="text" placeholder='Enter User Name' name='user' />
        <input type="email" placeholder='Enter Your Email' name='email' />
        <textarea name="text-area"  cols="30" rows="10"></textarea>
     <input type="submit" />
      </form></div> */}
    </div>
  )
}

export default Contact



// import styled from "styled-components";

// const Contact = () => {
//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return <Wrapper></Wrapper>;
// };

// export default Contact;
