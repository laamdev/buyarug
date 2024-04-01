import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery Policy',
  description: 'Delivery policy for Buy a Rug.'
}

export default async function DeliveryPolicyPage() {
  return (
    <div className='tw-page-space prose mx-auto'>
      <div>
        <h1>Delivery Policy</h1>

        <div>
          <p>
            Our Standard delivery is FREE to most addresses in the UK. Most rugs
            will be delivered within 7 working days but please allow up to 14
            days as some are shipped from Mainland Europe and beyond.
          </p>
          <p>In addition we offer the following:</p>
          <ul>
            <li>Delivery before 12.00 noon weekdays: £12.95</li>
            <li>Delivery before 12.00 noon Saturday: £29.95</li>
          </ul>
          <p>
            If you need your rug urgently just phone 0118 9788 050 and we can
            check stock and quote you our fastest delivery time at our most
            competitive rate.
          </p>
        </div>
      </div>

      <div>
        <h2>International Delivery Policy</h2>
        <div>
          <p>At present buyarug.co.uk can only ship to UK addresses.</p>
        </div>
      </div>
    </div>
  )
}
