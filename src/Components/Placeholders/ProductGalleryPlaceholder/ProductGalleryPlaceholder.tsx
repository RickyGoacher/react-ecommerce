import "./style.css";

export const ProductGalleryPlaceholder = () => {
    return (
        <div className="image-gallery placeholder">
            <div key={Math.random()} className="image-item">
                <div className="image"></div>
            </div>
        </div>
    );
}