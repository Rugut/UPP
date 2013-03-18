Ext.define('Отчеты.ABCАнализПродаж.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка ABC-анализ продаж',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:522px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:506px;height:330px;',
			height: 330,width: 506,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:68px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:30px;width:207px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:6px;top:51px;width:163px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:150px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:168px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:97px;width:350px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:164px;width:492px;height:140px;',
			height: 140,width: 492,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Представление',
					width:'339',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:140px;width:492px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:74px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:6px;top:74px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:6px;top:97px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:250px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:280px;',
			height: 280,width: 492,
			columns:
			[
				{
					text:'Поле',
					width:'266',
				},
				{
					text:'Тип',
					width:'170',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:492px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:492px;height:231px;',
			height: 231,width: 492,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Поле',
					width:'157',
				},
				{
					text:'Тип сравнения',
					width:'112',
				},
				{
					text:'Значение',
					width:'81',
				},
				{
					text:'С',
					width:'81',
				},
				{
					text:'По',
					width:'81',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:49px;width:492px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'АВС-класс',
			style: 'position:absolute;left:6px;top:6px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКласс',
			style: 'position:absolute;left:234px;top:6px;width:264px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:6px;width:127px;height:19px;',
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:280px;',
			height: 280,width: 492,
			columns:
			[
				{
					text:'Поле',
					width:'290',
				},
				{
					text:'Направление сортировки',
					width:'138',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:492px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'АВС-классы',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'А-класс:',
			style: 'position:absolute;left:12px;top:27px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентAКласса',
			style: 'position:absolute;left:65px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'B-класс:',
			style: 'position:absolute;left:12px;top:51px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентBКласса',
			style: 'position:absolute;left:65px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'С-класс:',
			style: 'position:absolute;left:12px;top:75px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:65px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: '%',
			style: 'position:absolute;left:147px;top:51px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: '%',
			style: 'position:absolute;left:147px;top:27px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: '%',
			style: 'position:absolute;left:147px;top:75px;width:13px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
	]
});