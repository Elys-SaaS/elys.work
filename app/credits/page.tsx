import React from "react";

const links = [
  '<a href="https://www.flaticon.com/free-animated-icons/device" title="device animated icons">Device animated icons created by Freepik - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-icons/web3" title="web3 icons">Web3 icons created by Roundicons Premium - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/phone" title="phone stickers">Phone stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/computer" title="computer stickers">Computer stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/password" title="password stickers">Password stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/industry" title="industry stickers">Industry stickers created by kerismaker - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/coding" title="coding stickers">Coding stickers created by kerismaker - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/programmer" title="programmer stickers">Programmer stickers created by kerismaker - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/presentation" title="presentation stickers">Presentation stickers created by kerismaker - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-animated-icons/artificial-intelligence" title="artificial intelligence animated icons">Artificial intelligence animated icons created by Freepik - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/puzzle" title="puzzle stickers">Puzzle stickers created by kerismaker - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/storage" title="storage stickers">Storage stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/user-interface" title="user interface stickers">User interface stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/process" title="process stickers">Process stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/responsive-design" title="responsive design stickers">Responsive design stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/password" title="password stickers">Password stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/phone" title="phone stickers">Phone stickers created by inipagistudio - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-icons/affordable" title="affordable icons">Affordable icons created by vectorsmarket15 - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/customer-service" title="customer service stickers">Customer service stickers created by kerismaker - Flaticon</a>',
  '<a href="https://www.flaticon.com/free-stickers/architecture" title="architecture stickers">Architecture stickers created by kerismaker - Flaticon</a>',
];
function NextPage() {
  return (
    <div>
      <div>Credits:</div>
      <div>
        {links.map((link, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: link }} />
        ))}
      </div>
    </div>
  );
}

export default NextPage;
