# Effects catalogue

## Approved

### Spotlight

A pointer-reactive, blurred olive spotlight changes the apparent colour of the text it crosses. It is implemented as a local Lab stage, not a page cursor replacement. Requirements before reuse: preserve base-text contrast, provide a static touch fallback, and avoid layout reads per frame where possible.

## Experiments

| Effect | Intent | Interaction |
| --- | --- | --- |
| Aurora haze | diffuse colour atmosphere | pointer-responsive position |
| Glass lens | local tactile emphasis | pointer-responsive position |
| Soft grid | subtle spatial structure | pointer-responsive position |

Effects must never be the only carrier of meaning. They should be isolated to their stage, respect reduced motion, and be tested on lower-power devices before production use.
