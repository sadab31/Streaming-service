import React, { useState } from "react";
import "../App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Barx = (props) => {
  console.log("Inside Bar");
  console.log(props.value);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <BarChart
          width={1400}
          height={400}
          data={props.value}
          margin={{
            top: 50,
            right: 40,
            left: 30,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 20 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Barx;
