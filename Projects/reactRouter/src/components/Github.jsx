import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rahim-alam10')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])


    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <img src={data.avatar_url} alt="Git Profile" width={300}/>

        </div>
    )
}

export default Github

export const githubProfile= async () => {
    const response= await fetch('https://api.github.com/users/rahim-alam10')
    return response.json();
}
