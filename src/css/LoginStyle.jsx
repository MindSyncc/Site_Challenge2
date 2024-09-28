import styled from "styled-components";

export const LoginStyle = styled.section`


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #c4c4c4;
    

}
.content {
    background-color:#D1E2F6FF;
    border-radius: 15px;
    width: 960px;
    height: 70%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
}

.content::before {
    content: "";
    position: absolute;
    background-color: #0e004d;
    width: 40%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    left: 0;
}

.title {
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;
    margin-top: 20px;
    display:flex;
    justify-content:center;
}

.title-primary {
    color: #ffffff;
}

.title-second {
    color: #000a8f;
}

.description {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 30px;
}

.description-primary {
    color: #ffffff;
}

.description-second {
    color: #000000FF;
    font-size:2rem;
}

.btn {
    border-radius: 15px;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 10px;
    padding: 10px 50px;
    cursor: pointer;
    font-weight: bold;
    width: 200px;
    align-self: center;
    border: none;
    margin-top: 1rem;
    text-decoration: none;
}

.btn-primary {
    background-color: transparent;
    border: 1px solid #000;
    transition: background-color .5s;
}

.btn-primary:hover {
    background-color: #320081;
    color: #000;
}

.btn-second {
    background-color: #2a0077;
    border: 1px solid #000;
    transition: background-color .5s;

}

.btn-second a {
    text-decoration: none;
    color: white;
}

.btn-second:hover {
    background-color: #7A87D5FF;
    border: 1px solid #000;
    color: #000;
}

.first-content {
    display: flex;
}

.first-content .second-column {
    z-index: 11;
}

.first-column {
    text-align: center;
    width: 40%;
    z-index: 10;
}

.second-column {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.social-media {
    margin: 1rem 0;
}

.link-social-media:not(:first-child) {
    margin-left: 10px;
}

.link-social-media .item-social-media {
    transition: background-color .5s;
}

.link-social-media .item-social-media {
    background-color: #2a0077;
    color: #ffffff;
    border-color: #0a0068;
}

.link-social-media:hover .item-social-media {
    background-color: #090033;
    color: #ffffff;
    border-color: #0a0068;
}

.list-social-media {
    display: flex;
    list-style-type: none;
}

.item-social-media {
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #95a5a6;
}

.form {
    display: flex;
    flex-direction: column;
    width: 55%;
}
.form2 {
    display: flex;
    flex-direction: column;
    
}
.form2 input{
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
    padding: 0px 10px;
}

.form input {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
    padding: 0px 10px;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}


.label-input{
    background-color: #2a0077;
    display: flex;
    align-items: center;
    margin: 8px;
    
}
.label-input input{
    font-size:1.5rem;
}



.icon-modify {
    color: #7f8c8d;
    padding: 0 5px;
}

/* second content*/

.second-content {
    position: absolute;
    display: flex;
}

.second-content .first-column {
    order: 2;
    z-index: -1;
}

.second-content .second-column {
    order: 1;
    z-index: -1;
}

.password {
    color: #34495e;
    font-size: 14px;
    margin: 15px 0;
    text-align: center;
}

.password::first-letter {
    text-transform: capitalize;
}



.sign-in-js .first-content .first-column {
    z-index: -1;
}

.sign-in-js .second-content .second-column {
    z-index: 11;
}

.sign-in-js .second-content .first-column {
    z-index: 13;
}

.sign-in-js .content::before {
    left: 60%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    animation: slidein 1.3s;
    /*MODIFIQUEI DE 3s PARA 1.3s*/

    z-index: 12;
}

.sign-up-js .content::before {
    animation: slideout 1.3s;
    /*MODIFIQUEI DE 3s PARA 1.3s*/

    z-index: 12;
}

.sign-up-js .second-content .first-column,
.sign-up-js .second-content .second-column {
    z-index: -1;
}

.sign-up-js .first-content .second-column {
    z-index: 11;
}

.sign-up-js .first-content .first-column {
    z-index: 13;
}


/* DESLOCAMENTO CONTEÚDO ATRÁS DO CONTENT:BEFORE*/
.sign-in-js .first-content .second-column {

    z-index: -1;
    position: relative;
    animation: deslocamentoEsq 1.3s;
    /*MODIFIQUEI DE 3s PARA 1.3s*/
}

.sign-up-js .second-content .second-column {
    position: relative;
    z-index: -1;
    animation: deslocamentoDir 1.3s;
    /*MODIFIQUEI DE 3s PARA 1.3s*/
}

/*ANIMAÇÃOO CSS PARA O CONTEÚDO*/

@keyframes deslocamentoEsq {

    from {
        left: 0;
        opacity: 1;
        z-index: 12;
    }

    25% {
        left: -80px;
        opacity: .5;
        /* z-index: 12; NÃO HÁ NECESSIDADE */
    }

    50% {
        left: -100px;
        opacity: .2;
        /* z-index: 12; NÃO HÁ NECESSIDADE */
    }

    to {
        left: -110px;
        opacity: 0;
        z-index: -1;
    }
}


@keyframes deslocamentoDir {

    from {
        left: 0;
        z-index: 12;
    }

    25% {
        left: 80px;
        /* z-index: 12;  NÃO HÁ NECESSIDADE*/
    }

    50% {
        left: 100px;
        /* z-index: 12; NÃO HÁ NECESSIDADE*/
        /* background-color: yellow;  Exemplo que dei no vídeo*/
    }

    to {
        left: 110px;
        z-index: -1;
    }
}


/*ANIMAÇÃO CSS*/

@keyframes slidein {

    from {
        left: 0;
        width: 40%;
    }

    25% {
        left: 5%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 45%;
        width: 50%;
    }

    to {
        left: 60%;
        width: 40%;
    }
}

@keyframes slideout {

    from {
        left: 60%;
        width: 40%;
    }

    25% {
        left: 45%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 5%;
        width: 50%;
    }

    to {
        left: 0;
        width: 40%;
    }
}

/*VERSÃO MOBILE*/
@media screen and (max-width: 768px) {
    .content {
        width: 100%;
        height: 100%;
    }

    .content::before {
        width: 100%;
        height: 40%;
        top: 0;
        border-radius: 0;
    }

    .first-content, .second-content {
        flex-direction: column;
        justify-content: space-around;
    }

    .first-column, .second-column {
        width: 100%;
    }

    .sign-in-js .content::before {
        top: 60%;
        left: 0;
        border-radius: 0;

    }

    .form {
        width: 90%;
    }

    /* ANIMAÇÃO MOBILE CSS*/

    @keyframes deslocamentoEsq {

        from {
            top: 0;
            opacity: 1;
            z-index: 12;
        }

        25% {
            top: -80px;
            opacity: .5;
            /* z-index: 12; NÃO HÁ NECESSIDADE */
        }

        50% {
            top: -100px;
            opacity: .2;
            /* z-index: 12; NÃO HÁ NECESSIDADE */
        }

        to {
            top: -110px;
            opacity: 0;
            z-index: -1;
        }
    }


    @keyframes deslocamentoDir {

        from {
            top: 0;
            z-index: 12;
        }

        25% {
            top: 80px;
            /* z-index: 12;  NÃO HÁ NECESSIDADE*/
        }

        50% {
            top: 100px;
            /* z-index: 12; NÃO HÁ NECESSIDADE*/
            /* background-color: yellow;  Exemplo que dei no vídeo*/
        }

        to {
            top: 110px;
            z-index: -1;
        }
    }



    @keyframes slidein {

        from {
            top: 0;
            height: 40%;
        }

        25% {
            top: 5%;
            height: 50%;
        }

        50% {
            top: 25%;
            height: 60%;
        }

        75% {
            top: 45%;
            height: 50%;
        }

        to {
            top: 60%;
            height: 40%;
        }
    }

    @keyframes slideout {

        from {
            top: 60%;
            height: 40%;
        }

        25% {
            top: 45%;
            height: 50%;
        }

        50% {
            top: 25%;
            height: 60%;
        }

        75% {
            top: 5%;
            height: 50%;
        }

        to {
            top: 0;
            height: 40%;
        }
    }

}

@media screen and (max-width: 740px) {
    .form {
        width: 50%;
    }
}

@media screen and (max-width: 425px) {
    .form {
        width: 100%;
    }
}
























.titulo-login{
    display:block;
    font-size:2.3rem;
    line-height:1.3;
    text-align:center;
    color:#213550;
    
}
.w-input{
    width:100%;
    position:relative;
    margin-top:30px;
    margin-bottom:30px;
    border:none;
    border-bottom:2px solid #d9d9d9;
    
}
.w-input:hover{
    border-bottom:2px solid blue;
}
.far ,.fas{
    font-size:1rem;
    color:white;
    padding:0px 20px;
}
.input-form{
    
    color:#555;
    line-height:1.3;
    display:block;
    width:100%;
    padding: 0 5px;
    border:none;
    outline:0;
    background-color: #0E004D;
}
.login-btn{
    width:100%;
    display:flex;
    justify-content:center;
}

.list-social-media{
    display:flex;
    align-items: center;
    justify-content: center;
}



.utilidades{
    margin-top: 20px;
    margin-bottom:20px;
}
.text1{
    color:#555;
    font-size:1.5rem;
}
.link{
    font-size:1.5rem;
    color: blue;
    cursor: pointer;
}
.text2{
    color:blue;
}
img{
    width:300px;
    height:300px;
    margin-left: 50px;
    border-radius:100%;
}
img:hover{
    box-shadow:10px 10px 10px blue;
    transition:.5s;
}
ul li{
    list-style: none;
    line-height:1.5rem;
}



`