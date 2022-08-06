import { useState } from "react";
import { ResponsiveSankey as Sankey } from "@nivo/sankey";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import { getSankeyData } from "data";
import toast from "react-hot-toast";

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const [data, setData] = useState(null);
  const [includeUncategorised, setIncludeUncategorised] = useState(true);
  const [include2Up, setInclude2Up] = useState(false);
  const [startDate, setStartDate] = useState(addMonths(new Date(), -1));
  const [endDate, setEndDate] = useState(new Date());

  function fetchData(event) {
    event.preventDefault();
    sessionStorage.setItem("token", token);
    if (!token) return;

    toast.promise(
      getSankeyData({
        token,
        startDate,
        endDate,
        includeUncategorised,
        include2Up,
      }).then((responseData) => {
        setData(responseData);
        return responseData;
      }),
      {
        loading: "Loading transactions...",
        success: (data) => `Loaded ${data.transactionCount} transactions.`,
        error: (error) => {
          console.error(error);
          return `Error occurred while loading data: ${error.message}`;
        },
      }
    );
  }

  return (
    <div className="App flex flex-col h-screen bg-dark-blue text-white">
      <header className="items-end flex flex-row">
        <img
          className="inline px-1"
          height="48"
          width="48"
          alt="Up API"
          src="https://developer.up.com.au/static/token-18df4d86f1e1fd5c90883ea927fbfb73.gif"
        />{" "}
        <h1 className="text-3xl px-1 text-orange">Up Sankey</h1>
        <form className="px-1">
          Using my <PAT /> of{" "}
          <input
            className="bg-blue text-pink font-bold p-1 rounded-sm"
            type="password"
            placeholder="up:yeah:..."
            value={token}
            onFocus={(event) =>
              event.target.setSelectionRange(0, event.target.value.length)
            }
            onChange={(event) => setToken(event.target.value)}
          ></input>{" "}
          show transactions from{" "}
          <input
            className="bg-blue text-pink font-bold p-1 rounded-sm"
            type="date"
            value={formatDate(startDate)}
            max={formatDate(endDate)}
            onChange={(event) => setStartDate(event.target.valueAsDate)}
          ></input>{" "}
          to{" "}
          <input
            className="bg-blue text-pink font-bold p-1 rounded-sm"
            type="date"
            value={formatDate(endDate)}
            min={formatDate(startDate)}
            max={formatDate(new Date())}
            onChange={(event) => setEndDate(event.target.valueAsDate)}
          ></input>{" "}
          <button
            className="bg-orange text-yellow p-1 mx-1 rounded-sm"
            onClick={fetchData}
          >
            Let’s go!
          </button>{" "}
          Options:{" "}
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

      <main className="flex-grow m-2 text-center">
        {data == null && (
          <h2 className="m-4 text-pink">
            👋 Welcome. This is a tool to view your financial transactions in a{" "}
            <Link href="https://en.wikipedia.org/wiki/Sankey_diagram">
              Sankey diagram
            </Link>
            . Grab your <PAT /> and paste it in the text box above. Your token
            will never be sent anywhere other than the Up API, and none of your
            financial data will be stored.
          </h2>
        )}
        {data != null && (
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

      <footer className="p-1 text-center">
        <small>
          Built by{" "}
          <Link
            className="text-yellow underline"
            href="https://twitter.com/lucasazzola"
          >
            @lucasazzola
          </Link>
          . Code on <Link href="https://github.com/azz/up-sankey">GitHub</Link>.
        </small>
      </footer>
    </div>
  );
}

function Link(props) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a className="text-yellow underline" {...props} />;
}

function PAT() {
  return (
    <Link
      className="text-yellow underline"
      href="https://api.up.com.au/"
      target="_blank"
      rel="noreferrer"
    >
      personal access token
    </Link>
  );
}

function formatDate(date: Date) {
  return format(date, "yyyy-MM-dd");
}

export default App;
