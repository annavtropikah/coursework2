import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, token } from "../index.js";


const appEl = document.getElementById("app");

export function renderUserPage() {
  const appUserHtml = posts.map((post) => {
    return `
  
              <div class="page-container">
  
                <div class="header-container"></div>

                <div class="posts-user-header">
                <img src="${post.imageUrl}">
                <p class="posts-user-header__user-name">${post.user.name}</p>
            </div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id="${post.user.id}">

                        <img src="${post.imageUrl}" class="post-header__user-image">
                        <p class="post-header__user-name">${post.user.name}</p>
                        
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${post.user.imageUrl}">
                    </div>





                    <div class="post-likes">
                  
                      <button data-post-id="${post.id}" class="like-button ${post.isLiked ? "-active-like" : ''}" data-id="${post.user.id}"></button>

                      <p class="post-likes-text">
                        Нравится: <strong>${post.likes.length}</strong>
                      </p>





                    </div>
                    <p class="post-text">
                      <span class="user-name">${post.user.name}</span>
                      ${post.description}
                    </p>
                    <p class="post-date">
                    ${post.createdAt}
                    </p>
                  </li>
                  </ul>
                  </div>
                  `;
            }).join('');

  appEl.innerHTML = appUserHtml;
  
  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  for (let userEl of document.querySelectorAll(".post-header")) {
    userEl.addEventListener("click", () => {
      goToPage(USER_POSTS_PAGE, {
        userId: userEl.dataset.userId,
      });
    });
  }

}
//userId не понятна запись и как использовать