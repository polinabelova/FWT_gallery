import { useState, useEffect } from 'react'
import axios from 'axios'
export function useAuthorsLocations(endPoint, id) {

  const [list, getList] = useState(Array);
  const baseUrl = "https://test-front.framework.team/"
  if (!id) {
    id = ""
  }
  const url = String(baseUrl + endPoint + "/" + id)
  useEffect(() => {
    axios.get(url).then((response) => {
      getList(response.data);
    });
  }, []);

  if (list.length > 1) {
    list.forEach((item) => {
      if (item.name) {
        item.label = String(item.name);
      }
      if (item.location) {
        item.label = String(item.location);
      }
      item.value = String(item.id);
    })
  }
  return { list }
}