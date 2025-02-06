import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    FlatList
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import io from "socket.io-client";
import config from '../.config.json';

const bikeIcon = require("../assets/scoubit.png");
const SERVER_URL = config.SERVER_URL|| "http://localhost:3000";

const socket = io(SERVER_URL);

export default function Tracker() {
    const [livreurs, setLivreurs] = useState<{ id: string; name: string; latitude: number; longitude: number }[]>([]);
    const [selectedLivreurId, setSelectedLivreurId] = useState<string>("Tous");
    const [selectedLivreurName, setSelectedLivreurName] = useState<string>("Tous les livreurs");
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        socket.on("positionUpdate", (data) => {
            console.log("📡 Nouvelle position reçue :", data);

            setLivreurs((prevLivreurs) => {
                const newLivreurs = prevLivreurs.filter((l) => l.id !== data.livreur_id);
                return [...newLivreurs, { id: data.livreur_id, name: data.livreur_name, latitude: data.latitude, longitude: data.longitude }];
            });
        });

        return () => {
            socket.off("positionUpdate");
        };
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.selectButton}>
                <Text style={styles.selectText}>{selectedLivreurName}</Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Sélectionner un livreur</Text>
                        <FlatList
                            data={[{ id: "Tous", name: "Tous les livreurs" }, ...livreurs]}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.livreurItem}
                                    onPress={() => {
                                        setSelectedLivreurId(item.id);
                                        setSelectedLivreurName(item.name);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.livreurText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 50.6365,
                    longitude: 3.0635,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                {livreurs
                    .filter((livreur) => selectedLivreurId === "Tous" || livreur.id === selectedLivreurId)
                    .map((livreur) => (
                        <Marker
                            key={livreur.id}
                            coordinate={{ latitude: livreur.latitude, longitude: livreur.longitude }}
                            title={`Livreur ${livreur.name}`}
                        >
                            <Image source={bikeIcon} style={{ width: 40, height: 40 }} />
                        </Marker>
                    ))}
            </MapView>
            <Text style={styles.text}>📍 Suivi en temps réel</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: "100%", height: "80%" },
    selectButton: {
        backgroundColor: "#007BFF",
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    },
    selectText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    livreurItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    livreurText: {
        fontSize: 16,
        textAlign: "center",
    },
    text: {
        position: "absolute",
        bottom: 20,
        left: 20,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
    },
});
