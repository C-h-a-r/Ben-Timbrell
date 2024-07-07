import './App.css'

const imageUrls = [
  'https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/431543157_884689213458581_7692877633110917750_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OyvpSjXxFcMQ7kNvgGlymGk&_nc_ht=scontent-lhr6-2.xx&oh=00_AYCEzlcjh-2tvzpDxR4gd7ZOqxP26E23t7x-LWfIHDc_ig&oe=6690708D',
  'https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/432763272_884688356792000_8822187170098598962_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_i0LRcrWSvoQ7kNvgFLUP0Q&_nc_ht=scontent-lhr6-2.xx&oh=00_AYC8LJGaOTjB_KTR2vVTr8ISmrLKPu5CKG2pfzepe1lbyw&oe=66908252',
  'https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/423235996_884688400125329_109558497739097436_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8dxnhnTMf8AQ7kNvgFLVLIJ&_nc_ht=scontent-lhr6-2.xx&oh=00_AYCmlAF1UTG3zWtDCWoG8u_i3Ul-jt4HPyyuyATI6T0zpg&oe=6690709E',
'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/431522103_884684616792374_4697477525911525183_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T_tretl23pAQ7kNvgEXmFue&_nc_ht=scontent-lhr8-1.xx&oh=00_AYDmts4fMPpIvAYiumPdrSVvA3mfaYzxEgdP_BayVfDjcQ&oe=66908951',
  'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/432744889_884684383459064_4933943176033586284_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Nrvz28O2OtkQ7kNvgE1rw_k&_nc_ht=scontent-lhr8-2.xx&oh=00_AYD_R7BOoJOcnzzIwDNpuQQ-7La7a47BNIKmMCNccgGYvw&oe=66906577',
  'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/432671430_884684396792396_6288165301964663803_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tnEuf4GRhh8Q7kNvgEBfXe-&_nc_ht=scontent-lhr6-1.xx&oh=00_AYBLQ6fVt5clvSI2U3jT7KIMSW4Um62VuLbL8ailkMf4Vw&oe=66906CE8',
  'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/174155333_295536572190088_6833337696522163980_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YZ7aBstK0cUQ7kNvgFLos8M&_nc_ht=scontent-lhr8-1.xx&oh=00_AYAneZzXz2elRxiZ4fhS4UowMHV7Ps4bhWOqcHd9hwvpSA&oe=66B22655',
  'https://scontent-lhr6-1.xx.fbcdn.net/v/t1.6435-9/173246607_295536555523423_8675496326386788197_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1oL4c-POd9QQ7kNvgHDqpvX&_nc_ht=scontent-lhr6-1.xx&oh=00_AYBraqSxKRJYGmTQi9Lce_mygEwEqnftbRx23bp-UO4cbw&oe=66B208D1',
  'https://scontent-lhr6-1.xx.fbcdn.net/v/t1.6435-9/173699393_295527682190977_1289298399891952979_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=t1xrG8xLVRQQ7kNvgEK1Ua-&_nc_ht=scontent-lhr6-1.xx&oh=00_AYBpYqayDJIfbQroGyPU0QTj1CtMsUXjIeQbkBnjOwxrkw&oe=66B22238',
  'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/173227667_295527805524298_3147654708617969022_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-1CKNtPlp7oQ7kNvgGX5pUx&_nc_ht=scontent-lhr8-1.xx&oh=00_AYCfSf5uSBfxjqY5IOyqCagNV7_U-k4IPj7iEJzhTLw1Ig&oe=66B1FB46',
  'https://scontent-lhr6-1.xx.fbcdn.net/v/t1.6435-9/155794129_266617291748683_819566594374362195_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KwIlNFWLaWcQ7kNvgFGXQwP&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAgDBGbUNBHC8koweRSHpAapbl_nClPrmSqB8-d_VY3fg&oe=66B243F3',
  'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/155498987_266617301748682_6487994854294569765_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ldlBu_q-HfAQ7kNvgH4TMfS&_nc_ht=scontent-lhr8-1.xx&oh=00_AYAMgavZ6B2uMU6OX5l6ND70lVaDezHxIrFJ7LYi_746aw&oe=66B22E9A',
  'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/155399538_266607978416281_7787465488163613557_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AA5zRXbR4GYQ7kNvgH7Z9k8&_nc_ht=scontent-lhr8-2.xx&oh=00_AYCxf8EYvnleu1bMF96Erp4moWQETF7zopWoEU_g7v9BPw&oe=66B20092',
  'https://scontent-lhr6-2.xx.fbcdn.net/v/t1.6435-9/155338742_266608155082930_7787405061500254312_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AELHhGZhZywQ7kNvgHqx3Cw&_nc_ht=scontent-lhr6-2.xx&oh=00_AYB4dOgd5haqdB6hmW0jJxE_8cv4fxGmEF4cGhLIrjrkeA&oe=66B22EB1',
  'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/155777674_266608005082945_4809750901437044996_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kpTTdTUMImcQ7kNvgHxRHuq&_nc_ht=scontent-lhr8-1.xx&oh=00_AYDxVHMxRhXOv_SZj2c_XnIuz8Ep0H51ArhxBNCCYdiBgA&oe=66B1FF25',
  'https://scontent-lhr6-1.xx.fbcdn.net/v/t1.6435-9/154343303_265590815184664_3999082066017071685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1js__Fvmsu0Q7kNvgEtTNZC&_nc_ht=scontent-lhr6-1.xx&oh=00_AYDMx7p1-cBFyEEp8pFLO73Wa6-NgndJdbaHQGD_XyjE9Q&oe=66B223FB',
  'https://scontent-lhr6-2.xx.fbcdn.net/v/t1.6435-9/154884802_265590888517990_1671285226378426373_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KiIijC-yvH0Q7kNvgFtROJL&_nc_ht=scontent-lhr6-2.xx&oh=00_AYAI__RZadqHvfiVHRVNX2rNlndfHK0JZRoxvxonNOEGhQ&oe=66B24350',
  'https://scontent-lhr6-2.xx.fbcdn.net/v/t1.6435-9/154722962_265590945184651_8883972718580723459_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-sbNfqyDin4Q7kNvgFKCN8q&_nc_ht=scontent-lhr6-2.xx&oh=00_AYAWRFwUvQUMyXHFEpgkAXh7TSbXbriNUGzUXznzhHsihw&oe=66B23191',
  'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/154762103_264978025245943_3515616537298570136_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=d0WZkI1SERkQ7kNvgFtefPX&_nc_ht=scontent-lhr8-1.xx&oh=00_AYCPotFzWH0Tptn4dfLU9f0ZiQRc25tl2swo2xZ0zEJSFQ&oe=66B22DBB'
];

export default function App() {
  return (
    <main>
     <div className='hero'>
       <div className='hero-info'>
       <h1>BEN TIMBRELL</h1>
         <div className='info-spliter'></div>

         <p>
          GAS 
          <span> • </span>
           HEATING
           <span> • </span>
           PLUMBING
         </p>
       </div>
       <div className='hero-car'>
         <img src="/van.svg"/>
       </div>
     </div>
      <div className='book'>
        <h1>BOOK NOW</h1>
        <h2>07812 144330</h2>
      </div>
      <div className='images'>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className='footer'>
        <h3> BEN TIMBRELL</h3>
        <h4> MADE BY <a href="https://char-mu.vercel.app">CHAR</a></h4>
        <div clasName='footer-gas'>
<img src="/gas.png"/>
        </div>
      </div>
    </main>
  )
}
