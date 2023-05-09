import axios from 'axios';

const get = (path = '') => {
    let url = '';
    let defaultUrl = 'https://iqaccbyrzi.execute-api.ap-southeast-1.amazonaws.com/default';
    // url = process.env.API_URL + path;
    url = defaultUrl + path;
    
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                console.log('response', response);
                if (response.status === 200 && response.data) {
                    if (response.data.error) {
                        reject(response.data);
                    } else {
                        resolve(response.data);
                    }
                } else if (response.status === 200 || response.status === 201 || response.status === 204) {
                    reject({ error: 'Status : ' + response.status + ' no content.' });
                } else {
                    reject({ error: response.status ? 'An status : ' + response.status + ' has occurred.' : 'An unexpected error has occurred.' });
                }
            }).catch(error => {
                if (error.response) {
                    reject({ error: error.response.statusText || 'An unexpected error has occurred.' });
                } else {
                    reject({ error: 'An unexpected error has occurred.' });
                }
                console.log(error);
            })
    });
};

export { get };