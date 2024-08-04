import { memo } from 'react';

type HostProps = {
  avatarUrl: string;
  userName: string;
  isPro: boolean;
};

const Host = memo(({ avatarUrl, userName, isPro }: HostProps): JSX.Element => (
  <div className="offer__host-user user">
    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
      <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
    </div>
    <span className="offer__user-name">{userName}</span>
    {isPro && <span className="offer__user-status">Pro</span>}
  </div>
));

Host.displayName = 'Host';

export default Host;
