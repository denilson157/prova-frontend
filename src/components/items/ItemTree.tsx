import { FC, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IItemTree } from '../../interfaces/iItemTree';
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';



const useStyles = makeStyles((theme) => ({
    ul: {
        listStyleType: 'none'
    },
    containerCheckbox: {
        display: 'flex',
        alignItems: 'center'
    },
    separed: {
        flexGrow: 1
    },
    label: {
        fontSize: '16px'
    },
    li: {
        backgroundColor: 'white',
        borderRadius: "4px",
        '&:hover': {
            backgroundColor: "#0000000d",
        },
        cursor: 'pointer'
    }

}));

const Items: FC<IItemTree> = ({ item, handleSelect }) => {

    const [openTree, setOpenTree] = useState(false)

    const classes = useStyles();

    const otherItems = (item.children || []).map(x =>
        <Items
            item={x}
            key={x.name}
            handleSelect={handleSelect}
        />
    )

    const Icon = () =>
        openTree ?
            <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />

    const toggleIcon = (event: any) => {
        if (['DIV', 'svg', 'LABEL'].includes(event.target.nodeName))
            setOpenTree(!openTree)
    }

    return (
        <li className={classes.li} key={item.name}>
            <div className={classes.containerCheckbox} onClick={toggleIcon}>
                <Checkbox
                    checked={item.checked}
                    onChange={(e) => handleSelect(e.target.checked, item.id, item.level)}
                    name={item.name}
                    id={item.name}
                    indeterminate={item.indeterminate}
                />
                <label className={classes.label}>{item.name}</label>
                <div className={classes.separed} />
                {
                    otherItems.length > 0 &&
                    <Icon />
                }
            </div>
            {
                otherItems.length > 0 && openTree &&
                <ul className={classes.ul}>
                    {otherItems}
                </ul>
            }
        </li >
    )
}

export default Items;