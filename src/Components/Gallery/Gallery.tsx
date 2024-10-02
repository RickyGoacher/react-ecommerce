import "./style.css";

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
            {GenerateImages}
        </div>
    )
}