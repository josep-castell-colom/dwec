// const processes = [
//   {
//     name: "A",
//     arrival: 0,
//     burst: 5,
//   },
//   {
//     name: "B",
//     arrival: 2,
//     burst: 3,
//   },
//   {
//     name: "C",
//     arrival: 3,
//     burst: 2,
//   },
// ];

// Wikipedia example
const processes = [
  {
    name: "P1",
    arrival: 0,
    burst: 1,
  },
  {
    name: "P2",
    arrival: 0,
    burst: 2,
  },
  {
    name: "P3",
    arrival: 0,
    burst: 4,
  },
  {
    name: "P4",
    arrival: 0,
    burst: 6,
  },
  {
    name: "P5",
    arrival: 0,
    burst: 8,
  },
  {
    name: "P6",
    arrival: 11,
    burst: 8,
  },
  {
    name: "P7",
    arrival: 11,
    burst: 6,
  },
  {
    name: "P8",
    arrival: 11,
    burst: 4,
  },
  {
    name: "P9",
    arrival: 11,
    burst: 2,
  },
  {
    name: "P10",
    arrival: 11,
    burst: 1,
  },
];

let incomingProcesses = [];
let processesQueue = [];
let runningProcess = null;
let pausedProcesses = [];
let finishedProcesses = [];

const quantum = 3;
let quantumCounter = 0;
let cycle = 0;
let quantumCycleCounter = 0;
let end = false;

function simulation() {
  incomingProcesses = [...processes];
  while (!end) {
    printCycle();

    checkStartingProcesses();

    if (quantumCycleCounter === 0) {
      changeRunningProcess();
    }

    runRunningProcess();

    printQueues();

    checkFinishProcessAndQuantumJump();
    cycle++;
  }
  console.log("---");
  console.log("Finished processes:", finishedProcesses);
}

function checkQuantumJump() {
  if (quantumCycleCounter === quantum) return true;
  return false;
}

function resetQuantumCycleCounter() {
  quantumCycleCounter = 0;
  quantumCounter++;
}

function checkStartingProcesses() {
  if (incomingProcesses.length > 0) {
    const startingProcesses = incomingProcesses.filter(checkStarting);
    startingProcesses.forEach(process => {
      console.log(`Starting process: ${process.name}`);
    });
    processesQueue = [...processesQueue, ...startingProcesses];
    processesQueue = processesQueue.map(process => {
      process.cyclesLeft = process.burst;
      return process;
    });
    incomingProcesses = incomingProcesses.filter(checkQueue);
  }
}

function runRunningProcess() {
  console.log(`Running process: ${runningProcess.name}`);
  runningProcess.cyclesLeft--;
}

function checkStarting(process) {
  return process.arrival === cycle;
}

function checkNotRunning(process) {
  if (process !== runningProcess) return process;
}

function checkQueue(process) {
  if (!processesQueue.includes(process)) return process;
}

function checkFinishProcessAndQuantumJump() {
  if (runningProcess.cyclesLeft === 0) {
    console.log(`Finished process: ${runningProcess.name}`);
    finishedProcesses.push({ ...runningProcess, endCycle: cycle });
    runningProcess = null;
    end = checkEnd();
    if (end) return;
    resetQuantumCycleCounter();
  } else {
    quantumCycleCounter++;
    if (checkQuantumJump()) {
      resetQuantumCycleCounter();
    }
  }
}

function changeRunningProcess() {
  pauseRunningProcess();
  if (processesQueue.length > 0) {
    runningProcess = processesQueue[0];
    processesQueue = processesQueue.filter(checkNotRunning);
  } else if (pausedProcesses.length > 0) {
    runningProcess = pausedProcesses[0];
    pausedProcesses = pausedProcesses.filter(checkNotRunning);
  }
}

function pauseRunningProcess() {
  if (runningProcess) {
    pausedProcesses.push({ ...runningProcess });
    runningProcess = null;
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

function printCycle() {
  console.log("---");
  console.log(`Cycle ${cycle}`);
  if (quantumCycleCounter === 0) {
    console.log(`Quantum ${quantumCounter}`);
  }
}

function printQueues() {
  if (processesQueue.length > 0) {
    let queue = "In queue:";
    processesQueue.forEach(process => {
      queue += ` ${process.name}`;
    });
    console.log(queue);
  }
  if (pausedProcesses.length > 0) {
    let paused = "Paused:";
    pausedProcesses.forEach(process => {
      paused += ` ${process.name}`;
    });
    console.log(paused);
  }
}

// simulation();

process.stdout.write('hola');
process.stdout.write('adios');