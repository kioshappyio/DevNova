class ANIMAL {
  color
  skill
  constructor(name){
    this.name = name;
  }
  set newColor(color){
    this.color = color;
  }
  set newSkill(skill){
    this.skill = skill;
  }
  get detail() {
    return `hi nama saya ${this.name} warna saya ${this.color} dan kemapuan saya ${this.skill}`;
  }
}

const cat = new ANIMAL('blacky');
cat.newColor = "red";
cat.newSkill = "menggonggong";
console.log(cat.detail);




// const mahasiswa = [
//   {
//   nama: "key",
//   alamat: "kampung inggris",
//   usia: 18,
//   semester: 3
//   },
//   {
//   nama: "yek",
//   alamat: "kampung belanda",
//   usia: 30,
//   semester: 8
//   }
// ];



// function getDetailData() {
//   mahasiswa.map(function (result, i){
//     console.table(result);
//   });
//   mahasiswa.forEach(result => {
//     console.log(result);
//   });
// }