const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      //'./html/APrices.html': path.resolve(__dirname, 'template/js/blow-gummies/html/APrices.html'),
      //'./html/AccountPoints.html': path.resolve(__dirname, 'template/js/blow-gummies/html/AccountPoints.html'),
      //'./html/DiscountApplier.html': path.resolve(__dirname, 'template/js/blow-gummies/html/DiscountApplier.html'),
      //'./js/DiscountApplier.js': path.resolve(__dirname, 'template/js/blow-gummies/js/DiscountApplier.js'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.js'),
    }
  }
})
