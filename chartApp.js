// Initialize charts for each port
function initializeChart1() {
  const port = 12345;
  const ctx = document.getElementById(`chart_${port}`).getContext("2d");
  const chartOptions = {
    // title: `Voltage Measurement on ${getBusNumber(port)}`, // You can add title if needed
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Fuel flow rate",
        },
        ticks: {
          // Format y-axis labels to display three decimal points
          callback: function (value, index, values) {
            return value.toFixed(3);
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Increase line width
      },
    },
    plugins: {
      legend: {
        labels: {
          // Change colors for better contrast
          color: "black",
        },
      },
    },
  };

  // Create a WebSocket connection for each port
  const socket = new WebSocket(`ws://localhost:8080/receiveData/${port}`);

  // Initialize an empty chart
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Fuel flow rate",
          data: [],
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });

  socket.addEventListener("message", (event) => {
    const newData = JSON.parse(event.data);
    updateChartData(newData);
  });

  // Handle WebSocket connection errors
  socket.addEventListener("error", (error) => {
    console.error(`WebSocket error on port ${port}:`, error);
  });

  // Update chart data with new data
  function updateChartData(newData) {
    const maxDataPoints = 20; // Maximum number of data points to display

    // Add new data to the chart
    chart.data.labels.push(newData.time);
    chart.data.datasets[0].data.push(newData.value1);
    // Remove oldest data if the number of data points exceeds the maximum
    if (chart.data.labels.length > maxDataPoints) {
      chart.data.labels.shift(); // Remove the oldest label
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift(); // Remove the oldest data point from each dataset
      });
    }

    // Update the chart
    chart.update();
  }
}

function initializeChart2() {
  const port = 12346;
  const ctx = document.getElementById(`chart_${port}`).getContext("2d");
  const chartOptions = {
    // title: `Voltage Measurement on ${getBusNumber(port)}`, // You can add title if needed
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Utilization",
        },
        ticks: {
          // Format y-axis labels to display three decimal points
          callback: function (value, index, values) {
            return value.toFixed(3);
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Increase line width
      },
    },
    plugins: {
      legend: {
        labels: {
          // Change colors for better contrast
          color: "black",
        },
      },
    },
  };

  // Create a WebSocket connection for each port
  const socket = new WebSocket(`ws://localhost:8080/receiveData/${port}`);

  // Initialize an empty chart
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Oxygen",
          data: [],
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
        {
          label: "Hydrogen",
          data: [],
          borderColor: "rgba(54, 162, 235, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });

  socket.addEventListener("message", (event) => {
    const newData = JSON.parse(event.data);
    updateChartData(newData);
  });

  // Handle WebSocket connection errors
  socket.addEventListener("error", (error) => {
    console.error(`WebSocket error on port ${port}:`, error);
  });

  // Update chart data with new data
  function updateChartData(newData) {
    const maxDataPoints = 20; // Maximum number of data points to display

    // Add new data to the chart
    chart.data.labels.push(newData.time);
    chart.data.datasets[0].data.push(newData.value1);
    chart.data.datasets[1].data.push(newData.value2);
    // Remove oldest data if the number of data points exceeds the maximum
    if (chart.data.labels.length > maxDataPoints) {
      chart.data.labels.shift(); // Remove the oldest label
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift(); // Remove the oldest data point from each dataset
      });
    }

    // Update the chart
    chart.update();
  }
}

function initializeChart3() {
  const port = 12347;
  const ctx = document.getElementById(`chart_${port}`).getContext("2d");
  const chartOptions = {
    // title: `Voltage Measurement on ${getBusNumber(port)}`, // You can add title if needed
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Stack consumption",
        },
        ticks: {
          // Format y-axis labels to display three decimal points
          callback: function (value, index, values) {
            return value.toFixed(3);
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Increase line width
      },
    },
    plugins: {
      legend: {
        labels: {
          // Change colors for better contrast
          color: "black",
        },
      },
    },
  };

  // Create a WebSocket connection for each port
  const socket = new WebSocket(`ws://localhost:8080/receiveData/${port}`);

  // Initialize an empty chart
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Air",
          data: [],
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
        {
          label: "Fuel",
          data: [],
          borderColor: "rgba(54, 162, 235, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });

  socket.addEventListener("message", (event) => {
    const newData = JSON.parse(event.data);
    updateChartData(newData);
  });

  // Handle WebSocket connection errors
  socket.addEventListener("error", (error) => {
    console.error(`WebSocket error on port ${port}:`, error);
  });

  // Update chart data with new data
  function updateChartData(newData) {
    const maxDataPoints = 20; // Maximum number of data points to display

    // Add new data to the chart
    chart.data.labels.push(newData.time);
    chart.data.datasets[0].data.push(newData.value1);
    chart.data.datasets[1].data.push(newData.value2);

    // Remove oldest data if the number of data points exceeds the maximum
    if (chart.data.labels.length > maxDataPoints) {
      chart.data.labels.shift(); // Remove the oldest label
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift(); // Remove the oldest data point from each dataset
      });
    }

    // Update the chart
    chart.update();
  }
}

function initializeChart4() {
  const port = 12348;
  const ctx = document.getElementById(`chart_${port}`).getContext("2d");
  const chartOptions = {
    // title: `Voltage Measurement on ${getBusNumber(port)}`, // You can add title if needed
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Stack efficiency(%)",
        },
        ticks: {
          // Format y-axis labels to display three decimal points
          callback: function (value, index, values) {
            return value.toFixed(3);
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Increase line width
      },
    },
    plugins: {
      legend: {
        labels: {
          // Change colors for better contrast
          color: "black",
        },
      },
    },
  };

  // Create a WebSocket connection for each port
  const socket = new WebSocket(`ws://localhost:8080/receiveData/${port}`);

  // Initialize an empty chart
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Stack efficiency",
          data: [],
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });

  socket.addEventListener("message", (event) => {
    const newData = JSON.parse(event.data);
    updateChartData(newData);
  });

  // Handle WebSocket connection errors
  socket.addEventListener("error", (error) => {
    console.error(`WebSocket error on port ${port}:`, error);
  });

  // Update chart data with new data
  function updateChartData(newData) {
    const maxDataPoints = 20; // Maximum number of data points to display

    // Add new data to the chart
    chart.data.labels.push(newData.time);
    chart.data.datasets[0].data.push(newData.value1);

    // Remove oldest data if the number of data points exceeds the maximum
    if (chart.data.labels.length > maxDataPoints) {
      chart.data.labels.shift(); // Remove the oldest label
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift(); // Remove the oldest data point from each dataset
      });
    }

    // Update the chart
    chart.update();
  }
}

function initializeChart5() {
  const port = 12349;
  const ctx = document.getElementById(`chart_${port}`).getContext("2d");
  const chartOptions = {
    // title: `Voltage Measurement on ${getBusNumber(port)}`, // You can add title if needed
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltage",
        },
        ticks: {
          // Format y-axis labels to display three decimal points
          callback: function (value, index, values) {
            return value.toFixed(3);
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Increase line width
      },
    },
    plugins: {
      legend: {
        labels: {
          // Change colors for better contrast
          color: "black",
        },
      },
    },
  };

  // Create a WebSocket connection for each port
  const socket = new WebSocket(`ws://localhost:8080/receiveData/${port}`);

  // Initialize an empty chart
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Voltage",
          data: [],
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });

  socket.addEventListener("message", (event) => {
    const newData = JSON.parse(event.data);
    updateChartData(newData);
  });

  // Handle WebSocket connection errors
  socket.addEventListener("error", (error) => {
    console.error(`WebSocket error on port ${port}:`, error);
  });

  // Update chart data with new data
  function updateChartData(newData) {
    const maxDataPoints = 20; // Maximum number of data points to display

    // Add new data to the chart
    chart.data.labels.push(newData.time);
    chart.data.datasets[0].data.push(newData.value1);

    // Remove oldest data if the number of data points exceeds the maximum
    if (chart.data.labels.length > maxDataPoints) {
      chart.data.labels.shift(); // Remove the oldest label
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift(); // Remove the oldest data point from each dataset
      });
    }

    // Update the chart
    chart.update();
  }
}

function initializeChart6() {
  const port = 12350;
  const ctx = document.getElementById(`chart_${port}`).getContext("2d");
  const chartOptions = {
    // title: `Voltage Measurement on ${getBusNumber(port)}`, // You can add title if needed
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Current",
        },
        ticks: {
          // Format y-axis labels to display three decimal points
          callback: function (value, index, values) {
            return value.toFixed(3);
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Increase line width
      },
    },
    plugins: {
      legend: {
        labels: {
          // Change colors for better contrast
          color: "black",
        },
      },
    },
  };

  // Create a WebSocket connection for each port
  const socket = new WebSocket(`ws://localhost:8080/receiveData/${port}`);

  // Initialize an empty chart
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Current",
          data: [],
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });

  socket.addEventListener("message", (event) => {
    const newData = JSON.parse(event.data);
    updateChartData(newData);
  });

  // Handle WebSocket connection errors
  socket.addEventListener("error", (error) => {
    console.error(`WebSocket error on port ${port}:`, error);
  });

  // Update chart data with new data
  function updateChartData(newData) {
    const maxDataPoints = 20; // Maximum number of data points to display

    // Add new data to the chart
    chart.data.labels.push(newData.time);
    chart.data.datasets[0].data.push(newData.value1);

    // Remove oldest data if the number of data points exceeds the maximum
    if (chart.data.labels.length > maxDataPoints) {
      chart.data.labels.shift(); // Remove the oldest label
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift(); // Remove the oldest data point from each dataset
      });
    }

    // Update the chart
    chart.update();
  }
}

// Call initializeChart for each port
initializeChart1();
initializeChart2();
initializeChart3();
initializeChart4();
initializeChart5();
initializeChart6();
