import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns Policy',
  description: 'Returns policy for Buy a Rug.'
}

export default async function ReturnPolicyPage() {
  return (
    <div className='tw-page-space prose mx-auto'>
      <h1>Returns Policy</h1>

      <div>
        <p>
          We hope you love your rug but sometimes things just don&apos;t work
          out. If you wish to return your rug for any reason please notify us by
          email within 14 days of delivery to shop@buyarug.co.uk. The cost of
          returning goods in this situation is your responsibility.
        </p>
        <p>
          The biggest difficulty with online purchasing of rugs is colour
          reproduction which can be down to the screen settings on your device
          or the photography itself. Unfortunately we currently have no means of
          improving this aspect and hence cannot be held responsible if the rug
          is not as envisaged.
        </p>
        <p>
          There are many online courier services available and if you would like
          help with size, weight or anything else just get in touch.
        </p>
        <p>
          When returning, please ensure that the rug is securely wrapped in
          strong plastic and sealed to protect from transit damage. We would
          advise insuring and tracking your return as refunds will not be made
          if the rug has been used or damaged.
        </p>
      </div>
    </div>
  )
}
