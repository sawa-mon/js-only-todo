import "./styles.css";

//未完了のTODO
const onClickAdd = () => {
  //テキストボックスの値を取得して空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除(完了、未完了共通化関数)
const deleteFromIncompleteList = (target) => {
  //対象(target)を受け取り
  document.getElementById("incomplete-list").removeChild(target); //対象を未完了リストから削除
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonタグ(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode; //completeButtonの親要素を取得
    const text = addTarget.firstElementChild.innerText; //list-row内の要素の最初の子要素(liダグ)のテキストを取得

    //div以外の要素を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ(戻る)生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグ(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
