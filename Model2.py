from transformers import pipeline #Maybe we can use this model because this one has less emotion
classifier = pipeline("text-classification",model='SamLowe/roberta-base-go_emotions', return_all_scores=True)
prediction = classifier("Fuck you", )

for i in prediction:
    print(i)
