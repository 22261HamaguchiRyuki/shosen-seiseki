// 教科割合
const subjectData = {
    国語: { ratio: 0.6 },
    歴史: { ratio: 0.7 },
    基礎数学: { ratio: 0.7 },
    物理: { ratio: 0.7 },
    EC: { ratio: 0.6 },
    EE: { ratio: 0.6 },
    情報工学基礎: { ratio: 0.6 },
    工学リテラシ: { ratio: 0.5 },
    プログラミング: { ratio: 0.6 },
    電気電子基礎: { ratio: 0.6 },
    微分積分: { ratio: 0.7 },
    代数幾何: { ratio: 0.7 },
    理科総合: { ratio: 0.7 },
    情報工学1: { ratio: 0.6 },
    情報工学2: { ratio: 0.5 },
    電気電子工学: { ratio: 0.6 },
    現代社会: { ratio: 0.4 },
    LevelUpEnglish: { ratio: 0.6 },
    化学: { ratio: 0.7 },
    情報工学3: { ratio: 0.6 },
    Webアプリケーション: { ratio: 0.5 },
    電気電子回路: { ratio: 0.6 },
    工業力学: { ratio: 0.5 },
    マイコン工学: { ratio: 0.6 },
    計測工学: { ratio: 0.6 },
    工学数理基礎: { ratio: 0.6 },
    コミュニケーションスキル: { ratio: 0.5 },
    プレゼンテーションスキル: { ratio: 0.5 },
    国際関係論: { ratio: 0.7 },
    経済学: { ratio: 0.3 },
    応用科学1: { ratio: 0.6 },
    応用科学2: { ratio: 0.7 },
    総合英語: { ratio: 0.6 },
    応用数学: { ratio: 0.6 },
    ビジネス基礎: { ratio: 0.4 },
    工業簿記: { ratio: 0.6 },
    情報数学: { ratio: 0.6 },
    ネットワークシステム: { ratio: 0.6 },
    古典制御: { ratio: 0.6 },
    材料力学: { ratio: 0.6 },
    機械力学: { ratio: 0.6 },
    熱流体力学: { ratio: 0.5 },
    AI: { ratio: 0.6 },
    デジタル信号処理: { ratio: 0.6 },
    モバイルプログラミング: { ratio: 0.6 },
    画像処理: { ratio: 0.4 },
    組込みシステム工学: { ratio: 0.6 },
    機能材料: { ratio: 0.7 },
    機械工作法: { ratio: 0.4 },
    電磁気学: { ratio: 0.7 },
    社会政策論: { ratio: 0.3 },
    法学: { ratio: 0.6 },
    応用数学34: { ratio: 0.8 },
    システム工学: { ratio: 0.6 },
    機械設計: { ratio: 0.6 },
    工作法: { ratio: 0.4 },
    技術者理論: { ratio: 0.6 },
    センサーネットワーク: { ratio: 0.6 },
    ビッグデータ解析: { ratio: 0.5 },
    数値計算法: { ratio: 0.6 },
    サーバー管理: { ratio: 0.5 },
    回路設計: { ratio: 0.7 },
    センサ応用システム: { ratio: 0.6 },
    電力工学: { ratio: 0.7 },
    生産工学: { ratio: 0.7 },
    現代制御: { ratio: 0.7 },
    特別講義: { ratio: 0.6 },
}

// クリアボタン
function clearPortfolio() {
    document.getElementById('portfolio').value = '';
}
function clearTestScore() {
    document.getElementById('testScore').value = '';
}

//ボタンの色を変える
function changeColor(button) {
    // すべてのボタンから 'active' クラスを削除
    const buttons = document.getElementsByClassName('optionButton');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    // 最後に押されたボタンに 'active' クラスを追加
    button.classList.add('active');
}

//学年更新ボタン[J1]
function changeOptions1() {
    let select = document.getElementById("subject");
    select.innerHTML = "";
    let options = ["国語", "歴史", "基礎数学", "物理", "EC", "EE", "情報工学基礎", "工学リテラシ", "プログラミング", "電気電子基礎"];
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//学年更新ボタン[J2]
function changeOptions2() {
    let select = document.getElementById("subject");
    select.innerHTML = "";
    let options = ["国語", "歴史", "基礎数学", "物理", "微分積分", "代数幾何", "理科総合", "EC", "EE", "情報工学1", "情報工学2", "電気電子工学"];
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//学年更新ボタン[J3]
function changeOptions3() {
    let select = document.getElementById("subject");
    select.innerHTML = "";
    let options = ["国語", "現代社会", "微分積分", "代数幾何", "化学", "LevelUpEnglish", "プログラミング", "情報工学3", "Webアプリケーション", "電気電子回路", "工業力学", "マイコン工学", "計測工学", "工学数理基礎"];
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//学年更新ボタン[J4]
function changeOptions4() {
    let select = document.getElementById("subject");
    select.innerHTML = "";
    let options = ["コミュニケーションスキル", "プレゼンテーションスキル", "国際関係論", "経済学", "応用科学1", "応用科学2", "総合英語", "応用数学", "ビジネス基礎", "工業簿記", "情報数学", "ネットワークシステム", "古典制御", "材料力学", "熱流体力学", "AI", "デジタル信号処理", "モバイルプログラミング", "画像処理", "組込みシステム工学", "機能材料", "電磁気学", "材料力学", "機械工作法"];
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//学年更新ボタン[J5]
function changeOptions5() {
    let select = document.getElementById("subject");
    select.innerHTML = "";
    let options = ["社会政策論", "法学", "総合英語", "応用数学34", "システム工学", "機械設計", "工作法", "技術者理論", "センサーネットワーク", "ビッグデータ解析", "数値計算法", "サーバー管理", "回路設計", "センサ応用システム", "電力工学", "熱流体力学", "機械力学", "現代制御", "特別講義"];
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//整数に直す
function increase(result) {
    return Math.ceil(result);
}

//成績計算
function calculation(ratioScore, testScore, portfolio) {
    return 120 / ratioScore - testScore - 2 * portfolio / ratioScore;
}

// calculate関数を定義します。この関数は、入力フィールドの値が変更されたときに実行されます。
function convertToNumber() {
    let subject = document.getElementById('subject').value;
    let testScore = document.getElementById('testScore').value;
    let portfolio = document.getElementById('portfolio').value;
    let ratioScore = subjectData[subject].ratio;

    if (subjectData[subject]) {
        // キーが存在する場合、そのキーに対応するexamとportfolioの値を変数に代入します。
        console.log("Ratio: " + ratioScore);
    } else {
        // キーが存在しない場合、"Subject not found in subjectData"というメッセージをコンソールに出力します。
        console.log("Subject not found in subjectData");
        return;
    }

    if (ratioScore == 0.5 && portfolio > 50 || ratioScore == 0.6 && portfolio > 40 || ratioScore == 0.7 && portfolio > 30) {
        document.getElementById("grade").innerHTML = "エラー";
        return;
    }

    if (testScore > 100 || testScore < 0) {
        document.getElementById("grade").innerHTML = "エラー";
        return;
    }

    let result = calculation(ratioScore, testScore, portfolio);
    if (result < 0) {
        document.getElementById("grade").innerHTML = "合格！";
    }
    else if (result == 0) {
        document.getElementById("grade").innerHTML = "合格！";
    }

    else {
        let increaseSrect = increase(result)
        document.getElementById("grade").innerHTML = `あと ${increaseSrect}点で合格！`;
    }
    //ポートフォリオのMAXを表示する
}

function changeOptions(buttonNumber) {
    var select = document.getElementById("mySelect");

    // 既存の選択肢を削除
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }

    // 新しい選択肢を追加
    for (var i = 1; i <= buttonNumber; i++) {
        var option = document.createElement("option");
        option.text = "選択肢" + i;
        option.value = "value" + i;
        select.add(option);
    }
}
