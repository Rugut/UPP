Ext.define('Обработки.РасчетПлановойСебестоимости.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 643,
	iconCls: 'bogus',
	title: 'Расчет плановой себестоимости',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:643px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Действие1',
				},
				{
					text:'Назад',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:627px;height:384px;',
			height: 384,width: 627,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:169px;top:24px;width:110px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:114px;width:613px;height:244px;',
			height: 244,width: 613,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:90px;width:613px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:609px;height:328px;',
			height: 328,width: 609,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СпецификацияНоменклатуры',
				},
				{
					text:'ВидНоменклатуры',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:609px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьТаблицу',
				},
			]
		},
					]
				},
				{
					title:'НастройкаРасчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчета',
			style: 'position:absolute;left:178px;top:30px;width:231px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Процент',
			style: 'position:absolute;left:309px;top:80px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:309px;top:105px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДо',
			style: 'position:absolute;left:309px;top:130px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:178px;top:55px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:295px;top:55px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:390px;top:55px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'ПроизводственныеРасходы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаМатериальные',
			style: 'position:absolute;left:136px;top:25px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентМатериальные',
			style: 'position:absolute;left:516px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаМатериальные',
			style: 'position:absolute;left:516px;top:47px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоМатериальные',
			style: 'position:absolute;left:516px;top:69px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачМатериальные',
			style: 'position:absolute;left:136px;top:47px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонМатериальные',
			style: 'position:absolute;left:236px;top:47px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаМатериальные',
			text: '...',
			style: 'position:absolute;left:322px;top:47px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодОпределенияСтоимости',
			style: 'position:absolute;left:136px;top:69px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатаТруда',
			style: 'position:absolute;left:516px;top:131px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОплатаТруда',
			style: 'position:absolute;left:516px;top:153px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоОплатаТруда',
			style: 'position:absolute;left:516px;top:175px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентАмортизация',
			style: 'position:absolute;left:516px;top:213px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаАмортизация',
			style: 'position:absolute;left:516px;top:235px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоАмортизация',
			style: 'position:absolute;left:516px;top:257px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПрочие',
			style: 'position:absolute;left:516px;top:295px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПрочие',
			style: 'position:absolute;left:516px;top:317px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоПрочие',
			style: 'position:absolute;left:516px;top:339px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаОплатаТруда',
			style: 'position:absolute;left:136px;top:131px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачОплатаТруда',
			style: 'position:absolute;left:136px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонОплатаТруда',
			style: 'position:absolute;left:236px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОплатаТруда',
			text: '...',
			style: 'position:absolute;left:322px;top:153px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаАмортизация',
			style: 'position:absolute;left:136px;top:213px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачАмортизация',
			style: 'position:absolute;left:136px;top:235px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонАмортизация',
			style: 'position:absolute;left:236px;top:235px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаАмортизация',
			text: '...',
			style: 'position:absolute;left:322px;top:235px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаПрочие',
			style: 'position:absolute;left:136px;top:295px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачПрочие',
			style: 'position:absolute;left:136px;top:317px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонПрочие',
			style: 'position:absolute;left:236px;top:317px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрочие',
			text: '...',
			style: 'position:absolute;left:322px;top:317px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:136px;top:91px;width:205px;height:19px;',
		},
					]
				},
				{
					title:'КосвенныеРасходы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОбщепроизводственные',
			style: 'position:absolute;left:517px;top:26px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОбщепроизводственные',
			style: 'position:absolute;left:517px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоОбщепроизводственные',
			style: 'position:absolute;left:517px;top:70px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОбщехозяйственные',
			style: 'position:absolute;left:517px;top:109px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОбщехозяйственные',
			style: 'position:absolute;left:517px;top:131px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоОбщехозяйственные',
			style: 'position:absolute;left:517px;top:153px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентБракВПроизводстве',
			style: 'position:absolute;left:517px;top:192px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаБракВПроизводстве',
			style: 'position:absolute;left:517px;top:214px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкруглитьДоБракВПроизводстве',
			style: 'position:absolute;left:517px;top:236px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаОбщепроизводственные',
			style: 'position:absolute;left:136px;top:26px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачОбщепроизводственные',
			style: 'position:absolute;left:136px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонОбщепроизводственные',
			style: 'position:absolute;left:236px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбщепроизводственные',
			text: '...',
			style: 'position:absolute;left:321px;top:48px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаОбщехозяйственные',
			style: 'position:absolute;left:136px;top:111px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачОбщехозяйственные',
			style: 'position:absolute;left:136px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонОбщехозяйственные',
			style: 'position:absolute;left:236px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбщехозяйственные',
			text: '...',
			style: 'position:absolute;left:321px;top:133px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаБракВПроизводстве',
			style: 'position:absolute;left:136px;top:192px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачБракВПроизводстве',
			style: 'position:absolute;left:136px;top:214px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонБракВПроизводстве',
			style: 'position:absolute;left:236px;top:214px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаБракВПроизводстве',
			text: '...',
			style: 'position:absolute;left:321px;top:214px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Результат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:611px;height:328px;',
			height: 328,width: 611,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'НоменклатураСтатьяЗатрат',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ВидЗатрат',
				},
				{
					text:'Затрата',
				},
				{
					text:'Сумма',
				},
				{
					text:'Валюта',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:611px;height:24px;',
			items:
			[
				{
					text:'Рассчитать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
				{
					title:'Установить',
					items:
					[
					]
				},
			]
		},
	]
});