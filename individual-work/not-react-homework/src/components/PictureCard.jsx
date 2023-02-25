import "../App.css";
import { createSignal, onMount } from "solid-js";

function PictureCard(props) {
  const [imageUrl, setImageUrl] = createSignal("");

  onMount(() => {
    // Fetch the image from the URL
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
    img.onload = () => {
      setImageUrl(img.src);
    };
    img.onerror = () => {
      console.log("Error loading image.");
    };
  });

  return (
    <div class="flex flex-col w-80 m-10 border-2 border-cyan-400 p-5 rounded-lg shadow-xl bg-white">
      {imageUrl() ? (
        <img class="rounded-lg drop-shadow-xl hover:grayscale-0 grayscale-50 duration-200 ease-in-out hover:scale-105" src={imageUrl()} alt="My Image" />
      ) : (
        <p>Loading image...</p>
      )}
      {/* <p class="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        reiciendis.
      </p> */}
    </div>
  );
}

export default PictureCard;
