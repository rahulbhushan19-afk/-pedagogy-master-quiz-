const QUESTIONS = [
  {
    "id": 1,
    "question": "Pedagogy is best understood as: / Pedagogy को सर्वोत्तम रूप से किस रूप में समझा जाता है?",
    "options": [
      "Only the content of a subject / केवल विषय-वस्तु",
      "The art and science of facilitating teaching and learning / शिक्षण-अधिगम को सुगम बनाने की कला एवं विज्ञान",
      "Only classroom discipline / केवल कक्षा-अनुशासन",
      "Only assessment / केवल आकलन"
    ],
    "answer": 1,
    "explanation": "Pedagogy concerns the principles, methods and practices through which teaching is designed to facilitate learning. / Pedagogy उन सिद्धांतों, विधियों और व्यवहारों से संबंधित है जिनके माध्यम से शिक्षण को अधिगम के लिए प्रभावी बनाया जाता है।"
  },
  {
    "id": 2,
    "question": "A reflective teacher changes a strategy after examining student responses. This demonstrates: / विद्यार्थी की प्रतिक्रियाओं का विश्लेषण करके रणनीति बदलना किसे दर्शाता है?",
    "options": [
      "Rigid teaching / कठोर शिक्षण",
      "Reflective pedagogy / चिंतनशील शिक्षाशास्त्र",
      "Rote learning / रटंत अधिगम",
      "Summative assessment / संकलनात्मक आकलन"
    ],
    "answer": 1,
    "explanation": "Reflective pedagogy uses evidence from classroom practice to improve teaching. / चिंतनशील शिक्षाशास्त्र कक्षा-व्यवहार से प्राप्त प्रमाण के आधार पर शिक्षण में सुधार करता है।"
  },
  {
    "id": 3,
    "question": "Which statement about pedagogy is most appropriate? / Pedagogy के बारे में कौन-सा कथन सर्वाधिक उपयुक्त है?",
    "options": [
      "It is independent of learners. / यह शिक्षार्थियों से स्वतंत्र है।",
      "It connects teaching decisions with learner needs and context. / यह शिक्षण-निर्णयों को शिक्षार्थी की आवश्यकताओं और संदर्भ से जोड़ता है।",
      "It means only lecture delivery. / इसका अर्थ केवल व्याख्यान देना है।",
      "It is identical to curriculum. / यह पाठ्यचर्या के समान है।"
    ],
    "answer": 1,
    "explanation": "Good pedagogy is contextual and learner-responsive; curriculum specifies broader learning content and experiences. / प्रभावी pedagogy संदर्भानुकूल और शिक्षार्थी-उत्तरदायी होती है; curriculum व्यापक अधिगम-विषयवस्तु व अनुभव निर्धारित करता है।"
  },
  {
    "id": 4,
    "question": "A pedagogy that treats learners as active meaning-makers is most closely associated with: / शिक्षार्थियों को सक्रिय अर्थ-निर्माता मानने वाली pedagogy किससे संबंधित है?",
    "options": [
      "Constructivism / रचनावाद",
      "Pure behaviourism / शुद्ध व्यवहारवाद",
      "Authoritarianism / अधिनायकवाद",
      "Drill-only instruction / केवल अभ्यास-आधारित निर्देश"
    ],
    "answer": 0,
    "explanation": "Constructivism views learners as constructing meaning through experience, interaction and prior knowledge. / रचनावाद में शिक्षार्थी अनुभव, अंतःक्रिया और पूर्वज्ञान के आधार पर अर्थ का निर्माण करते हैं।"
  },
  {
    "id": 5,
    "question": "The nature of pedagogy is best described as: / Pedagogy की प्रकृति का सर्वोत्तम वर्णन है:",
    "options": [
      "Fixed and universal / स्थिर और सार्वभौमिक",
      "Contextual, purposeful and evidence-informed / संदर्भानुकूल, उद्देश्यपूर्ण और प्रमाण-आधारित",
      "Examination-only / केवल परीक्षा-आधारित",
      "Teacher-only / केवल शिक्षक-केंद्रित"
    ],
    "answer": 1,
    "explanation": "Effective pedagogy adapts to objectives, learners, subject matter, resources and context. / प्रभावी pedagogy उद्देश्यों, शिक्षार्थियों, विषय-वस्तु, संसाधनों और संदर्भ के अनुसार अनुकूलित होती है।"
  },
  {
    "id": 6,
    "question": "Which is NOT normally a feature of sound pedagogy? / निम्न में से कौन sound pedagogy की सामान्य विशेषता नहीं है?",
    "options": [
      "Clear learning goals / स्पष्ट अधिगम लक्ष्य",
      "Learner engagement / शिक्षार्थी सहभागिता",
      "Feedback / प्रतिपुष्टि",
      "One method for every learner regardless of need / आवश्यकता की परवाह किए बिना सभी के लिए एक ही विधि"
    ],
    "answer": 3,
    "explanation": "Sound pedagogy recognizes learner diversity and uses appropriate strategies. / प्रभावी pedagogy शिक्षार्थियों की विविधता को पहचानती है और उपयुक्त रणनीतियाँ अपनाती है।"
  },
  {
    "id": 7,
    "question": "Pedagogical decisions should primarily be guided by: / Pedagogical decisions मुख्यतः किससे निर्देशित होने चाहिए?",
    "options": [
      "Teacher convenience / शिक्षक की सुविधा",
      "Learning objectives and learner needs / अधिगम उद्देश्यों और शिक्षार्थी की आवश्यकताओं",
      "Textbook length / पाठ्यपुस्तक की लंबाई",
      "Seating arrangement alone / केवल बैठने की व्यवस्था"
    ],
    "answer": 1,
    "explanation": "Teaching methods should be selected because they help achieve intended learning outcomes for the learners. / विधि का चयन इसलिए होना चाहिए कि वह इच्छित अधिगम परिणामों को प्राप्त करने में सहायता करे।"
  },
  {
    "id": 8,
    "question": "A principal observes that a teacher completes the syllabus but students cannot apply concepts. The key pedagogical issue is: / पाठ्यक्रम पूरा होने के बाद भी विद्यार्थी अवधारणाओं को लागू नहीं कर पा रहे हैं। मुख्य pedagogical समस्या क्या है?",
    "options": [
      "Excessive participation / अत्यधिक सहभागिता",
      "Possible mismatch between teaching and intended learning outcomes / शिक्षण और अपेक्षित अधिगम परिणामों में संभावित असंगति",
      "Too much formative assessment / अत्यधिक formative assessment",
      "Too much collaboration / अत्यधिक सहयोग"
    ],
    "answer": 1,
    "explanation": "Coverage of content does not guarantee learning; pedagogy must align activities and assessment with outcomes. / विषय-वस्तु पूरा करना अधिगम की गारंटी नहीं है; गतिविधियाँ और आकलन अधिगम परिणामों के अनुरूप होने चाहिए।"
  },
  {
    "id": 9,
    "question": "Pedagogy becomes more inclusive when the teacher: / Pedagogy अधिक समावेशी कब बनती है?",
    "options": [
      "Uses one rigid method / एक कठोर विधि अपनाता है",
      "Provides multiple ways to engage, learn and demonstrate understanding / सहभागिता, सीखने और समझ प्रदर्शित करने के अनेक अवसर देता है",
      "Lowers expectations for everyone / सभी के लिए अपेक्षाएँ घटाता है",
      "Avoids feedback / प्रतिपुष्टि से बचता है"
    ],
    "answer": 1,
    "explanation": "Inclusive pedagogy provides appropriate access and varied pathways without unnecessarily lowering learning expectations. / समावेशी pedagogy उचित पहुँच और विविध सीखने के मार्ग देती है, बिना अनावश्यक रूप से अपेक्षाएँ घटाए।"
  },
  {
    "id": 10,
    "question": "Which statement most clearly distinguishes pedagogy from methodology? / Pedagogy और methodology में सबसे स्पष्ट अंतर क्या है?",
    "options": [
      "Pedagogy is broader; methodology refers to particular ways of teaching. / Pedagogy व्यापक है; methodology विशेष शिक्षण विधियों को संदर्भित करती है।",
      "They are always identical. / दोनों हमेशा समान हैं।",
      "Methodology includes only assessment. / methodology में केवल assessment है।",
      "Pedagogy means textbook selection only. / pedagogy का अर्थ केवल पाठ्यपुस्तक चयन है।"
    ],
    "answer": 0,
    "explanation": "Pedagogy encompasses broader principles and decisions; methodology is more specifically about methods and procedures. / Pedagogy व्यापक सिद्धांतों और निर्णयों को समेटती है; methodology विशेष विधियों और प्रक्रियाओं से अधिक जुड़ी है।"
  },
  {
    "id": 11,
    "question": "A teacher asks, 'What evidence shows my students understood this?' This reflects: / शिक्षक पूछता है, 'कौन-सा प्रमाण दिखाता है कि विद्यार्थियों ने समझा?' यह किसे दर्शाता है?",
    "options": [
      "Evidence-informed pedagogy / प्रमाण-आधारित pedagogy",
      "Rote instruction / रटंत शिक्षण",
      "Administrative control / प्रशासनिक नियंत्रण",
      "Unplanned teaching / बिना योजना का शिक्षण"
    ],
    "answer": 0,
    "explanation": "Using evidence of learning to adjust instruction is a key feature of reflective, evidence-informed pedagogy. / अधिगम के प्रमाण के आधार पर शिक्षण में बदलाव करना चिंतनशील और प्रमाण-आधारित pedagogy की विशेषता है।"
  },
  {
    "id": 12,
    "question": "Which is a pedagogical rather than purely administrative question? / निम्न में से कौन प्रशासनिक के बजाय pedagogical प्रश्न है?",
    "options": [
      "When is the staff meeting? / स्टाफ मीटिंग कब है?",
      "Which strategy will help students understand proportional reasoning? / कौन-सी रणनीति विद्यार्थियों को अनुपातिक तर्क समझने में मदद करेगी?",
      "Who will sign the register? / रजिस्टर पर कौन हस्ताक्षर करेगा?",
      "When is the inspection? / निरीक्षण कब है?"
    ],
    "answer": 1,
    "explanation": "Pedagogical questions concern how learning can be facilitated effectively. / Pedagogical प्रश्न प्रभावी अधिगम को सुगम बनाने से संबंधित होते हैं।"
  },
  {
    "id": 13,
    "question": "In contemporary education, pedagogy is increasingly understood as: / समकालीन शिक्षा में pedagogy को increasingly किस रूप में समझा जाता है?",
    "options": [
      "Transmission only / केवल ज्ञान-संचरण",
      "Interaction among teacher, learner, content and context / शिक्षक, शिक्षार्थी, विषय-वस्तु और संदर्भ की अंतःक्रिया",
      "Memorisation only / केवल स्मरण",
      "Testing only / केवल परीक्षण"
    ],
    "answer": 1,
    "explanation": "Modern pedagogy recognizes the dynamic relationship among teacher, learner, content, resources and context. / आधुनिक pedagogy शिक्षक, शिक्षार्थी, विषय-वस्तु, संसाधन और संदर्भ के गतिशील संबंध को मान्यता देती है।"
  },
  {
    "id": 14,
    "question": "A principal wants pedagogy to improve school learning outcomes. The most appropriate first step is to: / प्रधानाचार्य learning outcomes सुधारना चाहता है। सबसे उपयुक्त पहला कदम क्या होगा?",
    "options": [
      "Increase punishment / दंड बढ़ाना",
      "Examine learning evidence and classroom practices / अधिगम के प्रमाण और कक्षा-व्यवहारों की समीक्षा करना",
      "Increase homework uniformly / समान रूप से homework बढ़ाना",
      "Replace all textbooks / सभी पाठ्यपुस्तक बदलना"
    ],
    "answer": 1,
    "explanation": "Instructional improvement should begin with evidence about student learning and current teaching practices. / शिक्षण सुधार की शुरुआत विद्यार्थी-अधिगम के प्रमाण और वर्तमान शिक्षण-प्रथाओं के विश्लेषण से होनी चाहिए।"
  },
  {
    "id": 15,
    "question": "The strongest indicator of effective pedagogy is: / प्रभावी pedagogy का सबसे मजबूत संकेतक है:",
    "options": [
      "Teacher talks more / शिक्षक अधिक बोलता है",
      "Students demonstrate intended learning / विद्यार्थी अपेक्षित अधिगम प्रदर्शित करते हैं",
      "Notebook is complete / कॉपी पूरी है",
      "Class is silent / कक्षा शांत है"
    ],
    "answer": 1,
    "explanation": "Effectiveness is judged primarily by meaningful achievement of intended learning, not by teacher talk or silence alone. / प्रभावशीलता का मुख्य आधार अपेक्षित अधिगम की सार्थक उपलब्धि है, केवल शिक्षक के बोलने या कक्षा की शांति नहीं।"
  },
  {
    "id": 16,
    "question": "Teaching is best viewed as: / Teaching को सर्वोत्तम रूप से किस रूप में देखा जाता है?",
    "options": [
      "Information delivery only / केवल सूचना देना",
      "A deliberate process intended to facilitate learning / अधिगम को सुगम बनाने की उद्देश्यपूर्ण प्रक्रिया",
      "Classroom control only / केवल कक्षा नियंत्रण",
      "Examination preparation only / केवल परीक्षा तैयारी"
    ],
    "answer": 1,
    "explanation": "Teaching is purposeful and should create conditions that support learning. / Teaching उद्देश्यपूर्ण होती है और अधिगम के लिए अनुकूल परिस्थितियाँ बनाती है।"
  },
  {
    "id": 17,
    "question": "Which statement about learning is most appropriate? / Learning के बारे में कौन-सा कथन उचित है?",
    "options": [
      "It is always visible immediately. / यह हमेशा तुरंत दिखाई देता है।",
      "It involves relatively enduring changes in knowledge, skills, attitudes or understanding. / इसमें ज्ञान, कौशल, दृष्टिकोण या समझ में अपेक्षाकृत स्थायी परिवर्तन होते हैं।",
      "It occurs only through teaching. / यह केवल teaching से होता है।",
      "It is identical to memorisation. / यह memorisation के समान है।"
    ],
    "answer": 1,
    "explanation": "Learning can occur formally and informally and involves meaningful change, not merely short-term recall. / Learning औपचारिक और अनौपचारिक दोनों रूपों में हो सकता है और केवल अल्पकालिक स्मरण नहीं है।"
  },
  {
    "id": 18,
    "question": "A teacher explains a concept clearly, but students retain little. The best conclusion is: / शिक्षक ने अवधारणा स्पष्ट समझाई, फिर भी विद्यार्थी बहुत कम याद रखते हैं। सर्वोत्तम निष्कर्ष क्या है?",
    "options": [
      "Teaching automatically guarantees learning. / Teaching स्वतः learning की गारंटी देता है।",
      "Teaching quality should be judged partly through evidence of learning. / Teaching की गुणवत्ता का आकलन अधिगम के प्रमाण से भी होना चाहिए।",
      "Students are always responsible. / विद्यार्थी हमेशा जिम्मेदार हैं।",
      "More lecturing must be the answer. / अधिक lecture ही समाधान है।"
    ],
    "answer": 1,
    "explanation": "Teaching and learning are related but not identical; evidence of student learning matters. / Teaching और learning संबंधित हैं, लेकिन समान नहीं; विद्यार्थी-अधिगम का प्रमाण महत्वपूर्ण है।"
  },
  {
    "id": 19,
    "question": "Which classroom activity most directly promotes active learning? / कौन-सी गतिविधि active learning को सबसे अधिक बढ़ावा देती है?",
    "options": [
      "Copying notes / notes की नकल",
      "Solving a novel problem and explaining the reasoning / नई समस्या हल करके तर्क समझाना",
      "Listening silently / चुपचाप सुनना",
      "Repeating a definition / परिभाषा दोहराना"
    ],
    "answer": 1,
    "explanation": "Active learning requires cognitive engagement, such as problem solving, explanation and application. / Active learning में समस्या-समाधान, व्याख्या और अनुप्रयोग जैसी संज्ञानात्मक सक्रियता होती है।"
  },
  {
    "id": 20,
    "question": "The strongest evidence that learning has occurred is: / अधिगम होने का सबसे मजबूत प्रमाण है:",
    "options": [
      "Attendance / उपस्थिति",
      "Ability to apply and explain knowledge in a new context / नए संदर्भ में ज्ञान को लागू और समझा पाना",
      "Notebook completion / कॉपी पूरी होना",
      "Silence / शांति"
    ],
    "answer": 1,
    "explanation": "Transfer and explanation provide stronger evidence of understanding than mere attendance or copying. / transfer और explanation, केवल उपस्थिति या नकल की तुलना में समझ के बेहतर प्रमाण हैं।"
  },
  {
    "id": 21,
    "question": "Teaching and learning are best described as: / Teaching और learning का सर्वोत्तम संबंध है:",
    "options": [
      "Identical / समान",
      "Related, interactive and not automatically equivalent / संबंधित, अंतःक्रियात्मक और स्वतः समान नहीं",
      "Unrelated / असंबंधित",
      "One-way only / केवल एकतरफा"
    ],
    "answer": 1,
    "explanation": "Teaching creates opportunities and support; learning is the learner's change and development. / Teaching अवसर और सहायता प्रदान करती है; learning शिक्षार्थी के परिवर्तन और विकास की प्रक्रिया है।"
  },
  {
    "id": 22,
    "question": "If students can reproduce a definition but cannot use the concept, which level is likely weak? / विद्यार्थी परिभाषा बता सकते हैं लेकिन अवधारणा का उपयोग नहीं कर सकते। कौन-सा स्तर कमजोर है?",
    "options": [
      "Recall only / केवल स्मरण",
      "Application and deeper understanding / अनुप्रयोग और गहरी समझ",
      "Attendance / उपस्थिति",
      "Handwriting / हस्तलेखन"
    ],
    "answer": 1,
    "explanation": "Application requires understanding beyond simple recall. / Application के लिए केवल recall से आगे की समझ आवश्यक है।"
  },
  {
    "id": 23,
    "question": "A learner asks questions, tests ideas and revises an answer after feedback. This demonstrates: / विद्यार्थी प्रश्न पूछता है, विचारों की जाँच करता है और feedback के बाद उत्तर संशोधित करता है। यह दर्शाता है:",
    "options": [
      "Passive learning / निष्क्रिय learning",
      "Self-regulated active learning / स्व-नियंत्रित सक्रिय learning",
      "Rote learning / रटंत learning",
      "Teacher dependence / शिक्षक-निर्भरता"
    ],
    "answer": 1,
    "explanation": "Questioning, monitoring and revising are characteristics of active and self-regulated learning. / प्रश्न करना, निगरानी करना और संशोधन करना active तथा self-regulated learning की विशेषताएँ हैं।"
  },
  {
    "id": 24,
    "question": "Which teacher action best bridges teaching and learning? / कौन-सी teacher action teaching और learning के बीच सबसे अच्छा संबंध बनाती है?",
    "options": [
      "Delivering content without checking / बिना जाँच content देना",
      "Eliciting prior knowledge, teaching, checking understanding and adapting / पूर्वज्ञान जानना, teaching, समझ जाँचना और अनुकूलन करना",
      "Increasing speed / गति बढ़ाना",
      "Giving more notes / अधिक notes देना"
    ],
    "answer": 1,
    "explanation": "This cycle aligns instruction with evidence of student understanding. / यह चक्र teaching को विद्यार्थी की समझ के प्रमाण से जोड़ता है।"
  },
  {
    "id": 25,
    "question": "A principal sees high test scores but weak problem-solving. What should be examined first? / अच्छे test scores लेकिन कमजोर problem-solving देखकर प्रधानाचार्य को पहले क्या देखना चाहिए?",
    "options": [
      "Whether assessment overemphasizes recall / क्या assessment में recall पर अत्यधिक जोर है",
      "Whether students need more copying / क्या अधिक copying चाहिए",
      "Whether classroom is silent / क्या कक्षा शांत है",
      "Whether homework is longer / क्या homework लंबा है"
    ],
    "answer": 0,
    "explanation": "Assessment shapes learning; overuse of recall items may hide weak application and reasoning. / Assessment learning को प्रभावित करता है; recall-heavy assessment application और reasoning की कमजोरी छिपा सकता है।"
  },
  {
    "id": 26,
    "question": "Which is an example of formative use of learning evidence? / learning evidence के formative उपयोग का उदाहरण है:",
    "options": [
      "Giving a final grade only / केवल final grade देना",
      "Using misconceptions found in an exit ticket to reteach / exit ticket की misconceptions के आधार पर reteach करना",
      "Ranking students publicly / सार्वजनिक ranking",
      "Filing marks / marks दर्ज करना"
    ],
    "answer": 1,
    "explanation": "Formative assessment informs immediate instructional decisions. / Formative assessment तत्काल teaching decisions को सूचित करता है।"
  },
  {
    "id": 27,
    "question": "Learning is more likely to be durable when students: / Learning अधिक स्थायी होने की संभावना कब होती है?",
    "options": [
      "Only repeat facts / केवल तथ्य दोहराते हैं",
      "Connect ideas, retrieve, apply and explain / विचारों को जोड़ते, recall करते, लागू करते और समझाते हैं",
      "Avoid mistakes / गलतियों से बचते हैं",
      "Depend on teacher answers / शिक्षक के उत्तर पर निर्भर रहते हैं"
    ],
    "answer": 1,
    "explanation": "Elaboration, retrieval, application and explanation support durable learning. / elaboration, retrieval, application और explanation स्थायी learning में सहायक हैं।"
  },
  {
    "id": 28,
    "question": "A teacher says, 'I taught it, so they must have learned it.' The best response is: / शिक्षक कहता है, 'मैंने पढ़ा दिया, इसलिए उन्होंने सीख लिया होगा।' सर्वोत्तम प्रतिक्रिया:",
    "options": [
      "Always true / हमेशा सही",
      "Teaching does not guarantee learning; evidence is required. / Teaching learning की गारंटी नहीं देता; evidence आवश्यक है।",
      "Students must memorize / विद्यार्थियों को रटना चाहिए",
      "Assessment is unnecessary / assessment अनावश्यक है"
    ],
    "answer": 1,
    "explanation": "Instruction must be evaluated through evidence of what learners understand and can do. / instruction का मूल्यांकन इस आधार पर होना चाहिए कि learner क्या समझते और कर सकते हैं।"
  },
  {
    "id": 29,
    "question": "Which statement is closest to the idea of 'learning to learn'? / 'Learning to learn' के सबसे निकट कौन-सा कथन है?",
    "options": [
      "Memorising more facts / अधिक facts याद करना",
      "Developing strategies to monitor and improve one's own learning / अपने learning की निगरानी और सुधार की रणनीतियाँ विकसित करना",
      "Avoiding feedback / feedback से बचना",
      "Depending on teacher / शिक्षक पर निर्भर रहना"
    ],
    "answer": 1,
    "explanation": "Learning to learn emphasizes metacognition, strategy use and self-regulation. / learning to learn में metacognition, रणनीति-प्रयोग और self-regulation पर जोर है।"
  },
  {
    "id": 30,
    "question": "A balanced teaching-learning process should include: / संतुलित teaching-learning process में क्या होना चाहिए?",
    "options": [
      "Teaching only / केवल teaching",
      "Learning goals, active learning, feedback and reflection / learning goals, active learning, feedback और reflection",
      "Tests only / केवल tests",
      "Lecture and homework only / केवल lecture और homework"
    ],
    "answer": 1,
    "explanation": "A complete cycle connects goals, learning activity, evidence, feedback and improvement. / पूर्ण cycle में goals, activity, evidence, feedback और improvement जुड़े होते हैं।"
  },
  {
    "id": 31,
    "question": "The principle 'known to unknown' means: / 'ज्ञात से अज्ञात' का अर्थ है:",
    "options": [
      "Begin with unfamiliar abstractions / अपरिचित abstraction से शुरू करना",
      "Connect new learning with prior knowledge / नए learning को पूर्वज्ञान से जोड़ना",
      "Avoid examples / examples से बचना",
      "Teach randomly / random teaching"
    ],
    "answer": 1,
    "explanation": "Prior knowledge provides a cognitive anchor for new learning. / पूर्वज्ञान नए learning के लिए cognitive आधार प्रदान करता है।"
  },
  {
    "id": 32,
    "question": "'Concrete to abstract' is best illustrated when a teacher: / 'मूर्त से अमूर्त' का सर्वोत्तम उदाहरण है:",
    "options": [
      "Starts with a formula only / केवल formula से शुरू करता है",
      "Uses objects/experiences before symbolic generalization / वस्तुओं-अनुभवों के बाद symbolic generalization कराता है",
      "Avoids demonstrations / demonstration से बचता है",
      "Gives definitions first always / हमेशा पहले definition देता है"
    ],
    "answer": 1,
    "explanation": "Concrete experiences can support movement toward abstract concepts. / मूर्त अनुभव abstract concepts की ओर बढ़ने में सहायता कर सकते हैं।"
  },
  {
    "id": 33,
    "question": "The principle 'simple to complex' primarily means: / 'सरल से जटिल' का अर्थ है:",
    "options": [
      "Never teach difficult concepts / कठिन concepts कभी न पढ़ाना",
      "Sequence learning so prerequisite/simple elements support complex understanding / prerequisite और सरल elements से complex understanding की ओर बढ़ना",
      "Use only easy tasks / केवल आसान tasks",
      "Avoid challenge / चुनौती से बचना"
    ],
    "answer": 1,
    "explanation": "Complex learning often depends on prerequisite knowledge and skills. / जटिल learning अक्सर prerequisite knowledge और skills पर निर्भर करती है।"
  },
  {
    "id": 34,
    "question": "Individual differences require teachers to: / Individual differences के कारण teachers को क्या करना चाहिए?",
    "options": [
      "Treat all learners identically in every respect / हर दृष्टि से सभी को समान मानना",
      "Adapt support, pace or strategy where appropriate / आवश्यकतानुसार support, pace या strategy में अनुकूलन करना",
      "Lower standards for all / सभी standards घटाना",
      "Teach only high achievers / केवल high achievers को पढ़ाना"
    ],
    "answer": 1,
    "explanation": "Equity may require differentiated support while maintaining meaningful learning goals. / समान अवसर के लिए differentiated support की आवश्यकता हो सकती है, जबकि meaningful goals बनाए रखे जाते हैं।"
  },
  {
    "id": 35,
    "question": "The principle of readiness suggests that: / Readiness principle के अनुसार:",
    "options": [
      "Learners should be prepared developmentally and cognitively for learning tasks / learners को learning task के लिए developmental और cognitive readiness होनी चाहिए",
      "Age alone determines readiness / केवल age readiness तय करती है",
      "All learners are equally ready / सभी समान रूप से ready हैं",
      "Readiness is irrelevant / readiness irrelevant है"
    ],
    "answer": 0,
    "explanation": "Readiness includes relevant prior knowledge, skills, motivation and developmental preparedness. / readiness में prior knowledge, skills, motivation और developmental preparedness शामिल हैं।"
  },
  {
    "id": 36,
    "question": "The principle 'learning by doing' emphasizes: / 'करके सीखना' किस पर जोर देता है?",
    "options": [
      "Passive listening / निष्क्रिय listening",
      "Active experience and application / सक्रिय अनुभव और application",
      "Dictation / dictation",
      "Memorisation only / केवल memorisation"
    ],
    "answer": 1,
    "explanation": "Doing provides opportunities to practice, test and apply knowledge. / करके सीखना practice, testing और application के अवसर देता है।"
  },
  {
    "id": 37,
    "question": "A teacher begins a lesson with a real-life problem before introducing the formal concept. Which principle is most evident? / शिक्षक formal concept से पहले real-life problem देता है। कौन-सा principle?",
    "options": [
      "Life-related learning / जीवन से संबंधित learning",
      "Unknown to unknown / अज्ञात से अज्ञात",
      "Punishment / दंड",
      "Rote-only / केवल rote"
    ],
    "answer": 0,
    "explanation": "Connecting school learning with real-life situations can increase relevance and meaning. / school learning को real-life से जोड़ना relevance और meaning बढ़ा सकता है।"
  },
  {
    "id": 38,
    "question": "Which principle supports moving from examples to a general rule? / examples से general rule की ओर जाना किस principle से जुड़ा है?",
    "options": [
      "Particular to general / विशिष्ट से सामान्य",
      "General to particular only / सामान्य से विशिष्ट ही",
      "Unknown to known / अज्ञात से ज्ञात",
      "Abstract to concrete only / अमूर्त से मूर्त ही"
    ],
    "answer": 0,
    "explanation": "Inductive movement from cases/examples to generalization is particular-to-general. / cases/examples से generalization की ओर जाना particular-to-general है।"
  },
  {
    "id": 39,
    "question": "A teacher first states a rule and then gives examples. This is primarily: / शिक्षक पहले rule बताता है और फिर examples देता है। यह है:",
    "options": [
      "General to particular / सामान्य से विशिष्ट",
      "Particular to general / विशिष्ट से सामान्य",
      "Concrete to abstract / मूर्त से अमूर्त",
      "Unknown to known / अज्ञात से ज्ञात"
    ],
    "answer": 0,
    "explanation": "Starting with a general rule and applying it to examples follows general-to-particular sequencing. / general rule से examples की ओर जाना general-to-particular है।"
  },
  {
    "id": 40,
    "question": "Which principle is most closely related to repetition with meaningful variation? / meaningful variation के साथ repetition किस principle से जुड़ा है?",
    "options": [
      "Practice / अभ्यास",
      "Isolation / अलगाव",
      "Avoidance / परिहार",
      "Randomization / randomization"
    ],
    "answer": 0,
    "explanation": "Practice strengthens fluency, but meaningful variation helps transfer rather than mechanical repetition alone. / अभ्यास fluency बढ़ाता है; meaningful variation transfer में मदद करता है।"
  },
  {
    "id": 41,
    "question": "A good teaching sequence should generally: / एक अच्छी teaching sequence को सामान्यतः:",
    "options": [
      "Ignore prerequisites / prerequisites ignore करने चाहिए",
      "Build from prerequisite understanding toward increasingly demanding tasks / prerequisite understanding से अधिक demanding tasks की ओर बढ़ना चाहिए",
      "Start with the hardest task always / हमेशा hardest task से शुरू करना चाहिए",
      "Avoid feedback / feedback से बचना चाहिए"
    ],
    "answer": 1,
    "explanation": "Scaffolding and sequencing reduce unnecessary cognitive barriers while maintaining challenge. / scaffolding और sequencing अनावश्यक cognitive barriers कम करते हैं।"
  },
  {
    "id": 42,
    "question": "The principle of motivation implies that teaching should: / Motivation principle के अनुसार teaching को:",
    "options": [
      "Create meaningful purpose and engagement / meaningful purpose और engagement पैदा करना चाहिए",
      "Depend only on fear / केवल fear पर निर्भर होना चाहिए",
      "Avoid student interests / student interests से बचना चाहिए",
      "Use rewards for every action / हर action पर reward देना चाहिए"
    ],
    "answer": 0,
    "explanation": "Motivation can be supported by relevance, autonomy, competence and meaningful goals. / relevance, autonomy, competence और meaningful goals motivation को support कर सकते हैं।"
  },
  {
    "id": 43,
    "question": "A teacher changes examples to match students' local experiences. This mainly reflects: / teacher students के local experiences के अनुसार examples बदलता है। यह दर्शाता है:",
    "options": [
      "Contextualization / संदर्भीकरण",
      "Standardization only / केवल standardization",
      "Punishment / punishment",
      "Rote learning / rote learning"
    ],
    "answer": 0,
    "explanation": "Contextual examples make new concepts more accessible and meaningful. / contextual examples concepts को accessible और meaningful बनाते हैं।"
  },
  {
    "id": 44,
    "question": "Which principle is most relevant when a teacher uses feedback immediately after a task? / task के तुरंत बाद feedback देना किस principle से संबंधित है?",
    "options": [
      "Reinforcement and improvement through feedback / feedback द्वारा reinforcement और improvement",
      "Unknown to known / अज्ञात से ज्ञात",
      "Silence / silence",
      "Segregation / segregation"
    ],
    "answer": 0,
    "explanation": "Timely feedback helps learners identify gaps and improve performance. / timely feedback learners को gaps पहचानने और performance सुधारने में मदद करता है।"
  },
  {
    "id": 45,
    "question": "The best principle for selecting teaching methods is: / teaching methods चुनने का सर्वोत्तम principle है:",
    "options": [
      "Teacher preference only / केवल teacher preference",
      "Alignment with objectives, learners, content and context / objectives, learners, content और context से alignment",
      "Popularity alone / केवल popularity",
      "Habit / habit"
    ],
    "answer": 1,
    "explanation": "Method selection should be purposeful and aligned with learning needs and outcomes. / method selection purposeful और learning needs/outcomes के अनुरूप होना चाहिए।"
  },
  {
    "id": 46,
    "question": "The central focus of learner-centred education is: / learner-centred education का मुख्य focus है:",
    "options": [
      "Teacher performance / teacher performance",
      "Learner needs, agency and meaningful learning / learner needs, agency और meaningful learning",
      "Syllabus speed / syllabus speed",
      "Silence / silence"
    ],
    "answer": 1,
    "explanation": "Learner-centred education gives learners an active role and responds to their needs, prior knowledge and development. / इसमें learners को active role दिया जाता है और उनकी needs, prior knowledge तथा development को ध्यान में रखा जाता है।"
  },
  {
    "id": 47,
    "question": "Which classroom best represents learner-centred education? / कौन-सी classroom learner-centred है?",
    "options": [
      "Teacher lectures throughout / teacher पूरे समय lecture देता है",
      "Students investigate a problem, discuss and justify solutions / students problem investigate करके discussion और justification करते हैं",
      "Students copy notes / notes copy करते हैं",
      "Teacher gives all answers / teacher सभी answers देता है"
    ],
    "answer": 1,
    "explanation": "Learner-centred classrooms promote agency, inquiry, interaction and reasoning. / learner-centred classrooms agency, inquiry, interaction और reasoning को बढ़ावा देती हैं।"
  },
  {
    "id": 48,
    "question": "In learner-centred pedagogy, the teacher primarily acts as: / learner-centred pedagogy में teacher की मुख्य भूमिका:",
    "options": [
      "Controller / controller",
      "Facilitator, guide and designer of learning experiences / facilitator, guide और learning experiences का designer",
      "Sole speaker / sole speaker",
      "Sole evaluator / sole evaluator"
    ],
    "answer": 1,
    "explanation": "The teacher remains professionally responsible but designs conditions for active learning. / teacher professional responsibility रखते हुए active learning के लिए conditions design करता है।"
  },
  {
    "id": 49,
    "question": "Learner agency refers to the learner's ability to: / Learner agency का अर्थ है learner की:",
    "options": [
      "Avoid responsibility / responsibility से बचने की",
      "Make purposeful choices and take ownership of learning / purposeful choices करने और learning का ownership लेने की",
      "Ignore feedback / feedback ignore करने की",
      "Teach the teacher / teacher को पढ़ाने की"
    ],
    "answer": 1,
    "explanation": "Agency involves purposeful participation, choice, responsibility and self-direction. / agency में purposeful participation, choice, responsibility और self-direction शामिल हैं।"
  },
  {
    "id": 50,
    "question": "Which assessment practice is most learner-centred? / कौन-सा assessment practice learner-centred है?",
    "options": [
      "Only final exam / केवल final exam",
      "Self-assessment, peer feedback and formative feedback / self-assessment, peer feedback और formative feedback",
      "Public ranking / public ranking",
      "Marks without feedback / बिना feedback marks"
    ],
    "answer": 1,
    "explanation": "Multiple feedback sources help learners monitor and improve their own learning. / विभिन्न feedback sources learners को अपने learning की निगरानी और सुधार में मदद करते हैं।"
  },
  {
    "id": 51,
    "question": "A learner-centred teacher begins a new unit by eliciting prior knowledge. Why? / teacher unit शुरू करने से पहले prior knowledge क्यों जानता है?",
    "options": [
      "To waste time / समय नष्ट करने के लिए",
      "To connect new learning with existing mental frameworks / नए learning को existing mental frameworks से जोड़ने के लिए",
      "To grade students / grading के लिए",
      "To avoid teaching / teaching से बचने के लिए"
    ],
    "answer": 1,
    "explanation": "Prior knowledge strongly influences how new information is interpreted. / prior knowledge नए information की interpretation को प्रभावित करता है।"
  },
  {
    "id": 52,
    "question": "Which practice is least compatible with learner-centred education? / कौन-सी practice learner-centred education से least compatible है?",
    "options": [
      "Inquiry / inquiry",
      "Collaboration / collaboration",
      "Choice within meaningful boundaries / meaningful boundaries में choice",
      "One-way transmission with no student interaction / बिना interaction one-way transmission"
    ],
    "answer": 3,
    "explanation": "Learner-centred pedagogy requires meaningful learner participation. / learner-centred pedagogy में meaningful learner participation आवश्यक है।"
  },
  {
    "id": 53,
    "question": "A teacher allows students to choose between a poster, presentation or written explanation to demonstrate understanding. This mainly promotes: / विद्यार्थी poster, presentation या written explanation में choice कर सकते हैं। यह मुख्यतः बढ़ाता है:",
    "options": [
      "Learner agency and varied expression / learner agency और varied expression",
      "Teacher control / teacher control",
      "Rote memory / rote memory",
      "Standardization / standardization"
    ],
    "answer": 0,
    "explanation": "Choice in how understanding is demonstrated can increase agency while preserving the learning objective. / learning objective बनाए रखते हुए expression में choice agency बढ़ा सकती है।"
  },
  {
    "id": 54,
    "question": "Learner-centred education does NOT mean: / learner-centred education का अर्थ यह नहीं है:",
    "options": [
      "Students are active / students active हों",
      "Teacher has no role / teacher की कोई role न हो",
      "Prior knowledge matters / prior knowledge महत्वपूर्ण हो",
      "Learning is interactive / learning interactive हो"
    ],
    "answer": 1,
    "explanation": "The teacher's role changes from sole transmitter to facilitator, designer and responsive professional. / teacher की भूमिका sole transmitter से facilitator, designer और responsive professional की ओर बदलती है।"
  },
  {
    "id": 55,
    "question": "A principal wants to increase learner-centred practice. Which professional development is most useful? / learner-centred practice बढ़ाने के लिए कौन-सा professional development अधिक उपयोगी है?",
    "options": [
      "Only handwriting training / केवल handwriting training",
      "Training in inquiry, questioning, formative assessment and differentiation / inquiry, questioning, formative assessment और differentiation",
      "More clerical training / अधिक clerical training",
      "Only lecture skills / केवल lecture skills"
    ],
    "answer": 1,
    "explanation": "These practices directly support active, responsive learning. / ये practices active और responsive learning को सीधे support करती हैं।"
  },
  {
    "id": 56,
    "question": "A learner-centred classroom should ideally have: / learner-centred classroom में ideally होना चाहिए:",
    "options": [
      "Psychological safety and intellectual challenge / psychological safety और intellectual challenge",
      "No challenge / no challenge",
      "Constant teacher talk / constant teacher talk",
      "Fear of mistakes / mistakes का fear"
    ],
    "answer": 0,
    "explanation": "Learners need safety to participate and challenge to develop higher-order thinking. / participation के लिए safety और higher-order thinking के लिए challenge दोनों आवश्यक हैं।"
  },
  {
    "id": 57,
    "question": "Which is a valid concern about poorly implemented learner-centred teaching? / poorly implemented learner-centred teaching की valid concern क्या है?",
    "options": [
      "It can become unstructured if goals and scaffolding are absent. / goals और scaffolding न होने पर यह unstructured हो सकती है।",
      "It always improves learning automatically. / यह हमेशा automatically learning सुधारती है।",
      "Teacher becomes unnecessary. / teacher unnecessary हो जाता है।",
      "Assessment becomes impossible. / assessment impossible हो जाता है।"
    ],
    "answer": 0,
    "explanation": "Learner-centred does not mean unguided; structure, scaffolding and clear outcomes remain important. / learner-centred का अर्थ unguided learning नहीं है; structure, scaffolding और clear outcomes आवश्यक हैं।"
  },
  {
    "id": 58,
    "question": "Which question best reflects learner-centred planning? / कौन-सा प्रश्न learner-centred planning को दर्शाता है?",
    "options": [
      "What can I say for 40 minutes? / मैं 40 मिनट क्या बोलूँ?",
      "What should learners understand, do and experience by the end? / अंत तक learners क्या समझें, करें और अनुभव करें?",
      "How many pages can I cover? / कितने pages cover करूँ?",
      "How can I keep them silent? / उन्हें silent कैसे रखूँ?"
    ],
    "answer": 1,
    "explanation": "Learner-centred planning starts with intended learner outcomes and experiences. / learner-centred planning intended learner outcomes और experiences से शुरू होती है।"
  },
  {
    "id": 59,
    "question": "Peer learning is learner-centred because it: / Peer learning learner-centred क्यों है?",
    "options": [
      "Eliminates teacher responsibility / teacher responsibility खत्म करता है",
      "Uses interaction among learners as a resource for learning / learners की interaction को learning resource बनाता है",
      "Requires no goals / goals नहीं चाहिए",
      "Avoids feedback / feedback avoid करता है"
    ],
    "answer": 1,
    "explanation": "Peer interaction can support explanation, perspective-taking and collaborative problem solving. / peer interaction explanation, perspective-taking और collaborative problem solving को support कर सकती है।"
  },
  {
    "id": 60,
    "question": "The best indicator that learner-centred pedagogy is working is: / learner-centred pedagogy के सफल होने का best indicator:",
    "options": [
      "Students are busy / students busy हैं",
      "Students show deeper understanding, agency and ability to apply learning / students deeper understanding, agency और application दिखाते हैं",
      "Teacher speaks less only / teacher कम बोलता है",
      "Classroom looks noisy / classroom noisy दिखती है"
    ],
    "answer": 1,
    "explanation": "Teacher talk time alone is not the criterion; quality of learner engagement and learning evidence matter. / केवल teacher talk time criterion नहीं है; learner engagement और learning evidence महत्वपूर्ण हैं।"
  },
  {
    "id": 61,
    "question": "Teacher-centred instruction is most defensible when: / Teacher-centred instruction कब उचित हो सकती है?",
    "options": [
      "Direct explanation is efficient for a new, complex concept. / नए complex concept के लिए direct explanation efficient हो।",
      "Students must always be passive. / students हमेशा passive रहें।",
      "Inquiry is impossible. / inquiry impossible हो।",
      "Teacher preference is the only criterion. / teacher preference ही criterion हो।"
    ],
    "answer": 0,
    "explanation": "Direct instruction can be useful for explicit teaching of new or complex material, especially when followed by active practice and feedback. / नए या complex material के explicit teaching में direct instruction उपयोगी हो सकती है, विशेषकर active practice और feedback के साथ।"
  },
  {
    "id": 62,
    "question": "Learner-centred teaching is especially appropriate when the objective is to develop: / learner-centred teaching विशेष रूप से कब उपयुक्त है?",
    "options": [
      "Only recall / केवल recall",
      "Inquiry, reasoning, collaboration and application / inquiry, reasoning, collaboration और application",
      "Dictation speed / dictation speed",
      "Silent copying / silent copying"
    ],
    "answer": 1,
    "explanation": "Open-ended and higher-order outcomes benefit from active learner engagement. / open-ended और higher-order outcomes active learner engagement से लाभान्वित होते हैं।"
  },
  {
    "id": 63,
    "question": "The false dichotomy between teacher-centred and learner-centred approaches can be avoided by: / दोनों approaches को rigid opposites मानने से बचने का तरीका:",
    "options": [
      "Using only one approach / केवल एक approach",
      "Selecting and combining strategies according to goals and context / goals और context के अनुसार strategies चुनना और combine करना",
      "Avoiding direct instruction / direct instruction avoid करना",
      "Avoiding group work / group work avoid करना"
    ],
    "answer": 1,
    "explanation": "Effective teachers use a repertoire of approaches rather than a single ideology. / effective teachers एक ही ideology के बजाय विभिन्न approaches का purposeful repertoire उपयोग करते हैं।"
  },
  {
    "id": 64,
    "question": "A teacher gives a 10-minute explanation, then students solve problems collaboratively and receive feedback. This is best described as: / teacher 10-minute explanation के बाद collaborative problem solving और feedback कराता है। यह है:",
    "options": [
      "Pure teacher-centred / pure teacher-centred",
      "Blended/strategically sequenced instruction / blended या strategically sequenced instruction",
      "Pure learner-centred with no teacher role / teacher role रहित learner-centred",
      "Rote learning / rote learning"
    ],
    "answer": 1,
    "explanation": "Short explicit instruction can be integrated with active learning. / short explicit instruction को active learning के साथ integrate किया जा सकता है।"
  },
  {
    "id": 65,
    "question": "Which feature most clearly distinguishes learner-centred from teacher-centred practice? / सबसे स्पष्ट distinction:",
    "options": [
      "Presence of a teacher / teacher की presence",
      "Degree of learner agency and cognitive participation / learner agency और cognitive participation की degree",
      "Use of textbooks / textbooks का use",
      "Use of a board / board का use"
    ],
    "answer": 1,
    "explanation": "Both approaches have teachers, but learner-centred practice increases meaningful learner agency and participation. / दोनों में teacher होते हैं, पर learner-centred practice meaningful agency और participation बढ़ाती है।"
  },
  {
    "id": 66,
    "question": "A large class makes some direct instruction necessary. What should a good teacher do next? / large class में direct instruction आवश्यक है। अच्छा teacher आगे क्या करेगा?",
    "options": [
      "Stop student participation entirely / participation बंद कर देगा",
      "Add questioning, pair work, checks for understanding and practice / questioning, pair work, checks और practice जोड़ेगा",
      "Only lecture / केवल lecture",
      "Skip assessment / assessment skip"
    ],
    "answer": 1,
    "explanation": "Class size influences feasibility but does not eliminate opportunities for active learning. / class size feasibility को प्रभावित करता है, लेकिन active learning के अवसर समाप्त नहीं करता।"
  },
  {
    "id": 67,
    "question": "Which is a limitation of excessive teacher-centred instruction? / excessive teacher-centred instruction की limitation:",
    "options": [
      "It can reduce learner agency and opportunities for practice/reasoning. / learner agency और practice/reasoning के अवसर घट सकते हैं।",
      "It always causes failure. / हमेशा failure होता है।",
      "It cannot transmit information. / information transmit नहीं कर सकती।",
      "It cannot be structured. / structured नहीं हो सकती।"
    ],
    "answer": 0,
    "explanation": "Overuse may reduce opportunities for learners to think, practice and make decisions. / अत्यधिक उपयोग learners के thinking, practice और decision-making के अवसर घटा सकता है।"
  },
  {
    "id": 68,
    "question": "Which is a limitation of poorly designed learner-centred instruction? / poorly designed learner-centred instruction की limitation:",
    "options": [
      "It can overload novices if guidance is insufficient. / insufficient guidance से novices overload हो सकते हैं।",
      "It always reduces learning. / हमेशा learning घटती है।",
      "It eliminates collaboration. / collaboration खत्म होती है।",
      "It prevents feedback. / feedback रोकती है।"
    ],
    "answer": 0,
    "explanation": "Novices often need scaffolding and explicit guidance; discovery without support can be inefficient. / novices को scaffolding और explicit guidance की आवश्यकता होती है; बिना support discovery inefficient हो सकती है।"
  },
  {
    "id": 69,
    "question": "A teacher chooses lecture for a factual introduction and inquiry for application. This demonstrates: / factual introduction में lecture और application में inquiry चुनना दर्शाता है:",
    "options": [
      "Methodological flexibility / methodological flexibility",
      "Inconsistency / inconsistency",
      "Lack of planning / lack of planning",
      "Teacher-centred ideology / teacher-centred ideology"
    ],
    "answer": 0,
    "explanation": "Different objectives may require different instructional strategies. / अलग objectives के लिए अलग strategies उपयुक्त हो सकती हैं।"
  },
  {
    "id": 70,
    "question": "The best basis for deciding between teacher-centred and learner-centred methods is: / methods के बीच decision का best basis:",
    "options": [
      "Fashion / fashion",
      "Learning objective, learner characteristics, content and context / learning objective, learner characteristics, content और context",
      "Teacher age / teacher age",
      "Classroom decoration / classroom decoration"
    ],
    "answer": 1,
    "explanation": "Method choice should be evidence-informed and aligned with the intended learning. / method choice evidence-informed और intended learning से aligned होना चाहिए।"
  },
  {
    "id": 71,
    "question": "In a teacher-centred classroom, students can still be cognitively active when the teacher: / teacher-centred classroom में students cognitively active कब रह सकते हैं?",
    "options": [
      "Uses demanding questions and guided problem solving / demanding questions और guided problem solving करता है",
      "Talks continuously without interaction / बिना interaction लगातार बोलता है",
      "Dictates everything / सब dictate करता है",
      "Prevents questions / questions रोकता है"
    ],
    "answer": 0,
    "explanation": "Teacher-led instruction can still involve active thinking when learners answer, reason, predict and solve. / teacher-led instruction में भी learners answer, reason, predict और solve करके active रह सकते हैं।"
  },
  {
    "id": 72,
    "question": "A principal criticizes every lecture as 'bad pedagogy'. The most balanced view is: / principal हर lecture को bad pedagogy कहता है। balanced view:",
    "options": [
      "Lecture is always bad. / lecture हमेशा bad है।",
      "Lecture can be appropriate for some purposes; effectiveness depends on design and evidence. / lecture कुछ उद्देश्यों के लिए उचित हो सकता है; effectiveness design और evidence पर निर्भर है।",
      "Only projects are valid. / केवल projects valid हैं।",
      "Students should teach themselves. / students self-teach करें।"
    ],
    "answer": 1,
    "explanation": "No single method is universally best; appropriateness depends on purpose, learners and implementation. / कोई एक method universally best नहीं; purpose, learners और implementation महत्वपूर्ण हैं।"
  },
  {
    "id": 73,
    "question": "Which classroom has the strongest balance? / कौन-सी classroom strongest balance दिखाती है?",
    "options": [
      "Teacher controls every step / teacher हर step control करता है",
      "Teacher provides structure while learners actively reason, practice and reflect / teacher structure देता है जबकि learners reason, practice और reflect करते हैं",
      "No structure / कोई structure नहीं",
      "Students copy silently / students silently copy"
    ],
    "answer": 1,
    "explanation": "High-quality instruction combines guidance with meaningful learner activity. / high-quality instruction guidance और meaningful learner activity को combine करती है।"
  },
  {
    "id": 74,
    "question": "A teacher uses a flipped model: students access basic content before class, then solve problems with teacher support. The dominant classroom feature is: / flipped model में students basic content पहले देखते हैं और class में problems solve करते हैं। dominant feature:",
    "options": [
      "Active application and guided learning / active application और guided learning",
      "Pure lecture / pure lecture",
      "Pure rote learning / pure rote learning",
      "No teacher role / no teacher role"
    ],
    "answer": 0,
    "explanation": "Flipped learning shifts class time toward active application while retaining teacher guidance. / flipped learning class time को active application की ओर shift करता है और teacher guidance बनाए रखता है।"
  },
  {
    "id": 75,
    "question": "Which statement is most defensible for a school policy? / school policy के लिए सबसे defensible statement:",
    "options": [
      "Ban teacher-centred methods. / teacher-centred methods ban करें।",
      "Require teachers to choose methods based on learning goals and evidence. / teachers को learning goals और evidence के आधार पर methods चुनने को कहें।",
      "Ban group work. / group work ban करें।",
      "Mandate one method. / one method mandate करें।"
    ],
    "answer": 1,
    "explanation": "Instructional leadership should promote purposeful pedagogical choice rather than rigid method mandates. / instructional leadership को rigid mandates के बजाय purposeful pedagogical choice promote करनी चाहिए।"
  },
  {
    "id": 76,
    "question": "In a modern learner-centred classroom, the teacher is primarily a: / modern learner-centred classroom में teacher मुख्यतः है:",
    "options": [
      "Knowledge dictator / knowledge dictator",
      "Facilitator, mentor and instructional designer / facilitator, mentor और instructional designer",
      "Passive observer / passive observer",
      "Clerk / clerk"
    ],
    "answer": 1,
    "explanation": "The teacher designs, scaffolds, questions, assesses and supports learning. / teacher design, scaffold, question, assess और support करता है।"
  },
  {
    "id": 77,
    "question": "The learner's role in constructivist learning is primarily to: / constructivist learning में learner की भूमिका:",
    "options": [
      "Receive facts / facts receive करना",
      "Construct and revise understanding through active engagement / active engagement से understanding construct और revise करना",
      "Copy teacher / teacher copy करना",
      "Wait for answers / answers का wait करना"
    ],
    "answer": 1,
    "explanation": "Constructivism emphasizes active meaning-making and revision based on experience and evidence. / constructivism active meaning-making और experience/evidence के आधार पर revision पर जोर देता है।"
  },
  {
    "id": 78,
    "question": "A teacher uses questioning rather than immediately giving answers. This mainly develops: / teacher तुरंत answer देने के बजाय questioning करता है। इससे मुख्यतः विकसित होता है:",
    "options": [
      "Dependence / dependence",
      "Thinking and learner autonomy / thinking और learner autonomy",
      "Memorisation only / केवल memorisation",
      "Silence / silence"
    ],
    "answer": 1,
    "explanation": "Well-designed questions can prompt reasoning, metacognition and independent problem solving. / अच्छी questioning reasoning, metacognition और independent problem solving को बढ़ा सकती है।"
  },
  {
    "id": 79,
    "question": "The teacher's role in formative assessment is to: / formative assessment में teacher की role:",
    "options": [
      "Only assign grades / केवल grades देना",
      "Elicit evidence, interpret it and adapt instruction / evidence लेना, interpret करना और instruction adapt करना",
      "Rank students / ranking करना",
      "Wait until annual exam / annual exam तक wait करना"
    ],
    "answer": 1,
    "explanation": "Formative assessment is useful when evidence informs next instructional steps. / formative assessment तब उपयोगी है जब evidence अगले instructional steps को inform करे।"
  },
  {
    "id": 80,
    "question": "The learner's role in self-assessment is to: / self-assessment में learner:",
    "options": [
      "Judge others only / केवल दूसरों को judge करे",
      "Compare performance with criteria and identify next steps / criteria से performance compare करके next steps पहचानें",
      "Avoid standards / standards avoid करे",
      "Give final certification / certification दे"
    ],
    "answer": 1,
    "explanation": "Self-assessment supports metacognition when criteria are clear and learners use evidence to improve. / clear criteria और evidence के साथ self-assessment metacognition support करता है।"
  },
  {
    "id": 81,
    "question": "A teacher provides a worked example, then gradually removes support. This is called: / teacher worked example देता है और धीरे-धीरे support हटाता है। इसे कहते हैं:",
    "options": [
      "Scaffolding / scaffolding",
      "Punishment / punishment",
      "Segregation / segregation",
      "Rote drill / rote drill"
    ],
    "answer": 0,
    "explanation": "Scaffolding provides temporary support that is reduced as learner competence increases. / scaffolding temporary support है जिसे competence बढ़ने पर कम किया जाता है।"
  },
  {
    "id": 82,
    "question": "Which teacher behaviour best promotes learner autonomy? / learner autonomy बढ़ाने वाला best teacher behaviour:",
    "options": [
      "Answer every question / हर question का answer देना",
      "Teach strategies and gradually transfer responsibility / strategies सिखाकर responsibility धीरे-धीरे transfer करना",
      "Prevent choices / choices रोकना",
      "Correct every minor error immediately / हर छोटी error तुरंत correct करना"
    ],
    "answer": 1,
    "explanation": "Autonomy develops when learners acquire strategies and responsibility for decisions and monitoring. / autonomy strategies और responsibility के विकास से आती है।"
  },
  {
    "id": 83,
    "question": "A learner explains a concept to peers. The most likely benefit is: / learner peers को concept explain करता है। benefit:",
    "options": [
      "Deeper processing and communication / deeper processing और communication",
      "Less understanding always / हमेशा less understanding",
      "No learning / no learning",
      "Only entertainment / entertainment"
    ],
    "answer": 0,
    "explanation": "Explaining requires retrieval, organization and justification, which can deepen understanding. / explanation retrieval, organization और justification की मांग करता है।"
  },
  {
    "id": 84,
    "question": "The teacher should respond to errors primarily by: / teacher errors पर primarily कैसे respond करे?",
    "options": [
      "Shaming the learner / learner को shame करना",
      "Using errors as information for feedback and next teaching steps / errors को feedback और next teaching steps के लिए information मानना",
      "Ignoring all errors / सभी errors ignore करना",
      "Punishing immediately / तुरंत punish करना"
    ],
    "answer": 1,
    "explanation": "Errors can reveal misconceptions and guide constructive feedback. / errors misconceptions दिखा सकते हैं और constructive feedback guide कर सकते हैं।"
  },
  {
    "id": 85,
    "question": "A learner-centred teacher maintains high expectations while providing differentiated support. This reflects: / high expectations + differentiated support किसे दर्शाता है?",
    "options": [
      "Lowering standards / standards घटाना",
      "Equity-oriented teaching / equity-oriented teaching",
      "Teacher-centred control / teacher-centred control",
      "Rote teaching / rote teaching"
    ],
    "answer": 1,
    "explanation": "Equity means providing appropriate support so learners can reach meaningful goals. / equity का अर्थ meaningful goals तक पहुँचने के लिए appropriate support देना है।"
  },
  {
    "id": 86,
    "question": "A principal wants teachers to improve questioning. Which question is highest order? / principal questioning improve करना चाहता है। कौन-सा question higher order है?",
    "options": [
      "What is the definition? / definition क्या है?",
      "When did it happen? / कब हुआ?",
      "Which explanation is more convincing and why? / कौन-सी explanation अधिक convincing है और क्यों?",
      "Name the three terms. / तीन terms बताओ"
    ],
    "answer": 2,
    "explanation": "Evaluation and justification require higher-order reasoning beyond recall. / evaluation और justification recall से आगे higher-order reasoning मांगते हैं।"
  },
  {
    "id": 87,
    "question": "The teacher as a facilitator does NOT mean: / facilitator teacher का अर्थ यह नहीं है:",
    "options": [
      "Designing learning experiences / learning experiences design करना",
      "Providing scaffolding / scaffolding देना",
      "Abandoning responsibility for learning / learning की responsibility छोड़ देना",
      "Using feedback / feedback use करना"
    ],
    "answer": 2,
    "explanation": "Facilitation is active professional guidance, not withdrawal. / facilitation active professional guidance है, responsibility छोड़ना नहीं।"
  },
  {
    "id": 88,
    "question": "Learners become self-regulated when they can: / learners self-regulated कब बनते हैं?",
    "options": [
      "Plan, monitor and evaluate their learning / learning plan, monitor और evaluate कर सकें",
      "Memorise without reflection / बिना reflection memorise करें",
      "Depend on teacher / teacher पर depend करें",
      "Avoid goals / goals avoid करें"
    ],
    "answer": 0,
    "explanation": "Self-regulation involves planning, monitoring and evaluating learning. / self-regulation में planning, monitoring और evaluating शामिल हैं।"
  },
  {
    "id": 89,
    "question": "A teacher notices a misconception through discussion and immediately changes the next activity. This demonstrates: / discussion से misconception पता चलने पर teacher next activity बदलता है। यह है:",
    "options": [
      "Responsive teaching / responsive teaching",
      "Rigid teaching / rigid teaching",
      "Summative teaching / summative teaching",
      "Non-teaching / non-teaching"
    ],
    "answer": 0,
    "explanation": "Responsive teaching uses evidence of learner thinking to adjust instruction. / responsive teaching learner thinking के evidence के आधार पर instruction adjust करता है।"
  },
  {
    "id": 90,
    "question": "The most appropriate relationship between teacher and learner is: / teacher-learner relationship:",
    "options": [
      "Authority versus obedience only / केवल authority-obedience",
      "Professional guidance with learner participation, respect and shared responsibility / professional guidance के साथ learner participation, respect और shared responsibility",
      "Teacher dependence / teacher dependence",
      "Complete learner independence from teacher / teacher से पूर्ण independence"
    ],
    "answer": 1,
    "explanation": "Healthy pedagogy combines teacher expertise with learner agency and respectful interaction. / healthy pedagogy teacher expertise को learner agency और respectful interaction से जोड़ती है।"
  },
  {
    "id": 91,
    "question": "Case: A school has high syllabus completion but low conceptual application. As Vice Principal, the best first intervention is: / केस: syllabus completion high है लेकिन conceptual application low है। VP का best first intervention:",
    "options": [
      "Increase homework / homework बढ़ाना",
      "Review classroom evidence, tasks and assessments for alignment / classroom evidence, tasks और assessments की alignment review करना",
      "Increase assembly time / assembly time बढ़ाना",
      "Reduce student discussion / discussion कम करना"
    ],
    "answer": 1,
    "explanation": "Instructional leadership begins with diagnosis using evidence, then targeted improvement. / instructional leadership evidence-based diagnosis से शुरू होकर targeted improvement की ओर जाता है।"
  },
  {
    "id": 92,
    "question": "Case: Teachers argue that learner-centred methods mean 'students can do whatever they want'. The best leadership response is: / teachers मानते हैं learner-centred का अर्थ students कुछ भी करें। best response:",
    "options": [
      "Agree / सहमत हों",
      "Clarify that learner-centred teaching includes clear outcomes, structure, scaffolding and learner agency / स्पष्ट करें कि इसमें clear outcomes, structure, scaffolding और agency शामिल हैं",
      "Ban learner-centred methods / learner-centred methods ban करें",
      "Remove assessment / assessment हटाएँ"
    ],
    "answer": 1,
    "explanation": "Learner-centred does not mean unstructured; teacher guidance remains essential. / learner-centred का अर्थ unstructured नहीं; teacher guidance essential है।"
  },
  {
    "id": 93,
    "question": "Case: A teacher uses lecture for every lesson because it 'saves time'. Student reasoning is weak. What should the Principal recommend? / teacher हर lesson lecture करता है क्योंकि time बचता है; reasoning weak है। Principal क्या recommend करे?",
    "options": [
      "More lecture / more lecture",
      "Combine concise explanation with questioning, problem solving and feedback / concise explanation के साथ questioning, problem solving और feedback",
      "Stop teaching content / content teaching बंद करें",
      "Give only worksheets / केवल worksheets दें"
    ],
    "answer": 1,
    "explanation": "Efficiency should not come at the cost of opportunities for reasoning and application. / efficiency के कारण reasoning और application के opportunities खत्म नहीं होने चाहिए।"
  },
  {
    "id": 94,
    "question": "Case: A novice teacher asks whether group work should be used in every lesson. Best answer: / novice teacher पूछता है group work हर lesson में होना चाहिए? Best answer:",
    "options": [
      "Yes, always / हाँ, हमेशा",
      "No method should be mandatory; use it when it serves the objective and is well structured / कोई method mandatory नहीं; objective के अनुसार structured use करें",
      "Never / कभी नहीं",
      "Only for weak students / केवल weak students"
    ],
    "answer": 1,
    "explanation": "Instructional methods should serve learning goals rather than become rituals. / methods learning goals की सेवा करें, ritual न बनें।"
  },
  {
    "id": 95,
    "question": "Case: Students perform well on MCQ recall tests but cannot explain answers. What assessment shift is most appropriate? / recall MCQ में अच्छे लेकिन answers explain नहीं कर सकते। assessment shift:",
    "options": [
      "More recall MCQs only / और recall MCQs",
      "Add explanation, application and reasoning tasks / explanation, application और reasoning tasks जोड़ें",
      "Remove assessment / assessment हटाएँ",
      "Increase copying / copying बढ़ाएँ"
    ],
    "answer": 1,
    "explanation": "Assessment should sample the cognitive processes intended by the curriculum and instruction. / assessment को curriculum और instruction में अपेक्षित cognitive processes को sample करना चाहिए।"
  },
  {
    "id": 96,
    "question": "Case: A principal sees a very quiet class and concludes teaching is excellent. The best critique is: / principal शांत class देखकर excellent teaching conclude करता है। critique:",
    "options": [
      "Silence alone is not evidence of learning / केवल silence learning का evidence नहीं है",
      "Silence always means failure / silence हमेशा failure है",
      "Noise always means learning / noise हमेशा learning है",
      "Discipline is irrelevant / discipline irrelevant है"
    ],
    "answer": 0,
    "explanation": "Engagement and learning evidence matter more than noise level alone. / noise level से अधिक engagement और learning evidence महत्वपूर्ण हैं।"
  },
  {
    "id": 97,
    "question": "Case: A teacher differentiates examples and scaffolds but keeps common learning outcomes. This is best described as: / teacher examples और scaffolds differentiate करता है लेकिन common outcomes रखता है। यह है:",
    "options": [
      "Equitable differentiation / equitable differentiation",
      "Lowering standards / standards lowering",
      "Segregation / segregation",
      "No differentiation / no differentiation"
    ],
    "answer": 0,
    "explanation": "Differentiation changes support/pathways while meaningful common goals can remain. / differentiation support/pathways बदल सकती है जबकि meaningful common goals बने रह सकते हैं।"
  },
  {
    "id": 98,
    "question": "Case: In a classroom observation, the teacher asks only factual questions. As instructional leader, the most useful feedback is: / observation में केवल factual questions हैं। useful feedback:",
    "options": [
      "Ask more questions of the same type / same type questions बढ़ाएँ",
      "Gradually include probing, reasoning, application and evaluative questions / probing, reasoning, application और evaluative questions शामिल करें",
      "Stop questioning / questioning बंद करें",
      "Ask students to memorize more / memorise more"
    ],
    "answer": 1,
    "explanation": "Questioning should sample different cognitive demands and support thinking. / questioning को विभिन्न cognitive demands और thinking support करना चाहिए।"
  },
  {
    "id": 99,
    "question": "Case: Teachers want a policy requiring one 'best' teaching method across all subjects. As Principal, you should: / teachers सभी subjects में one best method चाहते हैं। Principal:",
    "options": [
      "Mandate lecture / lecture mandate करें",
      "Reject one-size-fits-all and promote evidence-based method selection / one-size-fits-all reject करके evidence-based method selection promote करें",
      "Mandate group work / group work mandate करें",
      "Let teachers use no assessment / no assessment"
    ],
    "answer": 1,
    "explanation": "Different subjects, objectives and learner needs require flexible pedagogical choices. / अलग subjects, objectives और learner needs flexible choices की मांग करते हैं।"
  },
  {
    "id": 100,
    "question": "Case: A teacher says, 'If students struggle, I will simply lower the learning objective.' Best leadership response: / teacher कहता है struggle होने पर objective lower कर दूँगा। best response:",
    "options": [
      "Always lower it / हमेशा lower करें",
      "First identify barriers and provide scaffolding, differentiation and feedback / पहले barriers identify करके scaffolding, differentiation और feedback दें",
      "Ignore struggling students / ignore करें",
      "Remove the task / task हटाएँ"
    ],
    "answer": 1,
    "explanation": "Support should address barriers without unnecessarily reducing meaningful expectations. / support barriers को address करे और meaningful expectations को अनावश्यक रूप से कम न करे।"
  }
];
