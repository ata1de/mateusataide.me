import { motion } from "framer-motion";
import Image from "next/image";

interface StackCardProps {
    title: string;
    category: string;
    image: string;
}

export function StackCard({ title, category, image }: StackCardProps) {
    return (
        <motion.div
            className="w-[230px] h-[260px] rounded-md border flex flex-col justify-between items-center p-4 shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Image className="rounded-md" src={image} alt={title} width={80} height={80} />
            <p className="text-black text-xl font-bold">{title}</p>
            <div className="border p-2 text-base w-[100px] text-center rounded">{category}</div>
        </motion.div>
    );
}
