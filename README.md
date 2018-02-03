# 텍스트 에니메이션(jade sass animation)
(preview)[https://codepen.io/uiwwnw/pen/RQrdWm?editors=0100]

`동영상으로, 광고로 유행하던 텍스트 에니메이션을 쉽게 만들어 낼 수 있습니다.`

## 사용법
jade
> text: 'UIWWNW',// 사용할 텍스트.  
> time: 1300,// 재생될 시간.  
> transition: 2,// 에니메이션 시간.  
> exTransform: 'scaleX(1.4)',// 기본 위치, 스타일 지정.  
> transform: 'scaleX(1)'// 재생될 에니메이션.  

ex
> {  
>  text: 'UIWWNW',    
>  time: 1300,    
>  transition: 2,    
>  exTransform: 'scaleX(1.4)',     
>  transform: 'scaleX(1)'    
> },    
> {   
>  text: 'uiwwnw',    
>  time: 3300,   
>  transition: 3,   
>  transform: 'scale(1.1)'  
> }   
