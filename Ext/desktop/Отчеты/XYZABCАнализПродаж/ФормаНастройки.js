Ext.define('Отчеты.XYZABCАнализПродаж.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка XYZ/ABC-анализ продаж',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:522px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:8px;top:8px;width:506px;height:309px;',
			height: 309,width: 506,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:164px;width:492px;height:119px;',
			height: 119,width: 492,
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
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:54px;width:207px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:218px;top:53px;width:163px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:6px;top:76px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:6px;top:100px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:171px;top:30px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:189px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Количество периодов:',
			style: 'position:absolute;left:6px;top:30px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовАнализа',
			style: 'position:absolute;left:121px;top:30px;width:48px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичность',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:6px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:121px;top:6px;width:148px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:113px;width:492px;height:170px;',
			height: 170,width: 492,
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
			style: 'position:absolute;left:6px;top:89px;width:492px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:65px;',
			height: 65,width: 492,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Группировка',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:492px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
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
			style: 'position:absolute;left:6px;top:86px;width:492px;height:197px;',
			height: 197,width: 492,
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
			style: 'position:absolute;left:6px;top:62px;width:492px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'XYZ-класс:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКласс',
			style: 'position:absolute;left:254px;top:6px;width:244px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'АВС-класс',
			style: 'position:absolute;left:6px;top:29px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКлассABC',
			style: 'position:absolute;left:254px;top:29px;width:244px;height:19px;',
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:253px;',
			height: 253,width: 492,
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
					title:'Классы',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:154px;top:30px;width:17px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрXКлассаНач',
			style: 'position:absolute;left:68px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Y-класс c: ',
			style: 'position:absolute;left:6px;top:55px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрYКлассаНач',
			style: 'position:absolute;left:68px;top:55px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Z-класс c:',
			style: 'position:absolute;left:6px;top:80px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрZКлассаНач',
			style: 'position:absolute;left:68px;top:80px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'по:',
			style: 'position:absolute;left:154px;top:55px;width:17px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'по:',
			style: 'position:absolute;left:154px;top:80px;width:17px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрXКлассаКон',
			style: 'position:absolute;left:176px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрYКлассаКон',
			style: 'position:absolute;left:176px;top:55px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрZКлассаКон',
			style: 'position:absolute;left:176px;top:80px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'X-класс c: ',
			style: 'position:absolute;left:6px;top:30px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'А-класс:',
			style: 'position:absolute;left:6px;top:144px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентAКласса',
			style: 'position:absolute;left:68px;top:144px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'B-класс:',
			style: 'position:absolute;left:6px;top:168px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентBКласса',
			style: 'position:absolute;left:68px;top:168px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'С-класс:',
			style: 'position:absolute;left:6px;top:192px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентCКласса',
			style: 'position:absolute;left:68px;top:192px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: '%',
			style: 'position:absolute;left:150px;top:168px;width:13px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: '%',
			style: 'position:absolute;left:150px;top:144px;width:13px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: '%',
			style: 'position:absolute;left:150px;top:192px;width:13px;height:19px;',
		},
					]
				},
			]
		},
	]
});