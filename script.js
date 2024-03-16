var lists = [];
var cash = [];
const btn = document.querySelector(".add");
const input = document.querySelector("#myinput");
const zone = document.querySelector("#data");
btn.addEventListener("click", function (event) {
    let value = input.value;
    if (value != '' && value != null) {
        lists.push(value);
        input.value = "";
        input.focus();
    }

});

function render() {
    let html = ``;
    if (lists.length <= 1) {
        for (let i = 0; i < lists.length; i++) {
            html += `
    
    <div class="list-items start">
    <font>${i + 1}.${lists[i]}</font><button data-index="${i}" class="del">X</button>
    </div>

    `;
        }
    } else {


        for (let i = 0; i < lists.length; i++) {

            if (i == 0) {
                html += `
            
            <div class="list-items first">
            <font>${i + 1}.${lists[i]}</font><button data-index="${i}" class="del">X</button>
            </div>
        
            `;
            } else if (i >= 1 && i < (lists.length - 1)) {
                html += `
            
                <div class="list-items">
                <font>${i + 1}.${lists[i]}</font><button data-index="${i}" class="del">X</button>
                </div>
            
                `;
            } else if (i == (lists.length - 1)) {
                html += `
            
                <div class="list-items last">
                <font>${i + 1}.${lists[i]}</font><button data-index="${i}" class="del">X</button>
                </div>
            
                `;
            }
        }



    }
    zone.innerHTML = html;
    const delall = document.querySelectorAll(".del");
    delall.forEach(row => {
        row.addEventListener("click", function (event) {
            let index = event.target.getAttribute("data-index");

            lists = lists.filter((row, key) => key != index);
        });
    });
}


setInterval(() => {
    if (lists.length != cash.length) {
        cash = lists.slice();
        render();
    }
}, 10);