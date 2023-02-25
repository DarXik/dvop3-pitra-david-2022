import "../App.css";
import PictureCard from "./PictureCard";

const MainContent = () => {
  return (
    <>
      <div class="flex flex-wrap flex-row justify-evenly my-20 mx-20 ">
        <PictureCard></PictureCard>
        <PictureCard></PictureCard>
        <PictureCard></PictureCard>
        <PictureCard></PictureCard>
        <PictureCard></PictureCard>
        <PictureCard></PictureCard>
        <PictureCard></PictureCard>
      </div>
    </>
  );
};

export default MainContent;
