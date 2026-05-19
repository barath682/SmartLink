import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ data }) {
  return (
    <div className="bg-slate-700 p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Daily Click Trends
      </h2>

      {data.length === 0 ? (
        <p className="text-slate-400">No chart data available</p>
      ) : (
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="date" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip />
              <Bar dataKey="clicks" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Chart;