import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import { ButtonLink } from '@/components/Button'

const testimonials = [
  [
    {
      content:
        'The relationship is more on a personal level than just business because Xelancers chooses to get to know their clients/business on a personal level. Like Ntsako would say "coffee first...then rest shall follow". Love everything about it..',
      author: {
        name: 'CEO ',
        role: 'at RN Billion',
        image: avatarImage1,
      },
    },
    {
      content:
        'They educate you about your taxes. You are able to keep track of everything they do on a daily basis because Xelancers gives you access to their system logins. That gives me a peace of mind knowing things are getting done.',
      author: {
        name: 'CEO',
        role: 'at RN Billion',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'The best part about Xelancers is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: avatarImage5,
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with Xelancers. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with Xelancers I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: avatarImage3,
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20 bg-gray-100 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="testimonials-title"
            className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl"
          >
            Why XeLancers?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We are so simple to work with that people can’t help but fall in love
            with our services. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          <div className="px-4 py-8 bg-white rounded-md">
                  Every individual and business has different accounting needs, and we are here for any and every financial
                  challenge you may face. XeLancers is ready to serve as a voice of reason for your tax planning and financial advising demands. We want to help you make the best decisions possible.
                  Our personalized accounting services and solutions have helped our clients manage a better financial future.
          </div>
          <div className="px-4 py-8 bg-white rounded-md">
          You got into business to do more of what you love and if keeping your books isn’t it, no problem! We reconcile your books weekly so you can spend more time doing the things you love, and less time on the things you don’t.
          </div>
        </div>
        </Container>
        <div className="max-w-lg mx-auto text-center">
          <ButtonLink href="mailto:nkunantsako396@gmail.com" color="blue" className="mt-10">
              Get In Touch
          </ButtonLink>
        </div>
    </section>
  )
}
