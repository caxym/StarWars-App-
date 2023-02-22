const getState = ({ setStore, getActions, getStore }) => {
    return {
        store: {
            favorite: [],
            indice : [],
        },
        actions: {
            addFavorite: (name) => {
                const { favorite, } = getStore();
                if (!favorite.includes(name)) {
                    const newFavorites = [...favorite, name]
                    setStore({ 
                        favorite: newFavorites, 
                        indice: newFavorites.indexOf(name) 
                    })
                }
            },
            delFavorite: (name) => {
                const { favorite,indice } = getStore();
                const newFavorites = [...favorite]
                newFavorites.splice(name,1);
                setStore({ favorite: newFavorites })
            }
        },

    };
};
export default getState;