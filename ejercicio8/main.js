const votos = [0, 0, 0, 0, 0];
const labels = ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"];
const colores = ["#FF6384", "#36A2EB", "#FFCE56", "#9966FF", "#4CAF50"];
let chart;

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("votosChart").getContext("2d");

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: votos,
          backgroundColor: colores,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw} votos`;
            },
          },
        },
      },
    },
  });
});

function vote(index) {
  votos[index]++;
  chart.update();
}

function reset() {
  for (let i = 0; i < votos.length; i++) {
    votos[i] = 0;
  }
  chart.update();
}
