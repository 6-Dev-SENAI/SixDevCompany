import React from "react";
import { Text, Image } from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import Styles from "./styles";

const User = require('../../assets/images/user.png');

export default function DropDownButton(props) {
    return (
        <MenuProvider style={Styles.menuProvider}>
            <Menu style={Styles.menu} onSelect={value => alert(`You Clicked : ${value}`)}>

                <MenuTrigger>
                    {/* <Text style={Styles.headerText}>(IMG)</Text> */}
                    <Image source={User} style={Styles.img} />
                </MenuTrigger>

                <MenuOptions style={Styles.menuOptions}>
                    {/* Map options, adding a key to each child generated; the key is basically the value of the option converted to string */}
                    {props.properties.map((property) =>
                        <MenuOption value={property.route} key={property.option.toString()}>
                            <Text style={Styles.menuContent}>{property.option}</Text>
                        </MenuOption>
                    )}
                </MenuOptions>

            </Menu>
        </MenuProvider>
    );
}

/* Usage:
const menuProperties = [
  {
    option: 'Option 1',
    route: 'Route 1'
  },
  {
    option: 'Option 2',
    route: 'Route 2'
  },
  {
    option: 'Option 3',
    route: 'Route 3'
  }
]

    <DropDownButton properties={menuProperties} />
*/