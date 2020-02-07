n=5;

for(i=n;i>0;i--) {
    let re=' '.repeat(i-1) + '*'.repeat(n-i+1) + ' ' + '*'.repeat(n-i+1);
    console.log(re);
}

