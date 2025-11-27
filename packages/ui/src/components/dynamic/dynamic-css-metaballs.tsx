import dynamic from "next/dynamic";

const DynamicCssMetaballs = dynamic(()=> import('../reactbits/css-metaballs/CSSMetaBalls'), {
    ssr: false,
    loading: ()=> <div className="w-20 h-20">  </div>
})
