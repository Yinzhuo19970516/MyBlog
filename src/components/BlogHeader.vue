<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
                <router-link to="/add" exact>写博客</router-link>
                <router-link to="/login" exact>登陆</router-link>
                <router-link to="/registered" exact>注册</router-link>
                <router-link to= exact>游戏</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:"blog-header"
    
}
</script>
<style socped>
ul{
    list-style-type: none;
    text-align: center;
    margin:0;
}
li{
    display:inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding:5px;
    border-radius: 5px;
}
nav{
    background:blue;
    padding:30px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: rgba(255,255,255,0.8);
    color:#444
}

</style>