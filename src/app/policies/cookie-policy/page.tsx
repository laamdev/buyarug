import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Buy a Rug website'
}

export default async function CookiePolicyPage() {
  return (
    <div className='tw-page-space prose mx-auto'>
      <h1>Cookies Policy</h1>

      <div>
        <p>
          To enhance your experience on our sites, many of our web pages use
          &quot;cookies&quot;. Cookies are small text files that we place in
          your computer&apos;s browser to store your preferences. Cookies, by
          themselves, do not tell us your email address or other personal
          information unless you choose to provide this information to us by,
          for example, registering at one of our sites. Once you choose to
          provide a web page with personal information, this information may be
          linked to the data stored in the cookie. A cookie is like an
          identification card. It is unique to your computer and can only be
          read by the server that gave it to you.
        </p>
        <p>
          We use cookies to understand site usage and to improve the performance
          and content of our site. For example, we may use cookies to
          personalise your experience on our web pages (e.g. to recognise you by
          name when you return to our site). We also may use cookies to offer
          you products and services.
        </p>
        <p>
          Cookies save you time as they help us to remember who you are. Cookies
          help us to be more efficient. We can learn about what content is
          important to you and what is not. We can revise or remove web pages
          that are not of interest and focus our energies on content you want.
        </p>
        <p>
          If you want to control which cookies you accept. You can configure
          your browser to accept all cookies or to alert you every time a cookie
          is offered by a website&apos;s server. Most browsers automatically
          accept cookies. You can set your browser option so that you will not
          receive cookies and you can also delete existing cookies from your
          browser. You may find that some parts of the site will not function
          properly if you have refused cookies. Please be aware that if you do
          not configure your browser you will accept cookies provided by this
          website.
        </p>
        <p>
          How to see cookies that you have accepted. You can configure your
          browser to accept all cookies or to alert you every time a cookie is
          offered by a website&apos;s server.
        </p>
      </div>
    </div>
  )
}
