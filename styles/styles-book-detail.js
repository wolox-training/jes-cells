import {css} from "lit-element";

export default css`

.main{
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.header{
    padding-bottom: 12px;
    display: inline;
    border-bottom: solid 4px #BED23C;
    width: 75vh;
}

.body{
    padding-top: 36px;
}
.flexcontainer{
    display: flex;
    width: 62vw;
    height: 416px;
    padding: 24px;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 50%);
    position: absolute;
}

.content{
    display: flex;
    flex-direction: column;
    padding: 0px 52px;
}

.title{
    font-size: 32px;
    font-weight: 500;
    display: inline;
}

.gender{
    color: #828282;
    font-size: 24px;
    font-weight: 500;
    display: inline;
    padding-left:10px;
}

.subtitle{
    font-size: 20px;
    padding-bottom: 30px;
    display: block;
    font-weight: 500;
}

.features{
    color: #828282;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
  }

  .mask .cover{
    width: 261px;
    height: 368px;
  }
  
  .mask .badge{
    height: 103.57px;
    width: 71.53px;
    transform: rotate(15deg);
    position: absolute;
    top: 12px;
    left: 271px;
  }

  .line{
    width:100px;
  }
  
.back{
    position: absolute;
    margin: -98px -129px;
    font-size: 20px;
    font-weight: 100;
    line-height: 24px;
}

.back a{
  text-decoration:none;
}


a::before {
    content: url(img/back.png);
    width: 20px;
    height: 20px;
    padding: 11px 13px;
  }

  @media only screen and (max-width: 1024px) {
    .flexcontainer{
        height: 570px;
        padding: 24px;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 50%);
        position: absolute;
        flex-direction: column;
        width: 336px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header{
        padding-bottom: 19px;
        padding-top: 8px;
        border-bottom: solid 4px #BED23C;
        display: inline;
        width: 317px;
    }

    .content{
        display: flex;
        flex-direction: column;
        padding: 0px 45px;
        flex-wrap: wrap;
    }

    .title{
        font-size: 24px;
        font-weight: 500;
    }
    
    .subtitle{
        font-size: 14px;
        padding-bottom: 30px;
        display: block;
        font-weight: 500;
    }
    
    .features{
        color: #828282;
        font-size: 14px;
        line-height: 24px;
        font-weight: 300;
      }

      .body{
        padding-top: 18px;
    }
    
      .mask .cover{
        width: 212px;
        height: 298.91px;
        margin-left: 16px;
        margin-top: 28px;
      }
      
      .mask .badge{
        height: 75.57px;
        width: $badgewitdh;
        transform: rotate(15deg);
        position: absolute;
        top: 11px;
        left: 243px;
      }
      
    .back{
        position: absolute;
        margin-top: 500px;
        font-size: 20px;
        font-weight: 100;
        line-height: 24px;
    }
    
}

`
