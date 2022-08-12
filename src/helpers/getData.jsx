import { dataGet } from "../componentes/helpers/GetGifs"

export const fetchData = async () => {
        const resp = await dataGet.get('trending?api_key=OARLiqBYgTn4jCiqqWnqopYl1L3kgZT0&rating=g')
        const { data } = resp.data
        return trasnformTolist(data)
}
const trasnformTolist = (data) => {

        const gifsArray = data.map(item => {
                return {
                        'id': item.id,
                        'title': item.title,
                        'url': item.images.fixed_height.url
                }
        })

        return gifsArray;

}