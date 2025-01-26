import { baseUrl } from "app/sitemap";
import type { Metadata } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with Adrian Villanueva",
	alternates: {
		canonical: `${baseUrl}/contact`,
	},
	openGraph: {
		title: "Contact | Adrian Villanueva",
		description: "Get in touch with Adrian Villanueva",
		url: `${baseUrl}/contact`,
		siteName: "Adrian Villanueva",
		locale: "en_US",
		type: "website",
	},
};

export default function ContactPage() {
	return (
		<section className="space-y-8 animate-fade-in">
			<div className="space-y-4">
				<h1
					className="text-3xl font-bold tracking-tight bg-clip-text text-transparent
          bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600
          dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400"
				>
					Contact
				</h1>
				<p className="text-neutral-700 dark:text-neutral-300">
					Get in touch with me through email or social media.
				</p>
			</div>

			<div className="space-y-4">
				<a
					href="mailto:adrian.villanueva.martinez@outlook.com"
					className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300
            hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
				>
					<MdEmail className="h-4 w-4" />
					<span>adrian.villanueva.martinez@outlook.com</span>
				</a>
				<a
					href="https://github.com/adrianvillanueva997"
					className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300
            hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="h-4 w-4" />
					<span>GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/adrian-villanueva-martinez/"
					className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300
            hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="h-4 w-4" />
					<span>LinkedIn</span>
				</a>
			</div>
		</section>
	);
}