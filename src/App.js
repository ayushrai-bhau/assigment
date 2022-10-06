
import './App.css';
import query from "./weather.json";
import { CgDropInvert, CgCompressV} from 'react-icons/cg';
import { WiStrongWind, WiSunrise, WiSunset} from 'react-icons/wi';
import { FaTemperatureHigh} from 'react-icons/fa';


function App() {
   const container =query.query.results.channel;
  return (
    <div className='App'>
      <div class="container-fluid">
        <div class="col">
          <div class="col-lg-3 col-md-12 col-sm-12 temp-div">
            <h1 className='temp'>{container.item.condition.temp}°</h1>
            <h4 className='condition'>{container.item.condition.text}</h4>
            <h5 className='city'>{container.location.city}, {query.query.results.channel.location.region}, {query.query.results.channel.location.country}</h5>
          </div>
          <div class="row-lg-3 row-md-12 row-sm-12 detail-div">
            <div className="icons">
              <p className='ic-temp'><FaTemperatureHigh /></p>
              <p className='ic-speed'><WiStrongWind /></p>
              <p className='ic-humid'><CgDropInvert /></p>
              <p className='ic-pressure'><CgCompressV /></p>
            </div>
            <div className='detail1'>
              <h3 className='temperature'>High/Low</h3>
              <h3 className='speed'>Wind Speed</h3>
              <h3 className='humidity'> Humidity</h3>
              <h3 className='pressure'>Pressure</h3>
            </div>
            <div className='detail2'>
              <h3 className='u-temp'>{container.item.forecast[0].high}°/{query.query.results.channel.item.forecast[0].low}°</h3>
              <h3 className='u-speed'>{container.wind.speed}{query.query.results.channel.units.speed}</h3>
              <h3 className='u-humid'>{container.atmosphere.humidity}%</h3>
              <h3 className='u-pressure'>{container.atmosphere.pressure}{query.query.results.channel.units.pressure}</h3>
            </div>

            <div className="sun">
              <div className="sunrise">
                <h2 className='time'>{container.astronomy.sunrise}</h2>
                <span className='sun-icon'><WiSunrise /></span>
                <h2 className='text1'>Sunrise</h2>
              </div>
              <div className="sunset">
              <h2 className='time'>{container.astronomy.sunset}</h2>
                <span className='sun2 sun-icon'><WiSunset /></span>
                <h2 className='text1'>Sunset</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
