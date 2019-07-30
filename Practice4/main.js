let api = "https://intern-staging.herokuapp.com/api";

let textArea = document.querySelector(".rightColumn textarea");
let idInput = document.querySelector("#idInput");
let tokenInput = document.querySelector("#tokenInput");

function apiRequest(apiEndpoint, method, body, header, fn) {
  let params = {};
  params.method = method;
  if (body) params.body = body;
  if (header) params.headers = header;
  return fetch(api + apiEndpoint, params)
    .then(resp => resp.json())
    .then(json => fn(json));
}

document.querySelector("#getUsers").addEventListener("click", () => {
  apiRequest(
    "/identification",
    "GET",
    "",
    "",
    json => (textArea.value = JSON.stringify(json))
  );
});

document.querySelector("#regUser").addEventListener("click", () => {
  let email = document.querySelector("#regEmail").value;
  apiRequest(
    "/identification",
    "POST",
    JSON.stringify({ email: email }),
    { "Content-Type": "application/json" },
    json => {
      idInput.value = json._id;

      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#activateUser").addEventListener("click", () => {
  let id = idInput.value;
  apiRequest(
    "/identification/activate",
    "POST",
    JSON.stringify({ id: id }),
    { "Content-Type": "application/json" },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#loginUser").addEventListener("click", () => {
  let email = document.querySelector("#loginEmail").value;
  let password = document.querySelector("#loginPassword").value;
  apiRequest(
    "/identification/sign_in",
    "POST",
    JSON.stringify({ email: email, password: password }),
    { "Content-Type": "application/json" },
    json => {
      tokenInput.value = json.token;
      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#getComments").addEventListener("click", () => {
  let id = document.querySelector("#getCommentId").value;
  apiRequest(
    `/comment${id ? `?parentId=${id}` : ``}`,
    "GET",
    "",
    {
      "Content-Type": "application/json",
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#sendComment").addEventListener("click", () => {
  let id = document.querySelector("#sendCommentParentId").value;
  let message = document.querySelector("#sendCommentMessage").value;
  apiRequest(
    `/comment${id ? `?parentId=${id}` : ``}`,
    "POST",
    JSON.stringify({
      message: message,
      parentId: id,
    }),
    {
      "Content-Type": "application/json",
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#updateComment").addEventListener("click", () => {
  let id = document.querySelector("#updateCommentId").value;
  let parentId = document.querySelector("#updateCommentParentId").value;
  let message = document.querySelector("#updateCommentMessage").value;
  apiRequest(
    `/comment/${id}`,
    "POST",
    JSON.stringify({
      message: message,
      parentId: parentId,
    }),
    {
      "Content-Type": "application/json",
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#deleteComment").addEventListener("click", () => {
  let id = document.querySelector("#deleteCommentId").value;
  apiRequest(
    `/comment/${id}`,
    "Delete",
    "",
    {
      "Content-Type": "application/json",
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

document.querySelector("#getFiles").addEventListener("click", () => {
  let id = document.querySelector("#getFilesParentEntityId").value;
  apiRequest(
    `/file${id ? `/${id}` : ``}`,
    "GET",
    "",
    {
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

let formAdd = document.querySelector("#sendFile");
formAdd.addEventListener("submit", event => {
  event.preventDefault();
  let id = document.querySelector("#sendFileParentEntityId").value;
  let formData = new FormData(formAdd);
  formData.append("parentEntityId", id);
  apiRequest(
    "/file",
    "POST",
    formData,
    {
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});

let formupdate = document.querySelector("#updateFile");
formupdate.addEventListener("submit", event => {
  event.preventDefault();
  let id = document.querySelector("#updateFileId").value;
  let parentId = document.querySelector("#updateFileParentEntityId").value;
  let formData = new FormData(formupdate);
  formData.append("parentEntityId", parentId);

  apiRequest(
    `/file/${id}`,
    "POST",
    formData,
    {
      token: tokenInput.value,
    },
    json => {
      textArea.value = JSON.stringify(json);
    }
  );
});
