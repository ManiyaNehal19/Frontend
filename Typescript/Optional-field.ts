//denotes with ?
interface User{
    nmae: string,
    phone?: number //it is optional you can not define it too
}
let customer:User = {
    nmae: "Maniya" //works even though we did not define phone
}
type tree= {
    name: string,
    root?:tree[]

};
let t1:tree={
    name:"tree 1"
};