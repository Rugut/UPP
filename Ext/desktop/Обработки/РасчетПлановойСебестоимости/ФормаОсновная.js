Ext.define('Обработки.РасчетПлановойСебестоимости.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'<Назад',
				},
				'-',
				{
					text:'Далее>',
				},
				'-',
				{
					text:'Закрыть',
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата основной спецификации:',
			style: 'position:absolute;left:6px;top:24px;width:160px;height:19px;text-align:left;',
		},
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
					text:'',
					width:'22',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
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
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:50px;width:613px;height:19px;',
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
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'150',
				},
				{
					text:'Характеристика',
					width:'150',
				},
				{
					text:'Спецификация',
					width:'100',
				},
				{
					text:'Вид номенклатуры',
					width:'110',
				},
				{
					text:'Номенклатурная группа',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:609px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Настройка расчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчета',
			style: 'position:absolute;left:178px;top:30px;width:231px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить',
			style: 'position:absolute;left:6px;top:80px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить',
			style: 'position:absolute;left:6px;top:105px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить',
			style: 'position:absolute;left:6px;top:130px;width:172px;height:19px;',
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
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:273px;top:55px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить "Метод расчета:"',
			style: 'position:absolute;left:6px;top:30px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить "За период с":',
			style: 'position:absolute;left:6px;top:55px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:178px;top:80px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:178px;top:105px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:178px;top:130px;width:131px;height:19px;',
		},
					]
				},
				{
					title:'Производственные расходы',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:25px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодРасчетаМатериальные',
			style: 'position:absolute;left:136px;top:25px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:25px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:47px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:69px;width:131px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьМатериальныеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:47px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаМатериальные',
			text: '...',
			style: 'position:absolute;left:322px;top:47px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМатериальныеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:47px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодОпределенияСтоимости',
			style: 'position:absolute;left:136px;top:69px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМетодОпределенияСтоимости',
			text: 'Определение стоимости:',
			style: 'position:absolute;left:6px;top:69px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:131px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:153px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:175px;width:131px;height:19px;',
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
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:213px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:235px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:257px;width:131px;height:19px;',
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
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:295px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:317px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:339px;width:131px;height:19px;',
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
			xtype: 'label',
			name: 'Надпись4',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:131px;width:130px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьОплатаТрудаНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:153px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОплатаТруда',
			text: '...',
			style: 'position:absolute;left:322px;top:153px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплатаТрудаПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:153px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:213px;width:130px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьАмортизацияНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:235px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаАмортизация',
			text: '...',
			style: 'position:absolute;left:322px;top:235px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизацияПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:235px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:295px;width:130px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьПрочиеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:317px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрочие',
			text: '...',
			style: 'position:absolute;left:322px;top:317px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрочиеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:317px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:136px;top:91px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен номенклатуры:',
			style: 'position:absolute;left:6px;top:91px;width:130px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Косвенные расходы',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:383px;top:26px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:383px;top:48px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:383px;top:70px;width:131px;height:19px;',
		},
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
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:383px;top:109px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:383px;top:131px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:383px;top:153px;width:131px;height:19px;',
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
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:383px;top:192px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:383px;top:214px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:383px;top:236px;width:131px;height:19px;',
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
			xtype: 'label',
			name: 'Надпись7',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:26px;width:130px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьОбщепроизводственныеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:48px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбщепроизводственные',
			text: '...',
			style: 'position:absolute;left:321px;top:48px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбщепроизводственныеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:48px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:111px;width:130px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьОбщехозяйственныеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:133px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбщехозяйственные',
			text: '...',
			style: 'position:absolute;left:321px;top:133px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбщехозяйственныеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:133px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:192px;width:130px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьБракВПроизводствеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:214px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаБракВПроизводстве',
			text: '...',
			style: 'position:absolute;left:321px;top:214px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБракВПроизводствеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:214px;width:20px;height:19px;text-align:center;',
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
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура / статья затрат',
					width:'205',
				},
				{
					text:'Характеристика / характер затрат',
					width:'173',
				},
				{
					text:'Ед.',
					width:'57',
				},
				{
					text:'Вид затрат',
					width:'100',
				},
				{
					text:'Затрата',
					width:'100',
				},
				{
					text:'Сумма',
					width:'112',
				},
				{
					text:'Валюта',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:611px;height:24px;',
			items:
			[
				'-',
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'Изменить...',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Установить',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Установить плановую себестоимость',
			style: 'position:absolute;left:6px;top:13px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить цены номенклатуры',
			style: 'position:absolute;left:6px;top:38px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сформировать отчет',
			style: 'position:absolute;left:6px;top:63px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрыть форму расчета плановой себестоимости',
			style: 'position:absolute;left:6px;top:89px;width:335px;height:19px;',
		},
					]
				},
			]
		},
	]
});