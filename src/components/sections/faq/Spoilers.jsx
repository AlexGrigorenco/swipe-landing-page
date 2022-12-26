import Spoiler from "./Spoiler";



const Spoilers = () => {

  const spoilers = [
    {
      id: 1,
      title: 'Make the FAQs easy to find',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repudiandae nisi fugiat sint quod voluptates sequi facilis ipsum consequatur optio iste quae consectetur modi quia placeat odit similique eos magnam quaerat, a eaque reprehenderit exercitationem iure tempore! Odit nulla repellat reiciendis eos vel! Laudantium necessitatibus beatae, odio delectus perspiciatis magnam.',
    },
    {
      id: 2,
      title: 'Keep answers short',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos voluptates maxime cupiditate mollitia nulla pariatur velit ea at. Praesentium tempore neque maiores quaerat laboriosam quod corporis, quia, fugit nemo inventore itaque eligendi in minima!',
    },
    {
      id: 3,
      title: 'Write the FAQ sheet in an actual question-and-answer format',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi adipisci, assumenda obcaecati libero velit quibusdam quia commodi omnis corrupti repellat, possimus ex sapiente repellendus nam molestias! Repellendus beatae sed, placeat nemo dolorem magnam fugiat temporibus perferendis, veniam animi praesentium atque hic ut minus adipisci, quisquam quod at esse velit blanditiis ex aspernatur odio. Facilis ea iste unde animi. Nesciunt, quam.',
    },
    {
      id: 4,
      title: 'Write questions from the point of view of your customer',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis cum eligendi ipsam ullam dolor minus blanditiis numquam cumque dolorem commodi omnis voluptatem quasi, maiores nam. Ducimus illum eius suscipit odio sint, voluptates voluptate, ratione magnam perferendis, ipsam fugiat! Nihil deserunt, tempora quos nemo excepturi corrupti facere dolorum aperiam, illum consectetur, atque delectus eum exercitationem animi? At dolorem ut nemo, voluptatum numquam quaerat quod nulla laudantium fugiat nobis? Placeat, sit quas autem sint aliquid expedita, labore animi iste voluptatibus inventore libero!',
    },
  ]

  return ( 


    <div className="pt-[16vh]">
    {spoilers.map(item => <Spoiler title={item.title} key={item.id} body={item.body}/>)}
    </div>
   );
}
 
export default Spoilers;