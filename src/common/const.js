export let debounce = () => {
    let timer = null;

    return function(cd,...args){
        let context = this;
        clearTimeout(timer);

        timer = setTimeout(function(){
            cd.apply(context,...args);
        },1000);
    };
}