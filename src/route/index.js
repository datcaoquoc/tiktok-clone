import Following from "~/page/Following";
import Home from "~/page/Home";
import Upload from "~/page/Upload";
import HeaderOnly from "~/component/Layout/HeaderOnly";
// trang chưa đăng nhập cũng có thể vào
const publicRoute = [
    {path: "/", component: Home },
    {path: "/following", component: Following },
    {path: "/upload", component: Upload, layout: HeaderOnly },
];

// các trang cần quyền truy cập
const privateRoute = [];

export {publicRoute, privateRoute}
