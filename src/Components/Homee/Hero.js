import React from "react"
import { Carousel,Button  } from 'antd';


const items = [
  {
    
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus',
  },
  {
    key: '2',
    title:'Work better together. Schedule meetings',
    content:'mAn vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key:'3',
    title:'The best app to increase your productivity',
    content:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function AppHero(){
  return(
    <div className="heroBlock" >
       <Carousel >
       {items.map(item=>{
         return(
           <div id="hero" className="container-fluid" key={item.key}>
             <div className="content">
               <h1>{item.title}</h1>
               <p> {item.content}</p>
               <div className ="btnHolder">
               <Button type="primary" size="large">Learn More</Button>
               <Button size="large"><i className="fas fa-desktop"></i>Watch a Demo</Button>
               </div>
             </div>
           </div>
         );
         })}
    {/* <div>
      <h3 >1</h3>
    </div>
    <div>
      <h3 >2</h3>
    </div>
    <div>
      <h3 >3</h3>
    </div>
    <div>
      <h3 >4</h3>
    </div> */}
  </Carousel>
    </div>
  );
};
export default AppHero;
