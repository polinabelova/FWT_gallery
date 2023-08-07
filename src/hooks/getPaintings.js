import { useState, useEffect } from 'react'
import axios from 'axios'
export function usePaintings(page, limit) {

    const [list, getList] = useState(Array);

        useEffect(() => {
          axios.get("https://test-front.framework.team/paintings?_page=1&_limit=12").then((response) => {
            getList(response.data);
          });
        }, []);
    return { list }
}