import React, {useEffect, useRef } from "react";
import { motion, useInView, useAnimation} from "framer-motion";

export const Reveal = ({ children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: .5})


    return (<div ref={ref} style={{position:"relative"}} >
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={isInView? "visible" : "hidden"}
            transition= {{duration: 1, ease:"easeOut"}} >
                
                {children}
        </motion.div>
    </div>
    )       
}