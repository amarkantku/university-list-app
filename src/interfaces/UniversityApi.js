import { RestClient } from '../apis/RestClient';

class UniversityApi {
    getUniversities = async searchTerm => {
        const responseData = await RestClient.get('/search', { country: searchTerm });
        return responseData;
    }

    getUniversityDetails = async name => {
        const responseData = await RestClient.get('/search', { name });
        return responseData;
    }
}
const universityApi = new UniversityApi();
Object.freeze(universityApi);
export default universityApi;
