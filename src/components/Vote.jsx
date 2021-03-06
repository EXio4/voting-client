import React from 'react';


class Vote extends React.PureComponent {
    constructor(props) {
        super(props);
        this.getPair = this.getPair.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
        this.hasVotedFor = this.hasVotedFor.bind(this);
    }

    getPair() {
        console.log(this.props.pair)
        return this.props.pair || [];
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }

    render() {
        return <div className="voting">
            {this.getPair().map(entry =>
                <button key={entry}
                    disabled={this.isDisabled()}
                    onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                    {this.hasVotedFor(entry) ?
                        <div className="label">Voted</div>:
                        null}
                </button>
            )}
        </div>;
    }
}

export default Vote;