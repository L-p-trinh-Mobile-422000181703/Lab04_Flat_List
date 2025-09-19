import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import UserItem from "../components/UserItem";
import { userAPI } from "../database/product";
import { User } from "../type/product";

export default function UserListScreen() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(userAPI);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            Alert.alert('Error', 'Failed to load users');
        } finally {
            setLoading(false);
        }
    };

    const toggleLayout = () => {
        setIsHorizontal(!isHorizontal);
    };

    const renderUserItem = ({ item }: { item: User }) => (
        <UserItem user={item} isHorizontal={isHorizontal} />
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Đang tải danh sách người dùng...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Danh sách người dùng ({users.length})
                </Text>
                <TouchableOpacity 
                    style={styles.toggleButton} 
                    onPress={toggleLayout}
                >
                    <Text style={styles.toggleButtonText}>
                        {isHorizontal ? 'Vertical List' : 'Horizontal List'}
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={users}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id}
                horizontal={isHorizontal}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={isHorizontal ? styles.horizontalContent : styles.verticalContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    toggleButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    toggleButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    verticalContent: {
        paddingBottom: 20,
    },
    horizontalContent: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
});