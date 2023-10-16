import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostDetails = styled.View`
  justify-content: center;
`;
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          source={{
            uri: "https://avatars.cloudflare.steamstatic.com/d956bc4013e234d687e01e910297bd80cde68345_full.jpg",
          }}
        />
        <PostDetails>
          <PostTitle>Test article</PostTitle>
          <PostDate>16/10/2023</PostDate>
        </PostDetails>
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}
