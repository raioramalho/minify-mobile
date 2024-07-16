import Drawer from "expo-router/drawer";

export default function CustomDrawer() {
    return (
         <Drawer>
          <Drawer.Screen          
            name="(tabs)"
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="shop"
            options={{
              drawerLabel: "Shop",
              title: "Shop",
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: "Settings",
              title: "Settings",
            }}
          />
        </Drawer> 
    )
}