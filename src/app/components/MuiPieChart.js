"use client";

import { Stack } from "@mui/material";
import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

// const datas = [
//   { label: "OK", name: "OK", value: 10, color: "green" },
//   { label: "NOK", name: "NOT OK", value: 1, color: "red" },
//   { label: "CON", name: "WITH CONDITION", value: 1, color: "yellow" },
// ];

export default function MuiPieChart({datas, page}) {
  // * For Hydration issue create a domLoad state
  const [domLoaded, setDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  const customLegend = datas.map((entry) => ({
    value: entry.name,
    color: entry.color,
  }));

  return (
    <>
      {domLoaded && (
        <Stack direction="row">
          <div className="mx-auto mt-3">
            <PieChart width={300} height={ page === "MONITORING" ? 300 : 400 }>
              <Pie
                data={datas}
                cx={150}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ label, value }) => `${label}: ${value}`}
              >
                {datas.map((entry, index) => (
                  <Cell key={`cell-${entry.label}`} fill={entry.color} />
                ))}
              </Pie>
              {/* <Tooltip formatter={(value, name) => name}/> */}

              { page === "MONITORING" || <Legend payload={customLegend} layout="vertical"/> }
            </PieChart>
          </div>
        </Stack>
      )}
    </>
  );
}
