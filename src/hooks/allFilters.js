import { useState, useEffect } from 'react'
import axios from 'axios'


export function useAllFilters({ author, name, location, from, before, page }) {
    
    const [fullFiltred, setFullFiltred] = useState(Array)
    const base_url = String("https://test-front.framework.team/paintings?_page=" + page + "&_limit=12")
    let author_url = ""
    let name_url = ""
    let location_url = ""
    let created_gte_url = ""
    let created_lte_url = ""

    if (author !== null) {
        author_url = String("&authorId=" + author.value)
    }
    else {
        author_url = ""
    }
    if (name !== "") {
        name_url = String("&q=" + name)
    }
    else {
        name_url = ""
    }
    if (location !== null) {
        location_url = String("&locationId=" + location.value)
    }
    else {
        location_url = ""
    }

    if (from !== undefined & from !== "") {
        created_gte_url = String("&created_gte=" + from)
    }
    else {
        created_gte_url = ""
    }
    if (before !== undefined & before !== "") {
        created_lte_url = String("&created_lte=" + before)
    }
    else {
        created_lte_url = ""
    }

    let url = String(base_url + author_url + name_url + location_url + created_gte_url + created_lte_url )
    console.log(url)
    useEffect(() => {
        axios.get(url)
            .then((response) => { setFullFiltred(response.data); })
            .catch((err) => {console.log(err)})
    }, [url]);
    console.log(fullFiltred)
    return { fullFiltred };
}
