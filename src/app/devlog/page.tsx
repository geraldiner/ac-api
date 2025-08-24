import { getAllLogs } from "@/api/devlog";
import LogPreview from "./_components/LogPreview";

function DevLog() {
  const allLogs = getAllLogs();

  return (
    <div className="grid grid-cols-1 gap-5">
      <h1>Dev Log</h1>
      {allLogs.map(log => (
        <LogPreview
          key={log.slug}
          title={log.title}
          slug={log.slug}
          excerpt={log.excerpt}
        />
      ))}
    </div>
  );
}

export default DevLog;
