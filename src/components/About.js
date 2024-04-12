import React, {useState} from 'react';


// export default function About() {
//     const [myStyle, setMyStyle]=useState({
//         color: 'white',
//         backgroundColor: "black"
//     })
//     const [btntext, setBtnText]=useState("Enable Dark Mode")
//     const toggleStyle = ()=>{
//         if(myStyle.color === 'white'){
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white',
//                 border: "1px solid state"
//             })
//             setBtnText("Enable Dark Mode")
//         }
//         else{
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black'
//             })
//             setBtnText("Enable Light Mode")
//         }
//     }

//     return (
//         <div className='container my-2' style={myStyle}> 
//             <h1>About Us</h1>
//             <div id="accordion">
//                 <div className="card">
//                     <div className="card-header" id="headingOne">
//                         <h5 className="mb-0">
//                             <button className="btn btn-link" data-toggle="collapse" style={myStyle} data-target="#collapseOne" type='button' aria-expanded="false" aria-controls="collapseOne">
//                                 Collapsible Group Item #1
//                             </button>
//                         </h5>
//                     </div>
//                     <div className="card-body" id="collapseOne"  aria-labelledby="headingOne" data-parent="#accordion">
//                         <div className="collapse"  style={myStyle}  >
//                         <div >
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div className="card-header" id="headingTwo">
//                         <h5 className="mb-0">
//                             <button className="btn btn-link collapsed" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" type='button' aria-expanded="false" aria-controls="collapseTwo">
//                                 Collapsible Group Item #2
//                             </button>
//                         </h5>
//                     </div>
//                     <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
//                         <div className="card-body" style={myStyle}>
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div className="card-header" id="headingThree">
//                         <h5 className="mb-0">
//                             <button className="btn btn-link collapsed" data-toggle="collapse" style={myStyle} data-target="#collapseThree" type='button' aria-expanded="false" aria-controls="collapseThree">
//                                 Collapsible Group Item #3
//                             </button>
//                         </h5>
//                     </div>
//                     <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
//                         <div className="card-body" style={myStyle} >
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='container my-2'>
//                 <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
//             </div>
//         </div>
//     );
// }

export default function About() {
    const [myStyle, setMyStyle]=useState({
        color: 'white',
        backgroundColor: "black"
    })
    const [btntext, setBtnText]=useState("Enable Dark Mode")
    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: "1px solid state"
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
    }

    return (
        <div className='container my-2' style={myStyle}>
            <h1>About Us</h1>
            <div class="accordion my-1" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            
            <div class="accordion-item my-1">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div class="accordion-item my-1">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className='container my-2'>
                 <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
             </div>
            </div>
        </div>
    );
}
