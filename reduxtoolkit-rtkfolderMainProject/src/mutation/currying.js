// কারিং ফাংশন সম্পর্কে বিস্তারিত জানতে নোট ফলো করো এছিছি  রিডাক্স মডিউল এর 


// eta closer er topic onujayei kaj kortice
const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};
const level = add(5);
const level2 = add(10);
const result = level2(2)(3);
console.log(result);
