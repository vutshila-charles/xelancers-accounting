import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What are your service fees?',
      answer:
        "What are your service fees? We charge from R1500 - R6000. Before any payments are made, we take it upon ourselves to set up a meeting when and where it's convenient for our clients. It is our duty to make sure clients are aware of what takes place in the process.",
        
    },
    {
      question: 'What are the differences between an accountant, a CPA and a bookkeeper?',
      answer: "Both Certified Public Accountants (CPAs) and bookkeepers are accounting professionals. In the context of CPA vs bookkeeper, the primary difference between the two lies in their job responsibilities, salary, and professional stature. While a CPA’s key role is to provide financial advice, a bookkeeper is mainly responsible for maintaining an organized record of all financial transactions.  A bookkeeper keeps a history of every financial transaction in the accounting books. A CPA analyzes these books and offers appropriate financial advice. Thus, a bookkeeper and CPA complement each other to ensure that a company maintains a sound financial position in the long run.",
    }
  ],
  [
  ],
  [
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-20 overflow-hidden bg-slate-50 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto text-center max-w-7xl lg:mx-0">
          <p className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg leading-7 font-display text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
