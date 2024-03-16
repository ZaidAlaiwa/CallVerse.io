const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(element => {
    element.addEventListener('click', () => {
        if (activeItem) {
            activeItem.removeAttribute('id');
        }

        element.setAttribute('id', 'active');
        activeItem = element;

    });
});


//Analytics Percentage - Color Changer
document.addEventListener('DOMContentLoaded', function() {
    var spans = document.querySelectorAll('main .analytics .analytics-boxes .item .progress .info p span');
    spans.forEach(function(span) {
        var content = span.textContent;

        if (content.includes('-')) {
            span.classList.add('negative');
        } else if (content.includes('+')) {
            span.classList.add('positive');
        }
    });
});


// Converstion Ratio Graph
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const monthNames = getMonthNames(currentMonth, 6);
function getMonthNames(startMonth, count) {
  const monthNames = [];
  for (let i = startMonth; i > startMonth - count; i--) {
    const adjustedMonth = (i + 12) % 12; // Adjust for months before January
    const date = new Date(2024, adjustedMonth, 1); // Using a specific year (e.g., 2024)
    monthNames.push(date.toLocaleString('en-US', { month: 'long' }));
  }
  return monthNames.reverse();
}
new Chart("Chart", {
  type: "line",
  data: {
    labels: monthNames,
    datasets: [{ 
      data: [0, 1, 0, 1, 0, 1],
      borderColor: "#7207C7",
      fill: false
    }, { 
      data: [1, 2, 1, 2, 1, 2],
      borderColor: "#6AD2FF",
      fill: false
    }, { 
      data: [2, 3, 2, 3, 2, 3],
      borderColor: "#7207C7",
      fill: false
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        display: false
      }
    }
  }
});