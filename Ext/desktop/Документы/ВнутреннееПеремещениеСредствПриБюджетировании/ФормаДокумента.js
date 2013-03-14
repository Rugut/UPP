Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:355px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внутреннее перемещение средств при бюджетировании',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Файлы',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:330px;width:653px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Период планирования:',
			style: 'position:absolute;left:336px;top:33px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланирования',
			style: 'position:absolute;left:462px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:426px;top:57px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:164px;top:226px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияИсточник',
			style: 'position:absolute;left:254px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Количество:',
			style: 'position:absolute;left:14px;top:226px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоИсточник',
			style: 'position:absolute;left:98px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Валюта:',
			style: 'position:absolute;left:14px;top:201px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаИсточник',
			style: 'position:absolute;left:98px;top:201px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Курс :',
			style: 'position:absolute;left:180px;top:201px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсИсточник',
			style: 'position:absolute;left:238px;top:201px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Сумма:',
			style: 'position:absolute;left:14px;top:250px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:98px;top:250px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:277px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:277px;width:221px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Текущий статус:',
			style: 'position:absolute;left:336px;top:277px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:426px;top:277px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПриемник',
			text: 'Сумма приемника = 100 USD',
			style: 'position:absolute;left:340px;top:250px;width:305px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:301px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:301px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФОИсточник',
			style: 'position:absolute;left:98px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'ЦФО:',
			style: 'position:absolute;left:14px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектИсточник',
			style: 'position:absolute;left:98px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Проект:',
			style: 'position:absolute;left:14px;top:129px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентИсточник',
			style: 'position:absolute;left:98px;top:153px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'Контрагент:',
			style: 'position:absolute;left:14px;top:153px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатураИсточник',
			style: 'position:absolute;left:98px;top:177px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Номенклатура:',
			style: 'position:absolute;left:14px;top:177px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Валюта:',
			style: 'position:absolute;left:340px;top:202px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаПриемник',
			style: 'position:absolute;left:426px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Курс :',
			style: 'position:absolute;left:508px;top:202px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсПриемник',
			style: 'position:absolute;left:566px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФОПриемник',
			style: 'position:absolute;left:426px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'ЦФО:',
			style: 'position:absolute;left:340px;top:106px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПриемник',
			style: 'position:absolute;left:426px;top:130px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Проект:',
			style: 'position:absolute;left:340px;top:130px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентПриемник',
			style: 'position:absolute;left:426px;top:154px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Контрагент:',
			style: 'position:absolute;left:340px;top:154px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатураПриемник',
			style: 'position:absolute;left:426px;top:178px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'Номенклатура:',
			style: 'position:absolute;left:340px;top:178px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстВалютаИсточника',
			text: 'USD',
			style: 'position:absolute;left:207px;top:250px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:492px;top:226px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияПриемник',
			style: 'position:absolute;left:582px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Количество:',
			style: 'position:absolute;left:340px;top:226px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПриемник',
			style: 'position:absolute;left:426px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: '',
			style: 'position:absolute;left:480px;top:33px;width:115px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'ПлюсПериод',
			text: '+',
			style: 'position:absolute;left:594px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВыборПериода',
			text: '',
			style: 'position:absolute;left:616px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'МинусПериод',
			text: '-',
			style: 'position:absolute;left:462px;top:33px;width:19px;height:19px;',
		},
	]
});