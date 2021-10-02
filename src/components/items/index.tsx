import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { IDataItem } from '../../interfaces/iData';
import ItemTree from './ItemTree'
import * as DataService from '../../service/dataService'
import { handle_select_items } from './ItemFunctions';
import { setTimeout } from 'timers';

const useStyles = makeStyles((theme) => ({
    ul: {
        listStyleType: 'none',
        paddingLeft: '0px'
    },
    button: {
        marginRight: theme.spacing(2)
    },
    typography: {
        color: "green"
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(2)
    }
}));

const Items = () => {

    const [list, setList] = useState<IDataItem[]>([]);
    const [savelist, setSavelist] = useState<string>();

    const classes = useStyles();

    const handleSelect = (checked: boolean, id: string, level: number) => {
        const itemsSelected = handle_select_items(list, checked, id, level);

        setList(itemsSelected);
    }


    useEffect(() => {

        const items = DataService.get_items();

        setList(items)

    }, [])

    const saveListHandle = () => {
        setSavelist("Lista Salva");

        DataService.save_items(list);

        setTimeout(() => {
            setSavelist(undefined);
        }, 800)
    }

    const SaveListButton = (): JSX.Element =>
        <Box className={classes.box}>
            <Button variant="contained" color="primary" className={classes.button} onClick={saveListHandle}>
                Salvar seleções
            </Button>
            {
                savelist &&
                <Typography className={classes.typography} variant="h6">
                    {savelist}
                </Typography>
            }
        </Box>

    return (
        <>
            <SaveListButton />
            <ul className={classes.ul}>
                {
                    list.map((x) =>
                        <ItemTree handleSelect={handleSelect} key={x.name} item={x} />
                    )
                }
            </ul>
        </>
    )
}

export default Items;