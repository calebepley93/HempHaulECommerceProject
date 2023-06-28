function adjustDividingLines() {
    let products = document.querySelectorAll('.dummy-product');
    let productGrid = document.querySelector('.product-grid');
    let lines = document.querySelectorAll('.dividing-line');
    
    lines.forEach(line => line.remove());
  
    let windowWidth = window.innerWidth;
    
    if(windowWidth >= 900) {
      let hr = document.createElement('hr');
      hr.className = 'dividing-line';
      productGrid.insertBefore(hr, products[4]);
    } else if(windowWidth >= 600) {
      for(let i = 1; i < 4; i++) {
        let hr = document.createElement('hr');
        hr.className = 'dividing-line';
        productGrid.insertBefore(hr, products[i*2]);
      }
    } else {
      for(let i = 0; i < 7; i++) {
        let hr = document.createElement('hr');
        hr.className = 'dividing-line';
        productGrid.insertBefore(hr, products[i+1]);
      }
    }
  }
  
  adjustDividingLines();
  
  window.onresize = adjustDividingLines;
  