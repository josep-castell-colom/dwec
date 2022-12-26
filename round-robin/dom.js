import * as Controller from "./controller.js";

const settingsContainer = document.querySelector(".settings");
const processesContainer = document.querySelector(".processes");
const renderContainer = document.getElementById("render-simulation");

export function renderSettings() {
  let output = `
    <table>
      <caption><h3>Processes</h3></caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Arrival</th>
          <th>Burst</th>
        </tr>
      </thead>
      <tbody>
  `;
  Controller.processes.forEach(process => {
    output += `
        <tr>
          <td>${process.name}</td><td>${process.arrival}</td><td>${process.burst}</td>
        </tr>
    `;
  });
  output += `
      </tbody>
    </table>
  `;
  processesContainer.innerHTML = output;
  output = `
    <p>Quantum: ${Controller.quantum}</p>
  `;
  settingsContainer.innerHTML += output;
}

export function initializeSimulationTable() {
  const cycleContainer = document.createElement("div");
  cycleContainer.id = "cycle-container";
  cycleContainer.className = "cycle-container flex";
  const cycleTitle = document.createElement("span");
  cycleTitle.className = "process-title flex";
  cycleTitle.innerText = "Cycle";
  cycleContainer.appendChild(cycleTitle);
  renderContainer.appendChild(cycleContainer);

  Controller.incomingProcesses.forEach(process => {
    const processContainer = document.createElement("div");
    processContainer.id = `process-${process.name}-container`;
    processContainer.className = "cycle-container flex";
    const processTitle = document.createElement("span");
    processTitle.className = "process-title flex";
    processTitle.innerText = `Process ${process.name} (${process.arrival}, ${process.burst})`;
    processContainer.appendChild(processTitle);
    renderContainer.appendChild(processContainer);
  });
}

export function renderSimulationCycle() {
  const newCycle = document.createElement("span");
  newCycle.className = "cell flex";
  newCycle.innerText = Controller.cycle;
  document.getElementById("cycle-container").appendChild(newCycle);

  const runningCell = generateCell("running");
  document
    .getElementById(`process-${Controller.runningProcess.name}-container`)
    .appendChild(runningCell);

  Controller.incomingProcesses.forEach(process => {
    const cell = generateCell("hidden");
    document
      .getElementById(`process-${process.name}-container`)
      .appendChild(cell);
  });

  Controller.pausedProcesses.forEach(process => {
    const cell = generateCell("waiting");
    document
      .getElementById(`process-${process.name}-container`)
      .appendChild(cell);
  });

  Controller.processesQueue.forEach(process => {
    const cell = generateCell("waiting");
    document
      .getElementById(`process-${process.name}-container`)
      .appendChild(cell);
  });

  Controller.finishedProcesses.forEach(process => {
    const cell = generateCell("hidden");
    document
      .getElementById(`process-${process.name}-container`)
      .appendChild(cell);
  });
}

function generateCell(status) {
  const cell = document.createElement("span");
  cell.className = `cell ${status}`;
  return cell;
}
