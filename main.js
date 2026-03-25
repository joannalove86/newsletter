/* ── 데이터 ── */
const foods = [
    // 한식
    { id:1, name:"삼겹살", sub:"구이 200g 기준", emoji:"🥩", cat:"한식", kcal:580, carb:0, prot:36, fat:48, tip:"<strong>삼겹살</strong>은 지방 함량이 높아 채소 쌈과 함께 드시면 섬유질 보충과 함께 포만감을 높일 수 있습니다." },
    { id:2, name:"김치찌개", sub:"1인분 (400g)", emoji:"🍲", cat:"한식", kcal:210, carb:18, prot:14, fat:9, tip:"<strong>김치찌개</strong>는 나트륨 함량이 높습니다. 하루 나트륨 권장량 2,000mg을 고려해 섭취량을 조절하세요." },
    { id:3, name:"비빔밥", sub:"1공기 (550g)", emoji:"🍛", cat:"한식", kcal:490, carb:78, prot:18, fat:12, tip:"<strong>비빔밥</strong>은 다양한 채소를 포함해 비타민과 미네랄 균형이 좋은 편입니다. 고추장 양을 줄이면 나트륨을 낮출 수 있어요." },
    { id:4, name:"된장찌개", sub:"1인분 (350g)", emoji:"🥘", cat:"한식", kcal:150, carb:12, prot:11, fat:5, tip:"<strong>된장찌개</strong>의 된장은 발효식품으로 장 건강에 도움을 줍니다. 두부를 추가하면 단백질을 보충할 수 있습니다." },
    { id:5, name:"불고기", sub:"1인분 (200g)", emoji:"🥓", cat:"한식", kcal:360, carb:22, prot:32, fat:14, tip:"<strong>불고기</strong>는 설탕과 간장 양념이 들어가 당분이 있지만, 단백질 함량도 높아 근육 회복에 도움이 됩니다." },
    { id:6, name:"냉면", sub:"1그릇 (600g)", emoji:"🍜", cat:"한식", kcal:430, carb:82, prot:14, fat:4, tip:"<strong>냉면</strong>은 칼로리 대비 지방이 낮지만 탄수화물이 많습니다. 육수는 나트륨이 높으니 절반만 드세요." },
    { id:7, name:"순두부찌개", sub:"1인분 (400g)", emoji:"🍲", cat:"한식", kcal:180, carb:8, prot:16, fat:10, tip:"<strong>순두부찌개</strong>는 단백질과 칼슘이 풍부합니다. 해산물 버전을 선택하면 오메가3도 함께 섭취할 수 있습니다." },
    { id:8, name:"잡채", sub:"1인분 (250g)", emoji:"🍝", cat:"한식", kcal:320, carb:55, prot:9, fat:8, tip:"<strong>잡채</strong>의 당면은 혈당을 빠르게 올릴 수 있습니다. 채소 비율을 높이면 더 건강하게 즐길 수 있습니다." },
    // 중식
    { id:9, name:"짜장면", sub:"1그릇 (600g)", emoji:"🍜", cat:"중식", kcal:680, carb:110, prot:22, fat:16, tip:"<strong>짜장면</strong>은 춘장에 당분과 지방이 포함되어 있습니다. 채소를 추가 주문하면 영양 균형을 맞출 수 있습니다." },
    { id:10, name:"탕수육", sub:"1인분 (300g)", emoji:"🍖", cat:"중식", kcal:520, carb:48, prot:26, fat:24, tip:"<strong>탕수육</strong>은 튀김 옷으로 인해 칼로리가 높습니다. 소스를 찍어 먹는 '부먹' 대신 '찍먹'으로 칼로리를 줄이세요." },
    { id:11, name:"짬뽕", sub:"1그릇 (700g)", emoji:"🍲", cat:"중식", kcal:460, carb:62, prot:24, fat:12, tip:"<strong>짬뽕</strong>은 해산물이 풍부하지만 나트륨 함량이 매우 높습니다. 국물 섭취를 줄이는 것이 좋습니다." },
    { id:12, name:"마파두부", sub:"1인분 (300g)", emoji:"🥘", cat:"중식", kcal:290, carb:14, prot:18, fat:19, tip:"<strong>마파두부</strong>는 두부의 식물성 단백질과 철분이 풍부합니다. 매운 성분인 고추가 신진대사를 높이는 데 도움이 됩니다." },
    // 일식
    { id:13, name:"초밥 (8피스)", sub:"8피스 세트", emoji:"🍣", cat:"일식", kcal:360, carb:62, prot:18, fat:4, tip:"<strong>초밥</strong>은 지방이 낮고 생선의 오메가3 지방산을 섭취할 수 있습니다. 간장 양을 줄여 나트륨을 조절하세요." },
    { id:14, name:"라멘", sub:"1그릇 (700g)", emoji:"🍜", cat:"일식", kcal:520, carb:70, prot:22, fat:18, tip:"<strong>라멘</strong>은 돼지뼈 육수 특성상 포화지방과 나트륨이 높습니다. 면 양을 반으로 줄이면 칼로리를 크게 낮출 수 있습니다." },
    { id:15, name:"돈카츠", sub:"1인분 (250g)", emoji:"🍱", cat:"일식", kcal:620, carb:42, prot:34, fat:32, tip:"<strong>돈카츠</strong>는 튀김 요리로 지방 함량이 높습니다. 소스보다 레몬을 짜서 먹으면 산뜻하고 칼로리를 줄일 수 있습니다." },
    { id:16, name:"우동", sub:"1그릇 (600g)", emoji:"🍜", cat:"일식", kcal:380, carb:72, prot:14, fat:4, tip:"<strong>우동</strong>은 지방이 적고 소화가 잘 되는 편입니다. 유부나 튀김 토핑을 줄이면 더욱 가볍게 즐길 수 있습니다." },
    // 양식
    { id:17, name:"파스타", sub:"크림 파스타 1인분 (350g)", emoji:"🍝", cat:"양식", kcal:640, carb:68, prot:18, fat:32, tip:"<strong>크림 파스타</strong>는 생크림으로 인해 칼로리와 지방이 높습니다. 토마토 파스타로 대체하면 칼로리를 300kcal 이상 줄일 수 있습니다." },
    { id:18, name:"피자", sub:"치즈피자 2슬라이스 (200g)", emoji:"🍕", cat:"양식", kcal:480, carb:56, prot:20, fat:20, tip:"<strong>피자</strong>는 치즈의 포화지방과 나트륨이 높습니다. 채소 토핑을 선택하고 치즈를 반만 올린 옵션을 고르세요." },
    { id:19, name:"스테이크", sub:"등심 200g 기준", emoji:"🥩", cat:"양식", kcal:440, carb:0, prot:46, fat:28, tip:"<strong>스테이크</strong>는 고품질 단백질의 훌륭한 공급원입니다. 굽기는 미디엄으로 하면 육즙을 살리면서 위생적으로 섭취할 수 있습니다." },
    { id:20, name:"시저샐러드", sub:"1인분 (300g)", emoji:"🥗", cat:"양식", kcal:280, carb:16, prot:14, fat:18, tip:"<strong>시저샐러드</strong>는 드레싱에 지방이 많습니다. 드레싱을 별도로 달라고 해서 조금씩 찍어 먹으면 칼로리를 절반으로 줄일 수 있습니다." },
    // 패스트푸드
    { id:21, name:"빅맥", sub:"버거 1개 (200g)", emoji:"🍔", cat:"패스트푸드", kcal:563, carb:44, prot:26, fat:32, tip:"<strong>빅맥</strong>은 단백질이 적당하지만 나트륨과 포화지방이 높습니다. 음료를 제로 칼로리로 바꾸면 전체 칼로리를 크게 줄일 수 있습니다." },
    { id:22, name:"프라이드 치킨", sub:"2조각 (200g)", emoji:"🍗", cat:"패스트푸드", kcal:480, carb:20, prot:30, fat:30, tip:"<strong>프라이드 치킨</strong>은 껍질에 지방이 집중되어 있습니다. 껍질을 제거하면 칼로리를 약 30% 줄일 수 있습니다." },
    { id:23, name:"감자튀김", sub:"미디엄 (120g)", emoji:"🍟", cat:"패스트푸드", kcal:360, carb:46, prot:4, fat:17, tip:"<strong>감자튀김</strong>은 트랜스지방과 나트륨이 높습니다. 사이드 샐러드나 콘샐러드로 대체하면 훨씬 건강한 선택입니다." },
    { id:24, name:"핫도그", sub:"1개 (150g)", emoji:"🌭", cat:"패스트푸드", kcal:290, carb:26, prot:12, fat:16, tip:"<strong>핫도그</strong>의 소시지는 가공육으로 나트륨과 포화지방이 높습니다. 채소 토핑을 최대한 많이 추가하세요." },
    // 디저트
    { id:25, name:"케이크 (1조각)", sub:"생크림케이크 1조각 (120g)", emoji:"🎂", cat:"디저트", kcal:380, carb:52, prot:5, fat:18, tip:"<strong>생크림케이크</strong>는 설탕과 지방이 높습니다. 특별한 날의 작은 즐거움으로 즐기되, 커피는 블랙으로 함께 하면 좋습니다." },
    { id:26, name:"아이스크림", sub:"바닐라 1스쿱 (100g)", emoji:"🍦", cat:"디저트", kcal:207, carb:24, prot:4, fat:11, tip:"<strong>아이스크림</strong>은 당분과 지방이 높습니다. 요거트 아이스크림이나 셔벗으로 대체하면 칼로리를 낮출 수 있습니다." },
    { id:27, name:"초콜릿", sub:"밀크초콜릿 50g", emoji:"🍫", cat:"디저트", kcal:270, carb:29, prot:4, fat:16, tip:"<strong>다크 초콜릿</strong>(70% 이상)은 항산화 성분인 플라보노이드를 함유합니다. 하루 1~2조각 정도가 적당합니다." },
    { id:28, name:"도넛", sub:"글레이즈 도넛 1개 (75g)", emoji:"🍩", cat:"디저트", kcal:269, carb:35, prot:4, fat:13, tip:"<strong>도넛</strong>은 튀김 반죽에 설탕 코팅이라 당분과 지방이 모두 높습니다. 오전 간식보다는 드문 특별식으로 즐기세요." },
    // 음료
    { id:29, name:"아메리카노", sub:"톨 사이즈 (355ml)", emoji:"☕", cat:"음료", kcal:10, carb:2, prot:1, fat:0, tip:"<strong>아메리카노</strong>는 칼로리가 매우 낮습니다. 카페인은 하루 400mg 이하가 권장량이며 이는 아메리카노 약 3~4잔에 해당합니다." },
    { id:30, name:"카페라떼", sub:"톨 사이즈 (355ml)", emoji:"🥛", cat:"음료", kcal:190, carb:18, prot:10, fat:7, tip:"<strong>카페라떼</strong>는 우유의 단백질과 칼슘을 포함합니다. 두유나 오트밀크로 대체하면 특색있는 맛과 함께 선택지를 넓힐 수 있습니다." },
    { id:31, name:"콜라", sub:"캔 (355ml)", emoji:"🥤", cat:"음료", kcal:154, carb:40, prot:0, fat:0, tip:"<strong>콜라</strong>는 설탕이 약 40g으로 하루 권장 당분 섭취량(50g)의 80%에 해당합니다. 제로 콜라 대체 시 칼로리를 제로로 줄일 수 있습니다." },
    { id:32, name:"오렌지주스", sub:"1컵 (240ml)", emoji:"🍊", cat:"음료", kcal:112, carb:26, prot:2, fat:0, tip:"<strong>오렌지주스</strong>는 비타민 C가 풍부하지만 생과일보다 섬유질이 적습니다. 가능하면 통 과일을 섭취하는 것이 더 좋습니다." },
    // 과일/채소
    { id:33, name:"사과", sub:"중간 크기 1개 (180g)", emoji:"🍎", cat:"과일/채소", kcal:95, carb:25, prot:0, fat:0, tip:"<strong>사과</strong>는 식이섬유인 펙틴이 풍부해 장 건강과 포만감에 도움이 됩니다. 껍질째 먹으면 항산화 성분을 더 많이 섭취할 수 있습니다." },
    { id:34, name:"바나나", sub:"중간 크기 1개 (120g)", emoji:"🍌", cat:"과일/채소", kcal:105, carb:27, prot:1, fat:0, tip:"<strong>바나나</strong>는 칼륨이 풍부해 근육 경련 예방에 좋습니다. 운동 30분 전에 먹으면 빠른 에너지 공급원으로 활용됩니다." },
    { id:35, name:"아보카도", sub:"1/2개 (75g)", emoji:"🥑", cat:"과일/채소", kcal:120, carb:6, prot:2, fat:11, tip:"<strong>아보카도</strong>의 지방은 심장에 유익한 단일불포화지방입니다. 올리브오일처럼 좋은 지방의 대표 식품으로 매일 1/2개가 적당합니다." },
    { id:36, name:"브로콜리", sub:"1컵 (90g)", emoji:"🥦", cat:"과일/채소", kcal:31, carb:6, prot:3, fat:0, tip:"<strong>브로콜리</strong>는 비타민 C, K, 엽산이 풍부한 슈퍼푸드입니다. 살짝 데쳐 드시면 영양소 손실을 최소화할 수 있습니다." },
  ];
  
  /* ── 칼로리 → 색상 ── */
  function calColor(kcal) {
    if (kcal < 150) return 'var(--low)';
    if (kcal < 350) return 'var(--mid)';
    if (kcal < 550) return 'var(--high)';
    return 'var(--vhigh)';
  }
  
  /* ── 칼로리 → 바 너비 (최대 800kcal 기준) ── */
  function calBarWidth(kcal) { return Math.min(kcal / 800 * 100, 100); }
  
  /* ── 매크로 바 (최대 100g 기준) ── */
  function macroWidth(g) { return Math.min(g / 120 * 100, 100); }
  
  /* ── 카드 렌더 ── */
  function renderCards(list) {
    const $grid = $('#grid').empty();
    const $no = $('#noResult');
    if (list.length === 0) {
      $no.addClass('show');
      $('#resultCount').text('0');
      return;
    }
    $no.removeClass('show');
    $('#resultCount').text(list.length);
  
    list.forEach((f, i) => {
      const color = calColor(f.kcal);
      const barW = calBarWidth(f.kcal);
      const $card = $(`
        <div class="card visible" data-id="${f.id}" style="--cal-color:${color}; animation-delay:${i * 0.04}s">
          <span class="card-emoji">${f.emoji}</span>
          <div class="card-category">${f.cat}</div>
          <div class="card-name">${f.name}</div>
          <div class="card-sub">${f.sub}</div>
          <div class="card-kcal">${f.kcal}<span>kcal</span></div>
          <div class="card-bar"><div class="card-bar-fill" style="width:0%" data-w="${barW}"></div></div>
          <div class="card-macros">
            <div class="macro"><span class="macro-val">${f.carb}g</span><span class="macro-label">탄수화물</span></div>
            <div class="macro"><span class="macro-val">${f.prot}g</span><span class="macro-label">단백질</span></div>
            <div class="macro"><span class="macro-val">${f.fat}g</span><span class="macro-label">지방</span></div>
          </div>
        </div>
      `);
      $grid.append($card);
    });
  
    /* 바 애니메이션 */
    setTimeout(() => {
      $('.card-bar-fill').each(function() {
        $(this).css('width', $(this).data('w') + '%');
      });
    }, 100);
  }
  
  /* ── 필터 + 검색 로직 ── */
  let currentCat = 'all';
  let currentQuery = '';
  
  function applyFilter() {
    let result = foods;
    if (currentCat !== 'all') result = result.filter(f => f.cat === currentCat);
    if (currentQuery.trim()) {
      const q = currentQuery.trim().toLowerCase();
      result = result.filter(f => f.name.toLowerCase().includes(q) || f.sub.toLowerCase().includes(q));
    }
    renderCards(result);
  }
  
  /* ── 초기 렌더 ── */
  $(function() {
    applyFilter();
  
    /* 카테고리 필터 */
    $('#filters').on('click', '.filter-btn', function() {
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      currentCat = $(this).data('cat');
      applyFilter();
    });
  
    /* 검색 버튼 */
    $('#searchBtn').on('click', function() {
      currentQuery = $('#searchInput').val();
      applyFilter();
    });
  
    /* 엔터 검색 */
    $('#searchInput').on('keydown', function(e) {
      if (e.key === 'Enter') {
        currentQuery = $(this).val();
        applyFilter();
      }
    });
  
    /* 실시간 검색 */
    $('#searchInput').on('input', function() {
      currentQuery = $(this).val();
      applyFilter();
    });
  
    /* 카드 클릭 → 모달 */
    $('#grid').on('click', '.card', function() {
      const id = +$(this).data('id');
      const f = foods.find(x => x.id === id);
      if (!f) return;
  
      const color = calColor(f.kcal);
      $('#mEmoji').text(f.emoji);
      $('#mCat').text(f.cat);
      $('#mName').text(f.name).css('color', color);
      $('#mSub').text(f.sub);
      $('#mKcal').text(f.kcal).css('color', color);
      $('#mUnit').text('kcal (1회 제공량)');
      $('#mCarb').text(f.carb + 'g');
      $('#mProt').text(f.prot + 'g');
      $('#mFat').text(f.fat + 'g');
      $('#mTip').html(f.tip);
  
      /* 매크로 바 애니메이션 */
      $('#mCarbBar, #mProtBar, #mFatBar').css('width', '0%');
      $('#modalOverlay').addClass('open');
      setTimeout(() => {
        $('#mCarbBar').css('width', macroWidth(f.carb) + '%');
        $('#mProtBar').css('width', macroWidth(f.prot) + '%');
        $('#mFatBar').css('width', macroWidth(f.fat) + '%');
      }, 100);
    });
  
    /* 모달 닫기 */
    $('#modalClose, #modalOverlay').on('click', function(e) {
      if (e.target === this) $('#modalOverlay').removeClass('open');
    });
  
    /* ESC 닫기 */
    $(document).on('keydown', function(e) {
      if (e.key === 'Escape') $('#modalOverlay').removeClass('open');
    });
  });