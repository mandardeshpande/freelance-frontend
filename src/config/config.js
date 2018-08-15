export const sellerLoginEndPoint = 'user/auth/seller';
export const buyerLoginEndPoint = 'user/auth/buyer';
export const getSellerProjects = 'project';
export const getBidsProjects = 'bid/project';
export const postProjects = 'project/post';


const envConfigMap = {
    local:{
        host:'http://localhost:8080',
        sellerLoginEndPoint,
        buyerLoginEndPoint,
        getSellerProjects,
        getBidsProjects,
        postProjects
    },
    prod:{
        host:'yettocome.com',
        sellerLoginEndPoint,
        buyerLoginEndPoint,
        getSellerProjects,
        getBidsProjects,
        postProjects
    }
}


const getEnvConfig = env => envConfigMap[env];

export default getEnvConfig;

