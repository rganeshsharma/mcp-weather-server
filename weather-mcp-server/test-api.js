// Simple test to verify the weather API works
async function testWeatherAPI() {
  // Test with Bangalore coordinates
  const latitude = 12.9716;
  const longitude = 77.5946;
  
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
  
  try {
    console.log('Testing Open-Meteo API...');
    console.log(`URL: ${url}\n`);
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('API Response:');
    console.log(JSON.stringify(data, null, 2));
    
    console.log('\n✅ API test successful!');
    console.log('\nCurrent Weather in Bangalore:');
    console.log(`Temperature: ${data.current.temperature_2m}°C`);
    console.log(`Humidity: ${data.current.relative_humidity_2m}%`);
    console.log(`Wind Speed: ${data.current.wind_speed_10m} km/h`);
    
  } catch (error) {
    console.error('❌ API test failed:', error);
  }
}

testWeatherAPI();