import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { OWNER_NAME } from "@/config";

export default function Terms() {
    return (
        <div className="w-full flex justify-center p-10">
            <div className="w-full max-w-screen-md space-y-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to Chatbot
                </Link>

                <h1 className="text-3xl font-bold">SwasthAI</h1>
                <h2 className="text-2xl font-semibold">Terms of Use / Disclaimer</h2>

                <p className="text-gray-700">
                    The following Terms of Use govern your access and use of SwasthAI, 
                    an informational AI assistant created by {OWNER_NAME}. 
                    SwasthAI is designed to help users understand health insurance and health schemes in India. 
                    By using SwasthAI, you agree to these terms. If you do not agree, please discontinue use.
                </p>

                {/* GENERAL INFORMATION */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">General Information</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-gray-700">
                            <span className="font-semibold">Provider and Purpose:</span> 
                            SwasthAI is a student-developed AI assistant intended for educational and guidance purposes. 
                            Its goal is to simplify publicly available information about Indian health insurance, government health schemes, 
                            and general coverage concepts. SwasthAI is not affiliated with, endorsed by, or officially connected to 
                            any insurer, third-party administrator, hospital, or government authority.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Third-Party Involvement:</span> 
                            SwasthAI uses third-party AI platforms and cloud services to process and generate responses. 
                            User inputs may be stored or processed on external servers. 
                            While reasonable care is taken, confidentiality and data security cannot be guaranteed. 
                            Users should avoid sharing sensitive personal details such as Aadhaar numbers, policy numbers, medical records, or banking information.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">No Guarantee of Accuracy:</span> 
                            The insurance landscape in India changes frequently. 
                            SwasthAI may occasionally provide incomplete, outdated, or inaccurate information. 
                            Users should verify all important details through official sources, insurers, or certified advisors 
                            before making decisions.
                        </li>
                    </ol>
                </div>

                {/* LIABILITY */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liability</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">Use at Your Own Risk:</span> 
                            SwasthAI is provided on an “as-is” and “as-available” basis. 
                            By using this assistant, you acknowledge that:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>SwasthAI may generate errors or incomplete information.</li>
                                <li>No warranties are given regarding accuracy, reliability, usefulness, or suitability of responses.</li>
                                <li>All information is for general informational purposes only.</li>
                            </ul>
                            Users are fully responsible for how they interpret and use the information provided.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">No Professional Advice:</span> 
                            SwasthAI does not provide medical, legal, or financial advice. 
                            It is not a substitute for consultation with a licensed insurance advisor, doctor, or legal professional. 
                            Always seek qualified guidance for personal or urgent matters.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Modification or Discontinuation:</span> 
                            {OWNER_NAME} may update, improve, restrict, or discontinue SwasthAI at any time without prior notice.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Future Fees:</span> 
                            SwasthAI is currently free to use. However, {OWNER_NAME} may introduce paid features or services in the future.
                        </li>
                    </ol>
                </div>

                {/* USER RESPONSIBILITIES */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">User Responsibilities</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">Eligibility:</span> 
                            SwasthAI is intended for users aged 18 and above.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Prohibited Conduct:</span>
                            By using SwasthAI, you agree not to:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>Submit illegal, harmful, abusive, discriminatory, or misleading content.</li>
                                <li>Use the chatbot for fraud, policy manipulation, or misrepresentation.</li>
                                <li>Attempt to hack, disrupt, or degrade the system.</li>
                                <li>Reverse engineer or replicate the underlying technology without permission.</li>
                            </ul>
                        </li>

                    </ol>
                </div>

                {/* DATA PRIVACY */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Data Privacy and Security</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">No Privacy Guarantee:</span> 
                            SwasthAI does not guarantee privacy or confidentiality. 
                            Conversations may be reviewed by {OWNER_NAME} and collaborators 
                            for debugging, improvement, research, or project evaluation.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Public Information:</span> 
                            Content shared within the chatbot should be treated as non-confidential. 
                            Avoid sharing personal identifiers or sensitive private data.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Data Transmission:</span> 
                            Inputs may be transmitted to third-party AI providers for processing.
                        </li>

                    </ol>
                </div>

                {/* OWNERSHIP */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Ownership of Content and Commercial Use</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">Surrender of Rights:</span> 
                            By using SwasthAI, you grant {OWNER_NAME} full rights to use any inputs or outputs 
                            for research, academic, development, or commercial purposes without compensation.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Commercial and Research Use:</span> 
                            {OWNER_NAME} may use anonymized content from SwasthAI conversations 
                            for product improvements, educational projects, research, or commercial work.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">No Claim to Gains or Profits:</span> 
                            Users agree they hold no rights or claims to any economic benefit derived 
                            from the use of SwasthAI or its outputs.
                        </li>

                    </ol>
                </div>

                {/* INDEMNIFICATION */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Indemnification</h3>
                    <p className="text-gray-700">
                        By using SwasthAI, you agree to indemnify and hold harmless 
                        {OWNER_NAME}, collaborators, and affiliated entities from any claims, 
                        losses, liabilities, or damages arising from your use of the chatbot or violation of these terms.
                    </p>
                </div>

                {/* GOVERNING LAW */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Governing Law and Jurisdiction</h3>
                    <p className="text-gray-700">
                        These terms are governed by applicable Indian law. 
                        Any disputes arising out of the use of SwasthAI will be subject to the jurisdiction 
                        of the courts located in India.
                    </p>
                </div>

                {/* ACCEPTANCE */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Acceptance of Terms</h3>
                    <p className="text-gray-700">
                        By continuing to use SwasthAI, you confirm that you have read, understood, 
                        and agreed to these Terms of Use. If you do not agree, please discontinue use immediately.
                    </p>
                </div>

                <div className="mt-8 text-sm text-gray-600">
                    <p>Last Updated: February 2025</p>
                </div>
            </div>
        </div>
    );
}
