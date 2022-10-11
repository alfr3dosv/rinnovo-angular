interface GalleryPicture {
    thumbnail: string
    image: string
}

interface Review {
    name: string
    comment: string
}

interface Feature {
    title: string,
    description: string
}

interface GalleryResponse {
    cocinas: GalleryPicture[],
    closets: GalleryPicture[],
    centros: GalleryPicture[]
}

export {GalleryPicture, Review, Feature, GalleryResponse}