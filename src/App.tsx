import { createSignal, type Component } from 'solid-js';
import { Button } from './components/Button.jsx';
import { BiRegularBrain } from 'solid-icons/bi'
import { FiPlus, FiShare2 } from 'solid-icons/fi'
import Logo from './components/Logo.jsx';
import { TbBrain } from 'solid-icons/tb';
import Card from './components/Card.jsx';
import UniversalEmbed from './components/Embed.jsx';
import AddContentPop from './components/AddContentPop.jsx';



const App: Component = () => {

  const [modalOpen, setModalOpen] = createSignal<boolean>(true)

  const togglePopup = () => setModalOpen((prev) => !prev)
  
  //console.log(togglePopup())
  return (

  <>    
  <AddContentPop isOpen={modalOpen()} onClose={togglePopup} />

    <div class='pt-5 pl-2'>
      <Button 
        variant='secondary'
        size='sm'
        text='Second Brain'
        startIcon={<BiRegularBrain />}
      />
      <Button 
        variant='primary'
        size='md'
        text='Add Content'
        startIcon={<FiPlus />}
        onClick={togglePopup}
      />

      <Button 
        variant='secondary'
        size='lg'
        text='Share Brain'
        startIcon={<FiShare2 />}
      />

      <Logo 
        icon={<TbBrain />}
        text="Second Brain"
      />

      <div class='flex w-full justify-evenly'>
      <Card title="Project Ideas" mediaIcon={<BiRegularBrain/>} />
      <Card title="Project Ideas" mediaIcon={<BiRegularBrain/>} />
      <Card title="Project Ideas" mediaIcon={<BiRegularBrain/>} />
      <Card title="Project Ideas" mediaIcon={<BiRegularBrain/>} />
      
      </div>
    </div>
    </>
  );
};

export default App;
