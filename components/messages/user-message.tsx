import { UIMessage } from "ai";
import { Response } from "@/components/ai-elements/response";

export function UserMessage({ message }: { message: UIMessage }) {
    return (
        <div className="whitespace-pre-wrap w-full flex justify-end">
            <div className="max-w-lg w-fit px-4 py-3 rounded-[20px] bg-blue-50 border border-blue-200">
                <div className="text-sm">
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return (
                                    <Response key={`${message.id}-${i}`} className="text-blue-700">
                                        {part.text}
                                    </Response>
                                );
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
