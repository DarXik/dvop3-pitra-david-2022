import "../App.css"
const ButtonNav = (props) => {
  return (
    <button class="py-1 px-2 bg-transparent font-semibold border-2 border-cyan-400 rounded hover:bg-cyan-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
      {props.title}
    </button>
  );
};

export default ButtonNav;
