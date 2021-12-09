const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const id = document.getElementById.bind(document);

console.log(id("heading"));
console.log($("#heading").innerText);
console.log($$("#heading")[0].innerText);

const app = (function () {
  const cars = ["BWM"];
  const input = id("car");
  const submit = $("button");
  const list = id("root");
  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1)
    },
    render() {
      const html = cars
        .map(
          (car, idx) => `
          <li>
            ${car}
            <span class="delete" data-idx=${idx}>&times</span>
          </li>
          `
        )
        .join("");

      list.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest(".delete")
      if(deleteBtn){
        // console.log(this)
        this.delete(deleteBtn.dataset.idx)
        this.render()
      }
    },
    init() {
      // this o pham vi nay la app
      // add new car
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null
        input.focus()
      };
      // const _this = this
      // submit.onclick = function(){
      //   const value = input.value
      //   _this.add(value)
      //   _this.render()
      // }

      // delete car
      // root.onclick = (e) => {
      //   // console.log(e)
      //   const deleteBtn = e.target.closest(".delete")
      //   if(deleteBtn){
      //     const idx = deleteBtn.dataset.idx
      //     this.delete(idx)
      //     this.render()
      //   }
      // }
      root.onclick = this.handleDelete.bind(this)

      // render
      this.render();
    },
  };
})();

app.init();
