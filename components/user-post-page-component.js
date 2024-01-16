
import { renderHeaderComponent } from "./header-component.js";
import { posts } from "../index.js";
import { initLikeListeners } from "./posts-page-component.js";
import { formatDate } from "./formatDate.js";


const appEl = document.getElementById("app");

export function renderUserPage() {
  const appUserHtml = posts.map((post) => {
    return `
  
              <div class="page-container">
  
                <div class="header-container"></div>

                <div class="posts-user-header">
                
            </div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id="${post.user.id}">

                        <img src="${post.user.imageUrl}" class="post-header__user-image">
                        <p class="post-header__user-name">${post.user.name}</p>
                        
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${post.imageUrl}">
                    </div>





                    <div class="post-likes">
                  
                      <button data-post-id="${post.id}" data-is-liked="${post.isLiked}" class="like-button ${post.isLiked ? "-active-like" : ''}" data-id="${post.user.id}"></button>

                      <p class="post-likes-text">
                        Нравится: <strong>${post.likes.length}</strong>
                      </p>





                    </div>
                    <p class="post-text">
                      <span class="user-name">${post.user.name}</span>
                      : ${post.description}
                    </p>
                    <p class="post-date">
                    ${formatDate(post.createdAt)}
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

  // for (let userEl of document.querySelectorAll(".post-header")) {
  //   userEl.addEventListener("click", () => {
  //     goToPage(USER_POSTS_PAGE, {
  //       userId: userEl.dataset.userId,
  //     });
  //   });
  // }
  initLikeListeners(posts[0].user.id)
}
//userId не понятна запись и как использовать