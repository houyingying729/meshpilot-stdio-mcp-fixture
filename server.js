import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", (line) => {
  let payload;
  try {
    payload = JSON.parse(line);
  } catch {
    console.log(JSON.stringify({ error: "invalid_json" }));
    return;
  }

  console.log(JSON.stringify({
    jsonrpc: "2.0",
    id: payload.id ?? null,
    result: {
      fixture: true,
      echo: payload.params ?? payload
    }
  }));
});

