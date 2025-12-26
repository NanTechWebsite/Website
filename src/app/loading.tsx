import Image from "next/image";
import logo from "@/assets/logo.jpg";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[50] flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-16 animate-pulse">
                    <Image
                        src={logo}
                        alt="Loading..."
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
