import { IEqualizer } from '../../App';
import { Amplitude } from '../';
import "../../index.scss";

export const Equalizer = ({ equalizer }: { equalizer: IEqualizer[] }) => {
  return (
    <div className="equalizer">
      {equalizer.map(({ id, amplitudes }) =>
        <div key={id}>
          {amplitudes.map(amplitud => <Amplitude key={amplitud.id} {...amplitud} />)}
        </div>
      )}
    </div>
  )
}