const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#d1d1d1',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    //alignItems: 'flex-start',
    backgroundColor: '#75ffa3',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'space-between',
    height: 44,
    flexDirection: 'row',
    paddingLeft:10,
    paddingBottom:10
  },
  navbarTitle: {
    //alignItems:'',
    color: '#444',
    fontSize: 24,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#75ffa3',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  textinput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
})

module.exports = styles
module.exports.constants = constants;
