const getState = ({ setStore, getActions, getStore }) => {
    return {
        store: {
            favorite: []
        },
        actions: {
            addFavorite: (name) => {
                const { favorite } = getStore();
                const newFavorites = [...favorite, name]
                setStore({ favorite: newFavorites })

            },
            delFavorite:(name)=> {
                const { favorite } = getStore();
                const newFavorites = [...favorite]
                newFavorites.splice(name, 1);
                setStore({ favorite: newFavorites })
            }
        },

    };
};
export default getState;