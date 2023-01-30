import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ items }) {
    return (
        <>
            <ul className={styles.imageGallery}>
                {items.map(item => (
                    <ImageGalleryItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    items: PropTypes.array,
};