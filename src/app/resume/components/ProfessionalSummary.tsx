import { resumeData } from "@/data";

export default function ProfessionalSummary() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Professional Summary</h2>
      <div className="text-foreground/80 leading-relaxed text-lg">
        {resumeData.personalInfo.summary.map((summary, index) => (
          <p key={index} className="mb-4">{summary}</p>
        ))}
      </div>
    </section>
  );
}