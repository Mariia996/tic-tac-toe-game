import { createContext, useState, useContext } from "react";

const PlayerContext = createContext()

export const usePlayer = () => {
    return useContext(PlayerContext)
}

const initialState = {
    player1: 'Player 1',
    player2: 'Player 2'
};

export const PlayerProvider = ({ children }) => {
    const [formData, setFormData] = useState(initialState);
    const [players, setPlayers] = useState({
        player1: 'Player 1',
        player2: 'Player 2'
    })

    const handleChange = ({target}) => {
        const { name, value } = target;
        setFormData({ ...players, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayers({ ...formData })
    }

    return (<PlayerContext.Provider value={{
        players,
        handleChange,
        handleSubmit,
        formData
    }}>
        {children}
    </PlayerContext.Provider>);
};

export default PlayerProvider;