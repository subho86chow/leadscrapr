    'use client';

    import { Badge } from "@/components/ui/badge";
    import {motion} from "framer-motion";
    export default function Component() {
    const features = [
        { text: "Detect non-dedicated sites e.g. Facebook Page", color: "bg-blue-500" },
        { text: "Contact them with o", color: "bg-violet-500" },
        { text: "PageSpeed Insights (Lighthouse)", color: "bg-red-500" },
        { text: "Export to CSV", color: "bg-blue-500" },
        { text: "And more", color: "bg-violet-500" },
        { text: "Synced across all", color: "bg-gray-400" },
    ]

    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div 
            className="flex gap-2 justify-center items-center py-3" 
            animate={{
                translateX: "-50%",
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
        >

            {features.map((feature, index) => (
                <Badge
                key={index}
                className="text-sm sm:text-sm py-0.5 md:py-1.5 sm:py-0.5 font-normal bg-transparent rounded-full border border-black/30 transition-colors flex items-center gap-2 whitespace-nowrap text-black hover:bg-transparent"
                >
                <span className={`w-2 h-2 rounded-full ${feature.color}`} />
                {feature.text}
                </Badge>
            ))}
            {features.map((feature, index) => (
                <Badge
                key={index}
                className="text-sm sm:text-sm py-0.5 md:py-1.5 sm:py-0.5 font-normal bg-transparent rounded-full border border-black/30 transition-colors flex items-center gap-2 whitespace-nowrap text-black hover:bg-transparent"
                >
                <span className={`w-2 h-2 rounded-full ${feature.color}`} />
                {feature.text}
                </Badge>
            ))}

            
        </motion.div>
        </div>
    )
    }



