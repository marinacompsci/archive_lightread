
const borrowingHeader = '#IABookReaderMessageWrapper';
const navigationFooter = '.BRfooter';

const hiding = `
  #IABookReaderMessageWrapper  {
    display: none;
  }
`;

/////////////// EVENT LISTENERS ///////////////////////////////////

function listenForClicks() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'hide') {
      browser.tabs.insertCSS({code: hiding});
    } else if (e.target.id === 'show') {
      browser.tabs.removeCSS({code: hiding});
    }
  });       
}

listenForClicks();
