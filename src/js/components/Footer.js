import React from 'react';
//引入css文件，本质上是引入的对应关系，即css文件中的属性名与实际生成的属性名的对应
let footerStyle = require("../../css/footer.css");

class Footer extends React.Component {

    render() {
        console.log(footerStyle);//{minifooter: "footer__minifooter__1HbTE"}
        return (

            <footer className={footerStyle.minifooter}>
                <p>这里是页脚，一般用来放置版权信息</p>
            </footer>
        )
    }
}

export default Footer;