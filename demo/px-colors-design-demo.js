/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* <link rel="import" href="../../marked-element/marked-element.html"/> */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import 'px-sass-doc/css/px-sass-doc-markdown-styles.js';
import '@polymer/prism-element/prism-highlighter.js';
import '@polymer/prism-element/prism-theme-default.js';
import '../css/px-colors-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
  _template: html`
    <style include="px-colors-design-demo-styles"></style>
    <style include="px-sass-doc-markdown-styles"></style>
    <prism-highlighter></prism-highlighter>

    <px-sass-doc module-name="px-colors-design" description="The colors module assigns Sass variables for the Predix Design System default color palette." layer="settings" sassdoc-path="sassdoc.json" dependencies="[]" selected-options="{{selectedOptions}}" hide-demo-container="true">

      <section slot="usage">
<p>
  <strong>Sass Variable</strong><br>
  Once installed in your project, you can refer to any of the Sass color variables from any of your custom Sass code:
</p>

\`\`\`
background-color: \$black;
\`\`\`
      </section>

      <section slot="intro-raw" class="colors-demo">
        <span class="delta">Predix Design System Color Palette</span>
        <p class="u-mb++">The Predix Design System color palette is broken down into the following categories.<br><br><strong>Click on a colored square to copy the RGB value to your clipboard.</strong></p>

        <div class="layout layout--huge">
          <div class="u-mb++ layout__item">
            <div class="epsilon demo-text--gray caps u-mb+">Neutral Palette</div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch white"></span><span class="demo-color-swatch-label">\$white</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray1"></span><span class="demo-color-swatch-label">\$gray1</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray2"></span><span class="demo-color-swatch-label">\$gray2</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray3"></span><span class="demo-color-swatch-label">\$gray3</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray4"></span><span class="demo-color-swatch-label">\$gray4</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray5"></span><span class="demo-color-swatch-label">\$gray5</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray6"></span><span class="demo-color-swatch-label">\$gray6</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray7"></span><span class="demo-color-swatch-label">\$gray7</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray8"></span><span class="demo-color-swatch-label">\$gray8</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray9"></span><span class="demo-color-swatch-label">\$gray9</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray10"></span><span class="demo-color-swatch-label">\$gray10</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray11"></span><span class="demo-color-swatch-label">\$gray11</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray12"></span><span class="demo-color-swatch-label">\$gray12</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray13"></span><span class="demo-color-swatch-label">\$gray13</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray14"></span><span class="demo-color-swatch-label">\$gray14</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray15"></span><span class="demo-color-swatch-label">\$gray15</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray16"></span><span class="demo-color-swatch-label">\$gray16</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray17"></span><span class="demo-color-swatch-label">\$gray17</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray18"></span><span class="demo-color-swatch-label">\$gray18</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray19"></span><span class="demo-color-swatch-label">\$gray19</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch gray20"></span><span class="demo-color-swatch-label">\$gray20</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch black"></span> <span class="demo-color-swatch-label">\$black</span></div>
          </div><!-- end .layout__item -->
          <div class="u-mb++ layout__item">
            <div class="epsilon demo-text--gray caps u-mb+">Alerts and Status</div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-red1"></span><span class="demo-color-swatch-label">\$status-red1</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-red2"></span><span class="demo-color-swatch-label">\$status-red2</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-red3"></span><span class="demo-color-swatch-label">\$status-red3</span></div>
            <div class="demo-color-swatch--container u-mb++"><span class="demo-color-swatch status-red4"></span><span class="demo-color-swatch-label">\$status-red4</span></div>
            <div class="demo-color-swatch--container demo-margin-top-huge"><span class="demo-color-swatch status-orange1"></span><span class="demo-color-swatch-label">\$status-orange1</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-orange2"></span><span class="demo-color-swatch-label">\$status-orange2</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-orange3"></span><span class="demo-color-swatch-label">\$status-orange3</span></div>
            <div class="demo-color-swatch--container u-mb++"><span class="demo-color-swatch status-orange4"></span><span class="demo-color-swatch-label">\$status-orange4</span></div>
            <div class="demo-color-swatch--container demo-margin-top-huge"><span class="demo-color-swatch status-yellow1"></span><span class="demo-color-swatch-label">\$status-yellow1</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-yellow2"></span><span class="demo-color-swatch-label">\$status-yellow2</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-yellow3"></span><span class="demo-color-swatch-label">\$status-yellow3</span></div>
            <div class="demo-color-swatch--container u-mb++"><span class="demo-color-swatch status-yellow4"></span><span class="demo-color-swatch-label">\$status-yellow4</span></div>
            <div class="demo-color-swatch--container demo-margin-top-huge"><span class="demo-color-swatch status-blue1"></span><span class="demo-color-swatch-label">\$status-blue1</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-blue2"></span><span class="demo-color-swatch-label">\$status-blue2</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-blue3"></span><span class="demo-color-swatch-label">\$status-blue3</span></div>
            <div class="demo-color-swatch--container u-mb++"><span class="demo-color-swatch status-blue4"></span><span class="demo-color-swatch-label">\$status-blue4</span></div>
            <div class="demo-color-swatch--container demo-margin-top-huge"><span class="demo-color-swatch status-green1"></span><span class="demo-color-swatch-label">\$status-green1</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-green2"></span><span class="demo-color-swatch-label">\$status-green2</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch status-green3"></span><span class="demo-color-swatch-label">\$status-green3</span></div>
            <div class="demo-color-swatch--container u-mb++"><span class="demo-color-swatch status-green4"></span><span class="demo-color-swatch-label">\$status-green4</span></div>
          </div><!-- end .layout__item -->
          <div class="u-mb++ layout__item">
            <div class="epsilon demo-text--gray caps u-mb+">Actionable Palette</div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch primary-default"></span><span class="demo-color-swatch-label">\$primary-default</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch primary-hover"></span><span class="demo-color-swatch-label">\$primary-hover</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch primary-pressed"></span><span class="demo-color-swatch-label">\$primary-pressed</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch primary-light"></span><span class="demo-color-swatch-label">\$primary-light</span></div>
            <div class="u-mt++ epsilon demo-text--gray caps u-mb+">Selection Palette</div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch select-default"></span><span class="demo-color-swatch-label">\$select-default</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch select-hover"></span><span class="demo-color-swatch-label">\$select-hover</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch select-pressed"></span><span class="demo-color-swatch-label">\$select-pressed</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch select-light"></span><span class="demo-color-swatch-label">\$select-light</span></div>
            <div class="u-mt++ epsilon demo-text--gray caps u-mb+"><strong>Dark </strong>Actionable Palette</div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch d-actionable-default"></span><span class="demo-color-swatch-label">\$d-actionable-default</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch d-actionable-hover"></span><span class="demo-color-swatch-label">\$d-actionable-hover</span></div>
            <div class="demo-color-swatch--container"><span class="demo-color-swatch d-actionable-pressed"></span><span class="demo-color-swatch-label">\$d-actionable-pressed</span></div>
          </div><!-- end .layout__item -->
        </div><!-- end .layout -->

        <div class="u-mb++">
          <div class="epsilon demo-text--gray caps u-mb">Dataviz Color Sets</div>
          <div class="layout layout--huge">
            <div class="layout__item">
              <div class="u-mb u-mt+ demo-text--gray caps">Regular Set</div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue5"></span><span class="demo-color-swatch-label">\$blue5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange5"></span><span class="demo-color-swatch-label">\$orange5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green5"></span><span class="demo-color-swatch-label">\$green5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink4"></span><span class="demo-color-swatch-label">\$pink4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown6"></span><span class="demo-color-swatch-label">\$brown6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple4"></span><span class="demo-color-swatch-label">\$purple4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow5"></span><span class="demo-color-swatch-label">\$yellow5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red6"></span><span class="demo-color-swatch-label">\$red6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray8"></span><span class="demo-color-swatch-label">\$neutral-gray8</span></div>
            </div><!-- end .layout__item -->
            <div class="layout__item">
              <div class="u-mb u-mt+ demo-text--gray caps">Light Set</div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue3"></span><span class="demo-color-swatch-label">\$blue3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange3"></span><span class="demo-color-swatch-label">\$orange3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green3"></span><span class="demo-color-swatch-label">\$green3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink2"></span><span class="demo-color-swatch-label">\$pink2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown4"></span><span class="demo-color-swatch-label">\$brown4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple3"></span><span class="demo-color-swatch-label">\$purple3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow3"></span><span class="demo-color-swatch-label">\$yellow3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red3"></span><span class="demo-color-swatch-label">\$red3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray5"></span><span class="demo-color-swatch-label">\$neutral-gray5</span></div>
            </div><!-- end .layout__item -->
            <div class="layout__item">
              <div class="u-mb u-mt+ demo-text--gray caps">Dark Set</div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue7"></span><span class="demo-color-swatch-label">\$blue7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange7"></span><span class="demo-color-swatch-label">\$orange7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green7"></span><span class="demo-color-swatch-label">\$green7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink6"></span><span class="demo-color-swatch-label">\$pink6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown7"></span><span class="demo-color-swatch-label">\$brown7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple7"></span><span class="demo-color-swatch-label">\$purple7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow7"></span><span class="demo-color-swatch-label">\$yellow7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red7"></span><span class="demo-color-swatch-label">\$red7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray10"></span><span class="demo-color-swatch-label">\$neutral-gray10</span></div>
            </div><!-- end .layout__item -->
          </div><!-- end .layout -->
        </div>

        <div class="demo-margin-top-huge u-mb++">
          <div class="epsilon demo-text--gray caps">Data Visualization Colors</div>
          <div class="layout layout--huge">
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps">Orange</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange1"></span><span class="demo-color-swatch-label">\$orange1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange2"></span><span class="demo-color-swatch-label">\$orange2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange3"></span><span class="demo-color-swatch-label">\$orange3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange4"></span><span class="demo-color-swatch-label">\$orange4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange5"></span><span class="demo-color-swatch-label">\$orange5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange6"></span><span class="demo-color-swatch-label">\$orange6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange7"></span><span class="demo-color-swatch-label">\$orange7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange8"></span><span class="demo-color-swatch-label">\$orange8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange9"></span><span class="demo-color-swatch-label">\$orange9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch orange10"></span><span class="demo-color-swatch-label">\$orange10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps">Yellow</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow1"></span><span class="demo-color-swatch-label">\$yellow1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow2"></span><span class="demo-color-swatch-label">\$yellow2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow3"></span><span class="demo-color-swatch-label">\$yellow3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow4"></span><span class="demo-color-swatch-label">\$yellow4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow5"></span><span class="demo-color-swatch-label">\$yellow5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow6"></span><span class="demo-color-swatch-label">\$yellow6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow7"></span><span class="demo-color-swatch-label">\$yellow7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow8"></span><span class="demo-color-swatch-label">\$yellow8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow9"></span><span class="demo-color-swatch-label">\$yellow9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow10"></span><span class="demo-color-swatch-label">\$yellow10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps">Yellow-Green</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green1"></span><span class="demo-color-swatch-label">\$yellow-green1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green2"></span><span class="demo-color-swatch-label">\$yellow-green2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green3"></span><span class="demo-color-swatch-label">\$yellow-green3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green4"></span><span class="demo-color-swatch-label">\$yellow-green4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green5"></span><span class="demo-color-swatch-label">\$yellow-green5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green6"></span><span class="demo-color-swatch-label">\$yellow-green6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green7"></span><span class="demo-color-swatch-label">\$yellow-green7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green8"></span><span class="demo-color-swatch-label">\$yellow-green8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green9"></span><span class="demo-color-swatch-label">\$yellow-green9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch yellow-green10"></span><span class="demo-color-swatch-label">\$yellow-green10</span></div>
            </div><!-- end .layout__item -->
          </div><!-- end .layout -->
          <div class="layout">
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb u-mb"><span class="demo-text--gray caps u-mb">Green</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green1"></span><span class="demo-color-swatch-label">\$green1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green2"></span><span class="demo-color-swatch-label">\$green2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green3"></span><span class="demo-color-swatch-label">\$green3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green4"></span><span class="demo-color-swatch-label">\$green4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green5"></span><span class="demo-color-swatch-label">\$green5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green6"></span><span class="demo-color-swatch-label">\$green6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green7"></span><span class="demo-color-swatch-label">\$green7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green8"></span><span class="demo-color-swatch-label">\$green8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green9"></span><span class="demo-color-swatch-label">\$green9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch green10"></span><span class="demo-color-swatch-label">\$green10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Teal</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal1"></span><span class="demo-color-swatch-label">\$teal1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal2"></span><span class="demo-color-swatch-label">\$teal2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal3"></span><span class="demo-color-swatch-label">\$teal3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal4"></span><span class="demo-color-swatch-label">\$teal4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal5"></span><span class="demo-color-swatch-label">\$teal5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal6"></span><span class="demo-color-swatch-label">\$teal6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal7"></span><span class="demo-color-swatch-label">\$teal7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal8"></span><span class="demo-color-swatch-label">\$teal8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal9"></span><span class="demo-color-swatch-label">\$teal9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch teal10"></span><span class="demo-color-swatch-label">\$teal10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Aqua</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua1"></span><span class="demo-color-swatch-label">\$aqua1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua2"></span><span class="demo-color-swatch-label">\$aqua2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua3"></span><span class="demo-color-swatch-label">\$aqua3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua4"></span><span class="demo-color-swatch-label">\$aqua4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua5"></span><span class="demo-color-swatch-label">\$aqua5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua6"></span><span class="demo-color-swatch-label">\$aqua6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua7"></span><span class="demo-color-swatch-label">\$aqua7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua8"></span><span class="demo-color-swatch-label">\$aqua8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua9"></span><span class="demo-color-swatch-label">\$aqua9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch aqua10"></span><span class="demo-color-swatch-label">\$aqua10</span></div>
            </div><!-- end .layout__item -->
          </div><!-- end .layout -->
          <div class="layout layout--huge">
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Cyan</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan1"></span><span class="demo-color-swatch-label">\$cyan1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan2"></span><span class="demo-color-swatch-label">\$cyan2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan3"></span><span class="demo-color-swatch-label">\$cyan3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan4"></span><span class="demo-color-swatch-label">\$cyan4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan5"></span><span class="demo-color-swatch-label">\$cyan5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan6"></span><span class="demo-color-swatch-label">\$cyan6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan7"></span><span class="demo-color-swatch-label">\$cyan7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan8"></span><span class="demo-color-swatch-label">\$cyan8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan9"></span><span class="demo-color-swatch-label">\$cyan9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch cyan10"></span><span class="demo-color-swatch-label">\$cyan10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Blue</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue1"></span><span class="demo-color-swatch-label">\$blue1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue2"></span><span class="demo-color-swatch-label">\$blue2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue3"></span><span class="demo-color-swatch-label">\$blue3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue4"></span><span class="demo-color-swatch-label">\$blue4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue5"></span><span class="demo-color-swatch-label">\$blue5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue6"></span><span class="demo-color-swatch-label">\$blue6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue7"></span><span class="demo-color-swatch-label">\$blue7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue8"></span><span class="demo-color-swatch-label">\$blue8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue9"></span><span class="demo-color-swatch-label">\$blue9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch blue10"></span><span class="demo-color-swatch-label">\$blue10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Violet</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet1"></span><span class="demo-color-swatch-label">\$violet1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet2"></span><span class="demo-color-swatch-label">\$violet2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet3"></span><span class="demo-color-swatch-label">\$violet3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet4"></span><span class="demo-color-swatch-label">\$violet4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet5"></span><span class="demo-color-swatch-label">\$violet5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet6"></span><span class="demo-color-swatch-label">\$violet6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet7"></span><span class="demo-color-swatch-label">\$violet7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet8"></span><span class="demo-color-swatch-label">\$violet8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet9"></span><span class="demo-color-swatch-label">\$violet9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch violet10"></span><span class="demo-color-swatch-label">\$violet10</span></div>
            </div><!-- end .layout__item -->
          </div><!-- end .layout -->
          <div class="layout layout--huge">
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Purple</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple1"></span><span class="demo-color-swatch-label">\$purple1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple2"></span><span class="demo-color-swatch-label">\$purple2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple3"></span><span class="demo-color-swatch-label">\$purple3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple4"></span><span class="demo-color-swatch-label">\$purple4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple5"></span><span class="demo-color-swatch-label">\$purple5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple6"></span><span class="demo-color-swatch-label">\$purple6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple7"></span><span class="demo-color-swatch-label">\$purple7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple8"></span><span class="demo-color-swatch-label">\$purple8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple9"></span><span class="demo-color-swatch-label">\$purple9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch purple10"></span><span class="demo-color-swatch-label">\$purple10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Pink</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink1"></span><span class="demo-color-swatch-label">\$pink1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink2"></span><span class="demo-color-swatch-label">\$pink2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink3"></span><span class="demo-color-swatch-label">\$pink3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink4"></span><span class="demo-color-swatch-label">\$pink4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink5"></span><span class="demo-color-swatch-label">\$pink5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink6"></span><span class="demo-color-swatch-label">\$pink6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink7"></span><span class="demo-color-swatch-label">\$pink7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink8"></span><span class="demo-color-swatch-label">\$pink8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink9"></span><span class="demo-color-swatch-label">\$pink9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch pink10"></span><span class="demo-color-swatch-label">\$pink10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Red</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red1"></span><span class="demo-color-swatch-label">\$red1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red2"></span><span class="demo-color-swatch-label">\$red2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red3"></span><span class="demo-color-swatch-label">\$red3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red4"></span><span class="demo-color-swatch-label">\$red4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red5"></span><span class="demo-color-swatch-label">\$red5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red6"></span><span class="demo-color-swatch-label">\$red6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red7"></span><span class="demo-color-swatch-label">\$red7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red8"></span><span class="demo-color-swatch-label">\$red8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red9"></span><span class="demo-color-swatch-label">\$red9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch red10"></span><span class="demo-color-swatch-label">\$red10</span></div>
            </div><!-- end .layout__item -->
          </div><!-- end .layout -->
          <div class="layout layout--huge">
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Brown</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown1"></span><span class="demo-color-swatch-label">\$brown1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown2"></span><span class="demo-color-swatch-label">\$brown2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown3"></span><span class="demo-color-swatch-label">\$brown3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown4"></span><span class="demo-color-swatch-label">\$brown4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown5"></span><span class="demo-color-swatch-label">\$brown5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown6"></span><span class="demo-color-swatch-label">\$brown6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown7"></span><span class="demo-color-swatch-label">\$brown7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown8"></span><span class="demo-color-swatch-label">\$brown8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown9"></span><span class="demo-color-swatch-label">\$brown9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch brown10"></span><span class="demo-color-swatch-label">\$brown10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Neutral Gray</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray1"></span><span class="demo-color-swatch-label">\$neutral-gray1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray2"></span><span class="demo-color-swatch-label">\$neutral-gray2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray3"></span><span class="demo-color-swatch-label">\$neutral-gray3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray4"></span><span class="demo-color-swatch-label">\$neutral-gray4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray5"></span><span class="demo-color-swatch-label">\$neutral-gray5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray6"></span><span class="demo-color-swatch-label">\$neutral-gray6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray7"></span><span class="demo-color-swatch-label">\$neutral-gray7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray8"></span><span class="demo-color-swatch-label">\$neutral-gray8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray9"></span><span class="demo-color-swatch-label">\$neutral-gray9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch neutral-gray10"></span><span class="demo-color-swatch-label">\$neutral-gray10</span></div>
            </div><!-- end .layout__item -->
            <div class="u-mt++ u-mb++ layout__item">
              <div class="demo-color-swatch--container u-mb"><span class="demo-text--gray caps u-mb">Salmon</span><span class="demo-color-swatch-label"></span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon1"></span><span class="demo-color-swatch-label">\$salmon1</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon2"></span><span class="demo-color-swatch-label">\$salmon2</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon3"></span><span class="demo-color-swatch-label">\$salmon3</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon4"></span><span class="demo-color-swatch-label">\$salmon4</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon5"></span><span class="demo-color-swatch-label">\$salmon5</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon6"></span><span class="demo-color-swatch-label">\$salmon6</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon7"></span><span class="demo-color-swatch-label">\$salmon7</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon8"></span><span class="demo-color-swatch-label">\$salmon8</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon9"></span><span class="demo-color-swatch-label">\$salmon9</span></div>
              <div class="demo-color-swatch--container"><span class="demo-color-swatch salmon10"></span><span class="demo-color-swatch-label">\$salmon10</span></div>
            </div><!-- end .layout__item -->
          </div><!-- end .layout -->
        </div>
      </section>

</px-sass-doc>

<px-clipboard id="clippy" style="display: none;"></px-clipboard>
`,

  is: 'px-colors-design-demo',

  listeners: {
    'click': '_copyColor'
  },

  attached : function(){
    this.boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', this.boundHandler);
    this.boundCopyColor = this._copyColor.bind(this);
    dom(this.root).querySelector('.colors-demo').addEventListener('click', this.boundCopyColor);

  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', this.boundHandler);
    dom(this.root).querySelector('.colors-demo').removeEventListener('click', this.boundCopyColor);

  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.importCode = this._importCode();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _importCode : function() {
    return '@import "px-colors-design/_settings.scss";';
  },

  _copyColor: function(evt) {
    var ne = dom(evt);
    if(ne.rootTarget.classList.contains('demo-color-swatch')) {
      var color = window.getComputedStyle(ne.rootTarget)['backgroundColor'];

      this.$.clippy.dataClipboardText = color;
      dom(this.$.clippy.root)
        .querySelector('px-icon')
        .dispatchEvent(new CustomEvent('click'));
    }
  }
});