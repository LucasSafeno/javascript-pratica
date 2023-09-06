let cachorro = {
    raca: 'SRD',
    latir: function(){
        console.log("au au")
    },
    rosnar: function(){
        console.log("grrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}
cachorro.setRaca('Pastor ')
console.log(cachorro.getRaca)

