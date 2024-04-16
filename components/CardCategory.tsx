
import CardComponent from "@/components/card/carditem";
import Slider from "react-slick";
import { getType } from "@/action/get-type";
import { TypesOfCategory } from "@/type/types";
const CardCategory = async () => {
  const types = await getType().then((data)=>data).catch(()=>console.log("error"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (types?.length > 0) {

    return (
      <Slider {...settings}>
        {types?.map((type: { name: string; url: string }) => (
          <CardComponent key={type.name} title={type.name} href={type.url} />
        ))}
      </Slider>
    );
  } else {
    return <div>no type of category exist</div>;
  }
};
export default CardCategory;
