const getState = ({ setStore, getActions, getStore }) => {
    return {
        store: {
            favorite: [],
        },
        actions: {
            addFavorite: (name) => {
                const { favorite } = getStore();
                if (!favorite.includes(name)) {
                    const newFavorites = [...favorite, name]
                    setStore({ 
                        favorite: newFavorites, 
                    })
                }
            },
            delFavorite: (name) => {
                console.log(name)
                const { favorite } = getStore();
                const remFav = favorite.filter (favs => favs !== name) ;
                setStore({ favorite: remFav })
            }
        },

    };
};
export default getState;