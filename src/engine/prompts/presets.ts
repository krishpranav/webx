import { PromptSettings } from './types'

export const presets = {
  mocker: {
    temperature: 0.7,
    n: 1, 
    bestOf: 1,
    gptLogitBias: {},
    codexLogitBias: {},
    frequencyPenalty: 0,
    presencePenalty: 0,
  } as PromptSettings,

  json: {
    temperature: 0.8,
    n: 1, 
    bestOf: 1,
    gptLogitBias: {},
    codexLogitBias: {},
    frequencyPenalty: 0,
    presencePenalty: 0,
  } as PromptSettings,

  html: {
    temperature: 0.8,
    n: 1, 
    bestOf: 1,
    gptLogitBias: {
      '75': -1,
      '29625': -1,
      '220': -1,
      '2419': -1,
      '388': -1,
    },
    codexLogitBias: {},
    frequencyPenalty: 0,
    presencePenalty: 0,
    stop: ['<script'],
  } as PromptSettings,

  text: {
    temperature: 0.8,
    n: 1, 
    bestOf: 1,
    gptLogitBias: {
      '75': -1,
      '29625': -1,
      '220': -1,
      '2419': -1,
      '388': -1,
    },
    codexLogitBias: {},
    frequencyPenalty: 0,
    presencePenalty: 0,
  } as PromptSettings,

  script: {
    temperature: 0.7, 
    n: 1, 
    bestOf: 1, 
    gptLogitBias: {
      '1003': -10, 
      '15506': -10,
    },
    codexLogitBias: {},
    frequencyPenalty: 0,
    presencePenalty: 0,
    stop: ['</script>'],
  } as PromptSettings,
}