import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderWithSearch from '../../../Componentes/HeaderWithSearch/HeaderWithSearch';
import styles from '../../../Styles/styles'; // Certifique-se de que este caminho está correto e de que os estilos necessários estão neste arquivo

type RootStackParamList = {
  detalhesAlbum: undefined;
  index: undefined;
  loginCadastro: undefined;
};

type User = {
  usuario: string;
  nome: string;
  email: string;
  imagem: string;
  likes: string[];
};

type Album = {
  id: string;
  nomeAlbum: string;
  nomeArtista: string;
  foto: string;
};

export default function LoginCadastro() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [favoriteAlbums, setFavoriteAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData && userData.usuario) {
            setUser(userData);
            fetchFavoriteAlbums(userData.likes);
          } else {
            handleLogout();
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const fetchFavoriteAlbums = async (albumIds: string[]) => {
    if (!albumIds || albumIds.length === 0) return;
    try {
      setLoading(true);
      const albumDetailsPromises = albumIds.map((albumId) =>
        axios.get(`https://spotifyapi-hct0.onrender.com/albums/${albumId}`).then((response) => {
          const albumData = response.data;
          return {
            id: albumData.id,
            nomeAlbum: albumData.name,
            nomeArtista: albumData.artists[0].name,
            foto: albumData.images[0]?.url || '',
          };
        })
      );

      const albumDetails = await Promise.all(albumDetailsPromises);
      setFavoriteAlbums(albumDetails);
    } catch (error) {
      console.error('Erro ao buscar álbuns favoritos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Erro no login', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    try {
      setLoading(true);
      const loginResponse = await axios.post('https://spotifyapi-hct0.onrender.com/login/', {
        usuario: username.trim(),
        senha: password.trim(),
      });

      if (loginResponse.status === 200 && loginResponse.data.success) {
        const userResponse = await axios.get(`https://spotifyapi-hct0.onrender.com/users/${username.trim()}`);
        if (userResponse.status === 200) {
          const userData = userResponse.data;
          await AsyncStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          fetchFavoriteAlbums(userData.likes);
          Alert.alert('Login bem-sucedido', 'Você está logado!');
          navigation.navigate('index');
        } else {
          Alert.alert('Erro no login', 'Não foi possível obter os dados do usuário.');
        }
      } else {
        Alert.alert('Erro no login', 'Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro no login', 'Erro ao tentar fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  const handleCadastro = async () => {
    if (!username || !fullName || !email || !password) {
      Alert.alert('Erro no cadastro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('https://spotifyapi-hct0.onrender.com/users/', {
        usuario: username.trim(),
        nome: fullName.trim(),
        email: email.trim(),
        senha: password.trim(),
        imagem: 'default_image_url', // Pode usar um valor padrão
        likes: [],
      });

      if (response.status === 201 || response.status === 200) {
        Alert.alert('Cadastro bem-sucedido', 'Sua conta foi criada com sucesso!');
        setIsLogin(true);
      } else {
        Alert.alert('Erro no cadastro', 'Houve um problema ao tentar criar a sua conta. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      Alert.alert('Erro no cadastro', 'Não foi possível realizar o cadastro. Verifique suas informações.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      setUsername('');
      setFullName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loginContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ ...styles.loginTitle, marginTop: 20 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', zIndex: 1 }}>
        <HeaderWithSearch
          searchQuery={searchQuery}
          onSearchChange={(text) => setSearchQuery(text)}
          onSearchSubmit={() => console.log('Buscando:', searchQuery)}
        />
      </View>
      <View style={[styles.loginContainer, { paddingHorizontal: 0, flex: 1 }]}>
        {user ? (
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={styles.loginTitle}>Bem-vindo, {user.nome}!</Text>
            <Text style={styles.inputLabel}>Usuário: {user.usuario}</Text>
            <Text style={styles.inputLabel}>Email: {user.email}</Text>
            <TouchableOpacity style={[styles.loginButton, { marginTop: 20 }]} onPress={handleLogout}>
              <Text style={styles.loginButtonText}>Logout</Text>
            </TouchableOpacity>
            <Text style={[styles.loginTitle, { marginTop: 30 }]}>Seus álbuns favoritos</Text>
            {favoriteAlbums.length > 0 ? (
              <FlatList
                data={favoriteAlbums}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.favoriteAlbumContainer}>
                    <Image source={{ uri: item.foto }} style={styles.favoriteAlbumImage} />
                    <View style={styles.favoriteAlbumDetails}>
                      <Text style={styles.albumName}>{item.nomeAlbum}</Text>
                      <Text style={styles.artist}>{item.nomeArtista}</Text>
                    </View>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.inputLabel}>Nenhum álbum favoritado.</Text>
            )}
          </View>
        ) : (
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.loginTitle}>{isLogin ? 'Login' : 'Cadastro'}</Text>
            <Text style={styles.inputLabel}>Nome de usuário</Text>
            <TextInput
              style={styles.loginInput}
              placeholder="Nome de usuário"
              value={username}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize="none"
              placeholderTextColor="#777"
            />
            {!isLogin && (
              <>
                <Text style={styles.inputLabel}>Nome completo</Text>
                <TextInput
                  style={styles.loginInput}
                  placeholder="Nome completo"
                  value={fullName}
                  onChangeText={(text) => setFullName(text)}
                  autoCapitalize="words"
                  placeholderTextColor="#777"
                />
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.loginInput}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#777"
                />
              </>
            )}
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.loginInput}
              placeholder="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholderTextColor="#777"
            />
            <TouchableOpacity style={styles.loginButton} onPress={isLogin ? handleLogin : handleCadastro}>
              <Text style={styles.loginButtonText}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 15 }}>
              <Text style={styles.loginToggleText}>
                {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
