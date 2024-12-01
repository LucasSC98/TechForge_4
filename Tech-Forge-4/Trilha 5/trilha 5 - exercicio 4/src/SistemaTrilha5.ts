abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};
    voteFor(candidate: string): void{
        if(this.votes[candidate]){
            this.votes[candidate]++;
        }
        else{
            this.votes[candidate] = 1;
        }
    }
    getResults(): object{
        return this.votes;
    }
}
////     Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).
class Poll extends VoteSystem {
    private votes: Record<string, number> = {};
    voteFor(candidate: string): void{
        if(this.votes[candidate]){
            this.votes[candidate]++;
        }
        else{
            this.votes[candidate] = 1;
        }
    }
    getResults(): object{
        return Object.entries(this.votes).sort((a, b) => b[1] - a[1]);
    }
}

const election = new Election();
election.voteFor('Zé');
election.voteFor('Maria');
election.voteFor('Zé');
election.voteFor('Maria');
election.voteFor('Maria');
console.log(election.getResults());

const poll = new Poll();
poll.voteFor('Pedro');
poll.voteFor('Zé do Caixão');
poll.voteFor('Pedro');
poll.voteFor('Maria');
poll.voteFor('Maria');
poll.voteFor('Maria');
poll.voteFor('Zé do Caixão');
poll.voteFor('Zé do Caixão');
poll.voteFor('Zé do Caixão');
console.log(poll.getResults());