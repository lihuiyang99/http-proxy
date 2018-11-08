module.exports = [
  {

    //本地的url =》 本地的url
    "/":"/mteacher/list.html",
  }, {
    //线上的url =》 本地的mock
    "/ok": "/ok",
    "/teacher/assign/questionCart": "/teacher/assign/questionCart",
    "/question/choice": "/question/choice.json",
  },
  //题包接口 吴桐
  {
    "/assign/loadpackageContent": "/assign/loadpackageContent1.json",
    "/assign/loadpackageContent2": "/assign/loadpackageContent2.json",
    // "/assign/questionBankSearchCondition": "/assign/questionBankSearchCondition.json",
    "/assign/questionBankSearchCondition": "/assign/newQuestionBankSearchCondition.json",
    "/assign/getQuestionsFromQuestionBank": "/assign/getQuestionsFromQuestionBank.json",
    "/assign/loadPaperContent": "/assign/loadPaperContent.json",
    "/assign/getBigdataPackageContent": "/assign/getBigdataPackageContent.json",
    "/assign/lessonWrongPackageList": "/assign/lessonWrongPackageList.json",
    "/assign/lessonWrongContent": "/assign/lessonWrongContent.json"
  },
  {
    "/review/questionTypesDetail": "/review/questionTypesDetail.json",
    "/review/config": "/review/config.json",
    "/review/knowledgePointSearchConditions": "/review/knowledgePointSearchConditions.json",
    "/review/knowledgePointDetail": "/review/knowledgePointDetail.json",
    "/review/paperDetail": "/assign/paperDetail.json"
  },
  {

    // 购题车 2、通过压缩数据，请求完整数据
    "/cart/questionCart": "/v1/cart/questionCart.json",
    "/cart/info": "/v1/cart/info.json",
    "/cart/add_questions": "/v1/cart/add_questions.json",
    "/cart/flush": "/v1/cart/flush.json",
    "/cart/preview": "/v1/cart/preview.json",
    "/cart/remove_questions": "/v1/cart/remove_questions.json"
  },
  {

    // 反馈页面
    "/mteacher/page/feedbackDetail": "/page/feedbackDetail.json"
  }
]
