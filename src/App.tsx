import React from "react";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Input } from "@components/Input";

function App() {
  return (
    <div>
      <div className='App'>
        <Button text={"click me!"}/>
      </div>
      <Text variant={'heading_1'} color={'main'} text ={'hello!'}/>
      <h2>hello!</h2>
      <Avatar variant={'size_L'} text={'AH'}/>
      <br />
      <Badge variant={'comp_position'}/>
      <br />
      <Input 
        type={'password'}
        label={'Enter password'} 
        size={'L'} 
        error={''}
      />
    </div>
  );
}

export default App;
