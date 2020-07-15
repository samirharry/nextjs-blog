import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout,{siteTitle} from '../components/layout'
import uttilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'


export default function Home({allPostsData}) {
  return (
	  <Layout home>
		  <Head>
			  <title>
				  {siteTitle}
			  </title>
		  </Head>
		  <section className={`${uttilStyles.headingMd} ${uttilStyles.padding1px}`}>
			<h2 className={uttilStyles.headingLg}>Blog</h2>
			<ul className={uttilStyles.list}>
				{allPostsData.map(({id,date,title})=>(
					<li className={uttilStyles.listItem} key={id}>
						<Link href={"/posts/[id]"} as={`/posts/${id}`}>
						<a> {title} </a>
						</Link>
						<br />
						<small className={uttilStyles.lightText}>
							<Date dateString={date} />
						</small>
							
					</li>
				))}
			</ul>
		  </section>
	  </Layout>
  )
}

export async function getStaticProps(){
	const allPostsData = getSortedPostsData()
	return {
		props: {allPostsData}
	}
}
