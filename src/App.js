import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Navbars from "./Components/Home/Navbars/Navbars";
import Footer from "./Components/Shared/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import AllShop from "./Components/Shops/AllShop";
import Register from "./Components/Login/Register/Register";
import Login from "./Components/Login/Login/Login";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AddNewItem from "./Components/Dashboard/AddNewItem/AddNewItem";
import AddBlog from "./Components/Dashboard/AddBlog/AddBlog";
import Checkout from "./Components/Checkout/Checkout";
import Carts from "./Components/Carts/Carts";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddFeaturedItem from "./Components/Dashboard/AddFeaturedItem/AddFeaturedItem";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Navbars></Navbars>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/blog" element={<Blogs />}></Route>
                        <Route path="/shop" element={<AllShop />}></Route>
                        <Route path="/checkout" element={<Checkout />}></Route>
                        <Route path="/carts" element={<Carts />}></Route>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/dashboard/addReview"
                            element={
                                <PrivateRoute>
                                    <AddReview />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/dashboard/addFeatured"
                            element={
                                <AdminRoute>
                                    <AddFeaturedItem />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/dashboard/makeAdmin"
                            element={
                                <AdminRoute>
                                    <MakeAdmin />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/dashboard/addNewItem"
                            element={
                                <AdminRoute>
                                    <AddNewItem />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/dashboard/addBlogs"
                            element={
                                <AdminRoute>
                                    <AddBlog />
                                </AdminRoute>
                            }
                        />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
