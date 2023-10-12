(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();let f;const v=new Uint8Array(16);function L(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(v)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function C(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:S};function E(e,t,r){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const i=e.random||(e.rng||L)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){r=r||0;for(let o=0;o<16;++o)t[r+o]=i[o];return t}return C(i)}class P{constructor(t){this.id=E(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},d={todos:[],filter:a.All},A=()=>{T()},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(d))},k=(e=a.All)=>{switch(e){case a.All:return[...d.todos];case a.Completed:return d.todos.filter(t=>t.done);case a.Pending:return d.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},I=e=>{if(!e)throw new Error("Description is required");d.todos.push(new P(e)),g()},U=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},x=e=>{d.todos=d.todos.filter(t=>t.id!==e),g()},q=()=>{d.todos=d.todos.filter(e=>!e.done),g()},F=(e=a.All)=>{d.filter=e,g()},M=()=>d.filter,c={initStore:A,loadStore:T,getTodos:k,addTodo:I,toggleTodo:U,deleteTodo:x,deleteCompleted:q,setFilter:F,getCurrentFilter:M},D=`<section class="todoapp">
  <header class="header">
    <h1>Tareas</h1>
    <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
  </header>

  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
      <!-- <li class="completed" data-id="abc">
              <div class="view">
                  <input class="toggle" type="checkbox" checked>
                  <label>Probar JavaScript</label>
                  <button class="destroy"></button>
              </div>
              <input class="edit" value="Create a TodoMVC template">
          </li> -->
      <!-- <li>
              <div class="view">
                  <input class="toggle" type="checkbox">
                  <label>Comprar un unicornio</label>
                  <button class="destroy"></button>
              </div>
              <input class="edit" value="Rule the web">
          </li> -->
    </ul>
  </section>

  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be "0 items left" by default -->
    <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <!-- selected -->
        <a class="filter" class="selected" href="#/">Todos</a>
      </li>
      <li>
        <a class="filter" href="#/active">Pendientes</a>
      </li>
      <li>
        <a class="filter" href="#/completed">Completados</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Borrar completados</button>
  </footer>
</section>


<footer class="info">
  <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
  <!-- Change this out with your name and url ↓ -->
  <p>Creado por <a href="http://todomvc.com">ti</a></p>
  <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`,O=e=>{if(!e)throw new Error("todo is required");const{id:t,description:r,done:i}=e,o=`
    <div class="view">
        <input class="toggle" type="checkbox" ${i?"checked":""}>
        <label>${r}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a todo MVC template">
  `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",t),i&&n.classList.add("completed"),n};let y;const H=e=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`Element ${e} not found`);y.innerHTML=c.getTodos(a.Pending).length};let h;const N=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`Element ${e} not found`);h.innerHTML="",t.forEach(r=>{h.append(O(r))})},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompletedButton:".clear-completed",TodoFilters:".filter",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{H(m.PendingCountLabel)},r=()=>{const l=c.getTodos(c.getCurrentFilter());N(m.TodoList,l),t()};(()=>{const l=document.createElement("div");l.innerHTML=D,document.querySelector(e).append(l),r()})();const i=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompletedButton),u=document.querySelectorAll(m.TodoFilters);i.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(c.addTodo(l.target.value),r(),l.target.value="")}),o.addEventListener("click",l=>{const p=l.target.closest("[data-id]");c.toggleTodo(p.getAttribute("data-id")),r()}),o.addEventListener("click",l=>{if(!l.target.classList.contains("destroy"))return;const p=l.target.closest("[data-id]");c.deleteTodo(p.getAttribute("data-id")),r()}),n.addEventListener("click",()=>{c.deleteCompleted(),r()}),u.forEach(l=>{l.addEventListener("click",p=>{switch(u.forEach(w=>w.classList.remove("selected")),p.target.classList.add("selected"),p.target.innerText){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Completed);break}r()})})};c.initStore();V("#app");
