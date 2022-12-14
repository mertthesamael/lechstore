import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./select.scss";
const Select = ({ placeholder, list, onGetSelected, disable}) => {
  const [placeHolder, setPlaceHolder] = useState(placeholder);

  const onSelected = (e) => {
    setPlaceHolder(e.target.innerText);
  };

  useEffect(() => {
    onGetSelected(placeHolder)
  },[placeHolder])

  return (
    <Box  className={"select"} margin="1rem 1rem 1rem 0">
      <Menu>
        <MenuButton
          fontSize="20px"
          color="#C31433"
          border='2px solid #C31433'
          as={Button}
        >
          {placeHolder}
        </MenuButton>
        <MenuList w='1rem'>
          {list?.map((item) => (
            <MenuItem isDisabled={!item.stock} color="#C31433" fontSize="20px" onClick={onSelected}>
              {item.name?item.name:item.size}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Select;
