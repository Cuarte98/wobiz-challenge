function mockLoginApi(credentials) {
    const validCredentials = {
        email: "fcuarte@wobiz.com",
        password: "testwobiz",
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === validCredentials.email) {
                if (credentials.password === validCredentials.password) {
                    resolve({
                        status: 200,
                        data: {
                            token: "ba7c2cf6c55e3e382f2f48231aafc6b8725d723b",
                            expires: 1567619449,
                            user_id: 21432,
                        },
                    });
                } else
                    reject({
                        status: 106,
                        data: {
                            success: false,
                            code: 106,
                            message: "Wrong password for user",
                        },
                    });
            } else {
                reject({
                    status: 108,
                    data: {
                        success: false,
                        code: 108,
                        message: "Wrong username",
                    },
                });
            }
        }, 1000);
    });
}

export default mockLoginApi;
