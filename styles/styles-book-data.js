import {css} from "lit-element";

export default css`
  
  .cuerpo {
    padding-top: 36px;
  }
  
  .flexcontainer {
    display: inline-flex;
    justify-content: center;
    width: 198px;
    height: 300px;
    box-shadow: rgb(0 0 0 / 50%) 5px 5px 10px;
    margin: 36px 0px 0px 20px;
    transition: transform 0.3s ease 0s;
  }
  
  .flexcontainer:hover {
    transform: scale(1.1);
  }
  
  .main {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    place-content: space-around flex-end;
    justify-content: center;
    margin-left: 150px;
  }
  
  
  .contenido {
    margin: 220px 20px 20px 42px;
    width: 143px;
    position: absolute;
  }
  
  .titulo {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
  }
  
  .detalle {
    color: #828282;
    font-size: 14px;
  }
  
  .caracteristicas {
    color: #828282;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
  }
  
  .portada .cover {
    width: 142px;
    height: 200px;
  }  

`
