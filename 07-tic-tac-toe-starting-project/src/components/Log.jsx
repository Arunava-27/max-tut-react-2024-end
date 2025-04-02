export default function Log({turns}){
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={index}>
                    <span>{`Player ${turn.player} moved to row ${turn.square.row}, cell ${turn.square.cell}`}</span>
                </li>
            ))}
        </ol>
    );
}