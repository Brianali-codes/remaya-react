import TrueFocus from './trueFocus';


export default function Blog(){

    return(
        <>
        <div className="flex flex-col justify-center items-center h-fit bg-slate-300 p-5" id="Blog">
            <p className="desc text-center text-md ">
                <TrueFocus 
                sentence="The Blog."
                manualMode={false}
                blurAmount={2}
                borderColor="rgb(67, 67, 253)"
                animationDuration={1}
                pauseBetweenAnimations={1}
                />
            </p>
            <br />
            <p>Remaya's Blog</p>



        </div>
        </>
    )




}