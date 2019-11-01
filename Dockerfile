FROM python:3.7

ENV PYTHONBUFFERED 1

RUN mkdir /hamzar

WORKDIR /hamzar

ADD . /hamzar/

EXPOSE 8000

RUN pip install -r pip_requirements.txt

CMD python manage.py runserver 0.0.0.0:8000
