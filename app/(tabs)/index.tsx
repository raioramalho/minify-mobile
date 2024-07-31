import React from "react";
import { View, Button } from "react-native";

export interface UrlProps {
  url: string;
  date: string;
}

export default function Dashboard() {
  return (
    <View className="flex flex-col items-center justify-center m-2 p-2">     

    <View className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Button title="Clique aqui"/>
    </View>

    </View>
  );
}
