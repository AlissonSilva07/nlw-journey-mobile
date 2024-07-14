import { Text, View } from "react-native";


export function Details({ tripId }: { tripId: string }) {
    return (
        <View>
            <Text className="flex-1">{tripId}</Text>
        </View>
    )
}