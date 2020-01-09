import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default class RepositoryWebView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    return (
      <WebView
        source={{ uri: repository.html_url }}
        style={{ marginTop: 20, flex: 1 }}
      />
    );
  }
}
