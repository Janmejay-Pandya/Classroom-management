import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState(null);
    const [notice, setNotice] = useState([]);
    const [classes, setClasses] = useState([]);
    const [student, setStudent] = useState([]);

    //Store token for login and register
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    //check if user is logged in or not 
    const isLoggedIn = !!token;
    console.log("Token:", token);
    console.log("isLogged:", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
    };

    //Display the notices on Show notices
    const getNotices = async () => {
        try {
            const response = await fetch("http://localhost:3500/api/data/shownotice", {
                method: "GET"
            });
            if (response.ok) {
                const data = await response.json();
                // console.log(data.msg);
                setNotice(data.msg);
            }
        } catch (error) {
            console.log(`Notices ${error}`);
        }
    };

    //display all the class present
    const getClass = async () => {
        try {
            const response = await fetch("http://localhost:3500/api/dispclass/showclass", {
                method: "GET"
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setClasses(data.msg);
            }
        } catch (error) {
            console.log(`Class ${error}`);

        }
    }

    // const addNotice = (newNotice) => {
    //     setNotice((prevNotices) => [...prevNotices, newNotice]);
    // };

    //Display all the students
    const getStudent = async () => {
        try {
            const response = await fetch("http://localhost:3500/api/std/dispstudent", {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Student data", data.msg);
                setStudent(data.msg);

            }
        } catch (error) {
            console.log(`student ${error}`);
        }
    }
    useEffect(() => {
        getNotices();
        getClass();
        getStudent();
    }, []);
    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, user, notice, classes, student }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
