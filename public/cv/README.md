# Emplacement du CV PDF

Déposez votre CV au format PDF dans ce dossier (par exemple : `CV_Emine_AGATT.pdf`), puis mettez à jour le champ `cvPdfPath.value` dans `src/config/profile.ts` :

```ts
cvPdfPath: {
  value: '/cv/CV_Emine_AGATT.pdf',
  placeholder: 'CV PDF à déposer dans /public/cv/',
},
```

Dès que `value` est renseigné, le bouton **« Télécharger mon CV »** s'affichera automatiquement dans la section Hero et dans la section Contact.
