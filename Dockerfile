FROM python:3.7

ENV PYTHONBUFFERED 1

RUN mkdir /hamzar

WORKDIR /hamzar

ADD . /hamzar/

EXPOSE 8000

RUN pip install -r pip_requirements.txt

CMD gunicorn -b :8000 Hamzar.wsgi
