import webfontloader from 'webfontloader'

export function loadFonts() {
  webfontloader.load({
    google: {
      families: [
        'Inter:300,400,500,600,700,800,900&display=swap',
        'Poppins:400,500,600,700,800,900&display=swap',
        'Roboto:100,300,400,500,700,900&display=swap'
      ],
    },
    custom: {
      families: ['Font Awesome 6 Free', 'Font Awesome 6 Brands'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css']
    }
  })
}