
	var arrB=[];
	var a=0;
	// 1,3,5,7,9 & 2,4,6,8,10
	for(var i=0;i<2;i++){
		for(var j=1;j<=5;j++){
			i == 1 ? arrB[j*2]='even' : arrB[(j*2-1)]='odd' ;
			a+=1;
		}
	}
	arrB.shift();
    
console.log(arrB,a);