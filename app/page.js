import Category from "@/component/Category/Category"
import dynamic from 'next/dynamic'
import HeroSlider from "@/component/HeroSlider/HeroSlider"
import OurProducts from "@/component/OurProducts/OurProducts"

const CountdownTimer = dynamic(() => import('@/component/CountdownTimer/CountdownTimer'), { ssr: false })
 
export default function Home() {
	return (
		<main className="main-wrapper">
			<HeroSlider />
			<Category />
			<CountdownTimer date={'2023/10/01'} />
			<OurProducts />
		</main>
	)
}
