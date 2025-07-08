import { resumeData } from "../data";

export default function CoreCompetencies() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-2">Core Competencies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {resumeData.coreCompetencies.map((competency, index) => (
          <div
            key={index}
            className="bg-muted/50 px-3 py-2 text-sm font-medium text-center flex items-center justify-center"
          >
            {competency}
          </div>
        ))}
      </div>
    </section>
  );
}