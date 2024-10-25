document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast")
        .then(response => response.json())
        .then(data => {
            const forecastData = data.data.items[0].forecasts;

            const forecastGrid = document.getElementById("forecastGrid");

            forecastData.forEach(forecast => {
                const areaDiv = document.createElement("div");
                areaDiv.classList.add("area");
                areaDiv.textContent = forecast.area;

                const forecastDiv = document.createElement("div");
                forecastDiv.classList.add("forecast");
                forecastDiv.textContent = forecast.forecast;

                forecastGrid.appendChild(areaDiv);
                forecastGrid.appendChild(forecastDiv);
            });
        })
        .catch(error => console.error("获取天气预报数据时出错:", error));

    const forecastGrid = document.getElementById("forecastGrid");

    forecastData.forecasts.forEach(forecast => {
        const areaDiv = document.createElement("div");
        areaDiv.classList.add("area");
        areaDiv.textContent = forecast.area;

        const forecastDiv = document.createElement("div");
        forecastDiv.classList.add("forecast");
        forecastDiv.textContent = forecast.forecast;

        forecastGrid.appendChild(areaDiv);
        forecastGrid.appendChild(forecastDiv);
    });
});
