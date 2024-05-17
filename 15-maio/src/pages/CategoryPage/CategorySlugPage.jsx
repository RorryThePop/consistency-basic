import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { goodsCategories } from "../../config/GoodsCategories";
import CategoryPageItem from "./CategoryItem";

function CategorySlugPage() {
    const {categoriesId} = useParams()
    const filteredData = goodsCategories.filter(item => parseInt(categoriesId) === item.id)
    console.log(filteredData)
    return (
        <>
            <Header/>
            <main>
                <section>
                    <div className="">
                        {
                            filteredData[0].category.map(item => (
                                <CategoryPageItem title={item.categoryName}/>
                            ))
                        }
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default CategorySlugPage;