let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
let comments = [];
export function getCommentApi() {
    return fetch("https://wedev-api.sky.pro/api/v2/maxim-trankov1/comments", {
        method: "GET",
        headers: {
            Authorization: token,
        }
    })

        .then((response) => {
            if (response.status === 500) {
                throw new Error("Ошибка сервера");
            } if (response.status === 400) {
                throw new Error("Неверный запрос")
            } if (response.status === 401) {
                // token = prompt("Введите верный пароль");
                // getCommentApi();
                throw new Error("Нет авторизации");;
            }
            return response.json();
        })
};

export function postFetchApi({ name, text }) {
    return fetch("https://wedev-api.sky.pro/api/v2/maxim-trankov1/comments", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            text: text,
        }),
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            if (response.status === 500) {
                throw new Error("Сервер упал, попробуй позже");
            } else if (response.status === 400) {
                throw new Error("Введите данные заново");
            } else {
                return response.json();
            };
        })
};

