function permutationSort(a) {
    
    let count = 0;
    let sorted = false;
    function permutations(a, i){ 
        if (i == a.length - 1){
            count++;
            if(checkSort(a)){
                sorted = true;
                return count;
            }
        }
        for(let j = i; j < a.length; j++){ // I did look at MelkMan419's implementation to find out how to traverse a permutation tree
            [a[i], a[j]] = [a[j], a[i]];   // recursively, but now my understanding of this is complete. 
            permutations(a, i+1);
            if(sorted == true){
                return count;
            }
            [a[j], a[i]] = [a[i], a[j]];
        }
    }
    permutations(a, 0);
    
    return count;
}

function checkSort(a){
    let sort = true;
    for(let i = 0; i < a.length; i++){
        if(a[i] > a[i+1]){
            sort = false;
        }
    }
    return sort;
}

