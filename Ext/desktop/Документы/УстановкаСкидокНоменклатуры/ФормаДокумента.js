Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:638px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСкидки',
			text: 'Тип скидки:',
			style: 'position:absolute;left:334px;top:81px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:536px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:394px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:394px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:638px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипСкидкиНаценки',
			style: 'position:absolute;left:406px;top:81px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент:',
			style: 'position:absolute;left:294px;top:182px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:352px;top:182px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеУсловия',
			text: 'Значение условия (USD):',
			style: 'position:absolute;left:8px;top:103px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеУсловия',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:334px;top:33px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:406px;top:33px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничение',
			text: 'Ограничение (USD):',
			style: 'position:absolute;left:414px;top:182px;width:108px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:524px;top:182px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловие',
			text: 'Условие:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Условие',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:209px;width:622px;height:180px;',
			height: 180,width: 622,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'22',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Артикул',
					width:'111',
				},
				{
					text:'Номенклатура',
					width:'213',
				},
				{
					text:'Характеристика номенклатуры',
					width:'123',
				},
				{
					text:'Качество',
					width:'130',
				},
				{
					text:'%',
					width:'51',
				},
				{
					text:'Огр.',
					width:'51',
				},
			]
		},
					]
				},
				{
					title:'Ценовые группы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Ценовая группа',
					width:'211',
				},
				{
					text:'Качество',
					width:'180',
				},
				{
					text:'%',
					width:'38',
				},
				{
					text:'Огр.',
					width:'119',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Бонусы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'235',
				},
				{
					text:'Характеристика номенклатуры',
					width:'235',
				},
				{
					text:'Качество',
					width:'128',
				},
				{
					text:'Кол-во',
					width:'96',
				},
				{
					text:'Ед.',
					width:'96',
				},
				{
					text:'Спец. предложение',
					width:'235',
				},
				{
					text:'Характеристика спец. предложения',
					width:'235',
				},
				{
					text:'Кол-во',
					width:'87',
				},
				{
					text:'Ед.',
					width:'89',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'Состав номенклатуры',
				},
				{
					text:'Состав бонусов',
				},
			]
		},
					]
				},
				{
					title:'Получатели скидки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДляВсехДней',
			text: 'Для всех дней с:',
			style: 'position:absolute;left:323px;top:135px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'22',
				},
				{
					text:'Контрагент',
					width:'169',
				},
				{
					text:'Получатель',
					width:'208',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Время действия скидки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщееВремяНачало',
			style: 'position:absolute;left:416px;top:135px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщееВремяОкончание',
			style: 'position:absolute;left:531px;top:135px;width:83px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:106px;',
			height: 106,width: 608,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'День недели',
					width:'210',
				},
				{
					text:'Начало',
					width:'68',
				},
				{
					text:'Окончание',
					width:'68',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'Действие отметить все',
				},
				{
					text:'Действие снять все',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСкидки',
			text: 'Скидка с:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:94px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:176px;top:57px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:194px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСкидки',
			text: 'Вид скидки:',
			style: 'position:absolute;left:334px;top:57px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСкидки',
			style: 'position:absolute;left:406px;top:57px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всей номенклатуры',
			style: 'position:absolute;left:14px;top:138px;width:143px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всех получателей',
			style: 'position:absolute;left:162px;top:138px;width:137px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По дням недели',
			style: 'position:absolute;left:305px;top:138px;width:100px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:14px;top:182px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:72px;top:182px;width:220px;height:19px;',
		},
	]
});