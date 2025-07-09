import { resumeData } from "../data";

export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Education</h2>
      <div className="space-y-6">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="border-l-4 border-primary/20 pl-6 relative">
            <div className="absolute -left-2.5 top-0 w-4 h-4 bg-primary"></div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree} in {edu.field}</h3>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>{edu.startDate} - {edu.endDate}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>

              {edu.honors && edu.honors.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-1">Honors & Recognition:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {edu.honors.map((honor, idx) => (
                      <li key={idx}>{honor}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}