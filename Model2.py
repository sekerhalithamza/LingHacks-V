from transformers import pipeline #Maybe we can use this model because this one has less emotion
classifier = pipeline("text-classification",model='bhadresh-savani/roberta-base-emotion', return_all_scores=True)
prediction = classifier("Fuck you", )

for i in prediction:
    print(i)
