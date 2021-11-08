import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material ui
import {
    Box,
    Container,
    Typography,
    withWidth,
} from '@material-ui/core';

// component
import BackgroundImg from '../../assets/bg_img.png';

const QuestionsPage = (props) => {
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
                <Container maxWidth="lg" style={{ marginBottom: 50, marginTop: isXs || isSm || isMd ? 150 : 100 }} className={isXs? 'tableLayout tableLayoutmobile': 'tableLayout tableLayoutflex'}>
                    <Typography variant="subtitle1" align={isXs ? "center" : "left"} style={{ marginTop: 20 }}>よくあるご質問</Typography>
                    <Typography variant="subtitle2" style={{ marginTop: 40 }}>【初めて利用するお客様へ】</Typography>
                    <Container style={{ marginTop: 20 }} className="tr">
                      <Typography className="td1">ログイン方法</Typography>
                      <Container className="td2">
                        <Typography className="b">Q　登録したメールアドレスを忘れた</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">A　お問い合わせのフォームから、以下の内容を記載の上当社まで連絡ください。</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">・お名前（フルネーム）</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">・お名前カナ（フルネーム）</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">・電話番号</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">・生年月日</Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　登録したパスワードを忘れた</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">A　ログイン画面にある、「パスワードを忘れた方はこちらから」よりパスワードの再設定をお願いします。</Typography>
                      </Container>
                    </Container>
                    <Container style={{ marginTop: 30 }} className="tr">
                      <Typography className="td1">登録情報の変更</Typography>
                      <Container className="td2">
                        <Typography className="b">Q　登録情報の変更を行いたい</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">A　お客様のマイページにあるプロフィール設定より、変更可能です。</Typography>
                      </Container>
                    </Container>
                    <Container style={{ marginTop: 30 }} className="tr">
                      <Typography className="td1">決済方法</Typography>
                      <Container className="td2">
                        <Typography className="b">Q　決済の方法を教えてください</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">A　現在、クレジットカードでの決済が利用できます。</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">対応ブランド　VISA,MasterCard,AMEX,デビットカード（JCB,dinersは順次対応予定）</Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　毎月の決済はいつ行われますか</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">A　無料体験中に解約しない場合は、月額料金が自動的に請求されます。</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">請求は最初の請求日から毎月行われ、解約するまで継続されます。解約はいつでも可能です。</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">解約時にご利用対象期間が残っていても、その部分についての払い戻しは行われません。</Typography>
                      </Container>
                    </Container>
                    <Container style={{ marginTop: 30 }} className="tr">
                      <Typography className="td1">退会</Typography>
                      <Container className="td2">
                        <Typography className="b">Q　退会方法を教えてください</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">A　マイページの「退会について」をご参照ください。</Typography>
                      </Container>
                    </Container>
                    <Typography variant="subtitle2" style={{ marginTop: 40 }}>【視聴環境について】</Typography>
                    <Container style={{ marginTop: 20 }} className="tr">
                      <Typography className="td1">推奨環境</Typography>
                      <Container className="td2">
                        <Typography className="b">Q　視聴をする際、推奨の端末（PC、スマホ、タブレット等）はありますか？</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">
                          A　基本どの端末でもご利用可能です。なお、ライブ配信は大量のデータ通信を行いますので、
                        </Typography>
                        <Typography style={{ marginTop: 20 }} className="span1">インターネット定額サービスでご利用いただくことを推奨します。</Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　オンライン配信中、端末やWi-Fiの不調や故障等により視聴できない場合どうしたらいいですか？</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">
                          A　配信した動画は、毎日アーカイブに残す予定です。過去の動画に関しましては、アーカイブにて視聴することができます。
                        </Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　視聴する際、推奨環境はありますか？</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">
                          A　配信を快適にご利用いただくには、各ブラウザの最新バージョンをお使いいただくことを推奨します。
                        </Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">
                          また、通信環境においては光回線などの高速通信環境を推奨します。
                        </Typography>
                        <Typography style={{ marginTop: 20 }} className="span1">「Windows」をご利用の方</Typography>
                        <Container className="sub-table">
                          <Container className="row-support">
                            <Typography style={{ marginTop: 10 }} className="s1 s2">Google Chrome</Typography>
                            <Typography style={{ marginTop: 10 }} className={isXs? 'span1 s2 smobile': 'span1 s2'}>最新のバージョン </Typography>
                          </Container>
                          <Container className="row-support">
                            <Typography style={{ marginTop: 10 }} className="s1 s2">Mozilla Firefox</Typography>
                            <Typography style={{ marginTop: 10 }} className={isXs? 'span1 s2 smobile': 'span1 s2'}>最新のバージョン </Typography>
                          </Container>
                          <Container className="row-support">
                            <Typography style={{ marginTop: 10 }} className="s1 s2">Microsoft Edge</Typography>
                            <Typography style={{ marginTop: 10 }} className={isXs? 'span1 s2 smobile': 'span1 s2'}>最新のバージョン </Typography>
                          </Container>
                        </Container>
                        <Typography style={{ marginTop: 20 }} className="span1">「Macintosh」のご利用の方</Typography>
                        <Container className="sub-table">
                          <Container className="row-support">
                            <Typography style={{ marginTop: 10 }} className="s1 s2">Google Chrome</Typography>
                            <Typography style={{ marginTop: 10 }} className={isXs? 'span1 s2 smobile': 'span1 s2'}>最新のバージョン </Typography>
                          </Container>
                          <Container className="row-support">
                            <Typography style={{ marginTop: 10 }} className="s1 s2">Mozilla Firefox</Typography>
                            <Typography style={{ marginTop: 10 }} className={isXs? 'span1 s2 smobile': 'span1 s2'}>最新のバージョン </Typography>
                          </Container>
                          <Container className="row-support">
                            <Typography style={{ marginTop: 10 }} className="s1 s2">Safari</Typography>
                            <Typography style={{ marginTop: 10 }} className={isXs? 'span1 s2 smobile': 'span1 s2'}>最新のバージョン </Typography>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                    <Typography variant="subtitle2" style={{ marginTop: 40 }}>【動画配信について】</Typography>
                    <Container style={{ marginTop: 20 }} className="tr">
                      <Typography className="td1">視聴中のトラブル</Typography>
                      <Container className="td2">
                        <Typography className="b">Q　動画視聴中に映像が途切れます。なぜですか？</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1"> A　主に、以下2つの原因が考えられます。</Typography>
                        <Typography style={{ marginTop: 10 }} className="span1">
                          原因１　ブラウザ上で配信するサーバとご自身の視聴端末間でネットワーク回線が混在していることが考えられます。
                          </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          原因２　視聴端末のCPUやメモリなどに負荷がかかり、視聴端末のパフォーマンス低下が考えられます。
                        </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          作業１　ブラウザをリロードする。（サーバとの再接続）
                        </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          作業２　視聴端末を再起動させる。（視聴端末のパフォーマンス低下を解消）
                        </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          作業３　通信環境を確認しモデムなどの電源を入れ直す。（通信設備の誤作動解消）
                        </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          上記の作業を行っても症状が変わらない場合は、下記の対策をご検討下さい。
                        </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          対策１　インターネットへの回線速度を上げる。
                        </Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>
                          対策２　視聴端末を推奨されている環境に整える。
                        </Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　映像再生中に音が聞こえないのは、何が問題ですか？</Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>A　現在配信される動画は、音声は流れません。</Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　動画配信でどの程度の遅延がありますか？</Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>A　当社が配信する動画は、リアルタイム配信であり遅延は限りなく短い超低遅延仕様になっております。</Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>遅延が発生する場合は、再起動するか通信環境の確認をお願いします。</Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　サインの表示が正常に表示されていません</Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>A　システムの一時的な不具合で、サインがバラけて表示されることがごく稀にあります。</Typography>
                        <Typography className="b" style={{ marginTop: 20 }}>Q　スマホしかありませんが利用可能ですか？</Typography>
                        <Typography className="span1" style={{ marginTop: 10 }}>A　ブラウザでの動画視聴は可能ですが、実際の取引を行う際は、別端末をご用意することを推奨します。</Typography>
                      </Container>
                    </Container>
                    <Container style={{ marginTop: 30 }} className="tr">
                      <Typography className="td1">ライブアーカイブ</Typography>
                      <Container className="td2">
                        <Typography className="span1">現在準備中です。暫くお待ちください。</Typography>
                      </Container>
                    </Container>

                </Container>
            </Box>
        </Fragment >
    );
};

QuestionsPage.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(QuestionsPage));
