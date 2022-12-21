const processes = [
  {
    name: "A",
    arrival: 0,
    burst: 5,
  },
  {
    name: "B",
    arrival: 2,
    burst: 3,
  },
  {
    name: "C",
    arrival: 3,
    burst: 2,
  },
];
let incomingProcesses = [];
let processesQueue = [];
let pausedProcesses = [];
let runningProcess = null;
let finishedProcesses = [];

const quantum = 2;
let quantumCount = 0;
let cicle = 0;
let quantumCicleCounter = 0;
let end = false;

function main() {
  incomingProcesses = [...processes];
  while (!end) {
    printCicle();

    // Starting processes
    checkStartingProcesses();

    // Running processes
    if (cicle === 0) {
      changeRunningProcess();
    }
    if (checkQuantumJump()) {
      changeRunningProcess();
      resetQuantumCicleCounter();
    }

    console.log(`Running process: ${runningProcess.name}`);
    runningProcess.burst--;
    processesQueue.forEach(process => {
      console.log(`In queue: ${process.name}`);
    });

    // Finish process
    if (runningProcess.burst === 0) {
      console.log(`Finished process: ${runningProcess.name}`);
      finishedProcesses.push({ ...runningProcess, endCicle: cicle });
      runningProcess = null;
      end = checkEnd();
      if (end) return;
      changeRunningProcess();
      resetQuantumCicleCounter();
    } else {
      quantumCicleCounter++;
    }

    cicle++;

    if (cicle === 20) {
      console.error("Bucle infinit");
      return;
    }
  }
}

function checkQuantumJump() {
  if (quantumCicleCounter === quantum) return true;
  return false;
}

function resetQuantumCicleCounter() {
  quantumCicleCounter = 0;
  quantumCount++;
}

function checkStartingProcesses() {
  if (incomingProcesses.length > 0) {
    const startingProcesses = incomingProcesses.filter(checkStarting);
    startingProcesses.forEach(process => {
      console.log(`Starting process: ${process.name}`);
    });
    processesQueue = [...processesQueue, ...startingProcesses];
    incomingProcesses = incomingProcesses.filter(checkQueue);
  }
}

function checkStarting(process) {
  return process.arrival === cicle;
}

function checkRunning(process) {
  if (process !== runningProcess) return process;
}

function checkQueue(process) {
  if (!processesQueue.includes(process)) return process;
}

function changeRunningProcess() {
  saveRunningProcess();
  if (processesQueue.length > 0) {
    runningProcess = processesQueue[0];
    processesQueue = processesQueue.filter(checkRunning);
  } else if (pausedProcesses.length > 0) {
    runningProcess = pausedProcesses[0];
    pausedProcesses = pausedProcesses.filter(checkRunning);
  }
}

function saveRunningProcess() {
  if (runningProcess) {
    pausedProcesses.push({ ...runningProcess });
  }
}

function checkEnd() {
  if (
    runningProcess === null &&
    incomingProcesses.length === 0 &&
    processesQueue.length === 0 &&
    pausedProcesses.length === 0
  )
    return true;
  return false;
}

function printCicle() {
  console.log("---");
  console.log(`Cicle ${cicle}`);
  console.log(`Quantum ${quantumCount}`);
}

main();
console.log("---");

console.log("Finished processes:", finishedProcesses);
