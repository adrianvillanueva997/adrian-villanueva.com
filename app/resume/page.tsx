import { baseUrl } from "app/sitemap";
import yaml from "js-yaml";
import type { Metadata } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { Resume } from "./types/resume";

export const metadata: Metadata = {
	title: "Resume | Adrian Villanueva",
	description: "Adrian Villanueva's professional experience and skills",
	alternates: {
		canonical: `${baseUrl}/resume`,
	},
	openGraph: {
		title: "Resume | Adrian Villanueva",
		description: "Adrian Villanueva's professional experience and skills",
		url: `${baseUrl}/resume`,
		siteName: "Adrian Villanueva",
		locale: "en_US",
		type: "website",
	},
};

async function getResumeData(): Promise<Resume> {
	const resumeFile = path.join(process.cwd(), "data", "resume.yaml");
	const resumeYaml = await fs.readFile(resumeFile, "utf8");
	return yaml.load(resumeYaml) as Resume;
}

const pillStyle =
	"px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400";

export default async function ResumePage() {
	const resume = await getResumeData();

	return (
		<section className="space-y-8 animate-fade-in">
			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<div className="space-y-2">
						<h1
							className="text-3xl font-bold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600
            dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400"
						>
							{resume.personal.name}
						</h1>
						<div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
							<span className="flex items-center gap-1">
								🌍 {resume.personal.nationality}
							</span>
							<span className="flex items-center gap-1">
								📍 {resume.personal.location}
							</span>
						</div>
					</div>
					<a
						href="/resume.pdf"
						className="px-4 py-2 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800
              hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						Download PDF
					</a>
				</div>
			</div>

			<div className="space-y-12">
				<section>
					<p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
						{resume.personal.summary}
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">Skills</h2>
					<div className="flex flex-wrap gap-2">
						{Object.values(resume.skills)
							.flat()
							.map((skill) => (
								<span key={skill} className={pillStyle}>
									{skill}
								</span>
							))}
					</div>
				</section>
				<h2 className="text-xl font-semibold mb-4">Experience</h2>

				{resume.experience.map((exp) => (
					<section key={exp.company + exp.startDate} className="space-y-2">
						<div className="flex justify-between">
							<h3 className="font-medium">{exp.company}</h3>
							<span className="text-neutral-600 dark:text-neutral-400">
								{exp.startDate} - {exp.endDate}
							</span>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-neutral-600 dark:text-neutral-400">
								{exp.position}
							</p>
							<span className="text-sm text-neutral-500 dark:text-neutral-400">
								📍 {exp.location}
							</span>
						</div>
						<ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
							{exp.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</section>
				))}

				<section>
					<h2 className="text-xl font-semibold mb-4">Education</h2>
					{resume.education.map((edu) => (
						<div key={edu.institution} className="space-y-2 mb-4">
							<div className="flex justify-between">
								<h3 className="font-medium">{edu.institution}</h3>
								<span className="text-neutral-600 dark:text-neutral-400">
									{edu.startDate} - {edu.endDate}
								</span>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-neutral-600 dark:text-neutral-400">
									{edu.degree}
								</p>
								<span className="text-sm text-neutral-500 dark:text-neutral-400">
									📍 {edu.location}
								</span>
							</div>
						</div>
					))}
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">Languages</h2>
					<div className="flex flex-wrap gap-2">
						{resume.languages.map((lang) => (
							<span key={lang.name} className={pillStyle}>
								{lang.name} ({lang.level})
							</span>
						))}
					</div>
				</section>

				{resume.certifications && resume.certifications.length > 0 && (
					<section>
						<h2 className="text-xl font-semibold mb-4">Certifications</h2>
						<div className="flex flex-wrap gap-2">
							{resume.certifications.map((cert) => (
								<span key={cert.name} className={pillStyle}>
									{cert.name}
								</span>
							))}
						</div>
					</section>
				)}
			</div>
		</section>
	);
}