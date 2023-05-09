import { get } from "../core-services/http-services";

const getHouseInfo = () => {
    return new Promise((resolve, reject) => {
        get("/getHouseInfo")
            .then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
    });
};

export { getHouseInfo };
