/* 1. 右上角导航弹出动画
    - 拿到所有导航需要的节点, 进入导航界面时加入相应的class, 退出时移除class
*/

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuPortrait = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')
const eachNav = document.querySelectorAll('.nav-item')

let isMenuShow = false


menuBtn.addEventListener('click', toggle)

function toggle() {
    // menu显示
    if (!isMenuShow) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuPortrait.classList.add('show')
        menuNav.classList.add('show')
        eachNav.forEach(item => item.classList.add('show'))

        // 更新menu状态
        isMenuShow = true
    }
    // menu关闭
    else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuPortrait.classList.remove('show')
        menuNav.classList.remove('show')
        eachNav.forEach(item => item.classList.remove('show'))

        isMenuShow = false
    }
}