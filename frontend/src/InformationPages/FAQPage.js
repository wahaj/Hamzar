import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MyNavbar from "./../HomePage/Navbar/mynavbar";
import Footer from "./../HomePage/Footer/BottomBar"
import QuestionQuery from "./QuestionQuery"
import {Container} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <MyNavbar/>

            <div className={classes.root}>
                <Container fixed>
                    <h1>FAQ -</h1> <h2>Frequently Asked Questions</h2>
                </Container>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Question 1 </Typography>
                        <Typography className={classes.secondaryHeading}>Question 1 Text</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                            maximus est, id dignissim quam.

                            i.e question 1 answer
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>Question 2</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Question 2 Text
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                            diam eros in elit. Pellentesque convallis laoreet laoreet.
                            i.e question 2 answer
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Have another question?</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Submit to our board
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <QuestionQuery/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

            <Footer/>
        </div>
    );
}
