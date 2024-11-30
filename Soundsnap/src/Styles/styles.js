import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d4cdc5'
    },
    TituloDefault:{
      fontSize: 30,
      color: '#191013'
    },
    ImagemLogo:{
      width: 80,
      height: 80,
      paddingTop: 'auto',
      paddingLeft: 0
    },
    header:{
      backgroundColor: '#191013',
      height:110,
      width:'auto',
      paddingTop: 20,
      paddingLeft: 0,
      flexDirection:'row',
      alignItems:'center',
      
    },
    inputHeader:{
      color:'#191013',
      backgroundColor:'#d4cdc5',
      borderRadius:20,
      height:30,
      width:270,
      textAlign:'center',
      paddingTop:'auto',
      textAlignVertical:'auto'
    },
    ImagemUser:{
      width: 50,
      height: 50,
      paddingTop: 'auto',
      paddingLeft: 'auto',
      backgroundColor:'#d4cdc5',
      borderRadius:25,

    },
    card: {
      width: 350,
      height: 350,
      backgroundColor: '#191013',
      borderRadius: 20,
      elevation: 5, // Para Android
      shadowColor: '#000', // Para iOS
      shadowOffset: { width: 0, height: 2 }, // Para iOS
      shadowOpacity: 0.1, // Para iOS
      shadowRadius: 4, // Para iOS
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginVertical: 20
  },
  cardText: {
      fontSize: 18,
      color: '#d4cdc5',
      fontWeight:"bold",
      padding:5,
      
  },
  image:{
      width:200,
      height:200,
      objectFit:"contain",
      resizeMode:"contain",
      borderRadius: 15,
  },
  albumContainer: {
    backgroundColor: '#d4cdc5',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center'
  },
  albumImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    padding: 10,
  },
  albumName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#d4cdc5',
  },
  artist: {
    fontSize: 14,
    color: '#d4cdc5',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    fontSize: 14,
  },
  favorite: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteText: {
    fontSize: 14,
    color: '#ff7f50',
  },

  albumDetailsContainer: {
    backgroundColor: '#d4cdc5',
    margin: 16,
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center'
  },

  trackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d4cdc5', // uma cor mais suave para a borda
  },
  track: {
    fontSize: 16,
    color: '#d4cdc5',
    flex: 1,
    marginRight: 8, // adicionando espaço entre o nome da música e a duração
  },
  trackDuration: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right', // garante que a duração esteja sempre alinhada à direita
  },
  albumDetailsContainer: {
    backgroundColor: '#191013',
    margin: 16,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // para Android, adiciona uma sombra suave
  },
  albumImage: {
    width: 150, // reduzindo o tamanho para caber melhor na tela
    height: 150,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    backgroundColor: '#191013',
    height: 110,
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // garante espaçamento igual entre elementos
  },
  inputHeader: {
    color: '#191013',
    backgroundColor: '#d4cdc5',
    borderRadius: 20,
    height: 40,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 8, // espaço entre o input e os ícones
    paddingHorizontal: 10,
  },

  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d4cdc5',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#191013',
  },
  loginInput: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#191013',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#d4cdc5',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginToggleText: {
    color: '#191013',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#191013',
    marginBottom: 8,
  },

  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    padding: 5,
  },
  
  favoriteAlbum: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
  },

  favoriteAlbumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  
  favoriteAlbumImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  
  favoriteAlbumDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  
  
  
  });
  
export default styles;
