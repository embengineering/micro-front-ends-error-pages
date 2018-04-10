import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

class ErrorPage extends HTMLElement {
  get title() {
    return this.getAttribute('title');
  }

  connectedCallback() {
    ReactDOM.render(<Page title={this.title} />, this);
  }
}

window.customElements.define('error-page', ErrorPage);


