import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CustomLoading from "../../components/CustomLoading";

export interface UrlProps {
  url: string;
  date: string;
}

export default function Dashboard() {
  let [formData, setFormData] = React.useState<UrlProps>({
    url: "",
    date: "",
  });
  let [loading, setLoading] = React.useState(false);

  async function handleMinify() {
    console.log(formData);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    Alert.alert("Titulo", formData.url);
    setLoading(false);
  }

  return (
    <View className="flex flex-col items-center justify-center p-2">
      <View className="flex flex-row items-center justify-center p-2 shadow-black mt-5">
        <Text className="text-4xl dark:text-white">Minify App</Text>
      </View>

      <View className="flex flex-col justify-center items-center p-2 w-full gap-2">
        <TextInput
          placeholder="Digite seu link"
          className="border rounded-md p-2 w-[20rem] h-[3rem]"
          value={formData.url}
          onChangeText={(text) =>
            setFormData({ date: Date.now().toString(), url: text })
          }
        />
        <View className="border border-slate-600 rounded-lg w-[20rem] h-[4rem] flex flex-row items-center justify-center p-2">
          <Button color={"auto"} title="Minify!" onPress={handleMinify} />

          {loading ? (
            <>
              <CustomLoading/>
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
}
