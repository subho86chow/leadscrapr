import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  



const QNAS = [
{   id:1,
    question: "How are credits spent?",
    answer: "A credit is spent for every operational business scanned. For example, if you have 30 credits in your account balance and you have selected a certain area on the world map to scan businesses from, and you get an total of 21 businesses as a result, that means you have 9 credits left in your balance. Just consider this: one credit equals one business to fetch"
},
{   id:2,
    question: "Are the results saved in my account?",
    answer: "Yes, after fetching businesses, they will be saved in your account via our database. You can access them anytime, regardless of the device you're using, as long as you're logged in."
},
{   id:3,
    question: "Are refunds available for credit purchase?",
    answer: "Once you've purchased your credits, they must be used; refunds are not provided."
},{
    id:4,
    question: "Can I choose the number of businesses I want to scan?",
    answer: "Of course! In the form where you scan businesses from a selected area on the world map, you can also specify the maximum number of businesses you want to receive. For instance, if you want to scan accountants from London, but in reality, there are 90 in that location, you can set a limit to receive, let's say, a maximum of 40 of them."
},{
    id:5,
    question: "If I scan 60 businesses in a area, then buy more credits and rescan the same area, will it find new results, or does it remember the businesses from the previous scans in the same area?",
    answer: "Unfortunately, it does not take your saved results into account. In other words, if you scan a certain area and later do the same in that exact place, you will most likely get the same results as before. The exception is when the system detects that a business outside the top 60 has gained more relevance (for example, if they have recently updated their business profile significantly). In such a case, one of the least relevant business in the top 60 might be replaced by the newly more relevant one."
},
]


export const Faqs = () => {
    return (
        <section id="faqs" className="select-none">
        <div className="p-5 sm:p-5 md:py-20 md:px-28">
          <div className="mt-10 sm:mt-10 md:mt-30">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl py-2 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
            Frequently asked questions
            </h1>
            <div className="flex items-center justify-center">
                <div className="container mt-4 sm:mt-5 md:mt-10 py-6">
                    {QNAS.map(({id,question,answer})=>(
                        <Accordion key={id} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm sm:text-lg md:text-xl font-bold text-black/70 py-5 sm:py-5 md:py-5">{question}</AccordionTrigger>
                            <AccordionContent className="text-xm sm:text-xm md:text-lg font-semibold text-black/60 py-5 sm:py-5 md:py-5">
                            {answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    )
};





