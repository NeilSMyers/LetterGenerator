import React, { Component } from 'react';

class LetterContent extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className={data.completedForm ? 'showContent' : 'hideContent'}>
        <div className="content-wrapper">
          Hello, <b>{data.name}</b>. It's so great to hear from you! Thank you for telling me what you would like for Christmas, it makes it a lot easier to get my bag packed! We actually have a surplus of <b>{data.presentOne}</b> this year so I'll be sure to get that for you. But <b>{data.presentTwo}</b> and <b>{data.presentThree}</b> will be tougher to get to you! I'll surely try my best. Keep doing <b>{data.goodDeed}</b>, it helps keep you on the nice list for sure! I told <b>{data.favoriteReindeer}</b> that he's your favorite and it made him smile wide! Merry Christmas! Love, Santa.
        </div>
      </div>
    )
  }
}

export default LetterContent;