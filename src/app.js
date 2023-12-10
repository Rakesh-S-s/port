const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const blog = document.getElementById('blog')
const online = document.getElementById('online')
const attendance = document.getElementById('attendance')
const investment = document.getElementById('investment')
const weather = document.getElementById('weather')

blog.addEventListener('click', () => {
    window.open('https://rakesh-blogit.netlify.app', '_blank')
})

online.addEventListener('click', () => {
    window.open('https://github.com/Rakesh-S-s/Online_Infrigement_detection', '_blank')
})

attendance.addEventListener('click', () => {
    window.open('https://github.com/Rakesh-S-s/Automatic_attendance_system', '_blank')
})

investment.addEventListener('click', () => {
    window.open('https://github.com/Rakesh-S-s/PitchTank', '_blank')
})

weather.addEventListener('click', () => {
    window.open('https://weatherapp-black-beta.vercel.app', '_blank')
})

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)

