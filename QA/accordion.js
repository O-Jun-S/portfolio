(() => {
    class Accordion {
        constructor(obj) {
            console.log("obj", obj.hookName);
            const $elm = document.querySelector(obj.hookName);
            const $triggers = $elm.getElementsByTagName(obj.tagName);
            const triggerLen = $triggers.length;
            for(let i=0; i<triggerLen; i++) {
                $triggers[i].addEventListener("click", this.clickHandler);
            }
        }

        // クリック時に実行される処理
        clickHandler(e){
            e.preventDefault();
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            if($content.style.display === "block") {
                $content.style.display = "none";
            }
            else {
                $content.style.display = "block";
            }
        }
    }

    const exAccordion = new Accordion({
        hookName: "#js-faq",
        tagName: "p"
    });
})();
