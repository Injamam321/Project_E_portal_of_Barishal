import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-full mt-24">
            <div
                className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-[#8a173f] via-[#428ab4] to-[#08887d] md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full"
            >
                <div
                    className="rounded-full h-full w-full bg-slate-100 background-blur-md"
                ></div>
            </div>

        </div>
    );
};

export default LoadingSpinner;
