import "./style.css";
import { ProductGalleryPlaceholder } from "../Placeholders/ProductGalleryPlaceholder/ProductGalleryPlaceholder";

interface GalleryInterface {
    Images: Array<string>;
}

export const Gallery = ({Images}:GalleryInterface) => {

    const GenerateImages = Images.map(item => {
        return (
            <div key={Math.random()} className="image-item">
                <img src={item} />
            </div>
        )
    })

    return (
        <div className="image-gallery">
            {!GenerateImages.length ? <ProductGalleryPlaceholder/> : GenerateImages}
        </div>
    )
}