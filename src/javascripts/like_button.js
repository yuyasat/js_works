// cf: http://c16e.com/1510161700/
import React from 'react';
import ReactDom from 'react-dom';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false, // コンポーネントにカーソルが乗っているかどうかを保持
      count: 999, // カウンタ数を保持
      liked: false // いいねを押したかどうかを保持
    }
    // ES6の場合は、bindする cf: https://qiita.com/cubdesign/items/ee8bff7073ebe1979936
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },
      like: {
        display: 'inline-block',
        background: '#3b5998',
        padding: '0px 5px',
        borderRadius: 2,
        color: '#ffffff',
        float: 'left',
        height: 20,
        lineHeight: '20px',
      },
      likeHover: {
        background: '#444',
        cursor: 'pointer'
      },
      counterBefore: {
        display: 'block',
        float: 'left',
        width: 6,
        height: 6,
        background: '#fafafa',
        marginLeft: '-12px',
        borderRight: 10,
        transform: 'rotate(45deg)',
        WebkitTransform: 'route(45deg)',
        marginTop: 6,
        borderLeft: '1px solid #aaa',
        borderBottom: '1px solid #aaa'
      },
      counter: {
        display: 'block',
        background: '#fafafa',
        boxSizing: 'border-box',
        border: '1px solid #aaa',
        float: 'left',
        padding: '0px 8px',
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: '20px'
      }
    };
  }

  // カーソルが乗ったときに状態を変更するイベントハンドラ
  onMouseEnter() {
    this.setState({ hovered: true });
  }

  // カーソルが外れたときに状態を変更するイベントハンドラ
  onMouseLeave() {
    this.setState({ hovered: false });
  }

  // クリックしたときのイベントハンドラ
  onClick() {
    this.setState({
      count: this.state.count + (this.state.liked ? -1 : 1),
      liked: !this.state.liked
    });
  }

  render() {
    const styles = this.styles();
    // ES7
    // const likeStyle = this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;
    const likeStyle =
      this.state.hovered ? Object.assign(styles.like, styles.likeHover) : styles.like;

    return(
      <span style={styles.container}>
        <span
          style={styles.like}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}>いいね!</span>
        <span style={styles.counter}>
          <span style={styles.counterBefore}>{' '}</span>
          {this.state.count}
        </span>
      </span>
    );
  }
}

ReactDom.render(
  <LikeButton />,
  document.getElementById("like-button")
);
