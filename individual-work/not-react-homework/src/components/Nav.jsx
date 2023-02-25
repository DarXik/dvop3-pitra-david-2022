import ButtonNav from "./ButtonNav";
import { createSignal, onMount } from "solid-js";

const Nav = () => {
  //   const [time, setTime] = createSignal(new Date());
  //   const [city, setCity] = createSignal("");

  //   onMount(() => {
  //     let apiKey = localStorage.getItem("apiKey");

  //     if (!apiKey) {
  //       apiKey = window.prompt("Please enter your OpenCage Geocoder API key:");
  //       localStorage.setItem("apiKey", apiKey);
  //     }

  //     // Use the Geolocation API to get the user's current position
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const { latitude, longitude } = position.coords;

  //       // Use the OpenCage Geocoder API to get the city name from the user's location
  //       const response = await fetch(
  //         `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`
  //       );
  //       const data = await response.json();

  //       if (data.results.length > 0) {
  //         setCity(data.results[0].components.city);
  //       }

  //       // Set the time zone offset based on the user's location
  //       const timeZoneOffset = new Date().getTimezoneOffset() / 60;
  //       setTime(new Date(new Date().getTime() + timeZoneOffset * 60 * 60 * 1000));
  //     });
  //   });

  //   setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  const [time, setTime] = createSignal(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <>
      <div class="flex justify-between shrink-0 items-center mx-20 border-2 rounded-lg border-white bg-white shadow-lg p-2 px-4">
        <div class="w-4/12">
          <h1 class="font-bold w-fit text-2xl border-2 border-white pb-1 border-b-cyan-400">
            Blue Gallery
          </h1>
        </div>
        <div class="w-4/12 flex justify-center text-lg">
          <h2 class="w-fit border-2 border-white border-x-cyan-400 px-2">
            The current time in Prague 
            {createSignal() ? (
              <span class="font-bold">{time().toLocaleTimeString()}</span>
            ) : (
              <p>Not Available</p>
            )}
            {/* {city()} is{" "} */}
          </h2>
        </div>
        <div class="w-4/12 flex justify-end gap-x-3 text-lg">
          <ButtonNav title="HOME"></ButtonNav>
          <ButtonNav title="ABOUT"></ButtonNav>
          <ButtonNav title="PORTFOLIO"></ButtonNav>
        </div>
      </div>
    </>
  );
};

export default Nav;
