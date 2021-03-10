// 1108. Defanging an IP Address
// Easy
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

defangIP = (address) => {
    let i = 0
    const len = address.length
    let output = ""
    while(i<len){
        console.log(address[i])
        if(address[i]=="."){
            console.log("if")
            output=output+"[.]"
            i++
        }else{
        output=output+address[i]
        i++
        }
    }
    return output;
}
console.log(defangIP("1.1.1.1"))