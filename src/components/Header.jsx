
// การสร้าง function component อักศรตัวแรกของชื่อ function จะต้องเป็นตัวพิมใหญ่(upperCase)
function Header(){
    return (
        <h1>My Application</h1>
    )
}

export default Header;


// อันนี้อีกแบบ-----------------------------------------------------------
// export default function Header(){
//     return (
//         <h1>แอพของฉัน</h1>
//     )
// }


// การสร้าง component แบบ arrow function-----------------------------------
// const Header = () => {
//      return (
//         <h1>แอพของฉันนะ</h1>
//     )
// }
// export default Header;