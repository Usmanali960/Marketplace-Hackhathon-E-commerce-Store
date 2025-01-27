export const query = `*[_type == "product" && slug.current == $id][0]{
    description,
    inventory,
    colors,
    price,
    _id,
    "imageUrl": image.asset->url,
    status,
    productName,
    category,
    "slug": slug.current
  }`;
