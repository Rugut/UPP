Ext.define('Отчеты.XYZABCАнализПродаж.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 350,width: 522,
	iconCls: 'bogus',
	title: 'Настройка XYZ/ABC-анализ продаж',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:522px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОК',
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
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:140px;width:492px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие5',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:189px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовАнализа',
			style: 'position:absolute;left:121px;top:30px;width:48px;height:19px;',
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
				},
				{
					text:'Тип',
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
					text:'Использование',
				},
				{
					text:'Группировка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:492px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
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
			style: 'position:absolute;left:6px;top:62px;width:492px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКласс',
			style: 'position:absolute;left:254px;top:6px;width:244px;height:19px;',
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
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрXКлассаНач',
			style: 'position:absolute;left:68px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрYКлассаНач',
			style: 'position:absolute;left:68px;top:55px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрZКлассаНач',
			style: 'position:absolute;left:68px;top:80px;width:81px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентAКласса',
			style: 'position:absolute;left:68px;top:144px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентBКласса',
			style: 'position:absolute;left:68px;top:168px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентCКласса',
			style: 'position:absolute;left:68px;top:192px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});