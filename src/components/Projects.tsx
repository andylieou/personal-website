import React from 'react';
import Placeholder from "./Placeholder";
import TypingAnimation from './TypingAnimation';

function Projects() {
    return (<>
        <div className = "Header">
        <TypingAnimation write = "Projects"/>
        </div>
        <div className="Projects">
          <Placeholder
            title="System Emulator"
            text="A C-based instruction processor that used a pipelining approach with a two-level memory hierarchy to simulate the role of the CPU."
            keys="C, Elf Executables, Arm64 Assembly"
            link="https://cms-media.bartleby.com/wp-content/uploads/sites/2/2021/12/23095544/image-184-861x1024.png"
            image="https://cms-media.bartleby.com/wp-content/uploads/sites/2/2021/12/23095544/image-184-861x1024.png"
            color="#ffffff"
          />
          <Placeholder
            title="SeedWise"
            text="A Swift-based application that informed users about the ideal crops to grow based on the geographical characteristics of their location."
            keys="Hackathon Winner, Swift, Firebase"
            link="https://www.behance.net/gallery/166194241/SeedWise"
            image="	https://jeffreybennet.com/images/work-2.png"
            color="#F7FAC4"
          />
          <Placeholder
            title="Huffman"
            text="An implementation of the Huffman Encoding scheme used to compress files. Capable of decoding and encoding files using the Huffman scheme."
            keys="Java, PriorityQueues, BinaryTrees"
            link="https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/"
            image="https://www.techiedelight.com/wp-content/uploads/2016/11/Huffman-Coding-6.png"
            color="#ffffff"
          />
          <Placeholder
            title="Evil Hangman"
            text="An evil implementation of Hangman that delayed selecting a word by eliminating possible words based on a user's guesses (if a user guessed 'e', all words that had an 'e' were eliminated)."
            keys="Java, TreeMaps, HashMaps, Sets"
            link="http://nifty.stanford.edu/2011/schwarz-evil-hangman/"
            image="https://uipath.com/cdn-cgi/image/format=auto/https://marketplace-cdn.uipath.com/images/user_images/3773fd1a-feed-45c5-a222-51f7cd3e091b.png"
            color="#DFDBD2"
          />
          <Placeholder
            title="Memory Allocator"
            text="An implementation of the C methods malloc() and free() from scratch."
            keys="C, LinkedLists"
            link="https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/"
            image="https://www.researchgate.net/publication/280056684/figure/fig3/AS:376707094728706@1466825378246/Memory-array-architecture.png"
            color="#ffffff"
          />
          <Placeholder
            title="Trello Recreation"
            text="A recreation of the website Trello with the key features, including creating boards, adding/deleting cards, and moving cards between boards."
            keys="HTML, Javascript, CSS"
            link="https://trello.com"
            image="https://pbs.twimg.com/profile_images/1361722806694785027/UY7DlO0a_400x400.png"
            color="#2684FF"
          />
          <Placeholder
            title="Space Invaders"
            text="A recreation of the game Space Invaders that allowed the user to shoot aliens while avoiding returning shots."
            keys="Java, Java Graphics"
            link="https://freeinvaders.org"
            image="https://static-00.iconduck.com/assets.00/space-invaders-icon-512x372-46o8vpqz.png"
            color="#7784FF"
          />
          <Placeholder
            title="Robotics"
            text="Competed in BEST Robotics competitions with rebuilding robots that simulated the process of reconstructing cities after natural disasters."
            keys="4th Place, RobotC, Infrared Scanners, Servomotors, Marketing"
            link="https://research.utdallas.edu/blog/2019-best-robotics-competition"
            image="https://www.bestrobotics.org/site/flash/BESTRobotics_Logo.jpg"
            color="#ffffff"
          />
          <Placeholder
            title="Personal Website"
            text="This self-made website houses key information about myself and my past work."
            keys="TypeScript, React.js, HTML, CSS"
            link="https://github.com/andylieou/personal-website"
            image="https://static.vecteezy.com/system/resources/thumbnails/021/958/059/small/simple-computer-laptop-isolated-png.png"
            color="#ffffff"
          />
        </div>
        <p className = "AddText"> For more technical descriptions of the projects listed above, please contact me directly using the links at the bottom of this page. </p>
    </>);
}

export default Projects;