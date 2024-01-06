import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, token } from "../index.js";


const appEl = document.getElementById("app");

export function renderPostsPageComponent() {

  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const appHtml = posts.map((post, index) => {
    return `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id="642d00329b190443860c2f31">
                        <img src="${post.imageUrl}" class="post-header__user-image">
                        <p class="post-header__user-name">${post.user.name}</p>
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${post.user.imageUrl}">
                    </div>





                    <div class="post-likes">
                  
                      <button data-post-id="${post.likes.id}" class="like-button ${post.isLiked ? "-active-like" : ''}" data-index="${index}"></button>

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

  appEl.innerHTML = appHtml;


  //  не работают лайки по-человечьи(((


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
initLikeListeners()

}

const initLikeListeners = () => {
  const likeButtons = document.querySelectorAll('.like-button');
  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (!token) {
        alert("autorize")
        return
      }
      const index = likeButton.dataset.index;
      posts[index].likes += posts[index].isLiked ? -1 : +1;
      posts[index].isLiked = !posts[index].isLiked;

      renderPostsPageComponent();
    });
  }
};