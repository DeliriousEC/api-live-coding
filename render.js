
export function renderElementsExp(comments) {

  const appHtml = `<div class="container">
  <div class="list-loader">
      <span>Комментарии загружаются...</span>
  </div>

  <div class="add-form">
      <h3>Форма входа</h3>
      Логин
      <input minlength="1" maxlength="25" id="login-input" type="text" class="add-form-login" />
      Пароль
      <input minlength="1" maxlength="25" id="login-input" type="text" class="add-form-login" />
      <div class="add-form-row">
          <br>
          <button id="login-button" class="add-form-button">Войти</button>
      </div>
  </div>
</div>

<ul id="list" class="comments">

</ul>
<div class="add-form">
  <input minlength="1" maxlength="25" id="name-input" type="text" class="add-form-name"
      placeholder="Введите ваше имя (Больше 2 символов)" />
  <textarea minlength="1" maxlength="200" id="comment-input" type="textarea" class="add-form-text"
      placeholder="Введите ваш коментарий (Больше 2 символов)" rows="4"></textarea>
  <div class="add-form-row">
      <button id="add-button" class="add-form-button">Написать</button>
  </div>
</div>
</div>`

  const commentsHTML = comments.map((element, index) => {
    const ourDate = new Date(element.date);
    return `<li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${element.author.name}</div>
          <div>${ourDate.toLocaleString()}</div>
        </div>
        <div class="comment-body">
          <div data-index class="comment-text">
            ${element.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${element.likes}</span>
            <button data-index="${index}" class="like-button ${element.islike ? "-active-like" : ""}"></button>
            
          </div>
        </div>
        <button data-id="${element.id}" class="add-form-button delete-button">Удалить</button>
      </li>`


  }).join("");
  list.innerHTML = commentsHTML;

}