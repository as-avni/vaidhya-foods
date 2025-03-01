import {ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Back() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    }
    <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full bg-black p-3 shadow-md hover:bg-gray-800"
        size="icon"
        aria-label="Back to top">
        <ArrowUp className="h-5 w-5 text-white" />
    </Button> 
}