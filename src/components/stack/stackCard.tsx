import Image from "next/image";


interface StackCardProps {
    title: string;
    category: string;
    image: string;

}

export function StackCard({ title, category, image }: StackCardProps) {
    return (
        <div className="w-[230px] h-[260px] rounded-md border flex flex-col justify-center items-center">
            <Image className="rounded-md" src={image} alt={title} width={70} height={70} />

            <p className="text-Black text-xl font-bold">{title}</p>

            <div className="border p-2 m-auto flex items-center justify-center text-base w-[100px]">{category}</div>
        </div>
    )
}