import { TabsCategory } from "@/components/stack/tabs";
import { useTranslations } from "next-intl";

export default function StackPage() {
    const t = useTranslations("Stack");
    return (
        <div className="w-full flex justify-center items-center mt-9 mb-8">
            <div className="max-w-[1056px] mx-auto px-10">
                <div className="flex-col flex">
                    <p className="text-4xl font-semibold pb-2">{t('title')}</p>
                    <p className="text-lg text-[rgb(109,109,109)] pb-2">{t('description')}</p>
                </div>

                <TabsCategory />
            </div>
        </div>
    )
}