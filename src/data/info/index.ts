import { HomeIcon, MailIcon, PhoneIcon } from 'lucide-react'

export const storeLocation = {
  name: 'BuyARug.co.uk Showroom',
  address: '91 Bean Oak Rd, Wokingham RG40 1RJ, United Kingdom',
  link: 'https://goo.gl/maps/Cq48m4XZ3oSkVPb19',
  location: {
    longitude: -0.8188943,
    latitude: 51.4129894
  },
  icon: HomeIcon
}

export const contactInfo = [
  {
    name: 'Phone',
    label: '0118 9788 050',
    value: 'tel:01189788050',
    icon: PhoneIcon
  },
  {
    name: 'Email',
    label: 'shop@buyarug.co.uk',
    value: 'mailto:shop@buyarug.co.uk',
    icon: MailIcon
  }
]
