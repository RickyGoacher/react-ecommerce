import { CategortTiles } from "../../Components/CategoryTiles/CategoryTiles";
import { Banner } from "../../Components/Banner/Banner";
import bannerImage from "../../assets/images/banners/home-banner.jpg";
import tableImage from "../../assets/images/banners/furniture.jpg";
import perfumeImage from "../../assets/images/banners/perfume.jpg";
import potImage from "../../assets/images/banners/pot.jpg";
import shirtImage from "../../assets/images/banners/premium-shirt.jpg";
import "./style.css";
import { ImageText } from "../../Components/ImageText/ImageText";
import clothesImage from "../../assets/images/banners/hangers.jpg";

export const Home = () => {
    return (
        <>
            <Banner Image={bannerImage}>
                <h1>Welcome to Our Store</h1>
            </Banner>
            {<CategortTiles Tiles={[
                {image: tableImage, link: '/products/furniture', title: 'Furniture'},
                {image: potImage, link: '/products/kitchen-accessories', title: 'Kitchen Accessories'},
                {image: perfumeImage, link: '/products/fragrances', title: 'Fragrances'},
                {image: shirtImage, link: '/products/mens-shirts', title: 'Mens Shirts'}              
            ]} />}
            <ImageText Image={clothesImage}>
                <h2>Section Text</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim rutrum risus, volutpat commodo nisi. Integer vel purus in orci tincidunt vulputate. Nulla vitae fermentum lorem.</p>
                <p>Donec ac blandit nibh. Vestibulum luctus quam sit amet leo ultrices, id ultricies leo fringilla. Nullam cursus mi non quam porttitor sagittis eu vel tortor.</p>
                <button>CTA Button</button>
            </ImageText>
        </>
    );
}