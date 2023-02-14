# Wine Quality Prediction

![License](https://img.shields.io/github/license/zS1L3NT/mldp?style=for-the-badge) ![Languages](https://img.shields.io/github/languages/count/zS1L3NT/mldp?style=for-the-badge) ![Top Language](https://img.shields.io/github/languages/top/zS1L3NT/mldp?style=for-the-badge) ![Commit Activity](https://img.shields.io/github/commit-activity/y/zS1L3NT/mldp?style=for-the-badge) ![Last commit](https://img.shields.io/github/last-commit/zS1L3NT/mldp?style=for-the-badge)

This is a repository that contains the code for a wine quality prediction project. I first built the model with Scikit Learn, then I deployed it on Flask and used React as the frontend.

## Motivation

I needed a deliverable for my MLDP (Machine Learning for Developers) submissions so I decided to try this dataset for fun.

## Subrepositories

### [`py-jupyter-mldp`](py-jupyter-mldp)

This is the Jupyter Notebook that contains the code for the model building and evaluation.

### [`py-flask-mldp`](py-flask-mldp)

This is the Flask backend that serves the model as an API.

### [`web-react-mldp`](web-react-mldp)

This is the React frontend that consumes the Flask API.

## Features

-   Chemical make-up of the wine used as features
-   Predict wine quality (low, medium or high)

## Usage

```
$ python py-flask-mldp/main.py
```

## Credits

I got quite a bit of the help from Kaggle here and there but I can't really attribute a lot of the credit to one specific develope developer.

## Built with

-   Python
    -   Jupyter
        -   [![matplotlib](https://img.shields.io/badge/matplotlib-3.6.3-blue?style=flat-square)](https://pypi.org/project/matplotlib/3.6.3)
        -   [![numpy](https://img.shields.io/badge/numpy-1.24.2-blue?style=flat-square)](https://pypi.org/project/numpy/1.24.2)
        -   [![pandas](https://img.shields.io/badge/pandas-1.5.3-blue?style=flat-square)](https://pypi.org/project/pandas/1.5.3)
        -   [![scikit-learn](https://img.shields.io/badge/scikit--learn-1.2.1-blue?style=flat-square)](https://pypi.org/project/scikit-learn/1.2.1)
        -   [![scikit-optimize](https://img.shields.io/badge/scikit--optimize-0.9.0-blue?style=flat-square)](https://pypi.org/project/scikit-optimize/0.9.0)
        -   [![seaborn](https://img.shields.io/badge/seaborn-0.12.2-blue?style=flat-square)](https://pypi.org/project/seaborn/0.12.2)
    -   Flask
        -   [![Flask](https://img.shields.io/badge/Flask-2.2.2-blue?style=flat-square)](https://pypi.org/project/Flask/2.2.2)
        -   [![Flask-Cors](https://img.shields.io/badge/Flask--Cors-3.0.10-blue?style=flat-square)](https://pypi.org/project/Flask-Cors/3.0.10)
-   React
    -   TypeScript
        -   [![@types/react](https://img.shields.io/badge/%40types%2Freact-%5E18.0.27-red?style=flat-square)](https://npmjs.com/package/@types/react/v/18.0.27)
        -   [![@types/react-dom](https://img.shields.io/badge/%40types%2Freact--dom-%5E18.0.10-red?style=flat-square)](https://npmjs.com/package/@types/react-dom/v/18.0.10)
        -   [![typescript](https://img.shields.io/badge/typescript-%5E4.9.3-red?style=flat-square)](https://npmjs.com/package/typescript/v/4.9.3)
    -   React
        -   [![react](https://img.shields.io/badge/react-%5E18.2.0-red?style=flat-square)](https://npmjs.com/package/react/v/18.2.0)
        -   [![react-dom](https://img.shields.io/badge/react--dom-%5E18.2.0-red?style=flat-square)](https://npmjs.com/package/react-dom/v/18.2.0)
    -   Chakra UI
        -   [![@chakra-ui/react](https://img.shields.io/badge/%40chakra--ui%2Freact-%5E2.4.9-red?style=flat-square)](https://npmjs.com/package/@chakra-ui/react/v/2.4.9)
        -   [![@emotion/react](https://img.shields.io/badge/%40emotion%2Freact-%5E11.10.5-red?style=flat-square)](https://npmjs.com/package/@emotion/react/v/11.10.5)
        -   [![@emotion/styled](https://img.shields.io/badge/%40emotion%2Fstyled-%5E11.10.5-red?style=flat-square)](https://npmjs.com/package/@emotion/styled/v/11.10.5)
        -   [![framer-motion](https://img.shields.io/badge/framer--motion-%5E9.0.2-red?style=flat-square)](https://npmjs.com/package/framer-motion/v/9.0.2)
    -   Vite
        -   [![@vitejs/plugin-react](https://img.shields.io/badge/%40vitejs%2Fplugin--react-%5E3.1.0-red?style=flat-square)](https://npmjs.com/package/@vitejs/plugin-react/v/3.1.0)
        -   [![vite](https://img.shields.io/badge/vite-%5E4.1.0-red?style=flat-square)](https://npmjs.com/package/vite/v/4.1.0)
        -   [![vite-plugin-singlefile](https://img.shields.io/badge/vite--plugin--singlefile-%5E0.13.3-red?style=flat-square)](https://npmjs.com/package/vite-plugin-singlefile/v/0.13.3)
    -   Miscellaneous
        -   [![axios](https://img.shields.io/badge/axios-%5E1.3.2-red?style=flat-square)](https://npmjs.com/package/axios/v/1.3.2)