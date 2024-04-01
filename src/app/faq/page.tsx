import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions related to the www.buyarug.com website and the Alexander Carpet showroom.'
}

export default async function FAQPage() {
  return (
    <section className='prose tw-page-space mx-auto'>
      <h1>FAQ</h1>

      <div>
        <h2>
          Can my rug be delivered to a different address than my billing
          address?
        </h2>
        <p>
          Yes we can deliver to a neighbour, relative or a place of work. All we
          ask is that someone is present to check for damage and sign for the
          delivery. You must first notify us by e-mail that you accept full
          responsibility should it go missing or if damage is incurred after it
          has been delivered.
        </p>
      </div>

      <div>
        <h2>What if I miss a delivery?</h2>
        <p>
          If you are out or do not hear a delivery, the courier may try to
          deliver your rug to a neighbour. If you would rather this didnt happen
          just advise us when you order your rug and we will inform the
          couriers. In this instance your courier will leave a card with a
          contact telephone number. Simply phone and arrange a second delivery
          at a mutually convenient time.
        </p>
      </div>

      <div>
        <h2>Can I track my order online?</h2>
        <p>
          In the vast majority of cases, yes you can. When your rug is ready to
          be despatched you will receive an e-mail with a tracking number so you
          can follow its progress and what day it is due to be delivered.
        </p>
      </div>

      <div>
        <h2>Can I return my rug if I don&apos;t like it?</h2>
        <p>
          Yes. If its not right for you simply e-mail or write to us within 7
          days of delivery and let us know you are returning the rug. We will
          issue you with a return number and ask you to return the rug within
          fourteen working days. Please ensure that the rug is securely wrapped
          either in its original wrapping or similar strong waterproof wrapping.
          As long as it is returned to us in its as new condition we will issue
          a full refund after inspection. If any goods go missing in transit
          then we are unable to offer a refund. The cost of the return is your
          responsibility. We would strongly advise you to use an insured
          signature required courier and that you wrap it carefully (do not fold
          as creases can become permanent). If the rug is returned in a less
          than perfect condition the goods will remain your property. We will
          advise you accordingly and hold the rug at our premises for a period
          of one month for you to collect or arrange courier collection.
        </p>
      </div>

      <div>
        <h2>My rug packaging is damaged, what do I do?</h2>
        <p>
          We only use reputable couriers and all goods should leave securely
          wrapped but occasionally accidents will happen! Please inspect your
          delivery before signing and refuse it if damaged. We will arrange a
          replacement as speedily as we can.
        </p>
      </div>

      <div>
        <h2>What if my rug is faulty or not what I ordered?</h2>
        <p>
          In the unlikely event that your rug has a manufacturing defect or
          there is a delivery shortage, please advise us by phone or e-mail
          within 48 hours of delivery. We will, at our expense, arrange a
          collection and upon satisfactory, inspection arrange for a replacement
          to be sent. You should make goods available for collection on a
          weekday. We will only pay for one pick up attempt, thereafter a charge
          of £25 will be levied for each subsequent attempt.
        </p>
      </div>

      <div>
        <h2>Is this a fault?</h2>
        <p>
          Probably the most common complaint for wool and acrylic pile rugs is
          &quot;shedding&quot; whereby excess pile fibres work loose. Just as in
          carpets excess pile will rub off with usage. This is normal and in no
          way detracts from the wear of your rug and as such is not deemed a
          fault. Please be assured your rug is not wearing out and the shedding
          is not detrimental to your rugs wear. If you are in any doubt about
          whether your rug is faulty please phone our FREEPHONE NUMBER 0800 028
          1782 during normal office hours and describe the problem.
        </p>
      </div>

      <div>
        <h2>How realistic are the colours of your images online?</h2>
        <p>
          Frankly some are accurate and others less so! Unfortunately many
          factors can limit the colour reproduction and like other online
          retailers we do our best but it is not a perfect scenario. Please feel
          free to phone our FREEPHONE NUMBER 0800 0281782 and we will do our
          best to describe the colours of any particular rug to you. If we do
          not know the rug we will speak to someone who does and call you back.
          Our advice will be honestly and freely given but obviously we cannot
          be liable for what must ultimately be your choice. As such any rug
          returned because the colour, texture or pattern is not as hoped for
          can not be treated as faulty goods.
        </p>
      </div>

      <div>
        <h2>Can I cancel my order?</h2>
        <p>
          You have the right to cancel any standard order prior to despatch for
          a full refund. If the rug has already been despatched by ourselves or
          our Suppliers then it will be deemed a return (see above) and return
          carriage will be at your expense. Any custom made rug cannot be
          cancelled for a refund once production has started.
        </p>
      </div>
    </section>
  )
}
