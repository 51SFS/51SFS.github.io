import form from '../data/forms.json'
import info from '../data/info.json'
import training from '../data/training.json'
import contact from '../data/contact.json'
import { Stack, Grid } from '@mui/material'
import './Homepage.css'
import Item from '../Item/Item'

export default function Homepage(props) {
    let {
        sections
    } = props

    if (!sections) sections = [info, training, form, contact]

    return (
        <Grid container spacing={1} justifyContent="center">
            <Grid item>
                <Stack className='homepage'>
                    {
                        sections.map(section => (
                            <Item
                                key={section}
                                name={section.name}
                                description={section.description}
                                email={section.email}
                                documents={section.documents}
                                links={section.link}
                            />
                        ))
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}