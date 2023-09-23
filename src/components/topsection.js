import background from '../images/Background.png'

const Topsection = () => {
    return ( 
        <div>
            <div className=' absolute inset-x-0 top-0 -z-20 mx-auto mx-w-   [1800px]'>
            <img src={background} alt="" />
            </div>
            <div className=' text-right pr-12%'>
                <h1 className=' font-heading text-heading  pt-10 text-headingcolor'>
                 Zephyr
                </h1>
                <h2 className=' font-heading text-subheading  pt-0 text-headingcolor'>
                         Find peace in the breeze
                </h2>        
            </div>
        </div>
     );
}
 
export default Topsection;