// @ts-nocheck

// CSS import
import "./CustomDataGrid.css";

// MUI imports
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter, GridToolbarDensitySelector } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

// React/React-router/React-redux import
import { useSelector } from "react-redux"; 
import { useState } from "react";

/**
 * Custom DataGrid (from MUI) displaying employees list.
 * Functionalities : Sort by asc/desc, filter by field or with search input, adjustable row density, adjustable pagination and rows per page
 * @returns JSX Code for the Datagrid
 */
export default function CustomDataGrid(){
    const employeesList = useSelector((state) => state.hrnet.employeesList);
    const [pageSize, setPageSize] = useState(5);
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState('');

    // Popup displayed on datagrid cell hover
    const handlePopoverOpen = (event) => {
        const field = event.currentTarget.dataset.field;
        const id = parseInt(event.currentTarget.parentElement.dataset.id);
        const row = employeesList.find((r) => r.id === id);
        setValue(row[field]);
        setAnchorEl(event.currentTarget);
    };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    // Grid columns definition
    const columns = [
        { field: 'id', hide: true },
        { field: 'firstName', headerName: 'First Name'},
        { field: 'lastName', headerName: 'Last Name'},
        { field: 'startDate', headerName: 'Start Date'},
        { field: 'department', headerName: 'Department'},
        { field: 'dateOfBirth', headerName: 'Date Of Birth'},
        { field: 'street', headerName: 'Street'},
        { field: 'city', headerName: 'City'},
        { field: 'state', headerName: 'State' },
        { field: 'zipCode', headerName: 'Zip Code'}
    ];

    // Properties for columns (except hidden Id column)
    for (const column of columns) {
        if (column.field !== "id") {
            column.headerAlign = "center";
            column.align = "center";
            column.headerClassName = "datagridHeader";
            switch (column.field) {
                case "firstName":
                case "lastName":
                    column.flex = 1.4;
                    break;
                case "startDate":
                case "dateOfBirth":
                    column.flex = 0.8;
                    break;
                case "street":
                    column.flex = 1.6;
                    break;
                case "state":
                    column.flex = 0.45;
                    break;
                case "zipCode":
                    column.flex = 0.55;
                    break;
                default:
                    column.flex = 1;
                    break;
            }
        } 
    }

    /**
     * Toolbar containing only useful components (search input and filters button)
     * @returns JSX components for the datagrid toolbar
     */
    function CustomToolBar(){
        return(
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector/>
            </GridToolbarContainer>
        );        
    };

    /**
     * Customized box returned on datagrid when no data are available
     * @returns Custom box component for the datagrid
     */
    function CustomNoRowsOverlay(){
        return <Box className="noDataContent bold">No data available yet</Box>;        
    };    

    /**
     * Custom descending sort icon
     * @returns Custom Icon for the datagrid header columns
     */
    function SortedDescendingIcon() {
        return <ExpandMoreIcon style={{color:"#FFFFFF"}}/>;
    }
      
    /**
     * Custom ascending sort icon
     * @returns Custom Icon for the datagrid header columns
     */
    function SortedAscendingIcon() {
        return <ExpandLessIcon style={{color:"#FFFFFF"}}/>;
    }

    /**
     * Custom menu icon
     * @returns Custom Icon for the datagrid header columns
     */
    function MenuIcon() {
        return <MoreVertIcon style={{color:"#FFFFFF"}}/>;
    }

    return (
        <div className="datagridContainer">
            <DataGrid 
                disableColumnSelector
                disableSelectionOnClick
                autoHeight 
                rows={employeesList} 
                columns={columns}
                components={{
                    Toolbar: CustomToolBar,
                    NoRowsOverlay: CustomNoRowsOverlay,        
                    ColumnSortedDescendingIcon: SortedDescendingIcon,
                    ColumnSortedAscendingIcon: SortedAscendingIcon,   
                    ColumnMenuIcon: MenuIcon,
                }}
                componentsProps={{
                    cell: {
                      onMouseEnter: handlePopoverOpen,
                      onMouseLeave: handlePopoverClose,
                    },
                }}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 25]}
                pageSize={pageSize}
            />
            <Popover
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{`${value}`}</Typography>
            </Popover>
        </div>
    );
};