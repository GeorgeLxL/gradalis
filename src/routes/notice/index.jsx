import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material ui
import {
  Box,
  Container,
  Typography,
  withWidth,
} from '@material-ui/core';

// custom hooks

// component
import BackgroundImg from '../../assets/bg_img.png';

const TermsOfUsePage = (props) => {
  const { width } = props;
  const isXs = width === 'xs';
  const isSm = width === 'sm';
  const isMd = width === 'md';

  return (
    <Fragment>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          justifyContent: 'center',
          backgroundImage: isXs ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 39%, rgba(0, 0, 0, 1) 100%), url(${BackgroundImg})` : "none",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 150 : 100 }}>
          <Typography variant="subtitle1" align={isXs ? "center" : "left"} style={{ marginTop: 20 }}>【ご注意】</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>【1】</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ GRADALISのサインは、一日に１回～２回、サインの更新のためGRADALISを一瞬立ち上げ直します。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ 時間にして30秒～45秒です。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ その間は、一時的にサインが見れなくなりますので、ご注意下さい。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ また、立ち上げ直した時に、出たばかりの直近のサインが極たまに消えてしまうことがあります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ これは、サインが確定する前に、立ち上げ直したことによりサインが初期化されたために起きる現象です。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ そのチャートに勢いがあれば、立ち上げ直してもサインは消えません。極稀に、勢いが弱い時はサインが消えたままになります。再度勢いが戻ったら、サインはもう一度出直します。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ もし、サインが消えて、その後もサインが出直ししない場合は、ポジション調整をお願い致します。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ これにつきましては、弊社は責任を負えませんので予めご了承下さい。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>【2】</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ GRADALISのサインは、ごく稀に、直近のサインがリペイントすることがあります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ 例えば直近の矢印が上昇サイン↑だった場合、何かの要因で、いきなり逆方向に強く反転した動きがあった場合、直近の上昇↑が、下落↓に変わることが稀にあります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ この場合は、買いポジションをロスカットし、売りポジションに切り替えるなどポジション調整をお願い致します。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ これにつきましては、弊社は責任を負えませんので予めご了承下さい。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ この現象は、例を挙げれば、移動平均線が一旦ゴールデンクロスした後に急に下落して、そのゴールデンクロスが解けてしまう現象に似ています。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ GRADALISが移動平均線よりも優れている点は、サインがきちんと逆向きに出ることです。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ 移動平均線のゴールデンクロスが解けて、下落した場合、すぐには逆のサインであるデットクロスは出ません。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ 大分時間が経ってからデットクロスし、その時には既に価格はかなり下落してしまって、損失が大きくなっているか、下落でとれるはずの利益を逃すことになります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>■ GRADALISなら、急落すれば比較的早期に逆の向きに、売サインがでますので、買いポジションはロスカットし、売りポジションをエントリーし直す事が瞬時にできます。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>以上、GRADALISの2点のご注意です。</Typography>
        </Container>
      </Box>
    </Fragment >
  );
};

TermsOfUsePage.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(TermsOfUsePage));