function DashboardStats({ urls }) {
  const totalUrls = urls.length;

  const totalClicks = urls.reduce(
    (sum, url) => sum + url.clickCount,
    0
  );

  const activeUrls = urls.filter(
    (url) => url.isActive
  ).length;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-slate-800 p-6 rounded-2xl">
        <p className="text-slate-400">Total URLs</p>
        <h2 className="text-3xl font-bold mt-2">{totalUrls}</h2>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl">
        <p className="text-slate-400">Total Clicks</p>
        <h2 className="text-3xl font-bold mt-2">{totalClicks}</h2>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl">
        <p className="text-slate-400">Active URLs</p>
        <h2 className="text-3xl font-bold mt-2">{activeUrls}</h2>
      </div>
    </div>
  );
}

export default DashboardStats;