import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()}); //테스트 환경에 생명주기 함수와 함께 enzyme 추가

