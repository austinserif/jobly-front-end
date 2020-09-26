import axios from 'axios';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
        // for now, hardcode token for "testing"
        paramsOrData._token = (
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
        "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
        "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U"
        );

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {

            const res = await axios({
                method: verb,
                url: `http://localhost:3001/${endpoint}`,
                [verb === "get" ? "params" : "data"]: paramsOrData
            });

            return res.data;

                // axios sends query string data via the "params" key,
                // and request body data via the "data" key,
                // so the key we need depends on the HTTP verb'

        } catch(err) {
            console.log('here here here! im an error!')
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    /** Get all data about a specific company, including all available jobs. 
     * method has one required parameter, handle (string), and one optional parameter jobsOnly (boolean). 
     * By default jobsOnly is set to true, and so returns an array on job objects corresponding to the handle
     * argument. If a false value is instead passed into the jobsOnly parameter, then getCompany will return the
     * whole company object, which includes 
    */
    static async getCompany(handle) {
        let res = await JoblyApi.request(`companies/${handle}`);
        return res.company;
    }
    
    /** Get all job listings in the database */
    static async getJobs(search=null) {
        let res = await JoblyApi.request(`jobs`, {search});
        return res.jobs;
    }

    static async getCompanies(search=null) {
        let res = await JoblyApi.request(`companies`, {search});
        return res.companies;
    }

    static async login(username, password) {
        let res = await JoblyApi.request(`login`, {username, password}, 'post');
        return res.token;
    }
}

export default JoblyApi;