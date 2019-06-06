const drawerWidth = 180;

export default theme => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        width: "100%"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    progressBar: {
    }
});