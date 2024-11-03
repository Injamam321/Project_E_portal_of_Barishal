
interface HeroTitleProps {
    headingtext: string
}


const HeroTitle = ({ headingtext }: HeroTitleProps) => {
    return (
        <div className="md:w-3/12 mx-auto text-center font-bold my-4">
            <h3 className="text-4xl uppercase py-2 text-red-600">
                {headingtext}
            </h3>
        </div>
    )
}

export default HeroTitle