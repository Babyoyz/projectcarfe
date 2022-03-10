<template>
    <div class="card" :style="`background:${bgcolor}`">
        <div class="imgBx">
            <img :src="img"  />
        </div>

        <div class="contentBx" >
            <h2>Nike Shoes</h2>

            <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <a href="#">Buy Now</a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        img:{
            type:String
        },
        bgcolor:{
            type:String
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800, 800i, 900&display=swap');

.card {
    position: relative;
    width: 200px;
    height: 350px;
    background: #ff33ff;
    border-radius: 20px;
    overflow: hidden;
}

.card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff8ba;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}

.card:hover:before {
    clip-path: circle(200px at 80% -20%);
}

.card:after {
    content: 'LevyCafe';
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
}

.card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
   
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

.card:hover .imgBx {
    top: 0%;
    transform: translateY(-30%);
    /* bug  */
}

.card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 270px;
}

.card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
}

.card:hover .contentBx {
    height: 210px;
}

.card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(248, 244, 18);
}

.card .contentBx .size,
.card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
}

.card .contentBx .size h3,
.card .contentBx .color h3 {
    color: white;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.card .contentBx .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
}

.card .contentBx .size span:hover {
    /* other bug */
    background: #b90000;
}

.card .contentBx .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}


.card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
}

.card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
}
</style>