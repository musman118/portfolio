
export default async function datafetcher() {
    try {
        console.log("Making Request");
        
        const res = await fetch("http://localhost:3000/api",{next:{revalidate:3600}})

        // if (!res.ok) {
        //     throw new Error('Failed to fetch');
        // }
        console.log(res)
        console.log("HERE")
        const data = await res.json();
        console.log("Data recieved is ",data)
       
        return data;
    } catch (error) {
        console.error('Error on the outside', error);
        throw error; 
    }
}

