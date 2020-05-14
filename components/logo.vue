<template>
    <div class="logo">
        <div class="triangle2"></div>
        <div class="triangle1"></div>
        <div class="triangle3"></div>
        <div class="triangle4"></div>
    </div>
</template>

<style>
.logo {
    animation: turn 2s linear forwards 1s;     
    transform: scale(0.5, 0.5) rotateX(180deg);
    position: relative;
    height: 346px;
    width: 500px;
    margin: 10px auto;
    margin-top: var(--logo-top);
}

.triangle1, .triangle2, .triangle3, .triangle4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
}
.triangle1 {
    border-left: 210px solid transparent;
    border-right: 210px solid transparent;
    border-bottom: 360px solid #41B883;
}
.triangle2 {
    top: 60px;
    left: 70px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 175px solid transparent;
    border-right: 175px solid transparent;
    border-bottom: 300px solid #3B8070;
}
.triangle3 {
    top: 120px;
    left: 70px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 140px solid transparent;
    border-right: 140px solid transparent;
    border-bottom: 240px solid #35495E;
}
.triangle4 {
    top: 240px;
    left: 140px;
    animation: godown 0.5s linear forwards 3s;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 120px solid #fff;
}

@keyframes turn {
    100% {transform: scale(0.5, 0.5) rotateX(0deg);}
}
@keyframes godown {
    100% {top: 360px;}
}
@keyframes goright {
    100% {left: 140px;}
}
</style>
