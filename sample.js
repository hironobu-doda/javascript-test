$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    let ave = sum / 5;
    $("#average_indicate").text(ave);

  }
    // ここに、上記を参考にして平均点を出力する処理を書き込む
  // function average_point() {
  // console.log(score_indicate());
  //   let sum = score_indicate();
  //   let ave = sum / 5;
    // console.log(ave);
    
      // $("#avarage_indicate").text(ave);
      //kakuteii
      // return ave;
  // };
  
  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    let  average_point = $("#average_indicate").text()
     $('#btn-evaluation').click(function(){
           console.log(average_point);

        var judge = 0;
        if(average_point >= 80) {
            judge = "A";
        } else if(average_point >= 60) {
            judge = "B";
        } else if(average_point >= 40) {
            judge = "C";
        } else {
            judge = "D";
        }
        $('#evaluation').text(judge);
        });
  }

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let subject_points =  $("#average_indicate").text()
    $('#btn-judge').click(function(){
        var judge = 0;
        for(let i=0; i<5; i++){
        if(subject_points[i] >= 60) {
          judge = "合格";
        } else {
          judge ="不合格";
          break;
        }}
        $('#judge').text(judge);
  })
  }

  function judgement(){
    let achievement = $('#evaluation').text();
    let judge2 = $('#judge').text();
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${judge2}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});