import type { Component } from 'solid-js';
import { Button } from './components/Button.jsx';
import { BiRegularBrain } from 'solid-icons/bi'
import { FiPlus, FiShare2 } from 'solid-icons/fi'


const App: Component = () => {
  return (
    <div class='mt-5 ml-2'>
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
      />
      <Button 
        variant='secondary'
        size='lg'
        text='Share Brain'
        startIcon={<FiShare2 />}
        
      />
    </div>
  );
};

export default App;
