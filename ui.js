class Ui {
    constructor() {
        this.amount = document.getElementById("amount");

        this.firstCurrency = document.getElementById("firstCurrency");
        this.secondCurrency = document.getElementById("secondCurrency");

        this.resultInput = document.getElementById("result-input");

        this.span1 = document.getElementById("span-1");
        this.span2 = document.getElementById("span-2");
    }
    getAmout() {
        return this.amount.value;
    }
    getOptions() {
        return [this.firstCurrency.value, this.secondCurrency.value];
    }
    setResult(result) {
        this.resultInput.value = result;
    }
    setSpanUi(span1, span2) {
        this.span1.innerHTML = span1;
        this.span2.innerHTML = span2;
    }
}
