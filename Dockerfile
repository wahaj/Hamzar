FROM python:3.7

ENV PYTHONBUFFERED 1

RUN mkdir /hamzar

WORKDIR /hamzar

ADD . /hamzar/

RUN pip install -r pip_requirements.txt

