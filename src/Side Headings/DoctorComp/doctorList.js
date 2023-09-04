const docs = [
  {
    "id":"1",
    "name": "Dr. G.Chakradhar Reddy",
    "location": "kurnool",
    "rating": "4",
    "specialization": "psychiartist",
    "about":"Dr. G.Chakradhar Reddy is a Healthcare Practitioner who practices the field of psychiatry in various prestigious institutions. He has 14 years of experience with clinical specialization in General Adult Psychiatry, Marital Problems, Anxiety Disorders & Depression. He is a Medical Graduate & Post Graduate both from the prestigious Maulana Azad Medical College, New Delhi.",
    "startTime":9,
    "endTime":17,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5"

    
  },
  {
    "id":"2",
    "name": "Dr. B.Sai Vamshi",
    "location": "banglore",
    "specialization": "dermatologist",
    "rating": "5",
    "about":"39 years experience practising in Hyderabad.MBBS from Rangaraya Medical College, Kakinada, Andhra University, 1981 MD, Venereology from Rangaraya Medical College, Kakinada, Andhra University,1989",
    "startTime":13,
    "endTime":21,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"3",
    "name": "Dr. C.Srikala",
    "location": "banglore",
    "specialization": "gynecologist",
    "rating": "4",
    "about":"Dr. C.Srikala is a well-known Obstetrician and Gynaecologist with experience of more than 21 years. She has competence over the surgery of High-risk pregnancy, Infertility, Laparoscopy, Hysteroscopy, Colposcopy, Adolescent Gynecology, and Management of menopause",
    "startTime":12,
    "endTime":20,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"4",
    "name": "Dr. A.Meeraj",
    "location": "kurnool",
    "rating": "4",
    "specialization": "cardiaogy",
    "about":"A. Meeraj is an Indian cardiothoracic and vascular surgeon, reported to have performed over 20,500 Coronary artery bypass surgeries. He was honoured by the Government of India, in 2013, by bestowing on him the Padma Shri, the fourth highest civilian award, for his contributions to the fields of medicine and medical education.",
    "startTime":9,
    "endTime":17,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
    
  },
  {
    "id":"5",
    "name": "Dr.M.Mounsih",
    "location": "kurnool",
    "specialization": "dentist",
    "rating": "5",
    "about":"Dr. M.Mounish is a practicing Endodontist and Conservative Dentist with over 9 years of experience, after procuring the bachelor's degree, she pursued a maters course in Restorative dentistry & Endodontology, specializing in Single sitting Root Canal Treatment, cosmetic dentistry and smile makeovers.",
    "startTime":13,
    "endTime":21,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"6",
    "name": "Dr. C.Jagan",
    "location": "hyderabad",
    "specialization": "general-physician",
    "rating": "4",
    "about":"Dr. C.Jagan is one of the most esteemed doctor in Hyderabad.He is registered as a Medical Practitioner at Haryana State Medical Council since 2007. Registration Number - 2807",
    "startTime":12,
    "endTime":20,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"7",
    "name": "Dr. K.Kalyan",
    "location": "banglore",
    "specialization": "opthamologist",
    "rating": "3",
    "about":"Dr.K.Kalyan is an ophthalmologist with 22+ years of experience.He has done more than 8000 of Retinal detachment and other Vitreoretinal disorders.He is a member of Indian Medical Association. Dr.K.Kalyan has completed MBBS, Post Graduate Diploma and MS from Gujarat University.",
    "startTime":9,
    "endTime":17,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"8",
    "name": "Dr.E.Uma",
    "location": "banglore",
    "specialization": "opthamologist",
    "rating": "3",
    "about":"Dr.E.Uma is an ophthalmologist with 22+ years of experience.She has done more than 8000 of Retinal detachment and other Vitreoretinal disorders.She is a member of Indian Medical Association.Dr. Uma has completed MBBS, Post Graduate Diploma and MS from Gujarat University.",
    "startTime":10,
    "endTime":18,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"9",
    "name": "Dr.T.Bhanupriya",
    "location": "banglore",
    "specialization": "general-physician",
    "rating": "3.5",
    "about":"Dr.T.Bhanupriya is one of the most esteemed doctor in Banglore. She is registered as a Medical Practitioner at Haryana State Medical Council since 2007. Registration Number - 2807",
    "startTime":8,
    "endTime":16,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"10",
    "name": "Dr.Meera",
    "location": "banglore",
    "specialization": "cardiology",
    "rating": "5",
    "about":"Meera is an Indian cardiothoracic and vascular surgeon, reported to have performed over 20,500 Coronary artery bypass surgeries. He was honoured by the Government of India, in 2013, by bestowing on him the Padma Shri, the fourth highest civilian award, for his contributions to the fields of medicine and medical education.",
    "startTime":13,
    "endTime":21,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"11",
    "name": "Dr.Alok Ranjan",
    "location": "Chennai",
    "specialization": "dermatologist",
    "rating": "5",
    "about":"39 years experience practising in Hyderabad.MBBS from Rangaraya Medical College, Kakinada, Andhra University, 1981 MD, Venereology from Rangaraya Medical College, Kakinada, Andhra University,1989",
    "startTime":14,
    "endTime":22,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"12",
    "name": "Dr.Gopal",
    "location": "Hyderabad",
    "specialization": "neuro-surgery",
    "rating": "5",
    "about":"39 years experience practising in Hyderabad.MBBS from Rangaraya Medical College, Kakinada, Andhra University, 1981 MD, Venereology from Rangaraya Medical College, Kakinada, Andhra University,1989",
    "startTime":12,
    "endTime":20,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"13",
    "name": "Dr.Vijay",
    "location": "Chennai",
    "specialization": "oncology",
    "rating": "5",
    "about":"Dr. Vijay started his oncology career at the esteemed and well known Cancer Institute, Adyar (Chennai). He has performed surgeries at live surgical workshops and has been championing the cause for cancer awareness and been a crusader against Tobacco for the last 15 years through various cancer foundations. He is widely respected for his clinical and surgical skills.",
    "startTime":10,
    "endTime":18,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"14",
    "name": "Dr.Jayesh",
    "location": "Mumbai",
    "specialization": "orthopedician",
    "rating": "5",
    "about":"Dr. Lakshman is an internationally trained and experienced senior orthopedic and joint replacement surgeon having 15 years of rich scientific experience.He has done both MBBS and MS in orthopedics from Delhi University; he was a gold medalist in the post graduation program. He went on to do several fellowships in countries like Germany, Austria, USA, Hong Kong, Singapore etc. He also did his Mch in orthopedics.",
    "startTime":12,
    "endTime":20,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"15",
    "name": "Dr.Lakshman",
    "location": "Mumbai",
    "specialization": "gastro-entology",
    "rating": "5",
    "about":"Dr. Lakshman is a Gastroenterologist in Sushant Lok I, Gurgaon and has an experience of 53 years in this field. Dr. J.C Vij practices at Max Hospital in Sushant Lok I, Gurgaon,BLK-Max Super Speciality Hospital in Pusa Road, Delhi and Max Super Speciality Hospital - Saket West Wing in Saket, Delhi. He completed MBBS from PUNJAB UNIVERSITY, CHANDIGARH in 1970,MD - Medicine from Kurukshetra University in 1975 and DM - Gastroenterology from All India Institute of Medical Sciences, New Delhi in 1978.",
    "startTime":10,
    "endTime":18,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"16",
    "name": "Dr.Anshu",
    "location": "Chennai",
    "specialization": "dermatology",
    "rating": "5",
    "about":"39 years experience practising in Hyderabad.MBBS from Rangaraya Medical College, Kakinada, Andhra University, 1981 MD, Venereology from Rangaraya Medical College, Kakinada, Andhra University,1989",
    "startTime":11,
    "endTime":19,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"17",
    "name": "Dr.Samantha",
    "location": "Hyderabad",
    "specialization": "psychiatrist",
    "rating": "5",
    "about":"Dr. Manish Jain is a Healthcare Practitioner who practices the field of psychiatry in various prestigious institutions. He has 14 years of experience with clinical specialization in General Adult Psychiatry, Marital Problems, Anxiety Disorders & Depression. He is a Medical Graduate & Post Graduate both from the prestigious Maulana Azad Medical College, New Delhi.",
    "startTime":14,
    "endTime":22,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"18",
    "name": "Dr.Sowmya",
    "location": "Kurnool",
    "specialization": "cardiology",
    "rating": "5",
    "about":"Meera is an Indian cardiothoracic and vascular surgeon, reported to have performed over 20,500 Coronary artery bypass surgeries. He was honoured by the Government of India, in 2013, by bestowing on him the Padma Shri, the fourth highest civilian award, for his contributions to the fields of medicine and medical education.",
    "startTime":9,
    "endTime":17,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"19",
    "name": "Dr.Manjulatha",
    "location": "Hyderabad",
    "specialization": "gynecologist",
    "rating": "5",
    "about":"Dr Majulatha is a practising obstetrician and gynaecologist with an experience of over 13 years and specialises in high-risk pregnancies and deliveries high-risk Caesarean sections, history copies and laparoscopy‘s, fibroid removals, uterus removal, treatment for ovarian cyst, safe abortion practises, infertility treatments, irregular bleeding and PCOD treatmen",
    "startTime":11,
    "endTime":19,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"20",
    "name": "Dr. Sharadha",
    "location": "Mumbai",
    "specialization": "cardiology",
    "rating": "5",
    "about":"39 years experience practising in Hyderabad.MBBS from Rangaraya Medical College, Kakinada, Andhra University, 1981 MD, Venereology from Rangaraya Medical College, Kakinada, Andhra University,1989",
    "startTime":10,
    "endTime":18,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"21",
    "name": "Dr.Krishna",
    "location": "Chennai",
    "specialization": "oncology",
    "rating": "5",
    "about":"Dr. Krishna started his oncology career at the esteemed and well known Cancer Institute, Adyar (Chennai). He has performed surgeries at live surgical workshops and has been championing the cause for cancer awareness and been a crusader against Tobacco for the last 15 years through various cancer foundations. He is widely respected for his clinical and surgical skills.",
    "strattime":11,
    "endTime":19,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"22",
    "name": "Dr.Keerti",
    "location": "Kurnool",
    "specialization": "dentist",
    "rating": "5",
    "about":"Dr. Keerti is a practicing Endodontist and Conservative Dentist with over 9 years of experience, after procuring the bachelor's degree, she pursued a maters course in Restorative dentistry & Endodontology, specializing in Single sitting Root Canal Treatment, cosmetic dentistry and smile makeovers.",
    "startTime":13,
    "endTime":21,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  },
  {
    "id":"23",
    "name": "Dr.Srikar",
    "location": "Chennai",
    "specialization": "general-physician",
    "rating": "5",
    "about":"Dr.C.Srikar is one of the most esteemed doctor in Banglore. He is registered as a Medical Practitioner at Haryana State Medical Council since 2007. Registration Number - 2807",
    "startTime":9,
    "endTime":17,
    "address":"Apollo hospitals,gandhi nagar",
    "expe":"5",
  }
  
];
export default docs;