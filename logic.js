// function for memory

function memoryChoose(isPriceChange){
    var bestPrice =parseInt(document.getElementById('bestPrice').innerText);
    var storageInnerText= parseInt(document.getElementById('storage').innerText);
    var shippingCost= parseInt(document.getElementById('charge').innerText);
    /////////////////////////////
   var subtotal= parseInt(document.getElementById('subtotal').innerText=total);
   document.getElementById('code').innerHTML="Apply promo code";
   document.getElementById('code').style.color="red";
   document.getElementById('promocode').placeholder="type 'stevekaku' ";
   /////////////////////////////
   document.getElementById('apply').removeAttribute('disabled');
   //////////////////////////////
    if(isPriceChange==0) {
        var amount8GB= 0;
        var memoryCost8GB= parseInt(document.getElementById('memory').innerText=amount8GB);
      
        var total= bestPrice+memoryCost8GB+storageInnerText+shippingCost;
        document.getElementById('total').innerText= total;
    
        document.getElementById('subtotal').innerText=total;
    } 
    else{
    var amount16GB=180;
    var memoryCost16GB= parseInt(document.getElementById('memory').innerText=amount16GB);

    var total= bestPrice+memoryCost16GB+storageInnerText+shippingCost;
    document.getElementById('total').innerText= total;

    document.getElementById('subtotal').innerText=total;
 }
}

// memory...............................
document.getElementById('8GB').addEventListener('click',function(){
    memoryChoose(0);
})
document.getElementById('16GB').addEventListener('click',function(){
     memoryChoose(180);
})



// function for storage

function storageChoose(isPriceChange){
    var bestPrice =parseInt(document.getElementById('bestPrice').innerText);
    var memotyInnerText= parseInt(document.getElementById('memory').innerText);
    var shippingCost= parseInt(document.getElementById('charge').innerText);
    /////////////////
    var subtotal= parseInt(document.getElementById('subtotal').innerText=total);
    document.getElementById('code').innerHTML="Apply promo code";
    document.getElementById('code').style.color="red";
    document.getElementById('promocode').placeholder="type 'stevekaku' ";
    /////////////////////
    document.getElementById('apply').removeAttribute('disabled');
    ///////////////////////
     if(isPriceChange==0){
        var amount256GB= 0;
        var storageCost256GB= parseInt(document.getElementById('storage').innerText=amount256GB);
    
        var total= bestPrice+memotyInnerText+storageCost256GB+shippingCost;
        document.getElementById('total').innerText= total;
    
        document.getElementById('subtotal').innerText=total;
    }
    else if(isPriceChange==100){
        var amount512GB= 100;
        var storageCost512GB= parseInt(document.getElementById('storage').innerText= amount512GB);

        var total= bestPrice+memotyInnerText+storageCost512GB+shippingCost;
        document.getElementById('total').innerText= total;

        document.getElementById('subtotal').innerText=total;
    }
    else{
        var amount1TB= 180;
        var storageCost1TB= parseInt(document.getElementById('storage').innerText= amount1TB);

        var total= bestPrice+memotyInnerText+storageCost1TB+shippingCost;
        document.getElementById('total').innerText= total;

        document.getElementById('subtotal').innerText=total;
    }
}

// Storage..................
document.getElementById('256GB').addEventListener('click',function(){
    storageChoose(0);
})
document.getElementById('512GB').addEventListener('click',function(){
    storageChoose(100);
})
document.getElementById('1TB').addEventListener('click',function(){
     storageChoose(180);
})



// function for delivery method

function chooseDeliveryMethod(isPriceChange){
    var bestPrice =parseInt(document.getElementById('bestPrice').innerText);
    var memotyInnerText= parseInt(document.getElementById('memory').innerText);
    var storageInnerText= parseInt(document.getElementById('storage').innerText);
    /////////////
    var subtotal= parseInt(document.getElementById('subtotal').innerText=total);
    document.getElementById('code').innerHTML="Apply promo code";
    document.getElementById('code').style.color="red";
    document.getElementById('promocode').placeholder="type 'stevekaku' ";
    /////////////
    document.getElementById('apply').removeAttribute('disabled');
    
    if(isPriceChange==0){
        var amountFreeCharge= 0;
        var deliveryCost=parseInt(document.getElementById('charge').innerText=amountFreeCharge );

        var total= bestPrice+memotyInnerText+storageInnerText+deliveryCost;
        document.getElementById('total').innerText= total;

        document.getElementById('subtotal').innerText=total;
    }
    else{
        var amountPaidCharge= 20;
        var deliveryCost=parseInt(document.getElementById('charge').innerText=amountPaidCharge );

        var total= bestPrice+memotyInnerText+storageInnerText+deliveryCost;
        document.getElementById('total').innerText= total;

        document.getElementById('subtotal').innerText=total;
    }
}

//  delivery charge
document.getElementById('freeCharge').addEventListener('click',function(){
    chooseDeliveryMethod(0);
})
document.getElementById('paid').addEventListener('click',function(){
    chooseDeliveryMethod(20);
})



// apply promo code section  

document.getElementById('apply').addEventListener('click',function(){
    var promocod= document.getElementById('promocode');
    var promocode=promocod.value;
    
    if(promocode=="stevekaku"){
        promocod.value= "";
        var totalCost= parseInt(document.getElementById('subtotal').innerText);
        var applycode=totalCost*( 0.2);
        var discountPrice= totalCost-applycode;

        document.getElementById('subtotal').innerText=discountPrice;
        document.getElementById('code').innerText= "Promo code applied!";
        document.getElementById('code').style.color="green";

        document.getElementById('apply').setAttribute('disabled',true);
        
        promocod.placeholder="";
    }
    else{
        var totalCost= parseInt(document.getElementById('subtotal').innerText);
        console.log(alert("promo code not applied, you have to pay $"+totalCost));
        promocod.placeholder="";
        promocod.value="";
    }
})












 



 

  





 







