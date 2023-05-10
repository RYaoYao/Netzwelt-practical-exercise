import useAuth from "./useAuth"

const useToken = () => {
    const {setAuth} = useAuth();
    const refresh = async() => {
        setAuth(prev => {
            console.log(JSON.stringify(prev))
            return {...prev}
        })
    }
    return refresh;
}

export default useToken