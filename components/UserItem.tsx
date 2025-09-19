import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "../type/product";

interface UserItemProps {
    user: User;
    isHorizontal?: boolean;
}

export default function UserItem({ user, isHorizontal = false }: UserItemProps) {
    return (
        <View style={[styles.container, isHorizontal && styles.horizontalContainer]}>
            <View style={styles.avatarContainer}>
                {user.avatar ? (
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                ) : (
                    <View style={styles.defaultAvatar}>
                        <Text style={styles.avatarText}>
                            {user.name.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                )}
            </View>
            
            <View style={[styles.infoContainer, isHorizontal && styles.horizontalInfo]}>
                <Text style={styles.name} numberOfLines={isHorizontal ? 1 : 2}>
                    {user.name}
                </Text>
                <Text style={styles.email} numberOfLines={1}>
                    {user.email}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    horizontalContainer: {
        width: 200,
        marginHorizontal: 3,
        marginVertical: 0,
        height: 250,
    },
    avatarContainer: {
        marginRight: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    defaultAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoContainer: {
        flex: 1,
    },
    horizontalInfo: {
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
});