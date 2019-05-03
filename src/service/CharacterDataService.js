/**
 * Created by janda on 24.4.2019.
 */

import axios from 'axios'

const CHARACTER_API_URL = 'http://localhost:3030'
//const CHARACTERNAME_API_URL = '${CHARACTER_API_URL}/${CHARACTER}'

class CharacterDataService {
    getAllCharacters() {
        return axios.get(`${CHARACTER_API_URL}/all`);
    }

    getCharacterNames() {
        return axios.get(`${CHARACTER_API_URL}/getNames`)
    }

    getCharacterByName(name) {
        return axios.get(`${CHARACTER_API_URL}/${name}`)
    }

    getCharacterById(id) {
        return axios.get(`${CHARACTER_API_URL}/${id}`)
    }

    deleteCharacter(id) {
        console.log('delete executed');
        return axios.delete(`${CHARACTER_API_URL}/${id}`)
    }
}

export default new CharacterDataService()
