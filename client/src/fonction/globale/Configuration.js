import { useMemo } from "react"

export default function Configuration(token){
    const config = useMemo(() => {
        return {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
      }, [token])
    return config
}