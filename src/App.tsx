import { useEffect, useState } from "react";
import { ResponsiveSankey as Sankey } from "@nivo/sankey";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import { getSankeyData } from "data";

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [includeUncategorised, setIncludeUncategorised] = useState(true);
  const [include2Up, setInclude2Up] = useState(true);
  const [startDate, setStartDate] = useState(addMonths(new Date(), -1));
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    sessionStorage.setItem("token", token);
    if (!token) return;
    setData(null);
    setLoading(true);
    getSankeyData({
      token,
      startDate,
      endDate,
      includeUncategorised,
      include2Up,
    })
      .then(setData)
      .catch((error) => {
        alert("An error occurred while loading data: " + error.message);
      })
      .finally(() => setLoading(false));
  }, [token, startDate, endDate, includeUncategorised, include2Up]);

  return (
    <div className="App flex flex-col h-screen">
      <header className="items-end flex flex-row">
        <img
          className="inline px-1"
          height="48"
          width="48"
          alt="Up API"
          src="https://developer.up.com.au/static/token-18df4d86f1e1fd5c90883ea927fbfb73.gif"
        />{" "}
        <h1 className="text-3xl px-1">Up Sankey</h1>
        <form className="px-1">
          Using my{" "}
          <a
            className="text-blue-400"
            href="https://api.up.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            personal access token
          </a>{" "}
          of{" "}
          <input
            type="password"
            placeholder="up:yeah:..."
            value={token}
            onFocus={(event) =>
              event.target.setSelectionRange(0, event.target.value.length)
            }
            onChange={(event) => setToken(event.target.value)}
          ></input>
          , show transactions from{" "}
          <input
            type="date"
            value={formatDate(startDate)}
            max={formatDate(endDate)}
            onChange={(event) => setStartDate(event.target.valueAsDate)}
          ></input>{" "}
          to{" "}
          <input
            type="date"
            value={formatDate(endDate)}
            min={formatDate(startDate)}
            max={formatDate(new Date())}
            onChange={(event) => setEndDate(event.target.valueAsDate)}
          ></input>
          ,{" "}
          <label>
            <input
              type="checkbox"
              checked={include2Up}
              onChange={(e) => setInclude2Up(e.target.checked)}
            />{" "}
            <span className="underline">include 2Up expenses</span>
          </label>{" "}
          and{" "}
          <label>
            <input
              type="checkbox"
              checked={includeUncategorised}
              onChange={(e) => setIncludeUncategorised(e.target.checked)}
            />{" "}
            <span className="underline">include uncategorised expenses</span>
          </label>
          .
        </form>
      </header>

      <main className="flex-grow m-2">
        {loading && <h2>Loading...</h2>}
        {data != null && !loading && (
          <Sankey
            isInteractive
            data={data}
            animate
            labelOrientation="horizontal"
            labelPosition="inside"
            linkBlendMode="normal"
            linkOpacity={0.3}
            nodeSpacing={20}
            nodeOpacity={1}
            margin={{ left: 10, top: 10, bottom: 10, right: 10 }}
            enableLinkGradient
            sort="input"
            align="start"
            valueFormat={(cents) => currency.format(cents / 100)}
            colors={{ scheme: "dark2" }}
            labelTextColor="white"
            theme={{
              tooltip: { container: { color: "black" } },
              labels: { text: { fontWeight: "bold" } },
            }}
          />
        )}
      </main>
    </div>
  );
}

function formatDate(date: Date) {
  return format(date, "yyyy-MM-dd");
}

export default App;
