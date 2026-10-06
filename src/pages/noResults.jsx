import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

function NoResults() {
  const navigate = useNavigate()

  return (
    <div>
      <Button variant="transparent" onClick={() => navigate(-1)} className="mb-4 mr-2">
        <ArrowLeftIcon aria-hidden="true"/>
      </Button>
      No results found.
    </div>
  )
}

export default NoResults