import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import './Value.css'
import data from '../../Utils/Accordion'
const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className='padding innerWidth flexCenter v-container'>
            {/* Legt section Value */}
            <div className='v-left'>
                <div className='image-container'>
                    <img src='./realstate.jpg' alt='' />
                </div>
            </div>
            {/* Right Side Of Value  */}
            <div className=' flexColStart v-right'>
                <span className='orangeText'> Our Valur</span>
                <span className='primaryText'> Value We Give to You</span>
                <span className='secondaryText'>We always ready to help by providing the best services<br/>
                We belive a good place to live can make your life better
                </span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]} 
                >
                    {
                        data.map((item , i)=>{
                            return (
                                <AccordionItem className='accordianItem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className=' flexCenter accordionButton'>
                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <spam className="primaryText">{item.heading}</spam>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
                

            </div>


        </div>

    </section>
  )
}

export default Value
