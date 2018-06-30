import ShowBlogs from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog.vue'
import Login from './components/Login.vue'
import Registered from './components/Registered.vue'

export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    {path:"/blog/:id", component:SingleBlog},
    {path:"/edit/:id",component:EditBlog},
    {path:"/login",component:Login},
    {path:"/registered",component:Registered}
]