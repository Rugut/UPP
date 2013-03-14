Ext.define('Документы.ABCКлассификацияПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:630px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ABC-классификация покупателей',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:630px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:614px;height:290px;',
			height: 290,width: 614,
			items:
			[
				{
					title:'Распределение',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Анализировать за период с:',
			style: 'position:absolute;left:6px;top:6px;width:153px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:163px;top:6px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:244px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:265px;top:6px;width:77px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:31px;width:600px;height:24px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:600px;height:209px;',
			height: 209,width: 600,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'ABC -класс',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'220',
				},
				{
					text:'Параметр (значение)',
					width:'120',
				},
				{
					text:'Параметр (%)',
					width:'80',
				},
				{
					text:'Менеджер контрагента',
					width:'120',
				},
				{
					text:'Старый ABC-класс',
					width:'100',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:348px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПараметраРаспределения',
			text: 'ПараметрРаспределения',
			style: 'position:absolute;left:12px;top:27px;width:594px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'А-класс:',
			style: 'position:absolute;left:12px;top:72px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:66px;top:72px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'B-класс:',
			style: 'position:absolute;left:12px;top:97px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:66px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'С-класс:',
			style: 'position:absolute;left:12px;top:122px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:66px;top:122px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: '%',
			style: 'position:absolute;left:148px;top:97px;width:13px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: '%',
			style: 'position:absolute;left:148px;top:72px;width:13px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: '%',
			style: 'position:absolute;left:148px;top:122px;width:13px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:382px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:526px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:358px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:358px;width:526px;height:19px;',
		},
	]
});