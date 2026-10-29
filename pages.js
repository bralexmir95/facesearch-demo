// Páginas internas de la web nueva, resumidas a partir de las de facesearch.app.
// Cada página: título, una frase de introducción y 3–5 puntos cortos.
window.FS_PAGES = {
  es: {
    ui: { back: 'Volver', home: 'Inicio', toHome: 'Volver al inicio', mail: 'Escribir email', google: 'Continuar con Google', blog: 'Blog', account: 'Cuenta',
      accountDemo: 'Demo: en la web real aquí se abre el inicio de sesión con Google.', payDemo: 'Demo: en la web real aquí se abre el pago seguro de Stripe.', more: 'Más preguntas' },
    privacy: { t: 'Privacidad', i: 'Tu privacidad va primero. Así tratamos tus datos:', items: [
      ['Tus fotos', 'Se usan solo para hacer la búsqueda y después se eliminan. No las guardamos.'],
      ['Tus búsquedas', 'Los datos de cada búsqueda se borran solos a los 90 días.'],
      ['Proveedores', 'La foto se envía a nuestro proveedor de reconocimiento solo para buscar y le pedimos que la borre.'],
      ['Solo mayores de 18', 'El servicio es solo para personas mayores de edad.'],
      ['Tus derechos', 'Pide acceso, corrección o borrado de tus datos en privacy@facesearch.app.']] },
    terms: { t: 'Términos de uso', i: 'Usar FaceSearch significa aceptar estas reglas básicas:', items: [
      ['Usos prohibidos', 'Acosar o vigilar a alguien, discriminar, buscar a menores, suplantar identidades o cometer fraudes.'],
      ['Edad', 'Debes tener 18 años o más.'],
      ['Pagos y créditos', 'Los pagos se hacen con Stripe. Los créditos no caducan.'],
      ['Resultados', 'Vienen de fuentes públicas y pueden no ser exactos. Compruébalos antes de actuar.'],
      ['Contacto', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: 'Eliminar mi foto', i: 'Si tu cara aparece en nuestros resultados, la ocultamos. Es gratis.', items: [
      ['1. Escríbenos', 'Envía a privacy@facesearch.app los enlaces donde aparece tu cara.'],
      ['2. Lo revisamos', 'Solo atendemos solicitudes sobre tu propia cara.'],
      ['3. Te confirmamos', 'Normalmente en pocos días hábiles.'],
      ['Importante', 'La foto original sigue en la web donde se publicó. Para quitarla, contacta con esa web.']] },
    faq: { t: 'Preguntas frecuentes', i: 'Lo esencial en pocas líneas.', items: [
      ['¿Qué fotos sirven?', 'JPG, PNG, WebP o HEIC con una cara clara y de frente.'],
      ['¿Necesito una cuenta?', 'No para la vista previa. Para comprar créditos inicias sesión con Google.']] },
    guarantee: { t: 'Garantía', i: 'Si una Búsqueda Profunda no encuentra nada, te devolvemos los créditos.', items: [
      ['No cubre', 'Las búsquedas estándar ya usadas ni las Búsquedas Profundas con al menos una coincidencia.']] },
    uses: { t: 'Casos de uso', i: 'Las formas más habituales de usar FaceSearch:', items: [
      ['Suplantación', 'Encuentra cuentas que usan tu foto sin permiso.'],
      ['Citas online', 'Comprueba que las fotos de un perfil son de verdad.'],
      ['Fotos antiguas', 'Encuentra versiones anteriores o de otra calidad de una imagen.']] },
    business: { t: 'Empresas', i: 'Para equipos que necesitan búsquedas faciales a gran escala.', items: [
      ['Descuentos por volumen', 'Mejores precios para búsquedas masivas.'],
      ['API', 'Integra la búsqueda en tus propias herramientas.'],
      ['Marca blanca', 'Interfaz personalizada con tu marca.'],
      ['Soporte dedicado', 'Atención prioritaria para tu caso.']] },
    account: { t: 'Tu cuenta', i: 'Inicia sesión para ver tu saldo y tu historial, y para comprar créditos.', items: [] }
  },
  en: {
    ui: { back: 'Back', home: 'Home', toHome: 'Back to home', mail: 'Send email', google: 'Continue with Google', blog: 'Blog', account: 'Account',
      accountDemo: 'Demo: on the live site this opens Google sign-in.', payDemo: 'Demo: on the live site this opens secure Stripe checkout.', more: 'More questions' },
    privacy: { t: 'Privacy', i: 'Your privacy comes first. Here is how we handle your data:', items: [
      ['Your photos', 'Used only to run the search, then deleted. We do not keep them.'],
      ['Your searches', 'Search data is deleted automatically after 90 days.'],
      ['Providers', 'Your photo goes to our recognition provider only to search, and we ask them to delete it.'],
      ['18+ only', 'The service is for adults only.'],
      ['Your rights', 'Request access, correction or deletion at privacy@facesearch.app.']] },
    terms: { t: 'Terms of use', i: 'Using FaceSearch means accepting these basic rules:', items: [
      ['Prohibited uses', 'Stalking or surveilling someone, discrimination, searching for minors, impersonation or fraud.'],
      ['Age', 'You must be 18 or older.'],
      ['Payments and credits', 'Payments are handled by Stripe. Credits never expire.'],
      ['Results', 'They come from public sources and may be inaccurate. Check them before acting.'],
      ['Contact', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: 'Remove my photo', i: 'If your face shows up in our results, we hide it. Free of charge.', items: [
      ['1. Email us', 'Send the links where your face appears to privacy@facesearch.app.'],
      ['2. We review it', 'We only handle requests about your own face.'],
      ['3. We confirm', 'Usually within a few business days.'],
      ['Important', 'The original photo stays on the site where it was posted. Contact that site to take it down.']] },
    faq: { t: 'FAQ', i: 'The essentials in a few lines.', items: [
      ['Which photos work?', 'JPG, PNG, WebP or HEIC with a clear, front-facing face.'],
      ['Do I need an account?', 'Not for the preview. To buy credits you sign in with Google.']] },
    guarantee: { t: 'Guarantee', i: 'If a Deep Search finds nothing, we refund your credits.', items: [
      ['Not covered', 'Standard searches already used, or Deep Searches with at least one match.']] },
    uses: { t: 'Use cases', i: 'The most common ways to use FaceSearch:', items: [
      ['Impersonation', 'Find accounts using your photo without permission.'],
      ['Online dating', 'Check that a profile’s photos are real.'],
      ['Older photos', 'Find earlier or different-quality versions of an image.']] },
    business: { t: 'Business', i: 'For teams that need face search at scale.', items: [
      ['Volume discounts', 'Better prices for bulk searches.'],
      ['API', 'Build search into your own tools.'],
      ['White label', 'A custom interface with your brand.'],
      ['Dedicated support', 'Priority help for your use case.']] },
    account: { t: 'Your account', i: 'Sign in to see your balance and history, and to buy credits.', items: [] }
  },
  fr: {
    ui: { back: 'Retour', home: 'Accueil', toHome: "Retour à l'accueil", mail: 'Envoyer un e-mail', google: 'Continuer avec Google', blog: 'Blog', account: 'Compte',
      accountDemo: 'Démo : sur le vrai site, la connexion Google s’ouvre ici.', payDemo: 'Démo : sur le vrai site, le paiement sécurisé Stripe s’ouvre ici.', more: 'Plus de questions' },
    privacy: { t: 'Confidentialité', i: 'Votre vie privée passe en premier. Voici comment nous traitons vos données :', items: [
      ['Vos photos', 'Utilisées uniquement pour la recherche, puis supprimées. Nous ne les gardons pas.'],
      ['Vos recherches', 'Les données de recherche sont supprimées automatiquement après 90 jours.'],
      ['Prestataires', 'La photo est envoyée à notre prestataire uniquement pour rechercher, et nous lui demandons de la supprimer.'],
      ['18 ans et plus', 'Le service est réservé aux adultes.'],
      ['Vos droits', 'Demandez l’accès, la correction ou la suppression à privacy@facesearch.app.']] },
    terms: { t: "Conditions d'utilisation", i: 'Utiliser FaceSearch, c’est accepter ces règles de base :', items: [
      ['Usages interdits', 'Harceler ou surveiller quelqu’un, discriminer, rechercher des mineurs, usurper une identité ou frauder.'],
      ['Âge', 'Vous devez avoir 18 ans ou plus.'],
      ['Paiements et crédits', 'Les paiements passent par Stripe. Les crédits n’expirent pas.'],
      ['Résultats', 'Ils proviennent de sources publiques et peuvent être inexacts. Vérifiez-les avant d’agir.'],
      ['Contact', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: 'Supprimer ma photo', i: 'Si votre visage apparaît dans nos résultats, nous le masquons. Gratuitement.', items: [
      ['1. Écrivez-nous', 'Envoyez à privacy@facesearch.app les liens où apparaît votre visage.'],
      ['2. Nous vérifions', 'Nous traitons uniquement les demandes concernant votre propre visage.'],
      ['3. Nous confirmons', 'En général sous quelques jours ouvrés.'],
      ['Important', 'La photo d’origine reste sur le site qui l’a publiée. Contactez ce site pour la retirer.']] },
    faq: { t: 'Questions fréquentes', i: 'L’essentiel en quelques lignes.', items: [
      ['Quelles photos fonctionnent ?', 'JPG, PNG, WebP ou HEIC avec un visage net et de face.'],
      ['Faut-il un compte ?', 'Pas pour l’aperçu. Pour acheter des crédits, connectez-vous avec Google.']] },
    guarantee: { t: 'Garantie', i: 'Si une Recherche approfondie ne trouve rien, nous remboursons vos crédits.', items: [
      ['Non couvert', 'Les recherches standard déjà utilisées et les Recherches approfondies avec au moins une correspondance.']] },
    uses: { t: "Cas d'usage", i: 'Les usages les plus courants de FaceSearch :', items: [
      ['Usurpation', 'Trouvez les comptes qui utilisent votre photo sans permission.'],
      ['Rencontres en ligne', 'Vérifiez que les photos d’un profil sont authentiques.'],
      ['Photos anciennes', 'Retrouvez des versions plus anciennes ou de qualité différente d’une image.']] },
    business: { t: 'Entreprises', i: 'Pour les équipes qui ont besoin de recherches faciales à grande échelle.', items: [
      ['Remises sur volume', 'De meilleurs prix pour les recherches en masse.'],
      ['API', 'Intégrez la recherche à vos propres outils.'],
      ['Marque blanche', 'Une interface personnalisée à votre marque.'],
      ['Support dédié', 'Une aide prioritaire pour votre cas.']] },
    account: { t: 'Votre compte', i: 'Connectez-vous pour voir votre solde et votre historique, et acheter des crédits.', items: [] }
  },
  de: {
    ui: { back: 'Zurück', home: 'Start', toHome: 'Zur Startseite', mail: 'E-Mail schreiben', google: 'Mit Google fortfahren', blog: 'Blog', account: 'Konto',
      accountDemo: 'Demo: Auf der echten Website öffnet sich hier die Google-Anmeldung.', payDemo: 'Demo: Auf der echten Website öffnet sich hier die sichere Stripe-Zahlung.', more: 'Weitere Fragen' },
    privacy: { t: 'Datenschutz', i: 'Deine Privatsphäre steht an erster Stelle. So gehen wir mit deinen Daten um:', items: [
      ['Deine Fotos', 'Werden nur für die Suche genutzt und danach gelöscht. Wir speichern sie nicht.'],
      ['Deine Suchen', 'Suchdaten werden nach 90 Tagen automatisch gelöscht.'],
      ['Anbieter', 'Das Foto geht nur zur Suche an unseren Erkennungsanbieter, und wir bitten um Löschung.'],
      ['Ab 18', 'Der Dienst ist nur für Erwachsene.'],
      ['Deine Rechte', 'Auskunft, Berichtigung oder Löschung unter privacy@facesearch.app.']] },
    terms: { t: 'Nutzungsbedingungen', i: 'Wer FaceSearch nutzt, akzeptiert diese Grundregeln:', items: [
      ['Verbotene Nutzung', 'Stalking oder Überwachung, Diskriminierung, Suche nach Minderjährigen, Identitätsbetrug oder Betrug.'],
      ['Alter', 'Du musst mindestens 18 Jahre alt sein.'],
      ['Zahlungen und Credits', 'Zahlungen laufen über Stripe. Credits verfallen nicht.'],
      ['Ergebnisse', 'Stammen aus öffentlichen Quellen und können ungenau sein. Prüfe sie, bevor du handelst.'],
      ['Kontakt', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: 'Mein Foto entfernen', i: 'Wenn dein Gesicht in unseren Ergebnissen erscheint, blenden wir es aus. Kostenlos.', items: [
      ['1. Schreib uns', 'Sende die Links, auf denen dein Gesicht erscheint, an privacy@facesearch.app.'],
      ['2. Wir prüfen', 'Wir bearbeiten nur Anfragen zu deinem eigenen Gesicht.'],
      ['3. Wir bestätigen', 'Meist innerhalb weniger Werktage.'],
      ['Wichtig', 'Das Originalfoto bleibt auf der Website, die es veröffentlicht hat. Wende dich dorthin.']] },
    faq: { t: 'Häufige Fragen', i: 'Das Wichtigste in wenigen Zeilen.', items: [
      ['Welche Fotos funktionieren?', 'JPG, PNG, WebP oder HEIC mit klarem Gesicht von vorne.'],
      ['Brauche ich ein Konto?', 'Nicht für die Vorschau. Zum Kauf von Credits meldest du dich mit Google an.']] },
    guarantee: { t: 'Garantie', i: 'Findet eine Tiefensuche nichts, erstatten wir deine Credits.', items: [
      ['Nicht abgedeckt', 'Bereits genutzte Standardsuchen und Tiefensuchen mit mindestens einem Treffer.']] },
    uses: { t: 'Anwendungsfälle', i: 'Die häufigsten Einsatzzwecke von FaceSearch:', items: [
      ['Identitätsmissbrauch', 'Finde Konten, die dein Foto ohne Erlaubnis nutzen.'],
      ['Online-Dating', 'Prüfe, ob die Fotos eines Profils echt sind.'],
      ['Ältere Fotos', 'Finde frühere Versionen oder Varianten eines Bildes.']] },
    business: { t: 'Unternehmen', i: 'Für Teams, die Gesichtssuche im großen Stil brauchen.', items: [
      ['Mengenrabatte', 'Bessere Preise für viele Suchen.'],
      ['API', 'Baue die Suche in deine eigenen Tools ein.'],
      ['White Label', 'Eine eigene Oberfläche mit deiner Marke.'],
      ['Persönlicher Support', 'Bevorzugte Hilfe für deinen Fall.']] },
    account: { t: 'Dein Konto', i: 'Melde dich an, um Guthaben und Verlauf zu sehen und Credits zu kaufen.', items: [] }
  },
  pt: {
    ui: { back: 'Voltar', home: 'Início', toHome: 'Voltar ao início', mail: 'Enviar e-mail', google: 'Continuar com Google', blog: 'Blog', account: 'Conta',
      accountDemo: 'Demo: no site real, aqui abre o login com Google.', payDemo: 'Demo: no site real, aqui abre o pagamento seguro da Stripe.', more: 'Mais perguntas' },
    privacy: { t: 'Privacidade', i: 'Sua privacidade vem primeiro. Veja como tratamos seus dados:', items: [
      ['Suas fotos', 'Usadas só para a pesquisa e depois excluídas. Não as guardamos.'],
      ['Suas pesquisas', 'Os dados de cada pesquisa são apagados automaticamente após 90 dias.'],
      ['Fornecedores', 'A foto vai ao nosso fornecedor de reconhecimento só para pesquisar, e pedimos que a apague.'],
      ['Só maiores de 18', 'O serviço é apenas para adultos.'],
      ['Seus direitos', 'Peça acesso, correção ou exclusão em privacy@facesearch.app.']] },
    terms: { t: 'Termos de uso', i: 'Usar o FaceSearch significa aceitar estas regras básicas:', items: [
      ['Usos proibidos', 'Perseguir ou vigiar alguém, discriminar, buscar menores, se passar por outra pessoa ou fraudar.'],
      ['Idade', 'Você precisa ter 18 anos ou mais.'],
      ['Pagamentos e créditos', 'Os pagamentos são feitos pela Stripe. Os créditos não expiram.'],
      ['Resultados', 'Vêm de fontes públicas e podem não ser exatos. Confira antes de agir.'],
      ['Contato', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: 'Remover minha foto', i: 'Se seu rosto aparece nos nossos resultados, nós o ocultamos. É grátis.', items: [
      ['1. Escreva-nos', 'Envie para privacy@facesearch.app os links onde seu rosto aparece.'],
      ['2. Analisamos', 'Só atendemos pedidos sobre o seu próprio rosto.'],
      ['3. Confirmamos', 'Normalmente em poucos dias úteis.'],
      ['Importante', 'A foto original continua no site onde foi publicada. Para tirá-la, fale com esse site.']] },
    faq: { t: 'Perguntas frequentes', i: 'O essencial em poucas linhas.', items: [
      ['Quais fotos funcionam?', 'JPG, PNG, WebP ou HEIC com um rosto nítido e de frente.'],
      ['Preciso de conta?', 'Não para a prévia. Para comprar créditos você entra com o Google.']] },
    guarantee: { t: 'Garantia', i: 'Se uma Pesquisa Profunda não encontrar nada, devolvemos seus créditos.', items: [
      ['Não cobre', 'Pesquisas padrão já usadas nem Pesquisas Profundas com pelo menos uma correspondência.']] },
    uses: { t: 'Casos de uso', i: 'As formas mais comuns de usar o FaceSearch:', items: [
      ['Falsificação de identidade', 'Encontre contas que usam sua foto sem permissão.'],
      ['Encontros online', 'Confira se as fotos de um perfil são reais.'],
      ['Fotos antigas', 'Encontre versões anteriores ou de outra qualidade de uma imagem.']] },
    business: { t: 'Empresas', i: 'Para equipes que precisam de busca facial em grande escala.', items: [
      ['Descontos por volume', 'Preços melhores para pesquisas em massa.'],
      ['API', 'Integre a busca às suas ferramentas.'],
      ['Marca branca', 'Interface personalizada com a sua marca.'],
      ['Suporte dedicado', 'Atendimento prioritário para o seu caso.']] },
    account: { t: 'Sua conta', i: 'Entre para ver seu saldo e histórico e comprar créditos.', items: [] }
  },
  ja: {
    ui: { back: '戻る', home: 'ホーム', toHome: 'ホームに戻る', mail: 'メールを送る', google: 'Googleで続ける', blog: 'ブログ', account: 'アカウント',
      accountDemo: 'デモ：実際のサイトではここでGoogleログインが開きます。', payDemo: 'デモ：実際のサイトではここでStripeの安全な決済が開きます。', more: 'その他の質問' },
    privacy: { t: 'プライバシー', i: 'プライバシーを最優先しています。データの扱いは次のとおりです：', items: [
      ['写真', '検索のためだけに使い、その後削除します。保存しません。'],
      ['検索データ', '各検索のデータは90日後に自動で削除されます。'],
      ['提携先', '写真は検索のためだけに認識サービスへ送られ、削除を依頼しています。'],
      ['18歳以上', '本サービスは成人のみ利用できます。'],
      ['あなたの権利', 'データの開示・訂正・削除は privacy@facesearch.app へ。']] },
    terms: { t: '利用規約', i: 'FaceSearchの利用は、次の基本ルールに同意することを意味します：', items: [
      ['禁止事項', 'つきまといや監視、差別、未成年者の検索、なりすまし、詐欺。'],
      ['年齢', '18歳以上である必要があります。'],
      ['支払いとクレジット', '支払いはStripeで行われます。クレジットに期限はありません。'],
      ['検索結果', '公開情報に基づくため不正確な場合があります。行動する前に確認してください。'],
      ['お問い合わせ', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: '自分の写真を削除', i: '検索結果にあなたの顔が出る場合、非表示にします。無料です。', items: [
      ['1. ご連絡', '顔が表示されるリンクを privacy@facesearch.app に送ってください。'],
      ['2. 確認', 'ご本人の顔に関する依頼のみ対応します。'],
      ['3. 完了のお知らせ', '通常は数営業日以内です。'],
      ['ご注意', '元の写真は掲載先のサイトに残ります。削除はそのサイトにご依頼ください。']] },
    faq: { t: 'よくある質問', i: '要点だけをまとめました。', items: [
      ['どんな写真が使えますか？', '顔がはっきり正面から写った JPG・PNG・WebP・HEIC。'],
      ['アカウントは必要ですか？', 'プレビューには不要です。クレジット購入時はGoogleでログインします。']] },
    guarantee: { t: '保証', i: 'ディープ検索で何も見つからなければ、クレジットを返却します。', items: [
      ['対象外', '使用済みの標準検索、および一致が1件以上あったディープ検索。']] },
    uses: { t: '使い道', i: 'FaceSearchのよくある使い方：', items: [
      ['なりすまし', 'あなたの写真を無断で使うアカウントを見つけます。'],
      ['オンラインデート', 'プロフィール写真が本物か確認できます。'],
      ['古い写真', '画像の過去のバージョンや別の画質のものを探せます。']] },
    business: { t: '法人向け', i: '大規模な顔検索が必要なチーム向け。', items: [
      ['ボリュームディスカウント', '大量検索をお得な価格で。'],
      ['API', '自社ツールに検索を組み込めます。'],
      ['ホワイトラベル', '自社ブランドのカスタム画面。'],
      ['専任サポート', 'ご利用に合わせた優先サポート。']] },
    account: { t: 'アカウント', i: 'ログインすると残高や履歴の確認、クレジットの購入ができます。', items: [] }
  },
  zh: {
    ui: { back: '返回', home: '首页', toHome: '返回首页', mail: '发送邮件', google: '使用 Google 继续', blog: '博客', account: '账户',
      accountDemo: '演示：在正式网站上，这里会打开 Google 登录。', payDemo: '演示：在正式网站上，这里会打开 Stripe 安全支付。', more: '更多问题' },
    privacy: { t: '隐私', i: '你的隐私最重要。我们这样处理你的数据：', items: [
      ['你的照片', '仅用于执行搜索，之后即被删除，我们不会保存。'],
      ['你的搜索', '每次搜索的数据会在 90 天后自动删除。'],
      ['服务商', '照片仅发送给识别服务商用于搜索，并要求其删除。'],
      ['仅限 18 岁以上', '本服务仅供成年人使用。'],
      ['你的权利', '如需访问、更正或删除数据，请联系 privacy@facesearch.app。']] },
    terms: { t: '使用条款', i: '使用 FaceSearch 即表示接受以下基本规则：', items: [
      ['禁止用途', '跟踪或监视他人、歧视、搜索未成年人、冒充身份或欺诈。'],
      ['年龄', '你必须年满 18 岁。'],
      ['付款与积分', '付款由 Stripe 处理，积分永不过期。'],
      ['结果', '来自公开来源，可能不准确。采取行动前请先核实。'],
      ['联系方式', 'legal@facesearch.app · support@facesearch.app']] },
    remove: { t: '删除我的照片', i: '如果你的脸出现在我们的结果中，我们会将其隐藏，完全免费。', items: [
      ['1. 联系我们', '将出现你面孔的链接发送至 privacy@facesearch.app。'],
      ['2. 我们审核', '我们只处理关于你本人面孔的请求。'],
      ['3. 确认完成', '通常在几个工作日内。'],
      ['注意', '原始照片仍保留在发布它的网站上。如需删除，请联系该网站。']] },
    faq: { t: '常见问题', i: '用几句话说清重点。', items: [
      ['什么样的照片可以用？', '脸部清晰、正面的 JPG、PNG、WebP 或 HEIC。'],
      ['需要账户吗？', '预览不需要。购买积分时使用 Google 登录。']] },
    guarantee: { t: '保障', i: '深度搜索如果没有找到任何结果，我们会退还积分。', items: [
      ['不包括', '已使用的标准搜索，以及至少有一个匹配的深度搜索。']] },
    uses: { t: '用途', i: 'FaceSearch 最常见的用法：', items: [
      ['身份冒用', '找出未经允许使用你照片的账号。'],
      ['网络约会', '确认对方资料中的照片是否真实。'],
      ['旧照片', '找到图片的早期版本或不同画质的版本。']] },
    business: { t: '企业', i: '适合需要大规模人脸搜索的团队。', items: [
      ['批量折扣', '大量搜索享受更优价格。'],
      ['API', '将搜索集成到你自己的工具中。'],
      ['白标', '带有你品牌的定制界面。'],
      ['专属支持', '针对你的需求提供优先支持。']] },
    account: { t: '你的账户', i: '登录后可查看余额和记录，并购买积分。', items: [] }
  }
};
