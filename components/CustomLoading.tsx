import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomLoadingProps {
  size?: number;
  color?: string;
}

export default function CustomLoading({ size, color }: CustomLoadingProps) {
  return (
    // <FontAwesome
    //   className="animate-spin flex flex-col justify-center items-center"
    //   size={size || 24}
    //   name="spinner"
    //   color={color || "slategray"}
    // />
    <Icon name="sync" className="animate-spin flex flex-col justify-center items-center" size={24} color={"#000"} />
  );
}
