import React from 'react';
import './style.css';

function About() {
  return (
    <div id ='about'>
   <h1 class="sub-title center-text p-7">About Us</h1>
<div class="container-bg">
  <div class="row">
   <div class="about-col-1">
    <img src="https://images.shiksha.com/mediadata/images/articles/1581614026phpKWQvpu.jpeg" alt=""/>
   </div>

   <div class="about-col-2">
   
    <p >At LegalEd, we believe that every child has the right to understand the world of laws and justice in a way that is engaging, informative, and accessible. Our mission is to empower young minds with a foundational understanding of legal concepts, government workings, and fundamental rights.</p>
    <a href="#" class="btn btn-primary"> More</a>
   </div>
  </div>
</div>
</div>
    
  );
}

export default About;
