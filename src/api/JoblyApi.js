import axios from 'axios';
import jwt from 'jsonwebtoken';
import SECRET from '../config';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {

        //get jwt from localStorage if available
        paramsOrData._token = (
            localStorage.getItem('userToken')
        );

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {
            const res = await axios({
                method: verb,
                url: `https://jobly-sans-serif.herokuapp.com/${endpoint}`,
                [verb === "get" ? "params" : "data"]: paramsOrData
            });

            return res.data;

                // axios sends query string data via the "params" key,
                // and request body data via the "data" key,
                // so the key we need depends on the HTTP verb'

        } catch(err) {
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
    
    /** takes an variable length array of length-two arrays, each two-length array representing a completed registration field,
     * and containing [key, value], respectively.  */
    static async register(fields) {
        let res = await JoblyApi.request(`users`, fields, 'post');
        return res.token;

    }

    /** returns data related to currentUser*/
    static async getCurrentUserData() {
        //get currentUser from localStorage
        const token = localStorage.getItem('userToken');

        //verify token
        let user = jwt.verify(token, SECRET);

        //extract username from user
        const { username } = user;

        //get data about that user
        let res = await JoblyApi.request(`users/${username}`);
        return res.user;
    }

    /** Takes a user object and username string and updates the user info associated
     * with the passed username to match the new user Object
     * 
     * params: fields (Object), username (string)*/
    static async updateUserData(fields, username) {
        //block jobs and username field from being submitted
        delete fields.jobs;
        delete fields.username;

        //send updated user data to server in patch request
        let res = await JoblyApi.request(`users/${username}`, fields, 'patch');

        //return updated user object
        return res.user;
    }

    static async applyForJob(jobId) {
        let res = await JoblyApi.request(`jobs/${jobId}/apply`, {}, 'post');
        return res;
    }
}

export default JoblyApi;