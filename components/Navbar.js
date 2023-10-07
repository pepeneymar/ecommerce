import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants"
import Link from "next/link"
export default function Navbar(){
    return(
        <nav>
            <div>
                <h1>SHOP</h1>
            </div>
            <Link href="/">หน้าแรก</Link>
            <Link href="/products">สินค้า</Link>
            
        </nav>
    )
}