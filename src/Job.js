import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
    const [open, setOpen] = useState(false)

    return (
        <Card className='mb-3' >
            <Card.Body>
                <div className='d-flex justify-content-between' >
                    <div>
                        <Card.Title>
                            <h2 style={{ fontSize: '16px' }}>{job.title}</h2>
                            <h3 style={{ fontSize: '16px' }} className='text-muted font-weight-light'>{job.company}</h3>
                        </Card.Title>
                        <Card.Subtitle className='text-muted mb-2'>
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant='light' className='mr-2' >{job.type}</Badge>
                        <Badge variant='light' >{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all', fontSize: '16px', marginTop: '6px' }} >
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>
                    </div>
                    <img className='d-none d-md-block' height='50'  alt={job.company} src={job.company_logo} />  
                </div>
            <Card.Text>
                <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant='primary'>
                    { open ? 'Hide Details' : 'View Details' }
                </Button>
            </Card.Text>
            <Collapse in={open} >
                <div className="mt-4" style={{ fontSize: '12px' }}>
                    <ReactMarkdown source={job.description} />
                </div>
            </Collapse>
            </Card.Body>

        </Card>
    )
}
