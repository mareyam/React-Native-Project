import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import HomeScreen from "./src/Screens/HomeScreen";
// import Home1 from "./src/Screens/Home1";
// import ImageScreen from "./src/Screens/ImageScreen";
// import CounterScreen from "./src/Screens/CounterScreen";
// import AssignmentCounter from "./src/Screens/CounterAssignment";
// import LabAssignment from "./src/Screens/Assignmentlab";
// import SquareScreen from "./src/Screens/SquareScreen";
// import SearchScreen from "./src/Screens/SearchScreen";
// import PracticeScreen from "./src/Screens/PracticeScreen";
// import CrudScreen from "./src/Screens/CrudScreen";
// import CalculatorScreen from "./src/Screens/CalculatorScreen"
// import Images from "./src/Screens/Images"
// import ImagePractice from "./src/Screens/ImagePractice"
// import Design from "./src/Screens/Design"
// import ProjectApp from "./project/components/ProjectApp"
// import WeatherApp from "./component/WeatherApp";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from './src/Screens/HomeScreen';
import MainScreen from "./screens/MainScreen";
import Home from "./project/screens/Home";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    LoginScreen:LoginScreen,
    MainScreen: MainScreen,
    Home: Home,
    // FLat: Home1,
    // Image: ImageScreen,
    // Counter: CounterScreen,
    // Assignment: AssignmentCounter,
    // Lab: LabAssignment,
    // Sqaure: SquareScreen,
    // SearchScreen: SearchScreen,
    // Practice:PracticeScreen,
    // Crud:CrudScreen,
    // Images: Images,
    // ImagePractice: ImagePractice,
    // Design:Design,
    // ProjectApp: ProjectApp,
    // WeatherApp:WeatherApp,
  },
  {
    initialRouteName: "Home",
  }
);
export default createAppContainer(navigator);
