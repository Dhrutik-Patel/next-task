'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('/api/users/current');
            const data = await res.json();
            setUser(data);
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }

    return context;
};

export { useUserContext };

export default UserProvider;
