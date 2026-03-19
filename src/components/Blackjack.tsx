import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

type Card = { suit: string; value: string };

const SUITS = ["♠", "♥", "♦", "♣"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createDeck = (): Card[] => {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      deck.push({ suit, value });
    }
  }
  return deck.sort(() => Math.random() - 0.5);
};

const cardValue = (card: Card): number => {
  if (["J", "Q", "K"].includes(card.value)) return 10;
  if (card.value === "A") return 11;
  return parseInt(card.value);
};

const handTotal = (hand: Card[]): number => {
  let total = hand.reduce((sum, c) => sum + cardValue(c), 0);
  let aces = hand.filter((c) => c.value === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
};

const CardDisplay = ({ card, hidden }: { card: Card; hidden?: boolean }) => {
  const isRed = card.suit === "♥" || card.suit === "♦";
  if (hidden) {
    return (
      <div className="w-16 h-24 rounded-lg border-2 border-gray-600 bg-blue-900 flex items-center justify-center shadow-lg">
        <div className="text-blue-700 text-3xl">🂠</div>
      </div>
    );
  }
  return (
    <div className="w-16 h-24 rounded-lg border-2 border-gray-300 bg-white flex flex-col items-center justify-center shadow-lg">
      <div className={`text-lg font-bold ${isRed ? "text-red-500" : "text-gray-900"}`}>{card.value}</div>
      <div className={`text-2xl ${isRed ? "text-red-500" : "text-gray-900"}`}>{card.suit}</div>
    </div>
  );
};

type GameState = "betting" | "playing" | "dealer" | "done";

const Blackjack = () => {
  const [deck, setDeck] = useState<Card[]>(createDeck());
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(0);
  const [gameState, setGameState] = useState<GameState>("betting");
  const [message, setMessage] = useState("");

  const deal = useCallback(() => {
    if (bet === 0) { setMessage("Place a bet first!"); return; }
    const newDeck = [...deck];
    const pHand = [newDeck.pop()!, newDeck.pop()!];
    const dHand = [newDeck.pop()!, newDeck.pop()!];
    setDeck(newDeck);
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setMessage("");

    if (handTotal(pHand) === 21) {
      const winnings = Math.floor(bet * 1.5);
      setBalance((b) => b + bet + winnings);
      setMessage(`Blackjack! You win $${winnings}!`);
      setGameState("done");
    } else {
      setGameState("playing");
    }
  }, [bet, deck]);

  const hit = useCallback(() => {
    const newDeck = [...deck];
    const newHand = [...playerHand, newDeck.pop()!];
    setDeck(newDeck);
    setPlayerHand(newHand);
    if (handTotal(newHand) > 21) {
      setMessage("Bust! You lose.");
      setGameState("done");
    }
  }, [deck, playerHand]);

  const stand = useCallback(() => {
    setGameState("dealer");
    let dHand = [...dealerHand];
    let newDeck = [...deck];
    while (handTotal(dHand) < 17) {
      dHand.push(newDeck.pop()!);
    }
    setDeck(newDeck);
    setDealerHand(dHand);

    const playerTotal = handTotal(playerHand);
    const dealerTotal = handTotal(dHand);

    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      setBalance((b) => b + bet * 2);
      setMessage(`You win $${bet}!`);
    } else if (playerTotal === dealerTotal) {
      setBalance((b) => b + bet);
      setMessage("Push — bet returned.");
    } else {
      setMessage(`Dealer wins. You lose $${bet}.`);
    }
    setGameState("done");
  }, [deck, dealerHand, playerHand, bet]);

  const newGame = () => {
    if (balance <= 0) {
      setBalance(1000);
      setMessage("Reloaded $1,000!");
    }
    setDeck(createDeck());
    setPlayerHand([]);
    setDealerHand([]);
    setBet(0);
    setGameState("betting");
    setMessage("");
  };

  const placeBet = (amount: number) => {
    if (gameState !== "betting") return;
    if (bet + amount > balance) return;
    setBet((b) => b + amount);
  };

  const clearBet = () => { if (gameState === "betting") setBet(0); };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Blackjack</h2>
        <p className="text-gray-400 text-center text-sm mb-8">For entertainment purposes only</p>

        {/* Balance & Bet */}
        <div className="flex justify-between items-center mb-6 bg-gray-800 rounded-xl px-6 py-4">
          <div className="text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wider">Balance</p>
            <p className="text-green-400 text-2xl font-bold">${balance}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wider">Bet</p>
            <p className="text-yellow-400 text-2xl font-bold">${bet}</p>
          </div>
        </div>

        {/* Dealer Hand */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-2">
            Dealer {gameState === "done" || gameState === "dealer" ? `(${handTotal(dealerHand)})` : ""}
          </p>
          <div className="flex gap-3 flex-wrap">
            {dealerHand.map((card, i) => (
              <CardDisplay key={i} card={card} hidden={gameState === "playing" && i === 1} />
            ))}
          </div>
        </div>

        {/* Player Hand */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-2">
            You {playerHand.length > 0 ? `(${handTotal(playerHand)})` : ""}
          </p>
          <div className="flex gap-3 flex-wrap">
            {playerHand.map((card, i) => (
              <CardDisplay key={i} card={card} />
            ))}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className="text-center text-xl font-bold text-white mb-6 bg-gray-800 rounded-xl py-3">
            {message}
          </div>
        )}

        {/* Betting Chips */}
        {gameState === "betting" && (
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-3">Place your bet:</p>
            <div className="flex gap-3 flex-wrap">
              {[5, 10, 25, 50, 100].map((amount) => (
                <button
                  key={amount}
                  onClick={() => placeBet(amount)}
                  className="w-14 h-14 rounded-full font-bold text-sm border-4 border-yellow-600 bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  ${amount}
                </button>
              ))}
              <button
                onClick={clearBet}
                className="px-4 h-14 rounded-full font-bold text-sm border-2 border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          {gameState === "betting" && (
            <Button onClick={deal} className="bg-green-600 hover:bg-green-500 text-white px-8">
              Deal
            </Button>
          )}
          {gameState === "playing" && (
            <>
              <Button onClick={hit} className="bg-blue-600 hover:bg-blue-500 text-white px-8">
                Hit
              </Button>
              <Button onClick={stand} className="bg-red-600 hover:bg-red-500 text-white px-8">
                Stand
              </Button>
            </>
          )}
          {gameState === "done" && (
            <Button onClick={newGame} className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8">
              New Game
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blackjack;
