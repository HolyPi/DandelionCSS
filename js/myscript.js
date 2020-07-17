class MyCounter extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    get count() {
        return this.getAttribute("count");
    }

    set count(val) {
        this.setAttribute("count", val);
    }

    static get observedAttributes() {
        return ["count"];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop == 'count') {
        this.render();
        let btn = this.shadow.querySelector("#btn");
        btn.addEventListener('click', this.inc.bind(this));
        }
    }

    inc() {
        this.count++;
    }

    connectedCallback() {
        this.render();
        let btn = this.shadow.querySelector("#btn");
        btn.addEventListener('click', this.inc.bind(this));
    }

    render() {
        this.shadow.innerHTML = `<h1>Counter</h1>
        ${this.count}
        <button id="btn">Increment</button>`
    }
}


customElements.define('my-counter', MyCounter)


// class Reset extends HTMLElement {
//     constructor() {
//       super();
//       this.shadow = this.attachShadow({ mode: "open" });
//     }

//     set count(val) {
//         this.setAttribute("count", val);
//     }
    //   this._width = this.getAttribute('width')
    //   this._height = this.getAttribute('height')
    //     this._time = this.getAttribute('time')
    //     this._transition = this.getAttribute('transition')
    //   this._container = document.createElement('div')
    //   this._container.style.width = this._width + 'px'
    // this._container.style.height = this._height + 'px'
    // this._container.style.border = '3px solid'
    // this._container.style.overflow = 'hidden'

    // this._inner = document.createElement('div')
    // this._inner.style.display = 'flex'
    // this._inner.style.transition = '400ms'

    // this._container.appendChild(this._inner)
    // this._shadowRoot.appendChild(this._container)
    // this._imgs = Array.from(this.querySelectorAll('img'))
    // for (let i = 0; i < this._imgs.length; i += 1) {
    //     this._inner.appendChild(this._imgs[i])
    //   }
    //   this._index = 0
    //   this._paused = false
    // }
    // _addTimer() {
    //     console.log(this._time, this._transition)
    //     console.log(this._inner.style.transition)
    //     this._timer = setInterval(() => {
    //       this._nextImg()
    //     }, this._time)
    //   }
    
    //   _removeTimer() {
    //     clearInterval(this._timer)
    //   }
    
    //   connectedCallback() {
    //     this._addTimer()
    //     this._nextImg()
    //   }
    
    //   disconnectedCallback() {
    //     this._removeTimer()
    //   }
    
    //   static get observedAttributes() {
    //     return ['time', 'paused', 'transition']
    //   }
    
    //   attributeChangedCallback(name, oldValue, newValue) {
    //     console.log(name, oldValue, newValue)
    //     switch(name) {
    //       case 'time':
    //         this._time = newValue
    //         this._removeTimer()
    //         this._addTimer()
    //         break
        
    //       case 'transition':
    //         this._transition = newValue
    //         this._inner.style.transition = `${this._transition}ms`
    //         break 
    
    //       case 'paused': 
    //         this._paused = newValue
    //         break
    
    //     }
    //   }
    
    //   _nextImg() {
    //     this._index = (this._index + 1) % this._imgs.length
    //     const x = this._index * -this._width
    //     this._inner.style.transform = `translate(${x}px, 0)`
    //   }
    // }
    
    // customElements.define('simple-slides', SimpleSlides)