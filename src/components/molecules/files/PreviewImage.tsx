import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "./Fancybox";
import ImageIcon from "../../atoms/icons/ImageIcon";

export default function PreviewImage({ url }) {
  return (
    <div className="w-full">
      <Fancybox 
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a data-fancybox="gallery" href={url} className="">
          <div className="flex flex-col items-center justify-center w-full cursor-pointer ">
            <div className="w-full rounded-xl ">
            <ImageIcon />
            </div>
          </div>
        </a>
      </Fancybox>
    </div>
  );
}
