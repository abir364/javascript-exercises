const findTheOldest = function(p) {
    return p.reduce((pre_item, cur_item)=>{
        let cur_age = getAge(cur_item.yearOfDeath, cur_item.yearOfBirth);
        let pre_age = getAge(pre_item.yearOfDeath, pre_item.yearOfBirth);
        return pre_age < cur_age ? cur_item : pre_item;
    })
};

function getAge(death, birth) {
    if(!death){
        death = new Date().getFullYear();
    }
    return death-birth;
}

// Do not edit below this line
module.exports = findTheOldest;
