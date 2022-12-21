import * as Controller from './controller.js';

const settingsContainer = document.querySelector('.settings');
const processesContainer = document.querySelector('.processes');

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
  Controller.processes.forEach((process) => {
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