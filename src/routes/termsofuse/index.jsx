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
          <Typography variant="subtitle1" align={isXs ? "center" : "left"} style={{ marginTop: 20 }}>利用規約</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１条（定義）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>本規約において、以下の用語は以下に定める意味を有するものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、「本件サイト」とは「Gradalis合同会社」および提携するサイトをいいます。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、「グループ会社」とは、当社子会社および関連会社をいいます。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３、「会員（メンバー）」とは、本規約の同意の上、所定の方法により本件サイトに会員登録をした個人および法人をいいます。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>４、「サービス」とは、本件サイトにおいてGradalis合同会社（以下「当社」といいます）が提供する会員向けの各種サービスをいいます。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>５、「お客様」とは、本件サイトを使用する個人および法人をいいます。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>６、「本規約等」とは、本規約、本件サイト上に記載される他の規約、ガイドライン等の総称をいいます。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>７、「会員情報」とは、会員が 本件サイトに開示した会員の属性に関する情報および会員の取引に関する履歴等の情報（第１１条により収集された情報を含みます）をいいます。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第２条（会員）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、会員は、当社が提供するサービスを利用するための地位です。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、会員は当社が定める条件に従って、本件サイトにおいて各サービスを利用することができます。ただし、別途各サービスの規約、契約等により定める事項の登録を必要とする場合があります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３、会員は、会員としての地位およびサービスの利用により当社に対して取得した一切の権利の全部または一部を譲渡、転貸、担保差入その他形態を問わず処分することはできません。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第３条（本規約）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、本規約は、全ての会員に適用され、登録手続き時および登録時にお守りいただく規約です。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第４条（会員登録手続き）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、会員資格</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>本規約に同意のうえ所定の登録申込みをされた個人および法人は、所定の登録手続き完了後に会員としての資格を有します。会員登録手続きは、会員となるご本人が行ってください。代理による登録は一切認められません。なお、過去に会員資格が取り消された方や当社が相応しくないと判断した方からの会員申込についてはお断りする場合があります。申請を拒否されたことに関して発生したあらゆる事態に対し、当社では一切の責任は負わず、当該の申請拒否に関する理由等の説明や公開の義務を負わないものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、登録</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>会員登録を希望する利用者は、本件サイト「利用規約」に同意した後、運営会社所定の登録方法に従い会員登録を行うものとします。登録の際に選択された支払い方法は、利用者と運営会社とのサービスの利用に関する契約が終了するまで変更することができないものとし、利用者はこれに同意します。サービスに係る利用料金の支払い方法によって、契約の有効期間、更新条件、利用料金等は異なります。詳細は、別途サービス画面上または、本件サイトにて説明されるものとし、利用者はサービスへの登録に先立ち、当該説明の内容を確認するものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>なお、契約期間の途中で解約された場合であっても、解約した時点において直ちにサービスが利用できなくなり、契約期間中の利用料金が発生します。発生した利用料金は、日割精算等による返金を含め一切返金は行いませんので、ご留意ください。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３、会員情報の入力</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>会員登録手続きの際には、入力上の注意をよく読み、所定の入力フォームに必要事項を正確に入力してください。当社は次の各号に該当する場合、会員のニックネーム使用を制限できるものとし、ログイン停止または削除の処理を行う場合があります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１．公序良俗に反するニックネーム</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２．他の会員および第三者のプライバシーを侵害する恐れのあるニックネーム</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３．当社が相応しくないと判断した方若しくは暴力団関係者からの会員</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第５条（ユーザIDおよびパスワードの管理）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>ユーザIDおよびパスワードは、他人に知られることがないよう定期的に変更する等、会員本人が責任をもって管理してください。当社は、入力されたユーザIDおよびパスワードが登録されたものと一致することを所定の方法により確認した場合、会員による利用があったものとみなし、それらが盗用、不正使用その他の事情により会員以外の者が利用している場合であっても、それにより生じた損害について一切責任を負いません。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第６条（登録情報の変更）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>登録した情報に変更が生じた場合は、速やかに変更登録をお願いいたします。変更登録がなされなかったことにより生じた損害について、当社は一切責任を負いません。また、変更登録がなされた場合でも、変更登録前にすでに手続きがなされた取引は、変更登録前の情報に基づいて行われます。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第７条（会員の退会）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、会員が退会を希望する場合には、所定の退会手続の終了後に、退会となります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、会員を退会した場合、当該会員がそれまでに購入した商品およびサービスを再入手することはできません。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第８条（契約終了後の取扱い）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>利用者と運営会社とのサービス利用に関する契約が終了した後においても、運営会社は、任意の期間及び範囲において、当該利用者に提供されていたサービスの履歴に関する情報を保持するものとし、利用者はこれに同意します。当該期間中に改めて当該利用者と運営会社との間で新規の契約が締結された場合、利用者は、運営会社により保持されている上記の情報に基づき、従前の契約時において提供されたサービスの履歴を引き継ぐことが可能になります。但し、これは運営会社の任意により行われるものであり、従前の契約時における全てのサービスの履歴が引き継がれることを保証するものではありません。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第９条（免責事項）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、当社のサービスは、本件サイトをWebサイトとしてその時点の、あるがままの状態でしか提供しておりません。本件サイトは、本件サイトの運営、または本件サイトに掲載されている情報、コンテンツ、素材、商品に関し、明示的であるか黙示的であるかにかかわらず、いかなる種類の表明も保証もいたしません。お客様は、ご自分の責任で本件サイトをご利用になり当社には一切の保証および責任がないことを予め理解および承諾したものとみなします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、通信回線やコンピュータなどの障害によるシステムの中断・遅滞・中止・データの消失、データへの不正アクセスにより生じた損害、その他当社のサービスに関して会員に生じた損害について、当社は一切責任を負わないものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３、当社は、当社のウェブページ・サーバ・ドメインなどから送られるメール・コンテンツに、コンピューター・ウィルスなどの有害なものが含まれていないことを保証いたしません。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>４、当社は会員に対し、適宜情報提供を行うことがありますが、それにより生じた損害について、当社は一切責任を負わないものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>５、会員が本規約等に違反したことによって生じた損害については、当社は一切責任を負わないものとします。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１０条（禁止事項）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>本サービスの利用に際して、会員に対し次の各号の行為を行うことを禁止します。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、法令または本規約等に違反すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、当社、他のお客様およびその他の第三者の権利、利益、名誉等を損ねること（当社より提供される全てのプログラムの、複製、改変、およびリバースエンジニアリング等の行為は当然に本号に該当するものとみなします）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３、虚偽の情報を本件サイトにて流出する行為を行うこと</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>４、他の利用者その他の第三者に迷惑となる行為や不快感を抱かせる行為を行うこと</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>５、虚偽の情報を入力すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>６、有害なコンピュータプログラム、メール等を送信または書き込むこと</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>７、当社のサーバその他のコンピュータに不正にアクセスすること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>８、ユーザIDおよびパスワードを第三者に貸与・譲渡すること、または第三者と共用すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>９、同一または類似した内容を繰り返し掲示し、サービスの円滑運営を妨害する行為を行うこと</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１０、本件サイト上で広告または宣伝物を掲示する行為を行うこと</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１１、宗教的活動または政治的活動、及びあらゆる勧誘活動を行うこと</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１２、その他、当社が不適切と判断する行為を行うこと</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１１条（クッキー（cookie）等について）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、当社は、会員として本件サイトにアクセスしたことを認証するため、会員のアクセス履歴および利用状況の調査のため、その他会員に最適のサービスを提供するために、会員が当社のサーバにアクセスする際のＩＰアドレスに関する情報、携帯電話端末等でアクセスした場合には携帯端末等の機体識別番号に関する情報、およびクッキー（cookie）の技術を使用して会員のアクセス履歴等に関する情報を収集します。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、会員が会員としてサービスを利用するためには、前項を承諾し、クッキーを受け付けることが条件となります。したがって、ブラウザでクッキーを拒否するための設定を行った場合、会員としての各サービスの利用ができませんのであらかじめご了承願います。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１２条（会員情報の取扱い）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、当社は、当社のプライバシーポリシーに従い、個人情報を取り扱います。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、当社は次の各号に該当する場合を除き、会員の同意なく、個人情報を第三者に開示又は提供しないこととします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>①法令に基づく場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>②裁判所又は行政機関から個人情報の提供を求められた場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>③公衆の生命、身体又は財産の保護のために、個人情報を提供することが適当であると認められる場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>④当社から委託されたグループ会社が会員からのお問い合わせ対応を行なう場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>⑤当社またはグループ会社から会員に対して当社またはグループ会社のサービスのお知らせや提供を行う場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>⑥その他、社会通念上、個人情報の開示又は提供が相当と認められる場合</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１３条（サービスの利用）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>各サービスの利用に際しては、当該サービスの利用規約に、あらかじめ同意していただく必要があります。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１４条（サービスの中断・停止等）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>当社は、サービスを常に良好な状態でご利用いただくために、システムの定期保守や緊急保守を行う場合、システムに負荷が集中した場合、サービスの運営に支障が生じると当社が判断した場合、会員のセキュリティを確保する必要が生じた場合、その他必要があると判断した場合には、事前に通知することなく、サービスの全部または一部の提供を中断または停止する等の必要な措置を取ることができるものとします。この場合に会員に生じた損害について、当社は一切責任を負わないものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、本件サイトの有料サービスを利用する会員は、本件サイト上に記載された利用料金を支払うものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、当社は会員の同意なく利用料金または支払い条件を変更できるものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>３、会員から当社に支払われた金額について払い戻し等を行わないものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>４、会員が決済方法を第三者に不正利用されたことにより発生した会員の不利益および損害について、当社は何らの責任も負わないものとします。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１５条（反社会的勢力等の排除）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、会員は、当社に対し、会員並びに会員の役員および従業員が、次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約する。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>①国籍を問わず、反社会勢力(通称半グレと称される者も含む)、元反社会勢力、反社会勢力準構成員、反社会勢力関係の個人・法人・団体、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団、反社会勢力と当社が判断した個人・団体 等、その他これらに準ずる者（以下「反社会勢力等」という。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>②反社会勢力等が経営を支配し、又は暴力団員等が経営に実質的に関与していると認められる関係を有すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>③不当に反社会勢力等を利用していると認められる関係を有すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>④反社会勢力等に対して資金等を提供し、又は便宜を供与するなどの関与をしていると認められる関係を有すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>⑤その他反社会勢力等と社会的に非難されるべき関係を有すること</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、会員は、自ら又は第三者を利用して次の各号の一にでも該当する行為を行わないことを確約する。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>①反社会勢力等による暴力的な要求行為</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>②反社会勢力等による法的な責任を超えた不当な要求行為</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>③風説を流布し、偽計を用い又は威力を用いて乙の信用を毀損し、又は乙の業務を妨害する行為</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>④その他前各号に準ずる行為</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１６条（特定会員の利用停止・会員資格取消）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、当社は、特定の会員が次の各号に該当すると判断した場合には、事前に通知することなく当該会員によるサービスの利用停止、当該会員のユーザIDおよびパスワードの変更、当該会員の会員資格の取消し、未払いの支払の停止および消滅を行うことができるものとします。これにより会員に何らかの損害が生じたとしても、当社は一切責任を負わないものとします。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>①会員に法令や本規約等に違反する行為があった場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>②会員にサービス利用に関して不正行為があった場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>③一定回数以上のパスワードの入力ミスがあるなど会員のセキュリティを確保するために必要な場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>④前条第１項各号の表明が事実に反することが判明した場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>⑤前条第１項各号の確約に反して、同項各号のいずれかに該当した場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>⑥前条第２項各号の確約に反して、同項各号のいずれかに該当する行為を行った場合</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>⑦その他当社が適当と判断した場合</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１７条（損害賠償）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>１、会員が故意または過失によって当社または他の会員その他の第三者に損害を負わせた場合にその損害を賠償する責任があります。</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>２、会員が本規約の規定に違反した場合及び違反していなくても、第三者に損害を与えた場合、当該会員は第三者の損害に対し賠償するものとします。当社は、これに起因して生じた会員または第三者の損害につき一切の法的責任（賠償責任を含みますが、これに限りません）を負わないものとします。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１８条（サービスの変更・廃止・仕様変更など）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>当社は、会員の承諾を得ることなく、その判断によりサービスの全部または一部を適宜変更・廃止できるものとします。また、本規約に定める内容や本サービスの仕様等について変更または修正等を行う場合には、当社における本件サイトにおける告知による通知をもってのみ行うことができるものとします。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第１９条（利用者に対する通知方法）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>当社は会員に対する通知または告知はE-mail等による通知その他当社が適当と認める方法により行うことができるものとします。前項に基づくE-mail等による通知は当社が会員の登録メールアドレスに通知を発したとき等に到達したものとします。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第２０条（権利帰属）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>本サービスによって提供される著作物は当社及びサービス提供者などの正当な権利者に帰属し，会員は，これらを無断で複製，転載，改変，その他の二次利用をすることはできません。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第２１条（準拠法、合意管轄）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>本規約は日本法に基づき解釈されるものとし、本規約に関する一切の法的紛争については、その訴額に応じて東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。</Typography>

          <Typography variant="body1" align="left" style={{ marginTop: 50 }}>第２２条（自己責任原則）</Typography>
          <Typography variant="body1" align="left" style={{ marginTop: 10 }}>会員各自の判断に基づく投資の結果として損失が生じた場合につきましては当社としては一切の責任を負いかねますのでご了承下さいますようお願い申し上げます。</Typography>
        </Container>
      </Box>
    </Fragment >
  );
};

TermsOfUsePage.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default React.memo(withWidth()(TermsOfUsePage));