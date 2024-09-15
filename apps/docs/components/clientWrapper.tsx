"use client"

import { Button } from '@repo/ui/button';
import React from 'react'
import { add } from "@repo/utility";

const ClientWrapper = () => {
  return (
    <div>
         <Button onClick={() => console.log(add(1, 2))}>Hello</Button>
    </div>
  )
}

export default ClientWrapper