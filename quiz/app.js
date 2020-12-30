const quizzes = [
    {
        question: "アボガドロ定数とは?",
        answers: [
            "地球での重力加速度。",
            "原子がその数集まったら、1molとなる数。",
            "円の直径をその数で乗算したら、円周となる数。",
            "自然対数の底。"
        ],
        correct: "原子がその数集まったら、1molとなる数。"
    },

    {
        question: "21 + 33 / 11は?",
        answers: [
            "24!",
            "3!",
            "4!",
            "6!"
        ],
        correct: "4!"
    }
];
const quizLength = quizzes.length;
let quizIndex = 0;
let score = 0;

const $buttons = document.getElementsByTagName("button");
const buttonLength = $buttons.length;

// クイズの問題文、選択肢を表示
const setupQuiz = () => {
    let quiz = quizzes[quizIndex];
    document.getElementById("js-question").textContent = quiz.question;
    for(let i = 0; i<buttonLength; i++) {
        $buttons[i].textContent = quiz.answers[i];
    }
}

// 選択肢がクリックされた時のハンドラー
const clickHandler = (e) => {
    let quiz = quizzes[quizIndex];
    if(quiz.correct === e.target.textContent) {
        window.alert("正解!");
        score++;
    }
    else {
        window.alert("不正解!");
    }

    quizIndex++;
    if(quizIndex < quizLength) {
        // 問題がまだあれば実行
        setupQuiz();
    }
    else{
        // 問題がもうなければ実行
        window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です!");
    }
};

for(let i=0; i<buttonLength; i++) {
    $buttons[i].addEventListener("click", clickHandler);
}

setupQuiz();
