import * as React from 'react';
import {Checkbox, FormControlLabel} from '@mui/material/Checkbox';

const CategoryCheckbox = ({category}) => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (<FormControlLabel disabled control={<Checkbox
        checked={checked}
        onChange={handleChange}
      />} label={category} />)
  }
  
  export default CategoryCheckbox;