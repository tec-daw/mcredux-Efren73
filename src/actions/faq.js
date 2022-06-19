export const addFaq = (val) => {
    return{
        type: 'Add_FAQ',
        payload: val
    }
};

export const removeFaq = (index) => {
    return{
        type: 'REMOVE_FAQ',
        payload: index
    }
};

export const removeAll = () => {
    return{
        type: 'REMOVE_ALL',
    }
};

export const updateFaq = (index, valor) => {
    return{
        type: 'UPDATE_FAQ',
        payload: {[index]: valor}
    }
};
