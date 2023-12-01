
export const apiKey = '877ebaa8c67bd0e1d4495e0d0c309bdd'

export async function apiCall(url, setState) {
    return await fetch(url).then(res => res.json()).then(data=>{
        setState(data.results)
    })
}