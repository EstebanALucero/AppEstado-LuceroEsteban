export const SELECTED_PRODUC = "SELECTED_PRODUC"
export const FILTERED_PRODUC = "FILTERED_PRODUC"

export const selectedFigura = id => ({
    type: SELECTED_PRODUC,
    productId: id
});

export const filteredProduct = id => ({
    type: FILTERED_PRODUC,
    categoryId: id,
});