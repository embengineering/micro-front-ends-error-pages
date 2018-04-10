import React from 'react';
import './Page.css';

const Page = ({ title }) =>
  <div class="intro-header">
    <div class="container">
      <div class="intro-message">
        <h1>{title}</h1>
      </div>
    </div>
  </div>;

export default Page;
