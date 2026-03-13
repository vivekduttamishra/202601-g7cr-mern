import Expandable from "./Expandable";
import Border from "./Border";


const FAQ = ({ faqs }) => {

    return (
     <div className='faq'>
         {faqs.map((faq,index) => (
             <Border key={index}>
                 <Expandable title={faq.question}>
                     <p>{faq.answer}</p>
                 </Expandable>
             </Border>
         ))}
     </div>
    )

}

export default FAQ;
