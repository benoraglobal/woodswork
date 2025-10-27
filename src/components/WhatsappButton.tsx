"use client";

import { SiWhatsapp } from "react-icons/si";

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/19703425944?text=Hello!%20I%27d%20like%20to%20get%20a%20free%20consultation%20about%20wood%20projects."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg text-white animate-bounce hover:bg-green-600 transition"
            aria-label="Talk to us on WhatsApp"
        >
            <SiWhatsapp className="text-3xl" />
        </a>
    );
}