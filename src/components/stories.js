import DJ from './stories/DJ'


const Stories = () => {
    return ( 
        <div className=" flex justify-center items-center pt-[50vh]">
            <div className=" h-[160vh] w-screen bg-cardcolor opacity-90 shadow-2xl">
                <h1 className=" font-heading text-subheading text-center text-hovercolor">
                    Stories of those who one against mental illness.
                    <div className=" flex flex-row w-52">
                        <div className=" text-xl flex flex-row">                          
                            <DJ/>
                        </div>
                    </div>
                </h1>
            </div>
        </div>
     );
}
 
export default Stories;
