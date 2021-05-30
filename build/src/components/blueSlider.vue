<template>

  <div class="blue-slider">
    
    <h1 class="header">Heading</h1>

    <p class="body-big">Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>

    <div class="slider" :class="{'col-one': columns ===1, 'col-two': columns===2, 'col-three': columns===3}">

      <div class="arrow-left-icon arrow-icon" @click="switchSlide('left')"><div class="arrow left"></div></div>

      
      <div class="slide" v-for="(slide, index) in currentSlides" :key="index" >
        <h3>{{slide.slideHead}}</h3>
        <p>{{slide.slideBody}}</p>
        <svg v-if="slide.slideIcon" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4995 41.348C10.3481 41.348 1.27531 32.357 1.27531 21.305C1.27531 10.254 10.3481 1.26404 21.4995 1.26404C32.651 1.26404 41.7237 10.254 41.7237 21.305C41.7237 32.357 32.651 41.348 21.4995 41.348ZM21.4995 0.300049C9.81219 0.300049 0.303528 9.72305 0.303528 21.305C0.303528 32.888 9.81219 42.3111 21.4995 42.3111C33.1868 42.3111 42.6964 32.888 42.6964 21.305C42.6964 9.72305 33.1868 0.300049 21.4995 0.300049ZM37.4552 12.661C37.5329 13.234 37.5773 13.849 37.5773 14.513C37.5773 16.341 37.2322 18.397 36.1949 20.967L30.6409 36.881C36.0466 33.757 39.6833 27.952 39.6833 21.305C39.6833 18.172 38.875 15.226 37.4552 12.661ZM21.8184 22.881L16.3632 38.592C17.9919 39.066 19.7144 39.326 21.4995 39.326C23.6166 39.326 25.6479 38.962 27.5379 38.304C27.4895 38.227 27.4451 38.145 27.4087 38.056L21.8184 22.881ZM33.7751 20.395C33.7751 18.169 32.9678 16.626 32.2756 15.426C31.3543 13.942 30.4895 12.685 30.4895 11.201C30.4895 9.54404 31.7579 8.00204 33.543 8.00204C33.6237 8.00204 33.6994 8.01204 33.7781 8.01704C30.543 5.07904 26.2332 3.28604 21.4995 3.28604C15.1473 3.28604 9.55893 6.51504 6.30663 11.408C6.73449 11.42 7.13611 11.43 7.47718 11.43C9.37932 11.43 12.3238 11.201 12.3238 11.201C13.3037 11.143 13.4197 12.57 12.4399 12.685C12.4399 12.685 11.454 12.799 10.3591 12.857L16.9798 32.375L20.9596 20.549L18.1271 12.857C17.1483 12.799 16.2199 12.685 16.2199 12.685C15.2401 12.628 15.3552 11.143 16.335 11.201C16.335 11.201 19.337 11.43 21.1241 11.43C23.0263 11.43 25.9708 11.201 25.9708 11.201C26.9506 11.143 27.0667 12.57 26.0868 12.685C26.0868 12.685 25.0999 12.799 24.0051 12.857L30.5773 32.227L32.3906 26.221C33.1767 23.728 33.7751 21.938 33.7751 20.395ZM3.31567 21.305C3.31567 28.437 7.49835 34.601 13.565 37.523L4.89086 13.972C3.88278 16.212 3.31567 18.693 3.31567 21.305Z" fill="#BABFC6"/>
        </svg>

      </div>
      
      <div class="arrow-right-icon arrow-icon" @click="switchSlide('right')"><div class="arrow right"></div></div>
      

    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'blueSlider',
  data() {
    return {
      windowWidth: window.innerWidth,
      initialCounter: null,
      availableSlidesNum: this.columns,
      currentSlides: this.availableSlidesDisplay
    }
  },
  methods: {
    slideAnim() {
      let self = this;
      return new Promise (resolve => {
          this.$el.querySelector('.slide').classList.add('leave-side')
        setTimeout(function() {
          
          self.$el.querySelector('.slide').classList.remove('leave-side')
          resolve('slideAnim')
        }, 300)
      })
    },
    slideAnimBig() {
      let self = this;
      return new Promise (resolve => {
          this.$el.querySelectorAll('.slide').forEach( e=> {e.classList.add('leave-side')})
        setTimeout(function() {
          
          self.$el.querySelectorAll('.slide').forEach( e=> {e.classList.remove('leave-side')})
          resolve('slideAnimBig')
        }, 300)
      })
    },
    async animBig(start, end) {
      await this.slideAnimBig();
      this.currentSlides = this.availableSlidesDisplay.slice(start, end) 
      
    },
    async setSlide(slide) {
      await this.slideAnim();
      let currSlide = this.availableSlidesDisplay.slice(slide, slide+1);
      this.currentSlides = currSlide;
      
    },
    switchSlide(direction) {
      let dir;
      switch (direction) {
        case "right":
        dir = +1;
        break;

        case "left":
        dir=-1;
        break;
      }
      let current = this.currentSlides[0].slideIndex
      //case for one slide
      if (this.currentSlides.length ==1) {
        
        
        if (current == 2 && dir ===+1) {
          current = 0;
          this.setSlide(current)
          
        } else {
          current+=dir;
          if (current < 0 ) {
            current = 2;
          }
          
          this.setSlide(current)
        }
      }
      //case for two slides
      if (this.currentSlides.length ==2 && dir ==+1) {
        this.animBig(1,3)
        
        
      } else if (this.currentSlides.length ==2 && dir ==-1) {
        this.animBig(0,2)
        
        
      }
      
    },
    setColumns() {
      this.initialCounter = this.columns;
      this.currentSlides = this.availableSlidesDisplay.slice(0, this.initialCounter)
    }
  },
  computed: {
    columns() {
      if (this.windowWidth < 800) {
        return 1
      } else if (this.windowWidth > 800 && this.windowWidth < 1200) { return 2} else { return 3}
    },
    availableSlidesDisplay() {return this.$store.state.slider}
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      this.setColumns();
    })
    
    
  },
  created() {
    this.setColumns();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$blue: #215398;
$black-text:#2D3236;
$magenta-color: #FF3859;
$gray-text: #808080;
 .blue-slider {
   position: relative;
   height: 466px;
   background: $blue;
   color: #fff;
   display: grid;
   justify-content: center;
   align-content: center;
   text-align: center;
   

    h1 {
      font-weight: 300;
      margin-bottom: 5px;
      font-size: 40px;
      line-height: 52px;
    }

   .body-big {
     font-size: 20px;
     line-height: 32px;
     font-weight: 300;
     margin-bottom: 40px;
   }

    .slider {
      display: grid;
      justify-items: center;
      grid-gap: 20px;
      position: relative;

      //columns settings
      &.col-one {
        grid-template-columns: 48px auto 48px;
      }
      &.col-two {
        grid-template-columns: 48px auto auto 48px;
        
      }
      &.col-three {
        grid-template-columns: 48px auto auto auto 48px;
        
      }
      // arrows
      .arrow-icon {
        position: relative;
        height: 48px;
        width: 48px;
        border-radius: 50%;
        transition: all .3s ease-in-out;
        align-self: center;
        cursor: pointer;
        &:hover {
          background: rgba(255, 255, 255, 0.05)
        }
        
      }
      
      .arrow {
        position: absolute;
        height: 13px;
        width: 13px;
        top: 50%;
        
        left: 50%;
        
        &.right {
          border-right: 1px solid #28A9E0;
          border-top: 1px solid #28A9E0;
          transform: translate(-70%, -50%) rotate(45deg);
        }
        &.left {
          border-left: 1px solid #28A9E0;
          border-bottom: 1px solid #28A9E0;
          transform: translate(-30%, -50%) rotate(45deg);
        }
      }
      

    }

   .slide {
     
     background: #fff;
     width: 322px;
     height: 228px;
     display: grid;
     grid-gap: 12px;
     justify-content: center;
     justify-items: center;
     align-content: center;
     transition: all .3s ease-in-out;
     * {
       width: 277px;
     }

     h3 {
      color: $black-text;
      font-size: 20px;
      line-height: 24px;
      font-weight: 300;
      word-wrap: break-word;
     }
     p {
       font-size: 15px;
       line-height: 24px;
       font-weight: 300;
       color: $gray-text;
     }
   }
 }
 .blue-slider::after {
   content: '';
   z-index: 999;
   position: absolute;
   width: 32px;
   height: 32px;
   border-radius: 50%;
   background: $magenta-color;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 50%);
   box-shadow: 0px 4px 4px rgba(255, 56, 89, 0.2);

 }

 @media(max-width: 1050px) {
      .blue-slider {
        height: auto;
        padding-top: 3.5rem;
        .slider {
        margin-bottom: 60px;
      }
      }
      
    }
  @media (max-width: 800px) {
    .blue-slider {
      .body-big {
        padding: 0 1rem;
      }
      .slider {
        grid-gap: 0;
      }
    }
  }

  @media (max-width: 360px) {
    .blue-slider {
      .slider {
        display: flex;
        flex-direction: column;
        align-items: center;
        .arrow-icon {
            position: absolute;
            bottom: 50%;
            
            
              &.arrow-right-icon {
                right: 0;
                transform: translate(-50%, 50%);
              }
              &.arrow-left-icon {
                left: 0;
                transform: translate(50%, 50%);
              }
            
        }
      }
    }
  }

    // transition css

  .leave-side {
    transform: translateX(100%);
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  
</style>
