 import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

/* column props */
type ColumnProps = {
  title: string;
  links: Array<string>
}

/* footer column func*/
const FooterColumn = ({title, links}: ColumnProps) => (
   <div className="footer_column">
    <h1 className="font-semibold">{title}</h1>
    <ul className="flex flex-col font-normal gap-2">
      {links.map((link) => <Link href={"/"} key={link}>{link}</Link>)}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className=" flex flex-col gap-12 w-full">
         <div className=" flex flex-col items-start">
          <Image
           src="/logo-purple.svg" width={115} height={38} alt="g-wave"
           />
           <p className="text-sm text-start mt-5 font-normal max-w-xs">
              G-Wave is just some trebble clone i developed 
              following a flexibble tutorial.
           </p>
         </div>
         <div className="flex flex-wrap gap-12">
           <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
    
         <div className="flex flex-col flex-1 gap-4">
          {/*hire developers*/}<FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
         
           {/*brands*/}<FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
         </div>

           {/*company*/}<FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

            <div className="flex flex-col flex-1 gap-4">
           {/*directories*/}<FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
          {/**/}<FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
           </div>
           {/*development res*/}<FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
         </div>
      </div>
      <div className="flexBetween footer_copyright">
       <p>
             @2023 <span className="font-bold text-teal-500">G-wave</span> all rights reserved
       </p>
       <p className="text-gray">
         <span className="text-black font-semibold"> 10,389</span> Projects Submitted.
       </p>
      </div>
    </footer>
  )
} 

export default Footer 
